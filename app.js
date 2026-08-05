const views = {
  ukraine: {
    title: "Україна",
    image: "assets/maps/ukraine.png",
    alt: "Карта України",
    aspect: 1536 / 1024,
    parent: null,
    hotspots: [
      {
        label: "Одеса",
        target: "odesa-oblast",
        x: 44.7,
        y: 75.6,
        width: 12,
        height: 8
      }
    ]
  },
  "odesa-oblast": {
    title: "Одеська область",
    image: "assets/maps/odesa-oblast.png",
    alt: "Карта Одеської області",
    aspect: 1086 / 1448,
    parent: "ukraine",
    hotspots: [
      {
        label: "Білгород-Дністровський",
        target: "bilhorod-dnistrovskyi-raion",
        x: 37,
        y: 55,
        width: 30,
        height: 14
      }
    ]
  },
  "bilhorod-dnistrovskyi-raion": {
    title: "Білгород-Дністровський район",
    image: "assets/maps/bilhorod-dnistrovskyi-raion.png",
    alt: "Карта Білгород-Дністровського району",
    aspect: 1448 / 1086,
    parent: "odesa-oblast",
    hotspots: [
      {
        label: "м. Білгород-Дністровськ",
        target: "bilhorod-dnistrovskyi-city",
        x: 57,
        y: 34,
        width: 22,
        height: 14
      }
    ]
  },
  "bilhorod-dnistrovskyi-city": {
    title: "м. Білгород-Дністровськ",
    image: "assets/maps/bilhorod-dnistrovskyi-city.png",
    alt: "Карта міста Білгород-Дністровськ",
    aspect: 1448 / 1086,
    parent: "bilhorod-dnistrovskyi-raion",
    hotspots: []
  }
};

Object.assign(views, window.OCEANUA_EXTRA_VIEWS || {});
Object.entries(window.OCEANUA_EXTRA_HOTSPOTS || {}).forEach(([viewId, hotspots]) => {
  if (!views[viewId] || !Array.isArray(hotspots)) return;
  views[viewId].hotspots = [
    ...(views[viewId].hotspots || []),
    ...hotspots
  ];
});

const menuItems = [
  { id: "cities", label: "Місто", hint: "Області, райони, громади, населені пункти" },
  { id: "flashcards", label: "Флешкартки", hint: "Класи, предмети, підручники, тести" },
  { id: "stats", label: "Статистика", hint: "Результати навчання" },
  { id: "textbooks", label: "Підручники", hint: "Класи 1-12 та електронні книги" },
  { id: "nmt", label: "НМТ", hint: "Картки для підготовки до іспитів" },
  { id: "python", label: "Python", hint: "Програмування і тести" },
  { id: "schedule", label: "Розклад", hint: "Фото або файл розкладу" },
  { id: "chat", label: "Чат", hint: "Школа, район, громада" },
  { id: "tourism", label: "Туризм", hint: "Маршрути і туристичні об'єкти" },
  { id: "ecology", label: "Екологія", hint: "Проблеми міста і об'єкти на карті" },
  { id: "grants", label: "Гранти", hint: "Можливості для організацій" },
  { id: "settings", label: "Налаштування", hint: "Клас, підручники, місто, школа" },
  { id: "about", label: "Про програму", hint: "Власник, зв'язок, карти" },
  { id: "exit", label: "Вихід з профілю", hint: "Підтвердження переходу в режим гостя" }
];

const schoolSubjectsByGrade = {
  1: ["Українська мова", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Я досліджую світ", "Мистецтво", "Фізична культура", "Дизайн і технології"],
  2: ["Українська мова", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Я досліджую світ", "Інформатика", "Мистецтво", "Фізична культура", "Дизайн і технології"],
  3: ["Українська мова", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Я досліджую світ", "Інформатика", "Мистецтво", "Фізична культура", "Дизайн і технології"],
  4: ["Українська мова", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Я досліджую світ", "Інформатика", "Мистецтво", "Фізична культура", "Дизайн і технології"],
  5: ["Українська мова", "Українська література", "Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Пізнаємо природу / Природничі науки / Довкілля", "Вступ до історії України та громадянської освіти", "Здоров’я, безпека та добробут", "Етика / курси морального спрямування", "Технології", "Інформатика", "Мистецтво", "Фізична культура", "Мова та література корінного народу або національної меншини"],
  6: ["Українська мова", "Українська література", "Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Математика", "Пізнаємо природу / Природничі науки / Довкілля", "Географія", "Історія України", "Всесвітня історія", "Здоров’я, безпека та добробут", "Етика / курси морального спрямування", "Технології", "Інформатика", "Мистецтво", "Фізична культура", "Мова та література корінного народу або національної меншини"],
  7: ["Українська мова", "Українська література", "Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Алгебра", "Геометрія", "Біологія", "Географія", "Фізика", "Хімія", "Історія України", "Всесвітня історія", "Здоров’я, безпека та добробут", "Технології", "Інформатика", "Мистецтво", "Фізична культура", "Мова та література корінного народу або національної меншини"],
  8: ["Українська мова", "Українська література", "Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Алгебра", "Геометрія", "Біологія", "Географія", "Фізика", "Хімія", "Історія України", "Всесвітня історія", "Здоров’я, безпека та добробут", "Технології", "Інформатика", "Мистецтво", "Фізична культура", "Мова та література корінного народу або національної меншини"],
  9: ["Українська мова", "Українська література", "Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Алгебра", "Геометрія", "Біологія", "Географія", "Фізика", "Хімія", "Історія України", "Всесвітня історія", "Правознавство / громадянська освіта", "Здоров’я, безпека та добробут", "Технології", "Інформатика", "Мистецтво", "Фізична культура", "Мова та література корінного народу або національної меншини"],
  10: ["Українська мова", "Інтегрований курс літератур / Українська література / Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Математика / Алгебра / Геометрія", "Інтегрований курс історії та громадянської освіти / Історія України / Всесвітня історія / Громадянська освіта", "Фізична культура", "Інтегрований курс природничої освітньої галузі", "Інтегрований курс соціальної і здоров’язбережувальної освітньої галузі", "Захист України", "Інформатика", "Технології", "Інтегрований курс «Мистецтво»", "Мови та літератури корінних народів або національних меншин", "Біологія", "Хімія", "Фізика", "Географія", "Інтегрований курс «Мистецтво» / Музичне мистецтво / Образотворче мистецтво"],
  11: ["Українська мова", "Інтегрований курс літератур / Українська література / Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Математика / Алгебра / Геометрія", "Інтегрований курс історії та громадянської освіти / Історія України / Всесвітня історія / Громадянська освіта", "Фізична культура", "Інтегрований курс природничої освітньої галузі", "Інтегрований курс соціальної і здоров’язбережувальної освітньої галузі", "Захист України", "Інформатика", "Технології", "Інтегрований курс «Мистецтво»", "Мови та літератури корінних народів або національних меншин", "Біологія", "Хімія", "Фізика", "Географія", "Інтегрований курс «Мистецтво» / Музичне мистецтво / Образотворче мистецтво"],
  12: ["Українська мова", "Інтегрований курс літератур / Українська література / Зарубіжна література", "Англійська мова", "Німецька мова", "Французька мова", "Математика / Алгебра / Геометрія", "Інтегрований курс історії та громадянської освіти / Історія України / Всесвітня історія / Громадянська освіта", "Фізична культура", "Інтегрований курс природничої освітньої галузі", "Інтегрований курс соціальної і здоров’язбережувальної освітньої галузі", "Захист України", "Інформатика", "Технології", "Інтегрований курс «Мистецтво»", "Мови та літератури корінних народів або національних меншин", "Біологія", "Хімія", "Фізика", "Географія", "Інтегрований курс «Мистецтво» / Музичне мистецтво / Образотворче мистецтво"]
};

const places = window.OCEANUA_PLACES || { oblasts: [] };
const nmtData = window.OCEANUA_NMT || { years: {} };
const gradeFlashcardCatalog = window.OCEANUA_GRADE_FLASHCARDS || { grades: {} };
const mappedSchools = Array.isArray(window.OCEANUA_SCHOOLS) ? window.OCEANUA_SCHOOLS : [];
const mapLinks = window.OCEANUA_MAP_LINKS || {};
const schoolChats = window.OCEANUA_SCHOOL_CHATS || {};
const profileStorageKey = "oceanua-profile";
const registeredUsersStorageKey = "oceanua-registered-users";
const adminProposalsStorageKey = "oceanua-admin-proposals";
const nmtStatsStorageKey = "oceanua-nmt-statistics";
const schoolArticlesStorageKey = "oceanua-school-articles";
const settlementMapTargets = {
  UA51040010010048834: "bilhorod-dnistrovskyi-city",
  UA51100270010076757: "odesa-oblast",
  ...(mapLinks.settlementMapTargets || {})
};
const mapCanvas = document.getElementById("mapCanvas");
const mapImage = document.getElementById("mapImage");
const mapBackground = document.getElementById("mapBackground");
const hotspotsLayer = document.getElementById("hotspotsLayer");
const mapSchoolList = document.getElementById("mapSchoolList");
const mapControls = document.getElementById("mapControls");
const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");
const viewTitle = document.getElementById("viewTitle");
const mapMessage = document.getElementById("mapMessage");
const menuToggle = document.getElementById("menuToggle");
const profileEntry = document.getElementById("profileEntry");
const profileEntryText = document.getElementById("profileEntryText");
const mainMenu = document.getElementById("mainMenu");
const closeMenuButton = document.getElementById("closeMenu");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const menuList = document.getElementById("menuList");
const menuContent = document.getElementById("menuContent");
const profileStatus = document.getElementById("profileStatus");

let currentViewId = "ukraine";
let suppressHashChange = false;
let activeMenuId = "cities";
let activeSubmenuId = "";
let selectedLearningGrade = "";
let selectedFlashcardGrade = "11";
let selectedFlashcardSubject = "";
let selectedFlashcardCardIndex = 0;
let selectedFlashcardVariantIndex = 0;
let selectedPythonSubject = "python_basics";
let selectedPythonCardIndex = 0;
let selectedPythonVariantIndex = 0;
let selectedNmtYear = "2025";
let selectedNmtSubject = "";
let selectedNmtCardIndex = 0;
let selectedNmtVariantIndex = 0;
let activeNmtSessionId = "";
let selectedStatsSessionId = "";
const nmtDraftSelections = {};
let selectedOblastIndex = -1;
let selectedRaionIndex = -1;
let selectedHromadaIndex = -1;
let searchIndex = null;
let profilePlaceSelectionMode = false;

function normalizeText(value) {
  return String(value || "").trim().toLocaleLowerCase("uk-UA");
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function formatDetails(parts) {
  return parts.filter(Boolean).join(" · ");
}

function setHash(viewId) {
  suppressHashChange = true;
  if (viewId === "ukraine") {
    history.pushState(null, "", location.pathname + location.search);
  } else {
    location.hash = viewId;
  }
  window.setTimeout(() => {
    suppressHashChange = false;
  }, 0);
}

function openView(viewId, updateHash = true) {
  const view = views[viewId] || views.ukraine;
  currentViewId = views[viewId] ? viewId : "ukraine";

  mapCanvas.style.setProperty("--aspect", String(view.aspect));
  mapImage.src = view.image;
  mapImage.alt = view.alt;
  mapBackground.style.setProperty("--map-bg", `url("${view.image}")`);
  viewTitle.textContent = view.title;
  mapControls.hidden = currentViewId === "ukraine";
  mapMessage.hidden = true;
  mapMessage.textContent = "";

  renderHotspots(view.hotspots);
  renderSchoolMapList(view.hotspots);

  if (updateHash) {
    setHash(currentViewId);
  }
}

function renderHotspots(hotspots) {
  hotspotsLayer.innerHTML = "";

  hotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    const isSchoolMarker = hotspot.kind === "school";
    button.className = isSchoolMarker ? "hotspot school-marker" : "hotspot";
    button.type = "button";
    button.setAttribute("aria-label", hotspot.label);
    button.style.left = `${hotspot.x}%`;
    button.style.top = `${hotspot.y}%`;
    button.style.width = `${hotspot.width}%`;
    button.style.height = `${hotspot.height}%`;
    if (isSchoolMarker) {
      button.innerHTML = `<span class="school-marker-number">${escapeHtml(String(hotspot.number || ""))}</span>`;
    }
    button.addEventListener("click", () => {
      if (isSchoolMarker) {
        const school = schoolChats[hotspot.schoolId];
        if (!school) {
          showMenuNotice(`Для "${hotspot.label}" дані школи ще не підключені.`);
          return;
        }
        renderSchoolSite({ id: hotspot.schoolId, ...school });
        return;
      }

      if (mainMenu.classList.contains("is-open") || menuContent.classList.contains("is-open")) {
        closeMenu();
      }
      openView(hotspot.target);
    });
    hotspotsLayer.appendChild(button);
  });
}

function renderSchoolMapList(hotspots = []) {
  if (!mapSchoolList) return;
  const schoolHotspots = hotspots
    .filter((hotspot) => hotspot.kind === "school" && schoolChats[hotspot.schoolId])
    .sort((a, b) => Number(a.number || 0) - Number(b.number || 0));

  if (!schoolHotspots.length) {
    mapSchoolList.hidden = true;
    mapSchoolList.innerHTML = "";
    return;
  }

  mapSchoolList.innerHTML = `
    <strong>Школи громади</strong>
    <div class="school-map-list-items">
      ${schoolHotspots.map((hotspot) => {
        const school = schoolChats[hotspot.schoolId];
        return `
          <button class="school-map-list-item" type="button" data-school-id="${escapeHtml(hotspot.schoolId)}">
            <span>${escapeHtml(String(hotspot.number || ""))}</span>
            <em>${escapeHtml(school.name || hotspot.label || "Школа")}</em>
          </button>
        `;
      }).join("")}
    </div>
  `;
  mapSchoolList.hidden = false;
  mapSchoolList.querySelectorAll("[data-school-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const school = schoolChats[button.dataset.schoolId];
      if (school) renderSchoolSite({ id: button.dataset.schoolId, ...school });
    });
  });
}

function goBack() {
  const view = views[currentViewId] || views.ukraine;
  openView(view.parent || "ukraine");
}

function showLoadError() {
  mapMessage.textContent = "Не вдалося завантажити карту. Перевірте, що файл знаходиться всередині папки OceanUA.";
  mapMessage.hidden = false;
}

