import { useEffect, useState } from 'react'
import { about, education, featured, profile, projects, skills, stats } from './data.js'

const asset = (path) => import.meta.env.BASE_URL + path

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Icon({ name, size = 20 }) {
  const paths = {
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor" stroke="none" />
    ),
    linkedin: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" fill="currentColor" stroke="none" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: <path d="M7 17 17 7M8 7h9v9" />,
    copy: (
      <>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h8" />
      </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    lock: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </>
    ),
    grad: (
      <>
        <path d="m2 9 10-5 10 5-10 5z" />
        <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">SV</span>
          <span className="logo-text">Sadisha Viraj</span>
        </a>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
        <nav className={open ? 'links open' : 'links'}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn btn-small" href={`mailto:${profile.email}`}>
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status">
            <span className="pulse" />
            {profile.status}
          </p>
          <h1>
            Hi, I'm {profile.name.split(' ')[0]}.
            <br />
            <span className="grad">I build real-time apps.</span>
          </h1>
          <p className="hero-sub">
            <strong>{profile.role}</strong> · {profile.study}
          </p>
          <p className="hero-lead">{profile.tagline}</p>
          <div className="hero-ctas">
            <a className="btn" href="#work">
              See my work
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> Get in touch
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img src={asset(profile.photo)} alt={profile.name} width="400" height="400" />
          </div>
          <div className="float-card fc-1">
            <img src={asset('img/docroad-icon.png')} alt="" />
            <div>
              <b>DocRoad</b>
              <span>Flutter · Node.js · Firebase</span>
            </div>
          </div>
          <div className="float-card fc-2">
            <img src={asset('img/prochart-logo.svg')} alt="" />
            <div>
              <b>ProChart</b>
              <span>React · TypeScript · Azure</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <SectionHead kicker="About me" title="Student by day, builder all the time." />
        <div className="about-body reveal">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {education.map((e) => (
            <div className="edu" key={e.place}>
              <span className="edu-ic">
                <Icon name="grad" size={22} />
              </span>
              <div>
                <b>{e.title}</b>
                <span>{e.place}</span>
                <p>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DocRoadVisual() {
  return (
    <div className="visual visual-docroad" aria-hidden="true">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="260" fill="#1A1F24" />
        <path d="M300 0 C 290 80, 350 140, 400 180 L400 0Z" fill="#14324A" />
        <g stroke="#2B333B" strokeWidth="9" fill="none" strokeLinecap="round">
          <path d="M-10 60 L 420 95" />
          <path d="M-10 200 L 420 170" />
          <path d="M90 -10 L 130 270" />
          <path d="M260 -10 L 235 270" />
        </g>
        <path d="M-10 130 C 120 115, 260 150, 420 120" stroke="#3A444E" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path className="route" d="M110 215 C 150 175, 190 150, 245 128" stroke="#FF8C00" strokeWidth="4" strokeDasharray="9 8" fill="none" />
        <circle cx="245" cy="128" r="20" fill="rgba(16,185,129,.25)" className="ping" />
        <circle cx="245" cy="128" r="9" fill="#10B981" stroke="#fff" strokeWidth="3" />
        <circle cx="110" cy="215" r="10" fill="#FF8C00" stroke="#fff" strokeWidth="3" />
        <circle cx="70" cy="70" r="8" fill="#FF8C00" stroke="#fff" strokeWidth="2.5" />
        <circle cx="340" cy="215" r="8" fill="#FF8C00" stroke="#fff" strokeWidth="2.5" />
        <circle cx="185" cy="45" r="7" fill="#10B981" stroke="#fff" strokeWidth="2.5" />
      </svg>
      <div className="dr-card">
        <img src={asset('img/docroad-icon.png')} alt="" />
        <div>
          <b>Mechanic on the way</b>
          <span>Live tracking · updates every 5 s</span>
        </div>
        <span className="eta">4 min</span>
      </div>
    </div>
  )
}

function Featured() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead kicker="Featured work" title="Two products I built this year.">
          Real-time data, real problems, and the full stack behind them.
        </SectionHead>
        <div className="featured">
          {featured.map((p, i) => (
            <article key={p.id} className={`feature reveal ${i % 2 ? 'flip' : ''}`} style={{ '--accent': p.accent }}>
              <div className="feature-media">
                {p.image ? (
                  <div className="visual">
                    <img src={asset(p.image)} alt={`${p.name} screenshot`} />
                  </div>
                ) : (
                  <DocRoadVisual />
                )}
              </div>
              <div className="feature-body">
                <div className="feature-head">
                  <img src={asset(p.icon)} alt="" className="feature-icon" />
                  <div>
                    <h3>{p.name}</h3>
                    <p className="feature-kind">{p.kind}</p>
                  </div>
                </div>
                <p className="feature-context">{p.context}</p>
                <p className="feature-summary">{p.summary}</p>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="feature-links">
                  {p.links.map((l) => (
                    <a key={l.href} className="btn btn-accent" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <Icon name="arrow" size={16} />
                    </a>
                  ))}
                  {p.note && (
                    <span className="private">
                      <Icon name="lock" size={16} /> {p.note}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section section-tight">
      <div className="container">
        <SectionHead kicker="More projects" title="Other things I've built." />
        <div className="cards">
          {projects.map((p) => (
            <a key={p.name} className="card reveal" href={p.href} target="_blank" rel="noreferrer">
              <div className="card-top">
                <h3>{p.name}</h3>
                <Icon name="arrow" size={18} />
              </div>
              <p>{p.desc}</p>
              <div className="tags tags-small">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead kicker="Skills" title="Tools I use to ship." />
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill reveal">
              <h3>{s.group}</h3>
              <div className="tags">
                {s.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact reveal">
          <p className="kicker">Contact</p>
          <h2>Let's build something together.</h2>
          <p className="section-lead">
            I'm looking for internship opportunities in software engineering. The fastest way to reach me is email.
          </p>
          <div className="contact-email">
            <a className="btn" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> {profile.email}
            </a>
            <button className="btn btn-ghost" onClick={copy}>
              <Icon name={copied ? 'check' : 'copy'} size={18} /> {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React and Vite</span>
        </div>
      </footer>
    </>
  )
}
