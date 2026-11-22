const menuItems = [
  { id: "flashcards", label: "Флешкартки", labelEn: "Flashcards" },
  { id: "stats", label: "Статистика", labelEn: "Statistics" },
  { id: "python", label: "Інтерактивні уроки Python", labelEn: "Interactive Python lessons" },
  { id: "oasis", label: "STEAM-модуль «Оазис»", labelEn: "STEM module “Oasis”" },
  { id: "schedule", label: "Розклад", labelEn: "Schedule" },
  { id: "profile", label: "Профіль", labelEn: "Profile" },
  { id: "about", label: "Про програму", labelEn: "About" }
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
const availableSchools = Array.isArray(window.OCEANUA_SCHOOLS) ? window.OCEANUA_SCHOOLS : [];
const profileStorageKey = "oceanua-profile";
const registeredUsersStorageKey = "oceanua-registered-users";
const adminProposalsStorageKey = "oceanua-admin-proposals";
const nmtStatsStorageKey = "oceanua-nmt-statistics";
const scheduleGuestIdStorageKey = "oceanua-schedule-guest-id";
const schedulePhotoDatabaseName = "oceanua-schedule-photos";
const schedulePhotoStoreName = "photos";
const oceanuaApp = document.querySelector(".oceanua-app");
const menuToggle = document.getElementById("menuToggle");
const profileEntry = document.getElementById("profileEntry");
const profileEntryText = document.getElementById("profileEntryText");
const mainMenu = document.getElementById("mainMenu");
const sectionBack = document.getElementById("sectionBack");
const menuList = document.getElementById("menuList");
const menuContent = document.getElementById("menuContent");

let activeMenuId = "";
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
const loadedFlashcardScripts = new Set();
const flashcardScriptPromises = new Map();
let flashcardRenderRequest = 0;
let selectedOblastIndex = -1;
let selectedRaionIndex = -1;
let selectedHromadaIndex = -1;
let searchIndex = null;
let profilePlaceSelectionMode = false;
let schedulePhotoDbPromise = null;
let schedulePhotoObjectUrl = "";
let scheduleRenderToken = 0;
let scheduleFallbackGuestId = "";

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
    groupName: String(profile.groupName || "").trim(),
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
    groupName: profile.groupName || "",
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
    const sessions = Array.isArray(stats.sessions) ? stats.sessions : [];
    sessions.forEach(updateNmtSessionScore);
    return { sessions };
  } catch {
    return { sessions: [] };
  }
}

function getUserNmtSessions() {
  const userKey = getStatsUserKey();
  return getNmtStats().sessions.filter((session) => (
    session && (session.userKey || "guest") === userKey
  ));
}

function isPythonStatsSession(session) {
  return String(session?.yearId || "") === "python";
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
    const variants = [];

    if (subjectConfig.aggregateYear) {
      // Псевдо-предмет "НМТ <рік>": збирає всі варіанти з усіх реальних
      // предметів НМТ за вказаний рік у єдиний список праворуч.
      const yearData = nmtData.years?.[subjectConfig.aggregateYear];
      const yearSubjects = yearData?.subjects || {};
      Object.entries(yearSubjects).forEach(([realSubjectId, realSubject]) => {
        (realSubject.variants || []).forEach((variant, index) => {
          variants.push({
            ...variant,
            id: `${subjectConfig.aggregateYear}_${realSubjectId}_${getNmtVariantId(variant, index)}`,
            label: `${realSubject.label || realSubjectId}${variant.label ? ` · ${variant.label}` : ""}`,
            session: `${subjectConfig.aggregateYear}${variant.session ? ` · ${variant.session}` : ""}`,
            sourceYear: subjectConfig.aggregateYear,
            sourceSubjectId: realSubjectId
          });
        });
      });
    } else {
      const sourceYears = subjectConfig.sourceYears || config.sourceYears || getNmtYearIds();
      sourceYears.forEach((sourceYear) => {
        const sourceSubject = nmtData.years?.[sourceYear]?.subjects?.[subjectConfig.id];
        if (!sourceSubject) return;

        (sourceSubject.variants || []).forEach((variant, index) => {
          variants.push({
            ...variant,
            cards: (variant.cards || []).filter((card) => card.reviewStatus !== "needs_revision").map((card, index) => ({...card, number: index + 1})),
            excludedCardCount: (variant.cards || []).filter((card) => card.reviewStatus === "needs_revision").length,
            id: `${sourceYear}_${getNmtVariantId(variant, index)}`,
            label: variant.label || `Варіант ${index + 1}`,
            session: `${sourceYear}${variant.session ? ` · ${variant.session}` : ""}`,
            sourceYear,
            sourceSubjectId: subjectConfig.id
          });
        });
      });
    }

    if (variants.length || subjectConfig.dataFile) {
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

function buildNmtStandaloneFlashcardData() {
  const subjects = {};
  ["2026", "2025"].forEach((year) => {
    const yearSubjects = nmtData.years?.[year]?.subjects || {};
    const variants = [];
    Object.entries(yearSubjects).forEach(([realSubjectId, realSubject]) => {
      (realSubject.variants || []).forEach((variant, index) => {
        variants.push({
          ...variant,
          id: `${year}_${realSubjectId}_${getNmtVariantId(variant, index)}`,
          label: `${realSubject.label || realSubjectId}${variant.label ? ` · ${variant.label}` : ""}`,
          session: `${year}${variant.session ? ` · ${variant.session}` : ""}`,
          sourceYear: year,
          sourceSubjectId: realSubjectId
        });
      });
    });
    if (variants.length) {
      subjects[year] = { id: year, label: year, variants };
    }
  });
  return {
    label: "НМТ",
    description: "",
    subjects,
    pendingSubjects: []
  };
}

function getFlashcardGradeData(grade) {
  const key = getFlashcardYearKey(grade);
  const data = grade === "nmt" ? buildNmtStandaloneFlashcardData() : buildFlashcardGradeData(grade);
  nmtData.years[key] = data;
  return data;
}

function loadFlashcardScript(source) {
  if (!source || loadedFlashcardScripts.has(source)) return Promise.resolve();
  if (flashcardScriptPromises.has(source)) return flashcardScriptPromises.get(source);

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = source;
    script.async = true;
    script.addEventListener("load", () => {
      loadedFlashcardScripts.add(source);
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(`Не вдалося завантажити ${source}`)), { once: true });
    document.head.appendChild(script);
  }).catch((error) => {
    flashcardScriptPromises.delete(source);
    throw error;
  });

  flashcardScriptPromises.set(source, promise);
  return promise;
}

