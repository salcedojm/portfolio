import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
// import Projects from './components/Projects.jsx' // temporarily hidden
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> temporarily hidden */}
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
