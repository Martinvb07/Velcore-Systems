import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MVSoftwareView from '../views/MVSoftwareView.jsx'
import ServicesPage from '../views/ServicesPage.jsx'
import ProductsPage from '../views/ProductsPage.jsx'
import AboutPage from '../views/AboutPage.jsx'
import { stats, services, products } from '../models/data.js'

// Controller: handles state, scroll and navigation logic and passes data/handlers to the view
const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  // Scroll spy
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'productos', 'nosotros']
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MVSoftwareView
            scrolled={scrolled}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            stats={stats}
            services={services}
            products={products}
          />
        }
      />
      <Route path="/servicios" element={<ServicesPage scrolled={scrolled} />} />
      <Route path="/productos" element={<ProductsPage scrolled={scrolled} />} />
      <Route path="/nosotros" element={<AboutPage scrolled={scrolled} />} />
    </Routes>
  )
}

export default App
