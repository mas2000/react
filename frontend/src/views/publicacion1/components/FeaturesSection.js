import React from 'react';

function FeaturesSection() {
  return (
    <section>
      <h2>Características Principales</h2>
      <div className="container">
        {}
        <i className="fas fa-car" style={{ color: '#4f4f4f' }}></i>
        <span className="text">m²</span>
        <i className="fas fa-expand-arrows-alt" style={{ color: '#4f4f4f' }}></i>
        <span className="text">m²</span>
        <i className="fas fa-bed" style={{ color: '#4f4f4f' }}></i>
        <span className="text">Dormitorios</span>
        <i className="fas fa-shower" style={{ color: '#4f4f4f' }}></i>
        <span className="text">Baños</span>
        <i className="fas fa-car" style={{ color: '#4f4f4f' }}></i>
        <span className="text">Coche</span>
      </div>
      <br />
      <hr />
      <br />

      {}
    </section>
  );
}

export default FeaturesSection;
