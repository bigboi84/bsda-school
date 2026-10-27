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
- Images and files in Loris's Drive "Media For Website" folder are not in the site yet (flyers, crest, portrait, alumni pin, Pre-K/K schedule PDF).
- Store prices/photos, portal links and yearbook links are placeholders.
