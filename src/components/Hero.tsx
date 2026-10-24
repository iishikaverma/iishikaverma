import { motion } from 'motion/react'
import { profile } from '../data/profile'
import Magnetic from './common/Magnetic'

// Stagger children so the hero reveals line-by-line on load.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Eyebrow: name + title */}
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-widest text-dim"
        >
          {profile.name} <span className="text-accent">/</span> {profile.title}
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          I build for the web,{' '}
          <span className="relative whitespace-nowrap text-accent">
            end to end
            {/* subtle animated underline that draws in after the headline */}
            <motion.span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' as const, delay: 0.8 }}
            />
          </span>
          .
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Second-year CS student and full-stack web developer. I build projects
          end to end — from the API to the interface.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              View work
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {'→'}
              </span>
            </a>
          </Magnetic>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            GitHub {'↗'}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            LinkedIn {'↗'}
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-widest text-dim"
      >
        <span className="inline-block animate-pulse motion-reduce:animate-none">{'↓'}</span> Scroll
      </motion.div>
    </section>
  )
}

export default Hero
