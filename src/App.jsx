import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
  
      <Navbar/>
      <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Testimonial/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
