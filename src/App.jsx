import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Work />
      <Stack />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}