function getProfile() {
  try {
    return JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveProfile(profile) {
  const normalizedProfile = {
    ...profile,
    name: String(profile.name || "").trim(),
    schoolName: String(profile.schoolName || "").trim(),
    email: String(profile.email || "").trim(),
    phone: String(profile.phone || "").trim()
  };
  const registration = syncRegisteredUser(normalizedProfile);
  const profileToStore = registration.user
    ? {
      ...normalizedProfile,
      id: registration.user.id,
      role: registration.user.role,
      chatAccess: registration.user.chatAccess
    }
    : normalizedProfile;
  localStorage.setItem(profileStorageKey, JSON.stringify(profileToStore));
  updateProfileStatus();
  return registration;
}

function getRegisteredUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(registeredUsersStorageKey) || "[]");
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function saveRegisteredUsers(users) {
  localStorage.setItem(registeredUsersStorageKey, JSON.stringify(users));
  syncCurrentProfilePermissions(users);
}

function getAdminProposals() {
  try {
    const proposals = JSON.parse(localStorage.getItem(adminProposalsStorageKey) || "[]");
    return Array.isArray(proposals) ? proposals : [];
  } catch {
    return [];
  }
}

function saveAdminProposals(proposals) {
  localStorage.setItem(adminProposalsStorageKey, JSON.stringify(proposals));
}

function normalizeEmail(value) {
  return String(value || "").trim().toLocaleLowerCase("uk-UA");
}

function buildUserId(profile) {
  const email = normalizeEmail(profile.email);
  if (email) return `email:${email}`;
  const phone = String(profile.phone || "").replace(/[^\d+]/g, "");
  if (phone) return `phone:${phone}`;
  return "";
}

function isRegistrationComplete(profile) {
  return Boolean(
    String(profile.name || "").trim() &&
    normalizeEmail(profile.email) &&
    String(profile.phone || "").trim()
  );
}

function syncRegisteredUser(profile) {
  if (!isRegistrationComplete(profile)) {
    return { user: null, registered: false, firstAdmin: false };
  }

  const users = getRegisteredUsers();
  const id = profile.id || buildUserId(profile);
  const existingIndex = users.findIndex((user) => user.id === id || normalizeEmail(user.email) === normalizeEmail(profile.email));
  const existing = existingIndex >= 0 ? users[existingIndex] : null;
  const firstAdmin = !users.length && !existing;
  const now = new Date().toISOString();
  const user = {
    id,
    name: profile.name,
    schoolName: profile.schoolName || "",
    schoolCode: profile.schoolCode || "",
    email: profile.email,
    phone: profile.phone,
    grade: profile.grade || "",
    city: profile.placeName || profile.city || "",
    placeCode: profile.placeCode || "",
    role: existing ? existing.role : (firstAdmin ? "administrator" : "registered"),
    chatAccess: existing ? Boolean(existing.chatAccess) : Boolean(firstAdmin),
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };

  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem(registeredUsersStorageKey, JSON.stringify(users));
  return { user, registered: true, firstAdmin };
}

function getCurrentRegisteredUser() {
  const profile = getProfile();
  const email = normalizeEmail(profile.email);
  const id = profile.id || buildUserId(profile);
  return getRegisteredUsers().find((user) =>
    (id && user.id === id) ||
    (email && normalizeEmail(user.email) === email)
  ) || null;
}

function syncCurrentProfilePermissions(users = getRegisteredUsers()) {
  const profile = getProfile();
  const email = normalizeEmail(profile.email);
  const id = profile.id || buildUserId(profile);
  const user = users.find((item) =>
    (id && item.id === id) ||
    (email && normalizeEmail(item.email) === email)
  );
  if (!user) return;
  localStorage.setItem(profileStorageKey, JSON.stringify({
    ...profile,
    id: user.id,
    role: user.role,
    chatAccess: user.chatAccess
  }));
  updateProfileStatus();
}

function isAdminProfile() {
  const profile = getProfile();
  const user = getCurrentRegisteredUser();
  return profile.role === "administrator" || user?.role === "administrator";
}

function canManageChats() {
  const profile = getProfile();
  const user = getCurrentRegisteredUser();
  return isAdminProfile() || Boolean(profile.chatAccess || user?.chatAccess);
}

function getStatsUserKey() {
  const profile = getProfile();
  const name = profile.name?.trim();
  return name || profile.placeCode || "guest";
}

function getNmtStats() {
  try {
    const stats = JSON.parse(localStorage.getItem(nmtStatsStorageKey) || "{}");
    return {
      sessions: Array.isArray(stats.sessions) ? stats.sessions : []
    };
  } catch {
    return { sessions: [] };
  }
}

function saveNmtStats(stats) {
  localStorage.setItem(nmtStatsStorageKey, JSON.stringify({
    sessions: Array.isArray(stats.sessions) ? stats.sessions : []
  }));
}

function getNmtSessionLabel(session) {
  return `${session.yearLabel || session.yearId || "НМТ"} · ${session.subjectLabel || session.subjectId || "предмет"} · ${session.variantLabel || "варіант"}`;
}

function formatDateTime(value) {
  if (!value) return "-";
  try {
    return new Intl.DateTimeFormat("uk-UA", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function getActiveLearningGrade() {
  const profile = getProfile();
  const grade = String(profile.grade || selectedLearningGrade || "1");
  return schoolSubjectsByGrade[grade] ? grade : "1";
}

function setActiveLearningGrade(grade) {
  selectedLearningGrade = String(grade);
  const profile = getProfile();
  if (profile.name?.trim()) {
    saveProfile({
      ...profile,
      grade: selectedLearningGrade
    });
  }
}

function getSubjectsForGrade(grade) {
  return schoolSubjectsByGrade[grade] || schoolSubjectsByGrade[1];
}

function getFlashcardYearKey(grade) {
  return `grade-${grade}`;
}

function getFlashcardGrades() {
  const configured = Object.keys(gradeFlashcardCatalog.grades || {});
  return configured.length ? configured.sort((a, b) => Number(a) - Number(b)) : ["11"];
}

function getDefaultFlashcardGrade() {
  const profileGrade = String(getProfile().grade || "");
  const grades = getFlashcardGrades();
  return grades.includes(profileGrade) ? profileGrade : (grades.includes("11") ? "11" : grades[0]);
}

function buildFlashcardGradeData(grade) {
  const config = gradeFlashcardCatalog.grades?.[grade];
  if (!config) {
    return {
      label: `${grade} клас`,
      description: "",
      subjects: {},
      pendingSubjects: getSubjectsForGrade(grade)
    };
  }

  const subjects = {};
  (config.subjects || []).forEach((subjectConfig) => {
    const sourceYears = subjectConfig.sourceYears || config.sourceYears || getNmtYearIds();
    const variants = [];

    sourceYears.forEach((sourceYear) => {
      const sourceSubject = nmtData.years?.[sourceYear]?.subjects?.[subjectConfig.id];
      if (!sourceSubject) return;

      (sourceSubject.variants || []).forEach((variant, index) => {
        variants.push({
          ...variant,
          id: `${sourceYear}_${getNmtVariantId(variant, index)}`,
          label: variant.label || `Варіант ${index + 1}`,
          session: `${sourceYear}${variant.session ? ` · ${variant.session}` : ""}`,
          sourceYear,
          sourceSubjectId: subjectConfig.id
        });
      });
    });

    if (variants.length) {
      subjects[subjectConfig.id] = {
        id: subjectConfig.id,
        label: subjectConfig.label || subjects[subjectConfig.id]?.label || subjectConfig.id,
        variants
      };
    }
  });

  return {
    label: config.label || `${grade} клас`,
    description: config.description || "",
    subjects,
    pendingSubjects: config.pendingSubjects || []
  };
}

function getFlashcardGradeData(grade) {
  const key = getFlashcardYearKey(grade);
  const data = buildFlashcardGradeData(grade);
  nmtData.years[key] = data;
  return data;
}

function normalizePhone(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

function clearProfilePlaceData(profile) {
  return {
    ...profile,
    city: "",
    placeName: "",
    placeType: "",
    placeCode: "",
    oblastName: "",
    raionName: "",
    hromadaName: "",
    hromadaCenter: ""
  };
}

function resetProfileForNewIdentity(profile) {
  const nextProfile = clearProfilePlaceData(profile);
  delete nextProfile.id;
  delete nextProfile.role;
  delete nextProfile.chatAccess;
  return nextProfile;
}

function hasProfileIdentityChanged(currentProfile, draftProfile) {
  const currentEmail = normalizeEmail(currentProfile.email);
  const draftEmail = normalizeEmail(draftProfile.email);
  const currentPhone = normalizePhone(currentProfile.phone);
  const draftPhone = normalizePhone(draftProfile.phone);
  if (currentEmail || draftEmail) return currentEmail !== draftEmail;
  if (currentPhone || draftPhone) return currentPhone !== draftPhone;
  return false;
}

function readProfileFormDraft(options = {}) {
  const currentProfile = getProfile();
  const schoolName = document.getElementById("profileSchool")?.value.trim() || "";
  const draft = {
    ...currentProfile,
    name: document.getElementById("profileName")?.value.trim() || "",
    schoolName,
    email: document.getElementById("profileEmail")?.value.trim() || "",
    phone: document.getElementById("profilePhone")?.value.trim() || "",
    grade: document.getElementById("profileClass")?.value || ""
  };

  if (normalizeText(currentProfile.schoolName) !== normalizeText(schoolName)) {
    delete draft.schoolCode;
    delete draft.schoolAddress;
    delete draft.schoolPlaceCode;
  }

  if (options.clearPlaceOnIdentityChange && hasProfileIdentityChanged(currentProfile, draft)) {
    return resetProfileForNewIdentity(draft);
  }

  return draft;
}

function saveProfileDraftFromSettings(options = {}) {
  const draft = readProfileFormDraft(options);
  localStorage.setItem(profileStorageKey, JSON.stringify(draft));
  updateProfileStatus();
  return draft;
}

function completeProfilePlaceSelection(name, type, context = {}) {
  if (!profilePlaceSelectionMode) return false;

  const code = context.code || "";
  if (!code) {
    showMenuNotice("Для реєстрації виберіть конкретний населений пункт зі списку, а не тільки область або район.");
    return true;
  }

  profilePlaceSelectionMode = false;
  saveProfilePlace({
    ...context,
    name,
    type
  });
  openSubmenu("settings");
  showMenuNotice("Місто збережено у профілі. Перевірте дані та натисніть «Зберегти профіль».");
  return true;
}

function getSchoolName(school) {
  return school.name_uk || school.name || school.schoolName || school.title || "";
}

function getSchoolCode(school) {
  return school.code || school.official_code || school.officialCode || school.id || "";
}

function getSchoolPlaceCode(school) {
  return school.placeCode || school.settlementCode || school.katottg_code || school.katottgCode || "";
}

function getSchoolAddress(school) {
  return school.address || school.address_uk || "";
}

function getProfileSchoolMatches(profile) {
  const placeCode = profile.placeCode || "";
  if (!mappedSchools.length) return [];
  const filtered = placeCode
    ? mappedSchools.filter((school) => getSchoolPlaceCode(school) === placeCode)
    : mappedSchools;
  return filtered
    .map((school) => ({
      name: getSchoolName(school),
      code: getSchoolCode(school),
      address: getSchoolAddress(school),
      placeCode: getSchoolPlaceCode(school)
    }))
    .filter((school) => school.name);
}

function saveProfilePlace(place) {
  if (!place?.code) return;
  const profile = getProfile();
  const placeChanged = Boolean(profile.placeCode && profile.placeCode !== place.code);
  saveProfile({
    ...profile,
    city: place.name || "",
    placeName: place.name || "",
    placeType: place.type || "населений пункт",
    placeCode: place.code || "",
    oblastName: place.oblastName || "",
    raionName: place.raionName || "",
    hromadaName: place.hromadaName || "",
    hromadaCenter: place.hromadaCenter || "",
    schoolName: placeChanged ? "" : profile.schoolName || "",
    schoolCode: placeChanged ? "" : profile.schoolCode || "",
    schoolAddress: placeChanged ? "" : profile.schoolAddress || "",
    schoolPlaceCode: placeChanged ? "" : profile.schoolPlaceCode || ""
  });
}

function clearProfile() {
  localStorage.removeItem(profileStorageKey);
  updateProfileStatus();
}

function updateProfileStatus() {
  const profile = getProfile();
  const name = profile.name?.trim();
  const user = getCurrentRegisteredUser();
  const place = profile.placeCode ? ` Населений пункт: ${profile.placeName || profile.city}.` : "";
  const role = user?.role || profile.role || "";
  const roleText = role === "administrator"
    ? " Адміністратор."
    : canManageChats()
      ? " Може вести чати."
      : "";
  profileStatus.textContent = name
    ? `${name}.${place}${roleText} Статистика буде зберігатися локально.`
    : `Гість.${place} Статистика не зберігається.`;
  profileEntryText.textContent = name || "Зареєструватися";
  profileEntry.setAttribute("aria-label", name ? `Профіль: ${name}` : "Зареєструватися");
}

function openMenu(sectionId = "") {
  mainMenu.classList.add("is-open");
  mainMenu.setAttribute("aria-hidden", "false");
  drawerBackdrop.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
  renderMenu(activeMenuId);
  if (sectionId) {
    openSubmenu(sectionId);
  }
}

function closeMenu() {
  mainMenu.classList.remove("is-open");
  mainMenu.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  closeSubmenu();
}

function openSubmenu(sectionId) {
  activeMenuId = sectionId;
  activeSubmenuId = sectionId;
  menuContent.dataset.activeSection = sectionId;
  renderMenuContent(sectionId);
  menuContent.classList.add("is-open");
  menuContent.setAttribute("aria-hidden", "false");
  renderMenu(sectionId);
}

function closeSubmenu() {
  activeSubmenuId = "";
  menuContent.classList.remove("is-open");
  menuContent.setAttribute("aria-hidden", "true");
  menuContent.removeAttribute("data-active-section");
  menuContent.innerHTML = "";
  renderMenu(activeMenuId);
}

function toggleSubmenu(sectionId) {
  if (activeSubmenuId === sectionId && menuContent.classList.contains("is-open")) {
    closeSubmenu();
    return;
  }
  openSubmenu(sectionId);
}

function renderMenu(sectionId = activeMenuId) {
  activeMenuId = sectionId;
  menuList.innerHTML = menuItems.map((item) => `
    <button class="menu-item${item.id === activeSubmenuId ? " is-active" : ""}" type="button" data-menu-id="${item.id}">
      <strong>${item.label}</strong>
      <span>${item.hint}</span>
    </button>
  `).join("");

  menuList.querySelectorAll("[data-menu-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.menuId;
      toggleSubmenu(id);
    });
  });
}

function renderMenuContent(sectionId) {
  if (sectionId === "cities") {
    renderCitiesSection();
    return;
  }

  if (sectionId === "flashcards") {
    renderFlashcardsSection();
    return;
  }

  if (sectionId === "textbooks") {
    renderLearningSection("Підручники", "Тут буде вибір підручників України за класами, авторами і предметами.", true);
    return;
  }

  if (sectionId === "settings") {
    renderSettingsSection();
    return;
  }

  const renderers = {
    stats: renderStatsSection,
    nmt: renderNmtSection,
    python: renderPythonSection,
    schedule: () => renderStaticSection("Розклад", [
      "Сторінка для фото або файлу з розкладом уроків.",
      "Редагування розкладу буде прив'язане до користувачів з відповідним доступом."
    ]),
    chat: renderChatSection,
    tourism: () => renderStaticSection("Туризм", [
      "Майбутній розділ для туристичних маршрутів, об'єктів на карті і чату історії міста.",
      "Дані будуть прив'язуватися до населених пунктів та об'єктів на карті."
    ]),
    ecology: () => renderStaticSection("Екологія", [
      "Майбутній розділ для екологічних проблем міста і пов'язаних об'єктів на карті.",
      "Пізніше його можна зв'язати з місцевими чатами та сторінками громад."
    ]),
    grants: () => renderStaticSection("Гранти", [
      "Майбутній розділ для грантів від різних організацій.",
      "Пізніше тут буде фільтр за містом, громадою, напрямом і організацією."
    ]),
    about: () => renderStaticSection("Про програму", [
      "Авторське право © Бортник В. М., 2026. Усі права захищено.",
      "Версія від 05.08.2026, 03:49"
    ]),
    exit: renderExitSection
  };

  (renderers[sectionId] || renderers.about)();
}

function buildSearchIndex() {
  if (searchIndex) return searchIndex;
  const items = [];

  places.oblasts.forEach((oblast, oblastIndex) => {
    items.push({
      type: "область",
      name: oblast.name,
      subtitle: `Центр: ${oblast.center}`,
      oblastIndex,
      searchable: normalizeText(`${oblast.name} ${oblast.center}`)
    });

    oblast.raions.forEach((raion, raionIndex) => {
      items.push({
        type: "район",
        name: raion.name,
        subtitle: `${oblast.name}. Центр: ${raion.center}`,
        oblastIndex,
        raionIndex,
        searchable: normalizeText(`${raion.name} ${raion.center} ${oblast.name}`)
      });

      raion.hromadas.forEach((hromada, hromadaIndex) => {
        items.push({
          type: "громада",
          name: hromada.name,
          subtitle: `${raion.name}. Центр: ${hromada.center}`,
          oblastIndex,
          raionIndex,
          hromadaIndex,
          searchable: normalizeText(`${hromada.name} ${hromada.center} ${raion.name} ${oblast.name}`)
        });

        hromada.settlements.forEach((settlement) => {
          items.push({
            type: settlement.type || "населений пункт",
            name: settlement.name,
            code: settlement.code || "",
            subtitle: `${hromada.name}, ${raion.name}`,
            oblastIndex,
            raionIndex,
            hromadaIndex,
            searchable: normalizeText(`${settlement.name} ${settlement.type} ${settlement.code || ""} ${hromada.name} ${raion.name} ${oblast.name}`)
          });
        });
      });
    });
  });

  searchIndex = items;
  return searchIndex;
}

function renderCitiesSection() {
  const oblastCount = places.oblastCount || places.oblasts.length;
  const hromadaCount = places.oblasts.reduce((sum, oblast) => sum + Number(oblast.hromadaCount || 0), 0);
  const settlementCount = places.oblasts.reduce((sum, oblast) => sum + Number(oblast.settlementCount || 0), 0);

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Довідник</span>
      <h2>Місто</h2>
      <p>Пошук по Україні та дерево: область -> район -> громада -> населений пункт.</p>
    </div>
    <div class="stats-strip">
      <div><strong>${oblastCount}</strong><span>областей у файлах</span></div>
      <div><strong>${hromadaCount}</strong><span>громад</span></div>
      <div><strong>${settlementCount}</strong><span>населених пунктів</span></div>
    </div>
    <label class="field-label" for="placeSearch">Пошук міста або громади</label>
    <input class="text-field" id="placeSearch" type="search" placeholder="Наприклад: Одеса, Шабо, Білгород-Дністровський">
    <div class="search-results" id="placeSearchResults"></div>
    <div class="city-browser">
      <div class="place-tree" id="placeTree"></div>
    </div>
  `;

  const odesaIndex = places.oblasts.findIndex((oblast) => normalizeText(oblast.name).includes("одесь"));
  if (selectedOblastIndex < 0 && odesaIndex >= 0) {
    selectedOblastIndex = odesaIndex;
  }
  if (selectedOblastIndex < 0 && places.oblasts.length) {
    selectedOblastIndex = 0;
  }

  bindPlaceSearch();
  renderPlaceColumns();
}

function bindPlaceSearch() {
  const input = document.getElementById("placeSearch");
  const results = document.getElementById("placeSearchResults");

  input.addEventListener("input", () => {
    const query = normalizeText(input.value);
    if (query.length < 2) {
      results.innerHTML = "";
      return;
    }

    const matches = buildSearchIndex()
      .filter((item) => item.searchable.includes(query))
      .slice(0, 30);

    results.innerHTML = matches.length
      ? matches.map((item, index) => `
        <button class="result-row" type="button" data-result-index="${index}">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.type)} · ${escapeHtml(item.subtitle)}${item.code ? ` · ${escapeHtml(item.code)}` : ""}</span>
        </button>
      `).join("")
      : `<p class="empty-text">Нічого не знайдено.</p>`;

    results.querySelectorAll("[data-result-index]").forEach((button) => {
      const item = matches[Number(button.dataset.resultIndex)];
      button.addEventListener("click", () => selectPlaceItem(item));
    });
  });
}

function renderPlaceColumns() {
  const placeTree = document.getElementById("placeTree");
  if (!placeTree) return;

  if (selectedOblastIndex < 0 || selectedOblastIndex >= places.oblasts.length) {
    selectedOblastIndex = places.oblasts.length ? 0 : -1;
  }

  const oblast = places.oblasts[selectedOblastIndex];
  const raions = oblast?.raions || [];

  if (selectedRaionIndex >= raions.length) {
    selectedRaionIndex = -1;
  }

  const raion = selectedRaionIndex >= 0 ? raions[selectedRaionIndex] : null;
  const hromadas = raion?.hromadas || [];

  if (selectedHromadaIndex >= hromadas.length) {
    selectedHromadaIndex = -1;
  }

  placeTree.innerHTML = places.oblasts.map((item, index) => `
    <button class="option-row${index === selectedOblastIndex ? " is-selected" : ""}" type="button" data-oblast-index="${index}">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${item.raionCount} районів · ${item.hromadaCount} громад · ${item.settlementCount} н.п.</span>
    </button>
    ${index === selectedOblastIndex ? renderRaionTree(item.raions || []) : ""}
  `).join("");

  placeTree.querySelectorAll("[data-oblast-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedOblastIndex = Number(button.dataset.oblastIndex);
      selectedRaionIndex = -1;
      selectedHromadaIndex = -1;
      renderPlaceColumns();
      const selected = places.oblasts[selectedOblastIndex];
      if (profilePlaceSelectionMode) {
        showMenuNotice("Для реєстрації розкрийте область і район, потім виберіть конкретний населений пункт.");
        return;
      }
      maybeOpenMapForName(selected.name, "область", false, selected.center);
    });
  });

  placeTree.querySelectorAll("[data-raion-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRaionIndex = Number(button.dataset.raionIndex);
      selectedHromadaIndex = -1;
      renderPlaceColumns();
      const selected = places.oblasts[selectedOblastIndex]?.raions[selectedRaionIndex];
      if (profilePlaceSelectionMode) {
        showMenuNotice("Для реєстрації виберіть громаду і конкретний населений пункт зі списку.");
        return;
      }
      maybeOpenMapForName(selected?.name, "район", false, selected?.center);
    });
  });

  placeTree.querySelectorAll("[data-hromada-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedHromadaIndex = Number(button.dataset.hromadaIndex);
      renderPlaceColumns();
    });
  });

  placeTree.querySelectorAll("[data-settlement-code]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedRaion = places.oblasts[selectedOblastIndex]?.raions[selectedRaionIndex];
      const selectedHromada = selectedRaion?.hromadas[selectedHromadaIndex];
      const settlementCode = button.dataset.settlementCode;
      const settlementName = button.dataset.settlementName;
      const settlement = selectedHromada?.settlements.find((item) => item.code === settlementCode)
        || selectedHromada?.settlements.find((item) => item.name === settlementName);
      const context = {
        ...getPlaceContext({
          name: settlementName,
          type: settlement?.type || "населений пункт",
          code: settlement?.code || settlementCode || "",
          oblastIndex: selectedOblastIndex,
          raionIndex: selectedRaionIndex,
          hromadaIndex: selectedHromadaIndex
        }),
        openCommunitySite: true
      };
      if (completeProfilePlaceSelection(settlementName, settlement?.type || "населений пункт", context)) return;
      maybeOpenMapForName(settlementName, settlement?.type || "населений пункт", true, context);
    });
  });
}

function renderRaionTree(raions) {
  if (!raions.length) {
    return `<div class="tree-level tree-level-raions"><p class="empty-text">Райони ще не додані.</p></div>`;
  }

  return `
    <div class="tree-level tree-level-raions">
      ${raions.map((item, index) => `
      <button class="option-row${index === selectedRaionIndex ? " is-selected" : ""}" type="button" data-raion-index="${index}">
        <strong>${escapeHtml(item.name)}</strong>
        <span>Центр: ${escapeHtml(item.center)} · ${item.hromadaCount} громад · ${item.settlementCount} н.п.</span>
      </button>
      ${index === selectedRaionIndex ? renderHromadaTree(item.hromadas || []) : ""}
    `).join("")}
    </div>
  `;
}

function renderHromadaTree(hromadas) {
  if (!hromadas.length) {
    return `<div class="tree-level tree-level-hromadas"><p class="empty-text">Громади ще не додані.</p></div>`;
  }

  return `
    <div class="tree-level tree-level-hromadas">
      ${hromadas.map((item, index) => `
      <button class="option-row${index === selectedHromadaIndex ? " is-selected" : ""}" type="button" data-hromada-index="${index}">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.type)} · центр: ${escapeHtml(item.center)} · ${item.settlementCount} н.п.</span>
      </button>
      ${index === selectedHromadaIndex ? renderSettlementList(item) : ""}
    `).join("")}
    </div>
  `;
}

function renderSettlementList(hromada) {
  if (!hromada) return "";
  const rows = hromada.settlements.map((settlement) => `
    <button class="settlement-chip" type="button" data-settlement-code="${escapeHtml(settlement.code || "")}" data-settlement-name="${escapeHtml(settlement.name)}">
      ${escapeHtml(settlement.type)} ${escapeHtml(settlement.name)}
    </button>
  `).join("");
  return `<div class="settlement-list">${rows || `<p class="empty-text">Населені пункти ще не додані.</p>`}</div>`;
}

function selectPlaceItem(item) {
  selectedOblastIndex = item.oblastIndex ?? selectedOblastIndex;
  selectedRaionIndex = item.raionIndex ?? -1;
  selectedHromadaIndex = item.hromadaIndex ?? -1;
  renderPlaceColumns();
  const context = {
    ...getPlaceContext(item),
    openCommunitySite: isCommunityLevel(item.type)
  };
  if (completeProfilePlaceSelection(item.name, item.type, context)) return;
  maybeOpenMapForName(item.name, item.type, true, context);
}

function isCommunityLevel(type) {
  const normalizedType = normalizeText(type);
  return normalizedType !== "область" && normalizedType !== "район";
}

function getPlaceContext(item = {}) {
  const oblast = places.oblasts[item.oblastIndex];
  const raion = oblast?.raions?.[item.raionIndex];
  const hromada = raion?.hromadas?.[item.hromadaIndex];

  return {
    type: item.type || "населений пункт",
    name: item.name || "",
    code: item.code || "",
    subtitle: item.subtitle || "",
    oblastName: oblast?.name || "",
    oblastCenter: oblast?.center || "",
    raionName: raion?.name || "",
    raionCenter: raion?.center || "",
    hromadaName: hromada?.name || "",
    hromadaType: hromada?.type || "",
    hromadaCenter: hromada?.center || "",
    hromadaSettlementCount: hromada?.settlementCount || hromada?.settlements?.length || 0
  };
}

function maybeOpenMapForName(name, type, closeAfterOpen, context = "") {
  const code = typeof context === "object" ? context.code || "" : "";
  if (typeof context === "object" && code && context.openCommunitySite) {
    saveProfilePlace({
      ...context,
      name,
      type
    });
  }
  const contextText = typeof context === "string"
    ? context
    : [
      context.code,
      context.subtitle,
      context.oblastName,
      context.raionName,
      context.hromadaName,
      context.hromadaCenter
    ].filter(Boolean).join(" ");
  const normalizedName = normalizeText(name);
  const normalizedType = normalizeText(type);
  const normalized = normalizeText(`${name || ""} ${contextText || ""}`);
  const linkedNameTarget = typeof context === "object"
    ? mapLinks.nameMapTargets?.[name] || mapLinks.nameMapTargets?.[context.hromadaName] || mapLinks.nameMapTargets?.[context.raionName] || ""
    : mapLinks.nameMapTargets?.[name] || "";
  let target = "";
  if (settlementMapTargets[code]) {
    target = settlementMapTargets[code];
  } else if (linkedNameTarget) {
    target = linkedNameTarget;
  } else if (normalized.includes("білгород-дністровськ") || normalized.includes("білгород-дністровський")) {
    target = normalizedName.includes("білгород-дністров") && normalizedType !== "область" && normalizedType !== "район"
      ? "bilhorod-dnistrovskyi-city"
      : "bilhorod-dnistrovskyi-raion";
  } else if (normalized.includes("одеськ") || normalizedName === "одеса") {
    target = "odesa-oblast";
  }

  if (target) {
    openView(target);
    if (closeAfterOpen) closeMenu();
    return true;
  }

  if (typeof context === "object" && context.openCommunitySite) {
    renderCommunitySite({
      ...context,
      name,
      type
    });
    return false;
  }

  showMenuNotice(`Для "${name}" карта ще не підключена. Дані вже є у довіднику, карту можна додати наступним етапом.`);
  return false;
}

function renderCommunitySite(place) {
  const chatAccess = canManageChats();
  const hromadaTitle = place.hromadaName || place.name;
  const placeLabel = `${place.type || "населений пункт"} ${place.name || ""}`.trim();
  const locationLine = [place.oblastName, place.raionName].filter(Boolean).join(" · ");

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Громада</span>
      <h2>${escapeHtml(hromadaTitle)}</h2>
      <p>${escapeHtml(placeLabel)}${locationLine ? ` · ${escapeHtml(locationLine)}` : ""}</p>
      ${place.code ? `<p class="place-code">Код населеного пункту: <strong>${escapeHtml(place.code)}</strong></p>` : ""}
    </div>
    <div class="stats-strip">
      <div><strong>${escapeHtml(place.hromadaCenter || place.name || "-")}</strong><span>центр громади</span></div>
      <div><strong>${escapeHtml(String(place.hromadaSettlementCount || "-"))}</strong><span>населених пунктів</span></div>
      <div><strong>${escapeHtml(place.raionName || "-")}</strong><span>район</span></div>
    </div>
    <div class="linked-panel community-site">
      <strong>Односторінковий сайт громади</strong>
      <p>Тут буде локальна сторінка громади з новинами, навчальними закладами, розкладом, туризмом, екологією, грантами і правами редакторів.</p>
    </div>
    <div class="linked-panel community-chat">
      <strong>Чат громади</strong>
      <div class="chat-message">Вітаємо у чаті ${escapeHtml(hromadaTitle)}. Повноцінні повідомлення підключимо після структури сторінок і ролей.</div>
      ${chatAccess ? `
        <div class="chat-compose">
          <input class="text-field" type="text" placeholder="Написати повідомлення">
          <button class="primary-action" type="button">Надіслати</button>
        </div>
        <div class="chat-tools">
          <button class="ghost-action" type="button">Закріпити</button>
          <button class="ghost-action" type="button">Редагувати чат</button>
          <button class="ghost-action" type="button">Модерація</button>
        </div>
      ` : `
        <p>Вести та редагувати чат може адміністратор або зареєстрований користувач, якому адміністратор надав такий дозвіл.</p>
      `}
    </div>
    <div class="action-row single-action">
      <button class="ghost-action" id="backToCities" type="button">До списку</button>
    </div>
  `;
  menuContent.classList.add("is-open");
  menuContent.setAttribute("aria-hidden", "false");
  document.getElementById("backToCities").addEventListener("click", () => openSubmenu("cities"));
}

