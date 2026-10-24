import Reveal from './common/Reveal'

// About copy lives here — edit the paragraphs directly.
// Honest placeholders only; add a "currently learning" line and a personal
// line whenever you're ready (see the comment below).
function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-dim md:pt-2">
            03 — About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
            <p>
              I&rsquo;m a second-year CS student who learns by building. Most of
              what I know beyond coursework came from shipping real projects —{' '}
              <span className="text-bone">Numerix</span>, a numerical-methods
              solver with a C++ engine and a React frontend, and{' '}
              <span className="text-bone">mini-match</span>, a full-stack
              job-matching app I built for an internship round.
            </p>
            <p>
              I like the full loop: designing an API, wiring it to a frontend,
              and making the interface actually feel right.
            </p>
            {/* TODO: add an honest "currently learning" line and one line of
                personality here when ready, e.g.:
                <p>Lately I'm getting deeper into <span className="text-bone">…</span>.</p>
            */}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
