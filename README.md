# Cosmin Ghinoiu — website

An English professional-services website for independent software implementation and rollout work. Built with Astro, Markdown case studies, plain CSS and a small amount of JavaScript for navigation and form feedback. GitHub Pages hosts the static output; Formspree handles inquiries.

## Run locally

Use Node.js 24 and pnpm 11.19.0 (the version recorded in `package.json`). From this folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

For a production preview:

```sh
pnpm check
pnpm test
pnpm build
pnpm verify
pnpm preview --port 4321
```

Open `http://127.0.0.1:4321/`. Astro 7 can keep its preview process running after the command returns; `pnpm exec astro preview stop` stops it. Set `ASTRO_TELEMETRY_DISABLED=1` to disable Astro telemetry, as the deployment workflow does.

## Edit content

| Content | File |
| --- | --- |
| Homepage introduction and work previews | `src/pages/index.astro` |
| Four service situations and responsibilities | `src/data/services.ts` |
| Service-page introduction and engagement text | `src/pages/services.astro` |
| Three detailed case studies | `src/content/work/*.md` |
| About and working practices | `src/pages/about.astro` |
| Contact copy and fields | `src/pages/contact.astro` |
| Shared navigation, metadata and footer | `src/layouts/Layout.astro` |
| Shared contact invitation | `src/components/ContactClose.astro` |
| Colors, typography and responsive styles | `src/styles/global.css` |

Markdown frontmatter supplies each case's title, client context, role, scope and result. Keep existing case IDs stable: homepage and services links land directly on these sections.

Public claims must follow the privately maintained Evidence Bank. Keep clients anonymous, describe past cases as employment work, and preserve the distinction between a launch for 20,000 users and measured active use. Do not copy the CV vault or master DOCX into this project. The local `PRODUCT.md` and planning notes are excluded from Git; `DESIGN.md` records the implemented design system.

## Contact form

The user-supplied public endpoint is `https://formspree.io/f/xppwqlza`, configured in `src/config.ts`. It is a public form identifier, not a secret. To override it for a separate build, set `PUBLIC_FORMSPREE_ENDPOINT` using `.env.example`. The recipient is configured privately in Formspree and is not embedded in the public website.

Required fields are name, email and situation. Company is optional. The form includes field-level errors, a sending state, duplicate-submit protection, a 15-second timeout, a spam honeypot, confirmation only after service acceptance, and retry guidance on failure. The site keeps LinkedIn links but exposes no recipient email address or direct-email options. A failed request preserves the visitor's message. Without JavaScript, the form submits to Formspree's own response page.

On 2026-09-20, one real browser submission from the local production preview was accepted by Formspree. Cosmin confirmed that test reference `CG-WEB-20260920` arrived in the configured inbox. Repeat a clearly labelled test after publishing on the custom domain; origin restrictions or account settings may differ. Monitor the Formspree dashboard for delivery failures, spam and plan limits.

## Publish on GitHub Pages

Repository: [cg-rt/my-website](https://github.com/cg-rt/my-website).

1. Push the project to the repository's `main` branch. Keep generated output, local environment files, internal briefs and review captures excluded by `.gitignore`. Source visibility is separate from the published website.
2. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included `.github/workflows/deploy.yml` checks types, runs contact tests, builds and verifies the public output, then deploys only `dist/`. Pull requests run checks without deployment.
3. Set **Custom domain** to `cosmin-ghinoiu.com` in Pages settings. The repository also includes `public/CNAME`; the Actions deployment still requires the custom-domain setting.
4. Configure the apex domain with the DNS provider. GitHub's currently documented A records are `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. If using `www`, point its CNAME to the repository owner's `<username>.github.io` hostname. Check the [official custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) when applying the records. Preserve unrelated email DNS records.
5. Wait for GitHub's domain and certificate checks, then enable **Enforce HTTPS**. Verify the five pages, a missing URL, mobile navigation, LinkedIn and a real inquiry on the deployed site.

The site assumes the custom domain's root, with no repository-name URL prefix. If temporarily publishing to `username.github.io/repository/`, asset and navigation paths require a separate base-path change; the current local preview is the review destination until the custom domain is connected. This follows [Astro's GitHub Pages deployment guidance](https://docs.astro.build/en/guides/deploy/github/).

Cosmin requested removal of the recipient email address and all direct-email options on 2026-09-20, while retaining LinkedIn links. Do not reintroduce the address in visible copy, markup, JavaScript, metadata or public assets. Cosmin confirmed that the LinkedIn destination check passed on 2026-09-21.

## SEO and future campaigns

All primary content is pre-rendered HTML. Each page has its own title, description and canonical URL, plus Open Graph text metadata. `public/robots.txt` and `src/pages/sitemap.xml.ts` provide crawl foundations. No analytics, advertising pixels, cookies or embedded social widgets have been added.

A targeted landing page can use the shared `Layout.astro`, styles and inquiry flow. Add its route to the sitemap and build-verification route list when it should be indexed. Select a measurement provider and define the inquiry conversion event before adding campaign tracking. Keep measurement changes explicit and update the contact privacy text when relevant.

## Validation and assets

`pnpm test` uses mocked requests to cover contact validation, endpoint restrictions, success, service rejection, rate limits, network failure, timeout and honeypot behavior. These tests do not send email. `pnpm verify` checks built routes, internal links and case anchors, metadata, the form endpoint, sitemap, domain and the publishable file boundary. Browser checks covered desktop and mobile layouts, keyboard focus, menu dismissal, visible form errors and the real submission above. This is not a formal WCAG certification or a measured production performance audit.

Commissioner is self-hosted through Fontsource; its license is included at `public/commissioner-OFL.txt`. Arrow icons and the small browser favicon are authored SVG. No client logos, portraits, project screenshots or generated raster assets are used. Planning and design documentation are outside `dist/` and are not deployed by this workflow.