async function ensureFlashcardData(grade, subjectId = "") {
  if (grade === "nmt") return;
  const config = gradeFlashcardCatalog.grades?.[grade];
  await loadFlashcardScript(config?.dataFile);
  const subjectConfig = (config?.subjects || []).find((subject) => subject.id === subjectId) || config?.subjects?.[0];
  await loadFlashcardScript(subjectConfig?.dataFile);
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
    groupName: document.getElementById("profileGroup")?.value.trim() || "",
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

  saveProfilePlace({
    ...context,
    name,
    type
  });
  const directory = window.OCEANUA_CITY_EDUCATION?.[code];
  const matches = getProfileSchoolMatches(getProfile());
  if (directory || matches.length) {
    renderCityEducationDirectory(directory || {name, checkedAt: "за даними довідника", schools: matches.map(s => ({...s, type: "Навчальний заклад", sources: []})), colleges: []});
    showMenuNotice("Оберіть навчальний заклад, щоб заповнити місто та заклад у профілі.");
  } else {
    profilePlaceSelectionMode = false;
    openSubmenu("profile-edit");
    showMenuNotice("Місто вибрано. Для нього список закладів поки не підключено.");
  }
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
  const directory = window.OCEANUA_CITY_EDUCATION?.[placeCode];
  if (directory) return [...directory.schools, ...directory.colleges].map(school => ({
    name: school.name, code: `${school.type === "Фаховий коледж" ? "edbo" : "isuo"}:${school.id}`,
    address: school.address, placeCode
  }));
  if (!availableSchools.length) return [];
  const filtered = placeCode
    ? availableSchools.filter((school) => getSchoolPlaceCode(school) === placeCode)
    : availableSchools;
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
    groupName: placeChanged ? "" : profile.groupName || "",
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
  const english = window.OCEANUA_LOCALE?.language === "en";
  profileEntryText.textContent = name || (english ? "Guest" : "Гість");
  profileEntry.setAttribute("aria-label", name
    ? (english ? `Profile: ${name}` : `Профіль: ${name}`)
    : (english ? "Profile: Guest" : "Профіль: Гість"));
}

function openMenu(sectionId = "") {
  if (sectionId) {
    openSubmenu(sectionId);
    return;
  }
  returnHome();
}

function returnHome() {
  oceanuaApp.classList.remove("is-section-view");
  activeMenuId = "";
  activeSubmenuId = "";
  mainMenu.classList.add("is-open");
  mainMenu.setAttribute("aria-hidden", "false");
  menuContent.classList.remove("is-open");
  menuContent.setAttribute("aria-hidden", "true");
  menuContent.removeAttribute("data-active-section");
  menuContent.innerHTML = "";
  sectionBack.hidden = true;
  renderMenu("");
}

function openSubmenu(sectionId) {
  activeMenuId = sectionId;
  activeSubmenuId = sectionId;
  menuContent.dataset.activeSection = sectionId;
  renderMenuContent(sectionId);
  oceanuaApp.classList.add("is-section-view");
  mainMenu.classList.remove("is-open");
  mainMenu.setAttribute("aria-hidden", "true");
  sectionBack.hidden = false;
  menuContent.classList.add("is-open");
  menuContent.setAttribute("aria-hidden", "false");
  renderMenu(sectionId);
}

function toggleSubmenu(sectionId) {
  openSubmenu(sectionId);
}

