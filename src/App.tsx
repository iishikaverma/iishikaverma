import Background from './components/common/Background'
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
    </>
  )
}

export default App
