import Reveal from './common/Reveal'
import portrait from '../assets/ishika.jpg'

// About copy lives here — edit the paragraphs directly.
// To swap the photo, replace src/assets/ishika.jpg (or change the import).
function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="mb-12 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          03 — About
        </p>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        {/* Portrait */}
        <Reveal>
          <img
            src={portrait}
            alt="Ishika Verma"
            className="w-full max-w-[260px] rounded-xl border border-line object-cover grayscale transition-all duration-500 hover:grayscale-0"
            style={{ aspectRatio: '4 / 5' }}
            loading="lazy"
          />
        </Reveal>

        {/* Bio */}
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
