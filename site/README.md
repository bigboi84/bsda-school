# Brooklyn SDA School site

Static implementation of the Claude Design prototype (`../project/BSDA School.dc.html`). No build step or dependencies.

- `index.html`: shell. Set the donation counter in `window.BSDA_CONFIG` (`raised`, `goal`, `donors`).
- `view.js`: markup for all 14 views, generated from the prototype's template (same inline styles).
- `app.js`: state, content data, hash routing, enrollment-form validation, filters, hero slider, and a small render/morph runtime.
- `styles.css`: fonts/base styles, hover states, and a mobile stacking pass (the prototype is desktop-only).

Open `index.html` directly, or serve the folder with any static server. Routes: `#home #about #faculty #admissions #apply #life #events #news #fundraisers #give #yearbooks #store #portals #contact`.

Placeholders carried over from the design: store pricing and photos, fundraiser totals, portal links, and the donation figures.
