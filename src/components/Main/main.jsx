import React from 'react';
import videoFondo from '../../assets/videoFondo.mp4';
import './main.css';

function Main() {
  return (
    <div className='clasemain'>
      <div className="overlay"></div>
      <video src={videoFondo} autoPlay loop muted />
      <div className="contain">
        <h1>Bienvenidos</h1>
        <div className='informacion'>
          <p>Hola! 👋🏽 Soy Mayra
          </p>
          <p className='texto'>Desarrolladora FullStack MERN</p>

        </div>
        <div>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            <a href="https://github.com/MayradelvGonzalez" target='_BLANK' id='enlace'><u>Proyectos</u></a>

          </button></div>
      </div>
    </div>

  )
}

export default Main