import SectionHeading from './SectionHeading'
import { roles } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03"
          label="Experience"
          title="Built, shipped, maintained"
          sub="Roles where I built, shipped and maintained real systems, plus the research work alongside them."
        />

        <div className="overflow-hidden rounded-3xl border border-line bg-card">
          {roles.map((r, i) => (
            <article key={r.title + r.org} className={`flex gap-5 p-6 sm:p-8 ${i > 0 ? 'border-t border-line' : ''}`}>
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold text-white"
                style={{ background: r.color }}
              >
                {r.mono}
              </span>

              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug">{r.title}</h3>
                <p className="text-sm text-mute">
                  {r.org}
                  {r.former && <span className="text-mute/70"> ({r.former})</span>}
                </p>
                <p className="mt-0.5 font-mono text-xs text-mute">
                  {r.period}{r.place ? ` · ${r.place}` : ''}
                </p>

                <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 text-[15px] text-mute">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {r.skills.map((s) => (
                    <span key={s} className="rounded-md border border-line bg-paper px-2 py-0.5 font-mono text-xs text-mute">
                      {s}
                    </span>
                  ))}
                  {r.link && (
                    <a href={r.link.url} target="_blank" rel="noreferrer" className="ml-1 text-sm font-medium text-accent hover:underline">{r.link.label} ↗</a>
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