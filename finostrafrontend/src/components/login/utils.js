// src/components/login/utils.js

/**
 * Приводить телефон до міжнародного формату +38XXXXXXXXXX
 */
export function toInternational(raw) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 9) {
    digits = "0" + digits;
  }
  if (digits.length === 10) {
    digits = "38" + digits;
  }
  return digits.startsWith("+") ? digits : `+${digits}`;
}

export function isValidPhone(raw) {
  const digits = raw.replace(/\D/g, "");
  return /^(?:\d{9}|\d{10})$/.test(digits);
}

export function isValidEmail(email) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

/**
 * Пароль має бути 6–15 символів,
 * містити принаймні одну ВЕЛИКУ літеру,
 * дві цифри,
 * та один спеціальний символ (@#$^:;/")?*)
 * Наприклад: Finostra@2023
 */
export function isValidPassword(pw) {
  return /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@#$^:;/")?*])(?=.{6,15}$).*$/.test(pw);
}