function renderSchoolRows(rows) {
  const visibleRows = rows.filter((row) => row.value);
  if (!visibleRows.length) return "";

  return `
    <dl class="school-info-list">
      ${visibleRows.map((row) => `
        <div>
          <dt>${escapeHtml(row.label)}</dt>
          <dd>${row.html ? row.value : escapeHtml(row.value)}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

function renderSchoolSources(sources = []) {
  if (!sources.length) return "";

  return `
    <div class="source-links">
      ${sources.map((source) => `
        <a class="school-source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(source.label)}
        </a>
      `).join("")}
    </div>
  `;
}

function getSchoolSiteKey(school) {
  return school.id || school.edrpou || school.registryId || normalizeText(school.name || "school");
}

function getSchoolArticlesStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(schoolArticlesStorageKey) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveSchoolArticlesStore(store) {
  localStorage.setItem(schoolArticlesStorageKey, JSON.stringify(store));
}

function getSchoolArticles(school) {
  const store = getSchoolArticlesStore();
  const key = getSchoolSiteKey(school);
  return Array.isArray(store[key]) ? store[key] : [];
}

function addSchoolArticle(school, article) {
  const store = getSchoolArticlesStore();
  const key = getSchoolSiteKey(school);
  store[key] = [
    article,
    ...(Array.isArray(store[key]) ? store[key] : [])
  ];
  saveSchoolArticlesStore(store);
}

function renderArticleBody(text) {
  return String(text || "")
    .split(/\n{2,}|\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderSchoolPassportText(school) {
  const lines = [
    `Назва: ${school.name || ""}`,
    school.fullName ? `Повна назва: ${school.fullName}` : "",
    school.type ? `Тип закладу: ${school.type}` : "",
    school.hromada ? `Громада: ${school.hromada}` : "",
    school.settlement ? `Населений пункт: ${school.settlement}` : "",
    school.address ? `Адреса: ${school.address}` : "",
    school.postalAddress ? `Поштова адреса: ${school.postalAddress}` : "",
    school.edrpou ? `ЄДРПОУ: ${school.edrpou}` : "",
    school.edboCode ? `Код ЄДЕБО: ${school.edboCode}` : "",
    school.registryId ? `Код АІКОМ/ІСУО: ${school.registryId}` : "",
    school.settlementCode ? `Код населеного пункту: ${school.settlementCode}` : "",
    school.koatuu ? `КОАТУУ: ${school.koatuu}` : "",
    school.ownership ? `Форма власності: ${school.ownership}` : "",
    school.localityType ? `Місцевість: ${school.localityType}` : "",
    school.degree ? `Ступінь: ${school.degree}` : "",
    school.director ? `Керівник: ${school.director}` : "",
    school.authorizedPerson ? `Уповноважена особа: ${school.authorizedPerson}` : "",
    school.teachers ? `Вчителів: ${school.teachers}` : "",
    school.studentCapacity ? `Проектна потужність: ${school.studentCapacity}` : "",
    school.students ? `Учнів: ${school.students}` : "",
    school.staff ? `Працівників: ${school.staff}` : "",
    school.classes ? `Класів: ${school.classes}` : "",
    school.inclusiveClasses ? `Інклюзивних класів: ${school.inclusiveClasses}` : "",
    school.language ? `Мова навчання: ${school.language}` : "",
    school.phone ? `Телефон: ${school.phone}` : "",
    school.email ? `E-mail: ${school.email}` : "",
    school.website ? `Сайт: ${school.website}` : "",
    school.note ? `Примітка: ${school.note}` : ""
  ].filter(Boolean);

  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function renderSchoolArticles(school, articles) {
  const passportArticle = {
    title: "Паспорт школи",
    category: "Довідка",
    author: "ОкеанUA",
    createdAt: "",
    body: [
      school.fullName || school.name || "",
      school.address ? `Адреса: ${school.address}` : "",
      school.phone ? `Телефон: ${school.phone}` : "",
      school.email ? `E-mail: ${school.email}` : "",
      school.website ? `Сайт: ${school.website}` : "",
      school.note || ""
    ].filter(Boolean).join("\n")
  };
  const allArticles = [...articles, passportArticle];

  return `
    <div class="school-article-list">
      ${allArticles.map((article) => `
        <article class="school-article">
          <div class="school-article-meta">
            <span>${escapeHtml(article.category || "Стаття")}</span>
            ${article.createdAt ? `<time datetime="${escapeHtml(article.createdAt)}">${escapeHtml(formatDateTime(article.createdAt))}</time>` : ""}
          </div>
          <h3>${escapeHtml(article.title || "Стаття школи")}</h3>
          <div class="school-article-body">${renderArticleBody(article.body)}</div>
          <footer>${escapeHtml(article.author || "Автор не вказаний")}</footer>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSchoolArticleForm(canEdit) {
  if (!canEdit) {
    return `<p>Додавати та редагувати статті можуть адміністратор або зареєстрований користувач, якому адміністратор надав право вести контент.</p>`;
  }

  return `
    <form class="school-article-form" id="schoolArticleForm">
      <label class="field-label" for="schoolArticleTitle">Назва статті</label>
      <input class="text-field" id="schoolArticleTitle" type="text" maxlength="120" placeholder="Наприклад: Новини школи або оголошення">
      <label class="field-label" for="schoolArticleCategory">Розділ</label>
      <select class="text-field" id="schoolArticleCategory">
        <option value="Новини">Новини</option>
        <option value="Оголошення">Оголошення</option>
        <option value="Навчання">Навчання</option>
        <option value="Історія школи">Історія школи</option>
        <option value="Події">Події</option>
      </select>
      <label class="field-label" for="schoolArticleBody">Текст статті</label>
      <textarea class="text-field textarea-field" id="schoolArticleBody" maxlength="4000" placeholder="Введіть текст статті українською мовою"></textarea>
      <div class="action-row single-action">
        <button class="primary-action" type="submit">Додати статтю</button>
      </div>
      <p class="empty-text" id="schoolArticleStatus"></p>
    </form>
  `;
}

function renderSchoolSite(school) {
  const contentAccess = canManageChats();
  const articles = getSchoolArticles(school);
  activeSubmenuId = "";
  menuContent.dataset.activeSection = "school-site";
  mainMenu.classList.remove("is-open");
  mainMenu.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  renderMenu(activeMenuId);

  const generalRows = renderSchoolRows([
    { label: "Повна назва", value: school.fullName },
    { label: "Тип закладу", value: school.type },
    { label: "Громада", value: school.hromada },
    { label: "Населений пункт", value: school.settlement },
    { label: "Адреса", value: school.address },
    { label: "Поштова адреса", value: school.postalAddress },
    { label: "Форма власності", value: school.ownership },
    { label: "Місцевість", value: school.localityType },
    { label: "Ступінь", value: school.degree },
    { label: "Мова навчання", value: school.language }
  ]);
  const codeRows = renderSchoolRows([
    { label: "ЄДРПОУ", value: school.edrpou },
    { label: "Код ЄДЕБО", value: school.edboCode },
    { label: "Код АІКОМ/ІСУО", value: school.registryId },
    { label: "Код населеного пункту", value: school.settlementCode },
    { label: "КОАТУУ", value: school.koatuu }
  ]);
  const peopleRows = renderSchoolRows([
    { label: "Керівник", value: school.director },
    { label: "Уповноважена особа", value: school.authorizedPerson },
    { label: "Вчителів", value: school.teachers },
    { label: "Проектна потужність", value: school.studentCapacity },
    { label: "Учнів", value: school.students },
    { label: "Працівників", value: school.staff },
    { label: "Класів", value: school.classes },
    { label: "Інклюзивних класів", value: school.inclusiveClasses }
  ]);
  const contactRows = renderSchoolRows([
    { label: "Телефон", value: school.phone },
    { label: "E-mail", value: school.email },
    {
      label: "Сайт",
      value: school.website ? `<a class="school-source-link" href="${escapeHtml(school.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(school.website)}</a>` : "",
      html: true
    }
  ]);

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Сайт школи</span>
      <h2>${school.number ? `${escapeHtml(String(school.number))}. ` : ""}${escapeHtml(school.name || "Школа")}</h2>
      <p>${escapeHtml(formatDetails([school.settlement, school.hromada, school.address]))}</p>
    </div>
    <div class="linked-panel school-site-card">
      <strong>Інформація про заклад</strong>
      ${generalRows}
    </div>
    <div class="linked-panel school-site-card">
      <strong>Офіційні коди</strong>
      ${codeRows}
    </div>
    <div class="linked-panel school-site-card">
      <strong>Керівництво і показники</strong>
      ${peopleRows}
    </div>
    <div class="linked-panel school-site-card">
      <strong>Контакти</strong>
      ${contactRows}
    </div>
    ${school.note ? `
      <div class="linked-panel school-site-card">
        <strong>Примітка</strong>
        <p>${escapeHtml(school.note)}</p>
      </div>
    ` : ""}
    <div class="linked-panel school-site-card">
      <strong>Джерела даних</strong>
      ${renderSchoolSources(school.sources || [])}
    </div>
    <div class="linked-panel school-site-card school-site-passport">
      <strong>Паспорт школи</strong>
      <div class="chat-message school-site-message">
        ${renderSchoolPassportText(school)}
      </div>
    </div>
    <div class="linked-panel school-site-card school-articles-section">
      <strong>Статті школи</strong>
      ${renderSchoolArticleForm(contentAccess)}
      ${renderSchoolArticles(school, articles)}
    </div>
    <div class="action-row single-action">
      <button class="primary-action" id="backToSchoolMap" type="button">До карти</button>
    </div>
  `;
  menuContent.classList.add("is-open");
  menuContent.setAttribute("aria-hidden", "false");
  document.getElementById("backToSchoolMap").addEventListener("click", closeMenu);

  const articleForm = document.getElementById("schoolArticleForm");
  if (articleForm) {
    articleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.getElementById("schoolArticleStatus");
      const title = document.getElementById("schoolArticleTitle")?.value.trim() || "";
      const category = document.getElementById("schoolArticleCategory")?.value || "Новини";
      const body = document.getElementById("schoolArticleBody")?.value.trim() || "";
      if (!title || !body) {
        if (status) status.textContent = "Заповніть назву і текст статті.";
        return;
      }
      const profile = getProfile();
      const user = getCurrentRegisteredUser();
      addSchoolArticle(school, {
        id: `${Date.now()}`,
        title,
        category,
        body,
        author: profile.name || user?.name || "Користувач",
        createdAt: new Date().toISOString()
      });
      renderSchoolSite(school);
    });
  }
}

function showMenuNotice(text) {
  if (menuContent.getAttribute("aria-hidden") === "true") {
    openSubmenu(activeMenuId || "cities");
  }
  const existing = menuContent.querySelector(".menu-notice");
  if (existing) existing.remove();
  const notice = document.createElement("p");
  notice.className = "menu-notice";
  notice.textContent = text;
  menuContent.prepend(notice);
}

function renderLearningSection(title, text, withSubjects) {
  const classes = Array.from({ length: 12 }, (_, index) => index + 1);
  const activeGrade = getActiveLearningGrade();
  const subjects = getSubjectsForGrade(activeGrade);

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Навчання</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <div class="class-grid">
      ${classes.map((grade) => {
        const gradeValue = String(grade);
        return `<button class="${gradeValue === activeGrade ? "is-selected" : ""}" type="button" data-learning-grade="${gradeValue}">${grade} клас</button>`;
      }).join("")}
    </div>
    ${withSubjects ? `
      <h3 class="subhead">Предмети ${activeGrade} класу</h3>
      <div class="pill-grid">
        ${subjects.map((subject) => `<button type="button">${subject}</button>`).join("")}
      </div>
    ` : ""}
    <p class="empty-text">Редагування матеріалів буде доступне тільки користувачам з відповідними правами.</p>
  `;

  menuContent.querySelectorAll("[data-learning-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveLearningGrade(button.dataset.learningGrade);
      renderLearningSection(title, text, withSubjects);
    });
  });
}

function renderFlashcardsSection(
  gradeId = selectedFlashcardGrade || getDefaultFlashcardGrade(),
  subjectId = selectedFlashcardSubject,
  cardIndex = selectedFlashcardCardIndex,
  variantIndex = selectedFlashcardVariantIndex
) {
  const classes = getFlashcardGrades();
  const previousGrade = selectedFlashcardGrade;
  const previousSubject = selectedFlashcardSubject;
  const requestedGrade = String(gradeId || getDefaultFlashcardGrade());
  selectedFlashcardGrade = schoolSubjectsByGrade[requestedGrade] ? requestedGrade : getDefaultFlashcardGrade();

  const flashYearKey = getFlashcardYearKey(selectedFlashcardGrade);
  const gradeData = getFlashcardGradeData(selectedFlashcardGrade);
  const subjects = Object.entries(gradeData.subjects || {});

  selectedFlashcardSubject = subjectId && gradeData.subjects?.[subjectId]
    ? subjectId
    : (subjects[0]?.[0] || "");

  if (previousGrade !== selectedFlashcardGrade || previousSubject !== selectedFlashcardSubject) {
    selectedFlashcardCardIndex = 0;
    selectedFlashcardVariantIndex = 0;
  } else {
    selectedFlashcardCardIndex = Number.isFinite(Number(cardIndex)) ? Number(cardIndex) : 0;
    selectedFlashcardVariantIndex = Number.isFinite(Number(variantIndex)) ? Number(variantIndex) : 0;
  }

  const activeSubject = selectedFlashcardSubject ? gradeData.subjects[selectedFlashcardSubject] : null;
  const variants = activeSubject?.variants || [];
  if (selectedFlashcardVariantIndex >= variants.length) {
    selectedFlashcardVariantIndex = Math.max(0, variants.length - 1);
  }
  if (selectedFlashcardVariantIndex < 0) selectedFlashcardVariantIndex = 0;

  const variantOptions = variants.map((variant, variantIndex) => ({
    variantIndex,
    label: variant.label || variant.session || `Варіант ${variantIndex + 1}`,
    cardCount: (variant.cards || []).length
  }));

  const activeVariant = variants[selectedFlashcardVariantIndex] || null;
  const activeCards = activeVariant?.cards || [];
  if (selectedFlashcardCardIndex >= activeCards.length) {
    selectedFlashcardCardIndex = Math.max(0, activeCards.length - 1);
  }
  if (selectedFlashcardCardIndex < 0) selectedFlashcardCardIndex = 0;

  selectedNmtYear = flashYearKey;
  selectedNmtSubject = selectedFlashcardSubject;
  selectedNmtCardIndex = selectedFlashcardCardIndex;
  selectedNmtVariantIndex = selectedFlashcardVariantIndex;

  menuContent.innerHTML = `
    <div class="nmt-workspace school-flashcards-workspace">
      <div class="nmt-compact-head">
        <strong>Флешкартки</strong>
        <div class="nmt-compact-group" aria-label="Клас">
          ${classes.map((grade) => {
            const hasDecks = Boolean(gradeFlashcardCatalog.grades?.[grade]);
            return `
              <button class="${grade === selectedFlashcardGrade ? "is-selected" : ""}" type="button" data-flash-grade="${grade}" title="${hasDecks ? "Є тестові комплекти" : "Комплекти ще не додані"}">
                ${grade} клас
              </button>
            `;
          }).join("")}
        </div>
        ${subjects.length ? `
          <label class="nmt-subject-select">
            <span>Предмет, автор, рік</span>
            <select id="flashcardSubjectOnlySelect">
              ${subjects.map(([subjectId, subject]) => `
                <option value="${escapeHtml(subjectId)}"${subjectId === selectedFlashcardSubject ? " selected" : ""}>
                  ${escapeHtml(subject.label || subjectId)}
                </option>
              `).join("")}
            </select>
          </label>
        ` : ""}
        ${variantOptions.length ? `
          <label class="nmt-subject-select">
            <span>Комплект</span>
            <select id="flashcardVariantSelect">
              ${variantOptions.map((option) => `
                <option value="${option.variantIndex}"${option.variantIndex === selectedFlashcardVariantIndex ? " selected" : ""}>
                  ${escapeHtml(option.label)} · ${option.cardCount} завд.
                </option>
              `).join("")}
            </select>
          </label>
        ` : ""}
      </div>
      ${subjects.length
        ? (activeSubject ? renderNmtSubject(activeSubject) : "")
        : `<p class="empty-text">Для ${escapeHtml(gradeData.label || `${selectedFlashcardGrade} клас`)} тестові флеш-картки ще не додані.</p>`}
      ${gradeData.pendingSubjects?.length ? `
        <div class="linked-panel flashcard-pending">
          <strong>Предмети без готових тестових наборів</strong>
          <div class="pill-grid">
            ${gradeData.pendingSubjects.map((subject) => `<button type="button" disabled>${escapeHtml(subject)}</button>`).join("")}
          </div>
        </div>
      ` : ""}
    </div>
  `;
  menuContent.scrollTop = 0;

  menuContent.querySelectorAll("[data-flash-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveLearningGrade(button.dataset.flashGrade);
      renderFlashcardsSection(button.dataset.flashGrade, "", 0, 0);
    });
  });

  const subjectOnlySelect = document.getElementById("flashcardSubjectOnlySelect");
  if (subjectOnlySelect) {
    subjectOnlySelect.addEventListener("change", () => {
      renderFlashcardsSection(selectedFlashcardGrade, subjectOnlySelect.value, 0, 0);
    });
  }

  const variantSelect = document.getElementById("flashcardVariantSelect");
  if (variantSelect) {
    variantSelect.addEventListener("change", () => {
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, 0, Number(variantSelect.value));
    });
  }

  menuContent.querySelectorAll("[data-nmt-restart]").forEach((button) => {
    button.addEventListener("click", () => {
      if (activeSubject && activeVariant) {
        startNewNmtSession(activeSubject, activeVariant, selectedFlashcardVariantIndex, activeCards.length);
      }
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, 0, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-card-index]").forEach((button) => {
    button.addEventListener("click", () => renderFlashcardsSection(
      selectedFlashcardGrade,
      selectedFlashcardSubject,
      Number(button.dataset.nmtCardIndex),
      selectedFlashcardVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-prev]").forEach((button) => {
    button.addEventListener("click", () => renderFlashcardsSection(
      selectedFlashcardGrade,
      selectedFlashcardSubject,
      selectedFlashcardCardIndex - 1,
      selectedFlashcardVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-next]").forEach((button) => {
    button.addEventListener("click", () => renderFlashcardsSection(
      selectedFlashcardGrade,
      selectedFlashcardSubject,
      selectedFlashcardCardIndex + 1,
      selectedFlashcardVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, button.dataset.nmtSelect, "choice");
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const draftKey = getNmtDraftKey(card);
      const selected = new Set(nmtDraftSelections[draftKey] || []);
      const value = button.dataset.nmtMultiSelect;
      if (selected.has(value)) {
        selected.delete(value);
      } else {
        selected.add(value);
      }
      nmtDraftSelections[draftKey] = Array.from(selected);
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const selected = nmtDraftSelections[getNmtDraftKey(card)] || [];
      recordNmtAnswer(card, selected.join(";"), "multi");
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-input-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const input = document.getElementById("nmtOpenAnswer");
      recordNmtAnswer(card, input?.value || "", "input");
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, "", "reveal");
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });
}

function renderPythonSection(
  subjectId = selectedPythonSubject,
  cardIndex = selectedPythonCardIndex,
  variantIndex = selectedPythonVariantIndex
) {
  const pythonYearKey = "python";
  const previousSubject = selectedPythonSubject;
  const yearData = nmtData.years?.[pythonYearKey] || {
    label: "Python",
    subjects: {}
  };
  const subjects = Object.entries(yearData.subjects || {});
  const packageOptions = getNmtPackageOptions(yearData);

  selectedPythonSubject = subjectId && yearData.subjects?.[subjectId]
    ? subjectId
    : (subjects[0]?.[0] || "");

  if (previousSubject !== selectedPythonSubject) {
    selectedPythonCardIndex = 0;
    selectedPythonVariantIndex = 0;
  } else {
    selectedPythonCardIndex = Number.isFinite(Number(cardIndex)) ? Number(cardIndex) : 0;
    selectedPythonVariantIndex = Number.isFinite(Number(variantIndex)) ? Number(variantIndex) : 0;
  }

  const activeSubject = selectedPythonSubject ? yearData.subjects[selectedPythonSubject] : null;
  const variants = activeSubject?.variants || [];
  if (selectedPythonVariantIndex >= variants.length) {
    selectedPythonVariantIndex = Math.max(0, variants.length - 1);
  }
  if (selectedPythonVariantIndex < 0) selectedPythonVariantIndex = 0;

  const activeVariant = variants[selectedPythonVariantIndex] || null;
  const activeCards = activeVariant?.cards || [];
  if (selectedPythonCardIndex >= activeCards.length) {
    selectedPythonCardIndex = Math.max(0, activeCards.length - 1);
  }
  if (selectedPythonCardIndex < 0) selectedPythonCardIndex = 0;

  selectedNmtYear = pythonYearKey;
  selectedNmtSubject = selectedPythonSubject;
  selectedNmtCardIndex = selectedPythonCardIndex;
  selectedNmtVariantIndex = selectedPythonVariantIndex;

  menuContent.innerHTML = `
    <div class="nmt-workspace python-workspace">
      <div class="nmt-compact-head">
        <strong>Python</strong>
        ${subjects.length ? `
          <label class="nmt-subject-select">
            <span>Комплект</span>
            <select id="pythonSubjectSelect">
              ${packageOptions.map((option) => `
                <option value="${escapeHtml(option.value)}"${option.subjectId === selectedPythonSubject && option.variantIndex === selectedPythonVariantIndex ? " selected" : ""}>
                  ${escapeHtml(option.label)} · ${option.cardCount} завд.
                </option>
              `).join("")}
            </select>
          </label>
        ` : ""}
      </div>
      <p class="empty-text">Тест із флеш-картами для швидкого повторення базового Python: синтаксис, типи даних, умови, цикли, функції та імпорт.</p>
      ${subjects.length ? (activeSubject ? renderNmtSubject(activeSubject) : "") : `<p class="empty-text">Матеріали Python ще не додані.</p>`}
    </div>
  `;
  menuContent.scrollTop = 0;

  const subjectSelect = document.getElementById("pythonSubjectSelect");
  if (subjectSelect) {
    subjectSelect.addEventListener("change", () => {
      const selectedPackage = parseNmtPackageValue(subjectSelect.value);
      renderPythonSection(selectedPackage.subjectId, 0, selectedPackage.variantIndex);
    });
  }

  menuContent.querySelectorAll("[data-nmt-restart]").forEach((button) => {
    button.addEventListener("click", () => {
      if (activeSubject && activeVariant) {
        startNewNmtSession(activeSubject, activeVariant, selectedPythonVariantIndex, activeCards.length);
      }
      renderPythonSection(selectedPythonSubject, 0, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-card-index]").forEach((button) => {
    button.addEventListener("click", () => renderPythonSection(
      selectedPythonSubject,
      Number(button.dataset.nmtCardIndex),
      selectedPythonVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-prev]").forEach((button) => {
    button.addEventListener("click", () => renderPythonSection(
      selectedPythonSubject,
      selectedPythonCardIndex - 1,
      selectedPythonVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-next]").forEach((button) => {
    button.addEventListener("click", () => renderPythonSection(
      selectedPythonSubject,
      selectedPythonCardIndex + 1,
      selectedPythonVariantIndex
    ));
  });

  menuContent.querySelectorAll("[data-nmt-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, button.dataset.nmtSelect, "choice");
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const draftKey = getNmtDraftKey(card);
      const selected = new Set(nmtDraftSelections[draftKey] || []);
      const value = button.dataset.nmtMultiSelect;
      if (selected.has(value)) {
        selected.delete(value);
      } else {
        selected.add(value);
      }
      nmtDraftSelections[draftKey] = Array.from(selected);
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const selected = nmtDraftSelections[getNmtDraftKey(card)] || [];
      recordNmtAnswer(card, selected.join(";"), "multi");
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-input-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const input = document.getElementById("nmtOpenAnswer");
      recordNmtAnswer(card, input?.value || "", "input");
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, "", "reveal");
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });
}

function renderRoleLabel(role) {
  const labels = {
    administrator: "Адміністратор",
    editor: "Редактор",
    chat_manager: "Веде чати",
    registered: "Зареєстрований"
  };
  return labels[role] || "Зареєстрований";
}

function renderAdminPanel() {
  if (!isAdminProfile()) return "";

  const users = getRegisteredUsers();
  const proposals = getAdminProposals();
  return `
    <div class="linked-panel admin-panel">
      <strong>Адміністрування</strong>
      <p>Локальний список зареєстрованих користувачів. Тут адміністратор може призначати ролі і дозволяти ведення чатів.</p>
      <div class="admin-user-list">
        ${users.length ? users.map((user) => `
          <div class="admin-user-row" data-user-id="${escapeHtml(user.id)}">
            <div class="admin-user-main">
              <strong>${escapeHtml(user.name || "Без імені")}</strong>
              <span>${escapeHtml(formatDetails([user.schoolName, user.city, user.email, user.phone]))}</span>
            </div>
            <select class="text-field compact-field" data-admin-role>
              ${["registered", "chat_manager", "editor", "administrator"].map((role) =>
                `<option value="${role}"${user.role === role ? " selected" : ""}>${renderRoleLabel(role)}</option>`
              ).join("")}
            </select>
            <label class="inline-check">
              <input type="checkbox" data-admin-chat${user.chatAccess ? " checked" : ""}>
              <span>Може вести чати</span>
            </label>
          </div>
        `).join("") : `<p class="empty-text">Зареєстрованих користувачів ще немає.</p>`}
      </div>
      ${users.length ? `<button class="primary-action full-action" id="saveAdminUsers" type="button">Зберегти права користувачів</button>` : ""}
      <label class="field-label" for="adminProposal">Пропозиція або зміна в програмі</label>
      <textarea class="text-field textarea-field" id="adminProposal" rows="3" placeholder="Наприклад: додати карту району, змінити текст, відкрити новий чат"></textarea>
      <button class="ghost-action full-action" id="saveAdminProposal" type="button">Додати пропозицію</button>
      ${proposals.length ? `
        <div class="admin-proposal-list">
          ${proposals.slice().reverse().map((proposal) => `
            <div class="admin-proposal">
              <strong>${escapeHtml(formatDateTime(proposal.createdAt))}</strong>
              <span>${escapeHtml(proposal.text)}</span>
            </div>
          `).join("")}
        </div>
      ` : `<p class="empty-text">Пропозицій ще немає.</p>`}
    </div>
  `;
}

function bindAdminPanel() {
  if (!isAdminProfile()) return;

  const saveUsersButton = document.getElementById("saveAdminUsers");
  if (saveUsersButton) {
    saveUsersButton.addEventListener("click", () => {
      const users = getRegisteredUsers();
      menuContent.querySelectorAll("[data-user-id]").forEach((row) => {
        const user = users.find((item) => item.id === row.dataset.userId);
        if (!user) return;
        user.role = row.querySelector("[data-admin-role]").value;
        user.chatAccess = row.querySelector("[data-admin-chat]").checked || user.role === "administrator" || user.role === "chat_manager";
        user.updatedAt = new Date().toISOString();
      });
      saveRegisteredUsers(users);
      renderSettingsSection();
      showMenuNotice("Права користувачів збережено.");
    });
  }

  const proposalButton = document.getElementById("saveAdminProposal");
  const proposalField = document.getElementById("adminProposal");
  if (proposalButton && proposalField) {
    proposalButton.addEventListener("click", () => {
      const text = proposalField.value.trim();
      if (!text) {
        showMenuNotice("Напишіть текст пропозиції перед збереженням.");
        return;
      }
      const profile = getProfile();
      const proposals = getAdminProposals();
      proposals.push({
        id: `proposal-${Date.now()}`,
        text,
        author: profile.name || "Адміністратор",
        createdAt: new Date().toISOString()
      });
      saveAdminProposals(proposals);
      renderSettingsSection();
      showMenuNotice("Пропозицію збережено локально.");
    });
  }
}

function renderSettingsSection() {
  const profile = getProfile();
  const user = getCurrentRegisteredUser();
  const completeProfile = isRegistrationComplete(profile);
  const roleLabel = renderRoleLabel(user?.role || profile.role || "registered");
  const schoolMatches = getProfileSchoolMatches(profile);
  const selectedSchoolIndex = schoolMatches.findIndex((school) =>
    (profile.schoolCode && school.code === profile.schoolCode) ||
    normalizeText(school.name) === normalizeText(profile.schoolName)
  );
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Профіль</span>
      <h2>Налаштування</h2>
      <p>Для локальної реєстрації потрібні ім'я, email і телефон. Школа, інший навчальний заклад і клас необов'язкові.</p>
    </div>
    <label class="field-label" for="profileName">Ім'я</label>
    <input class="text-field" id="profileName" type="text" value="${escapeHtml(profile.name || "")}" placeholder="Наприклад: Олена">
    <label class="field-label" for="profileEmail">Email</label>
    <input class="text-field" id="profileEmail" type="email" value="${escapeHtml(profile.email || "")}" placeholder="name@example.com">
    <label class="field-label" for="profilePhone">Телефон</label>
    <input class="text-field" id="profilePhone" type="tel" value="${escapeHtml(profile.phone || "")}" placeholder="+380...">
    <span class="field-label">Місто або населений пункт</span>
    <div class="selected-place" id="profilePlaceSummary">
      <strong>${escapeHtml(profile.placeName || profile.city || "Не вибрано")}</strong>
      <span>${profile.placeCode
        ? escapeHtml(formatDetails([profile.placeType || "населений пункт", profile.hromadaName, profile.raionName, profile.placeCode]))
        : "Виберіть населений пункт через довідник, щоб зберегти точну прив'язку."}</span>
    </div>
    <button class="ghost-action full-action" id="chooseProfileCity" type="button">Вибрати у меню Місто</button>
    <label class="field-label" for="profileSchool">Школа або навчальний заклад <span class="optional-mark">необов'язково</span></label>
    ${profile.placeCode && schoolMatches.length ? `
      <select class="text-field" id="profileSchoolSelect">
        <option value="">Ввести вручну або не вибирати</option>
        ${schoolMatches.map((school, index) => `
          <option value="${index}"${index === selectedSchoolIndex ? " selected" : ""}>
            ${escapeHtml(school.name)}
          </option>
        `).join("")}
      </select>
      <p class="empty-text">Якщо школа є на карті міста, виберіть її зі списку. Поле нижче можна змінити вручну.</p>
    ` : profile.placeCode ? `
      <p class="empty-text">Для цього міста шкіл на карті поки немає. Назву можна внести вручну або залишити поле порожнім.</p>
    ` : `
      <p class="empty-text">Спочатку виберіть місто, тоді тут з'явиться список шкіл, якщо вони є на карті.</p>
    `}
    <input class="text-field" id="profileSchool" type="text" value="${escapeHtml(profile.schoolName || "")}" placeholder="Школа, ліцей, коледж, університет або залиште порожнім">
    ${profile.schoolCode || profile.schoolAddress ? `
      <div class="selected-place profile-state">
        <strong>${escapeHtml(profile.schoolName || "Заклад вибрано")}</strong>
        <span>${escapeHtml(formatDetails([profile.schoolAddress, profile.schoolCode]))}</span>
      </div>
    ` : ""}
    <label class="field-label" for="profileClass">Клас <span class="optional-mark">необов'язково</span></label>
    <select class="text-field" id="profileClass">
      <option value="">Не вибрано</option>
      ${Array.from({ length: 12 }, (_, index) => {
        const grade = String(index + 1);
        return `<option value="${grade}"${String(profile.grade || "") === grade ? " selected" : ""}>${grade} клас</option>`;
      }).join("")}
    </select>
    ${completeProfile ? `
      <div class="selected-place profile-state">
        <strong>Профіль зареєстровано</strong>
        <span>Роль: ${escapeHtml(roleLabel)}${canManageChats() ? " · дозволено вести чати" : ""}</span>
      </div>
    ` : `
      <p class="empty-text">Для реєстрації потрібні ім'я, email і телефон. Школу/заклад і клас можна не заповнювати.</p>
    `}
    <div class="action-row">
      <button class="primary-action" id="saveProfile" type="button">Зберегти профіль</button>
      <button class="ghost-action" id="clearProfile" type="button">Працювати як гість</button>
    </div>
    ${renderAdminPanel()}
  `;

  document.getElementById("saveProfile").addEventListener("click", () => {
    const registration = saveProfile(readProfileFormDraft({ clearPlaceOnIdentityChange: true }));
    renderSettingsSection();
    if (registration.firstAdmin) {
      showMenuNotice("Профіль зареєстровано. Це перший користувач, тому він став адміністратором.");
    } else if (registration.registered) {
      showMenuNotice("Профіль зареєстровано і збережено локально.");
    } else {
      showMenuNotice("Профіль збережено локально. Для реєстрації заповніть ім'я, email і телефон.");
    }
  });

  document.getElementById("chooseProfileCity").addEventListener("click", () => {
    saveProfileDraftFromSettings({ clearPlaceOnIdentityChange: true });
    profilePlaceSelectionMode = true;
    openSubmenu("cities");
    showMenuNotice("Оберіть конкретний населений пункт. Після вибору ви повернетеся до реєстрації, а введені дані не зникнуть.");
  });

  const schoolSelect = document.getElementById("profileSchoolSelect");
  if (schoolSelect) {
    schoolSelect.addEventListener("change", () => {
      const draft = readProfileFormDraft({ clearPlaceOnIdentityChange: true });
      const selectedIndex = Number(schoolSelect.value);
      if (!Number.isFinite(selectedIndex) || selectedIndex < 0 || !schoolMatches[selectedIndex]) {
        delete draft.schoolCode;
        delete draft.schoolAddress;
        delete draft.schoolPlaceCode;
        localStorage.setItem(profileStorageKey, JSON.stringify(draft));
        updateProfileStatus();
        return;
      }

      const school = schoolMatches[selectedIndex];
      localStorage.setItem(profileStorageKey, JSON.stringify({
        ...draft,
        schoolName: school.name || "",
        schoolCode: school.code || "",
        schoolAddress: school.address || "",
        schoolPlaceCode: school.placeCode || draft.placeCode || ""
      }));
      renderSettingsSection();
      showMenuNotice("Школу з карти міста додано у профіль. За потреби назву можна змінити вручну.");
    });
  }

  ["profileEmail", "profilePhone"].forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.addEventListener("input", () => {
      const draft = readProfileFormDraft({ clearPlaceOnIdentityChange: false });
      if (!hasProfileIdentityChanged(profile, draft)) return;
      const summary = document.getElementById("profilePlaceSummary");
      if (!summary) return;
      summary.innerHTML = `
        <strong>Не вибрано</strong>
        <span>Попередню адресу буде очищено, бо email або телефон змінено. Виберіть місто заново.</span>
      `;
    });
  });

  document.getElementById("clearProfile").addEventListener("click", () => {
    profilePlaceSelectionMode = false;
    clearProfile();
    renderSettingsSection();
    showMenuNotice("Ви працюєте як гість.");
  });

  bindAdminPanel();
}

function renderExitSection() {
  const profile = getProfile();
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Профіль</span>
      <h2>Вихід з профілю</h2>
      <p>Ця дія не виконується автоматично. Перехід у режим гостя очистить тільки поточний профіль у цьому браузері, але локальний список зареєстрованих користувачів залишиться для адміністратора.</p>
    </div>
    <div class="linked-panel">
      <strong>${escapeHtml(profile.name || "Гість")}</strong>
      <p>${profile.email ? escapeHtml(profile.email) : "Активного зареєстрованого профілю немає."}</p>
    </div>
    <div class="action-row">
      <button class="primary-action" id="continueAsGuest" type="button">Працювати як гість</button>
      <button class="ghost-action" id="stayInProfile" type="button">Залишитися у профілі</button>
    </div>
  `;

  document.getElementById("continueAsGuest").addEventListener("click", () => {
    profilePlaceSelectionMode = false;
    clearProfile();
    renderSettingsSection();
    showMenuNotice("Ви працюєте як гість.");
  });

  document.getElementById("stayInProfile").addEventListener("click", () => {
    openSubmenu("settings");
    showMenuNotice("Профіль залишився активним.");
  });
}

function renderChatSection() {
  const profile = getProfile();
  const user = getCurrentRegisteredUser();
  const hasPlace = Boolean(profile.placeCode);
  const registered = Boolean(user && isRegistrationComplete(profile));
  const chatAccess = canManageChats();
  const placeName = profile.placeName || profile.city || "";
  const placeDetails = formatDetails([profile.placeType, profile.hromadaName, profile.raionName, profile.placeCode]);
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Спілкування</span>
      <h2>Чат</h2>
      <p>Чати прив'язуються до школи, району, громади і об'єктів на карті. Писати та редагувати можуть тільки користувачі з дозволом.</p>
    </div>
    <div class="pill-grid">
      <button type="button">Сайт школи</button>
      <button type="button">Чат «Управління освіти»</button>
      <button type="button">Чат громади</button>
      <button type="button">Краєзнавчий чат міста</button>
    </div>
    <div class="linked-panel">
      <strong>${registered ? "Зареєстрований профіль" : "Потрібна реєстрація"}</strong>
      ${registered ? `
        <p>${escapeHtml(formatDetails([profile.name, profile.schoolName, profile.email, profile.phone]))}</p>
        <p>${chatAccess ? "Вам дозволено вести та редагувати чати." : "Адміністратор ще не надав вам право вести чати."}</p>
      ` : `
        <p>Щоб отримати право вести чати, заповніть ім'я, email і телефон у налаштуваннях. Школа або заклад не є обов'язковими.</p>
        <button class="primary-action full-action" type="button" id="openChatSettings">Заповнити налаштування</button>
      `}
    </div>
    <div class="linked-panel">
      <strong>${hasPlace ? "Ваш населений пункт" : "Місто не вибрано"}</strong>
      ${hasPlace ? `
        <div class="selected-place">
          <strong>${escapeHtml(placeName)}</strong>
          <span>${escapeHtml(placeDetails)}</span>
        </div>
        <button class="primary-action full-action" type="button" id="openProfilePlaceChat">Відкрити чат громади</button>
      ` : `
        <p>Щоб чат відкривався без пошуку, спочатку виберіть населений пункт з офіційним кодом.</p>
        <button class="primary-action full-action" type="button" id="chooseChatCity">Вибрати у меню Місто</button>
      `}
    </div>
    <div class="linked-panel chat-admin-tools">
      <strong>Керування чатами</strong>
      ${chatAccess ? `
        <p>Доступ відкритий. Ви можете вести чат, редагувати повідомлення і модерувати обговорення у прив'язаних розділах.</p>
        <div class="chat-tools">
          <button class="ghost-action" type="button">Створити чат школи</button>
          <button class="ghost-action" type="button">Редагувати правила</button>
          <button class="ghost-action" type="button">Модерація</button>
        </div>
      ` : `
        <p>Цей блок активує адміністратор у списку зареєстрованих користувачів.</p>
      `}
    </div>
  `;

  const openSettingsButton = document.getElementById("openChatSettings");
  if (openSettingsButton) {
    openSettingsButton.addEventListener("click", () => openSubmenu("settings"));
  }

  if (hasPlace) {
    document.getElementById("openProfilePlaceChat").addEventListener("click", () => {
      maybeOpenMapForName(placeName, profile.placeType || "населений пункт", true, {
        code: profile.placeCode,
        oblastName: profile.oblastName || "",
        raionName: profile.raionName || "",
        hromadaName: profile.hromadaName || "",
        hromadaCenter: profile.hromadaCenter || "",
        openCommunitySite: true
      });
    });
  } else {
    document.getElementById("chooseChatCity").addEventListener("click", () => {
      openSubmenu("cities");
      showMenuNotice("Оберіть населений пункт у дереві. Після вибору чат буде прив'язаний до його офіційного коду.");
    });
  }
}

function getUserNmtSessions() {
  const userKey = getStatsUserKey();
  return getNmtStats().sessions.filter((session) => session.userKey === userKey);
}

function renderStatsSection(sessionId = selectedStatsSessionId) {
  const profile = getProfile();
  const sessions = getUserNmtSessions();
  const selectedSession = sessions.find((session) => session.id === sessionId) || sessions[0] || null;
  selectedStatsSessionId = selectedSession?.id || "";
  const completedCount = sessions.filter((session) => session.status === "completed").length;
  const totalCorrect = sessions.reduce((sum, session) => sum + Number(session.correctCount || 0), 0);
  const totalWrong = sessions.reduce((sum, session) => sum + Number(session.wrongCount || 0), 0);

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Результати</span>
      <h2>Статистика</h2>
      <p>Локальна історія запусків тестових карток для користувача ${escapeHtml(profile.name?.trim() || "Гість")}.</p>
    </div>
    <div class="stats-strip">
      <div><strong>${sessions.length}</strong><span>запусків</span></div>
      <div><strong>${completedCount}</strong><span>завершено</span></div>
      <div><strong>${totalCorrect}/${totalCorrect + totalWrong || 0}</strong><span>правильних</span></div>
    </div>
    ${sessions.length ? `
      <div class="stats-session-list">
        ${sessions.map((session) => renderStatsSessionRow(session)).join("")}
      </div>
      ${selectedSession ? renderStatsSessionDetails(selectedSession) : ""}
      <button class="ghost-action full-action" type="button" id="exportNmtStats">Завантажити файл статистики</button>
    ` : `
      <p class="empty-text">Статистики ще немає. Відкрийте НМТ або Флешкартки і виберіть відповідь у тестовій картці.</p>
    `}
  `;

  menuContent.querySelectorAll("[data-stats-session-id]").forEach((button) => {
    button.addEventListener("click", () => renderStatsSection(button.dataset.statsSessionId));
  });

  const exportButton = document.getElementById("exportNmtStats");
  if (exportButton) {
    exportButton.addEventListener("click", exportNmtStatsFile);
  }
}

function renderStatsSessionRow(session) {
  const score = `${session.correctCount || 0}/${session.total || 0}`;
  const status = session.status === "completed"
    ? "завершено"
    : session.status === "abandoned"
      ? "перервано"
      : "триває";
  return `
    <button class="result-row stats-session-row${session.id === selectedStatsSessionId ? " is-selected" : ""}" type="button" data-stats-session-id="${escapeHtml(session.id)}">
      <strong>${escapeHtml(getNmtSessionLabel(session))}</strong>
      <span>${formatDateTime(session.startedAt)} · результат ${escapeHtml(score)} · ${escapeHtml(status)}</span>
    </button>
  `;
}

function renderStatsSessionDetails(session) {
  const answers = session.answers || [];
  return `
    <div class="linked-panel stats-session-detail">
      <strong>${escapeHtml(getNmtSessionLabel(session))}</strong>
      <p>Старт: ${formatDateTime(session.startedAt)}${session.completedAt ? ` · завершення: ${formatDateTime(session.completedAt)}` : ""}</p>
      <div class="stats-answer-list">
        ${answers.length ? answers.map((answer) => `
          <div class="stats-answer-row ${answer.isCorrect ? "is-correct" : "is-wrong"}">
            <span>№ ${escapeHtml(answer.number)}</span>
            <strong>${answer.isCorrect ? "правильно" : "неправильно"}</strong>
            <small>${answer.source === "reveal" ? "перегляд відповіді" : `вибрано: ${escapeHtml(answer.selectedKey || "-")}`} · правильно: ${escapeHtml(answer.correctKey || "-")}</small>
          </div>
        `).join("") : `<p class="empty-text">У цьому запуску ще немає відповідей.</p>`}
      </div>
    </div>
  `;
}

function exportNmtStatsFile() {
  const payload = {
    exportedAt: new Date().toISOString(),
    userKey: getStatsUserKey(),
    sessions: getUserNmtSessions()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeUser = getStatsUserKey().replace(/[^\p{L}\p{N}_-]+/gu, "_");
  link.href = url;
  link.download = `oceanua-test-statystyka-${safeUser}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getNmtYearIds() {
  const configuredYears = ["2025", "2026"];
  const dataYears = Object.keys(nmtData.years || {}).filter((year) => /^\d{4}$/.test(year));
  return Array.from(new Set([...configuredYears, ...dataYears]));
}

function getNmtSubjectCardCount(subject) {
  return (subject.variants || []).reduce((sum, variant) => sum + (variant.cards || []).length, 0);
}

function getNmtPackageValue(subjectId, variantIndex) {
  return `${subjectId}::${variantIndex}`;
}

function parseNmtPackageValue(value) {
  const [subjectId, variantIndex] = String(value || "").split("::");
  return {
    subjectId,
    variantIndex: Number.isFinite(Number(variantIndex)) ? Number(variantIndex) : 0
  };
}

function getNmtPackageOptions(yearData) {
  return Object.entries(yearData.subjects || {}).flatMap(([subjectId, subject]) => {
    const variants = subject.variants || [];
    return variants.map((variant, variantIndex) => {
      const session = variant.session || variant.label || "";
      return {
        subjectId,
        variantIndex,
        value: getNmtPackageValue(subjectId, variantIndex),
        label: `${subject.label || subjectId}${session ? ` · ${session}` : ""}`,
        cardCount: (variant.cards || []).length
      };
    });
  });
}

function getNmtVariantId(variant, index = 0) {
  return variant.id || `variant_${index + 1}`;
}

function getNmtDraftKey(card) {
  return [activeNmtSessionId, selectedNmtYear, selectedNmtSubject, selectedNmtVariantIndex, card?.number || ""].join(":");
}

function findNmtSession(stats, sessionId) {
  return stats.sessions.find((session) => session.id === sessionId) || null;
}

function createNmtSession(subject, variant, variantIndex, total) {
  const profile = getProfile();
  const now = new Date().toISOString();
  const session = {
    id: `nmt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    userKey: getStatsUserKey(),
    userName: profile.name?.trim() || "Гість",
    placeCode: profile.placeCode || "",
    placeName: profile.placeName || profile.city || "",
    startedAt: now,
    updatedAt: now,
    completedAt: "",
    status: "in_progress",
    yearId: selectedNmtYear,
    yearLabel: nmtData.years?.[selectedNmtYear]?.label || `НМТ ${selectedNmtYear}`,
    subjectId: selectedNmtSubject,
    subjectLabel: subject.label || selectedNmtSubject,
    variantId: getNmtVariantId(variant, variantIndex),
    variantLabel: [variant.label || `Варіант ${variantIndex + 1}`, variant.session || ""].filter(Boolean).join(" · "),
    total,
    answeredCount: 0,
    correctCount: 0,
    wrongCount: 0,
    answers: []
  };
  const stats = getNmtStats();
  stats.sessions.unshift(session);
  saveNmtStats(stats);
  activeNmtSessionId = session.id;
  return session;
}

function ensureNmtSession(subject, variant, variantIndex, total) {
  const stats = getNmtStats();
  const userKey = getStatsUserKey();
  const variantId = getNmtVariantId(variant, variantIndex);
  const activeSession = activeNmtSessionId ? findNmtSession(stats, activeNmtSessionId) : null;
  const canReuseSession = (session) => (
    session
    && (session.status === "in_progress" || session.status === "completed")
    && session.userKey === userKey
    && session.yearId === selectedNmtYear
    && session.subjectId === selectedNmtSubject
    && session.variantId === variantId
  );

  if (canReuseSession(activeSession)) {
    return activeSession;
  }

  const existingSession = stats.sessions.find((session) => canReuseSession(session));

  if (existingSession) {
    activeNmtSessionId = existingSession.id;
    return existingSession;
  }

  return createNmtSession(subject, variant, variantIndex, total);
}

function startNewNmtSession(subject, variant, variantIndex, total) {
  const stats = getNmtStats();
  const currentSession = activeNmtSessionId ? findNmtSession(stats, activeNmtSessionId) : null;
  if (currentSession && currentSession.status === "in_progress") {
    currentSession.status = "abandoned";
    currentSession.updatedAt = new Date().toISOString();
  }
  saveNmtStats(stats);
  return createNmtSession(subject, variant, variantIndex, total);
}

function getNmtSessionAnswer(session, cardNumber) {
  return (session?.answers || []).find((answer) => Number(answer.number) === Number(cardNumber)) || null;
}

function normalizeNmtAnswer(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .toLocaleLowerCase("uk-UA");
}

function areNmtAnswersEqual(selectedKey, correctKey, type = "single") {
  if (type === "multi") {
    const selected = String(selectedKey || "").split(";").filter(Boolean).sort();
    const correct = String(correctKey || "").split(";").filter(Boolean).sort();
    return selected.length === correct.length && selected.every((item, index) => item === correct[index]);
  }
  return normalizeNmtAnswer(selectedKey) === normalizeNmtAnswer(correctKey);
}

function recomputeNmtSession(session) {
  session.answeredCount = session.answers.length;
  session.correctCount = session.answers.filter((answer) => answer.isCorrect).length;
  session.wrongCount = session.answers.filter((answer) => !answer.isCorrect).length;
  if (session.answeredCount >= session.total) {
    session.status = "completed";
    session.completedAt = session.completedAt || new Date().toISOString();
  }
  session.updatedAt = new Date().toISOString();
}

function recordNmtAnswer(card, selectedKey, source) {
  const stats = getNmtStats();
  const session = activeNmtSessionId ? findNmtSession(stats, activeNmtSessionId) : null;
  if (!session || getNmtSessionAnswer(session, card.number)) {
    return session;
  }

  const normalizedSelected = String(selectedKey || "");
  const isCorrect = source !== "reveal" && areNmtAnswersEqual(normalizedSelected, card.correctKey || "", card.type || "single");
  session.answers.push({
    number: card.number,
    externalId: card.externalId || "",
    type: card.type || "single",
    selectedKey: normalizedSelected,
    correctKey: card.correctKey || "",
    isCorrect,
    source,
    answeredAt: new Date().toISOString()
  });
  recomputeNmtSession(session);
  saveNmtStats(stats);
  return session;
}

function renderNmtSection(
  yearId = selectedNmtYear,
  subjectId = selectedNmtSubject,
  cardIndex = selectedNmtCardIndex,
  variantIndex = selectedNmtVariantIndex
) {
  const years = getNmtYearIds();
  const previousYear = selectedNmtYear;
  const previousSubject = selectedNmtSubject;
  selectedNmtYear = years.includes(String(yearId)) ? String(yearId) : (years[0] || "2025");

  const yearData = nmtData.years?.[selectedNmtYear] || {
    label: `НМТ ${selectedNmtYear}`,
    subjects: {}
  };
  const subjects = Object.entries(yearData.subjects || {});
  const packageOptions = getNmtPackageOptions(yearData);

  selectedNmtSubject = subjectId && yearData.subjects?.[subjectId]
    ? subjectId
    : (subjects[0]?.[0] || "");

  if (previousYear !== selectedNmtYear || previousSubject !== selectedNmtSubject) {
    selectedNmtCardIndex = 0;
    selectedNmtVariantIndex = 0;
  } else {
    selectedNmtCardIndex = Number.isFinite(Number(cardIndex)) ? Number(cardIndex) : 0;
    selectedNmtVariantIndex = Number.isFinite(Number(variantIndex)) ? Number(variantIndex) : 0;
  }

  const activeSubject = selectedNmtSubject ? yearData.subjects[selectedNmtSubject] : null;
  const variants = activeSubject?.variants || [];
  if (selectedNmtVariantIndex >= variants.length) {
    selectedNmtVariantIndex = Math.max(0, variants.length - 1);
  }
  if (selectedNmtVariantIndex < 0) selectedNmtVariantIndex = 0;

  const activeVariant = variants[selectedNmtVariantIndex] || null;
  const activeCards = activeVariant?.cards || [];
  if (selectedNmtCardIndex >= activeCards.length) {
    selectedNmtCardIndex = Math.max(0, activeCards.length - 1);
  }
  if (selectedNmtCardIndex < 0) selectedNmtCardIndex = 0;

  menuContent.innerHTML = `
    <div class="nmt-workspace">
      <div class="nmt-compact-head">
        <strong>НМТ</strong>
        <div class="nmt-compact-group" aria-label="Рік НМТ">
          ${years.map((year) => {
            const data = nmtData.years?.[year] || { label: `НМТ ${year}`, subjects: {} };
            const subjectCount = Object.keys(data.subjects || {}).length;
            return `
              <button class="${year === selectedNmtYear ? "is-selected" : ""}" type="button" data-nmt-year="${escapeHtml(year)}" title="${subjectCount ? `${subjectCount} предмет(и)` : "матеріали ще не додані"}">
                ${escapeHtml(data.label || `НМТ ${year}`)}
              </button>
            `;
          }).join("")}
        </div>
        ${subjects.length ? `
          <label class="nmt-subject-select">
            <span>Комплект</span>
            <select id="nmtSubjectSelect">
              ${packageOptions.map((option) => `
                <option value="${escapeHtml(option.value)}"${option.subjectId === selectedNmtSubject && option.variantIndex === selectedNmtVariantIndex ? " selected" : ""}>
                  ${escapeHtml(option.label)} · ${option.cardCount} завд.
                </option>
              `).join("")}
            </select>
          </label>
        ` : ""}
      </div>
      ${subjects.length ? (activeSubject ? renderNmtSubject(activeSubject) : "") : `<p class="empty-text">Матеріали ${escapeHtml(yearData.label || selectedNmtYear)} ще не додані.</p>`}
    </div>
  `;
  menuContent.scrollTop = 0;

  menuContent.querySelectorAll("[data-nmt-year]").forEach((button) => {
    button.addEventListener("click", () => renderNmtSection(button.dataset.nmtYear, "", 0, 0));
  });

  menuContent.querySelectorAll("[data-nmt-subject]").forEach((button) => {
    button.addEventListener("click", () => renderNmtSection(selectedNmtYear, button.dataset.nmtSubject, 0, 0));
  });

  const subjectSelect = document.getElementById("nmtSubjectSelect");
  if (subjectSelect) {
    subjectSelect.addEventListener("change", () => {
      const selectedPackage = parseNmtPackageValue(subjectSelect.value);
      renderNmtSection(selectedNmtYear, selectedPackage.subjectId, 0, selectedPackage.variantIndex);
    });
  }

  menuContent.querySelectorAll("[data-nmt-restart]").forEach((button) => {
    button.addEventListener("click", () => {
      if (activeSubject && activeVariant) {
        startNewNmtSession(activeSubject, activeVariant, selectedNmtVariantIndex, activeCards.length);
      }
      renderNmtSection(selectedNmtYear, selectedNmtSubject, 0, selectedNmtVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-card-index]").forEach((button) => {
    button.addEventListener("click", () => renderNmtSection(selectedNmtYear, selectedNmtSubject, Number(button.dataset.nmtCardIndex)));
  });

  menuContent.querySelectorAll("[data-nmt-prev]").forEach((button) => {
    button.addEventListener("click", () => renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex - 1));
  });

  menuContent.querySelectorAll("[data-nmt-next]").forEach((button) => {
    button.addEventListener("click", () => renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex + 1));
  });

  menuContent.querySelectorAll("[data-nmt-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, button.dataset.nmtSelect, "choice");
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const draftKey = getNmtDraftKey(card);
      const selected = new Set(nmtDraftSelections[draftKey] || []);
      const value = button.dataset.nmtMultiSelect;
      if (selected.has(value)) {
        selected.delete(value);
      } else {
        selected.add(value);
      }
      nmtDraftSelections[draftKey] = Array.from(selected);
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-multi-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const selected = nmtDraftSelections[getNmtDraftKey(card)] || [];
      recordNmtAnswer(card, selected.join(";"), "multi");
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-input-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const input = document.getElementById("nmtOpenAnswer");
      recordNmtAnswer(card, input?.value || "", "input");
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      recordNmtAnswer(card, "", "reveal");
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });
}

function renderNmtSubject(subject) {
  const variants = subject.variants || [];
  const activeVariantIndex = Math.min(Math.max(selectedNmtVariantIndex, 0), Math.max(variants.length - 1, 0));

  return `
    ${variants.length
      ? renderNmtVariant(variants[activeVariantIndex], activeVariantIndex)
      : `<p class="empty-text">Комплекти для цього предмета ще не додані.</p>`}
  `;
}

function renderNmtVariant(variant, variantIndex = 0) {
  const cards = variant.cards || [];
  const activeIndex = Math.min(Math.max(selectedNmtCardIndex, 0), Math.max(cards.length - 1, 0));
  const session = cards.length ? ensureNmtSession(
    nmtData.years?.[selectedNmtYear]?.subjects?.[selectedNmtSubject] || {},
    variant,
    variantIndex,
    cards.length
  ) : null;
  return `
    <section class="nmt-variant">
      ${cards.length ? `
        <div class="nmt-session-strip">
          <strong>${escapeHtml(nmtData.years?.[selectedNmtYear]?.subjects?.[selectedNmtSubject]?.label || selectedNmtSubject)} · ${escapeHtml(variant.label || "Варіант")}${variant.session ? ` · ${escapeHtml(variant.session)}` : ""}</strong>
          <span>Старт: ${formatDateTime(session.startedAt)}</span>
          <span>${session.correctCount} правильних · ${session.wrongCount} неправильних · ${session.answeredCount}/${session.total}</span>
          <button class="ghost-action" type="button" data-nmt-restart>Почати заново</button>
        </div>
        <div class="nmt-task-nav" aria-label="Завдання НМТ">
          ${cards.map((card, index) => {
            const answer = getNmtSessionAnswer(session, card.number);
            const classes = [
              index === activeIndex ? "is-selected" : "",
              answer ? (answer.isCorrect ? "is-correct" : "is-wrong") : ""
            ].filter(Boolean).join(" ");
            return `<button class="${classes}" type="button" data-nmt-card-index="${index}">${escapeHtml(card.number || index + 1)}</button>`;
          }).join("")}
        </div>
        ${renderNmtCard(cards[activeIndex], activeIndex, cards.length, session)}
      ` : `<p class="empty-text">Картки для цього варіанта ще не додані.</p>`}
    </section>
  `;
}

function renderNmtCard(card, index, total, session) {
  const number = card.number || index + 1;
  const topic = card.topic || "Завдання НМТ";
  const isMatching = card.type === "matching";
  const isInput = card.type === "input";
  const isOrder = card.type === "order";
  const isMulti = card.type === "multi";
  const question = card.questionHtml || card.front || `Завдання ${number}`;
  const correctKey = card.correctKey || card.key || "";
  const response = getNmtSessionAnswer(session, number);
  const typeLabel = isMatching
    ? "Встановлення відповідності"
    : isInput
      ? "Відкрита відповідь"
      : isOrder
        ? "Встановлення послідовності"
      : isMulti
        ? "Кілька правильних відповідей"
        : "Вибір однієї відповіді";
  const revealLabel = isMatching
    ? "Показати відповідність"
    : isInput
      ? "Показати правильну відповідь"
      : isOrder
        ? "Показати правильну послідовність"
      : isMulti
        ? "Показати правильні варіанти"
        : "Показати правильний варіант";
  const cardDetails = [topic, typeLabel].filter((item, index, items) => item && items.indexOf(item) === index);

  return `
    <article class="nmt-test-card${response ? " is-open" : ""}">
      <div class="nmt-card-header">
        <span class="nmt-card-number">Завдання ${escapeHtml(number)} з ${escapeHtml(total)}</span>
        ${cardDetails.map((detail) => `<span>${escapeHtml(detail)}</span>`).join("")}
      </div>
      <div class="nmt-question">${sanitizeNmtHtml(question)}</div>
      ${isMatching
        ? renderNmtMatchingCard(card, response)
        : isInput
          ? renderNmtInputCard(card, response)
          : isOrder
            ? renderNmtOrderCard(card, response)
            : renderNmtChoiceCard(card, correctKey, response)}
      <div class="nmt-card-actions">
        <button class="ghost-action" type="button" data-nmt-prev ${index <= 0 ? "disabled" : ""}>Попереднє</button>
        <button class="primary-action" type="button" data-nmt-answer="${escapeHtml(index)}" aria-expanded="${response ? "true" : "false"}" ${response ? "disabled" : ""}>
          ${response ? "Відповідь показана" : revealLabel}
        </button>
        <button class="ghost-action" type="button" data-nmt-next ${index >= total - 1 ? "disabled" : ""}>Наступне</button>
      </div>
      <div class="nmt-correct-answer" ${response ? "" : "hidden"}>
        <strong>${renderNmtCorrectTitle(card)}</strong>
        ${response?.source === "reveal" ? `<p class="nmt-answer-note">Відповідь переглянуто без вибору. У статистиці це зараховано як неправильну відповідь.</p>` : ""}
        ${renderNmtCorrectContent(card, response)}
      </div>
    </article>
  `;
}

function renderNmtChoiceCard(card, correctKey, response) {
  const options = card.options || [];
  if (!options.length) {
    return `<p class="empty-text">Варіанти відповіді для цього завдання ще не додані.</p>`;
  }

  if (card.type === "multi") {
    return `
      <div class="nmt-options">
        ${options.map((option) => renderNmtOption(option, correctKey, response)).join("")}
      </div>
      ${renderNmtChoiceGrid(options, correctKey, response, card)}
    `;
  }

  return `
    <div class="nmt-options">
      ${options.map((option) => renderNmtOption(option, correctKey, response, !response)).join("")}
    </div>
  `;
}

function renderNmtInputCard(card, response) {
  return `
    <div class="nmt-input-answer">
      <input class="text-field" id="nmtOpenAnswer" type="text" value="${escapeHtml(response?.selectedKey || "")}" placeholder="Введіть відповідь" ${response ? "disabled" : ""}>
      <button class="primary-action" type="button" data-nmt-input-submit ${response ? "disabled" : ""}>Відповісти</button>
    </div>
  `;
}

function renderNmtOrderCard(card, response) {
  return `
    <div class="nmt-options">
      ${(card.options || []).map((option) => renderNmtOption(option, "", response)).join("")}
    </div>
    <div class="nmt-input-answer">
      <input class="text-field" id="nmtOpenAnswer" type="text" value="${escapeHtml(response?.selectedKey || "")}" placeholder="Наприклад: 1А;2Г;3В;4Б" ${response ? "disabled" : ""}>
      <button class="primary-action" type="button" data-nmt-input-submit ${response ? "disabled" : ""}>Відповісти</button>
    </div>
  `;
}

function renderNmtMatchingCard(card, response) {
  return `
    <div class="nmt-match-layout">
      <div class="nmt-match-column">
        <h4>Фрагменти</h4>
        <div class="nmt-options">
          ${(card.prompts || []).map((option) => renderNmtOption(option, "", response)).join("")}
        </div>
      </div>
      <div class="nmt-match-column">
        <h4>Варіанти</h4>
        <div class="nmt-options">
          ${(card.options || []).map((option) => renderNmtOption(option, "", response)).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderNmtChoiceGrid(options, correctKey, response, card) {
  const isMulti = card.type === "multi";
  const correctKeys = String(correctKey || "").split(";").filter(Boolean);
  const selectedKeys = response
    ? String(response.selectedKey || "").split(";").filter(Boolean)
    : (isMulti ? (nmtDraftSelections[getNmtDraftKey(card)] || []) : []);
  return `
    <div class="nmt-choice-block${isMulti ? " is-multi" : ""}">
      <span>${isMulti ? "Позначте всі правильні відповіді:" : "Позначте відповідь:"}</span>
      <div class="nmt-choice-grid">
        ${options.map((option) => {
          const isDraftSelected = !response && selectedKeys.includes(option.key);
          const isCorrect = response && correctKeys.includes(option.key);
          const isWrong = response && selectedKeys.includes(option.key) && !correctKeys.includes(option.key);
          const classes = [
            isDraftSelected ? "is-draft-selected" : "",
            isCorrect ? "is-correct" : "",
            isWrong ? "is-wrong" : ""
          ].filter(Boolean).join(" ");
          return `
            <button class="${classes}" type="button" ${isMulti ? `data-nmt-multi-select="${escapeHtml(option.key || "")}"` : `data-nmt-select="${escapeHtml(option.key || "")}"`} ${response ? "disabled" : ""}>
              <span>${escapeHtml(option.key || "")}</span>
              <i aria-hidden="true"></i>
            </button>
          `;
        }).join("")}
      </div>
      ${isMulti ? `<button class="primary-action nmt-multi-submit" type="button" data-nmt-multi-submit ${response ? "disabled" : ""}>Відповісти</button>` : ""}
    </div>
  `;
}

function renderNmtOption(option, correctKey, response = null, selectable = false) {
  const correctKeys = String(correctKey || "").split(";").filter(Boolean);
  const selectedKeys = String(response?.selectedKey || "").split(";").filter(Boolean);
  const isCorrect = response && correctKeys.includes(option.key);
  const isWrong = response && selectedKeys.includes(option.key) && !correctKeys.includes(option.key);
  const classes = [
    isCorrect ? "is-correct" : "",
    isWrong ? "is-wrong" : "",
    selectable ? "is-selectable" : ""
  ].filter(Boolean).join(" ");
  const inner = `
    <span class="nmt-option-key">${escapeHtml(option.key || "")}</span>
    <span class="nmt-option-text">${sanitizeNmtHtml(option.textHtml || option.text || "")}</span>
  `;
  if (selectable) {
    return `
      <button class="nmt-option ${classes}" type="button" data-nmt-select="${escapeHtml(option.key || "")}">
        ${inner}
      </button>
    `;
  }
  return `
    <div class="nmt-option ${classes}" data-nmt-option="${escapeHtml(option.key || "")}" data-nmt-correct="${escapeHtml(correctKey || "")}">
      ${inner}
    </div>
  `;
}

function renderNmtCorrectTitle(card) {
  if (card.type === "matching") return "Правильна відповідність";
  if (card.type === "input") return `Правильна відповідь: ${escapeHtml(card.correctKey || "-")}`;
  if (card.type === "order") return `Правильна послідовність: ${escapeHtml(card.correctKey || "-")}`;
  if (card.type === "multi") return `Правильні варіанти: ${escapeHtml(card.correctKey || "-")}`;
  return `Правильний варіант: ${escapeHtml(card.correctKey || "-")}`;
}

function renderNmtCorrectContent(card, response) {
  if (card.type === "matching") {
    return renderNmtCorrectPairs(card.correctPairs || [], card.correctKey || "");
  }
  if (card.type === "input") {
    return `<p>${escapeHtml(card.answerText || card.correctKey || "Відповідь ще не додана.")}</p>`;
  }
  if (card.type === "order") {
    return renderNmtCorrectPairs(
      String(card.correctKey || "").split(";").filter(Boolean).map((part) => ({
        prompt: part.slice(0, 1),
        option: part.slice(1)
      })),
      card.correctKey || ""
    );
  }
  const correctKeys = String(card.correctKey || "").split(";").filter(Boolean);
  if (card.answerText) {
    return `<p class="nmt-answer-extended">${escapeHtml(card.answerText)}</p>`;
  }
  const correctOptions = (card.options || []).filter((option) => correctKeys.includes(option.key));
  if (!correctOptions.length) {
    return `<p>${escapeHtml(card.correctKey || "Відповідь ще не додана.")}</p>`;
  }
  return `<div class="nmt-correct-option">${correctOptions.map((option) => renderNmtOption(option, card.correctKey || "", response)).join("")}</div>`;
}

function renderNmtCorrectPairs(pairs, fallback) {
  if (!pairs.length) {
    return `<p>${escapeHtml(fallback || "Відповідь ще не додана.")}</p>`;
  }

  return `
    <div class="nmt-correct-pairs">
      ${pairs.map((pair) => `<span>${escapeHtml(pair.prompt)} - ${escapeHtml(pair.option)}</span>`).join("")}
    </div>
  `;
}

function sanitizeNmtHtml(value) {
  const allowed = ["p", "br", "b", "strong", "i", "em", "u", "sup", "sub", "ul", "ol", "li", "img"];
  return String(value || "")
    .replace(/<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<img\b([^>]*)>/gi, (match, attrs) => {
      const src = (attrs.match(/\ssrc=["']([^"']+)["']/i) || [])[1] || "";
      const alt = (attrs.match(/\salt=["']([^"']*)["']/i) || [])[1] || "";
      if (!/^https:\/\/zno\.osvita\.ua\//.test(src)) return "";
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}">`;
    })
    .replace(/<\s*([a-z0-9]+)(?:\s[^>]*)?\s*\/?>/gi, (match, tag) => {
      const normalized = tag.toLowerCase();
      if (!allowed.includes(normalized)) return "";
      if (normalized === "img") return match;
      return normalized === "br" ? "<br>" : `<${normalized}>`;
    })
    .replace(/<\s*\/\s*([a-z0-9]+)\s*>/gi, (match, tag) => {
      const normalized = tag.toLowerCase();
      return allowed.includes(normalized) && normalized !== "br" ? `</${normalized}>` : "";
    });
}

function renderStaticSection(title, paragraphs) {
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Розділ меню</span>
      <h2>${title}</h2>
      ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  `;
}

backButton.addEventListener("click", goBack);
homeButton.addEventListener("click", () => openView("ukraine"));
mapImage.addEventListener("error", showLoadError);
menuToggle.addEventListener("click", () => {
  if (mainMenu.classList.contains("is-open")) {
    closeMenu();
    return;
  }
  openMenu();
});
profileEntry.addEventListener("click", () => openMenu("settings"));
closeMenuButton.addEventListener("click", closeMenu);
drawerBackdrop.addEventListener("click", closeMenu);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainMenu.classList.contains("is-open")) {
    closeMenu();
    return;
  }
  if (event.key === "Escape" && currentViewId !== "ukraine") {
    goBack();
  }
});

window.addEventListener("hashchange", () => {
  if (suppressHashChange) return;
  const viewId = location.hash.replace(/^#/, "");
  openView(viewId || "ukraine", false);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch(() => {});
}

updateProfileStatus();
renderMenu("cities");
openView(location.hash.replace(/^#/, "") || "ukraine", false);
