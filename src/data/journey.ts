// Timeline data. `milestones` = your learning progression.
// `experience` = real-world work (ClinSight). Edit freely.
export const milestones: { title: string; detail: string }[] = [
  {
    title: 'Programming fundamentals',
    detail: 'Logic, problem-solving and the basics everything else builds on.',
  },
  {
    title: 'DSA & OOP in Java',
    detail: 'Data structures, algorithms and object-oriented design.',
  },
  {
    title: 'Web fundamentals',
    detail: 'HTML, CSS and JavaScript — my first interactive projects.',
  },
  {
    title: 'React',
    detail: 'Component-based UIs and modern frontend patterns.',
  },
  {
    title: 'TypeScript & full-stack',
    detail:
      'Node.js, Express and REST APIs — building projects end to end, like mini-match and Numerix.',
  },
]

// ClinSight experience. Role title + dates are placeholders — update them.
export const experience: {
  org: string
  role: string
  period?: string
  detail: string
  tech?: string[]
}[] = [
  {
    org: 'ClinSight',
    role: 'SDE Intern',
    period: undefined, // TODO: add dates, e.g. 'Jun 2025 – present'
    detail:
      'Most of my work was on DDS — a family of four to five connected websites for the healthcare space: a matchmaker, a jobs site, a vendors site, and the hub that links them together. On the matchmaker I worked on both the website and its backend; across the others I built and polished pages, made them load fast and rank well in search, improved accessibility, and kept the branding and navigation consistent. I also contributed to ClinSight’s wider network of sites.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Cloudflare'],
  },
]
