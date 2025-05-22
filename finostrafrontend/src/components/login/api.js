const API_BASE_PHONE = "http://localhost:8081/api/v1/user/verification/phoneNumber";
const API_BASE_EMAIL = "http://localhost:8081/api/v1/user/verification/email";
const API_BASE_PASSWORD = "http://localhost:8081/api/v1/user/verification/password/set";
const API_BASE_LOGIN = "http://localhost:8081/api/v1/user/verification/login";
const API_BASE_CONFIRM_LOGIN = "http://localhost:8081/api/v1/user/verification/confirmLogin";
const API_BASE_PROFILE = "http://localhost:8081/api/v1/userProfile/create";
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

    console.debug(`[API Success] ${res.status} ${url}`, data);
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
  console.debug(`verifySmsCode: response data`, data);
  const uuid = data.publicUUID ?? data.publicUUIDs;
  if (!uuid) {
    console.error(`Missing publicUUID in response: ${JSON.stringify(data)}`);
    throw new Error(`Missing publicUUID in response: ${JSON.stringify(data)}`);
  }
  console.info(`verifySmsCode: obtained publicUUID: ${uuid}`);
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
  console.debug(`verifyEmail: payload`, payload);
  const data = await doFetch(`${API_BASE_EMAIL}/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.debug(`verifyEmail: response data`, data);
  const uuid = data.publicUUID ?? data.publicUUIDs ?? publicUUIDs;
  if (!uuid) {
    console.error(`Missing publicUUID(s) in response: ${JSON.stringify(data)}`);
    throw new Error(`Missing publicUUID(s) in response: ${JSON.stringify(data)}`);
  }
  console.info(`verifyEmail: obtained publicUUID(s): ${uuid}`);
  return uuid;
}

export async function setPassword(publicUUID, password) {
  console.info(`Setting password for UUID: ${publicUUID}`);
  const payload = { publicUUID, password };
  const data = await doFetch(API_BASE_PASSWORD, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (data.accessToken) {
    localStorage.setItem("access_token", data.accessToken);
  }
  if (data.refreshToken) {
    localStorage.setItem("refresh_token", data.refreshToken);
  }
  return data;
}

export async function loginUser(phone, password) {
  const formattedPhone = formatPhone(phone);
  console.info(`Attempting password login for ${formattedPhone}`);
  const data = await doFetch(API_BASE_LOGIN, {
    method: "POST",
    body: JSON.stringify({ phoneNumber: formattedPhone, password }),
  });
  console.debug(`loginUser: response data`, data);
  const token = data.token || data.jwt || data.accessToken;
  if (!token) {
    console.error(`No JWT in login response: ${JSON.stringify(data)}`);
    throw new Error(`Login failed, no token returned`);
  }
  console.info(`loginUser: received JWT: ${token}`);
  return token;
}

export async function sendLoginSmsCode(phone) {
  const formattedPhone = formatPhone(phone);
  console.info(`Requesting login SMS code for ${formattedPhone}`);
  const data = await doFetch(API_BASE_LOGIN, {
    method: "POST",
    body: JSON.stringify({ phoneNumber: formattedPhone }),
  });
  console.debug(`sendLoginSmsCode: response data`, data);
  return data.message;
}

export async function confirmLoginCode(phone, code) {
  const formattedPhone = formatPhone(phone);
  console.info(`Confirming login code for ${formattedPhone}`);
  await doFetch(API_BASE_CONFIRM_LOGIN, {
    method: "POST",
    headers: { Accept: JSON_MIME },
    body: JSON.stringify({
      phoneNumber: formattedPhone,
      verificationCode: code.trim(),
    }),
  });
  console.info(`confirmLoginCode: login successful`);
  // Далі покладаємося на HTTP-only cookies для авторизації
  return true;
}

export async function createUserProfile(profileData) {
  console.info("Creating user profile (cookie-based auth)");
  const data = await doFetch(API_BASE_PROFILE, {
    method: "POST",
    body: JSON.stringify(profileData),
  });
  console.debug("createUserProfile response", data);
  return data;
}

export const getUserProfile = async (token) => {
  const resp = await fetch("/api/v1/userProfile/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!resp.ok) throw new Error("Не вдалося отримати профіль");
  return resp.json();
};