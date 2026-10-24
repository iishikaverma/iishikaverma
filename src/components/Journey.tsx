import { milestones, experience } from '../data/journey'
import Reveal from './common/Reveal'

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="mb-16 md:mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          05 — Journey
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          How I got here.
        </h2>
      </Reveal>

      <div className="grid gap-16 md:grid-cols-[1fr_auto_1fr] md:gap-12">
        {/* Learning timeline */}
        <div>
          <p className="mb-8 font-mono text-xs uppercase tracking-wider text-accent">
            Learning
          </p>
          {/* vertical line + dots */}
          <ol className="relative border-l border-line pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <li className="relative mb-10 last:mb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-accent"
                  />
                  <h3 className="text-lg font-medium text-bone">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {m.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Divider (desktop only) */}
        <div aria-hidden="true" className="hidden w-px bg-line md:block" />

        {/* Experience */}
        <div>
          <p className="mb-8 font-mono text-xs uppercase tracking-wider text-accent">
            Experience
          </p>
          <div className="space-y-8">
            {experience.map((e) => (
              <Reveal key={e.org}>
                <div className="rounded-xl border border-line p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-medium text-bone">{e.org}</h3>
                    {e.period && (
                      <span className="font-mono text-xs text-dim">
                        {e.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-dim">
                    {e.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {e.detail}
                  </p>
                  {e.tech && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {e.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-line2 px-2.5 py-1 font-mono text-xs text-dim"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
