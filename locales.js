(() => {
  const storageKey = "oceanua-language";
  const translations = {
    "Освіта об'єднує нас": "Education brings us together",
    "Гість": "Guest",
    "Повернутися на головний екран": "Return to the home screen",
    "Профіль або реєстрація": "Profile or registration",
    "Повернутися до головного меню": "Back to the main menu",
    "Основне меню": "Main menu",
    "Мова інтерфейсу": "Interface language",
    "Українська мова": "Ukrainian",
    "English language": "English",
    "Заставка платформи ОкеанUA": "OceanUA platform home screen",
    "Студентка навчається з планшетом біля моря": "A student studies with a tablet by the sea",
    "Навчально-освітня платформа": "Educational platform",
    "Флеш-картки для самостійного навчання й перевірки знань.": "Flashcards for independent study and knowledge checks.",
    "Офлайн-доступ, інтерактивні лекції та STEAM-модулі.": "Offline access, interactive lessons, and STEAM modules.",

    "Реєстрація профілю": "Profile registration",
    "Вибір міста": "Choose a location",
    "Знайдіть населений пункт для профілю: область → район → громада → населений пункт.": "Find a location for your profile: oblast → district → community → settlement.",
    "областей у файлах": "oblasts in the directory",
    "громад": "communities",
    "населених пунктів": "settlements",
    "Пошук міста або громади": "Search for a city or community",
    "Наприклад: Одеса, Шабо, Білгород-Дністровський": "For example: Odesa, Shabo, Bilhorod-Dnistrovskyi",
    "Нічого не знайдено.": "No results found.",
    "Райони ще не додані.": "No districts have been added yet.",
    "Громади ще не додані.": "No communities have been added yet.",
    "Населені пункти ще не додані.": "No settlements have been added yet.",
    "Вибір міста доступний у формі реєстрації профілю.": "Location selection is available in the profile registration form.",
    "Для реєстрації виберіть конкретний населений пункт зі списку, а не тільки область або район.": "To register, choose a specific settlement from the list, not just an oblast or district.",
    "Оберіть навчальний заклад, щоб заповнити місто та заклад у профілі.": "Choose an educational institution to add the location and institution to your profile.",
    "Місто вибрано. Для нього список закладів поки не підключено.": "Location selected. An institution directory is not available for this location yet.",
    "Для реєстрації розкрийте область і район, потім виберіть конкретний населений пункт.": "To register, expand an oblast and district, then choose a specific settlement.",
    "Для реєстрації виберіть громаду і конкретний населений пункт зі списку.": "To register, choose a community and a specific settlement from the list.",
    "Центр:": "Center:",
    "центр:": "center:",
    "область": "oblast",
    "район": "district",
    "районів": "districts",
    "райони": "districts",
    "громада": "community",
    "громаду": "community",
    "громади": "communities",
    "громад": "communities",
    "населений пункт": "settlement",
    "н.п.": "settlements",
    "село": "village",
    "селище": "settlement",
    "місто": "city",
    "міста": "cities",
    "селище міського типу": "urban-type settlement",
    "смт": "urban-type settlement",
    "населений пункт · ": "settlement · ",

    "Навчальні заклади": "Educational institutions",
    "Школи, гімназії, ліцеї та коледжі · Перевірено": "Schools, gymnasiums, lyceums, and colleges · Checked",
    "Школа": "School",
    "Гімназія": "Gymnasium",
    "Ліцей": "Lyceum",
    "Початкова школа": "Primary school",
    "Фаховий коледж": "Professional college",
    "Заклад загальної середньої освіти": "General secondary education institution",
    "Заклад дошкільної освіти": "Preschool",
    "за даними довідника": "from the directory",
    "Офіційний сайт": "Official website",
    "Офіційний сайт закладу": "Institution website",
    "Назад до вибору міста": "Back to location selection",
    "До профілю": "Back to profile",
    "Пошук за назвою або адресою": "Search by name or address",
    "Наприклад: гімназія № 3 або медичний": "For example: Gymnasium No. 3 or medical",
    "Школи, гімназії та ліцеї": "Schools, gymnasiums, and lyceums",
    "Коледжі": "Colleges",
    "За цим запитом закладів не знайдено.": "No institutions match this search.",
    "Знайдено закладів:": "Institutions found:",
    "із": "of",
    "Навчальний заклад": "Educational institution",
    "Місто та навчальний заклад вибрано.": "Location and educational institution selected.",

    "Профіль": "Profile",
    "Реєстрація і редагування профілю": "Profile registration and editing",
    "Для локальної реєстрації потрібні ім'я, email і телефон. Школа, інший навчальний заклад і клас необов'язкові.": "Local registration requires your name, email, and phone number. School or other institution and grade are optional.",
    "Ім'я": "Name",
    "Наприклад: Олена": "For example: Olena",
    "Телефон": "Phone",
    "Місто або населений пункт": "City or settlement",
    "Вибрати місто": "Choose a location",
    "Натисніть, щоб вибрати місто та навчальний заклад": "Select to choose a location and educational institution",
    "Назва навчального закладу": "Educational institution name",
    "Вибрати навчальний заклад": "Choose an educational institution",
    "Клас": "Grade",
    "необов'язково": "optional",
    "Не вибрано": "Not selected",
    "Назва класу або групи": "Class or group name",
    "Наприклад: 9-А, 9-Б, 121 або 122": "For example: 9-A, 9-B, 121, or 122",
    "Для школи вкажіть повну назву класу з літерою, для коледжу — номер групи. Ця назва зберігатиметься у результатах тестів.": "For a school, enter the full grade and letter; for a college, enter the group number. This name will appear in test results.",
    "Профіль зареєстровано": "Profile registered",
    "Роль:": "Role:",
    "дозволено вести чати": "chat management enabled",
    "Для реєстрації потрібні ім'я, email і телефон. Школу/заклад і клас можна не заповнювати.": "Registration requires your name, email, and phone number. School or institution and grade may be left blank.",
    "Зберегти профіль": "Save profile",
    "Працювати як гість": "Continue as guest",
    "Не вибрано": "Not selected",
    "Попередню адресу буде очищено, бо email або телефон змінено. Виберіть місто заново.": "The previous location will be cleared because the email or phone number changed. Choose a location again.",
    "Оберіть населений пункт, потім навчальний заклад.": "Choose a settlement, then an educational institution.",
    "Профіль зареєстровано. Це перший користувач, тому він став адміністратором.": "Profile registered. As the first user, you are now the administrator.",
    "Профіль зареєстровано і збережено локально.": "Profile registered and saved on this device.",
    "Профіль збережено локально. Для реєстрації заповніть ім'я, email і телефон.": "Profile saved on this device. To register, enter your name, email, and phone number.",
    "Ви працюєте як гість.": "You are continuing as a guest.",
    "Оберіть гостьовий режим або відкрийте реєстрацію і редагування профілю.": "Continue as a guest or open profile registration and editing.",
    "Активного зареєстрованого профілю немає.": "There is no active registered profile.",

    "Адміністратор": "Administrator",
    "Редактор": "Editor",
    "Веде чати": "Chat manager",
    "Зареєстрований": "Registered",
    "Адміністрування": "Administration",
    "Локальний список зареєстрованих користувачів. Тут адміністратор може призначати ролі і дозволяти ведення чатів.": "Local list of registered users. The administrator can assign roles and enable chat management here.",
    "Без імені": "Unnamed",
    "Може вести чати": "Can manage chats",
    "Зареєстрованих користувачів ще немає.": "There are no registered users yet.",
    "Зберегти права користувачів": "Save user permissions",
    "Пропозиція або зміна в програмі": "Program suggestion or change",
    "Наприклад: додати карту району, змінити текст, відкрити новий чат": "For example: add a district map, change some text, or open a new chat",
    "Додати пропозицію": "Submit suggestion",
    "Пропозицій ще немає.": "There are no suggestions yet.",
    "Права користувачів збережено.": "User permissions saved.",
    "Напишіть текст пропозиції перед збереженням.": "Enter a suggestion before saving.",
    "Пропозицію збережено локально.": "Suggestion saved on this device.",
    "Профіль:": "Profile:",
    "Профіль: Гість": "Profile: Guest",
    "Класи": "Grades",
    "Населені пункти": "Settlements",
    "Місто": "City",
    "Навчальний заклад вибрано": "Educational institution selected",
    "Для реєстрації виберіть громаду і конкретний населений пункт зі списку.": "To register, choose a community and a specific settlement from the list."
  };
  const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([uk, en]) => [en, uk]));
  const translatedAttributes = ["aria-label", "title", "placeholder", "alt"];
  const shellSelectors = ".menu-toggle, .profile-entry, .section-back, .language-switch, .home-hero, .menu-list";

  function readLanguage() {
    try {
      return localStorage.getItem(storageKey) === "en" ? "en" : "uk";
    } catch {
      return "uk";
    }
  }

  let language = readLanguage();

  function translateText(value, targetLanguage) {
    const source = String(value ?? "");
    const trimmed = source.trim();
    if (!trimmed) return source;
    let translated = targetLanguage === "en" ? translations[trimmed] : reverseTranslations[trimmed];
    if (!translated && targetLanguage === "en") {
      translated = trimmed
        .replace(/^(\d+) клас$/, "$1 grade")
        .replace(/^(\d+) районів · (\d+) громад · (\d+) н\.п\.$/, "$1 districts · $2 communities · $3 settlements")
        .replace(/^Центр: (.+) · (\d+) громад · (\d+) н\.п\.$/, "Center: $1 · $2 communities · $3 settlements")
        .replace(/^(.+) районів · (\d+) громад · (\d+) н\.п\.$/, "$1 districts · $2 communities · $3 settlements")
        .replace(/(\d+) районів/g, "$1 districts")
        .replace(/(\d+) громади/g, "$1 communities")
        .replace(/(\d+) громад/g, "$1 communities")
        .replace(/(\d+) н\.п\./g, "$1 settlements")
        .replace(/Центр:/g, "Center:")
        .replace(/центр:/g, "center:")
        .replace(/області/g, "oblasts")
        .replace(/область/g, "oblast")
        .replace(/райони/g, "districts")
        .replace(/району/g, "district")
        .replace(/район/g, "district")
        .replace(/громаду/g, "community")
        .replace(/громади/g, "communities")
        .replace(/громада/g, "community")
        .replace(/населені пункти/g, "settlements")
        .replace(/населений пункт/g, "settlement")
        .replace(/селище міського типу/g, "urban-type settlement")
        .replace(/смт/g, "urban-type settlement")
        .replace(/селище/g, "settlement")
        .replace(/місто/g, "city")
        .replace(/село/g, "village")
        .replace(/Школи, гімназії та ліцеї/g, "Schools, gymnasiums, and lyceums")
        .replace(/Школи, гімназії, ліцеї та коледжі/g, "Schools, gymnasiums, lyceums, and colleges")
        .replace(/Знайдено закладів:/g, "Institutions found:")
        .replace(/за даними довідника/g, "from the directory")
        .replace(/Фаховий коледж/g, "Professional college")
        .replace(/Заклад загальної середньої освіти/g, "General secondary education institution")
        .replace(/Заклад дошкільної освіти/g, "Preschool")
        .replace(/Офіційний сайт закладу/g, "Institution website")
        .replace(/Офіційний сайт/g, "Official website")
        .replace(/Початкова школа/g, "Primary school")
        .replace(/Школа/g, "School")
        .replace(/Гімназія/g, "Gymnasium")
        .replace(/Ліцей/g, "Lyceum")
        .replace(/Роль: /g, "Role: ")
        .replace(/дозволено вести чати/g, "chat management enabled")
        .replace(/ · Перевірено /g, " · Checked ")
        .replace(/районів/g, "districts")
        .replace(/(\d+) із (\d+)/g, "$1 of $2");
      if (translated === trimmed) return source;
    }
    if (!translated) return source;
    const start = source.indexOf(trimmed);
    return source.slice(0, start) + translated + source.slice(start + trimmed.length);
  }

  function isLocalizedArea(node) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!element) return false;
    if (element.closest(shellSelectors)) return true;
    const content = element.closest("#menuContent");
    return Boolean(content && ["profile", "profile-edit", "profile-place"].includes(content.dataset.activeSection));
  }

  function translateElement(element) {
    if (!element || !isLocalizedArea(element)) return;
    for (const name of translatedAttributes) {
      if (element.hasAttribute(name)) {
        const current = element.getAttribute(name);
        const next = translateText(current, language);
        if (next !== current) element.setAttribute(name, next);
      }
    }
    if (element.matches("option")) {
      const current = element.textContent;
      const next = translateText(current, language);
      if (next !== current) element.textContent = next;
    }
  }

  function translateTree(container = document.querySelector(".oceanua-app")) {
    if (!container) return;
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      if (!isLocalizedArea(node)) return;
      const next = translateText(node.nodeValue, language);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
    container.querySelectorAll("*").forEach(translateElement);
    if (container.matches("*")) translateElement(container);
  }

  function updateSwitch() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "uk";
    try {
      localStorage.setItem(storageKey, language);
    } catch {}
    document.documentElement.lang = language;
    document.title = language === "en"
      ? "OceanUA — educational platform (PWA)"
      : "ОкеанUA — навчально-освітня платформа (PWA)";
    updateSwitch();
    translateTree();
    window.dispatchEvent(new CustomEvent("oceanua-language-change", { detail: { language } }));
  }

  window.OCEANUA_LOCALE = {
    get language() { return language; },
    translateText,
    setLanguage
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  const app = document.querySelector(".oceanua-app");
  if (app && "MutationObserver" in window) {
    new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "characterData") {
          if (isLocalizedArea(record.target)) {
            const next = translateText(record.target.nodeValue, language);
            if (next !== record.target.nodeValue) record.target.nodeValue = next;
          }
          return;
        }
        if (record.type === "attributes") {
          translateElement(record.target);
          return;
        }
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            if (isLocalizedArea(node)) {
              const next = translateText(node.nodeValue, language);
              if (next !== node.nodeValue) node.nodeValue = next;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            translateTree(node);
          }
        });
      });
    }).observe(app, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: translatedAttributes });
  }
  setLanguage(language);
})();
