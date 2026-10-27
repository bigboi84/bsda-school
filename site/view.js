// Generated from the Claude Design prototype ("BSDA School.dc.html").
// Pure function: render values in, HTML string out. Logic lives in app.js.
(function () {
  window.bsdaView = function view(v, E, H) {
    const { accreditation, afterItems, afterSchool, bsdas, courses, eceAreas, featured, isAcademics, results, stonesFacts, vision, activeGrade, activeRoom, admitSteps, atFirstStep, backOpacity, c, campaigns, closeMenu, clubCats, col, contactSent, d, dayFull, documents, e, eventCats, faculty, facultyStats, footerCols, g, giving, goAbout, goAdmissions, goApply, goContact, goEvents, goFaculty, goFundraisers, goGive, goHome, goLife, goNews, gradeTabs, h, history, homeEvents, homeNews, hudDonors, hudGoal, hudPct, hudPctLabel, hudRaised, i, isAbout, isAdmissions, isApply, isContact, isEvents, isFaculty, isFundraisers, isGive, isHome, isInner, isLife, isNews, isPortals, isStore, isYearbooks, l, m, menuGroups, menuOpen, missionPoints, n, news, notLastStep, notSubmitted, onBack, onContact, onNext, onReset, onSubmit, openMenu, p, page, para, philosophyPoints, portals, principalLetter, products, r, rooms, s, stepTabs, submitted, submittedName, summary, t, testDates, visibleClubs, visibleEvents, w, wall, y, yearbooks, applyStep, applyFields, isLastStep, goAcademics, goPortals, heroPhotos, heroWords, marquee, proof, why, bands, growth, regents, joinSteps, visitOptions, principalQuote } = v;
    return `<div style="min-height:100vh;background:#FFFFFF">

  <!-- ============ MEGA MENU OVERLAY ============ -->
  ${(menuOpen) ? `
    <div style="position:fixed;inset:0;z-index:200;background:#0C1120;overflow-y:auto;animation:bsda-fade .25s ease-out">
      <div style="max-width:1400px;margin:0 auto;padding:34px 48px 64px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:24px">
          <a href="#home" data-click="${H(goHome)}" style="display:flex;align-items:center;gap:16px">
            <img src="assets/logo-white.svg" alt="Brooklyn Seventh-day Adventist School" style="width:52px;height:52px" />
            <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:24px;letter-spacing:.02em;color:#fff">BROOKLYN SDA</span>
          </a>
          <button type="button" data-click="${H(closeMenu)}" style="width:56px;height:56px;border-radius:6px;border:none;background:#4A6FD0;color:#fff;font-family:'Archivo',sans-serif;font-size:26px;font-weight:700;cursor:pointer;line-height:1">×</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:44px;margin-top:56px">
          ${(menuGroups).map((g) => `
            <div>
              <a href="${E(g.href)}" data-click="${H(g.onClick)}" style="display:block;font-family:'Archivo',sans-serif;font-weight:900;font-size:22px;letter-spacing:.02em;text-transform:uppercase;color:#fff;padding-bottom:12px;border-bottom:3px solid #4A6FD0" class="hv1">${E(g.label)}</a>
              <ul style="list-style:none;margin:16px 0 0;padding:0;display:flex;flex-direction:column;gap:11px">
                ${(g.items).map((i) => `
                  <li><a href="${E(i.href)}" data-click="${H(i.onClick)}" style="font-size:15.5px;font-weight:500;color:#9AA3C4" class="hv1">${E(i.label)}</a></li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:56px;padding-top:32px;border-top:1px solid rgba(255,255,255,.14);display:flex;gap:16px;flex-wrap:wrap;align-items:center;justify-content:space-between">
          <div style="display:flex;gap:14px;flex-wrap:wrap">
            <a href="#apply" data-click="${H(goApply)}" style="padding:16px 32px;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14.5px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Apply now</a>
            <a href="#give" data-click="${H(goGive)}" style="padding:16px 32px;background:#FFD24A;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14.5px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Donate</a>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px">
            <a href="tel:+17188591313" style="font-family:'Archivo',sans-serif;font-weight:900;font-size:22px;color:#FFD24A" class="hv3">(718) 859-1313</a>
            <span style="font-size:14px;color:#6E779B">1260 Ocean Ave · Brooklyn, NY 11230</span>
          </div>
        </div>
      </div>
    </div>
  ` : ''}

  <!-- ============ HOME ============ -->
  ${(isHome) ? `
    <div data-screen-label="Home">

      <!-- UTILITY BAR -->
      <div style="background:#0C1120;padding:10px var(--gx);display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;font-size:13px;font-weight:600">
        <span style="display:flex;gap:20px;flex-wrap:wrap">
          <a href="#portals" data-click="${H(goPortals)}" style="color:#9AA3C4" class="hv1">Parents</a>
          <a href="#portals" data-click="${H(goPortals)}" style="color:#9AA3C4" class="hv1">Students</a>
          <a href="#portals" data-click="${H(goPortals)}" style="color:#9AA3C4" class="hv1">Staff</a>
          <a href="#give" data-click="${H(goGive)}" style="color:#FFD24A" class="hv3">Give</a>
        </span>
        <span style="display:flex;gap:18px;align-items:center">
          <span class="hide-sm" style="color:#6E779B">1260 Ocean Ave · Brooklyn, NY 11230</span>
          <a href="tel:+17188591313" style="color:#fff;font-weight:800" class="hv1">(718) 859-1313</a>
        </span>
      </div>

      <!-- HERO -->
      <section style="position:relative;background:#131A2E;overflow:hidden;isolation:isolate">
        <span aria-hidden="true" class="blob" style="position:absolute;width:640px;height:640px;right:-180px;top:-220px;background:radial-gradient(circle,rgba(74,111,208,.55),transparent 65%);z-index:-1"></span>
        <span aria-hidden="true" class="blob blob-b" style="position:absolute;width:520px;height:520px;left:-200px;bottom:-260px;background:radial-gradient(circle,rgba(140,198,63,.32),transparent 65%);z-index:-1"></span>

        <header style="display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px var(--gx)">
          <div style="display:flex;align-items:center;gap:16px">
            <button type="button" aria-label="Open menu" data-click="${H(openMenu)}" style="width:54px;height:54px;border:none;background:#4A6FD0;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0" class="hv4">
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
            </button>
            <a href="#home" data-click="${H(goHome)}" style="display:flex;align-items:center;gap:13px">
              <img src="assets/logo-white.svg" alt="Brooklyn Seventh-day Adventist School" style="width:46px;height:46px" />
              <span style="display:flex;flex-direction:column;line-height:1">
                <span class="brand-name" style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(20px,2vw,28px);color:#fff">BROOKLYN SDA</span>
                <span class="hide-sm" style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8CC63F;margin-top:5px">School · Est. 1938</span>
              </span>
            </a>
          </div>
          <nav style="display:flex;align-items:center;gap:4px">
            <a href="#academics" data-click="${H(goAcademics)}" class="navlink hide-md">Academics</a>
            <a href="#admissions" data-click="${H(goAdmissions)}" class="navlink hide-md">Admissions</a>
            <a href="#life" data-click="${H(goLife)}" class="navlink hide-md">Student life</a>
            <a href="#events" data-click="${H(goEvents)}" class="navlink hide-md">Events</a>
            <a href="#plan-visit" class="hide-sm hv5" style="margin-left:10px;padding:13px 20px;font-family:'Archivo',sans-serif;font-weight:800;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#fff;border:2px solid rgba(255,255,255,.3)">Plan a visit</a>
            <a href="#apply" data-click="${H(goApply)}" class="hv6 shine hdr-cta" style="margin-left:8px;padding:13px 20px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#0C1120;background:#8CC63F;border:2px solid #8CC63F">Apply now</a>
          </nav>
        </header>

        <div class="hero-grid" style="display:grid;grid-template-columns:1.06fr .94fr;gap:clamp(36px,5vw,80px);align-items:center;padding:clamp(18px,3vw,44px) var(--gx) clamp(64px,7vw,110px)">
          <div class="hero-in">
            <span style="display:inline-flex;align-items:center;gap:10px;padding:9px 16px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);font-size:13px;font-weight:700;letter-spacing:.06em;color:#D6DBEC">
              <span class="pulse" style="width:9px;height:9px;border-radius:50%;background:#8CC63F"></span>
              Now enrolling for 2026–27 · Pre-K to Grade 8
            </span>
            <h1 style="margin-top:26px;font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(46px,6.4vw,100px);line-height:.9;letter-spacing:-.025em;text-transform:uppercase;color:#fff">
              Rooted in Christ.<br /><span style="color:#8CC63F">Rising</span> in excellence.
            </h1>
            <p style="margin-top:26px;font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(20px,2vw,30px);line-height:1.2;color:#fff">
              Here, kids <span class="wordstack">${(heroWords).map((w) => `<span style="--i:${E(w.i)}">${E(w.label)}</span>`).join('')}</span>
            </p>
            <p style="margin-top:20px;font-size:clamp(16px,1.25vw,19px);line-height:1.65;color:#B5BDD8;max-width:560px">A Christ-centered school for Pre-K to 8th grade in Flatbush, Brooklyn. Small classes, strong results and teachers who know every student by name.</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:34px">
              <a href="#apply" data-click="${H(goApply)}" class="hv7 arw shine" style="padding:19px 32px;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14.5px;letter-spacing:.1em;text-transform:uppercase">Apply now <span>→</span></a>
              <a href="#plan-visit" class="hv5 arw" style="padding:19px 32px;color:#fff;border:2px solid rgba(255,255,255,.35);font-family:'Archivo',sans-serif;font-weight:900;font-size:14.5px;letter-spacing:.1em;text-transform:uppercase">Plan a visit <span>→</span></a>
            </div>
            <p style="margin-top:22px;font-size:14.5px;color:#8A93B6">Questions? Call <a href="tel:+17188591313" style="color:#FFD24A;font-weight:800" class="hv3">(718) 859-1313</a> or email <a href="mailto:admissions@bsda.school" style="color:#FFD24A;font-weight:800" class="hv3">admissions@bsda.school</a></p>
          </div>

          <div class="collage" style="position:relative;min-height:580px">
            <span aria-hidden="true" class="drift" style="position:absolute;inset:34px -14px -14px 34px;background:#8CC63F"></span>
            <div class="xf" style="position:absolute;inset:0 20px 20px 0;overflow:hidden;background:#0C1120">
              ${(heroPhotos).map((p) => `
                <img src="${E(p.img)}" alt="${E(p.alt)}" style="--i:${E(p.i)};position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${E(p.pos)}" />
              `).join('')}
              <span style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,26,46,0) 55%,rgba(19,26,46,.55) 100%)"></span>
            </div>
            <div class="float badge-a" style="position:absolute;left:-34px;top:40px;background:#FFD24A;padding:18px 22px;max-width:220px;box-shadow:0 18px 40px rgba(0,0,0,.28)">
              <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:40px;line-height:1;color:#131A2E">60%</div>
              <div style="font-size:13.5px;font-weight:700;line-height:1.35;color:#453712;margin-top:6px">ELA proficiency — 12 points above New York State</div>
            </div>
            <div class="float float-b badge-b" style="position:absolute;right:-6px;bottom:64px;background:#4A6FD0;padding:18px 22px;max-width:240px;box-shadow:0 18px 40px rgba(0,0,0,.28)">
              <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:34px;line-height:1;color:#fff">11 of 12</div>
              <div style="font-size:13.5px;font-weight:700;line-height:1.35;color:#DCE4FA;margin-top:6px">seventh graders passed the English Regents</div>
            </div>
            <div class="spin-badge" aria-hidden="true" style="position:absolute;left:24px;bottom:-4px;width:108px;height:108px;border-radius:50%;background:#131A2E;border:3px solid #8CC63F;display:flex;align-items:center;justify-content:center">
              <svg class="spin" viewBox="0 0 100 100" style="position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px)"><defs><path id="bsda-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs><text style="font:800 9.5px 'Archivo',sans-serif;letter-spacing:1.9px;fill:#8CC63F;text-transform:uppercase"><textPath href="#bsda-ring">Faith · Learning · Service · </textPath></text></svg>
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:15px;line-height:1;color:#fff;text-align:center">EST.<br />1938</span>
            </div>
          </div>
        </div>
      </section>

      <!-- MARQUEE -->
      <div class="marquee" style="background:#8CC63F;overflow:hidden;padding:18px 0;border-bottom:4px solid #131A2E">
        <div class="marquee-track" style="display:flex;width:max-content">
          ${[0, 1].map((copy) => `
            <span style="display:flex" ${copy ? 'aria-hidden="true"' : ''}>
              ${(marquee).map((m) => `
                <span style="display:flex;align-items:center;gap:28px;padding-right:28px;font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(18px,1.8vw,26px);letter-spacing:.02em;text-transform:uppercase;color:#131A2E;white-space:nowrap">${E(m.label)}<span style="color:#fff;font-size:.8em">✦</span></span>
              `).join('')}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- PROOF -->
      <section style="padding:clamp(64px,7vw,110px) var(--gx) 0">
        <div class="rv" style="display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap">
          <div>
            <span class="kicker" style="color:#4A6FD0">Rising in excellence</span>
            <h2 class="h2">Small school.<br />Big results.</h2>
          </div>
          <p style="font-size:18px;line-height:1.6;color:#5A6180;max-width:440px">Our students score above the New York State average in English and match it in math. Here's what that looks like.</p>
        </div>
        <div class="stats" style="margin-top:44px">
          ${(proof).map((p) => `
            <div class="rv lift" style="background:#F4F2ED;padding:30px 28px 32px;border-top:6px solid ${E(p.bar)}">
              <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(40px,4vw,62px);line-height:1;letter-spacing:-.03em;color:#131A2E;white-space:nowrap" aria-hidden="true">${(p.static) ? E(p.n) : `<span class="cnt" style="--n:${E(p.n)}"></span>`}${E(p.suffix)}</div>
              <span class="sr-only">${E(p.n)}${E(p.suffix)}</span>
              <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase;margin-top:16px">${E(p.label)}</div>
              <p style="font-size:15px;line-height:1.55;color:#5A6180;margin-top:8px">${E(p.sub)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- WHY FAMILIES CHOOSE BSDA -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div class="rv" style="text-align:center;max-width:760px;margin:0 auto">
          <span class="kicker" style="color:#8CC63F">Why families choose us</span>
          <h2 class="h2">More than a school.<br />A second home.</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:48px">
          ${(why).map((x) => `
            <a href="${E(x.href)}" data-click="${H(x.onClick)}" class="rv lift zoom" style="display:flex;flex-direction:column;background:#fff;border:2px solid #131A2E;color:#131A2E">
              <div style="position:relative;height:240px;overflow:hidden">
                <img src="${E(x.img)}" alt="${E(x.alt)}" style="width:100%;height:100%;object-fit:cover" />
                <span style="position:absolute;left:0;bottom:0;padding:10px 16px;background:${E(x.accent)};font-family:'Archivo',sans-serif;font-weight:900;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#131A2E">${E(x.kicker)}</span>
              </div>
              <div style="padding:28px;display:flex;flex-direction:column;flex:1">
                <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:26px;line-height:1.08;text-transform:uppercase">${E(x.title)}</h3>
                <p style="margin-top:14px;font-size:16px;line-height:1.62;color:#5A6180;flex:1">${E(x.body)}</p>
                <span class="arw" style="margin-top:22px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#2E4CA8">${E(x.cta)} <span>→</span></span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- GRADE BANDS -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div class="rv" style="display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap">
          <div>
            <span class="kicker" style="color:#4A6FD0">Pre-K to Grade 8</span>
            <h2 class="h2">Find your<br />child's place.</h2>
          </div>
          <a href="#life" data-click="${H(goLife)}" class="hv9 arw" style="padding:15px 26px;border:2px solid #131A2E;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#131A2E">Explore every grade <span>→</span></a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px">
          ${(bands).map((b) => `
            <a href="${E(b.href)}" data-click="${H(b.onClick)}" class="rv lift zoom" style="position:relative;display:flex;flex-direction:column;background:${E(b.bg)};color:${E(b.color)};overflow:hidden">
              <div style="height:300px;overflow:hidden"><img src="${E(b.img)}" alt="${E(b.alt)}" style="width:100%;height:100%;object-fit:cover" /></div>
              <div style="padding:28px 28px 32px">
                <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(34px,3.2vw,48px);line-height:.95;letter-spacing:-.02em;text-transform:uppercase">${E(b.grades)}</div>
                <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:19px;margin-top:14px">${E(b.title)}</h3>
                <p style="margin-top:10px;font-size:15.5px;line-height:1.6;opacity:.86">${E(b.body)}</p>
                <span class="arw" style="display:inline-block;margin-top:20px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase">Learn more <span>→</span></span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- GROWTH -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(36px,5vw,80px);position:relative;overflow:hidden;isolation:isolate">
          <span aria-hidden="true" class="blob" style="position:absolute;width:560px;height:560px;right:-200px;bottom:-260px;background:radial-gradient(circle,rgba(140,198,63,.28),transparent 65%);z-index:-1"></span>
          <div style="display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(36px,5vw,80px);align-items:start">
            <div class="rv">
              <span class="kicker" style="color:#8CC63F">Four years of growth</span>
              <h2 class="h2" style="color:#fff">Our students<br />are rising.</h2>
              <p style="margin-top:20px;font-size:17px;line-height:1.65;color:#A9B1CE;max-width:460px">New York State test results for grades 3–8 show steady gains every year. Seventh graders now sit high-school Regents exams, and our graduates go on to Geometry, Algebra II and Calculus.</p>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:32px">
                ${(regents).map((r) => `
                  <div style="background:#1B2340;padding:18px 16px">
                    <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:30px;line-height:1;color:#fff">${E(r.value)}</div>
                    <div style="font-size:12.5px;font-weight:700;line-height:1.35;color:#8A93B6;margin-top:8px">${E(r.label)}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:30px">
              ${(growth).map((g) => `
                <div class="rv">
                  <div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap">
                    <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:15px;letter-spacing:.1em;text-transform:uppercase;color:#fff">${E(g.subject)}</span>
                    <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(34px,3.2vw,46px);line-height:1;color:#8CC63F">${E(g.to)}%</span>
                  </div>
                  <div style="position:relative;height:22px;background:rgba(255,255,255,.08);margin-top:14px">
                    <span class="fill" style="--from:${E(g.from)}%;position:absolute;left:0;top:0;bottom:0;width:${E(g.to)}%;background:linear-gradient(90deg,#4A6FD0,#8CC63F)"></span>
                    <span title="New York State" style="position:absolute;top:-7px;bottom:-7px;left:${E(g.state)}%;width:4px;margin-left:-2px;background:#FFD24A"></span>
                  </div>
                  <div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:12px;font-size:14px;font-weight:600">
                    <span style="color:#D6DBEC">${E(g.delta)} <span style="color:#6E779B">(from ${E(g.from)}%)</span></span>
                    <span style="color:#FFD24A">▍ ${E(g.note)}</span>
                  </div>
                </div>
              `).join('')}
              <p style="font-size:12.5px;color:#6E779B">Source: BSDAS Chronicles, July 2026. Yellow marker: New York State proficiency, 2025–26.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- PRINCIPAL -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div style="display:grid;grid-template-columns:1.15fr .85fr;gap:0">
          <div class="rv" style="background:#FFD24A;padding:clamp(36px,5vw,76px);position:relative">
            <span aria-hidden="true" style="position:absolute;top:-10px;left:clamp(24px,4vw,60px);font-family:'Archivo',sans-serif;font-weight:900;font-size:180px;line-height:1;color:#131A2E;opacity:.12">“</span>
            <span class="kicker" style="color:#453712">From the principal</span>
            <blockquote style="margin:18px 0 0;font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(28px,3.2vw,46px);line-height:1.08;text-transform:uppercase;color:#131A2E">${E(principalQuote.quote)}</blockquote>
            <p style="margin-top:22px;font-size:17.5px;line-height:1.65;color:#453712;max-width:560px">${E(principalQuote.body)}</p>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-top:30px">
              <span style="display:flex;flex-direction:column">
                <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:18px;color:#131A2E">${E(principalQuote.name)}</span>
                <span style="font-size:14px;font-weight:700;color:#453712;margin-top:3px">${E(principalQuote.role)}</span>
              </span>
              <a href="#about" data-click="${H(goAbout)}" class="hv10 arw" style="padding:15px 26px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase">Read the welcome <span>→</span></a>
            </div>
          </div>
          <div class="zoom" style="position:relative;min-height:420px;overflow:hidden">
            <img src="assets/hero-faith.jpg" alt="Student in prayer" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%" />
          </div>
        </div>
      </section>

      <!-- HOW TO JOIN -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(36px,5vw,76px)">
          <div class="rv" style="display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap">
            <div>
              <span class="kicker" style="color:#4A6FD0">How to join</span>
              <h2 class="h2">Four steps<br />to BSDA.</h2>
            </div>
            <p style="font-size:17px;line-height:1.6;color:#5A6180;max-width:420px">Enrollment for 2026–27 is ongoing. The admissions office walks every family through each step.</p>
          </div>
          <ol class="steps" style="list-style:none;padding:0;margin:48px 0 0;display:grid;grid-template-columns:repeat(4,1fr);gap:22px">
            ${(joinSteps).map((s) => `
              <li class="rv" style="position:relative;background:#fff;padding:30px 26px 32px">
                <span style="display:inline-flex;align-items:center;justify-content:center;width:58px;height:58px;background:#131A2E;color:#8CC63F;font-family:'Archivo',sans-serif;font-weight:900;font-size:20px">${E(s.n)}</span>
                <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:24px;text-transform:uppercase;margin-top:22px">${E(s.title)}</h3>
                <p style="margin-top:10px;font-size:15.5px;line-height:1.6;color:#5A6180">${E(s.body)}</p>
              </li>
            `).join('')}
          </ol>
          <div class="rv" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:36px">
            <a href="#apply" data-click="${H(goApply)}" class="hv7 arw shine" style="padding:18px 30px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase">Start your application <span>→</span></a>
            <a href="https://bsda.school/wp-content/uploads/2024/04/BSDA-Application-Form.pdf" target="_blank" rel="noopener" class="hv9" style="padding:18px 30px;border:2px solid #131A2E;color:#131A2E;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase">Download paper application</a>
            <a href="#admissions" data-click="${H(goAdmissions)}" class="arw" style="padding:18px 8px;color:#2E4CA8;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase">Admissions details <span>→</span></a>
          </div>
        </div>
      </section>

      <!-- PLAN A VISIT -->
      <section id="plan-visit" style="padding:clamp(72px,8vw,120px) var(--gx) 0;scroll-margin-top:20px">
        <div class="rv" style="text-align:center;max-width:760px;margin:0 auto">
          <span class="kicker" style="color:#8CC63F">Come see us</span>
          <h2 class="h2">Let's meet.<br />Your way.</h2>
          <p style="margin-top:18px;font-size:18px;line-height:1.6;color:#5A6180">Visit in person, meet us on a video call, or just ask a question. We'd love to get to know your family.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px">
          ${(visitOptions).map((o) => `
            <a href="${E(o.href)}" ${o.onClick ? `data-click="${H(o.onClick)}"` : ''} class="rv lift" style="display:flex;flex-direction:column;padding:30px 26px;background:${E(o.bg)};color:${E(o.color)};border:2px solid #131A2E">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${o.svg}</svg>
              <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:22px;text-transform:uppercase;margin-top:22px">${E(o.title)}</h3>
              <p style="margin-top:10px;font-size:15px;line-height:1.55;opacity:.85;flex:1">${E(o.body)}</p>
              <span class="arw" style="margin-top:20px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.06em;word-break:break-word">${E(o.cta)} <span>→</span></span>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- NEWS + EVENTS -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div class="rv" style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;border-bottom:3px solid #131A2E;padding-bottom:22px">
          <h2 class="h2">News &amp; events</h2>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a href="#news" data-click="${H(goNews)}" style="padding:14px 26px;border:2px solid #131A2E;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#131A2E" class="hv9">All news</a>
            <a href="#events" data-click="${H(goEvents)}" style="padding:14px 26px;border:2px solid #131A2E;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#131A2E" class="hv9">Calendar</a>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-top:28px">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
            ${(homeNews).map((n) => `
              <article class="rv lift zoom" style="background:#F4F2ED;display:flex;flex-direction:column">
                <div style="height:196px;overflow:hidden"><img src="${E(n.img)}" alt="" style="width:100%;height:100%;object-fit:cover" /></div>
                <div style="padding:26px;display:flex;flex-direction:column;flex:1">
                  <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12px;letter-spacing:.12em;color:#4A6FD0">${E(n.date)}</span>
                  <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:21px;margin-top:12px;line-height:1.22">${E(n.title)}</h3>
                  <p style="margin-top:11px;font-size:15px;line-height:1.6;color:#5A6180">${E(n.excerpt)}</p>
                </div>
              </article>
            `).join('')}
          </div>
          <aside class="rv" style="background:#131A2E;padding:32px">
            <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:20px;letter-spacing:.1em;text-transform:uppercase;color:#8CC63F">Coming up</h3>
            <ul style="list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:18px">
              ${(homeEvents).map((e) => `
                <li style="display:flex;gap:16px;align-items:flex-start;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,.14)">
                  <span style="flex:0 0 58px;text-align:center;background:#4A6FD0;padding:10px 4px">
                    <span style="display:block;font-family:'Archivo',sans-serif;font-size:17px;font-weight:900;line-height:1;color:#fff">${E(e.day)}</span>
                    <span style="display:block;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-top:5px;color:#D4DEF7">${E(e.month)}</span>
                  </span>
                  <span>
                    <span style="display:block;font-family:'Archivo',sans-serif;font-size:16.5px;font-weight:800;line-height:1.25;color:#fff">${E(e.title)}</span>
                    <span style="display:block;font-size:11.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#8CC63F;margin-top:6px">${E(e.meta)}</span>
                  </span>
                </li>
              `).join('')}
            </ul>
          </aside>
        </div>
      </section>

      <!-- 12 STONES -->
      <section style="padding:clamp(72px,8vw,120px) var(--gx) 0">
        <div class="rv" style="position:relative;overflow:hidden;background:#0C1120;isolation:isolate">
          <img src="assets/stones.jpg" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.22;z-index:-1" />
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,60px);align-items:center;padding:clamp(36px,5vw,72px)">
            <div>
              <span style="display:flex;align-items:center;gap:14px">
                <img src="assets/12stones-logo.png" alt="12 Stones Fund" style="width:58px;height:58px;object-fit:contain" />
                <span class="kicker" style="color:#FFD24A;margin:0">12 Stones Fund</span>
              </span>
              <h2 class="h2" style="color:#fff;margin-top:18px">Every gift<br />builds a future.</h2>
              <p style="margin-top:18px;font-size:17px;line-height:1.65;color:#A9B1CE;max-width:480px">About $1 a day helps a child receive a Christ-centered education, whatever their family's finances.</p>
            </div>
            <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);padding:30px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:12px">
                <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(30px,3vw,42px);color:#fff;line-height:1"><span data-raised>${E(hudRaised)}</span></span>
                <span style="font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A93B6">of ${E(hudGoal)} goal</span>
              </div>
              <div style="height:14px;background:#1B2340;overflow:hidden">
                <div data-bar style="height:100%;width:${E(hudPct)};background:linear-gradient(90deg,#E8B400,#FFD24A);transition:width 1.5s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden"><span style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);width:40%;animation:bsda-sheen 3.4s ease-in-out infinite"></span></div>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-top:22px">
                <span style="display:flex;gap:26px">
                  <span style="display:flex;flex-direction:column;line-height:1"><span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:22px;color:#FFD24A">${E(hudDonors)}</span><span style="font-size:10.5px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#8A93B6;margin-top:6px">Donors</span></span>
                  <span style="display:flex;flex-direction:column;line-height:1"><span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:22px;color:#fff">${E(hudPctLabel)}</span><span style="font-size:10.5px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#8A93B6;margin-top:6px">Funded</span></span>
                </span>
                <a href="#give" data-click="${H(goGive)}" class="hv2 arw" style="padding:16px 28px;background:#FFD24A;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase">Give today <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ INNER PAGE HEADER (all non-home) ============ -->
  ${(isInner) ? `
    <div>
      <header style="padding:36px var(--gx) 0">
        <div style="background:#131A2E;padding:26px 34px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap">
          <div style="display:flex;align-items:center;gap:16px">
            <button type="button" data-click="${H(openMenu)}" style="width:52px;height:52px;border:none;background:#4A6FD0;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0" class="hv4">
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
              <span style="display:block;width:22px;height:3px;background:#fff"></span>
            </button>
            <a href="#home" data-click="${H(goHome)}" style="display:flex;align-items:center;gap:13px">
              <img src="assets/logo-white.svg" alt="Brooklyn Seventh-day Adventist School" style="width:44px;height:44px" />
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(22px,2.2vw,30px);color:#fff;line-height:1">BROOKLYN SDA</span>
            </a>
          </div>
          <nav style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <a href="#about" data-click="${H(goAbout)}" style="padding:13px 22px;font-family:'Archivo',sans-serif;font-weight:800;font-size:13.5px;letter-spacing:.11em;text-transform:uppercase;color:#fff;border:2px solid rgba(255,255,255,.28)" class="hv5">About</a>
            <a href="#contact" data-click="${H(goContact)}" style="padding:13px 22px;font-family:'Archivo',sans-serif;font-weight:800;font-size:13.5px;letter-spacing:.11em;text-transform:uppercase;color:#fff;border:2px solid rgba(255,255,255,.28)" class="hv5">Plan a visit</a>
            <a href="#apply" data-click="${H(goApply)}" style="padding:13px 22px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.11em;text-transform:uppercase;color:#0C1120;background:#8CC63F;border:2px solid #8CC63F" class="hv6">Apply now</a>
            <a href="#give" data-click="${H(goGive)}" style="padding:13px 22px;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.11em;text-transform:uppercase;color:#0C1120;background:#FFD24A" class="hv2">Donate</a>
          </nav>
        </div>
      </header>

      <section style="padding:20px var(--gx) 0">
        <div style="position:relative;min-height:300px;display:flex;align-items:flex-end;overflow:hidden;background:#131A2E">
          <img src="${E(page.img)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5" />
          <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(19,26,46,.94) 0%,rgba(19,26,46,.6) 60%,rgba(19,26,46,.35) 100%)"></div>
          <div style="position:relative;padding:clamp(32px,4vw,56px)">
            <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#8CC63F">${E(page.kicker)}</span>
            <h1 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(38px,5.4vw,76px);line-height:.94;text-transform:uppercase;color:#fff;margin-top:14px">${E(page.title)}</h1>
            <p style="margin-top:18px;font-size:18px;line-height:1.6;color:#B5BDD8;max-width:660px">${E(page.blurb)}</p>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ ABOUT ============ -->
  ${(isAbout) ? `
    <div data-screen-label="About">
      <section style="padding:20px var(--gx) 0;display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div style="background:#131A2E;padding:clamp(30px,3.4vw,52px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:34px;text-transform:uppercase;color:#fff">Our mission</h2>
          <p style="margin-top:14px;font-size:16px;color:#8CC63F;font-weight:600">The mission of the Brooklyn Seventh-day Adventist School is to:</p>
          <ul style="margin:20px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:14px">
            ${(missionPoints).map((m) => `
              <li style="display:flex;gap:14px;align-items:flex-start;font-size:17px;line-height:1.5;color:#D6DBEC"><span style="flex:0 0 10px;height:10px;background:#8CC63F;margin-top:8px"></span>${E(m.label)}</li>
            `).join('')}
          </ul>
        </div>
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,52px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:34px;text-transform:uppercase">Our philosophy</h2>
          <p style="margin-top:16px;font-size:16px;line-height:1.68;color:#5A6180">A belief in the existence of the Creator God is fundamental in the philosophy of Seventh-day Adventist schools. We believe that true education develops the spiritual, mental and physical powers of each student, preparing them for the joy of service in this life and for the higher joy of service in the life to come. To achieve this goal, we encourage each student to:</p>
          <ul style="margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:11px">
            ${(philosophyPoints).map((p) => `
              <li style="display:flex;gap:12px;align-items:flex-start;font-size:15.5px;line-height:1.55;color:#5A6180"><span style="flex:0 0 8px;height:8px;background:#4A6FD0;margin-top:8px"></span>${E(p.label)}</li>
            `).join('')}
          </ul>
          <p style="margin-top:20px;font-size:14px;color:#8A90A8;line-height:1.6">The school operates in harmony with the guidance and direction of the Office of Education, North American Division of the Seventh-day Adventist Church.</p>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:42% 1fr;background:#F4F2ED;min-height:520px">
          <div style="position:relative;overflow:hidden;min-height:400px"><img src="assets/students-worship.jpg" alt="Students leading worship" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>
          <div style="padding:clamp(32px,3.6vw,58px);display:flex;flex-direction:column;justify-content:center">
            <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#4A6FD0">Welcome from the principal</span>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,2.9vw,40px);line-height:1.1;text-transform:uppercase;margin-top:14px">“Our warm and inclusive community is ready to embrace you.”</h2>
            <div style="margin-top:22px;display:flex;flex-direction:column;gap:15px">
              ${(principalLetter).map((para) => `
                <p style="font-size:16px;line-height:1.7;color:#5A6180">${E(para.text)}</p>
              `).join('')}
            </div>
            <div style="margin-top:26px;padding-top:22px;border-top:2px solid rgba(19,26,46,.14)">
              <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:22px">Loris LaBorde</div>
              <div style="font-family:'Archivo',sans-serif;font-weight:800;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:#4A6FD0;margin-top:6px">Principal</div>
              <a href="mailto:principal@bsda.school" style="display:inline-block;margin-top:10px;font-size:15px;font-weight:600">principal@bsda.school</a>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:64px var(--gx) 0">
        <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(30px,3.4vw,46px);text-transform:uppercase;border-bottom:3px solid #131A2E;padding-bottom:20px">History</h2>
        <div data-rail="1" style="display:flex;gap:20px;overflow-x:auto;padding:28px 2px 24px;scroll-snap-type:x mandatory">
          ${(history).map((h) => `
            <article style="flex:0 0 330px;scroll-snap-align:start;background:#F4F2ED;display:flex;flex-direction:column">
              <div style="background:#131A2E;padding:16px 26px;font-family:'Archivo',sans-serif;font-size:28px;font-weight:900;color:#8CC63F;line-height:1">${E(h.year)}</div>
              <div style="padding:26px">
                <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:21px;line-height:1.22;text-transform:uppercase">${E(h.title)}</h3>
                <p style="margin-top:12px;font-size:15px;line-height:1.62;color:#5A6180">${E(h.body)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <section style="padding:24px var(--gx) 0">
        <div style="background:#4A6FD0;padding:clamp(36px,4vw,64px);text-align:center">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#D9E2FA">Our aim</span>
          <p style="font-family:'Archivo',sans-serif;font-size:clamp(22px,2.7vw,34px);line-height:1.34;font-weight:700;margin:18px auto 0;color:#fff;max-width:900px">“To restore in man the image of his maker… to promote the development of body, mind and soul, that the divine purpose in His creation might be realized.”</p>
          <p style="margin-top:20px;font-family:'Archivo',sans-serif;font-size:12.5px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#FFD24A">Ellen G. White · Education, page 15</p>
        </div>
      </section>

      <section style="padding:24px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(34px,4vw,60px)">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#8CC63F">Our vision</span>
          <p style="font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(20px,2.3vw,30px);line-height:1.34;color:#fff;margin-top:16px;max-width:980px">${E(vision.statement)}</p>
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(15px,1.5vw,19px);letter-spacing:.06em;text-transform:uppercase;color:#FFD24A;margin-top:22px">${E(vision.motto)}</p>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:32px">
            ${(bsdas).map((b) => `
              <div style="background:${E(b.bg)};padding:22px 22px 20px">
                <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:54px;line-height:1;color:${E(b.color)}">${E(b.letter)}</div>
                <div style="font-family:'Archivo',sans-serif;font-weight:800;font-size:14px;letter-spacing:.14em;text-transform:uppercase;margin-top:10px;color:${E(b.color)}">${E(b.word)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding:24px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,52px);display:grid;grid-template-columns:1fr 1fr;gap:40px">
          <div>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,38px);text-transform:uppercase">Accreditation</h2>
            <p style="margin-top:16px;font-size:16.5px;line-height:1.7;color:#5A6180">${E(accreditation.text)}</p>
          </div>
          <div>
            <div style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#8A90A8">The curriculum includes</div>
            <div style="display:flex;flex-wrap:wrap;gap:9px;margin-top:14px">
              ${(courses).map((c) => `<span style="padding:9px 15px;background:#fff;font-family:'Archivo',sans-serif;font-weight:800;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase">${E(c.label)}</span>`).join('')}
            </div>
            <p style="margin-top:18px;font-size:15px;line-height:1.65;color:#5A6180">${E(accreditation.regents)}</p>
          </div>
        </div>
      </section>

      <section style="padding:24px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(32px,3.6vw,54px);display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:space-between">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,2.9vw,40px);text-transform:uppercase;color:#fff;max-width:540px;line-height:1.06">Meet the people who teach here</h2>
          <a href="#faculty" data-click="${H(goFaculty)}" style="padding:18px 34px;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Faculty directory</a>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ FACULTY ============ -->
  ${(isFaculty) ? `
    <div data-screen-label="Faculty">
      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
          ${(facultyStats).map((s) => `
            <div style="background:#F4F2ED;padding:32px">
              <div style="font-family:'Archivo',sans-serif;font-size:46px;font-weight:900;line-height:1;color:#4A6FD0">${E(s.value)}</div>
              <div style="font-family:'Archivo',sans-serif;font-size:12.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#5A6180;margin-top:10px">${E(s.label)}</div>
            </div>
          `).join('')}
        </div>
      </section>
      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(258px,1fr));gap:20px">
          ${(faculty).map((f) => `
            <article style="background:#F4F2ED">
              <div style="height:230px;background:#DDD9CF;display:flex;align-items:center;justify-content:center;position:relative">
                <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:52px;color:#B9B3A4">${E(f.initials)}</span>
                <span style="position:absolute;top:0;left:0;padding:8px 14px;background:${E(f.tagBg)};font-family:'Archivo',sans-serif;font-size:10.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:${E(f.tagColor)}">${E(f.dept)}</span>
              </div>
              <div style="padding:22px">
                <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:20px;line-height:1.2">${E(f.name)}</h3>
                <p style="font-family:'Archivo',sans-serif;font-size:12.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#4A6FD0;margin-top:9px">${E(f.role)}</p>
              </div>
            </article>
          `).join('')}
        </div>
        <p style="margin-top:24px;font:600 13px/1.6 ui-monospace,monospace;color:#8A90A8;background:#F4F2ED;padding:20px 22px">Names and roles are live from the current staff directory. Portraits still to be supplied by the school office — initials are placeholders.</p>
      </section>
      <section style="padding:24px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(32px,3.6vw,54px);display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:space-between">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(24px,2.7vw,36px);text-transform:uppercase;color:#fff;max-width:560px;line-height:1.08">Don't wait — begin the application process now</h2>
          <a href="#admissions" data-click="${H(goAdmissions)}" style="padding:18px 34px;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Admissions</a>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ ADMISSIONS ============ -->
  ${(isAdmissions) ? `
    <div data-screen-label="Admissions">
      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase">The process, step by step</h2>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:32px">
            ${(admitSteps).map((s) => `
              <article style="background:#fff;display:flex;flex-direction:column">
                <div style="background:${E(s.bar)};padding:14px 22px;display:flex;align-items:center;justify-content:space-between">
                  <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:11.5px;letter-spacing:.15em;text-transform:uppercase;color:${E(s.barText)}">${E(s.step)}</span>
                  <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:17px;color:${E(s.barText)}">${E(s.n)}</span>
                </div>
                <div style="padding:24px">
                  <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:24px;text-transform:uppercase;line-height:1.1">${E(s.title)}</h3>
                  <ul style="margin:16px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:11px">
                    ${(s.items).map((i) => `
                      <li style="display:flex;gap:11px;align-items:flex-start;font-size:14.5px;line-height:1.52;color:#5A6180"><span style="flex:0 0 7px;height:7px;background:#4A6FD0;margin-top:7px"></span>${E(i.label)}</li>
                    `).join('')}
                  </ul>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0;display:grid;grid-template-columns:1.2fr .8fr;gap:20px">
        <div style="background:#fff;border:3px solid #131A2E;padding:clamp(28px,3.2vw,44px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:32px;text-transform:uppercase">Documents to submit</h2>
          <p style="margin-top:10px;font-size:15px;color:#8A90A8">Registration is complete once the office has received all of the following.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px">
            ${(documents).map((d) => `
              <span style="display:flex;gap:11px;align-items:flex-start;font-size:14.5px;line-height:1.5;padding:13px 15px;background:#F4F2ED"><span style="flex:0 0 8px;height:8px;background:#8CC63F;margin-top:6px"></span>${E(d.label)}</span>
            `).join('')}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:20px">
          <div style="background:#8CC63F;padding:34px">
            <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:28px;text-transform:uppercase;color:#16240A">Tuition</h3>
            <ul style="list-style:none;margin:18px 0 0;padding:0;display:flex;flex-direction:column;gap:13px">
              <li style="font-size:15.5px;line-height:1.6;color:#1E2E0D"><strong style="font-weight:800">Pay online.</strong> Use Adventist School Pay to settle tuition and fees anytime, anywhere.</li>
              <li style="font-size:15.5px;line-height:1.6;color:#1E2E0D"><strong style="font-weight:800">Pay in person.</strong> Visit the office and pay by check, cash or card.</li>
            </ul>
            <a href="https://www.adventistschoolpay.org/?OrgID=AN4820" target="_blank" rel="noopener" style="display:inline-block;margin-top:22px;padding:15px 28px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv10">Pay tuition &amp; fees</a>
          </div>
          <div style="background:#131A2E;padding:34px">
            <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:26px;text-transform:uppercase;color:#fff">Do it quickly</h3>
            <p style="margin-top:14px;font-size:15.5px;line-height:1.65;color:#A9B1CE">Applications submitted before the September deadline are considered in the first round of decisions. Later applications are reviewed on a space-available basis. Call the Office of Admission at (718) 859-1313 to ask about availability.</p>
            <p style="margin-top:18px;font-family:'Archivo',sans-serif;font-size:13px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#0C1120;background:#FFD24A;padding:12px 18px;display:inline-block">Application fee $60 · non-refundable</p>
            <p style="margin-top:16px"><a href="https://bsda.school/wp-content/uploads/2024/04/BSDA-Application-Form.pdf" target="_blank" rel="noopener" style="font-size:15.5px;font-weight:700;color:#8CC63F;text-decoration:underline">Download the paper application (PDF)</a></p>
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(24px,2.8vw,38px);text-transform:uppercase">Placement test &amp; registration dates</h2>
          <p style="margin-top:12px;font-size:16px;color:#5A6180">Select a date and reserve a time slot to register your child. Dates are set each year by the school office.</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:28px">
            ${(testDates).map((t) => `
              <div style="background:#fff;padding:22px;border-left:5px solid #4A6FD0">
                <div style="font-family:'Archivo',sans-serif;font-size:22px;font-weight:900">${E(t.date)}</div>
                <div style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#8A90A8;margin-top:9px">${E(t.kind)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#FFD24A;padding:clamp(32px,3.6vw,54px);display:flex;flex-wrap:wrap;gap:28px;justify-content:space-between;align-items:center">
          <div>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,2.9vw,38px);text-transform:uppercase;color:#2E2306">Contact the admissions office</h2>
            <p style="margin-top:12px;font-size:17px;color:#453712">Questions about grades, uniforms, fees or the placement test — we're happy to help.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <a href="tel:+17188591313" style="font-family:'Archivo',sans-serif;font-size:30px;font-weight:900;color:#131A2E" class="hv11">(718) 859-1313</a>
            <a href="mailto:admissions@bsda.school" style="font-size:17px;font-weight:700;color:#2E4CA8">admissions@bsda.school</a>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ APPLY ============ -->
  ${(isApply) ? `
    <section data-screen-label="Apply" style="padding:20px var(--gx) 0;max-width:1080px;margin:0 auto">
      ${(notSubmitted) ? `
        <div>
          <div style="display:flex;flex-wrap:wrap;gap:18px;justify-content:space-between;align-items:center;margin-bottom:20px;padding:22px 26px;background:#FFF6DC;border-left:5px solid #FFD24A">
            <p style="font-size:16px;line-height:1.6;max-width:640px"><strong style="font-weight:800">Prefer paper?</strong> Download the application, fill it in and bring it to the school office at 1260 Ocean Avenue, or email it to admissions@bsda.school.</p>
            <a href="https://bsda.school/wp-content/uploads/2024/04/BSDA-Application-Form.pdf" target="_blank" rel="noopener" style="padding:15px 28px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap" class="hv10">Download application (PDF)</a>
          </div>
          <div style="display:flex;gap:14px;flex-wrap:wrap">
            ${(stepTabs).map((s) => `
              <div style="flex:1 1 180px;padding:18px 20px;background:${E(s.bg)};border-bottom:4px solid ${E(s.rule)}">
                <div style="font-family:'Archivo',sans-serif;font-size:10.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:${E(s.muted)}">Step ${E(s.n)}</div>
                <div style="font-family:'Archivo',sans-serif;font-size:16.5px;font-weight:900;margin-top:8px;text-transform:uppercase;color:${E(s.color)}">${E(s.label)}</div>
              </div>
            `).join('')}
          </div>

          <form data-submit="${H(onSubmit)}" style="margin-top:20px;background:#F4F2ED;padding:clamp(28px,3.4vw,48px)">
            <div>
              <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:30px;text-transform:uppercase">${E(applyStep.title)}</h2>
              ${(isLastStep) ? `
                <div style="margin-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:12px">
                  ${(summary).map((s) => `
                    <div style="padding:16px 18px;background:#fff">
                      <div style="font:800 10.5px/1 ui-monospace,monospace;letter-spacing:.13em;text-transform:uppercase;color:#8A90A8">${E(s.label)}</div>
                      <div style="font-size:16px;font-weight:600;margin-top:8px">${E(s.value)}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:26px">
                ${(applyFields).map((fd) => `
                  ${(fd.isCheckbox) ? `
                    <div style="grid-column:1 / -1;display:flex;flex-direction:column;gap:8px">
                      <label style="display:flex;gap:14px;align-items:flex-start;padding:18px 20px;background:#fff;border-left:5px solid #FFD24A">
                        <input type="checkbox" data-field="${E(fd.k)}" data-checked="${E(fd.checked)}" data-change="${H(fd.onChange)}" style="width:22px;height:22px;margin-top:2px;flex-shrink:0;accent-color:#4A6FD0" />
                        <span style="font-size:15px;line-height:1.6">${E(fd.label)}${(fd.required) ? ' *' : ''}</span>
                      </label>
                      ${(fd.error) ? `<span style="font-size:13px;font-weight:700;color:#C0392B">${E(fd.error)}</span>` : ''}
                    </div>
                  ` : ''}
                  ${(fd.isRadio) ? `
                    <fieldset style="border:0;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;${fd.span ? 'grid-column:1 / -1' : ''}">
                      <legend style="padding:0;margin-bottom:8px;font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">${E(fd.label)}${(fd.required) ? ' *' : ''}</legend>
                      ${(fd.help) ? `<span style="font-size:14px;line-height:1.5;color:#5A6180">${E(fd.help)}</span>` : ''}
                      <div style="display:flex;gap:12px;flex-wrap:wrap">
                        ${(fd.options).map((o) => `
                          <label style="display:flex;gap:10px;align-items:center;padding:12px 18px;background:#fff;border:2px solid #CFCBC1;font-size:16px;cursor:pointer">
                            <input type="radio" name="${E(fd.k)}" value="${E(o.label)}" data-field="${E(fd.k)}:${E(o.label)}" data-checked="${E(o.checked)}" data-change="${H(fd.onChange)}" style="width:18px;height:18px;accent-color:#4A6FD0" />
                            ${E(o.label)}
                          </label>
                        `).join('')}
                      </div>
                      ${(fd.error) ? `<span style="font-size:13px;font-weight:700;color:#C0392B">${E(fd.error)}</span>` : ''}
                    </fieldset>
                  ` : ''}
                  ${(fd.isInput || fd.isSelect || fd.isTextarea) ? `
                    <label style="display:flex;flex-direction:column;gap:8px;${fd.span ? 'grid-column:1 / -1' : ''}">
                      <span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">${E(fd.label)}${(fd.required) ? ' *' : ''}</span>
                      ${(fd.help) ? `<span style="font-size:14px;line-height:1.5;color:#5A6180">${E(fd.help)}</span>` : ''}
                      ${(fd.isInput) ? `<input type="${E(fd.type)}" data-field="${E(fd.k)}" data-val="${E(fd.value)}" data-change="${H(fd.onChange)}" placeholder="${E(fd.ph)}" style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px" />` : ''}
                      ${(fd.isTextarea) ? `<textarea rows="3" data-field="${E(fd.k)}" data-val="${E(fd.value)}" data-change="${H(fd.onChange)}" placeholder="${E(fd.ph)}" style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px;resize:vertical"></textarea>` : ''}
                      ${(fd.isSelect) ? `
                        <select data-field="${E(fd.k)}" data-val="${E(fd.value)}" data-change="${H(fd.onChange)}" style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px">
                          <option value="">${E(fd.ph)}</option>
                          ${(fd.options).map((o) => `<option value="${E(o.label)}">${E(o.label)}</option>`).join('')}
                        </select>
                      ` : ''}
                      ${(fd.error) ? `<span style="font-size:13px;font-weight:700;color:#C0392B">${E(fd.error)}</span>` : ''}
                    </label>
                  ` : ''}
                `).join('')}
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;gap:14px;margin-top:34px;padding-top:26px;border-top:2px solid #DCD8CE;flex-wrap:wrap">
              <button type="button" data-click="${H(onBack)}" ${atFirstStep ? 'disabled' : ''} style="padding:16px 30px;border:2px solid #131A2E;background:transparent;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;opacity:${E(backOpacity)}">Back</button>
              ${(notLastStep) ? `
                <button type="button" data-click="${H(onNext)}" style="padding:16px 34px;border:none;background:#4A6FD0;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">Continue</button>
              ` : ''}
              ${(isLastStep) ? `
                <button type="submit" style="padding:16px 34px;border:none;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">Submit application</button>
              ` : ''}
            </div>
          </form>
        </div>
      ` : ''}

      ${(submitted) ? `
        <div style="background:#8CC63F;padding:clamp(36px,4vw,64px);text-align:center">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(30px,3.6vw,46px);text-transform:uppercase;color:#16240A">Application received</h2>
          <p style="margin:16px auto 0;font-size:17px;line-height:1.65;max-width:560px;color:#1E2E0D">Thanks, ${E(submittedName)}. The admissions office will be in touch to schedule your meeting with administration and confirm a placement test date.</p>
          <div style="display:flex;gap:14px;justify-content:center;margin-top:28px;flex-wrap:wrap">
            <a href="https://www.adventistschoolpay.org/?OrgID=AN4820" target="_blank" rel="noopener" style="padding:16px 30px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv10">Pay the $60 fee</a>
            <button type="button" data-click="${H(onReset)}" style="padding:16px 30px;border:2px solid #16240A;background:transparent;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;color:#16240A">Start another</button>
          </div>
        </div>
      ` : ''}
    </section>
  ` : ''}

  <!-- ============ STUDENT LIFE ============ -->
  ${(isLife) ? `
    <div data-screen-label="Student Life">
      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase">A day in the life</h2>
          <p style="margin-top:12px;font-size:17px;color:#5A6180">Scroll through the school day, 7:45am to 3:15pm.</p>
          <div data-rail="1" style="display:flex;gap:18px;overflow-x:auto;padding:28px 2px 22px;scroll-snap-type:x mandatory">
            ${(dayFull).map((d) => `
              <article style="flex:0 0 272px;scroll-snap-align:start;background:#fff;display:flex;flex-direction:column;min-height:224px">
                <div style="background:${E(d.bar)};padding:13px 20px;font-family:'Archivo',sans-serif;font-weight:900;font-size:15px;letter-spacing:.1em;color:${E(d.barText)}">${E(d.time)}</div>
                <div style="padding:22px">
                  <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:22px;text-transform:uppercase;line-height:1.15">${E(d.title)}</h3>
                  <p style="margin-top:10px;font-size:15px;line-height:1.58;color:#5A6180">${E(d.body)}</p>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase;color:#fff">Grade explorer</h2>
          <p style="margin-top:12px;font-size:16px;color:#8A93B6">Pick a grade to see what a year looks like.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px">
            ${(gradeTabs).map((g) => `
              <button type="button" data-click="${H(g.onClick)}" style="padding:13px 20px;border:2px solid ${E(g.border)};background:${E(g.bg)};color:${E(g.color)};font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer">${E(g.label)}</button>
            `).join('')}
          </div>
          <div style="margin-top:26px;background:#fff;padding:clamp(28px,3.2vw,46px);display:grid;grid-template-columns:1fr 1fr;gap:36px">
            <div>
              <span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#4A6FD0">${E(activeGrade.kicker)}</span>
              <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(28px,3.2vw,40px);text-transform:uppercase;margin-top:12px;line-height:1.04">${E(activeGrade.title)}</h3>
              <p style="margin-top:16px;font-size:17px;line-height:1.66;color:#5A6180">${E(activeGrade.body)}</p>
              <div style="margin-top:24px;padding:20px 24px;background:#FFD24A">
                <div style="font-family:'Archivo',sans-serif;font-size:10.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#453712">Signature moment</div>
                <div style="font-family:'Archivo',sans-serif;font-size:19px;font-weight:900;margin-top:9px;color:#2E2306">${E(activeGrade.moment)}</div>
              </div>
            </div>
            <div>
              <div style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#8A90A8">What you'll learn</div>
              <ul style="list-style:none;margin:18px 0 0;padding:0;display:flex;flex-direction:column;gap:12px">
                ${(activeGrade.learn).map((l) => `
                  <li style="display:flex;gap:13px;align-items:flex-start;font-size:16.5px;line-height:1.5;padding:15px 18px;background:#F4F2ED"><span style="flex:0 0 9px;height:9px;background:#8CC63F;margin-top:7px"></span>${E(l.label)}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,50px)">
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap">
            <div>
              <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase">Clubs &amp; activities</h2>
              <p style="margin-top:12px;font-size:17px;color:#5A6180">Extracurricular clubs, performing arts groups and athletic teams.</p>
            </div>
            <div style="display:flex;gap:9px;flex-wrap:wrap">
              ${(clubCats).map((c) => `
                <button type="button" data-click="${H(c.onClick)}" style="padding:12px 20px;border:2px solid #131A2E;background:${E(c.bg)};color:${E(c.color)};font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">${E(c.label)}</button>
              `).join('')}
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(266px,1fr));gap:18px;margin-top:30px">
            ${(visibleClubs).map((c) => `
              <article style="background:#fff;display:flex;flex-direction:column;min-height:206px">
                <div style="background:${E(c.bar)};padding:12px 20px;font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:${E(c.barText)}">${E(c.cat)}</div>
                <div style="padding:22px;display:flex;flex-direction:column;flex:1">
                  <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:22px;text-transform:uppercase;line-height:1.15">${E(c.name)}</h3>
                  <p style="margin-top:10px;font-size:15px;line-height:1.58;color:#5A6180">${E(c.body)}</p>
                  <span style="margin-top:auto;padding-top:16px;font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#8A90A8">${E(c.when)}</span>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:16px">
          ${(wall).map((w) => `
            <figure style="margin:0;grid-column:span ${E(w.cols)};grid-row:span ${E(w.rows)};position:relative;overflow:hidden;background:#131A2E">
              <img src="${E(w.img)}" alt="${E(w.caption)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" />
              <span style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,26,46,0) 45%,rgba(19,26,46,.85) 100%)"></span>
              <figcaption style="position:absolute;bottom:0;left:0;right:0;padding:20px;font-size:14.5px;line-height:1.5;font-weight:600;color:#fff">${E(w.caption)}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase;color:#fff">Find your way around</h2>
          <p style="margin-top:12px;font-size:16px;color:#8A93B6">Tap a room at 1260 Ocean Avenue.</p>
          <div style="display:grid;grid-template-columns:1.45fr .55fr;gap:20px;margin-top:26px;align-items:start">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
              ${(rooms).map((r) => `
                <button type="button" data-click="${H(r.onClick)}" style="text-align:left;padding:18px 16px;border:2px solid ${E(r.border)};background:${E(r.bg)};color:${E(r.color)};cursor:pointer;min-height:98px;display:flex;flex-direction:column;justify-content:space-between;grid-column:span ${E(r.span)}">
                  <span style="font:800 10px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;opacity:.7">${E(r.floor)}</span>
                  <span style="font-family:'Archivo',sans-serif;font-size:16px;font-weight:900;line-height:1.15;text-transform:uppercase">${E(r.name)}</span>
                </button>
              `).join('')}
            </div>
            <aside style="background:#4A6FD0;padding:30px;position:sticky;top:24px">
              <span style="font:800 11px/1 ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:#D9E2FA">${E(activeRoom.floor)}</span>
              <h3 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:26px;text-transform:uppercase;color:#fff;margin-top:12px;line-height:1.1">${E(activeRoom.name)}</h3>
              <p style="margin-top:14px;font-size:15.5px;line-height:1.65;color:#E3EAFB">${E(activeRoom.body)}</p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ ACADEMICS ============ -->
  ${(isAcademics) ? `
    <div data-screen-label="Academics">
      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:42% 1fr;background:#F4F2ED;min-height:460px">
          <div style="position:relative;overflow:hidden;min-height:340px"><img src="assets/class-kindergarten.jpg" alt="Kindergarten class" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>
          <div style="padding:clamp(32px,3.6vw,58px);display:flex;flex-direction:column;justify-content:center">
            <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#4A6FD0">Early childhood education</span>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(28px,3.2vw,44px);line-height:1.04;text-transform:uppercase;margin-top:14px">Pre-K &amp; Kindergarten: where little minds grow and faith takes root</h2>
            <p style="margin-top:18px;font-size:16.5px;line-height:1.7;color:#5A6180">A warm, Christ-centered classroom where curiosity is encouraged and a lifelong love of learning begins. The curriculum joins the educational philosophy and standards of the North American Division of Seventh-day Adventists with the New York State Kindergarten Learning Standards.</p>
            <p style="margin-top:14px;font-size:16.5px;line-height:1.7;color:#5A6180">Faith is at the heart of the day: prayer, Bible stories, worship and Christian songs, with kindness, honesty, respect and service woven through.</p>
            <a href="#apply" data-click="${H(goApply)}" style="margin-top:26px;align-self:flex-start;padding:16px 30px;background:#4A6FD0;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv7">Enroll your child</a>
          </div>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
          ${(eceAreas).map((a) => `
            <article style="background:#F4F2ED;display:flex;flex-direction:column">
              <div style="background:${E(a.bar)};padding:14px 24px;font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;color:${E(a.barText)}">${E(a.title)}</div>
              <p style="padding:24px;font-size:15.5px;line-height:1.65;color:#5A6180">${E(a.body)}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section style="padding:20px var(--gx) 0;display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div style="background:#131A2E;padding:clamp(30px,3.4vw,50px)">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#8CC63F">After-school program</span>
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase;color:#fff;margin-top:14px;line-height:1.04">Homework, test prep and robotics</h2>
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:#FFD24A;margin-top:16px">${E(afterSchool.when)}</p>
          <ul style="list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:12px">
            ${(afterItems).map((i) => `<li style="display:flex;gap:13px;align-items:flex-start;font-size:16.5px;line-height:1.5;color:#D6DBEC"><span style="flex:0 0 9px;height:9px;background:#8CC63F;margin-top:8px"></span>${E(i.label)}</li>`).join('')}
          </ul>
        </div>
        <div style="background:#4A6FD0;padding:clamp(30px,3.4vw,50px);display:flex;flex-direction:column;justify-content:center">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#FFD24A">Preparing for first grade</span>
          <p style="font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(20px,2.2vw,28px);line-height:1.3;color:#fff;margin-top:16px">We do more than teach children to read, write and count. We nurture character, inspire excellence, strengthen faith and help children discover their God-given potential.</p>
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#D9E2FA;margin-top:20px">Little hearts. Growing minds. Strong faith. Bright futures.</p>
        </div>
      </section>

      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,52px);display:grid;grid-template-columns:1fr 1fr;gap:40px">
          <div>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,38px);text-transform:uppercase">Accredited &amp; state-approved</h2>
            <p style="margin-top:16px;font-size:16.5px;line-height:1.7;color:#5A6180">${E(accreditation.text)}</p>
          </div>
          <div>
            <div style="display:flex;flex-wrap:wrap;gap:9px">
              ${(courses).map((c) => `<span style="padding:9px 15px;background:#fff;font-family:'Archivo',sans-serif;font-weight:800;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase">${E(c.label)}</span>`).join('')}
            </div>
            <p style="margin-top:18px;font-size:15px;line-height:1.65;color:#5A6180">${E(accreditation.regents)}</p>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ EVENTS ============ -->
  ${(isEvents) ? `
    <div data-screen-label="Events">
      ${(featured) ? `
      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:38% 1fr;background:#F4F2ED;min-height:340px">
          <div style="position:relative;overflow:hidden;min-height:300px"><img src="assets/bible.jpg" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>
          <div style="padding:clamp(30px,3.4vw,50px);display:flex;flex-direction:column;justify-content:center">
            <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:11.5px;letter-spacing:.15em;text-transform:uppercase;background:#8CC63F;color:#16240A;padding:8px 14px">Next highlight</span>
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:11.5px;letter-spacing:.15em;text-transform:uppercase;color:#5A6180">${E(featured.label)}</span>
            </div>
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,38px);text-transform:uppercase;margin-top:18px;line-height:1.08">${E(featured.title)}</h2>
            <p style="margin-top:16px;font-size:16px;line-height:1.7;color:#5A6180">${E(featured.body || 'Mark your calendar and join the Brooklyn SDA community.')}</p>
          </div>
        </div>
      </section>
      ` : ''}
      <section style="padding:20px var(--gx) 0">
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          ${(eventCats).map((c) => `
            <button type="button" data-click="${H(c.onClick)}" style="padding:14px 24px;border:2px solid #131A2E;background:${E(c.bg)};color:${E(c.color)};font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">${E(c.label)}</button>
          `).join('')}
        </div>
        <ul style="list-style:none;margin:24px 0 0;padding:0;display:flex;flex-direction:column;gap:14px">
          ${(visibleEvents).map((e) => `
            <li style="display:grid;grid-template-columns:112px 1fr auto;gap:26px;align-items:center;background:#F4F2ED;padding:24px 28px">
              <div style="text-align:center;background:${E(e.bar)};padding:14px 8px">
                <div style="font-family:'Archivo',sans-serif;font-size:22px;font-weight:900;line-height:1;color:${E(e.barText)}">${E(e.day)}</div>
                <div style="font-family:'Archivo',sans-serif;font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-top:6px;color:${E(e.barText)}">${E(e.month)}</div>
              </div>
              <div>
                <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:22px;text-transform:uppercase;line-height:1.18">${E(e.title)}</h3>
                <p style="margin-top:8px;font-size:15px;color:#5A6180;line-height:1.58">${E(e.body)}</p>
              </div>
              <span style="padding:10px 16px;background:#131A2E;font-family:'Archivo',sans-serif;font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;color:#8CC63F">${E(e.cat)}</span>
            </li>
          `).join('')}
        </ul>
      </section>
    </div>
  ` : ''}

  <!-- ============ NEWS ============ -->
  ${(isNews) ? `
    <section data-screen-label="News" style="padding:20px var(--gx) 0">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(326px,1fr));gap:20px">
        ${(news).map((n) => `
          <article style="background:#F4F2ED;display:flex;flex-direction:column">
            <div style="height:220px;overflow:hidden"><img src="${E(n.img)}" alt="" style="width:100%;height:100%;object-fit:cover" /></div>
            <div style="padding:28px;display:flex;flex-direction:column;flex:1">
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12px;letter-spacing:.13em;color:#4A6FD0">${E(n.date)}</span>
              <h2 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:22px;margin-top:12px;line-height:1.22">${E(n.title)}</h2>
              <p style="margin-top:12px;font-size:15.5px;line-height:1.62;color:#5A6180">${E(n.excerpt)}</p>
              <span style="margin-top:auto;padding-top:20px;font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:#4A6FD0">Read more →</span>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  ` : ''}

  <!-- ============ FUNDRAISERS ============ -->
  ${(isFundraisers) ? `
    <section data-screen-label="Fundraisers" style="padding:20px var(--gx) 0">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
        ${(campaigns).map((c) => `
          <article style="background:#F4F2ED;display:flex;flex-direction:column">
            <div style="height:200px;position:relative;overflow:hidden;background:#131A2E">
              <img src="${E(c.img)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:${E(c.fit)};object-position:center" />
              <span style="position:absolute;top:0;left:0;padding:9px 15px;background:${E(c.tagBg)};font-family:'Archivo',sans-serif;font-size:10.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:${E(c.tagColor)}">${E(c.tag)}</span>
            </div>
            <div style="padding:28px;display:flex;flex-direction:column;flex:1">
              <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:24px;text-transform:uppercase;line-height:1.12">${E(c.title)}</h2>
              <p style="margin-top:12px;font-size:15.5px;line-height:1.62;color:#5A6180">${E(c.body)}</p>
              <div style="margin-top:auto;padding-top:22px">
                <div style="height:12px;background:#DDD9CF;overflow:hidden"><div style="height:100%;width:${E(c.pct)};background:#4A6FD0"></div></div>
                <div style="display:flex;justify-content:space-between;margin-top:10px;font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#5A6180">
                  <span>${E(c.raised)} raised</span><span>${E(c.pct)}</span>
                </div>
                <a href="#give" data-click="${H(goGive)}" style="display:block;margin-top:20px;padding:15px 24px;background:#FFD24A;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:13px;letter-spacing:.1em;text-transform:uppercase;text-align:center" class="hv9">Support this</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
      <p style="margin-top:24px;font:600 13px/1.6 ui-monospace,monospace;color:#8A90A8;background:#F4F2ED;padding:20px 22px">Campaign copy, goals and raised totals are placeholders. The live sub-pages (/fruit-fundraiser/, /12-stones-fund/, /55-in-25/) still need their real content pulled in.</p>
    </section>
  ` : ''}

  <!-- ============ GIVE ============ -->
  ${(isGive) ? `
    <div data-screen-label="Give">
      <section style="padding:20px var(--gx) 0">
        <div style="display:grid;grid-template-columns:1fr 1fr;background:#131A2E;min-height:440px">
          <div style="padding:clamp(32px,3.6vw,56px);display:flex;flex-direction:column;justify-content:center">
            <img src="assets/12stones-logo.png" alt="12 Stones Fund" style="width:110px;height:110px;object-fit:contain" />
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(28px,3.2vw,44px);text-transform:uppercase;color:#fff;margin-top:22px;line-height:1.02">Building a legacy of faith</h2>
            <p style="margin-top:18px;font-size:17px;line-height:1.68;color:#A9B1CE;max-width:520px">Every child deserves an opportunity. For about $1 a day you can become a 12 Stones Fund partner, so a family’s finances never decide a child’s Christian education.</p>
            <div style="display:flex;gap:14px;margin-top:28px;flex-wrap:wrap">
              <a href="#contact" data-click="${H(goContact)}" style="padding:17px 32px;background:#FFD24A;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Become a monthly partner</a>
              <a href="#fundraisers" data-click="${H(goFundraisers)}" style="padding:17px 32px;border:2px solid rgba(255,255,255,.35);color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase" class="hv5">All fundraisers</a>
            </div>
          </div>
          <div style="position:relative;overflow:hidden;min-height:380px;display:flex;align-items:flex-end">
            <img src="assets/stones.jpg" alt="Stacked stones" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" />
            <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,17,32,.15),rgba(12,17,32,.9))"></div>
            <div style="position:relative;padding:clamp(28px,3.2vw,44px);width:100%">
              <div style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#8CC63F">Live campaign total</div>
              <div style="font-family:'Archivo',sans-serif;font-size:clamp(42px,5vw,64px);font-weight:900;color:#fff;line-height:1;margin-top:12px"><span data-raised>${E(hudRaised)}</span></div>
              <div style="font-size:13px;font-weight:700;color:#A9B1CE;margin-top:8px">of ${E(hudGoal)} goal · ${E(hudDonors)} donors · ${E(hudPctLabel)} funded</div>
              <div style="margin-top:20px;height:18px;background:rgba(255,255,255,.16);overflow:hidden">
                <div data-bar style="height:100%;width:${E(hudPct)};background:linear-gradient(90deg,#5FA01E,#8CC63F);transition:width 1.5s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden"><span style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);width:40%;animation:bsda-sheen 3.4s ease-in-out infinite"></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style="padding:20px var(--gx) 0;display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div style="background:#4A6FD0;padding:clamp(30px,3.4vw,50px)">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#FFD24A">Inspired by Scripture</span>
          <p style="font-family:'Archivo',sans-serif;font-weight:800;font-size:clamp(20px,2.3vw,30px);line-height:1.32;color:#fff;margin-top:16px">“These stones shall be for a memorial unto the children of Israel for ever.”</p>
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:#FFD24A;margin-top:16px">Joshua 4:7</p>
          <p style="margin-top:20px;font-size:16px;line-height:1.7;color:#E3EAFB">In Joshua 4, God told Israel to take twelve stones from the Jordan and build a memorial so future generations would remember how He had led them. Each gift is a stone of faith. Each donor is a builder of hope.</p>
        </div>
        <div style="background:#FFD24A;padding:clamp(30px,3.4vw,50px)">
          <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:#453712">Just $30 a month</span>
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);line-height:1.08;color:#2E2306;margin-top:14px">54 people giving $30 a month = $19,440 a year.</p>
          <ul style="list-style:none;margin:20px 0 0;padding:0;display:flex;flex-direction:column;gap:11px">
            ${(stonesFacts).map((f) => `<li style="display:flex;gap:12px;align-items:flex-start;font-size:15.5px;line-height:1.5;color:#2E2306"><span style="flex:0 0 8px;height:8px;background:#131A2E;margin-top:8px"></span>${E(f.label)}</li>`).join('')}
          </ul>
        </div>
      </section>
      <section style="padding:20px var(--gx) 0">
        <div style="background:#F4F2ED;padding:clamp(30px,3.4vw,50px)">
          <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase">Excellence worth investing in</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px">
            ${(results).slice(0, 3).map((r) => `
              <div style="background:#fff;padding:24px;border-left:5px solid #4A6FD0">
                <div style="font-family:'Archivo',sans-serif;font-weight:900;font-size:44px;line-height:1;color:#4A6FD0">${E(r.value)}</div>
                <div style="font-family:'Archivo',sans-serif;font-weight:800;font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;margin-top:10px">${E(r.label)}</div>
                <div style="font-size:14px;color:#5A6180;margin-top:5px">${E(r.sub)}</div>
              </div>
            `).join('')}
          </div>
          <p style="margin-top:20px;font-size:16px;line-height:1.7;color:#5A6180">Students take high-school-level Regents exams while still in middle school, with programs in STEM, robotics, technology, music, character development and Christian leadership.</p>
        </div>
      </section>
      <section style="padding:20px var(--gx) 0">
        <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(26px,3vw,40px);text-transform:uppercase;border-bottom:3px solid #131A2E;padding-bottom:18px">Ways to give</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px">
          ${(giving).map((g) => `
            <article style="background:#F4F2ED;display:flex;flex-direction:column;min-height:250px">
              <div style="background:${E(g.bar)};padding:20px 26px;font-family:'Archivo',sans-serif;font-size:38px;font-weight:900;line-height:1;color:${E(g.barText)}">${E(g.amount)}</div>
              <div style="padding:26px">
                <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:22px;text-transform:uppercase;line-height:1.15">${E(g.title)}</h3>
                <p style="margin-top:12px;font-size:15.5px;line-height:1.62;color:#5A6180">${E(g.body)}</p>
              </div>
            </article>
          `).join('')}
        </div>
        <p style="margin-top:22px;font:600 13px/1.6 ui-monospace,monospace;color:#8A90A8;background:#F4F2ED;padding:20px 22px">Giving options and copy come from the school’s 12 Stones Fund document. The campaign goal, raised total and donor count are still placeholders, and the buttons link to the contact page until a donation processor is connected.</p>
      </section>
      <section style="padding:20px var(--gx) 0">
        <div style="background:#131A2E;padding:clamp(32px,3.6vw,54px);text-align:center">
          <p style="font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(22px,2.6vw,34px);text-transform:uppercase;color:#fff;line-height:1.12">One school. One mission. Twelve stones. Countless futures.</p>
          <div style="display:flex;gap:14px;justify-content:center;margin-top:26px;flex-wrap:wrap">
            <a href="#contact" data-click="${H(goContact)}" style="padding:17px 30px;background:#FFD24A;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Become a monthly partner</a>
            <a href="#contact" data-click="${H(goContact)}" style="padding:17px 30px;background:#8CC63F;color:#0C1120;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv2">Make a one-time donation</a>
            <a href="#contact" data-click="${H(goContact)}" style="padding:17px 30px;border:2px solid rgba(255,255,255,.35);color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:13.5px;letter-spacing:.1em;text-transform:uppercase" class="hv5">Church or corporate sponsor</a>
          </div>
        </div>
      </section>
    </div>
  ` : ''}

  <!-- ============ YEARBOOKS ============ -->
  ${(isYearbooks) ? `
    <section data-screen-label="Yearbooks" style="padding:20px var(--gx) 0;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px">
      ${(yearbooks).map((y) => `
        <article style="background:#F4F2ED">
          <div style="height:280px;position:relative;overflow:hidden;background:#131A2E"><img src="${E(y.img)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>
          <div style="padding:28px">
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:24px;text-transform:uppercase">${E(y.title)}</h2>
            <p style="margin-top:10px;font-size:15px;color:#5A6180;line-height:1.6">${E(y.note)}</p>
            <span style="display:inline-block;margin-top:20px;padding:14px 26px;background:#131A2E;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase">View yearbook</span>
          </div>
        </article>
      `).join('')}
    </section>
  ` : ''}

  <!-- ============ STORE ============ -->
  ${(isStore) ? `
    <section data-screen-label="Store" style="padding:20px var(--gx) 0">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(248px,1fr));gap:20px">
        ${(products).map((p) => `
          <article style="background:#F4F2ED">
            <div style="height:214px;background:#DDD9CF;display:flex;align-items:center;justify-content:center;position:relative">
              <span style="font:700 11px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#8C8878">Product shot</span>
              <span style="position:absolute;top:0;left:0;padding:8px 14px;background:${E(p.tagBg)};font-family:'Archivo',sans-serif;font-size:10.5px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:${E(p.tagColor)}">${E(p.cat)}</span>
            </div>
            <div style="padding:22px;display:flex;justify-content:space-between;align-items:center;gap:12px">
              <h3 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:18px;text-transform:uppercase;line-height:1.2">${E(p.name)}</h3>
              <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:18px;white-space:nowrap">${E(p.price)}</span>
            </div>
          </article>
        `).join('')}
      </div>
      <p style="margin-top:24px;font:600 13px/1.6 ui-monospace,monospace;color:#8A90A8;background:#F4F2ED;padding:20px 22px">Product photography and confirmed pricing to be supplied by the school office.</p>
    </section>
  ` : ''}

  <!-- ============ PORTALS ============ -->
  ${(isPortals) ? `
    <section data-screen-label="Portals" style="padding:20px var(--gx) 0;display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      ${(portals).map((p) => `
        <article style="background:#F4F2ED;display:flex;flex-direction:column;min-height:260px">
          <div style="background:${E(p.bar)};padding:14px 26px;font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:${E(p.barText)}">Coming soon</div>
          <div style="padding:28px;display:flex;flex-direction:column;flex:1">
            <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:28px;text-transform:uppercase;line-height:1.08">${E(p.title)}</h2>
            <p style="margin-top:12px;font-size:15.5px;line-height:1.62;color:#5A6180">${E(p.body)}</p>
            <span style="margin-top:auto;padding:13px 22px;border:2px solid #CFCBC1;color:#8A90A8;font-family:'Archivo',sans-serif;font-weight:900;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;align-self:flex-start">Unavailable</span>
          </div>
        </article>
      `).join('')}
    </section>
  ` : ''}

  <!-- ============ CONTACT ============ -->
  ${(isContact) ? `
    <section data-screen-label="Contact" style="padding:20px var(--gx) 0;display:grid;grid-template-columns:.85fr 1.15fr;gap:20px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:20px">
        <div style="background:#FFD24A;padding:30px">
          <div style="font-family:'Archivo',sans-serif;font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#453712">Visit</div>
          <div style="font-family:'Archivo',sans-serif;font-size:22px;font-weight:900;margin-top:10px;line-height:1.3;color:#2E2306">1260 Ocean Ave<br />Brooklyn, NY 11230-7401</div>
        </div>
        <div style="background:#131A2E;padding:30px">
          <div style="font-family:'Archivo',sans-serif;font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#8CC63F">Call &amp; email</div>
          <a href="tel:+17188591313" style="display:block;font-family:'Archivo',sans-serif;font-size:27px;font-weight:900;margin-top:10px;color:#fff" class="hv1">(718) 859-1313</a>
          <a href="mailto:admissions@bsda.school" style="display:block;margin-top:10px;font-weight:600;color:#A9B1CE" class="hv3">admissions@bsda.school</a>
          <a href="mailto:principal@bsda.school" style="display:block;margin-top:4px;font-weight:600;color:#A9B1CE" class="hv3">principal@bsda.school</a>
        </div>
        <div style="height:220px;position:relative;overflow:hidden"><img src="assets/building-front.jpg" alt="Brooklyn SDA School building" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>
      </div>
      <form data-submit="${H(onContact)}" style="background:#F4F2ED;padding:clamp(28px,3.4vw,46px)">
        <h2 style="font-family:'Archivo',sans-serif;font-weight:900;font-size:30px;text-transform:uppercase">Send us a message</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:26px">
          <label style="display:flex;flex-direction:column;gap:8px"><span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">Your name *</span><input type="text" required style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px" /></label>
          <label style="display:flex;flex-direction:column;gap:8px"><span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">Your email *</span><input type="email" required style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px" /></label>
          <label style="display:flex;flex-direction:column;gap:8px;grid-column:1 / -1"><span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">Subject</span><input type="text" style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px" /></label>
          <label style="display:flex;flex-direction:column;gap:8px;grid-column:1 / -1"><span style="font-family:'Archivo',sans-serif;font-size:11.5px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#5A6180">Your message</span><textarea rows="7" style="padding:15px 16px;border:2px solid #CFCBC1;background:#fff;font-size:16px;resize:vertical"></textarea></label>
        </div>
        <button type="submit" style="margin-top:26px;padding:17px 36px;border:none;background:#4A6FD0;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:14px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">Send</button>
        ${(contactSent) ? `<p style="margin-top:16px;font-weight:800;color:#3E8E20">Thanks — we'll be in touch soon.</p>` : ''}
      </form>
    </section>
  ` : ''}

  <!-- ============ ACCREDITATION + FOOTER ============ -->
  <div style="padding:44px var(--gx) 0">
    <div style="background:#F4F2ED;padding:28px 34px;display:flex;align-items:center;gap:32px;flex-wrap:wrap;justify-content:center">
      <span style="font-family:'Archivo',sans-serif;font-size:14px;font-weight:900;letter-spacing:.14em;text-transform:uppercase">An accredited institution</span>
      <img src="assets/accred-aaa.jpg" alt="Adventist Accrediting Association" style="height:52px;width:auto;object-fit:contain" />
      <img src="assets/accred-ncpsa.jpg" alt="NCPSA Accredited" style="height:52px;width:auto;object-fit:contain" />
    </div>
  </div>

  <footer style="padding:20px var(--gx) 44px">
    <div style="background:#0C1120;padding:clamp(36px,4vw,60px) clamp(30px,3.4vw,52px)">
      <div style="display:grid;grid-template-columns:1.25fr 1fr 1fr 1fr;gap:40px">
        <div>
          <div style="display:flex;align-items:center;gap:14px">
            <img src="assets/logo-white.svg" alt="" style="width:52px;height:52px" />
            <span style="font-family:'Archivo',sans-serif;font-weight:900;font-size:19px;line-height:1.25;color:#fff">Brooklyn Seventh-day<br />Adventist School</span>
          </div>
          <p style="margin-top:20px;font-size:15px;line-height:1.68;color:#8A93B6;max-width:310px">Discover the joy of learning. Pre-K thru 8th Grade in Brooklyn, NY — building character and equipping minds for a brighter future.</p>
          <div style="display:flex;flex-direction:column;gap:7px;margin-top:20px">
            <a href="tel:+17188591313" style="color:#FFD24A;font-family:'Archivo',sans-serif;font-weight:900;font-size:18px" class="hv3">(718) 859-1313</a>
            <a href="mailto:admissions@bsda.school" style="color:#8A93B6;font-size:15px" class="hv3">admissions@bsda.school</a>
            <a href="https://www.facebook.com/BrooklynSDAElementary" target="_blank" rel="noopener" style="color:#8A93B6;font-size:15px" class="hv3">Facebook</a>
          </div>
        </div>
        ${(footerCols).map((col) => `
          <div>
            <h3 style="font-family:'Archivo',sans-serif;font-size:12px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:#8CC63F">${E(col.title)}</h3>
            <ul style="list-style:none;margin:18px 0 0;padding:0;display:flex;flex-direction:column;gap:11px">
              ${(col.items).map((l) => `
                <li style="padding-left:${E(l.indent)}"><a href="${E(l.href)}" data-click="${H(l.onClick)}" style="color:${E(l.color)};font-size:${E(l.size)};font-weight:500" class="hv12">${E(l.label)}</a></li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13.5px;color:#5F678C">
        <span>© 2026 Brooklyn Seventh-day Adventist School. Operated by the Greater New York Conference of Seventh-day Adventists.</span>
        <span>1260 Ocean Ave · Brooklyn, NY 11230-7401</span>
      </div>
    </div>
  </footer>
</div>`;
  };
})();
