import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          {onNavigate ? (
            <div className="logo" onClick={() => onNavigate('inicio')}>
              <span className="logo-text">MV</span>
              <span className="logo-subtitle">SOFTWARE</span>
            </div>
          ) : (
            <Link className="logo" to="/">
              <span className="logo-text">MV</span>
              <span className="logo-subtitle">SOFTWARE</span>
            </Link>
          )}
          <p className="footer-description">Desarrollamos soluciones tecnológicas innovadoras para empresas que buscan crecer y optimizar sus procesos. Transformamos ideas en software profesional.</p>
        </div>
        <div className="footer-column">
          <h4>Servicios</h4>
          {onNavigate ? (
            <>
              <a onClick={() => onNavigate('servicios')}>Desarrollo Web</a>
              <a onClick={() => onNavigate('servicios')}>Apps Móviles</a>
              <a onClick={() => onNavigate('servicios')}>Sistemas SaaS</a>
              <a onClick={() => onNavigate('servicios')}>Consultoría</a>
            </>
          ) : (
            <>
              <Link to="/servicios">Desarrollo Web</Link>
              <Link to="/servicios">Apps Móviles</Link>
              <Link to="/servicios">Sistemas SaaS</Link>
              <Link to="/servicios">Consultoría</Link>
            </>
          )}
        </div>
        <div className="footer-column">
          <h4>Productos</h4>
          {onNavigate ? (
            <>
              <a onClick={() => onNavigate('productos')}>Mesoft</a>
              <a onClick={() => onNavigate('productos')}>Próximamente</a>
            </>
          ) : (
            <>
              <Link to="/productos">Mesoft</Link>
              <Link to="/productos">Próximamente</Link>
            </>
          )}
          <a onClick={() => alert('Contactar')}>Desarrollo a Medida</a>
        </div>
        <div className="footer-column">
          <h4>Empresa</h4>
          {onNavigate ? (
            <a onClick={() => onNavigate('nosotros')}>Sobre Nosotros</a>
          ) : (
            <Link to="/nosotros">Sobre Nosotros</Link>
          )}
          <a onClick={() => alert('Contactar')}>Contacto</a>
          <a onClick={() => alert('Ver Portafolio')}>Portafolio</a>
          <a onClick={() => alert('Ver Blog')}>Blog</a>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2025 MV Software - Desarrollado por Martin Velásquez | Colombia</p></div>
    </footer>
  )
}

export default Footer
