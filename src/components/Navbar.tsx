import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

// Section anchors — these ids must match the <section id="..."> in each component.
const links = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // One scroll handler: toggles the header hairline AND tracks the active
  // section (the last one whose top has scrolled past ~35% of the viewport).
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)

      const line = window.innerHeight * 0.35
      let current = ''
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= line) current = l.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        {/* Logo / initials — links back to the top */}
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-widest text-bone"
          aria-label="Ishika Verma — back to top"
        >
          IV<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-mono text-xs uppercase tracking-wider transition-colors hover:text-bone ${
                    isActive ? 'text-bone' : 'text-muted'
                  }`}
                >
                  {link.label}
                  {/* active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center text-bone md:hidden"
        >
          <span className="font-mono text-lg leading-none">{open ? '×' : '≡'}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <motion.ul
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex flex-col gap-1 overflow-hidden border-t border-line px-6 pb-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 font-mono text-sm uppercase tracking-wider transition-colors hover:text-bone ${
                  active === link.id ? 'text-bone' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}

export default Navbar
