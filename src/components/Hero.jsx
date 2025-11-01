import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ onNavigate, stats }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">✨ Soluciones Tecnológicas Innovadoras</div>
        <h1 className="hero-title">Transformamos Ideas en<br /><span className="highlight">Software Profesional</span></h1>
        <p className="hero-description">Desarrollamos soluciones tecnológicas a medida para empresas que buscan innovar y optimizar sus procesos. Desde sistemas SaaS hasta aplicaciones móviles, creamos software que impulsa tu negocio.</p>
        <div className="hero-buttons">
          {onNavigate ? (
            <button className="btn btn-primary" onClick={() => onNavigate('productos')}>Ver Proyectos</button>
          ) : (
            <Link className="btn btn-primary" to="/productos">Ver Proyectos</Link>
          )}
          <button className="btn btn-secondary" onClick={() => alert('Solicitar Cotización')}>Solicitar Cotización</button>
        </div>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
