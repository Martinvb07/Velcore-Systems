import React from 'react'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
        <p className="cta-description">Conversemos sobre cómo podemos ayudarte a materializar tu idea y llevar tu negocio al siguiente nivel con tecnología de vanguardia</p>
        <button className="cta-button" onClick={() => alert('Iniciar Conversación')}>Iniciar Conversación</button>
      </div>
    </section>
  )
}

export default CTA
