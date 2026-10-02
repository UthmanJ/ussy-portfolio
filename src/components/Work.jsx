import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { strip, store, suite, more } from '../data/projects'

const Tag = ({ children }) => (
  <span className="rounded-md border border-line bg-paper px-2 py-0.5 font-mono text-xs text-mute">{children}</span>
)

const pill = 'rounded-full border border-line px-3 py-1 text-xs text-mute transition hover:border-ink hover:text-ink'

function BrowserFrame() {
  const [ok, setOk] = useState(true)
  return (
    <div className="h-full bg-paper p-4 sm:p-6">
      <div className="overflow-hidden rounded-xl border border-line bg-card shadow-lg shadow-black/5">
        <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
          <span className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full bg-line" />
            <i className="h-2.5 w-2.5 rounded-full bg-line" />
            <i className="h-2.5 w-2.5 rounded-full bg-line" />
          </span>
          <span className="flex-1 truncate rounded-md bg-paper px-3 py-1 font-mono text-xs text-mute">beewave-store.web.app</span>
          <a href={store.url} target="_blank" rel="noreferrer" className="rounded-md bg-ink px-3 py-1 text-xs font-semibold text-paper">Visit live ↗</a>
        </div>
        <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-paper">
          {ok ? (
            <img src="/images/beewave-store.png" alt="BeeWave Store homepage" onError={() => setOk(false)} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs text-mute">add public/images/beewave-store.png</div>
          )}
        </div>
      </div>
    </div>
  )
}

function AppTiles() {
  return (
    <div className="grid h-full grid-cols-3 content-center gap-3 bg-paper p-6 sm:p-10">
      {suite.apps.map((a) => (
        <div key={a.name} className="flex flex-col items-center gap-2 text-center">
          <span className="flex aspect-square w-full max-w-[84px] items-center justify-center rounded-[22%] text-2xl font-extrabold text-white shadow-lg" style={{ background: a.color }}>
            {a.name[0]}
          </span>
          <span className="text-xs text-mute">{a.name}</span>
        </div>
      ))}
    </div>
  )
}

function FeaturedCard({ p, visual, flip }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-card lg:grid-cols-[1.25fr_1fr]">
      <div className={flip ? 'lg:order-2' : ''}>{visual}</div>
      <div className="flex flex-col justify-center p-6 sm:p-9">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {p.status}
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-mute">{p.kind}</span>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-mono text-xs">{p.id}</span>
        </div>
        <h3 className="text-3xl font-extrabold tracking-tight">{p.name}</h3>
        <p className="mt-3 font-medium">{p.blurb}</p>
        <p className="mt-2 text-sm text-mute">{p.detail}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className={pill}>{l.label} ↗</a>)}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-5 text-sm">
          {strip.map(([name, note]) => (
            <span key={name}>
              <b className="font-mono font-medium">{name}</b>
              <span className="font-mono text-mute"> · {note}</span>
            </span>
          ))}
        </div>

        <SectionHeading index="01" label="Selected work" title="Products I have shipped" sub="Live products and the apps I built, with working links and the numbers behind them." />

        <div className="space-y-6">
          <FeaturedCard p={store} visual={<BrowserFrame />} />
          <FeaturedCard p={suite} visual={<AppTiles />} flip />
        </div>

        <p className="mb-4 mt-14 font-mono text-xs uppercase tracking-widest text-mute">More projects</p>
        <div className="grid gap-4 md:grid-cols-3">
          {more.map((m) => (
            <article key={m.name} className="flex flex-col rounded-2xl border border-line bg-card p-6">
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded-full border border-line px-3 py-1 text-xs text-mute">{m.kind}</span>
                {m.live && (
                  <a href={m.live} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper">Live ↗</a>
                )}
              </div>
              <h3 className="text-lg font-bold">{m.name}</h3>
              <p className="mt-2 text-sm text-mute">{m.desc}</p>
              <p className="mb-1 mt-2 flex-1 font-mono text-xs text-mute">{m.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              {m.repo && (
                <a href={m.repo} target="_blank" rel="noreferrer" className="mt-4 text-sm font-medium text-accent hover:underline">View code ↗</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}