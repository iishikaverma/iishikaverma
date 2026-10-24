import { profile } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm text-dim">
          {profile.name} <span className="text-accent">/</span> &copy; {year}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-bone"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-bone"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
