# BSDA site: design brief (research, 2026-10-27)

Prepared for the design and implementation session. No site files were changed while producing this. Costs, prices and totals on the site are mockups and will be replaced when the platform is connected; they are not content gaps.

## Goals (from the user)
1. Used by teachers, parents and students (age range matters): easy, friendly, scannable.
2. A marketing element on the homepage: clear view of what the school does, its achievements, and how to join.
3. Brand it as a strong, genuine presence in the city/region. Credible, not fake.

## Sources reviewed
- Drive folders shared by principal@bsda.school (Loris LaBorde): "Content Doc for Website" and "Media For Website".
- Current live site https://bsda.school (WordPress).
- This repo: `site/` (static HTML/CSS/JS), `project/` (Claude Design export), `NOTES.md`.

## 1. Where missing content should go

| Missing item | Source | Recommended home |
|---|---|---|
| Pre-K & K daily schedule (8:20 to 3:15) | Drive PDF | Academics, Pre-K & K section, as a visual timeline. Keep the PDF as a download. |
| Walk-a-Thon details (Sun Nov 8, Prospect Park, funds the 8th-grade Senior Class Trip) | Flyer | Event detail card, plus a Fundraisers entry. |
| Week of Prayer (8:35-9:35 AM daily, Colossians 2:7) | Flyer | Event detail card. |
| Four-year growth trend (ELA +12.5 pts, Math +12, Science 26% to 50%), 11 of 12 seventh graders passed the English Regents | Chronicles July 2026 PDF | Results section: "Rising in Excellence" band with trend charts. |
| Alumni stories (Algebra I to Calculus I; top English Regents score in class) | Chronicles | "Graduates keep rising" strip on Results or About. |
| Principal's letter and portrait | Chronicles, Media folder | About: pull-quote plus existing letter. |
| Text-to-Give (862-362-2069), first-time and returning steps, 12stonesfund.org | Old site, flyers | Give page, numbered how-to. |
| 12 Stones goals (gym, HVAC, facilities, 200 scholarships), tax-deductible wording, mail-a-check address | Old site | Give page. Confirm figures and wording with Loris first. |
| $1/day, $1/week, $1/month giving tiers | Old site | Give page, as the entry-level ask. |
| Fundraising Teams | Old site | Fundraisers page ("start your own team" card). |
| Crest, alumni pin | Media folder | Crest in header and footer; pin on an Alumni page or footer link. |
| Students of the Month, Breast Cancer Walk flyer | Media folder | Events and News. These two images could not be read; view them directly. |
| Latin motto "Ad Altiora per Fidem et Virtutem" | Chronicles, flyers | Footer and crest lockup. |
| Pastor Appreciation Month | Old site | Events, if still wanted. |
| Phone and email on every page: (718) 859-1313, admissions@bsda.school | Old site | Footer. |

Already on the site (verified): 2027 calendar, Our Results tiles, Vision statement and BSDAS values, Accreditation, Early Childhood program, After-school program (Mon-Thu 3:45-6:15), 12 Stones copy, accreditation badges, 12 Stones logo.

Stale (not missing): admissions placement and registration dates (2024-25 cycle), news posts (2023-24), old shop item (2025 wall calendar). Do not use: the 2025 admissions poster, the "ChatGPT Image" 12 Stones flyer, the 12 Stones logo draft.

Left out on purpose: the old application form asked for the student's Social Security number. Keep it out of the new form.

## 2. UI review

Teachers, parents and students
- Nav has 9 items, several leading to placeholders ("Add new event", "Event management", "Students (coming soon)"). Hide admin and unfinished links until the platform exists.
- No audience paths (parent, staff, student). Add quick links by audience.
- Long paragraphs in grey 17px text are hard going for parents on phones; bold uppercase headings suit students.
- The 4-slide hero auto-advances and takes a full screen before any content: accessibility concern (pause control, reduced motion).

Marketing clarity
- The homepage never shows "how to join". The 4 steps (Apply, Test, Register, Enroll) exist only on Admissions.
- Results are the strongest proof and sit below the fold.
- Proposed homepage order: hero with one primary "Apply" and one "Visit us"; proof bar (60% ELA, 100% high-school acceptance, accredited, since 1938); how to join in 4 steps; programs by grade; results with growth charts; student life and stories; events and news; giving; contact.

