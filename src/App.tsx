import Background from './components/common/Background'
import BackToTop from './components/common/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Keyboard users can jump straight to the content */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-accent focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
      >
        Skip to work
      </a>
      <Background />
      <Navbar />
      <div id="top" />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
