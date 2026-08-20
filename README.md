# Wesley College — Science Union

A single-page, scroll-driven 3D experience: a fixed Spline scene stays
anchored behind five full-height chapters, with GSAP ScrollTrigger firing
camera moves in the scene as each chapter comes into view.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · GSAP ScrollTrigger ·
Lenis · Framer Motion · @splinetool/react-spline

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

If npm reports peer-dependency conflicts against React 19, run
`npm install --legacy-peer-deps` — a couple of smaller packages are slower
to republish their peerDependencies ranges after a React major bump.

## Deploy

Push to a GitHub repo, then import it into Vercel — zero config needed for
a standard Next.js app.

## Before this goes live

- **Match the Spline triggers.** `data/site.js` exports `SPLINE_TRIGGERS`,
  a set of placeholder object names (`Camera_Events`, `Camera_Projects`,
  etc). Open your scene in the Spline editor, find the real object
  names/IDs that carry a *Key Down* event trigger in the Develop panel,
  and swap them in — otherwise the zoom calls target nothing.
- **Wire up the contact form.** `components/ContactSection.js` currently
  only simulates a submission. Point it at Formspree, EmailJS, or a
  Next.js Route Handler before launch.
- **Replace the social links** (Instagram / Facebook / YouTube / email)
  in `data/site.js` with real URLs.
- **Confirm the copy.** Event dates, project details, and descriptions in
  `data/site.js` are realistic placeholders, not confirmed facts — swap
  in the real details.
- **Run a production build** (`npm run build`) before deploying, to catch
  anything environment-specific that dev mode doesn't surface.

## Project structure

```
app/            Root layout, global styles, the page that assembles every chapter
components/     SplineCanvas, Header, one component per chapter, shared UI
hooks/          useScrollExperience — Lenis + ScrollTrigger + Spline wiring
data/           Site copy and the Spline trigger map
```

## How the 3D + scroll wiring works

- `SplineCanvas` loads the scene and hands the `Application` instance up
  through `onLoad`.
- `useScrollExperience` starts Lenis and syncs it to GSAP's ticker, then —
  once Spline has loaded — creates one ScrollTrigger per chapter
  (`#events`, `#projects`, `#about`, `#contact`). Entering a chapter calls
  `spline.emitEvent('keyDown', <object name>)` and fades in that
  chapter's ambient glow via a `toggleClass`.
- Clicking an event or project card fires that chapter's trigger again,
  in case someone clicks before the scroll animation finishes settling.
- The "return to hub" button (bottom-right, appears once you scroll past
  the hero) fires the hub trigger and scrolls back to the top.
- `prefers-reduced-motion` shortens Lenis's easing to near-instant and
  turns off the looping CSS animations (the scroll cue, the header dot).

## Design tokens

| Token | Value | Use |
|---|---|---|
| Oxford Blue | `#00122E` | Background gradient floor |
| Cambridge Blue | `#A3C1AD` | Accent — glows, borders, active states |
| Crisp White | `#FFFFFF` | Headings |
| Light Silver | `#E2E8F0` | Body copy |

Type: **Fraunces** (display/headings) · **Inter** (body) ·
**JetBrains Mono** (eyebrows, nav, the specimen catalog numbers on cards).
