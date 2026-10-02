import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { site } from '../data/site'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Sun = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const Moon = () => (
  <svg {...iconProps}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

const Menu = ({ open }) => (
  <svg {...iconProps} width="18" height="18">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

const linkClass = 'rounded-lg px-3 py-2 text-sm text-mute transition hover:text-ink'
const hireClass = 'rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:opacity-85'
const hireHref = `mailto:${site.email}?subject=Hello%20Ussy`

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  const toggleBtn = (mode, icon) => (
    <button
      onClick={theme === mode ? undefined : toggle}
      aria-label={`${mode} mode`}
      className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
        theme === mode ? 'bg-ink text-paper' : 'text-mute hover:text-ink'
      }`}
    >
      {icon}
    </button>
  )

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-line bg-card/90 shadow-lg shadow-black/5 backdrop-blur-md">
        <div className="flex items-center justify-between px-3 py-2">
          <a href="#top" className="flex items-center gap-2.5 pl-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-xs font-bold text-paper">
              {site.initials}
            </span>
            <span className="font-semibold tracking-tight">{site.brand}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-mute sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to remote
            </span>

            <div className="flex rounded-full border border-line p-0.5">
              {toggleBtn('light', <Sun />)}
              {toggleBtn('dark', <Moon />)}
            </div>

            <a href={hireHref} className={`${hireClass} hidden sm:inline-block`}>Hire me</a>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            >
              <Menu open={open} />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line p-3 md:hidden">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base text-mute hover:text-ink">{l.label}</a>
                </li>
              ))}
            </ul>
            <a href={hireHref} onClick={() => setOpen(false)} className={`${hireClass} mt-2 block text-center`}>Hire me</a>
          </div>
        )}
      </nav>
    </header>
  )
}