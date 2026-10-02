import { site } from '../data/site'

const solid = 'rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:opacity-85'
const outline = 'rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold transition hover:border-ink'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl border border-line bg-card p-8 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">05 — Contact</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let’s build something dependable.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-mute">
            Hiring, collaborating or have a project in mind? Send a message and I’ll reply.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}?subject=Hello%20Ussy`} className={solid}>Email me</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={outline}>LinkedIn ↗</a>
            <a href={site.github} target="_blank" rel="noreferrer" className={outline}>GitHub ↗</a>
          </div>

          <p className="mt-8 text-sm text-mute">
            {site.location} · Open to remote ·{' '}
            <a href={`mailto:${site.email}`} className="font-medium text-ink">{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}