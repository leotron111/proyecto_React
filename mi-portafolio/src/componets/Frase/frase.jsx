import React from 'react';
import './Frase.css';

function Frase() {
  return (
    <section className="frase">
      <p className="frase-subtitulo">DESARROLLADOR WEB</p>
      <h1 className="frase-titulo">
        CONSTRUYENDO <br />
        <span>SOLUCIONES DIGITALES</span>
      </h1>
      <h2 className="frase-descripcion">
        <span>que transforman</span> <br />
        <span className="italic">ideas en</span> <span className="bold">realidad</span>
      </h2>
    </section>
  );
}

export default Frase;
