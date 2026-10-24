// Project data kept separate from the UI. Edit copy/links here — components
// just render whatever is in this list. `demo` and `image` are optional:
// leave them out and the card shows a repo-only link + placeholder preview.
export type Project = {
  id: string
  name: string
  description: string
  problem?: string // only where the project genuinely solves one
  tech: string[]
  concepts: string[]
  repo: string
  repoBackend?: string
  demo?: string
  demoNote?: string // e.g. a cold-start warning for a sleeping backend
  image?: string // screenshot path; omit to show the placeholder preview
  tag?: string // small context label, e.g. "ClinSight technical round"
}

export const projects: Project[] = [
  {
    id: 'numerix',
    name: 'Numerix',
    description:
      'An interactive numerical-methods solver that computes roots and interpolations and shows every iteration step, not just the final answer. A React + TypeScript interface talks to a C++ computation engine over a REST API.',
    problem:
      'Numerical methods are usually taught as formulas on paper. Numerix makes them explorable — you watch each iteration converge.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'C++', 'Crow'],
    concepts: [
      'Root-finding: bisection, secant, Newton–Raphson',
      'Interpolation: Lagrange, Newton divided-difference',
      'Custom expression parser (AST)',
      'Numeric differentiation',
      'REST API (frontend ⇄ C++ backend)',
    ],
    repo: 'https://github.com/iishikaverma/numerix-frontend',
    repoBackend: 'https://github.com/iishikaverma/numerix-backend',
    // demo: 'TODO — add deployed URL',
  },
  {
    id: 'mini-match',
    name: 'mini-match',
    description:
      'A full-stack job–candidate matching app: a Node / Express / TypeScript API for listing jobs, adding candidates, and matching them, with a React + TypeScript frontend.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'axios', 'Node.js', 'Express'],
    concepts: ['REST API design', 'Candidate–job matching logic', 'Client–server data flow'],
    repo: 'https://github.com/iishikaverma/mini-match-frontend',
    repoBackend: 'https://github.com/iishikaverma/mini-match',
    // ClinSight context lives in the Journey section instead of on the card.
    // tag: 'Built for ClinSight technical round',
    // demo: 'TODO — add deployed URL if any',
  },
]
