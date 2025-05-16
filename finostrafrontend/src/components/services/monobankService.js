
// monobankService.js
const CACHE_TTL = 5 * 60 * 1000;
let cache = { timestamp: 0, data: null };

export class RateLimitError extends Error {
  constructor(message = "Rate limit exceeded") {
    super(message);
    this.name = "RateLimitError";
  }
}

export async function fetchMonobankCurrencies() {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return cache.data;
  }

  const res = await fetch("https://api.monobank.ua/bank/currency");

  if (res.status === 429) {
    throw new RateLimitError();
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Unexpected response format");
  }

  cache = { timestamp: now, data };
  return data;
}
