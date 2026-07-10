/* ═══════════════════════════════════════════════════════════════
   The Bitties — Mentoring site
   Type:  Instrument Serif (display, w/ italic) · Work Sans (UI/body)
   Color: cream page · deep brown ink · terracotta accent (tweakable)
   ═══════════════════════════════════════════════════════════════ */

:root {
  --cream: #f4ede2;
  --cream-2: #ebe2d2;
  --ink: #1f150c;
  --ink-2: #4a3a2e;
  --muted: #9a7855;
  --accent: #b87544;          /* terracotta — overridden by Tweaks */
  --accent-hi: #c98554;
  --line: rgba(31,21,12,0.12);
  --serif: 'Instrument Serif', Georgia, serif;
  --sans: 'Work Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--cream); color: var(--ink); font-family: var(--sans); font-weight: 400; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
em { font-style: italic; }

/* ───────── Header / Nav ───────── */
.top-nav {
  position: sticky; top: 0; z-index: 20;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 48px;
  background: rgba(244,237,226,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.top-nav .wordmark {
  font-family: var(--serif); font-style: italic; font-size: 30px;
  color: var(--ink); letter-spacing: -0.5px; line-height: 1; white-space: nowrap; flex-shrink: 0;
}
.top-nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 34px; align-items: center; }
.top-nav a { font-family: var(--sans); font-size: 14px; font-weight: 500; color: var(--ink); letter-spacing: 0.2px; transition: color .15s; }
.top-nav a:hover { color: var(--accent); }
.top-nav .nav-cta {
  border: 1px solid var(--ink); padding: 8px 18px; border-radius: 999px;
  font-size: 13px; font-weight: 500; transition: background .15s, color .15s;
}
.top-nav .nav-cta:hover { background: var(--ink); color: var(--cream); }

/* ───────── Hero — D0 full-bleed ───────── */
.hero { position: relative; height: clamp(560px, calc(100vh - 74px), 780px); overflow: hidden; background: #1a1410; }
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('assets/hero.jpg'); background-size: cover; background-position: center 70%;
  filter: saturate(0.82) brightness(0.95);
}
.hero-scrim {
  position: absolute; inset: 0;
  background:
    linear-gradient(rgba(244,237,226,0.12), rgba(244,237,226,0.12)),
    linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%),
    radial-gradient(ellipse 80% 55% at 22% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 75%);
}
.hero-content {
  position: relative; z-index: 2; height: 100%;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 clamp(32px, 5vw, 72px) clamp(40px, 6vw, 64px);
  color: #fff; max-width: 1500px; margin: 0 auto;
}
.hero-greeting {
  font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 3px;
  text-transform: uppercase; color: #fff; opacity: 0.92; margin-bottom: 18px; text-shadow: 0 1px 10px rgba(0,0,0,0.5);
}
.hero h1 {
  font-family: var(--serif); font-weight: 400; font-size: clamp(32px, 3.8vw, 48px);
  line-height: 1.05; letter-spacing: -0.6px; margin: 0; max-width: 440px; color: #fff;
  text-shadow: 0 2px 28px rgba(0,0,0,0.55); text-wrap: pretty;
}
.hero p.sub {
  font-family: var(--sans); font-weight: 400; font-size: 15px; line-height: 1.6;
  color: rgba(255,255,255,0.92); margin: 18px 0 0; max-width: 440px; text-shadow: 0 1px 12px rgba(0,0,0,0.55);
}
.hero-buttons { margin-top: 30px; display: flex; gap: 12px; flex-wrap: wrap; }
.btn-pill {
  display: inline-block; padding: 14px 26px; border-radius: 999px;
  font-family: var(--sans); font-size: 14px; font-weight: 600; letter-spacing: 0.2px; cursor: pointer;
  transition: transform .15s, background .15s, color .15s, border-color .15s; border: 1px solid transparent;
}
.btn-filled { background: #fff; color: var(--ink); }
.btn-filled:hover { background: var(--accent); color: #fff; }
.btn-ghost { background: transparent; border-color: rgba(255,255,255,0.75); color: #fff; }
.btn-ghost:hover { background: rgba(255,255,255,0.12); }

/* ───────── Cred bar ───────── */
.cred-bar {
  background: var(--cream-2); border-bottom: 1px solid var(--line);
  padding: 20px 48px; display: flex; align-items: center; justify-content: center; gap: 28px; flex-wrap: wrap;
}
.cred-item { font-family: var(--sans); font-size: 13px; color: var(--ink-2); letter-spacing: 0.2px; }
.cred-item strong { color: var(--ink); font-weight: 600; }
.cred-divider { width: 4px; height: 4px; border-radius: 50%; background: var(--muted); opacity: 0.5; }

/* ───────── Generic section wrappers ───────── */
section { padding: 116px 48px; }
.section-label { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.section-title { font-family: var(--serif); font-weight: 400; font-size: clamp(36px, 4.4vw, 56px); line-height: 1.05; letter-spacing: -0.8px; margin: 0 0 20px; color: var(--ink); text-wrap: balance; }
.section-lede { font-family: var(--sans); font-size: 17px; line-height: 1.6; color: var(--ink-2); max-width: 560px; margin: 0; }

/* ───────── How it works — 3 steps ───────── */
.how { max-width: 1240px; margin: 0 auto; }
.how-intro { text-align: center; margin-bottom: 72px; }
.how-intro .section-lede { margin: 0 auto; }
.how-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.how-step { position: relative; padding-top: 34px; border-top: 2px solid var(--accent); }
.how-step .step-n { font-family: var(--serif); font-style: italic; font-size: 15px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; }
.how-step h3 { font-family: var(--serif); font-weight: 400; font-size: 30px; margin: 0 0 12px; letter-spacing: -0.3px; color: var(--ink); }
.how-step p { font-size: 15px; line-height: 1.65; color: var(--ink-2); margin: 0; }

/* ───────── Packages & pricing ───────── */
.pricing-band { background: var(--cream-2); }
.pricing { max-width: 1300px; margin: 0 auto; }
.pricing-head { text-align: center; margin-bottom: 64px; }
.pricing-head .section-lede { margin: 0 auto; }

/* Cards layout (default) */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.price-card {
  background: var(--cream); border: 1px solid var(--line); border-radius: 4px;
  padding: 36px 32px 34px; display: flex; flex-direction: column; transition: transform .2s, box-shadow .2s;
}
.price-card:hover { transform: translateY(-4px); box-shadow: 0 24px 50px -24px rgba(31,21,12,0.35); }
.price-card.featured { background: var(--ink); color: var(--cream); border-color: var(--ink); }
.price-card.featured .pc-name,
.price-card.featured .pc-price,
.price-card.featured .pc-feat li { color: var(--cream); }
.price-card.featured .pc-desc { color: rgba(244,237,226,0.72); }
.price-card.featured .pc-feat li::before { color: var(--accent-hi); }
.pc-tag {
  align-self: flex-start; font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: var(--accent); border: 1px solid var(--accent); border-radius: 999px;
  padding: 4px 12px; margin-bottom: 22px; white-space: nowrap;
}
.price-card.featured .pc-tag { color: #fff; background: var(--accent); border-color: var(--accent); }
.pc-name { font-family: var(--serif); font-weight: 400; font-size: 27px; letter-spacing: -0.3px; margin: 0 0 6px; color: var(--ink); }
.pc-price { font-family: var(--serif); font-size: 40px; line-height: 1; margin: 14px 0 4px; color: var(--ink); }
.pc-price .per { font-family: var(--sans); font-size: 14px; font-weight: 400; color: var(--muted); letter-spacing: 0.2px; }
.price-card.featured .pc-price .per { color: rgba(244,237,226,0.6); }
.pc-desc { font-size: 14px; line-height: 1.6; color: var(--ink-2); margin: 14px 0 22px; }
.pc-feat { list-style: none; margin: 0 0 28px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.pc-feat li { position: relative; padding-left: 22px; font-size: 14px; line-height: 1.5; color: var(--ink-2); }
.pc-feat li::before { content: '—'; position: absolute; left: 0; color: var(--accent); font-weight: 600; }
.pc-cta {
  margin-top: auto; text-align: center; padding: 12px 20px; border-radius: 999px;
  font-family: var(--sans); font-size: 14px; font-weight: 600; cursor: pointer;
  border: 1px solid var(--ink); color: var(--ink); background: transparent; transition: background .15s, color .15s;
}
.pc-cta:hover { background: var(--ink); color: var(--cream); }
.price-card.featured .pc-cta { background: var(--accent); border-color: var(--accent); color: #fff; }
.price-card.featured .pc-cta:hover { background: var(--accent-hi); }
.pricing-foot { text-align: center; margin-top: 40px; font-size: 14px; color: var(--muted); }
.pricing-foot a { color: var(--accent); font-weight: 600; }

/* List layout (Tweak option) */
[data-pricing="list"] .pricing-grid { grid-template-columns: 1fr; max-width: 860px; margin: 0 auto; gap: 0; border-top: 1px solid var(--line); }
[data-pricing="list"] .price-card {
  flex-direction: row; align-items: center; gap: 32px; border: none; border-bottom: 1px solid var(--line);
  border-radius: 0; padding: 34px 8px; background: transparent;
}
[data-pricing="list"] .price-card:hover { transform: none; box-shadow: none; background: rgba(255,255,255,0.4); }
[data-pricing="list"] .price-card.featured { background: transparent; color: inherit; }
[data-pricing="list"] .price-card.featured .pc-name,
[data-pricing="list"] .price-card.featured .pc-price { color: var(--ink); }
[data-pricing="list"] .price-card.featured .pc-desc { color: var(--ink-2); }
[data-pricing="list"] .pc-tag { margin-bottom: 10px; }
[data-pricing="list"] .pc-lead { flex: 1 1 auto; min-width: 0; }
[data-pricing="list"] .pc-name { margin-top: 2px; }
[data-pricing="list"] .pc-feat { display: none; }
[data-pricing="list"] .pc-price { flex: 0 0 auto; margin: 0; text-align: right; }
[data-pricing="list"] .pc-cta { flex: 0 0 auto; margin: 0; white-space: nowrap; }
[data-pricing="list"] .price-card.featured .pc-cta { background: var(--accent); border-color: var(--accent); color: #fff; }
.pc-lead { }
[data-pricing="cards"] .pc-lead { display: contents; }

/* ───────── What we'll cover — 6 principles ───────── */
.cover { max-width: 1280px; margin: 0 auto; }
.cover-intro { text-align: center; margin-bottom: 64px; }
.cover-intro .section-lede { margin: 0 auto; }
.cover-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.cover-card { background: var(--cream); padding: 38px 34px 42px; transition: background .2s; }
.cover-card:hover { background: #faf5ec; }
.cover-card .num { font-family: var(--serif); font-style: italic; font-size: 42px; color: var(--accent); line-height: 1; margin-bottom: 24px; }
.cover-card h3 { font-family: var(--serif); font-weight: 400; font-size: 28px; margin: 0 0 12px; color: var(--ink); letter-spacing: -0.3px; }
.cover-card p { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin: 0; }

/* ───────── Free guide band (primary CTA) ───────── */
.guide-band { background: var(--ink); color: var(--cream); padding: 116px 48px; }
.guide-band .section-label { color: var(--accent-hi); }
.guide-band .section-title { color: #f4ede2; }
.guide { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: center; }
.guide p.lede { font-family: var(--sans); font-size: 17px; line-height: 1.65; color: rgba(244,237,226,0.78); max-width: 480px; margin: 0 0 32px; }
.email-form { display: flex; gap: 8px; max-width: 480px; border-bottom: 1px solid rgba(244,237,226,0.3); padding-bottom: 4px; }
.email-form input { flex: 1; background: transparent; border: none; padding: 14px 4px; color: #fff; font-family: var(--sans); font-size: 16px; outline: none; }
.email-form input::placeholder { color: rgba(244,237,226,0.5); }
.email-form button { background: var(--accent); border: none; color: #fff; padding: 12px 28px; border-radius: 999px; font-family: var(--sans); font-size: 14px; font-weight: 600; cursor: pointer; transition: background .15s; }
.email-form button:hover { background: var(--accent-hi); }
.guide-note { font-size: 13px; color: rgba(244,237,226,0.5); margin: 16px 0 0; }
.guide-preview { display: flex; justify-content: center; }
.guide-mockup { background: var(--cream); color: var(--ink); padding: 44px 40px; width: 100%; max-width: 380px; aspect-ratio: 1 / 1.32; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); transform: rotate(-1.5deg); transition: transform .3s; display: flex; flex-direction: column; }
.guide-mockup:hover { transform: rotate(0deg); }
.guide-mockup-eyebrow { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 18px; }
.guide-mockup-title { font-family: var(--serif); font-size: 30px; line-height: 1.04; margin-bottom: 12px; letter-spacing: -0.3px; }
.guide-mockup-sub { font-size: 12px; color: var(--muted); letter-spacing: 0.2px; margin-bottom: 28px; }
.guide-mockup-steps { display: flex; flex-direction: column; gap: 10px; margin-top: auto; }
.guide-mockup-step { display: flex; align-items: baseline; gap: 12px; font-size: 14px; color: var(--ink-2); padding-bottom: 8px; border-bottom: 1px dotted rgba(31,21,12,0.18); }
.guide-mockup-step .n { font-family: var(--serif); font-style: italic; color: var(--accent); font-size: 18px; width: 18px; flex: 0 0 auto; }

/* ───────── Gallery (social proof) ───────── */
.gallery { max-width: 1320px; margin: 0 auto; }
.gallery-header { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 48px; margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid var(--line); }
.gallery-note { font-family: var(--sans); font-size: 13px; color: var(--muted); letter-spacing: 0.3px; text-align: right; }
.gallery-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
.gallery-item { position: relative; overflow: hidden; }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s ease; }
.gallery-item:hover img { transform: scale(1.03); }
.gallery-item .label { margin-top: 12px; font-family: var(--sans); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
.gallery-item:nth-child(1) { grid-column: span 4; aspect-ratio: 3/4; }
.gallery-item:nth-child(2) { grid-column: span 8; aspect-ratio: 3/2; }
.gallery-item:nth-child(3) { grid-column: span 8; aspect-ratio: 3/2; }
.gallery-item:nth-child(4) { grid-column: span 4; aspect-ratio: 3/4; }
.gallery-item:nth-child(5) { grid-column: span 6; aspect-ratio: 3/2; }
.gallery-item:nth-child(6) { grid-column: span 6; aspect-ratio: 3/2; }
.gallery-item:nth-child(7) { grid-column: span 6; aspect-ratio: 3/2; }
.gallery-item:nth-child(8) { grid-column: span 6; aspect-ratio: 3/2; }

/* ───────── About ───────── */
.about-band { background: var(--cream-2); }
.about { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 80px; align-items: center; }
.about-portrait { position: relative; }
.about-portrait .frame { position: relative; z-index: 1; aspect-ratio: 1; overflow: hidden; border-radius: 50%; background: var(--ink); }
.about-portrait .frame img { width: 100%; height: 100%; object-fit: cover; }
/* Light-blue disc peeking out behind the portrait */
.about-portrait .accent { position: absolute; width: 110%; height: 110%; background: #cfe0ea; border-radius: 50%; top: -7%; left: -9%; z-index: 0; pointer-events: none; }
.about-text h2 { font-family: var(--serif); font-weight: 400; font-size: clamp(36px, 4.2vw, 54px); line-height: 1.06; margin: 0 0 28px; letter-spacing: -0.6px; color: var(--ink); }
.about-text p { font-family: var(--sans); font-size: 16px; line-height: 1.7; color: var(--ink-2); margin: 0 0 18px; max-width: 580px; }
.about-stats { display: flex; gap: 48px; margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--line); }
.stat .number { font-family: var(--serif); font-style: italic; font-size: 42px; color: var(--accent); line-height: 1; }
.stat .label { font-family: var(--sans); font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--muted); margin-top: 8px; }

/* ───────── Journey · from here to here ───────── */
.journey-band { background: var(--cream); }
.journey { max-width: 1120px; margin: 0 auto; }
.journey-head { text-align: center; margin-bottom: 60px; }
.journey-head .section-lede { margin: 0 auto; }
.journey-row { display: flex; align-items: flex-start; justify-content: center; gap: 20px; }
.journey-figure { display: flex; flex-direction: column; flex: 0 0 auto; margin: 0; }
.journey-figure.then { width: 287px; }
.journey-figure.now { width: 300px; }
.journey-figure image-slot { display: block; width: 100%; height: 440px; box-shadow: 0 24px 50px -28px rgba(31,21,12,0.4); }
.journey-cap { margin-top: 18px; text-align: center; width: 100%; }
.journey-cap .yr { display: block; font-family: var(--serif); font-style: italic; font-size: 30px; color: var(--accent); line-height: 1; margin-bottom: 8px; }
.journey-cap .txt { font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
.journey-arrow { display: flex; align-items: center; justify-content: center; color: var(--accent); flex: 0 0 auto; align-self: center; margin-top: -34px; }
.journey-arrow svg { width: 56px; height: 56px; }
.journey-note { text-align: center; margin-top: 44px; font-family: var(--serif); font-style: italic; font-size: clamp(20px, 2.2vw, 26px); color: var(--ink); line-height: 1.4; max-width: 620px; margin-left: auto; margin-right: auto; }

/* ───────── Manifesto ───────── */
.manifesto-band { background: var(--ink); color: var(--cream); }
.manifesto { max-width: 1000px; margin: 0 auto; text-align: center; }
.manifesto .section-label { color: var(--accent-hi); }
.manifesto .lead-line { font-family: var(--serif); font-size: clamp(28px, 3.4vw, 44px); line-height: 1.14; letter-spacing: -0.4px; color: var(--cream); margin: 0 auto 40px; max-width: 760px; text-wrap: balance; }
.manifesto .lead-line em { font-style: italic; color: var(--accent-hi); }
.manifesto-diagram { display: flex; align-items: center; justify-content: center; gap: clamp(40px, 8vw, 96px); margin: 0 auto 40px; padding: 8px 0; }
.manifesto-diagram figure { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 18px; }
.manifesto-diagram svg { width: 92px; height: 64px; color: var(--cream); opacity: 0.9; }
.manifesto-diagram figcaption { font-family: var(--sans); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
.manifesto .kicker { font-family: var(--serif); font-style: italic; font-size: clamp(30px, 4.2vw, 56px); line-height: 1.05; letter-spacing: -0.6px; color: var(--cream); margin: 8px auto 0; max-width: 720px; text-wrap: balance; }
.manifesto .kicker em { color: var(--accent-hi); font-style: italic; }

/* ───────── Story card (signature format) ───────── */
.storycard-band { background: var(--cream); }
.storycard-wrap { max-width: 1160px; margin: 0 auto; }
.storycard-head { text-align: center; margin-bottom: 56px; }
.storycard-head .section-lede { margin: 0 auto; }
.storycard { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: clamp(32px, 5vw, 72px); align-items: center; background: var(--cream-2); border: 1px solid var(--line); }
.storycard-photo { position: relative; align-self: stretch; min-height: 100%; overflow: hidden; background: var(--ink); }
.storycard-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block; }
.storycard-eyebrow { position: absolute; top: 20px; left: 20px; font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; background: rgba(31,21,12,0.55); backdrop-filter: blur(4px); padding: 7px 13px; border-radius: 999px; }
.storycard-body { padding: clamp(36px, 4vw, 60px) clamp(32px, 4vw, 64px) clamp(36px, 4vw, 60px) 0; }
.storycard-body .label { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.storycard-body h3 { font-family: var(--serif); font-weight: 400; font-size: clamp(34px, 3.8vw, 52px); line-height: 1.03; letter-spacing: -0.6px; margin: 0 0 24px; color: var(--ink); text-wrap: balance; }
.storycard-body .story { font-family: var(--serif); font-style: italic; font-size: clamp(18px, 1.5vw, 22px); line-height: 1.5; color: var(--ink-2); margin: 0 0 28px; text-wrap: pretty; }
.storycard-body .story em { font-style: normal; color: var(--ink); }
.storycard-body .take { font-family: var(--sans); font-size: 14px; line-height: 1.6; color: var(--muted); margin: 0; padding-top: 22px; border-top: 1px solid var(--line); max-width: 480px; }
.storycard-body .take strong { color: var(--ink); font-weight: 600; }

@media (max-width: 880px) {
  .manifesto-diagram { gap: 32px; }
  .manifesto-diagram svg { width: 66px; height: 48px; }
  .storycard { grid-template-columns: 1fr; }
  .storycard-photo { aspect-ratio: 4/3; min-height: 0; }
  .storycard-photo img { object-position: center 22%; }
  .storycard-body { padding: 32px 28px 36px; }
}

/* ───────── Contact / book ───────── */
.contact { max-width: 900px; margin: 0 auto; text-align: center; }
.contact .section-lede { margin: 0 auto 40px; }
.contact-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-dark { background: var(--ink); color: var(--cream); }
.btn-dark:hover { background: var(--accent); color: #fff; }
.btn-outline { background: transparent; border-color: var(--ink); color: var(--ink); }
.btn-outline:hover { background: var(--ink); color: var(--cream); }
.contact-meta { margin-top: 44px; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; font-size: 14px; color: var(--ink-2); }
.contact-meta strong { color: var(--ink); font-weight: 600; }

/* ───────── Footer ───────── */
footer { background: var(--ink); color: rgba(244,237,226,0.7); padding: 56px 48px; display: flex; justify-content: space-between; align-items: center; font-family: var(--sans); font-size: 13px; flex-wrap: wrap; gap: 20px; }
footer .wordmark { font-family: var(--serif); font-style: italic; font-size: 28px; color: var(--cream); letter-spacing: -0.3px; white-space: nowrap; }
footer .links { display: flex; gap: 28px; }
footer .links a:hover { color: var(--accent); }

/* ───────── Responsive ───────── */
@media (max-width: 980px) {
  .how-steps { grid-template-columns: 1fr; gap: 36px; }
  .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .cover-grid { grid-template-columns: 1fr 1fr; }
  .guide { grid-template-columns: 1fr; gap: 48px; }
  .guide-mockup { transform: rotate(0deg); max-width: 320px; }
  [data-pricing="list"] .price-card { flex-direction: column; align-items: flex-start; gap: 14px; }
  [data-pricing="list"] .pc-price { text-align: left; }
  [data-pricing="list"] .pc-cta { width: 100%; }
}
@media (max-width: 880px) {
  .top-nav { padding: 14px 20px; }
  .top-nav .wordmark { font-size: 26px; }
  .top-nav ul { gap: 16px; }
  .top-nav ul li:nth-child(1), .top-nav ul li:nth-child(2), .top-nav ul li:nth-child(3) { display: none; }

  .hero { display: flex; flex-direction: column; height: auto; min-height: 0; max-height: none; background: var(--cream); }
  .hero-bg { position: relative; inset: auto; width: 100%; flex: 0 0 auto; height: 58vh; min-height: 380px; max-height: 480px; background-position: center 30%; filter: none; }
  .hero-scrim { display: none; }
  .hero-content { position: relative; z-index: auto; height: auto; padding: 40px 24px 48px; max-width: 100%; background: var(--cream); color: var(--ink); }
  .hero-greeting { color: var(--accent); opacity: 1; text-shadow: none; font-size: 11px; letter-spacing: 2.5px; margin-bottom: 14px; }
  .hero h1 { color: var(--ink); text-shadow: none; font-size: clamp(30px, 7.5vw, 40px); line-height: 1.05; max-width: 100%; }
  .hero p.sub { color: var(--ink-2); text-shadow: none; font-size: 15px; max-width: 100%; margin-top: 16px; }
  .hero-buttons { margin-top: 24px; gap: 10px; }
  .btn-pill { padding: 12px 22px; font-size: 13px; }
  .hero .btn-filled { background: var(--ink); color: var(--cream); }
  .hero .btn-filled:hover { background: var(--accent); color: #fff; }
  .hero .btn-ghost { background: transparent; border-color: var(--ink); color: var(--ink); }
  .hero .btn-ghost:hover { background: var(--ink); color: var(--cream); }

  .cred-bar { padding: 16px 20px; gap: 18px; }
  .cred-item { font-size: 12px; }

  section { padding: 72px 24px; }
  .guide-band { padding: 72px 24px; }
  .how-intro, .pricing-head, .cover-intro { margin-bottom: 48px; }
  .cover-grid { grid-template-columns: 1fr; }
  .cover-card { padding: 32px 28px; }

  .gallery-header { grid-template-columns: 1fr; gap: 16px; }
  .gallery-note { text-align: left; }
  .gallery-grid { grid-template-columns: 1fr; gap: 18px; }
  .gallery-item { grid-column: 1 / -1 !important; aspect-ratio: 3/2 !important; }

  .journey-row { flex-direction: column; align-items: center; gap: 24px; }
  .journey-figure image-slot { height: auto; }
  .journey-figure.then image-slot { width: 70vw; max-width: 300px; aspect-ratio: 460 / 706; }
  .journey-figure.now image-slot { width: 74vw; max-width: 320px; aspect-ratio: 904 / 1325; }
  .journey-arrow { transform: rotate(90deg); margin-top: 0; }
  .journey-arrow svg { width: 40px; height: 40px; }

  .about { grid-template-columns: 1fr; gap: 40px; text-align: left; }
  .about-portrait { max-width: 280px; }
  .about-text h2 br { display: none; }
  .about-text p { max-width: 100%; }
  .about-stats { gap: 28px; flex-wrap: wrap; }

  footer { flex-direction: column; gap: 20px; text-align: center; padding: 40px 24px; }
}
@media (max-width: 420px) {
  .hero-bg { height: 52vh; min-height: 320px; }
  .hero h1 { font-size: clamp(26px, 8vw, 34px); }
  .hero-content { padding: 32px 20px 40px; }
  section { padding: 56px 20px; }
  .guide-band { padding: 56px 20px; }
  .section-title { font-size: clamp(30px, 8vw, 40px); }
  .cred-bar { gap: 12px; padding: 14px 16px; }
  .cred-divider { display: none; }
}
