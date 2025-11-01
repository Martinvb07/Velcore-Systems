import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ scrolled, activeSection, onNavigate }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
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
        <div className="nav-menu">
          {onNavigate ? (
            <>
              <span className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={() => onNavigate('inicio')}>Inicio</span>
              <span className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`} onClick={() => onNavigate('servicios')}>Servicios</span>
              <span className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`} onClick={() => onNavigate('productos')}>Productos</span>
              <span className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`} onClick={() => onNavigate('nosotros')}>Nosotros</span>
            </>
          ) : (
            <>
              <Link className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} to="/">Inicio</Link>
              <Link className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`} to="/servicios">Servicios</Link>
              <Link className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`} to="/productos">Productos</Link>
              <Link className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`} to="/nosotros">Nosotros</Link>
            </>
          )}
        </div>
        <button className="btn btn-primary" onClick={() => alert('Funcionalidad: Contactar\n\nEn producción abriría un formulario de contacto')}>Contactar</button>
      </div>
    </header>
  )
}

export default Header