function renderMenu(sectionId = activeMenuId) {
  activeMenuId = sectionId;
  menuList.innerHTML = menuItems.map((item) => `
    <button class="menu-item${item.id === activeSubmenuId ? " is-active" : ""}" type="button" data-menu-id="${item.id}"${item.disabled ? " disabled" : ""}>
      <strong>${window.OCEANUA_LOCALE?.language === "en" ? item.labelEn : item.label}</strong>
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
  if (sectionId === "profile-place") {
    renderProfilePlaceSection();
    return;
  }

  if (sectionId === "flashcards") {
    renderFlashcardsSection();
    return;
  }

  if (sectionId === "profile-edit") {
    renderSettingsSection();
    return;
  }

  if (sectionId === "oasis") {
    renderOasisSection();
    return;
  }

  const renderers = {
    stats: renderStatsSection,
    python: () => window.renderPythonLessons(),
    schedule: renderScheduleSection,
    about: () => renderStaticSection("Про програму", [
      "Авторське право © Бортнік О. В. & Бортнік В. М., 2026. Усі права захищено.",
        "Версія 2026.11.21.001345. Оновлено 21.11.2026 о 00:13:45 (Europe/Kyiv)."
    ]),
    profile: renderExitSection
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

function renderProfilePlaceSection() {
  const oblastCount = places.oblastCount || places.oblasts.length;
  const hromadaCount = places.oblasts.reduce((sum, oblast) => sum + Number(oblast.hromadaCount || 0), 0);
  const settlementCount = places.oblasts.reduce((sum, oblast) => sum + Number(oblast.settlementCount || 0), 0);

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Реєстрація профілю</span>
      <h2>Вибір міста</h2>
      <p>Знайдіть населений пункт для профілю: область → район → громада → населений пункт.</p>
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
      if (profilePlaceSelectionMode) {
        showMenuNotice("Для реєстрації розкрийте область і район, потім виберіть конкретний населений пункт.");
        return;
      }
    });
  });

  placeTree.querySelectorAll("[data-raion-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRaionIndex = Number(button.dataset.raionIndex);
      selectedHromadaIndex = -1;
      renderPlaceColumns();
      if (profilePlaceSelectionMode) {
        showMenuNotice("Для реєстрації виберіть громаду і конкретний населений пункт зі списку.");
        return;
      }
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
      };
      if (completeProfilePlaceSelection(settlementName, settlement?.type || "населений пункт", context)) return;
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
    ...getPlaceContext(item)
  };
  if (completeProfilePlaceSelection(item.name, item.type, context)) return;
  showMenuNotice("Вибір міста доступний у формі реєстрації профілю.");
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

function renderCityEducationDirectory(directory) {
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Навчальні заклади</span>
      <h2>${escapeHtml(directory.name)}</h2>
      <p>Школи, гімназії, ліцеї та коледжі · Перевірено ${escapeHtml(directory.checkedAt)}</p>
    </div>
    <div class="action-row">
      <button class="ghost-action" id="educationBack" type="button">Назад до вибору міста</button>
      <button class="ghost-action" id="educationCancel" type="button">До профілю</button>
    </div>
    <label class="education-search" for="educationSearch">Пошук за назвою або адресою
      <input class="text-field" id="educationSearch" type="search" placeholder="Наприклад: гімназія № 3 або медичний" autocomplete="off">
    </label>
    <p id="educationResultCount" role="status"></p>
    <div id="educationGroups"></div>
  `;
  menuContent.classList.add("is-open");
  menuContent.setAttribute("aria-hidden", "false");
  menuContent.scrollTop = 0;
  const renderGroups = () => {
    const query = normalizeText(document.getElementById("educationSearch").value).replace(/\s+/g, " ").trim();
    let matches = 0;
    document.getElementById("educationGroups").innerHTML = [
      { title: "Школи, гімназії та ліцеї", entries: directory.schools },
      { title: "Коледжі", entries: directory.colleges }
    ].map(({title, entries}) => {
      const filtered = entries.filter(entry => normalizeText(`${entry.name} ${entry.address} ${entry.type}`).includes(query));
      matches += filtered.length;
      return `<section class="education-group"><h3>${title} <span>(${filtered.length}${query ? ` із ${entries.length}` : ""})</span></h3>
        ${filtered.length ? filtered.map(entry => `<article class="linked-panel education-card">
          <h4><button class="profile-school-link" type="button" data-profile-school data-education-id="${escapeHtml(entry.id || entry.code)}">${escapeHtml(entry.name)}</button></h4>
          <p>${escapeHtml(entry.type)} · ${escapeHtml(entry.address)}</p>
          ${renderSchoolSources(entry.sources)}
        </article>`).join("") : '<p class="education-empty">За цим запитом закладів не знайдено.</p>'}
      </section>`;
    }).join("");
    document.querySelectorAll("[data-profile-school]").forEach(button => button.addEventListener("click", () => {
      if (!profilePlaceSelectionMode) return;
      const entry = [...directory.schools, ...directory.colleges].find(s => String(s.id || s.code) === button.dataset.educationId);
      if (!entry) return;
      const profile = getProfile();
      const schoolPrefix = entry.type === "Фаховий коледж" ? "edbo" : "isuo";
      saveProfile({...profile, schoolName: entry.name, schoolCode: entry.code || (schoolPrefix + ":" + (entry.id || "")), schoolAddress: entry.address || "", schoolPlaceCode: profile.placeCode || "", groupName: profile.schoolName === entry.name ? profile.groupName || "" : ""});
      profilePlaceSelectionMode = false;
      openSubmenu("profile-edit");
      showMenuNotice("Місто та навчальний заклад вибрано.");
    }));
    document.getElementById("educationResultCount").textContent = `Знайдено закладів: ${matches} із ${directory.schools.length + directory.colleges.length}`;
  };
  document.getElementById("educationSearch").addEventListener("input", renderGroups);
  document.getElementById("educationBack").addEventListener("click", () => openSubmenu("profile-place"));
  document.getElementById("educationCancel")?.addEventListener("click", () => { profilePlaceSelectionMode = false; openSubmenu("profile-edit"); });
  renderGroups();
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

function showMenuNotice(text) {
  if (menuContent.getAttribute("aria-hidden") === "true") {
    openSubmenu(activeMenuId || "profile-place");
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

async function renderFlashcardsSection(
  gradeId = selectedFlashcardGrade || getDefaultFlashcardGrade(),
  subjectId = selectedFlashcardSubject,
  cardIndex = selectedFlashcardCardIndex,
  variantIndex = selectedFlashcardVariantIndex
) {
  const requestId = ++flashcardRenderRequest;
  const requestedGrade = String(gradeId || getDefaultFlashcardGrade());
  menuContent.innerHTML = `<p class="empty-text">Завантаження карток ${escapeHtml(requestedGrade === "nmt" ? "НМТ" : `${requestedGrade} класу`)}...</p>`;
  try {
    await ensureFlashcardData(requestedGrade, subjectId);
    if (requestId !== flashcardRenderRequest || activeMenuId !== "flashcards") return;
    renderLoadedFlashcardsSection(requestedGrade, subjectId, cardIndex, variantIndex);
  } catch (error) {
    if (requestId !== flashcardRenderRequest) return;
    menuContent.innerHTML = `
      <div class="linked-panel">
        <strong>Не вдалося завантажити картки</strong>
        <p>${escapeHtml(error.message || "Помилка завантаження файлу.")}</p>
        <button class="primary-action" type="button" data-flash-retry>Спробувати ще раз</button>
      </div>
    `;
    menuContent.querySelector("[data-flash-retry]")?.addEventListener("click", () => {
      renderFlashcardsSection(requestedGrade, subjectId, cardIndex, variantIndex);
    });
  }
}

function renderLoadedFlashcardsSection(
  gradeId = selectedFlashcardGrade || getDefaultFlashcardGrade(),
  subjectId = selectedFlashcardSubject,
  cardIndex = selectedFlashcardCardIndex,
  variantIndex = selectedFlashcardVariantIndex
) {
  const classes = getFlashcardGrades();
  const previousGrade = selectedFlashcardGrade;
  const previousSubject = selectedFlashcardSubject;
  const requestedGrade = String(gradeId || getDefaultFlashcardGrade());
  selectedFlashcardGrade = (schoolSubjectsByGrade[requestedGrade] || requestedGrade === "nmt")
    ? requestedGrade
    : getDefaultFlashcardGrade();

  const flashYearKey = getFlashcardYearKey(selectedFlashcardGrade);
  const gradeData = getFlashcardGradeData(selectedFlashcardGrade);
  const subjects = sortFlashcardSubjectEntries(Object.entries(gradeData.subjects || {}));

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
      <div class="flashcards-section-head">
        <div class="flashcards-class-row">
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
            <button class="${selectedFlashcardGrade === "nmt" ? "is-selected" : ""}" type="button" data-flash-grade="nmt" title="Картки для підготовки до НМТ">
              НМТ
            </button>
          </div>
        </div>
        <div class="flashcards-select-row${variantOptions.length ? "" : " is-single-select"}">
          ${subjects.length ? `
            <label class="nmt-subject-select">
              <span>${selectedFlashcardGrade === "nmt" ? "Предмет" : "Підручник"}</span>
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
              <span>${selectedFlashcardGrade === "nmt" ? "Варіант тесту" : "Назва параграфа"}</span>
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
      </div>
      ${subjects.length
        ? (activeSubject ? `${(activeSubject.variants || []).some((variant) => variant.excludedCardCount) ? `<p class="empty-text">Запитання з підтвердженими змістовими помилками виключено з тестування до виправлення.</p>` : ""}${renderNmtSubject(activeSubject)}` : "")
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
      if (button.dataset.flashGrade !== "nmt") {
        setActiveLearningGrade(button.dataset.flashGrade);
      }
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
        startNewNmtSession(activeSubject, activeVariant, selectedFlashcardVariantIndex, activeCards);
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), button.dataset.nmtSelect, "choice");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), selected.join(";"), "multi");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), input?.value || "", "input");
      renderFlashcardsSection(selectedFlashcardGrade, selectedFlashcardSubject, selectedFlashcardCardIndex, selectedFlashcardVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedFlashcardCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), "", "reveal");
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
  const subjects = sortFlashcardSubjectEntries(Object.entries(yearData.subjects || {}));
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
        <strong>Python</strong><button type="button" onclick="window.renderPythonLessons()">← Уроки Python</button><button type="button" onclick="window.renderPythonLessons('stats')">Статистика</button>
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
        startNewNmtSession(activeSubject, activeVariant, selectedPythonVariantIndex, activeCards);
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), button.dataset.nmtSelect, "choice");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), selected.join(";"), "multi");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), input?.value || "", "input");
      renderPythonSection(selectedPythonSubject, selectedPythonCardIndex, selectedPythonVariantIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedPythonCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), "", "reveal");
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
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Профіль</span>
      <h2>Реєстрація і редагування профілю</h2>
      <p>Для локальної реєстрації потрібні ім'я, email і телефон. Школа, інший навчальний заклад і клас необов'язкові.</p>
    </div>
    <label class="field-label" for="profileName">Ім'я</label>
    <input class="text-field" id="profileName" type="text" value="${escapeHtml(profile.name || "")}" placeholder="Наприклад: Олена">
    <label class="field-label" for="profileEmail">Email</label>
    <input class="text-field" id="profileEmail" type="email" value="${escapeHtml(profile.email || "")}" placeholder="name@example.com">
    <label class="field-label" for="profilePhone">Телефон</label>
    <input class="text-field" id="profilePhone" type="tel" value="${escapeHtml(profile.phone || "")}" placeholder="+380...">
    <label class="field-label" for="profilePlaceSummary">Місто або населений пункт</label>
    <button class="text-field selected-place profile-place-picker" id="profilePlaceSummary" type="button">
      <strong>${escapeHtml(profile.placeName || profile.city || "Вибрати місто")}</strong>
      <span>${profile.placeCode ? escapeHtml(formatDetails([profile.hromadaName, profile.raionName])) : "Натисніть, щоб вибрати місто та навчальний заклад"}</span>
    </button>
    <label class="field-label" for="profileSchool">Назва навчального закладу</label>
    <input class="text-field profile-place-picker" id="profileSchool" type="text" readonly value="${escapeHtml(profile.schoolName || "")}" placeholder="Вибрати навчальний заклад">
    ${profile.schoolAddress ? `<p class="empty-text">${escapeHtml(profile.schoolAddress)}</p>` : ""}
    <label class="field-label" for="profileClass">Клас <span class="optional-mark">необов'язково</span></label>
    <select class="text-field" id="profileClass">
      <option value="">Не вибрано</option>
      ${Array.from({ length: 12 }, (_, index) => {
        const grade = String(index + 1);
        return `<option value="${grade}"${String(profile.grade || "") === grade ? " selected" : ""}>${grade} клас</option>`;
      }).join("")}
    </select>
    <label class="field-label" for="profileGroup">Назва класу або групи <span class="optional-mark">необов'язково</span></label>
    <input class="text-field" id="profileGroup" type="text" maxlength="80" value="${escapeHtml(profile.groupName || "")}" placeholder="Наприклад: 9-А, 9-Б, 121 або 122">
    <p class="empty-text">Для школи вкажіть повну назву класу з літерою, для коледжу — номер групи. Ця назва зберігатиметься у результатах тестів.</p>
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

  const chooseProfilePlaceAndSchool = () => {
    saveProfileDraftFromSettings({ clearPlaceOnIdentityChange: true });
    profilePlaceSelectionMode = true;
    openSubmenu("profile-place");
    showMenuNotice("Оберіть населений пункт, потім навчальний заклад.");
  };
  document.getElementById("profilePlaceSummary").addEventListener("click", chooseProfilePlaceAndSchool);
  document.getElementById("profileSchool").addEventListener("click", chooseProfilePlaceAndSchool);

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
    openSubmenu("profile");
    showMenuNotice("Ви працюєте як гість.");
  });

  bindAdminPanel();
}

function renderExitSection() {
  const profile = getProfile();
  menuContent.innerHTML = `
    <div class="content-head">
      <span>Профіль</span>
      <h2>Профіль</h2>
      <p>Оберіть гостьовий режим або відкрийте реєстрацію і редагування профілю.</p>
    </div>
    <div class="linked-panel">
      <strong>${escapeHtml(profile.name || "Гість")}</strong>
      <p>${profile.email ? escapeHtml(profile.email) : "Активного зареєстрованого профілю немає."}</p>
    </div>
    <div class="action-row">
      <button class="primary-action" id="continueAsGuest" type="button">Працювати як гість</button>
      <button class="ghost-action" id="stayInProfile" type="button">Реєстрація і редагування профілю</button>
    </div>
  `;

  document.getElementById("continueAsGuest").addEventListener("click", () => {
    profilePlaceSelectionMode = false;
    clearProfile();
    openSubmenu("profile");
    showMenuNotice("Ви працюєте як гість.");
  });

  document.getElementById("stayInProfile").addEventListener("click", () => {
    openSubmenu("profile-edit");
  });
}

function renderStatsSection(sessionId = selectedStatsSessionId) {
  const profile = getProfile();
  const sessions = getUserNmtSessions().filter((session) => !isPythonStatsSession(session));
  const selectedSession = sessions.find((session) => session.id === sessionId) || sessions[0] || null;
  selectedStatsSessionId = selectedSession?.id || "";
  const completedCount = sessions.filter((session) => session.status === "completed").length;
  const totalCorrect = sessions.reduce((sum, session) => sum + Number(session.correctCount || 0), 0);
  const totalWrong = sessions.reduce((sum, session) => sum + Number(session.wrongCount || 0), 0);
  const completedScores = sessions.filter((session) => session.status === "completed" && session.grade12 != null);
  const averageGrade = completedScores.length ? (completedScores.reduce((sum, session) => sum + session.grade12, 0) / completedScores.length).toFixed(1) : "—";

  menuContent.innerHTML = `
    <div class="content-head">
      <span>Результати</span>
      <h2>Статистика</h2>
      <p>Локальна історія запусків тестових карток для користувача ${escapeHtml(profile.name?.trim() || "Гість")}.</p>
    </div>
    <div class="stats-strip stats-overview-strip">
      <div><strong>${sessions.length}</strong><span>запусків</span></div>
      <div><strong>${completedCount}</strong><span>завершено</span></div>
      <div><strong>${totalCorrect}</strong><span>правильних</span></div>
      <div><strong>${totalWrong}</strong><span>неправильних</span></div>
      <div><strong>${averageGrade}</strong><span>середня оцінка завершених тестів / 12</span></div>
    </div>
    ${renderGroupStatsPanel()}
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

  bindGroupStatsPanel();
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
      <span>${formatDateTime(session.startedAt)} · результат ${escapeHtml(score)} · ${escapeHtml(renderNmtGradeLabel(session))} · ${escapeHtml(status)}</span>
    </button>
  `;
}

function renderStatsSessionDetails(session) {
  const answers = session.answers || [];
  return `
    <div class="linked-panel stats-session-detail">
      <strong>${escapeHtml(getNmtSessionLabel(session))}</strong>
      <p>${escapeHtml(formatDetails([session.userName, session.placeName, session.schoolName, session.grade ? `${session.grade} клас` : "", session.groupName ? `Клас / група: ${session.groupName}` : ""]))}</p>
      <p>Старт: ${formatDateTime(session.startedAt)}${session.completedAt ? ` · завершення: ${formatDateTime(session.completedAt)}` : ""}</p>
      <p>${session.correctCount} правильних · ${session.wrongCount} неправильних · ${session.unansweredCount} без відповіді · ${escapeHtml(renderNmtGradeLabel(session))}</p>
      <p>Оцінка = 12 × правильні / усі запитання комплекту, округлено вгору (мінімум 1 бал). До завершення тесту оцінка попередня.</p>
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

let importedGroupSessions = [];

function getGroupStatsSessions() {
  const sessions = [...getNmtStats().sessions, ...importedGroupSessions].filter((session) => !isPythonStatsSession(session));
  const unique = new Map();
  sessions.forEach(session => unique.set(`${session.userKey || ""}:${session.id}`, session));
  return [...unique.values()];
}

function getStatsGroupKey(session) {
  return JSON.stringify([session.placeCode || session.placeName || "", session.schoolCode || normalizeText(session.schoolName || ""), String(session.grade || ""), normalizeText(session.groupName || "").replace(/\s+/g, " ").trim()]);
}

function renderGroupStatsPanel() {
  const groups = new Map();
  getGroupStatsSessions().filter(s => s.groupName && s.schoolName).forEach(s => groups.set(getStatsGroupKey(s), s));
  return `<div class="linked-panel">
    <strong>Статистика класу / групи для вчителя</strong>
    <p>Завантажте JSON-файли статистики учнів з їхніх пристроїв. Виберіть заклад і групу для спільного CSV-файлу. Імпортовані результати доступні до перезавантаження сторінки.</p>
    <label class="field-label" for="groupStatsFiles">Файли статистики учнів (можна декілька)</label>
    <input class="text-field" id="groupStatsFiles" type="file" accept=".json,application/json" multiple>
    <p id="groupImportStatus" role="status"></p>
    <label class="field-label" for="statsGroupSelect">Заклад і клас / група</label>
    <select class="text-field" id="statsGroupSelect">
      ${groups.size ? [...groups].map(([key,s]) => `<option value="${escapeHtml(key)}">${escapeHtml(formatDetails([s.placeName, s.schoolName, s.grade ? `${s.grade} клас` : "", s.groupName]))}</option>`).join("") : '<option value="">Немає результатів із закладом та групою</option>'}
    </select>
    <button class="ghost-action full-action" id="exportGroupStats" type="button"${groups.size ? "" : " disabled"}>Завантажити статистику групи (CSV)</button>
  </div>`;
}

function bindGroupStatsPanel() {
  document.getElementById("groupStatsFiles").addEventListener("change", async event => {
    let imported = 0;
    const failures = [];
    for (const file of event.target.files) {
      try {
        const payload = JSON.parse(await file.text());
        if (!Array.isArray(payload.sessions) || payload.sessions.some(s => !s || typeof s !== "object" || typeof s.id !== "string" || !Array.isArray(s.answers))) throw new Error("Невірний формат статистики");
        importedGroupSessions.push(...payload.sessions);
        imported += payload.sessions.length;
      } catch { failures.push(file.name); }
    }
    renderStatsSection();
    document.getElementById("groupImportStatus").textContent = `Завантажено результатів: ${imported}.${failures.length ? ` Не вдалося прочитати: ${failures.join(", ")}` : ""}`;
  });
  document.getElementById("exportGroupStats").addEventListener("click", () => {
    const key = document.getElementById("statsGroupSelect").value;
    if (!key) return;
    const sessions = getGroupStatsSessions().filter(s => getStatsGroupKey(s) === key);
    const rows = [["Учень", "Ідентифікатор учня", "Місто", "Код міста", "Заклад", "Код закладу", "Клас", "Клас / група", "Предмет", "Комплект", "Початок", "Завершення", "Статус", "Усього питань", "Правильних", "Неправильних", "Без відповіді", "Оцінка / 12", "Тип оцінки"]];
    sessions.forEach(s => {
      updateNmtSessionScore(s);
      rows.push([s.userName, s.userKey, s.placeName, s.placeCode, s.schoolName, s.schoolCode, s.grade, s.groupName, s.subjectLabel, s.variantLabel, s.startedAt, s.completedAt, s.status, s.total, s.correctCount, s.wrongCount, s.unansweredCount, s.grade12, s.status === "completed" ? "підсумкова" : "попередня"]);
    });
    const quote = value => {
      let text = String(value ?? "");
      if (/^[=+@-]/.test(text)) text = "'" + text;
      return '"' + text.replace(/"/g, '""') + '"';
    };
    const blob = new Blob(["\uFEFF" + rows.map(row => row.map(quote).join(";")).join("\r\n")], {type:"text/csv;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const name = String(sessions[0]?.groupName || "group").replace(/[^\p{L}\p{N}_-]+/gu, "_");
    link.download = `oceanua-group-${name}-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  });
}

function exportNmtStatsFile() {
  const payload = {
    exportedAt: new Date().toISOString(),
    schemaVersion: 3,
    userKey: getStatsUserKey(),
    profile: getProfile(),
    sessions: getUserNmtSessions().filter((session) => !isPythonStatsSession(session))
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

function sortFlashcardSubjectEntries(entries) {
  const collator = new Intl.Collator("uk-UA", { sensitivity: "base", numeric: true });
  return [...entries].sort(([, subjectA], [, subjectB]) => collator.compare(
    String(subjectA?.label || subjectA?.id || ""),
    String(subjectB?.label || subjectB?.id || "")
  ));
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
  return sortFlashcardSubjectEntries(Object.entries(yearData.subjects || {})).flatMap(([subjectId, subject]) => {
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

const flashcardOptionLetters = ["А", "Б", "В", "Г"];

function shouldShuffleSessionOptions(yearId = selectedNmtYear) {
  return yearId === "python"
    || /^grade-\d+$/.test(String(yearId || ""))
    || /^\d{4}$/.test(String(yearId || ""));
}

function shuffleList(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getCardCorrectKeys(card) {
  return String(card.correctKey || "")
    .split(";")
    .map((key) => key.trim())
    .filter(Boolean);
}

function getCorrectOptionPositions(order, correctKeys) {
  return order.reduce((positions, key, index) => {
    if (correctKeys.includes(key)) positions.push(index);
    return positions;
  }, []);
}

function getOptionTargetSets(optionCount, correctCount, firstCard, previousPositions) {
  const combinations = [];
  const build = (start, current) => {
    if (current.length === correctCount) {
      combinations.push([...current]);
      return;
    }
    for (let position = start; position < optionCount; position += 1) {
      current.push(position);
      build(position + 1, current);
      current.pop();
    }
  };
  build(0, []);

  let candidates = combinations.filter((positions) => (
    !firstCard || !positions.includes(0)
  ));
  if (!candidates.length) candidates = combinations;

  if (Array.isArray(previousPositions) && previousPositions.length) {
    const previous = [...previousPositions].sort((a, b) => a - b);
    const changed = candidates.filter((positions) => (
      positions.length !== previous.length
      || positions.some((position, index) => position !== previous[index])
    ));
    if (changed.length) candidates = changed;
  }

  return candidates[Math.floor(Math.random() * candidates.length)] || combinations[0] || [];
}

function createSessionOptionOrders(cards, previousOrders = {}) {
  const optionOrders = {};
  (cards || []).forEach((card, index) => {
    if (!["single", "multi"].includes(card.type) || !Array.isArray(card.options) || card.options.length < 2) return;
    const originalKeys = card.options.map((option) => String(option.key || ""));
    const correctKeys = getCardCorrectKeys(card);
    if (!correctKeys.length || correctKeys.some((key) => !originalKeys.includes(key))) return;

    const cardNumber = String(card.number || index + 1);
    const previousOrder = previousOrders?.[cardNumber];
    const previousPositions = Array.isArray(previousOrder)
      ? getCorrectOptionPositions(previousOrder, correctKeys)
      : null;
    const targetPositions = getOptionTargetSets(
      originalKeys.length,
      correctKeys.length,
      index === 0,
      previousPositions
    );
    const randomizedCorrectKeys = shuffleList(correctKeys);
    const randomizedWrongKeys = shuffleList(originalKeys.filter((key) => !correctKeys.includes(key)));
    const order = Array(originalKeys.length);
    targetPositions.forEach((position, targetIndex) => {
      order[position] = randomizedCorrectKeys[targetIndex];
    });
    let wrongIndex = 0;
    for (let position = 0; position < order.length; position += 1) {
      if (!order[position]) {
        order[position] = randomizedWrongKeys[wrongIndex];
        wrongIndex += 1;
      }
    }
    optionOrders[cardNumber] = order;
  });
  return optionOrders;
}

function getNmtSessionCard(card, session) {
  const order = session?.shuffleOptions ? session.optionOrderByCard?.[String(card?.number || "")] : null;
  if (!Array.isArray(order) || !Array.isArray(card?.options)) return card;

  const optionsByOriginalKey = new Map(card.options.map((option) => [String(option.key || ""), option]));
  const displayKeys = card.options.map((option, index) => (
    String(option.key || flashcardOptionLetters[index] || index + 1)
  ));
  const options = order.map((originalKey, index) => {
    const option = optionsByOriginalKey.get(originalKey);
    return option ? { ...option, key: displayKeys[index] } : null;
  }).filter(Boolean);
  const correctKeys = getCardCorrectKeys(card);
  const correctKey = correctKeys
    .map((originalKey) => displayKeys[order.indexOf(originalKey)])
    .filter(Boolean)
    .join(";");
  return { ...card, options, correctKey };
}

function createNmtSession(subject, variant, variantIndex, total, cards = []) {
  const profile = getProfile();
  const now = new Date().toISOString();
  const stats = getNmtStats();
  const shuffleOptions = shouldShuffleSessionOptions(selectedNmtYear);
  const previousSession = shuffleOptions
    ? stats.sessions.find((session) => (
      session.userKey === getStatsUserKey()
      && session.yearId === selectedNmtYear
      && session.subjectId === selectedNmtSubject
      && session.variantId === getNmtVariantId(variant, variantIndex)
      && session.shuffleOptions
      && session.optionOrderByCard
    ))
    : null;
  const session = {
    id: `nmt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    userKey: getStatsUserKey(),
    userName: profile.name?.trim() || "Гість",
    schoolName: profile.schoolName || "",
    schoolCode: profile.schoolCode || "",
    grade: profile.grade || "",
    groupName: profile.groupName || "",
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
    variantLabel: selectedNmtYear.startsWith("grade-")
      ? (variant.label || variant.session || `Варіант ${variantIndex + 1}`)
      : [variant.label || `Варіант ${variantIndex + 1}`, variant.session || ""].filter((item, index, items) => item && items.indexOf(item) === index).join(" · "),
    total,
    answeredCount: 0,
    correctCount: 0,
    wrongCount: 0,
    unansweredCount: total,
    grade12: null,
    scorePercent: 0,
    scoreVersion: 2,
    answers: []
  };
  if (shuffleOptions) {
    session.shuffleOptions = true;
    session.optionOrderByCard = createSessionOptionOrders(cards, previousSession?.optionOrderByCard || {});
  }
  stats.sessions.unshift(session);
  saveNmtStats(stats);
  activeNmtSessionId = session.id;
  return session;
}

function ensureNmtSession(subject, variant, variantIndex, total) {
  const stats = getNmtStats();
  const userKey = getStatsUserKey();
  const variantId = getNmtVariantId(variant, variantIndex);
  const requiresShuffle = shouldShuffleSessionOptions(selectedNmtYear);
  const matchesDeck = (session) => (
    session
    && session.userKey === userKey
    && session.yearId === selectedNmtYear
    && session.subjectId === selectedNmtSubject
    && session.variantId === variantId
  );
  const activeSession = activeNmtSessionId ? findNmtSession(stats, activeNmtSessionId) : null;
  const canReuseSession = (session) => (
    matchesDeck(session)
    && (session.status === "in_progress" || session.status === "completed")
    && (!requiresShuffle || (session.shuffleOptions && session.optionOrderByCard))
  );

  if (canReuseSession(activeSession)) {
    return activeSession;
  }

  const existingSession = stats.sessions.find((session) => canReuseSession(session));

  if (existingSession) {
    activeNmtSessionId = existingSession.id;
    return existingSession;
  }

  if (requiresShuffle) {
    const legacySession = stats.sessions.find((session) => (
      matchesDeck(session)
      && session.status === "in_progress"
      && !session.shuffleOptions
    ));
    if (legacySession) {
      legacySession.status = "abandoned";
      legacySession.updatedAt = new Date().toISOString();
      saveNmtStats(stats);
    }
  }

  return createNmtSession(subject, variant, variantIndex, total, variant.cards || []);
}

function startNewNmtSession(subject, variant, variantIndex, cards) {
  const stats = getNmtStats();
  const currentSession = activeNmtSessionId ? findNmtSession(stats, activeNmtSessionId) : null;
  if (currentSession && currentSession.status === "in_progress") {
    currentSession.status = "abandoned";
    currentSession.updatedAt = new Date().toISOString();
  }
  saveNmtStats(stats);
  return createNmtSession(subject, variant, variantIndex, cards.length, cards);
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

// All questions in the deck form the denominator; an unfinished score is provisional.
function calculateNmtGrade(correctCount, total, answeredCount) {
  if (!(total > 0) || !(answeredCount > 0)) return null;
  return Math.max(1, Math.min(12, Math.ceil(12 * Math.max(0, correctCount) / total)));
}

function updateNmtSessionScore(session) {
  const answers = Array.isArray(session.answers) ? session.answers : [];
  session.answeredCount = answers.length;
  session.correctCount = answers.filter((answer) => answer.isCorrect).length;
  session.wrongCount = session.answeredCount - session.correctCount;
  session.unansweredCount = Math.max(0, Number(session.total || 0) - session.answeredCount);
  session.grade12 = calculateNmtGrade(session.correctCount, Number(session.total || 0), session.answeredCount);
  session.scorePercent = session.total > 0 ? Math.round(100 * session.correctCount / session.total) : 0;
  session.scoreVersion = 2;
}

function renderNmtGradeLabel(session) {
  return session.grade12 == null ? "Оцінка: —" : `${session.unansweredCount ? "Попередня оцінка" : "Оцінка"}: ${session.grade12}/12`;
}

function recomputeNmtSession(session) {
  updateNmtSessionScore(session);
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
  const subjects = sortFlashcardSubjectEntries(Object.entries(yearData.subjects || {}));
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
        startNewNmtSession(activeSubject, activeVariant, selectedNmtVariantIndex, activeCards);
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), button.dataset.nmtSelect, "choice");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), selected.join(";"), "multi");
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
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), input?.value || "", "input");
      renderNmtSection(selectedNmtYear, selectedNmtSubject, selectedNmtCardIndex);
    });
  });

  menuContent.querySelectorAll("[data-nmt-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = activeCards[selectedNmtCardIndex];
      if (!card || getNmtSessionAnswer(findNmtSession(getNmtStats(), activeNmtSessionId), card.number)) {
        return;
      }
      const session = findNmtSession(getNmtStats(), activeNmtSessionId);
      recordNmtAnswer(getNmtSessionCard(card, session), "", "reveal");
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
          <span>${session.correctCount} правильних · ${session.wrongCount} неправильних · ${session.answeredCount}/${session.total} · ${escapeHtml(renderNmtGradeLabel(session))}</span>
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

function renderNmtCard(sourceCard, index, total, session) {
  const card = getNmtSessionCard(sourceCard, session);
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
      ${renderNmtCardMedia(card, "question")}
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

function renderNmtCardMedia(card, placement = "question") {
  const media = Array.isArray(card.media) ? card.media : (card.image ? [card] : []);
  return media.filter((item) => (item.imagePlacement || "question") === placement).map((item) => `
    <figure class="nmt-card-media">
      ${sanitizeNmtHtml(`<img src="${item.image}" alt="${item.imageAlt || ""}">`)}
      ${item.imageCaption ? `<figcaption>${escapeHtml(item.imageCaption)}</figcaption>` : ""}
    </figure>
  `).join("");
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
    return `<p class="nmt-answer-extended">${escapeHtml(card.answerText)}</p>${response ? renderNmtCardMedia(card, "answer") : ""}`;
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
      if (!/^assets\/[a-z0-9/_-]+\.png$/i.test(src)) return "";
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

function getSchedulePhotoUserKey() {
  const profile = getProfile();
  const identity = profile.id || buildUserId(profile);
  if (identity) return `profile:${identity}`;
  const profileName = normalizeText(profile.name);
  if (profileName) return `profile-name:${profileName}:${String(profile.placeCode || "").trim()}`;

  try {
    let guestId = localStorage.getItem(scheduleGuestIdStorageKey);
    if (!guestId) {
      guestId = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(scheduleGuestIdStorageKey, guestId);
    }
    return `guest:${guestId}`;
  } catch {
    scheduleFallbackGuestId ||= window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return `guest:${scheduleFallbackGuestId}`;
  }
}

function openSchedulePhotoDatabase() {
  if (!window.indexedDB) return Promise.reject(new Error("IndexedDB is unavailable"));
  if (schedulePhotoDbPromise) return schedulePhotoDbPromise;

  schedulePhotoDbPromise = new Promise((resolve, reject) => {
    const request = window.indexedDB.open(schedulePhotoDatabaseName, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(schedulePhotoStoreName)) {
        database.createObjectStore(schedulePhotoStoreName, { keyPath: "userKey" });
      }
    };
    request.onsuccess = () => {
      const database = request.result;
      database.onversionchange = () => database.close();
      resolve(database);
    };
    request.onerror = () => reject(request.error || new Error("Could not open schedule storage"));
    request.onblocked = () => reject(new Error("Schedule storage is blocked"));
  });
  schedulePhotoDbPromise.catch(() => { schedulePhotoDbPromise = null; });
  return schedulePhotoDbPromise;
}

function runSchedulePhotoTransaction(mode, createRequest) {
  return openSchedulePhotoDatabase().then(database => new Promise((resolve, reject) => {
    let transaction;
    let request;
    try {
      transaction = database.transaction(schedulePhotoStoreName, mode);
      request = createRequest(transaction.objectStore(schedulePhotoStoreName));
    } catch (error) {
      reject(error);
      return;
    }
    let result;
    request.onsuccess = () => { result = request.result; };
    request.onerror = () => reject(request.error || new Error("Schedule storage request failed"));
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error || new Error("Schedule storage transaction failed"));
    transaction.onabort = () => reject(transaction.error || new Error("Schedule storage transaction was cancelled"));
  }));
}

function readSchedulePhoto(userKey) {
  return runSchedulePhotoTransaction("readonly", store => store.get(userKey));
}

function writeSchedulePhoto(record) {
  return runSchedulePhotoTransaction("readwrite", store => store.put(record));
}

function removeSchedulePhoto(userKey) {
  return runSchedulePhotoTransaction("readwrite", store => store.delete(userKey));
}

function compressSchedulePhoto(file) {
  return new Promise((resolve, reject) => {
    const sourceUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      try {
        const maxSide = 2400;
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Image processing is unavailable");
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          URL.revokeObjectURL(sourceUrl);
          if (blob) resolve(blob);
          else reject(new Error("Image compression failed"));
        }, "image/jpeg", 0.86);
      } catch (error) {
        URL.revokeObjectURL(sourceUrl);
        reject(error);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(sourceUrl);
      reject(new Error("Image could not be opened"));
    };
    image.src = sourceUrl;
  });
}

function renderScheduleSection() {
  const english = window.OCEANUA_LOCALE?.language === "en";
  const userKey = getSchedulePhotoUserKey();
  const renderToken = ++scheduleRenderToken;
  if (schedulePhotoObjectUrl) URL.revokeObjectURL(schedulePhotoObjectUrl);
  schedulePhotoObjectUrl = "";

  const copy = english ? {
    eyebrow: "PERSONAL SCHEDULE",
    title: "Class schedule",
    hint: "Take a photo of your class schedule or choose an image from your device. It will be saved in this browser for your profile.",
    storage: "The photo stays on this device and is not synced to other devices.",
    take: "Take a photo",
    choose: "Choose a photo",
    remove: "Remove photo",
    loading: "Loading the saved photo…",
    empty: "No schedule photo yet. Use the button above to add one.",
    saved: "Photo saved in this browser for the current profile.",
    savedAt: "Saved",
    open: "Tap the photo to view it at full size.",
    unsupported: "This browser cannot open local photo storage. Try another browser or device.",
    failed: "The photo could not be loaded or saved. Check available storage and try again.",
    tooLarge: "This photo is larger than 30 MB. Choose a smaller image.",
    notImage: "Choose an image file, such as JPG, PNG, or WebP.",
    processing: "Preparing and saving the photo…",
    confirmRemove: "Remove this schedule photo from this browser?",
    removed: "Schedule photo removed from this browser."
  } : {
    eyebrow: "ОСОБИСТИЙ РОЗКЛАД",
    title: "Розклад занять",
    hint: "Сфотографуйте розклад телефоном або виберіть готове фото з пристрою. Знімок збережеться в цьому браузері для вашого профілю.",
    storage: "Фото залишиться на цьому пристрої й не синхронізується з іншими пристроями.",
    take: "Зробити фото",
    choose: "Вибрати фото",
    remove: "Видалити фото",
    loading: "Завантаження збереженого фото…",
    empty: "Фото розкладу ще немає. Додайте його кнопкою вище.",
    saved: "Фото збережено в цьому браузері для поточного профілю.",
    savedAt: "Збережено",
    open: "Натисніть на фото, щоб відкрити його у повному розмірі.",
    unsupported: "Цей браузер не підтримує локальне сховище фото. Спробуйте інший браузер або пристрій.",
    failed: "Не вдалося завантажити або зберегти фото. Перевірте вільне місце й спробуйте ще раз.",
    tooLarge: "Розмір фото перевищує 30 МБ. Виберіть менше зображення.",
    notImage: "Виберіть файл зображення, наприклад JPG, PNG або WebP.",
    processing: "Підготовка та збереження фото…",
    confirmRemove: "Видалити це фото розкладу з цього браузера?",
    removed: "Фото розкладу видалено з цього браузера."
  };

  menuContent.innerHTML = `
    <div class="schedule-page">
      <div class="content-head">
        <span>${copy.eyebrow}</span>
        <h2>${copy.title}</h2>
        <p>${copy.hint}</p>
        <p class="schedule-storage-note">${copy.storage}</p>
      </div>
      <section class="schedule-photo-card" aria-label="${english ? "Schedule photo" : "Фото розкладу"}">
        <div class="schedule-photo-actions">
          <input class="schedule-file-input" id="scheduleCameraInput" type="file" accept="image/*" capture="environment">
          <label class="primary-action schedule-upload-label" for="scheduleCameraInput">${copy.take}</label>
          <input class="schedule-file-input" id="schedulePhotoInput" type="file" accept="image/*">
          <label class="primary-action schedule-upload-label" for="schedulePhotoInput">${copy.choose}</label>
          <button class="ghost-action" id="removeSchedulePhoto" type="button" hidden>${copy.remove}</button>
        </div>
        <p class="schedule-photo-status" id="schedulePhotoStatus" role="status" aria-live="polite">${copy.loading}</p>
        <figure class="schedule-photo-preview" id="schedulePhotoPreview" hidden>
          <a id="openSchedulePhoto" target="_blank" rel="noopener">
            <img id="schedulePhotoImage" alt="${english ? "Uploaded class schedule" : "Завантажений розклад занять"}">
          </a>
          <figcaption id="schedulePhotoCaption">${copy.open}</figcaption>
        </figure>
      </section>
    </div>
  `;

  const inputs = [...menuContent.querySelectorAll(".schedule-file-input")];
  const status = menuContent.querySelector("#schedulePhotoStatus");
  const preview = menuContent.querySelector("#schedulePhotoPreview");
  const image = menuContent.querySelector("#schedulePhotoImage");
  const openLink = menuContent.querySelector("#openSchedulePhoto");
  const removeButton = menuContent.querySelector("#removeSchedulePhoto");
  const isCurrentView = () => renderToken === scheduleRenderToken
    && menuContent.dataset.activeSection === "schedule";

  inputs.forEach(input => input.addEventListener("change", async () => {
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      status.textContent = copy.notImage;
      return;
    }
    if (file.size > 30 * 1024 * 1024) {
      status.textContent = copy.tooLarge;
      return;
    }

    inputs.forEach(item => { item.disabled = true; });
    status.textContent = copy.processing;
    try {
      const blob = await compressSchedulePhoto(file);
      await writeSchedulePhoto({
        userKey,
        blob,
        originalName: file.name || "schedule-photo",
        updatedAt: new Date().toISOString()
      });
      if (!isCurrentView()) return;
      status.textContent = copy.saved;
      await loadSchedulePhoto(userKey, renderToken, copy, { status, preview, image, openLink, removeButton });
    } catch {
      if (!isCurrentView()) return;
      status.textContent = copy.failed;
    } finally {
      if (isCurrentView()) inputs.forEach(item => { item.disabled = false; });
    }
  }));

  removeButton.addEventListener("click", async () => {
    if (!window.confirm(copy.confirmRemove)) return;
    removeButton.disabled = true;
    try {
      await removeSchedulePhoto(userKey);
      if (!isCurrentView()) return;
      if (schedulePhotoObjectUrl) URL.revokeObjectURL(schedulePhotoObjectUrl);
      schedulePhotoObjectUrl = "";
      image.removeAttribute("src");
      openLink.removeAttribute("href");
      preview.hidden = true;
      removeButton.hidden = true;
      status.textContent = copy.removed;
    } catch {
      if (isCurrentView()) status.textContent = copy.failed;
    } finally {
      if (isCurrentView()) removeButton.disabled = false;
    }
  });

  loadSchedulePhoto(userKey, renderToken, copy, { status, preview, image, openLink, removeButton });
}

