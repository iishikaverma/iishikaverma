import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './common/Reveal'

function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal className="mb-12 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          02 — Selected Work
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Things I&rsquo;ve built.
        </h2>
      </Reveal>

      <div className="space-y-20 md:space-y-28">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
