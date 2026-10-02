import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-mute">
        <p>© {new Date().getFullYear()} {site.name} · Founder, Bee Digital Solutions</p>
        <a href="#top" className="hover:text-ink">Back to top ↑</a>
      </div>
    </footer>
  )
}