async function loadSchedulePhoto(userKey, renderToken, copy, elements) {
  const { status, preview, image, openLink, removeButton } = elements;
  try {
    const record = await readSchedulePhoto(userKey);
    if (renderToken !== scheduleRenderToken || menuContent.dataset.activeSection !== "schedule") return;
    if (!record?.blob) {
      preview.hidden = true;
      removeButton.hidden = true;
      status.textContent = copy.empty;
      return;
    }
    if (schedulePhotoObjectUrl) URL.revokeObjectURL(schedulePhotoObjectUrl);
    schedulePhotoObjectUrl = URL.createObjectURL(record.blob);
    image.src = schedulePhotoObjectUrl;
    openLink.href = schedulePhotoObjectUrl;
    preview.hidden = false;
    removeButton.hidden = false;
    const savedAt = record.updatedAt
      ? new Date(record.updatedAt).toLocaleString(copy.savedAt === "Saved" ? "en-US" : "uk-UA", { dateStyle: "medium", timeStyle: "short" })
      : "";
    status.textContent = savedAt ? `${copy.savedAt}: ${savedAt}` : copy.saved;
  } catch {
    if (renderToken !== scheduleRenderToken || menuContent.dataset.activeSection !== "schedule") return;
    status.textContent = window.indexedDB ? copy.failed : copy.unsupported;
  }
}

function renderOasisSection() {
  const english = window.OCEANUA_LOCALE?.language === "en";
  menuContent.innerHTML = `
    <iframe
      class="oasis-module-frame"
      title="${english ? "Interactive STEM module “Oasis Ecosystem”" : "Інтерактивний STEM-модуль «Екосистема Оазис»"}"
      src="modules/oasis/index.html?v=20261120-2307"
      loading="eager"
      style="display:block;width:100%;height:calc(100dvh - 120px);min-height:620px;margin-top:48px;border:0;border-radius:16px;background:#f4f5ef"
    ></iframe>
  `;
  const frame = menuContent.querySelector(".oasis-module-frame");
  frame.addEventListener("load", () => {
    frame.contentWindow?.postMessage({ type: "oceanua-language", language: english ? "en" : "uk" }, window.location.origin);
  }, { once: true });
}

menuToggle.addEventListener("click", returnHome);
sectionBack.addEventListener("click", returnHome);
profileEntry.addEventListener("click", () => openMenu("profile"));
window.addEventListener("oceanua-language-change", () => {
  renderMenu(activeMenuId);
  updateProfileStatus();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && oceanuaApp.classList.contains("is-section-view")) returnHome();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch(() => {});
}

updateProfileStatus();
returnHome();
