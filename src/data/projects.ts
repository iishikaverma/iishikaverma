// Project data kept separate from the UI. Edit copy/links here — components
// just render whatever is in this list. `demo` and `image` are optional:
// leave them out and the card shows a repo-only link + placeholder preview.
import serveflowImg from '../assets/serveflow.jpg'
import crewoImg from '../assets/crewo.jpg'
import numerixImg from '../assets/numerix.jpg'
import pathgridImg from '../assets/pathgrid.jpg'

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
    id: 'crewo',
    name: 'Crewo',
    description:
      'A full-stack app that matches students into hackathon and project teams by complementary skills, backed by real GitHub profiles. Post a need or browse a ranked people directory, request to join, and form your team.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    concepts: [
      'Skill-complementarity match scoring (0–100)',
      'GitHub OAuth + profile enrichment',
      'Ranked people directory with search',
      'Join / connect request flows',
      'Server actions on Postgres',
    ],
    repo: 'https://github.com/iishikaverma/Crewo',
    demo: 'https://getcrewo.vercel.app',
    image: crewoImg,
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
]
