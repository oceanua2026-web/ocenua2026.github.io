// Реєстрація і вхід через Firebase (email + пароль) + ролі у Firestore.
// Ролі: registered (учень), teacher (вчитель), chat_manager, editor, administrator.
// Роль НІКОЛИ не вибирається в програмі: її змінює лише адміністратор (правила Firestore це забезпечують).
(function () {
  const cfg = window.OCEANUA_FIREBASE_CONFIG || {};
  const configured = Boolean(cfg.apiKey && cfg.projectId && !/ВСТАВТЕ/.test(cfg.apiKey + cfg.projectId));
  const enabled = Boolean(configured && window.firebase);
  const PROFILE_KEYS = ['name', 'email', 'phone', 'schoolName', 'schoolCode', 'schoolAddress', 'placeName', 'placeCode', 'hromadaName', 'raionName', 'grade', 'groupName'];
  let auth = null, db = null, ready = Promise.resolve();
  const withTimeout = (promise, ms) => Promise.race([promise, new Promise((_, rej) => setTimeout(() => rej({ code: 'profile-timeout' }), ms))]);
  function buildDoc(uid, draft, wantsTeacher) {
    const ts = firebase.firestore.FieldValue.serverTimestamp();
    const doc = { uid, role: 'registered', chatAccess: false, teacherRequested: wantsTeacher, createdAt: ts, updatedAt: ts };
    PROFILE_KEYS.forEach(k => { doc[k] = String(draft[k] || ''); });
    return doc;
  }

  const api = {
    enabled,
    currentUser: () => (auth && auth.currentUser) || null,
    errorText(e) {
      const map = {
        'auth/email-already-in-use': 'Цей email уже зареєстрований. Натисніть «Увійти».',
        'auth/invalid-email': 'Невірний формат email.',
        'auth/weak-password': 'Пароль надто простий: потрібно щонайменше 8 символів.',
        'auth/invalid-credential': 'Невірний email або пароль.',
        'auth/wrong-password': 'Невірний email або пароль.',
        'auth/user-not-found': 'Користувача з таким email не знайдено.',
        'auth/too-many-requests': 'Забагато спроб. Зачекайте кілька хвилин і спробуйте знову.',
        'auth/network-request-failed': 'Немає з’єднання з інтернетом.',
        'auth/operation-not-allowed': 'У Firebase не увімкнено вхід за Email/Password (Authentication → Sign-in method).',
        'permission-denied': 'База відхилила запис: опублікуйте правила з firestore.rules (Firestore → Rules → Publish).',
        'unavailable': 'Немає зв’язку з базою Firestore. Перевірте, що Firestore Database створено (Build → Firestore Database).',
        'profile-timeout': 'Акаунт створено, але база Firestore не відповіла. Перевірте, що Firestore створено і правила опубліковано, потім натисніть «Увійти»: профіль буде дописано автоматично.'
      };
      return map[e && e.code] || ('Помилка: ' + ((e && e.message) || e));
    },
    async register(draft, password) {
      const cred = await auth.createUserWithEmailAndPassword(draft.email.trim(), password);
      const wantsTeacher = /^\s*(вчитель|учитель|teacher)\s*$/i.test(draft.groupName || '');
      const doc = buildDoc(cred.user.uid, { ...draft, email: draft.email.trim() }, wantsTeacher);
      await withTimeout(db.collection('users').doc(cred.user.uid).set(doc), 15000);
      await loadProfile(cred.user);
      return { teacherRequested: wantsTeacher };
    },
    async login(email, password) {
      const cred = await auth.signInWithEmailAndPassword(email.trim(), password);
      await loadProfile(cred.user);
    },
    async logout() {
      await auth.signOut();
      try { localStorage.removeItem('oceanua-registered-users'); } catch {}
      if (typeof clearProfile === 'function') clearProfile();
    },
    async resetPassword(email) { await auth.sendPasswordResetEmail(email.trim()); },
    // Змінювати можна тільки свої дані, але не роль (правила Firestore це забороняють).
    async updateProfile(draft) {
      const u = auth.currentUser; if (!u) return;
      const patch = { updatedAt: firebase.firestore.FieldValue.serverTimestamp() };
      PROFILE_KEYS.forEach(k => { if (k !== 'email') patch[k] = String(draft[k] || ''); });
      patch.teacherRequested = /^\s*(вчитель|учитель|teacher)\s*$/i.test(draft.groupName || '');
      await db.collection('users').doc(u.uid).update(patch);
      await loadProfile(u);
    },
    async loadAllUsers() {
      const snap = await db.collection('users').get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    async setRole(uid, role, chatAccess) {
      await db.collection('users').doc(uid).update({ role, chatAccess: Boolean(chatAccess), teacherRequested: false, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    },
    whenReady: () => ready
  };

  async function loadProfile(user) {
    const snap = await db.collection('users').doc(user.uid).get();
    if (!snap.exists) {
      // Акаунт є в Authentication, але документа в Firestore немає (напр. запис не вдався при реєстрації): дописуємо його.
      // Роль завжди «registered»: правила Firestore не дозволяють інакше.
      const local = (typeof getProfile === 'function' ? getProfile() : {}) || {};
      const draft = { ...local, email: user.email || local.email || '' };
      await withTimeout(db.collection('users').doc(user.uid).set(buildDoc(user.uid, draft, /^\s*(вчитель|учитель|teacher)\s*$/i.test(draft.groupName || ''))), 15000);
      return loadProfile(user);
    }
    const data = { uid: user.uid, ...snap.data() };
    if (typeof applyCloudProfile === 'function') applyCloudProfile(data);
    if (data.role === 'administrator') {
      try { const users = await api.loadAllUsers(); if (typeof applyCloudUsers === 'function') applyCloudUsers(users); } catch (e) { console.warn(e); }
    }
  }

  if (enabled) {
    firebase.initializeApp(cfg);
    auth = firebase.auth();
    db = firebase.firestore();
    ready = new Promise(resolve => {
      const off = auth.onAuthStateChanged(async user => {
        try { if (user) await loadProfile(user); } catch (e) { console.warn(e); }
        off(); resolve();
        if (typeof renderCurrentMenuSection === 'function') renderCurrentMenuSection();
      });
    });
  }
  window.OceanAuth = api;
}());
