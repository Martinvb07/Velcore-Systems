import React from 'react'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const AboutPage = ({ scrolled }) => {
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="nosotros" />
      <main>
        <div className="section">
          <About />
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default AboutPage
