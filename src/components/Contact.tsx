import { profile } from '../data/profile'
import Reveal from './common/Reveal'

// Final CTA. No form — a direct email link is lower-friction and nothing to maintain.
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          06 — Contact
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Let&rsquo;s build something{' '}
          <span className="text-accent">useful.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Open to internships and interesting projects. The fastest way to reach
          me is email.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="text-2xl font-medium text-bone underline decoration-line underline-offset-8 transition-colors hover:decoration-accent sm:text-3xl"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            GitHub {'↗'}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            LinkedIn {'↗'}
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            LeetCode {'↗'}
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
