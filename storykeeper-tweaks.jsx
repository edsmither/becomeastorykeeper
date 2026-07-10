// mentoring-tweaks.jsx — Tweaks panel that drives the plain-HTML page via
// CSS variables + data attributes. Mounts only the panel; the page itself is HTML.

const ACCENTS = {
  Terracotta: ['#b87544', '#c98554'],
  Sage:       ['#7a8a5f', '#93a377'],
  'Dusty Blue': ['#6f8592', '#88a0ad'],
  Clay:       ['#b05f4e', '#c47a68'],
};

const HEADLINES = {
  'You are the storykeeper': 'You are the <em>storykeeper.</em><br>Let me teach you to <em>see</em> like one.',
  'Already the keeper': 'You’re already your family’s <em>keeper</em> of the story.<br>Let me hand you the craft.',
  'The story between us': 'Every photo holds <em>the story between us.</em><br>Here’s how to keep it.',
};

const MT_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "Terracotta",
  "pricing": "cards",
  "headline": "You are the storykeeper"
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const [base, hi] = ACCENTS[t.accent] || ACCENTS.Terracotta;
  const root = document.documentElement;
  root.style.setProperty('--accent', base);
  root.style.setProperty('--accent-hi', hi);
  document.body.setAttribute('data-pricing', t.pricing);
  const h = document.getElementById('hero-headline');
  if (h) h.innerHTML = HEADLINES[t.headline] || HEADLINES['You are the storykeeper'];
}

function MentoringTweaks() {
  const [t, setTweak] = useTweaks(MT_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Brand color" />
      <TweakColor
        label="Accent"
        value={(ACCENTS[t.accent] || ACCENTS.Terracotta)[0]}
        options={Object.values(ACCENTS).map((p) => p[0])}
        onChange={(v) => {
          const name = Object.keys(ACCENTS).find((k) => ACCENTS[k][0] === v) || 'Terracotta';
          setTweak('accent', name);
        }}
      />

      <TweakSection label="Pricing layout" />
      <TweakRadio
        label="Style"
        value={t.pricing}
        options={['cards', 'list']}
        onChange={(v) => setTweak('pricing', v)}
      />

      <TweakSection label="Hero headline" />
      <TweakSelect
        label="Copy"
        value={t.headline}
        options={Object.keys(HEADLINES)}
        onChange={(v) => setTweak('headline', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<MentoringTweaks />);
