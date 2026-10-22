import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Menu, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import './style.css';

const hunters = [
  { name: 'NERO', tag: 'THE DEVIL BREAKER', color: '#5f9fc1', number: '01', copy: 'Young, brash, and ready to fight. With a demonic arm and a sword built for style, Nero brings his own kind of justice to the battlefield.' },
  { name: 'DANTE', tag: 'THE LEGENDARY DEVIL HUNTER', color: '#c54438', number: '02', copy: 'The legendary devil hunter is back. Switch fighting styles on the fly, master an arsenal of weapons, and make every battle your own.' },
  { name: 'V', tag: 'THE MYSTERIOUS POET', color: '#a58ac4', number: '03', copy: 'A new face with an unusual way of fighting. V commands three demonic familiars and closes in for the final blow himself.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [trailer, setTrailer] = useState(false);
  const hunter = hunters[active];
  const next = () => setActive((active + 1) % hunters.length);
  const prev = () => setActive((active + hunters.length - 1) % hunters.length);

  return <main>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Devil May Cry home"><span className="brand-mark">D</span><span>DEVIL MAY CRY<small>OFFICIAL GAME SITE</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#story" onClick={() => setMenuOpen(false)}>THE STORY</a><a href="#hunters" onClick={() => setMenuOpen(false)}>CHARACTERS</a><a href="#features" onClick={() => setMenuOpen(false)}>THE GAME</a>
        <a className="nav-buy" href="#buy" onClick={() => setMenuOpen(false)}>GET THE GAME <ArrowRight size={15}/></a>
      </nav>
    </header>

    <section className="hero" id="home">
      <div className="hero-grit"/><div className="hero-orb"/><div className="hero-shape shape-one"/><div className="hero-shape shape-two"/>
      <div className="hero-vertical">CAPCOM PRESENTS <i/> THE HUNT BEGINS</div>
      <div className="hero-copy"><p className="eyebrow"><span/> THE LEGENDARY ACTION SERIES RETURNS</p><h1>DEVIL<br/><em>MAY</em> CRY <span>5</span></h1><p className="hero-description">The ultimate devil hunter is back.<br/>Hell is rising. Make it stylish.</p>
        <div className="hero-actions"><a className="button button-red" href="#buy">ENTER THE HUNT <ArrowRight size={17}/></a><button className="button button-ghost" onClick={() => setTrailer(true)}><Play size={14} fill="currentColor"/> WATCH TRAILER</button></div>
        <p className="platforms">AVAILABLE NOW <b>—</b> PLAYSTATION · XBOX · PC</p>
      </div>
      <div className="hero-person"><div className="person-halo"/><div className="person-coat"/><div className="person-head"/><div className="person-sword"/><span className="hero-person-label">THE DEVIL HUNTERS <b>— 01 / 03</b></span></div>
      <a className="scroll-cue" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-index">01 <i/> 04</div>
    </section>

    <section className="story section" id="story"><div className="section-kicker">01 / THE STORY</div><div className="story-main"><div><p className="eyebrow red-text">A NEW THREAT RISES</p><h2>HELL HAS<br/>A <em>NEW</em> KING.</h2></div><div className="story-copy"><p>A demonic invasion begins with the seeds of a “demon tree” taking root in Red Grave City. As the city falls, three hunters — Nero, Dante, and the mysterious V — face a tide of demons unlike anything they’ve seen.</p><p>The fate of humanity hangs in the balance. The only way forward is through.</p><a className="text-link" href="#hunters">MEET THE HUNTERS <ArrowRight size={16}/></a></div></div><div className="story-stats"><div><strong>3</strong><span>PLAYABLE HUNTERS</span></div><div><strong>1</strong><span>HELL OF A GOOD TIME</span></div><div><strong>S</strong><span>STYLE IS EVERYTHING</span></div><div className="story-stamp">RED<br/>GRAVE<br/><b>IS FALLING</b></div></div></section>

    <section className="hunters" id="hunters"><div className="hunter-backdrop" style={{'--hunter': hunter.color}}/><div className="section-kicker">02 / THE HUNTERS</div><div className="hunter-content"><div className="hunter-art"><div className="hunter-ring"/><div className="hunter-silhouette"/><span className="hunter-numeral">{hunter.number}</span><span className="hunter-art-label">RED GRAVE CITY <i/> 09:41 PM</span></div><div className="hunter-info"><p className="eyebrow">THE DEVIL HUNTERS</p><h2>{hunter.name}</h2><p className="hunter-tag">{hunter.tag}</p><p className="hunter-copy">{hunter.copy}</p><div className="hunter-controls"><button onClick={prev} aria-label="Previous character"><ChevronLeft/></button><div className="hunter-dots">{hunters.map((h, i) => <button key={h.name} className={active === i ? 'active' : ''} onClick={() => setActive(i)} aria-label={`Show ${h.name}`}/>)}</div><button onClick={next} aria-label="Next character"><ChevronRight/></button></div></div></div><div className="hunter-bottom"><span>CHOOSE YOUR FIGHTER</span><span>01 — 03</span></div></section>

    <section className="features section" id="features"><div className="section-kicker">03 / THE EXPERIENCE</div><div className="feature-heading"><div><p className="eyebrow red-text">NO STYLE? NO SURVIVAL.</p><h2>FIGHT<br/><em>YOUR WAY.</em></h2></div><p>Every battle is a chance to show off. Find your rhythm, master your weapons, and push your style rank to the limit.</p></div><div className="feature-grid"><article className="feature-card feature-large"><span className="feature-number">01</span><div className="feature-art swords">╱╲</div><div><h3>STYLE ON DEMAND</h3><p>Chain attacks, dodge with precision, and keep the combo alive. The flashier the fight, the higher the rank.</p></div></article><article className="feature-card"><span className="feature-number">02</span><div className="feature-art devil">✳</div><div><h3>ARSENAL OF MAYHEM</h3><p>Build your own kind of chaos with a wild range of weapons and abilities.</p></div></article><article className="feature-card"><span className="feature-number">03</span><div className="feature-art city">▤</div><div><h3>INTO THE RED</h3><p>Explore a beautifully brutal city overrun by the underworld.</p></div></article></div></section>

    <section className="buy" id="buy"><div className="buy-glow"/><div className="buy-inner"><p className="eyebrow"><span/> YOUR LEGEND STARTS HERE</p><h2>MAKE<br/>HELL <em>YOURS.</em></h2><p className="buy-copy">The hunt is on. Answer the call and bring the style.</p><div className="buy-actions"><a href="https://www.devilmaycry.com/5/" className="button button-red">GET DEVIL MAY CRY 5 <ArrowRight size={17}/></a><span>AVAILABLE ON<br/><b>PLAYSTATION · XBOX · PC</b></span></div></div><div className="buy-mark">DMC<br/><span>5</span></div></section>

    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">D</span><span>DEVIL MAY CRY<small>OFFICIAL GAME SITE</small></span></a><span>© CAPCOM CO., LTD. ALL RIGHTS RESERVED.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    {trailer && <div className="modal" role="dialog" aria-modal="true" aria-label="Trailer"><button className="modal-close" onClick={() => setTrailer(false)} aria-label="Close trailer"><X/></button><div className="modal-card"><div className="modal-play"><Play fill="currentColor"/></div><p>DEVIL MAY CRY 5</p><span>THE OFFICIAL TRAILER</span><small>Trailer preview</small></div></div>}
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
