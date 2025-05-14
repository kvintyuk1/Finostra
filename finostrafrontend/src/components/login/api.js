// src/components/login/api.js
const API_BASE_PHONE = "http://localhost:8081/api/v1/user/verification/phoneNumber";
const API_BASE_EMAIL = "http://localhost:8081/api/v1/user/verification/email";
const API_BASE_PASSWORD = "http://localhost:8081/api/v1/user/verification/password/set";
const API_BASE_LOGIN = "http://localhost:8081/api/v1/user/verification/login";
const API_BASE_CONFIRM_LOGIN = "http://localhost:8081/api/v1/user/verification/confirmLogin";
const JSON_MIME = "application/json";

const formatPhone = (phone) => {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = "38" + digits;
  return digits.startsWith("+") ? digits : `+${digits}`;
};

async function doFetch(url, options = {}) {
  try {
    const res = await fetch(url, {
      credentials: "include",
      ...options,
      headers: {
        "Content-Type": JSON_MIME,
        ...options.headers,
      },
    });
    const ct = res.headers.get("content-type") || "";
    const data = ct.includes(JSON_MIME)
      ? await res.json().catch(() => ({}))
      : {};

    if (!res.ok) {
      const msg = data.message || res.statusText || `HTTP ${res.status}`;
      console.error(`[API Error] ${res.status} ${url} - ${msg}`, data);
      const err = new Error(msg);
      err.status = res.status;
      throw err;
    }

    console.debug(`[API Success] ${res.status} ${url}`);
    return data;
  } catch (err) {
    console.error(`[Network/Error] ${url}`, err);
    throw err;
  }
}

export async function sendSmsCode(phone) {
  const formattedPhone = formatPhone(phone);
  console.info(`Requesting registration SMS code for ${formattedPhone}`);
  await doFetch(`${API_BASE_PHONE}/register`, {
    method: "POST",
    body: JSON.stringify({ phoneNumber: formattedPhone }),
  });
  return true;
}

export async function verifySmsCode(phone, code) {
  const formattedPhone = formatPhone(phone);
  console.info(`Verifying SMS code for ${formattedPhone}`);
  const data = await doFetch(`${API_BASE_PHONE}/verify`, {
    method: "POST",
    headers: { Accept: JSON_MIME },
    body: JSON.stringify({
      phoneNumber: formattedPhone,
      confirmationCode: code.trim(),
    }),
  });
  const uuid = data.publicUUID ?? data.publicUUIDs;
  if (!uuid) {
    console.error(`Missing publicUUID in response: ${JSON.stringify(data)}`);
    throw new Error(`Missing publicUUID in response: ${JSON.stringify(data)}`);
  }
  return uuid;
}

export async function registerEmail(email) {
  console.info(`Registering email: ${email}`);
  await doFetch(`${API_BASE_EMAIL}/register`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  return true;
}

export async function verifyEmail(email, code, publicUUIDs) {
  console.info(`Verifying email code for ${email}`);
  const payload = { email, confirmationCode: code.trim(), publicUUIDs };
  const data = await doFetch(`${API_BASE_EMAIL}/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return data.publicUUID ?? data.publicUUIDs ?? publicUUIDs;
}

export async function setPassword(publicUUID, password) {
  console.info(`Setting password for UUID: ${publicUUID}`);
  await doFetch(API_BASE_PASSWORD, {
    method: "POST",
    body: JSON.stringify({ publicUUID, password }),
  });
  return true;
}

export async function loginUser(phone, password) {
  const formattedPhone = formatPhone(phone);
  console.info(`Attempting password login for ${formattedPhone}`);
  // Викликаємо login і отримуємо JWT у відповіді
  const data = await doFetch(API_BASE_LOGIN, {
    method: "POST",
    body: JSON.stringify({ phoneNumber: formattedPhone, password }),
  });
  const token = data.token || data.jwt || data.accessToken;
  if (!token) {
    console.error(`No JWT in login response: ${JSON.stringify(data)}`);
    throw new Error(`Login failed, no token returned`);
  }
  console.info(`loginUser: received JWT: ${token}`);
  return token;
}


// Запит SMS-коду для входу
export async function sendLoginSmsCode(phone) {
  const formattedPhone = formatPhone(phone);
  console.info(`Requesting login SMS code for ${formattedPhone}`);
  const data = await doFetch(API_BASE_LOGIN, {
    method: "POST",
    body: JSON.stringify({ phoneNumber: formattedPhone }),
  });
  return data.message;
}

// Підтвердження коду SMS та автоматичний логін через cookie

// Замість того, щоб шукати токен, просто повертаємо true
export async function confirmLoginCode(phone, code) {
  const formattedPhone = formatPhone(phone);
  console.info(`Confirming login code for ${formattedPhone}`);
  const data = await doFetch(API_BASE_CONFIRM_LOGIN, {
    method: "POST",
    headers: { Accept: JSON_MIME },
    body: JSON.stringify({
      phoneNumber: formattedPhone,
      verificationCode: code.trim(),
    }),
  });

  // Якщо сервер пише "Login successful" і засунув куку — вважаємо, що логін успішний
  if (data.message !== "Login successful") {
    console.error(`Unexpected response: ${JSON.stringify(data)}`);
    throw new Error("Login failed");
  }

  return true;
}

