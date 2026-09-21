import test from 'node:test';
import assert from 'node:assert/strict';
import { isFormEndpoint, validateInquiry, submitInquiry } from '../src/lib/contact.mjs';

const inquiry = () => { const data = new FormData(); data.set('name', 'Test visitor'); data.set('email', 'test@example.com'); data.set('message', 'An implementation inquiry.'); return data; };

test('only public Formspree form endpoints are accepted', () => {
  assert.ok(isFormEndpoint('https://formspree.io/f/xppwqlza'));
  for (const value of ['', 'https://formspree.io.evil.test/f/abc', 'http://formspree.io/f/abc', 'https://formspree.io/f/abc?token=secret', 'https://someone:secret@formspree.io/f/abc']) assert.equal(isFormEndpoint(value), false);
});
test('required values are trimmed and personal email addresses are accepted', () => {
  const data = inquiry(); data.set('name', '   '); data.set('message', '\n ');
  assert.deepEqual(Object.keys(validateInquiry(data)), ['name', 'message']);
  data.set('name', 'Cosmin'); data.set('message', 'Hello'); data.set('email', 'example@gmail.com');
  assert.deepEqual(validateInquiry(data), {});
  data.set('email', 'not an email'); assert.ok(validateInquiry(data).email);
});
test('unconfigured or invalid forms never make a network request', async () => {
  const fetcher = async () => { throw new Error('must not fetch'); };
  assert.equal((await submitInquiry('', inquiry(), { fetcher })).reason, 'unavailable');
  const empty = new FormData();
  assert.equal((await submitInquiry('https://formspree.io/f/example', empty, { fetcher })).reason, 'invalid');
});
test('success requires service acceptance and uses POST with JSON response requested', async () => {
  const data = inquiry();
  const result = await submitInquiry('https://formspree.io/f/example', data, { fetcher: async (_url, options) => {
    assert.equal(options.method, 'POST'); assert.equal(options.headers.Accept, 'application/json'); assert.equal(options.body, data);
    return new Response('{}', { status: 200 });
  }});
  assert.deepEqual(result, { ok: true });
});
test('server rejection and rate limits do not report success', async () => {
  for (const [status, reason] of [[422, 'service'], [500, 'service'], [429, 'rate-limit']]) {
    assert.deepEqual(await submitInquiry('https://formspree.io/f/example', inquiry(), { fetcher: async () => new Response('{}', { status }) }), { ok: false, reason });
  }
});
test('network errors and timeouts preserve the original form data', async () => {
  const data = inquiry();
  assert.equal((await submitInquiry('https://formspree.io/f/example', data, { fetcher: async () => { throw new TypeError('offline'); } })).reason, 'network');
  assert.equal((await submitInquiry('https://formspree.io/f/example', data, { timeoutMs: 5, fetcher: (_, { signal }) => new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true })) })).reason, 'timeout');
  assert.equal(data.get('message'), 'An implementation inquiry.');
});
test('honeypot submissions are not sent', async () => {
  const data = inquiry(); data.set('_gotcha', 'bot content');
  assert.equal((await submitInquiry('https://formspree.io/f/example', data, { fetcher: async () => { throw new Error('must not fetch'); } })).reason, 'invalid');
});
