// Project data kept separate from the UI. Edit copy/links here — components
// just render whatever is in this list. `demo` and `image` are optional:
// leave them out and the card shows a repo-only link + placeholder preview.
import serveflowImg from '../assets/serveflow.jpg'
import numerixImg from '../assets/numerix.jpg'
import pathgridImg from '../assets/pathgrid.jpg'
import miniMatchImg from '../assets/mini-match.jpg'

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
    id: 'serveflow',
    name: 'ServeFlow',
    description:
      'A restaurant point-of-sale web app — browse the menu, build orders, take payments, and track service live on a dashboard with analytics. A React front end on a C++ (Crow) REST API, with a demo-mode fallback so it stays live even when the backend is offline.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
      'Recharts',
      'C++',
      'Crow',
    ],
    concepts: [
      'POS order flow and live service dashboard (KPIs)',
      'Payments: cash, card, UPI',
      'Client-side analytics charts',
      'Demo-mode fallback when the API is offline',
      'REST API (React ⇄ C++ backend)',
    ],
    repo: 'https://github.com/iishikaverma/ServeFlow-frontend',
    repoBackend: 'https://github.com/iishikaverma/ServeFlow-backend',
    demo: 'https://getserveflow.vercel.app',
    image: serveflowImg,
  },
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
    demo: 'https://numerixsolver.vercel.app',
    demoNote: 'The C++ backend sleeps when idle, so the first solve may take a few seconds to wake it.',
    image: numerixImg,
  },
  {
    id: 'pathgrid',
    name: 'PathGrid',
    description:
      'A campus route finder that models the campus as a graph and finds routes with breadth-first search — pick a start and destination, or watch BFS explore the graph step by step on an interactive map.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    concepts: [
      'Graph modelling of campus locations',
      'BFS pathfinding',
      'Step-by-step algorithm visualization',
      'Interactive map',
    ],
    repo: 'https://github.com/iishikaverma/path-grid-frontend',
    demo: 'https://getpathgrid.vercel.app',
    image: pathgridImg,
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
    image: miniMatchImg,
    // ClinSight context lives in the Journey section instead of on the card.
    // tag: 'Built for ClinSight technical round',
  },
]
