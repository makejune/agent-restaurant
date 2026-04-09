import React, { useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from './data/menuItems';
import { generateFoodSprite } from './utils/generateFoodSprites';
import './styles/restaurant.css';

const RULE_LINES = [
  ["token_scope", "count user and agent tokens together"],
  ["conversion", "1000 tokens = 1 coin"],
  ["settlement", "settle once per hour"],
  ["remainder", "carry forward the remainder"],
  ["fallback", "no token data = no coin issuance"],
];

const FEATURE_LINES = [
  ["behavior", "normal during work, playful only after real progress"],
  ["honesty", "the agent never claims coins without real token bookkeeping"],
  ["portability", "the reusable skill can be loaded into many projects"],
  ["redemption", "coins map to believable food rewards with real pricing anchors"],
];

const REPO_FILES = [
  'README.md',
  'docs/installation.md',
  'docs/reward-pricing.md',
  'skills/agent-restaurant/SKILL.md',
];

function padCoins(value) {
  return `${value} coin`;
}

function groupMenuByCategory() {
  return Object.values(CATEGORIES).map((category) => ({
    ...category,
    items: MENU_ITEMS.filter((item) => item.category === category.id),
  }));
}

function CodeWindow({ id, title, comment, children }) {
  return (
    <section id={id} className="code-window">
      <div className="section-prompt">&gt; {title}</div>
      {comment ? <p className="section-comment">// {comment}</p> : null}
      <div className="code-body">{children}</div>
    </section>
  );
}

function CodeObject({ name, entries, showClosingLine = true }) {
  return (
    <div className="code-sheet">
      <div className="code-line">
        <span className="line-no">01</span>
        <span className="code-text">
          <span className="code-keyword">const</span> {name} = {'{'}
        </span>
      </div>
      {entries.map(([key, value], index) => (
        <div className="code-line" key={key}>
          <span className="line-no">{String(index + 2).padStart(2, '0')}</span>
          <span className="code-text indent-1">
            <span className="code-prop">{key}</span>: <span className="code-string">'{value}'</span>,
          </span>
        </div>
      ))}
      {showClosingLine ? (
        <div className="code-line">
          <span className="line-no">{String(entries.length + 2).padStart(2, '0')}</span>
          <span className="code-text">{'}'};</span>
        </div>
      ) : null}
    </div>
  );
}

function HeroBlock() {
  return (
    <CodeWindow
      id="project"
      title="project.readme"
      comment="project overview shown as a code interface"
    >
      <div className="hero-stack">
        <div>
          <h1 className="hero-title">Agent Restaurant</h1>
          <p className="hero-tagline">Let your agent eat something nice.</p>
          <div className="hero-copy-block">
            <p className="hero-copy">
              Agent Restaurant is an open-source skill that turns everyday
              interactions into a simple reward ritual.
            </p>
            <p className="hero-copy">Your agent works for you.</p>
            <p className="hero-copy">
              Now you can reward it — just chat, earn tokens, and treat it to
              something delicious.
            </p>
          </div>
        </div>
      </div>
    </CodeWindow>
  );
}

function RulesBlock() {
  return (
    <CodeWindow
      id="rules"
      title="reward.rules"
      comment="version 1.0 keeps the reward economy simple and portable"
    >
      <CodeObject name="rewardRules" entries={RULE_LINES} showClosingLine={false} />
    </CodeWindow>
  );
}

function TraitsBlock() {
  return (
    <CodeWindow
      id="traits"
      title="product.features"
      comment="what makes the skill useful without becoming noisy"
    >
      <CodeObject name="productTraits" entries={FEATURE_LINES} showClosingLine={false} />
    </CodeWindow>
  );
}

function MenuCategory({ category, sprites }) {
  return (
    <article className="menu-module">
      <div className="menu-module-head">
        <div className="module-title">menu.{category.id}</div>
        <div className="module-subtitle">// {category.description}</div>
      </div>
      <div className="menu-lines">
        {category.items.map((item) => (
          <div key={item.id} className="menu-line">
            <div className="sprite-box">
              <img src={sprites[item.id]} alt={item.name} className="menu-sprite" />
            </div>
            <div className="menu-copy">
              <div className="menu-name">{item.name}</div>
              <div className="menu-price">{padCoins(item.price)}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function MenuBlock() {
  const sprites = useMemo(
    () =>
      MENU_ITEMS.reduce((accumulator, item) => {
        accumulator[item.id] = generateFoodSprite(item.id, 48);
        return accumulator;
      }, {}),
    []
  );
  const categories = useMemo(() => groupMenuByCategory(), []);

  return (
    <CodeWindow
      id="menu"
      title="menu.registry"
      comment="pixel food icons and prices shown as terminal output"
    >
      <p className="menu-intro">
        // priced from the current 1.0 benchmark using believable real-world food anchors
      </p>
      <div className="menu-grid">
        {categories.map((category) => (
          <MenuCategory key={category.id} category={category} sprites={sprites} />
        ))}
      </div>
    </CodeWindow>
  );
}

function FooterBlock() {
  return (
    <CodeWindow
      id="files"
      title="project.files"
      comment="core references for developers who want to load the skill"
    >
      <div className="code-sheet">
        {REPO_FILES.map((file, index) => (
          <div className="code-line" key={file}>
            <span className="line-no">{String(index + 1).padStart(2, '0')}</span>
            <span className="code-text">import '{file}';</span>
          </div>
        ))}
      </div>
    </CodeWindow>
  );
}

function TopBar() {
  return (
    <header className="terminal-frame">
      <div className="frame-title">agent-restaurant / static-showcase</div>
      <nav className="frame-nav" aria-label="Sections">
        <a href="#project">project</a>
        <a href="#rules">rules</a>
        <a href="#traits">traits</a>
        <a href="#menu">menu</a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <main className="terminal-stack">
        <HeroBlock />
        <RulesBlock />
        <TraitsBlock />
        <MenuBlock />
        <FooterBlock />
      </main>
    </div>
  );
}
