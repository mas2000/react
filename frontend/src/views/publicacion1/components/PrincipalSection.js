import React, { useState } from 'react';

function PrincipalSection() {
  const [showDescription, setShowDescription] = useState(false);

  function toggleText() {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  }

  return (
    <section id="principal">
      <div className="background-house">
      </div>
      <div className="containers">
        <div className="text">
          <strong>Estado</strong>
        </div>
        <div className="buttons">
          <button>Compartir</button>
          <button>
            <i className="fas fa-share"></i>
          </button>
          <button>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="place">
        <h1>Nombre del lugar</h1>
      </div>

      {}
    </section>
  );
}

export default PrincipalSection;
