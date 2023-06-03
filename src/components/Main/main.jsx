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
        <p className='informacion'>Soy Mayra, desarrolladora FulStack MERN</p>
      </div>
    </div>

  )
}

export default Main