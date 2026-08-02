# Jay Sadhu — Animated Portfolio

Original React + TypeScript + Vite portfolio with GSAP scroll systems and a Three.js character (Phases 4–5). Content from resume + [previous portfolio](https://portfolio-alpha-gules-1cgrv33mgi.vercel.app/).

## Stack

- React + TypeScript + Vite
- GSAP (+ Club plugins `ScrollSmoother` / `SplitText` for production)
- Three.js (imperative character) + R3F TechStack playground
- `react-fast-marquee`, `react-icons`

## Setup

```bash
npm install
npm run dev
```

## Content

Edit files under `src/data/`:

| File | Purpose |
|------|---------|
| `site.ts` | Name, email, phone, socials, resume path |
| `landing.ts` | Hero brand + roles |
| `about.ts` / `whatIDo.ts` | About + two skill panels |
| `career.ts` | Timeline |
| `work.ts` | Projects |
| `techStack.ts` | Physics sphere labels |

## Assets to add

- `public/resume/Jay_Sadhu_Resume.pdf`
- `public/models/character.glb` (+ HDR)
- `public/images/work/*.webp`
- `public/images/tech/*.webp`
- Confirm LinkedIn / GitHub URLs in `src/data/site.ts`

## GSAP

Uses the standard `gsap` package (`ScrollSmoother`, `SplitText`, `ScrollTrigger`). GSAP bonus plugins are free — do **not** use `gsap-trial` (it blocks production hosts).

## Attribution

Animation architecture studied from Moncy Yohannan’s open portfolio patterns — this site uses original layout, copy, colors, fonts, and assets.

## Phases

See `animated_portfolio_plan_4427cfd8.plan.md`.

| Phase | Status |
|-------|--------|
| 0–3 Shell, loading, scroll, cursor/intro | Done |
| 4–5 3D character | Skipped (add GLB later) |
| 6 Work pin scrub + Tech physics | Done |
| 7 Meta, reduced-motion, favicon | Done |

### Deploy

```bash
npm run build
npm run preview
```

Then host `dist/` on Vercel/Netlify.
