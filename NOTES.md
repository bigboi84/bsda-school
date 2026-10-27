# BSDA site: working notes

## Where things live
- Website: `site/` (open `site/index.html`). Static HTML/CSS/JS, no build step.
- Original Claude Design export: `project/` and `chats/` (reference only).
- GitHub: https://github.com/bigboi84/bsda-school, branch `bsda-static-site`.
- Local copy: `D:\Claude Code\BSDA`.

## Workflow: build locally, push to GitHub
Run in PowerShell in `D:\Claude Code\BSDA`:

    git add -A
    git commit -m "What you changed"
    git push origin bsda-static-site

To pick up changes made elsewhere (for example in a cloud session):

    git pull origin bsda-static-site

Notes:
- Do not edit the same files in two places at once; git cannot merge that automatically.
- Windows cannot check out file names that end in a dot. Keep such files out of the repo.
- Cloud sessions are separate machines. They only see what has been pushed to GitHub.

## Where content lives in `site/`
- `view.js`: page markup for every view.
- `app.js`: all copy and data (events calendar, results, vision, giving options, faculty, etc.), routing, forms.
- `styles.css`: base styles, hover states, mobile stacking.
- `index.html`: shell and the donation counter values in `window.BSDA_CONFIG`.
- `assets/`: images. Add new photos and flyers here.

## Open items
- Donation counter numbers ($18,400 / $55,000 / 214 donors), "55 in 25" and Fruit Fundraiser totals are placeholders.
- Donate buttons link to the Contact page until a payment processor is connected.
- Forms (enrollment, contact) do not send anywhere yet. Decision (2026-10-27): leave as is. The build is moving to WordPress, so form delivery will be handled there (no Formspree/Web3Forms wiring in the static site).
- Enrollment form (`site/app.js` APPLY_STEPS) now mirrors the live bsda.school online application: 4 steps (Student, Health & school, Family, Sign & finish). Left out on purpose: Social Security numbers, card payment, IEP file upload, drawn signatures (typed name instead), and the redundant age dropdown. Photo permission is optional. Submission still goes nowhere.
- Paper application: the "Download application (PDF)" buttons (Apply and Admissions pages) link to the live site's file, https://bsda.school/wp-content/uploads/2024/04/BSDA-Application-Form.pdf (April 2024, probably stale). Replace with the current PDF from Loris, ideally saved in `site/assets/`.
- Parent-teacher conference time conflicts between the 2027 calendar (3:45-6:00) and the events list (3:45-7:00, PTA 7:30). The site uses the events list. Confirm with Loris.
- Homepage redesign (Oct 27): hero with Apply now + Plan a visit, marquee, proof stats, why-families cards, grade bands, growth bars, principal quote, 4-step join, plan-a-visit options, 12 Stones band. Motion is pure CSS (scroll-driven reveals, counters and bars fall back to the final state in browsers without support; everything stops under prefers-reduced-motion). Data lives in `app.js` (heroPhotos, proof, why, bands, growth, joinSteps, visitOptions, principalQuote). The old slider/statement/mosaic data in `app.js` is no longer used on the homepage.
- Homepage v2: hero fills exactly one screen (100svh, sized by viewport height), cleaner order (proof notes, grade bands, why us, growth, principal, join us, news, give, skyline), doodle kit (SVG sprite in `index.html`), pencil/marker hovers (`.scribble`, `.circled`), highlighter swipes (`.hl`), coloured-pencil growth bars, paper-plane step path, Brooklyn skyline that draws itself, and an intro screen shown once per visit (in `index.html`, skipped for reduced motion).
- Plan a visit: opens a chooser on every page (in person, video call, email, call). In-person and video call open the Contact form with the topic pre-selected. To book video calls directly, paste a Google Calendar appointment-schedule link into `VIDEO_CALL_URL` in `app.js`.
- Staff photos: only Christine Honore has a photo on the live site; Drive has Loris's portrait. Ask Loris for headshots of everyone else.
- `logo-white.svg` has no fill, so it renders black; a CSS filter flips it to white for now. Replace with the real logo files.
- Image files are misnamed: `hero-stem.jpg` is a stock calendar, `students-service.jpg` is a classroom, `class-kindergarten.jpg` is students carolling (service), `classroom.jpg` is the kindergarten class, `hero-faith.jpg` is a stock photo. The homepage uses the right ones; inner pages still use the old names (for example Academics shows the carolling photo as "kindergarten"). Rename the files and fix inner pages. Need real photos for STEM/robotics, music and the principal's portrait.
- Vouchers: the sign on the building says "All vouchers accepted: ACD, Begin". Confirm with Loris before putting it on the site.
- Real logo: the site does not use the school's real logo yet. The header, menu and footer use a placeholder (`site/assets/logo-white.svg`, with `logo-ink.svg` and `logo-badge-blue.jpg` as variants; the favicon/badge is in `index.html`). Implement the real logo everywhere it appears: header, mega menu, footer, favicon and social/share image. Candidate source: `BSDAS Crest 1.png` in Loris's Drive "Media For Website" folder, but confirm with Loris that it is the official logo, and get a transparent PNG or SVG plus a white version for the dark header.
- Images and files in Loris's Drive "Media For Website" folder are not in the site yet (flyers, crest, portrait, alumni pin, Pre-K/K schedule PDF).
- Store prices/photos, portal links and yearbook links are placeholders.
