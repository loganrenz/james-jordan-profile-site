"use client";

import { useState } from "react";

const experiences = [
  {
    date: "Aug 2024 — Present",
    role: "Clubhouse Manager",
    organization: "Balcones Country Club",
    label: "Current",
    text: "Member-facing clubhouse leadership and practical operating communication within the club’s management team.",
  },
  {
    date: "Aug 2022 — Oct 2024",
    role: "Digital Marketing Specialist",
    organization: "Palmaz Vineyards",
    label: "Marketing",
    text: "Brand communication inside an organization known for carefully managed private visits and high-touch presentation.",
  },
  {
    date: "Mar — Nov 2022",
    role: "Radio Manager, 2022 PGA Championship",
    organization: "PGA of America",
    label: "Major event",
    text: "A schedule-sensitive communications assignment in an environment where coordination and precision matter.",
  },
  {
    date: "Apr 2020 — Apr 2021",
    role: "Manager",
    organization: "The UPS Store",
    label: "Operations",
    text: "Frontline management experience involving staffing, customer issues, deadlines, transactions, and daily operational detail.",
  },
  {
    date: "2020 — 2023",
    role: "Communication Studies",
    organization: "Arizona State University",
    label: "Education",
    text: "The public listing associates him with communication studies. This profile does not claim a completed degree because the indexed résumé did not establish graduation.",
  },
];

const strengths = [
  ["01", "Operational steadiness", "Retail management builds the habit of resolving staffing, customer, cash, deadline, and process problems without making the room feel chaotic."],
  ["02", "Precision under pressure", "A radio-management role at a PGA Championship points toward real-time coordination, exact timing, and communication across multiple teams."],
  ["03", "Guest-journey awareness", "Work inside a premium winery brand can sharpen sensitivity to presentation, pacing, tone, and the details that shape how a private experience feels."],
  ["04", "Visible ownership", "Communication studies, marketing, event communications, and member-facing updates all reward the same behavior: explain clearly, own the issue, and follow through."],
];

