import React from 'react';
import miFoto from '../../assets/mi_foto.jpg';
import './SobreMi.css';

function SobreMi() {
  return (
    <section className="sobre-mi">
      <p className="sobre-mi-subtitulo">SOBRE MÍ</p>
      <h1 className="sobre-mi-titulo">
        CONÓCEME <br />
        <span>MÁS A FONDO</span>
      </h1>

      <div className="sobre-mi-container">
        <div className="sobre-mi-contenido">
          <div className="sobre-mi-card">
            <img src={miFoto} alt="Mi Foto" className="sobre-mi-imagen" />
          </div>
          <div className="sobre-mi-card">
            <p className="sobre-mi-descripcion">
              Soy un <strong>desarrollador web</strong> especializado en la creación de{' '}
              <strong>sitios web de alta calidad</strong> y aplicaciones modernas.
            </p>
            <p className="sobre-mi-descripcion">
              Con experiencia en tecnologías como <strong>React, Node.js y más</strong>, 
              ayudo a las empresas a transformar ideas en{' '}
              <strong>soluciones digitales impactantes</strong>.
            </p>
          </div>
          <div className="sobre-mi-card">
            <p className="sobre-mi-descripcion">
              Soy un <strong>desarrollador web</strong> con un enfoque en aplicaciones modernas y sitios web dinámicos.
            </p>
            <p className="sobre-mi-descripcion">
              Experto en herramientas como <strong>React y Node.js</strong>, contribuyo al éxito digital transformando ideas en soluciones impactantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
