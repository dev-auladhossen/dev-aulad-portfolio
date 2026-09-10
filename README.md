# Aulad Hossen — Portfolio

Built with Vue.js, Vue Router, and Tailwind CSS, styled after brittanychiang.com.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Features

- Fixed sidebar with scroll-spy nav (About / Experience / Projects), smooth-scrolls to each section
- Mouse-follow spotlight glow in the background
- Hover-elevate effect on project cards (visible on devices with a real mouse — the effect is intentionally suppressed on touchscreens via `@media (hover: hover)`, which is standard/expected and not a bug)
- Light/dark theme toggle, top-right, persisted in `localStorage`, with a no-flash inline script in `index.html`
- `/archive` route ("View Full Project Archive") listing every project in a table — add more entries to `src/data/projects.js` and they'll show up in both places automatically

## Before you deploy

- Update the GitHub/LinkedIn URLs in `src/components/SideBar.vue` (currently placeholders).
- Add real project links in `src/data/projects.js` (`link: null` currently — set to the live URL or repo URL and it'll render on the archive page).
- Replace the project thumbnails in `src/components/ProjectsSection.vue` with real screenshots if you have them (swap the placeholder `<div>` mockup for an `<img>`).
- `public/Resume_of_Aulad_Hossen.pdf` powers the "View Full Résumé" link — replace it if your résumé changes.

## Deploy

The `dist/` folder after `npm run build` is static. Because this site uses client-side routing (`/archive`), your host needs an SPA fallback so refreshing `/archive` doesn't 404:

- **Vercel**: `vercel.json` (included) already handles this.
- **Netlify**: `public/_redirects` (included) already handles this.
- **GitHub Pages / other static hosts**: you'll need an equivalent rewrite rule, or switch `src/router/index.js` to `createWebHashHistory()` for zero-config hosting (URLs become `/#/archive`).
