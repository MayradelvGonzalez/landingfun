import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='navegacion'><h1>MVG</h1>
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
</ul>
    </div>
  )
}

export default Header