import type { Project } from '../data/projects'
import Reveal from './common/Reveal'

// A single large project presentation. `flip` alternates the image/text sides
// on desktop so consecutive projects don't look identical.
function ProjectCard({
  project,
  index,
  flip,
}: {
  project: Project
  index: number
  flip: boolean
}) {
  const number = String(index + 1).padStart(2, '0')
  const primaryLink = project.demo ?? project.repo

  return (
    <Reveal>
      <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
        {/* Preview */}
        <div className={flip ? 'md:order-2' : ''}>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-panel transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              // Placeholder until a real screenshot is added — clearly not a photo.
              <div
                className="flex h-full w-full items-center justify-center"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg, #17171a, #17171a 10px, #141417 10px, #141417 20px)',
                }}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-dim">
                  {project.name} — preview
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Text */}
        <div className={flip ? 'md:order-1' : ''}>
          <p className="font-mono text-xs tracking-widest text-accent">
            {number}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              {project.name}
              <span
                aria-hidden="true"
                className="text-2xl text-dim transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                {'↗'}
              </span>
            </a>
          </h3>

          {project.tag && (
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-dim">
              {project.tag}
            </p>
          )}

          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          {project.problem && (
            <p className="mt-4 border-l-2 border-line pl-4 text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          )}

          {/* Concepts */}
          <ul className="mt-6 space-y-1.5">
            {project.concepts.map((c) => (
              <li
                key={c}
                className="flex gap-2 text-sm text-muted"
              >
                <span className="text-accent">—</span>
                {c}
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line2 px-2.5 py-1 font-mono text-xs text-dim"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                Live demo {'↗'}
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
            >
              {project.repoBackend ? 'Frontend repo' : 'Code'} {'↗'}
            </a>
            {project.repoBackend && (
              <a
                href={project.repoBackend}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
              >
                Backend repo {'↗'}
              </a>
            )}
          </div>

          {project.demoNote && (
            <p className="mt-3 text-xs text-dim">{project.demoNote}</p>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectCard
