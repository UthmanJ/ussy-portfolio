import SectionHeading from './SectionHeading'

const education = [
  ['B.Sc. Software Engineering', 'Al-Qalam University Katsina · 2019 – 2024 · CGPA 4.18/5.0 (Upper Second Class Honours)'],
]

const certs = [
  ['Cybersecurity Certificate', 'University of the People / IBM SkillsBuild · in progress'],
  ['3MTT Cybersecurity Fellowship', 'Nigeria Federal Ministry of Communications, Innovation and Digital Economy'],
  ['Cybersecurity and Ethical Hacking', 'Cisco / Edureka'],
  ['Data Science Professional Course', 'WorldQuant University'],
  ['Career Essentials in Generative AI', 'Microsoft and LinkedIn'],
  ['Project Management Essentials', 'Management and Strategy Institute'],
]

const leadership = [
  ['Financial Secretary, then Auditor General', 'Undergraduate Student Association, Al-Qalam University'],
  ['SDGs Community Development Service', 'National Youth Service Corps (NYSC)'],
  ['Best Graduating Student and Proprietor’s Awardee', 'Prince and Princess International Academy'],
]

function Block({ title, rows }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-mute">{title}</p>
      <ul className="space-y-3">
        {rows.map(([name, note]) => (
          <li key={name}>
            <p className="font-semibold leading-snug">{name}</p>
            <p className="text-sm text-mute">{note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="04" label="About" title="Engineer first, researcher always" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-mute">
            <p>
              I’m a full-stack developer who likes taking a product from idea to a live link. Most of what I’ve
              built, I’ve also deployed, maintained and fixed in front of real users.
            </p>
            <p>
              Alongside product work, I research trustworthy AI and cybersecurity for critical infrastructure, and
              I care about building research capacity in Africa. That’s why I run Bee Digital Solutions, and why my
              recent projects lean toward security tooling.
            </p>
            <p>I’m open to remote engineering roles and research collaborations.</p>
          </div>

          <div className="space-y-4">
            <Block title="Education" rows={education} />
            <Block title="Certifications" rows={certs} />
            <Block title="Leadership and awards" rows={leadership} />
          </div>
        </div>
      </div>
    </section>
  )
}