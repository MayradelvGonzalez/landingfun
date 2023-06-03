import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './header.css';
import avatar from '../../assets/avatar.png';
import { Link, NavLink } from 'react-router-dom';
// import Footer from '../Footer/Footer';

function Header() {
  return (
    <div className='navegacion'>
      <img src={avatar} alt="avatar" className='avatar' />
      <div>   

        {/* <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Footer/Footer.jsx" id='enlace'>Contacto</a>
          </li>
        </ul> */}

  
  
      </div>
    </div>

  )
}

export default Header