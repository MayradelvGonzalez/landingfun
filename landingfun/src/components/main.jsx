import React from 'react';
import videoFondo from '../videoFondo.mp4';
import './style.css';

function Main() {
  return (
    <div>
        <div className="overlay"></div>
        <video src= { videoFondo } autoPlay loop muted/>
   <div className="contain">
    <h1>Bienvenidos</h1>
   </div>
    </div>

  )
}

export default Main