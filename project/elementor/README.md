# BSDA — Elementor section templates (Home page)

Classic **Section → Column → Widget** structure. No Containers / Flexbox.
Core Elementor Free widgets only, so nothing breaks if an addon is missing.

## Import
Elementor → **Templates → Saved Templates → Import Templates** → upload the `.json` files.
Then on a page: **Add Template** (folder icon) → **My Templates** → insert in this order:

| # | File | What it is |
|---|------|-----------|
| 01 | `01-header.json` | Logo, hamburger, and the three top actions: About / Join / Learn more |
| 02 | `02-hero-slider.json` | 4-slide hero (Faith / Bigger / Futures / Others), white frame kept |
| 03 | `03-donation-bar.json` | 12 Stones Fund meter docked under the hero |
| 04 | `04-statement-academics.json` | Photo left, copy right |
| 05 | `05-statement-character.json` | Copy left, photo right (flipped) |
| 06 | `06-statement-community.json` | Photo left, copy right |
| 07 | `07-values-mosaic.json` | Three column rows of stat and photo tiles |
| 08 | `08-news-and-events.json` | Two news cards + "Coming up" sidebar |
| 09 | `09-accreditation.json` | AAA + NCPSA strip |
| 10 | `10-footer.json` | Four-column footer + legal row |

## Images
Every image points at `/wp-content/uploads/bsda/`. Either
upload the files to that path, or open each Image widget and re-pick from your
Media Library. Filenames used:

`logo-white.svg`, `hero-faith.jpg`, `students-worship.jpg`, `hero-stem.jpg`,
`students-service.jpg`, `classroom.jpg`, `building-front.jpg`, `calendar.jpg`,
`summer-blast.jpg`, `12stones-logo.png`, `accred-aaa.jpg`, `accred-ncpsa.jpg`

## Two HTML widgets
- **Hero slider** (in 02) — Elementor Free has no slider. Copy, images and timing
  are all editable inside the HTML widget. Swap for Xpro Multi Layer Slider if you
  go Pro.
- **Hamburger** (in 01) — toggles `body.bsda-menu-open`. Replace with
  Xpro *Hamburger* + *Vertical Menu* to get a real off-canvas menu, or point it at
  an Elementor popup.

## Fonts
Headings use **Archivo** (900 weight, uppercase). Body is the theme default.
Set Archivo once under Site Settings → Typography so every widget inherits it.

## Xpro swaps worth making later
| Section | Xpro free widget |
|---|---|
| Donation bar | Progress Bar, Counter, Donation Form Grid |
| News cards | Post Grid |
| Values mosaic | Simple Gallery or Promo Box |
| Accreditation | Logo Grid |
| Header | Site Logo + Hamburger + Vertical Menu (Theme Builder) |
