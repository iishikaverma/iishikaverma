import { skills } from '../data/skills'
import Reveal from './common/Reveal'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal className="mb-10 md:mb-14">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          04 — Skills
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Tools I work with.
        </h2>
      </Reveal>

      {/* Category rows with a hairline between them — reads like an index, not a logo wall. */}
      <div className="divide-y divide-line border-y border-line">
        {skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.05}>
            <div className="grid gap-4 py-6 md:grid-cols-[180px_1fr] md:gap-8 md:py-8">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                {cat.group}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-lg text-bone">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
