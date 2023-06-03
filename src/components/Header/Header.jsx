import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './header.css';
import  avatar from '../../assets/avatar.png';
// import Footer from '../Footer/Footer';

function Header() {
  return (
    <div className='navegacion'>

{/* <div className='avatar'> */}
  <img src={ avatar } alt="avatar" className='avatar' />
  {/* </div> */}
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Footer/Footer.jsx">Contacto</a>
          </li>
        </ul></div>
        <div className="Aplicacion">
    
    </div>
    </div>

  )
}

export default Header