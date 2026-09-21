Professional-services website for independent software implementation and rollout consulting.

Built with Astro, Markdown and CSS. Hosted on GitHub Pages, with contact-form submissions handled by Formspree.

## Requirements

- Node.js 24
- pnpm 11.19.0

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Check and build

```sh
pnpm check
pnpm test
pnpm build
pnpm verify
```

Preview the production build:

```sh
pnpm preview --port 4321
```

Open http://127.0.0.1:4321/.

To stop the preview:

```sh
pnpm exec astro preview stop
```

## Edit content

| Content | Location |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| Services page | `src/pages/services.astro` |
| Service descriptions | `src/data/services.ts` |
| Selected Work page | `src/pages/selected-work.astro` |
| Case studies | `src/content/work/*.md` |
| About page | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Navigation, metadata and footer | `src/layouts/Layout.astro` |
| Shared contact invitation | `src/components/ContactClose.astro` |
| Styles | `src/styles/global.css` |
| Design system | `DESIGN.md` |

Keep case-study IDs stable because other pages link directly to them.

## Contact form

The contact form uses Formspree. Its public endpoint is configured in `src/config.ts`. Configure the notification recipient privately in the Formspree dashboard.

For a separate build, the endpoint can be overridden with `PUBLIC_FORMSPREE_ENDPOINT`, as shown in `.env.example`.

The form provides validation, submission confirmation and retry feedback. Automated contact tests use mocked requests and do not send email. After deployment, test a real submission and confirm inbox delivery.

Never place passwords, private API keys or recipient email addresses in client-side code or public assets.

## Deployment

The GitHub Actions workflow is defined in `.github/workflows/deploy.yml`.

Pushes to `main` run the checks, build the website and deploy `dist/` to GitHub Pages. Pull requests run checks without deploying.

In the repository settings:

1. Open **Settings → Pages**.
2. Select **GitHub Actions** as the deployment source.
3. Set the custom domain to `cosmin-ghinoiu.com`.
4. Configure DNS using the official GitHub Pages instructions.
5. Enable **Enforce HTTPS** when available.

The site is configured for the custom domain’s root. Hosting it under a repository subpath requires changes to asset and navigation paths.

[GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Repository contents

Commit source files, configuration and the dependency lockfile.

Generated output, dependencies, local environment files and internal project notes are excluded through `.gitignore`. The deployment workflow publishes only `dist/`.

## Assets

Commissioner is self-hosted through Fontsource. Its license is included in `public/commissioner-OFL.txt`.

The icons and favicon are SVG assets.
