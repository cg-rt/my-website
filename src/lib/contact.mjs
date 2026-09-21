export function isFormEndpoint(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.origin === 'https://formspree.io' && /^\/f\/[a-zA-Z0-9]+$/.test(url.pathname) && !url.search && !url.hash && !url.username && !url.password;
  } catch { return false; }
}

export function validateInquiry(data) {
  const errors = {};
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length > 120) errors.name = 'Please keep your name under 120 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) errors.email = 'Please enter a valid email address so I can reply.';
  if (!message) errors.message = 'Please tell me a little about your situation.';
  else if (message.length > 5000) errors.message = 'Please keep your message under 5,000 characters.';
  return errors;
}

export async function submitInquiry(endpoint, data, { fetcher = fetch, timeoutMs = 15000 } = {}) {
  if (!isFormEndpoint(endpoint)) return { ok: false, reason: 'unavailable' };
  if (Object.keys(validateInquiry(data)).length) return { ok: false, reason: 'invalid' };
  if (String(data.get('_gotcha') || '').trim()) return { ok: false, reason: 'invalid' };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetcher(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal });
    return response.ok ? { ok: true } : { ok: false, reason: response.status === 429 ? 'rate-limit' : 'service' };
  } catch { return { ok: false, reason: controller.signal.aborted ? 'timeout' : 'network' }; }
  finally { clearTimeout(timeout); }
}
