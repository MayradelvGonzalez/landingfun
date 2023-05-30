import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='navegacion'>
      <div> <h1>MVG</h1></div>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul></div>
    </div>
  )
}

export default Header