Presence in the city
- Strengths to lean on: 1938, 1260 Ocean Ave in Flatbush, accreditations, real student photos, real Regents results.
- Use the crest, Latin motto and principal portrait for credibility.
- Avoid stock imagery and vague claims. Put source and year next to each statistic (for example "NY State 2025-26").
- Verify counts such as "11 faculty and staff" before featuring them.

## 3. Calls to action

| Today | Problem | Proposed |
|---|---|---|
| About / Join / Learn more (header) | Vague, competing | One primary "Apply now", one secondary "Schedule a visit". |
| Donate (yellow, in hero) | Competes with Apply | Keep, but secondary on the homepage. |
| Hero slide buttons ("Our philosophy", "Our mission") | Lead to About, not a next step | Point to Apply, Visit, Results. |
| Giving buttons | Go to Contact until payments exist | Label honestly ("Contact us to give") until payments are connected. |
| No "Schedule a visit" or "Ask a question" | Parents have no starting point | Add a visit request using the contact form. |

## 4. Open questions
- Are the $7.2M goal, "over $30,000 raised" and the tax-deductible wording current? (Counter and totals wait for the platform.)
- Parent-teacher conference time: 3:45-6:00 (calendar) or 3:45-7:00 with PTA at 7:30 (events list)?
- Should the Walk-a-Thon and Breast Cancer Walk be public events?
- Is "Schedule a visit" the main call to action?
- Keep the four-slide hero or move to a single static hero?

## 5. Constraints and notes
- Forms (enrollment, contact) are not wired up. The build is moving to WordPress; form delivery is handled there.
- The live bsda.school is WordPress. Its page map (about, faculty, admissions, application, events, news, fundraisers, yearbooks, shop, privacy, legal, cookies) is a starting map for the migration.
- Where content lives in `site/`: `view.js` (markup), `app.js` (copy and data), `styles.css`, `index.html`, `assets/` (images). See `NOTES.md`.
- Drive media file IDs are in the Drive folders "Media For Website" (1csWuH8c-14RgeCnQDt5Hl9bgLSfErXIm) and "Content Doc for Website" (1ospDNV1MC8P_CYpuab0E-9cEqOyuveLS).

## 6. Peer website research (Pre-K to 8 focus; Adventist schools excluded)

Method: homepage text of five NYC private schools read via web fetch, so layout and colours were NOT seen, only structure, labels and copy. Only Town School and Allen-Stevenson are true K-8 (both boys' schools); Grace Church School, Berkeley Carroll and Brooklyn Friends run through grade 12 and are used for patterns only. Directory sites do not rank schools, so no "best" ranking is claimed.

Patterns that repeat
- One persistent "Apply" button in the header (Grace Church School, Allen-Stevenson, Brooklyn Friends "Apply Now" plus "Inquire"). A softer second step sits beside it: "Visit", "Inquire", "Explore Admissions".
- Grade-band cards on the homepage (JK-1, 2-4, 5-8 at Grace; Lower/Middle/Upper at Berkeley Carroll). Parents self-sort by their child's age.
- A "Why families choose us" block with three cards.
- Proof as concrete numbers: Town School shows teacher ratio 1:6, 19% receive aid, 35+ zip codes, 20 student-led clubs, 35,000+ books checked out. Others lean on founding year ("since 1883", "since 1894").
- Head of School note as a short pull-quote with a link to the full letter.
- Closing band repeating Apply / Visit / Give.
- Audience paths live in a utility bar (Portal, Parents, Careers, Give), not the main nav.
- Admissions is a top-level nav item with sub-pages: process, visit, tuition and financial aid.

Weak spots to avoid
- Town School's only hero button is a generic "Learn More"; Brooklyn Friends' hero button is "Read More About Us". Both bury admissions.
- Allen-Stevenson's hero has no numbers or testimonials; it relies on heritage.

Implications for BSDA
- Keep the founding year (1938) but add real numbers (60% ELA, 100% high-school acceptance, 11 of 12 seventh graders passed the English Regents, accreditations).
- Header: "Apply" plus "Schedule a visit"; move Donate to the utility bar and the closing band.
- Add grade-band cards: Pre-K and K, Grades 1-4, Grades 5-8.
- Add a utility bar for Parents, Students, Staff and Give.
- Add a Head of School pull-quote with Loris's portrait.
- Possible follow-up: view these sites in the browser to compare actual visual design (type, colour, photography).
