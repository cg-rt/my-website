import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
const routes = ['index.html', 'services/index.html', 'selected-work/index.html', 'about/index.html', 'contact/index.html', '404.html'];
const pages = new Map(await Promise.all(routes.map(async route => [route, await readFile(join(root, route), 'utf8')])));
const titles = new Set();
for (const [route, html] of pages) {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, `${route}: missing title`); assert.ok(!titles.has(title), `${route}: duplicated title`); titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: expected exactly one h1`);
  assert.ok(/<html lang="en"/.test(html), `${route}: missing language`);
  assert.ok(html.includes('name="description"'), `${route}: missing description`);
  assert.ok(html.includes('rel="canonical"'), `${route}: missing canonical`);
  assert.ok(!/Direction contract|impeccable:|Evidence Bank|\/Users\/C\/|20,000 active users/i.test(html), `${route}: internal or unsupported content leaked`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"\s]*)"/g)) {
    const url = new URL(match[1], 'https://cosmin-ghinoiu.com');
    const target = url.pathname.endsWith('/') ? url.pathname.slice(1) + 'index.html' : url.pathname.slice(1);
    assert.ok(!target.includes('..'));
    const info = await stat(join(root, target)).catch(() => null);
    assert.ok(info?.isFile(), `${route}: missing local target ${url.pathname}`);
    if (url.hash && target.endsWith('.html')) {
      const targetHTML = pages.get(target) || await readFile(join(root, target), 'utf8');
      assert.ok(targetHTML.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: broken anchor ${url.hash}`);
    }
  }
}
const contact = pages.get('contact/index.html');
assert.ok(contact.includes('https://formspree.io/f/xppwqlza'), 'Production form endpoint missing');
assert.ok(!contact.includes('The form is currently unavailable.'), 'Production form unavailable');
assert.ok((await readFile(join(root, 'CNAME'), 'utf8')).trim() === 'cosmin-ghinoiu.com');
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 5);
const allowed = new Set(['index.html', 'services', 'selected-work', 'about', 'contact', '404.html', 'CNAME', 'robots.txt', 'sitemap.xml', 'favicon.svg', 'commissioner-OFL.txt', '_astro']);
for (const name of await readdir(root)) {
  // Astro can leave empty prerender directories after removing its server files.
  if (name === '.prerender') {
    const entries = await readdir(join(root, name), { recursive: true, withFileTypes: true });
    assert.ok(entries.every(entry => entry.isDirectory()), 'Unexpected files in the prerender output');
    continue;
  }
  assert.ok(allowed.has(name), `Unexpected published file: ${name}`);
}
async function verifyContactPrivacy(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await verifyContactPrivacy(path);
    else if (/\.(html|css|js|mjs|json|svg|xml|txt)$/i.test(entry.name)) {
      const contents = await readFile(path, 'utf8');
      assert.ok(!/ghinoiu\.cosmin|mailto:/i.test(contents), `${path}: recipient email or direct-email link published`);
    }
  }
}
await verifyContactPrivacy(root);
console.log('Verified 5 pages + 404, metadata, local links/anchors, form endpoint, custom domain, sitemap, public-output boundaries, and recipient email privacy.');
