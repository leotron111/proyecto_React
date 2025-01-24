import React from "react";
import ahorcadoImg from '../../assets/ahorcado.jpg';
import blackJackImg from '../../assets/black_jack.jpg';
import "./Proyectos.css";

function Proyectos() {
  return (
    <section className="proyectos">
      <p className="proyectos-subtitulo">MIS PROYECTOS</p>
      <h1 className="proyectos-titulo">
        EXPLORA <br />
        <span>MIS TRABAJOS</span>
      </h1>

      {/* Primer Proyecto - Black Jack pegado a la izquierda */}
      <a href="https://leotron111.github.io/black-yack/" 
         className="proyecto-container izquierda" 
         target="_blank" 
         rel="noopener noreferrer">
        <h3 className="proyecto-titulo-centrado">Black Jack</h3>
        <div className="proyecto-contenido">
          <div className="proyecto-card">
            <img src={blackJackImg} alt="Black Jack" className="proyecto-imagen" />
          </div>
          <div className="proyecto-card">
            <p className="proyecto-descripcion">
              Black Jack es un emocionante juego de cartas donde puedes probar tu suerte
              y estrategia para ganar al crupier.
            </p>
          </div>
        </div>
      </a>

      {/* Segundo Proyecto - Ahorcado pegado a la derecha */}
      <a href="https://leotron111.github.io/ahorcado/"
         className="proyecto-container derecha"
         target="_blank"
         rel="noopener noreferrer">
        <h3 className="proyecto-titulo-centrado">Ahorcado</h3>
        <div className="proyecto-contenido reverse">
          <div className="proyecto-card">
            <p className="proyecto-descripcion">
              Ahorcado es un clásico juego de adivinanza de palabras donde puedes poner a prueba 
              tu vocabulario y habilidades de deducción.
            </p>
          </div>
          <div className="proyecto-card">
            <img src={ahorcadoImg} alt="Ahorcado" className="proyecto-imagen" />
          </div>
        </div>
      </a>
    </section>
  );
}

export default Proyectos;
