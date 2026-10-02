import { site } from '../data/site'

const Icon = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const H = ({ children }) => (
  <span className="rounded-md bg-ink/10 px-1.5 font-medium text-ink">{children}</span>
)

const areas = [
  { title: 'Frontend', sub: 'React and Tailwind interfaces', d: 'M3 4h18v12H3z M8 20h8 M12 16v4' },
  { title: 'Mobile', sub: 'React Native and Expo apps', d: 'M7 2h10v20H7z M11 18h2' },
  { title: 'Backend', sub: 'Node.js, Express, MongoDB', d: 'M3 4h18v6H3z M3 14h18v6H3z M7 7h.01 M7 17h.01' },
  { title: 'Security and AI', sub: 'Applied AI, cybersecurity', d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z' },
]

const chips = [
  { label: 'Node.js', color: '#22c55e', pos: 'left-[38%] top-[0%]' },
  { label: 'MongoDB', color: '#16a34a', pos: 'left-[-4%] top-[16%]' },
  { label: 'Expo', color: '#6366f1', pos: 'right-[-4%] top-[16%]' },
  { label: 'Firebase', color: '#f59e0b', pos: 'left-[-10%] top-[48%]' },
  { label: 'React', color: '#38bdf8', pos: 'right-[-8%] top-[48%]' },
  { label: 'Tailwind CSS', color: '#06b6d4', pos: 'left-[0%] bottom-[14%]' },
  { label: 'React Native', color: '#0ea5e9', pos: 'right-[-6%] bottom-[14%]' },
  { label: 'Express', color: '#a3a3a3', pos: 'left-[40%] bottom-[-2%]' },
]

export default function Hero() {
  return (
    <section className="overflow-x-clip pb-20 pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">
            Full-stack developer · AI and security researcher
          </p>

          <h1 className="mt-3 text-[clamp(4.5rem,13vw,9rem)] font-extrabold leading-[0.9] tracking-tighter">
            Ussy
          </h1>
          <p className="mt-4 text-2xl font-semibold">{site.name}</p>

          <p className="mt-6 max-w-xl text-2xl leading-relaxed text-mute sm:text-[1.7rem]">
            I build <H>mobile apps</H>, <H>commerce platforms</H>, and <H>AI-assisted tools</H>.
            Shipped products, honest engineering, security-minded design.
          </p>

          <div className="mt-8 grid max-w-xl gap-5 sm:grid-cols-2">
            {areas.map((a) => (
              <div key={a.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-card">
                  <Icon d={a.d} />
                </span>
                <div>
                  <p className="font-semibold leading-tight">{a.title}</p>
                  <p className="text-sm text-mute">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-lg shadow-black/10 transition hover:opacity-85">View projects →</a>
            <a href={`mailto:${site.email}?subject=Hello%20Ussy`} className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold transition hover:border-ink">Hire me</a>
            <a href="/cv.pdf" download className="px-3 py-3 text-sm text-mute transition hover:text-ink">↓ Download CV</a>
          </div>

          <p className="mt-8 text-sm text-mute">
            {site.location} · Open to remote ·{' '}
            <a href={`mailto:${site.email}`} className="font-medium text-ink">{site.email}</a>
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-line" />
          <div className="absolute inset-[8%] rounded-full border border-line" />
          <div className="absolute inset-[16%] overflow-hidden rounded-full border-8 border-card shadow-2xl shadow-black/15">
            <img src="/images/ussy.webp" alt={site.name} className="h-full w-full object-cover" style={{ objectPosition: '50% 20%' }} />
          </div>

          {chips.map((c) => (
            <span key={c.label} className={`absolute hidden items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs shadow-md sm:flex ${c.pos}`}>
              <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}