# Налаштування Firebase для ОкеанUA (покроково)

Потрібно: Google-акаунт (власник) і ~15 хвилин. Все безкоштовно (тариф Spark).

## 1. Створити проєкт
1. Відкрийте https://console.firebase.google.com та увійдіть Google-акаунтом.
2. **Create a project** (Створити проєкт) → назва, напр. `oceanua` → Continue.
3. Google Analytics можна вимкнути → **Create project** → зачекайте → Continue.

## 2. Додати вебдодаток і отримати налаштування
1. На головній сторінці проєкту натисніть іконку **`</>`** (Web).
2. Назва додатка: `OceanUA` → **Register app**. Hosting поки не ставте.
3. З'явиться блок `const firebaseConfig = { apiKey: "...", authDomain: "...", ... }`.
4. Відкрийте файл **`firebase-config.js`** і перенесіть туди ці 6 значень замість `ВСТАВТЕ...`. Збережіть.

## 3. Увімкнути реєстрацію за email + пароль
1. Зліва **Build → Authentication → Get started**.
2. Вкладка **Sign-in method** → **Email/Password** → увімкніть перший перемикач → **Save**.

## 4. Створити базу даних (Firestore)
1. **Build → Firestore Database → Create database**.
2. Edition: Standard. Регіон: **eur3 (europe-west)** — найближчий до України. Далі.
3. Режим: **Start in production mode** → Create.

## 5. Вставити правила безпеки (дуже важливо)
1. Firestore → вкладка **Rules**.
2. Видаліть усе, вставте вміст файлу **`firestore.rules`** з цієї папки → **Publish**.
Саме ці правила не дозволяють учню зробити себе адміном: роль змінює тільки адміністратор.

## 6. Дозволити ваш сайт
Authentication → **Settings → Authorized domains** → Add domain: адреса, де буде лежати програма
(напр. `oceanua.web.app` або `ваш-логін.github.io`). `localhost` вже дозволений.

## 7. Перший адміністратор (тільки ви)
1. Відкрийте програму → меню → Профіль → заповніть дані, пароль → **Зареєструватися**.
2. Firebase Console → Firestore Database → Data → колекція `users` → ваш документ.
3. Поле `role`: змініть `registered` на `administrator` → Update.
4. У програмі натисніть «Вийти» і «Увійти» знову: з'явиться панель адміністратора.

## 8. Вчителі
Вчитель при реєстрації пише у полі «Назва класу або групи» слово `вчитель`. Це лише запит.
Ви (адмін) відкриваєте Профіль → панель адміністратора → у вчителя з позначкою ⚠ вибираєте
роль «Вчитель» → «Зберегти права користувачів».

## 9. Публікація в інтернеті (Firebase Hosting)
Потрібен Node.js (https://nodejs.org). У терміналі, в папці OceanUA:

    npm install -g firebase-tools
    firebase login
    firebase init hosting     # public directory: .   | single-page app: No | GitHub deploys: No
    firebase deploy

Не дозволяйте перезаписати `index.html`. Після деплою отримаєте адресу `https://<проєкт>.web.app`.
Додайте її в Authorized domains (п. 6), якщо її там немає.

## 10. Перевірка
- Нова реєстрація дає роль «Зареєстрований», пункту вибору ролі немає.
- У Firestore у нового користувача `role = registered`.
- Спроба змінити `role` із консолі браузера повертає `permission-denied`.