const socialPosts = [
  {
    platform: "Instagram / Balcones Country Club",
    date: "Public club reel",
    title: "A clubhouse built around the moment",
    text: "The club’s public reel names James Jordan in a clubhouse reopening update, with a made-to-order crêpe station called out as part of the return.",
    href: "https://www.instagram.com/reel/DHv62-hMxLP/",
    action: "Open the reel",
  },
  {
    platform: "Balcones Country Club",
    date: "Meet the team",
    title: "The person behind the welcome",
    text: "The club’s staff directory identifies James as Clubhouse Manager and places his work inside the daily member experience.",
    href: "https://www.balconescountryclub.com/home-page/personnel/james-jordan",
    action: "View the profile",
  },
  {
    platform: "Instagram / Balcones Country Club",
    date: "Club social feed",
    title: "A visible rhythm of club life",
    text: "Follow the official feed for the public-facing rhythm around events, food, golf, and the community James helps welcome.",
    href: "https://www.instagram.com/balconescountryclub/",
    action: "Follow the feed",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="James Jordan profile home">
          <span className="brand-mark">JJ</span>
          <span><strong>James Jordan</strong><small>Professional profile</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span><i /><i /><i />
        </button>
        <nav id="primary-nav" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {["Profile", "Experience", "Social", "Strengths", "Perspective", "Sources"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Clubhouse leadership, rethought</p>
            <h1>James<br /><em>Jordan</em></h1>
            <p className="hero-role">Clubhouse Manager <b>/</b> Balcones Country Club</p>
            <p className="hero-summary">A member-facing operator whose background connects retail management, major-event communications, premium-brand marketing, and day-to-day clubhouse leadership.</p>
            <div className="hero-actions"><a className="button button-primary" href="#profile">Read the profile <span>↗</span></a><a className="text-link" href="#experience">View career path <span>↘</span></a></div>
            <p className="verification-note"><span className="check">✓</span> Current title confirmed by Balcones Country Club; interpretive analysis is labeled separately.</p>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-card">
              <div className="portrait-topline"><span>PROFILE / 2026</span><span className="status"><i /> Current</span></div>
              <div className="portrait-art portrait-photo"><img src="/james-jordan.jpg" alt="James Jordan on the grounds of Balcones Country Club" /><div className="photo-wash" /><span className="photo-label">Balcones / Austin</span></div>
              <div className="portrait-meta"><div><small>Current focus</small><strong>Operations +<br />member experience</strong></div><b>01</b></div>
            </div>
            <p className="portrait-caption">Photograph published by Balcones Country Club. <a href="https://www.balconescountryclub.com/home-page/personnel/james-jordan" target="_blank" rel="noreferrer">View source ↗</a></p>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">AUSTIN <span>•</span> TX</div>
      </section>

      <section className="section profile-section" id="profile">
        <div className="shell">
          <div className="section-label">01 / Who James is</div>
          <div className="profile-grid"><h2>A central clubhouse operator<span>—</span><br />not the club’s overall general manager.</h2><div className="profile-copy"><p>Balcones Country Club lists James Jordan as its <strong>Clubhouse Manager</strong>. Its management directory separately lists Patrick McGraw as <strong>General Manager</strong>. That distinction places James in an important day-to-day, member-facing role while keeping the reporting structure clear.</p><p>His route into club leadership is less traditional than a decades-long country-club résumé. It is also more coherent than it first appears: each role added a practical layer in operations, communication, event pressure, or polished guest experience.</p></div></div>
          <div className="fact-strip"><div><b>2024</b><span>Joined Balcones as<br />Clubhouse Manager</span></div><div><b>4</b><span>Distinct operating environments<br />in his public résumé</span></div><div><b>1</b><span>Consistent thread:<br />clear, visible ownership</span></div></div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell experience-layout"><div className="experience-intro"><div className="section-label">02 / Publicly listed experience</div><h2>A compact career path with unusually useful overlap.</h2><p>The dates and titles below reflect the public résumé information supplied for this profile. Overlapping dates are retained rather than “cleaned up.”</p><a className="text-link" href="#sources">How the sourcing is handled <span>↘</span></a></div><ol className="timeline" aria-label="James Jordan career timeline">{experiences.map((item, index) => <li key={item.role}><div className="timeline-index">0{index + 1}</div><div className="timeline-card"><div className="timeline-top"><span>{item.date}</span><b className={index === 0 ? "current" : ""}>{item.label}</b></div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.text}</p></div></li>)}</ol></div>
      </section>

      <section className="section social-section" id="social">
        <div className="shell">
          <div className="social-heading"><div><div className="section-label">03 / In the public feed</div><h2>Small signals<br /><em>of clubhouse life.</em></h2></div><p>Selected public links from Balcones Country Club’s website and social presence. The cards summarize each source; they are not quoted endorsements.</p></div>
          <div className="social-grid">{socialPosts.map((post, index) => <article className="social-card" key={post.title}><div className={`social-card-image social-card-image-${index + 1}`}>{index === 0 ? <img src="/james-jordan.jpg" alt="James Jordan at Balcones Country Club" /> : <span>{index === 1 ? "JJ" : "BC"}</span>}<b>{post.platform.split(" /")[0]}</b></div><div className="social-card-body"><div className="social-card-meta"><span>{post.date}</span><span>↗</span></div><h3>{post.title}</h3><p>{post.text}</p><a className="text-link" href={post.href} target="_blank" rel="noreferrer">{post.action} <span>↗</span></a></div></article>)}</div>
        </div>
      </section>

      <section className="section strengths-section" id="strengths"><div className="shell"><div className="strengths-heading"><div><div className="section-label">04 / Why he may be effective</div><h2>Transferable skills<br /><em>that compound.</em></h2></div><p>This section is analysis—not a claim about duties that have not been publicly documented.</p></div><div className="strength-grid">{strengths.map(([number, title, text]) => <article key={number}><span className="strength-index">{number}</span><div className="strength-icon">✦</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="perspective-section" id="perspective"><div className="shell perspective-inner"><div className="section-label">04 / The through-line</div><blockquote>“The common thread is not a job title. It is the ability to make a complex experience feel clear, cared for, and under control.”</blockquote><p>That is the most useful way to read the résumé: not as a straight line, but as a stack of adjacent experiences that now meet in one visible place.</p></div></section>

      <section className="section sources-section" id="sources"><div className="shell sources-grid"><div><div className="section-label">05 / Sources &amp; boundaries</div><h2>Read the evidence<br /><em>at the right scale.</em></h2></div><div className="sources-copy"><p>This profile distinguishes between publicly listed facts and interpretive analysis. It does not infer private information, unlisted responsibilities, compensation, or a completed degree.</p><div className="source-row"><span>01</span><div><b>Balcones Country Club</b><small>Management directory / current title</small></div></div><div className="source-row"><span>02</span><div><b>Public professional résumé listing</b><small>Role titles, dates, and education association</small></div></div><div className="source-row"><span>03</span><div><b>Profile synthesis</b><small>Clearly labeled interpretation of transferable skills</small></div></div></div></div></section>

      <footer className="site-footer"><div className="shell"><a className="brand" href="#top"><span className="brand-mark">JJ</span><span><strong>James Jordan</strong><small>Professional profile</small></span></a><span className="footer-note">A considered profile / Austin, Texas</span><a href="#top" className="back-top">Back to top ↑</a></div></footer>
    </main>
  );
}
