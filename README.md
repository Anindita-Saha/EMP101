# Anindita Saha — Portfolio

A premium, single-page portfolio built on the same React 19 + Vite + Tailwind + Framer
Motion architecture as the original Zahed portfolio, with all content replaced by
Anindita Saha's verified CV, official university site, and GitHub data.

## Tech stack

Same as the base project: **React 19**, **Vite 6**, **Tailwind CSS 3** (dark mode via
`class`), **Framer Motion**, **React Router 6**, **React Icons**, **Typed.js**,
**@emailjs/browser**, **@tsparticles**.

## 1. Installation

```bash
npm install
```

## 2. Assets already included

- `public/profile.jpg` — her photo, used as-is (unedited).
- `public/resume.pdf` — her actual CV, used by the "Download Resume" button.
- `public/og-cover.png` — **not included**, add a 1200×630 preview image if you want
  rich social-share cards.

## 3. Configure the contact form (optional)

```bash
cp .env.example .env
```

Fill in your EmailJS `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY`. Without these the form shows a friendly fallback message
pointing to her email directly.

## 4. Run locally

```bash
npm run dev
```

## 5. Build for production

```bash
npm run build
npm run preview
```

---

## Summary of changes from the base (Zahed) project

**Reused as-is (architecture untouched):** Navbar, Footer, BackToTop, CustomCursor,
LoadingScreen, ParticlesBackground, ThemeContext (dark mode), SectionHeading,
GlassCard, ProjectCard, useScrollSpy hook, all Tailwind design tokens, all Framer
Motion animation patterns, routing, and the 404 page.

**Content fully replaced:** name, bio, roles, contact details, education, experience,
skills, resume file, profile photo, favicon monogram, all SEO/OpenGraph/Twitter
metadata, sitemap/robots domain, package name.

**Components rebuilt for data-integrity reasons:**
- `Skills.jsx` — switched from animated percentage bars to plain skill tags, because
  no proficiency numbers exist in any source and inventing them would violate the
  "never invent information" rule.
- `Projects.jsx` — switched from a static project array to a **live GitHub-API-driven**
  grid (reusing `utils/github.js` and `ProjectCard`), since her public repos are
  portfolio-template repositories rather than described projects — this way nothing
  is fabricated, and the section updates automatically if she adds real projects later.
- `About.jsx` — the "hobbies" card was replaced with a short, CV-backed "currently"
  card (no hobbies were listed anywhere).

**Removed:** the Certificates/Achievements section — no certificates were listed in
her CV, official site, LinkedIn, or GitHub, so per the "hide gracefully" instruction
the section (and its component/data) was removed rather than populated with
placeholders.

## Missing information (not fabricated, not included)

- **Research interests, publications, awards** — nothing found on the CV, official
  site, or GitHub. No `research.js`, `publications.js`, `awards.js`, or `gallery.js`
  were created, since there was nothing real to put in them.
- **LinkedIn profile content** — linkedin.com blocks automated fetching and the
  profile URL couldn't be verified via search. If you can share specific details
  from it (headline, about section, experience), they can be added.
- **Repository descriptions/live demo links** — pulled live from the GitHub API
  exactly as published; repos without a description or a homepage URL show a
  generic fallback rather than an invented one.

## Deliberately excluded (privacy)

Her official DIU Google Site "About Me" page also lists date of birth, religion,
blood group, marital status, parents' names, and full home/permanent address. None
of that belongs on a professional portfolio and none of it was carried over, even
though it's technically public — only university email, phone, and general city
(Dhaka) are shown, matching what her CV itself lists under "Contact."

## GitHub repositories referenced

`github.com/Anindita-Saha` — 4 public repos, all fetched live at runtime by the
Projects section (no repo content was hardcoded).

## Deployment readiness checklist

- [x] All content sourced from CV → official site → GitHub, in that priority order
- [x] No fabricated projects, publications, awards, or skill levels
- [x] Sensitive personal data excluded
- [x] Photo and resume in place
- [x] SEO/OG/Twitter metadata updated for her name and role
- [x] Favicon updated
- [ ] `npm install` — run locally (not possible in the environment this was built in;
      no network access to the npm registry)
- [ ] `npm run build` — run locally to confirm a clean production build
- [ ] Add `og-cover.png` if you want rich social previews
- [ ] Set EmailJS environment variables before relying on the contact form
- [ ] Push to GitHub and deploy via Vercel/Netlify (see deployment steps below)

### Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

Or import the GitHub repo at [vercel.com/new](https://vercel.com/new) — framework
preset **Vite** is auto-detected, build command `npm run build`, output `dist`.
