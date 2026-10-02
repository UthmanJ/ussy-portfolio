import SectionHeading from './SectionHeading'
import { groups } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          label="Capabilities"
          title="What I ship with"
          sub="Web, mobile and backend work, plus the security and AI skills I'm building on top."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-line bg-card p-6 transition hover:border-ink/30">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-paper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={g.d} />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">{g.title}</h3>
                  <p className="text-sm text-mute">{g.sub}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-lg border border-line bg-paper px-2.5 py-1 font-mono text-xs">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}