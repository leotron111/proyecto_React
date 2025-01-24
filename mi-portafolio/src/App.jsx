import React, { useEffect } from 'react';
import './App.css';

import Contactame from './componets/Contactame/Contactame';
import Frase from './componets/Frase/frase';
import Header from './componets/Header/Header';
import Proyectos from './componets/Proyectos/Proyectos';
import SobreMi from './componets/SobreMi/SobreMi';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });  // Detecta cuando al menos el 50% de la sección es visible

    const sections = document.querySelectorAll('.sobre-mi');
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <>
      <Header  />
      <div id="home">
        <Frase />
      </div>
      <div id="sobre-mi">
        <SobreMi />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id='contacto'>
        <Contactame></Contactame>
      </div>
    </>
  );
}

export default App;
