import { useState, useEffect, useRef } from 'react'
import logoSvg from '@/imports/AI Racing League.svg'
import ibmLogo from '@/imports/ibmpos_black.jpg'
import speedingFormula from '@/imports/Speeding_formula-1.png'
import programmerPilot from '@/imports/programmer_pilot.jpeg'
import rearview from '@/imports/rearview.jpeg'
import trophyIcon from '@/imports/trophy.svg'
import viewIcon from '@/imports/view.svg'
import aiSkillsIcon from '@/imports/AI-enabled-EDT.svg'
import collaborateIcon from '@/imports/collaborate.svg'
import engineeringIcon from '@/imports/ibm--engineering-lifecycle-mgmt.svg'
import helpDeskIcon from '@/imports/help-desk.svg'
import cupPhoto from '@/imports/cup.jpeg'
import ibmLogoSvg from '@/imports/IBM_logo.svg'

const NAV_LINKS = [
  { label: 'Competition', href: '#competition' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Join', href: '#why-join' },
  { label: 'Register', href: '#register' },
  { label: 'Resources', href: '#resources' },
]

const STEPS = [
  {
    n: '01',
    title: 'Register Your Team',
    body: 'Each team member registers individually stating the team. Each team can have max. 3 students aged 18+ — high school or university, all disciplines welcome.',
  },
  {
    n: '02',
    title: 'Learn How to Use IBM Bob',
    body: 'Take the free IBM course on Bob & AI tools, then dive into TORCS to learn the basics of controlling your formula car.',
  },
  {
    n: '03',
    title: 'Build Your AI Driver',
    body: 'Write a Python agent in IBM Bob IDE that reads TORCS sensor data and outputs steering, throttle, and braking. Document your journey in a short video.',
  },
  {
    n: '04',
    title: 'Submit',
    body: 'Upload your Python agent, your car livery design and video presentation before the deadline to lock in your spot in the competition.',
  },
]

const BENEFITS = [
  {
    icon: '⚡',
    title: 'Real Engineering Challenge',
    body: 'Work with live telemetry — track edges, opponent positions, wheel slip, gear state — and build a control loop that actually has to perform under pressure.',
  },
  {
    icon: '🧠',
    title: 'AI & ML Skills, Hands-On',
    body: 'Apply PID control, imitation learning, model-predictive control, or reinforcement learning to a problem you can see and measure — not just a slide deck.',
  },
  {
    icon: '📡',
    title: 'Real Team Collaboration',
    body: 'Work in a team to plan strategy, split engineering work, and present your results together — the same dynamics you\'ll need in any AI role.',
  },
  {
    icon: '🏆',
    title: 'Prizes & Recognition',
    body: 'Top teams win prizes, IBM certifications, and a trophy built to look like it belongs on a shelf next to a real formula car.',
  },
  {
    icon: '🌐',
    title: 'Mentorship from IBM Experts',
    body: "Get guidance from IBM engineers throughout the competition, from your first lines of code to race-day debugging.",
  },
  {
    icon: '📄',
    title: 'Visibility That Matters',
    body: "Showcase your work to IBM and a wider student and industry audience — a strong result is something you can put directly on a resume or portfolio.",
  },
]

const RESOURCES = [
  {
    tag: 'Knowledge depot',
    title: 'IBM SkillsBuild',
    desc: 'Your pitstop for everything you need to know about the competition and beyond. A platform where you get free courses, badges - from project management to quantum technology.',
    href: 'https://sb-auth.skillsbuild.org/signup?ngo-id=0302',
  },
  {
    tag: 'AI Team Buddy',
    title: 'IBM Bob',
    desc: 'Your agentic AI development partner designed to orchestrate and automate the entire software development lifecycle.',
    href: 'https://skillsbuild.org/learn-with-ibm-bob',
  },
  {
    tag: 'Racing environment',
    title: 'TORCS',
    desc: 'TORCS racing simulator to test-drive your AI F1 pilot. Available as installation files or as isolated container with everything baked in.',
    href: '#',
  },
  {
    tag: 'Community & help',
    title: 'Discord Guild',
    desc: 'Live chat, team collaboration, community outreach, code reviews, weekly Q&As, and race-day stream coordination.',
    href: 'https://discord.com/',
  },
]

const TIMELINE = [
  { date: 'Oct 26, 2026', label: 'Registration Opens' },
  { date: 'Nov 30, 2026', label: 'Submission Deadline' },
  { date: 'Dec 1–31, 2026', label: 'Time Trials' },
  { date: 'Jan 20, 2026', label: 'Semifinals' },
  { date: 'Jan 21, 2026', label: 'Finals' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#161616] font-sans">
      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur border-b border-[#E0E0E0]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16 h-12 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={ibmLogo} alt="IBM" className="h-6 w-auto" style={{ maxWidth: 100 }} />
          </a>

          <nav className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 h-12 flex items-center text-sm text-[#525252] hover:text-[#161616] hover:bg-[#F4F4F4] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="#register" className="carbon-btn carbon-btn-primary text-sm">
              Register Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.5 1L15 8l-6.5 7v-4.5H1v-5h7.5V1z"/></svg>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#161616]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen
                ? <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                : <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" fill="none"/>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E0E0E0]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm border-t border-[#E0E0E0] text-[#525252] hover:bg-[#F4F4F4]"
              >
                {l.label}
              </a>
            ))}
            <div className="px-6 py-4 border-t border-[#E0E0E0]">
              <a href="#register" className="carbon-btn carbon-btn-primary w-full justify-center text-sm">
                Register Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white"
        style={{ minHeight: '88vh' }}
      >
        {/* Subtle blue arc decorations — top right */}
        <svg
          className="absolute top-0 right-0 pointer-events-none"
          width="680" height="520"
          viewBox="0 0 680 520"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="620" cy="60" rx="340" ry="340" stroke="#1192E8" strokeWidth="0.6" strokeOpacity="0.18" fill="none"/>
          <ellipse cx="640" cy="60" rx="280" ry="280" stroke="#1192E8" strokeWidth="0.6" strokeOpacity="0.22" fill="none"/>
          <ellipse cx="660" cy="60" rx="220" ry="220" stroke="#0F62FE" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
          <ellipse cx="680" cy="60" rx="160" ry="160" stroke="#0F62FE" strokeWidth="1" strokeOpacity="0.18" fill="none"/>
          {/* Horizontal speed lines */}
          <line x1="100" y1="200" x2="580" y2="200" stroke="#1192E8" strokeWidth="0.5" strokeOpacity="0.12"/>
          <line x1="160" y1="212" x2="580" y2="212" stroke="#1192E8" strokeWidth="0.5" strokeOpacity="0.10"/>
          <line x1="220" y1="224" x2="580" y2="224" stroke="#1192E8" strokeWidth="0.5" strokeOpacity="0.08"/>
          {/* Dot grid patch */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={380 + col * 22}
                cy={300 + row * 22}
                r="1.2"
                fill="#0F62FE"
                fillOpacity="0.12"
              />
            ))
          )}
        </svg>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E0E0E0]" />
        <div className="absolute bottom-0 left-0 w-32 h-0.5 bg-[#0F62FE]" />

        {/* Scroll down indicator */}
        <a
          href="#competition"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#525252] hover:text-[#0F62FE] transition-colors z-20"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll down</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3v10M4 9l4 4 4-4"/>
          </svg>
        </a>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 pt-8 pb-0">
          <div className="grid lg:grid-cols-[380px_1fr] gap-0 items-center min-h-[88vh]">

            {/* ── Left: Headline + pillars ── */}
            <div className="flex flex-col justify-between py-8 lg:py-16 lg:pr-8 z-20" style={{ rowGap: 12, columnGap: 0 }}>
              <div>
                {/* IBM wordmark treatment */}
                <div className="mb-8">
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#525252]">
                    IBM × Student Competition
                  </span>
                </div>

                {/* Main headline */}
                <h1 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[0.95] tracking-tight text-[#161616]">
                  RACE WITH
                  <br />
                  <span className="text-[#0F62FE]">INTELLIGENCE.</span>
                </h1>

                <p className="mt-5 text-[15px] text-[#525252] leading-snug font-light">
                  <span className="font-semibold">Code. Collaborate. Conquer.</span>
                </p>

              </div>

              <p className="mt-3 text-[14px] text-[#525252] leading-relaxed font-light">
                Join us in an exciting challenge where students code, collaborate, and conquer the world of self-driving formula cars on a virtual track.
              </p>
              <div className="flex flex-row gap-3 mt-4">
                <a href="#register" className="carbon-btn carbon-btn-primary text-sm px-6 py-3">
                  Join Now
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8.5 1L15 8l-6.5 7v-4.5H1v-5h7.5V1z"/></svg>
                </a>
                <a href="#how-it-works" className="carbon-btn carbon-btn-secondary text-sm px-6 py-3">
                  How It Works
                </a>
              </div>


            </div>

            {/* ── Center: F1 Car ── */}
            <div className="relative flex items-end justify-center overflow-visible" style={{ marginLeft: '-60px', marginRight: '-60px' }}>
              {/* The car — breaks out of column bounds for dominance */}
              <img
                src={speedingFormula}
                alt="IBM-livery formula car speeding — IBM AI Racing League"
                className="relative z-10 w-full object-contain"
                style={{ maxWidth: 980, width: '130%', maxHeight: '82vh', marginBottom: '-4px', mixBlendMode: 'multiply' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── About the Competition ── */}
      <section id="competition" className="py-24 bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Competition</span>
              <span className="rule-blue mt-4 mb-8 block" />
              <h2 className="text-[clamp(32px,4vw,52px)] font-light leading-tight tracking-tight">
                Race your code<br />
                <span className="font-semibold">against the&nbsp;&nbsp;track.</span>
              </h2>
              <p className="mt-6 text-[#525252] leading-relaxed text-base">
                The IBM AI Racing League is an open student competition built around TORCS — the open-source racing simulator. Participants write Python agents that control a formula car using telemetry data: track radar, opponent detection, wheel slip, speed, gear state.
              </p>
              <p className="mt-4 text-[#525252] leading-relaxed text-base">
                Beyond the code, teams will produce a video presentation documenting their strategy, tool usage, and teamwork dynamics. This comprehensive challenge blends programming mastery, AI implementation, storytelling, and collaboration—showcasing the essential skills that distinguish industry-ready talent.
              </p>
              <p className="mt-4 text-[#525252] leading-relaxed text-base">
                No prior motorsport knowledge needed. If you can write a Python function, you can enter. The challenge is optimizing it until your lap times are faster than everyone else's.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                {['Python 3.11+', 'TORCS Simulator', 'IBM Bob IDE'].map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-[#E0E0E0] text-xs font-mono text-[#525252]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="w-full aspect-[4/3] bg-[#161616] overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)' }}
              >
                <img
                  src={programmerPilot}
                  alt="Programmer pilot — IBM AI Racing League"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.7) contrast(1.1)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(15,98,254,0.25) 0%, transparent 60%)' }}
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#0F62FE]" />
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#0F62FE]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline banner ── */}
      <section className="bg-[#161616] py-0 overflow-hidden">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 border-l border-[#262626]">
            {TIMELINE.map((t, i) => (
              <div
                key={t.label}
                className="border-r border-[#262626] py-8 px-6 relative"
              >
                {i === 0 && <div className="absolute top-0 left-0 w-1 h-full bg-[#0F62FE]" />}
                <div className="text-[#0F62FE] font-mono text-xs font-medium tracking-wider uppercase mb-2">{t.date}</div>
                <div className="text-white text-sm font-light">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-[#F4F4F4] border-b border-[#E0E0E0]">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <span className="section-label">How it works</span>
            <span className="rule-blue mt-4 mb-6 block" />
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-light tracking-tight">
              From signup to starting grid<br />
              <span className="font-semibold">in four steps.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
            {STEPS.map((step) => (
              <div key={step.n} className="bg-white p-8 flex flex-col gap-4 hover:bg-[#F4F4F4] transition-colors group">
                <div className="step-number group-hover:text-[#0F62FE] transition-colors">{step.n}</div>
                <div className="w-8 h-px bg-[#0F62FE]" />
                <h3 className="text-base font-semibold leading-snug">{step.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed flex-1">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Rearview image */}
          <div className="mt-12 overflow-hidden" style={{ clipPath: 'polygon(0 0, 98% 0, 100% 2%, 100% 100%, 2% 100%, 0 98%)' }}>
            <img
              src={rearview}
              alt="Formula car rearview — IBM AI Racing League"
              className="w-full object-cover"
              style={{ maxHeight: '420px', filter: 'saturate(0.85) contrast(1.05)' }}
            />
          </div>
        </div>
      </section>

      {/* ── Why Participate ── */}
      <section id="why-join" className="py-24 bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
            <div>
              <span className="section-label">Why Join</span>
              <span className="rule-blue mt-4 mb-6 block" />
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-light tracking-tight leading-tight">
                Six reasons to<br />
                <span className="font-semibold">enter the race.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#525252] text-base leading-relaxed max-w-xl">
                The AI Racing League is more than a competition — it's a hands-on path to real AI skills, expert mentorship, and recognition that extends well beyond the finish line.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white p-8 hover:bg-[#F4F4F4] transition-colors group border-l-2 border-transparent hover:border-[#0F62FE]"
              >
                <div className="text-2xl mb-6">
                  {b.title === 'Real Engineering Challenge'
                    ? <img src={engineeringIcon} alt="Real Engineering Challenge" className="w-8 h-8" />
                    : b.title === 'Prizes & Recognition'
                    ? <img src={trophyIcon} alt="Trophy" className="w-8 h-8" />
                    : b.title === 'Visibility That Matters'
                    ? <img src={viewIcon} alt="Visibility" className="w-8 h-8" />
                    : b.title === 'AI & ML Skills, Hands-On'
                    ? <img src={aiSkillsIcon} alt="AI & ML Skills" className="w-8 h-8" />
                    : b.title === 'Real Team Collaboration'
                    ? <img src={collaborateIcon} alt="Real Team Collaboration" className="w-8 h-8" />
                    : b.title === 'Mentorship from IBM Experts'
                    ? <img src={helpDeskIcon} alt="Mentorship from IBM Experts" className="w-8 h-8" />
                    : b.icon}
                </div>
                <h3 className="font-semibold text-base mb-3">{b.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Testimonial / quote */}
          <div className="mt-12 grid lg:grid-cols-2 gap-px bg-[#E0E0E0]">
            <div className="bg-[#0F62FE] p-10">
              <p className="text-white text-lg font-light leading-relaxed italic">
                "Not everyone needs to build AI — but everyone will need to work with it. AI is now part of every field, every day, and we think the best way to learn that is by doing something fun. With IBM Bob lowering the barrier to entry, this competition is open to any student ready to turn code into a car that actually races."
              </p>
              <div className="mt-6">
                <div className="text-white font-semibold text-sm">John McNamara</div>
                <div className="text-[#A6C8FF] text-xs font-mono mt-1">IBM Academia Europe Leader</div>
              </div>
            </div>
            <div className="relative bg-[#161616] overflow-hidden min-h-[260px]">
              <img
                src={cupPhoto}
                alt="Students collaborating on AI racing project"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <div className="text-white font-semibold">Your team, next.</div>
                  <div className="text-[#A6C8FF] text-sm font-mono mt-1">50+ teams finished the SUMMER26 season</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration ── */}
      <section id="register" className="py-24 bg-[#161616]">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label text-[#33B1FF]">Registration</span>
              <span className="rule-blue mt-4 mb-8 block" />
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-light text-white leading-tight tracking-tight">
                Secure your<br />
                <span className="font-semibold text-[#33B1FF]">starting position.</span>
              </h2>
              <p className="mt-6 text-[#C6C6C6] leading-relaxed text-base">
                Registration is free. Each team member registers individually via MS Forms. Open to students aged 18 and above — high school or university, any discipline.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  'No entry fee — completely free to compete',
                  'Open to all disciplines: CS, EE, Maths, Physics…',
                  'Teams of 1–3 students, 18+ (high school or university)',
                  'Each member registers individually via MS Forms',
                  'Remote-first — no travel required to qualify',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="#0F62FE">
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.3l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7 8.94l3.47-3.47a.75.75 0 011.06 1.06z"/>
                    </svg>
                    <span className="text-[#C6C6C6] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* IBM logo treatment */}
              <div className="mt-12 pt-8 border-t border-[#262626]">
                <span className="text-[#525252] text-xs font-mono tracking-wider uppercase">Organized by</span>
                <div className="mt-3 flex items-center gap-4">
                  <img
                    src={ibmLogoSvg}
                    alt="IBM AI Racing League"
                    className="h-6 w-auto"
                    style={{ maxWidth: 180, filter: 'brightness(10)' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-[#E0E0E0]">How to Register</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-6">
                  Each team member must register individually. Click below to open the official MS Forms registration — fill in your details and you're in.
                </p>
                <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=V3D2_MlQ1EqY8__KZK3Z6RoZrJkJ17tPrV1hZp-SLuJUQTNVSUxKOVVLVE03QjdRTUFYN01CSkVaRy4u" className="carbon-btn carbon-btn-primary w-full justify-center py-4 text-sm">
                  Register for WINTER26 Season
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.5 1L15 8l-6.5 7v-4.5H1v-5h7.5V1z"/></svg>
                </a>
                <p className="text-xs text-[#8D8D8D] text-center mt-3">
                  Registration opens: October 26, 2026. Registration closes: November 25, 2026.
                </p>
              </div>

              <div className="border-t border-[#E0E0E0] pt-6">
                <h4 className="text-sm font-semibold mb-4 text-[#161616] uppercase tracking-wider">Once Registered...</h4>
                <div className="space-y-3">
                  {[
                    'You will receive a welcome email inviting you to IBM SkillsBuild - your pitstop with all the details you will need.',
                    'You will get invitation to Discord server where all the buzz will happen.',
                    'You will get access to the submission form - submit all required assets before the submission deadline.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="#0F62FE">
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.3l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7 8.94l3.47-3.47a.75.75 0 011.06 1.06z"/>
                      </svg>
                      <span className="text-sm text-[#525252]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community & Resources ── */}
      <section id="resources" className="py-24 bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <span className="section-label">Resources</span>
            <span className="rule-blue mt-4 mb-6 block" />
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-light tracking-tight">
              Everything you need to<br />
              <span className="font-semibold">go from zero to podium.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#E0E0E0]">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 flex gap-6 hover:bg-[#F4F4F4] group transition-colors"
              >
                <div className="flex-1">
                  <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-[#0F62FE] border border-[#0F62FE] px-2 py-0.5 inline-block">
                    {r.tag}
                  </span>
                  <h3 className="mt-3 font-semibold text-base group-hover:text-[#0F62FE] transition-colors">{r.title}</h3>
                  <p className="mt-2 text-sm text-[#525252] leading-relaxed">{r.desc}</p>
                </div>
                <div className="flex-shrink-0 self-start mt-1">
                  <svg className="text-[#E0E0E0] group-hover:text-[#0F62FE] transition-colors" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 5l8 5-8 5V5z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#161616] py-16">
        <div className="max-w-[1312px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between gap-8 pb-12 border-b border-[#262626]">
            <div>
              <img
                src={ibmLogoSvg}
                alt="IBM AI Racing League"
                className="h-8 w-auto mb-4"
                style={{ maxWidth: 220, filter: 'brightness(10)' }}
              />
              <p className="text-[#8D8D8D] text-sm leading-relaxed max-w-xs mt-4">
                An IBM initiative connecting the next generation of AI engineers with real-world autonomous systems challenges.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-mono tracking-widest uppercase mb-4">Competition</h4>
              <ul className="space-y-2">
                {['Rules & Format', 'Judging Criteria', 'Prize Structure', 'Code of Conduct'].map((l) => (
                  <li key={l}>
                    <a href="https://ibm.ent.box.com/s/lagf6kj8769pkw2x4cn8kwd7a4gw6c4x" className="text-[#8D8D8D] text-sm hover:text-[#33B1FF] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-[#525252] text-xs font-mono">
              © 2026 IBM Corporation. AI Racing League is an IBM initiative.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
