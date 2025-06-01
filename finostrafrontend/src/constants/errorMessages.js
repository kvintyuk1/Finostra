export const ERROR_MESSAGES = {
  PHONE_REQUIRED: "Введіть номер телефону",
  PHONE_INVALID:
    "Некоректний формат номера телефону. Номер повинен містити 9-10 цифр без спеціальних символів",
  PHONE_NOT_FOUND: "Номер телефону не знайдено в системі",
  PHONE_ALREADY_EXISTS: "Цей номер телефону вже зареєстрований",

  SMS_CODE_REQUIRED: "Введіть код підтвердження з SMS",
  SMS_CODE_INVALID: "Невірний код підтвердження. Спробуйте ще раз",
  SMS_CODE_EXPIRED: "Термін дії коду минув. Запитайте новий код",
  SMS_SEND_ERROR: "Помилка при відправці SMS. Спробуйте пізніше",

  EMAIL_REQUIRED: "Вкажіть email адресу",
  EMAIL_INVALID: "Некоректний формат email. Приклад: example@domain.com",
  EMAIL_ALREADY_EXISTS: "Ця email адреса вже використовується",
  EMAIL_CODE_REQUIRED: "Введіть код підтвердження з листа",
  EMAIL_CODE_INVALID: "Невірний код підтвердження email",

  PASSWORD_REQUIRED: "Введіть пароль",
  PASSWORD_INVALID:
    "Пароль повинен містити від 6 до 15 символів, мінімум 1 велику літеру, 2 цифри та 1 спеціальний символ",
  PASSWORD_MISMATCH: "Паролі не співпадають. Перевірте правильність введення",
  PASSWORD_WEAK:
    "Пароль занадто простий. Додайте велику літеру, цифри та спеціальний символ",

  PROFILE_FIELDS_REQUIRED: "Будь ласка, заповніть всі обов'язкові поля профілю",
  PROFILE_NAME_UA_REQUIRED: "Введіть ім'я українською",
  PROFILE_SURNAME_UA_REQUIRED: "Введіть прізвище українською",
  PROFILE_PATRONYMIC_UA_REQUIRED: "Введіть по батькові українською",
  PROFILE_NAME_EN_REQUIRED: "Введіть ім'я англійською",
  PROFILE_SURNAME_EN_REQUIRED: "Введіть прізвище англійською",
  PROFILE_PATRONYMIC_EN_REQUIRED: "Введіть по батькові англійською",
  PROFILE_BIRTHDATE_REQUIRED: "Вкажіть дату народження",
  PROFILE_SAVE_ERROR:
    "Помилка при збереженні профілю. Перевірте правильність введених даних",

  AUTH_REQUIRED: "Необхідно авторизуватися",
  AUTH_INVALID: "Невірний логін або пароль",
  AUTH_EXPIRED: "Сесія закінчилася. Увійдіть знову",
  AUTH_BLOCKED: "Обліковий запис заблоковано. Зверніться до служби підтримки",

  NETWORK_ERROR: "Помилка з'єднання. Перевірте підключення до інтернету",
  SERVER_ERROR: "Помилка сервера. Спробуйте пізніше",
  UNKNOWN_ERROR:
    "Щось пішло не так. Спробуйте ще раз або зверніться до служби підтримки",
  TERMS_REQUIRED: "Для продовження необхідно прийняти умови та правила",
};
