import React from 'react'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </>
  )
}

export default App