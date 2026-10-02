export default function SectionHeading({ index, label, title, sub }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-mute">
        {index} — {label}
      </p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-lg text-mute">{sub}</p>}
    </div>
  )
}