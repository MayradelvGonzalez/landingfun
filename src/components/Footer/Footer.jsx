import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
      <h3>📩</h3><p>comunicate conmigo!</p>


<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

<a href="mailto:mayradelvallegonzalez@gmail.com" target='_BLANK'><u>Enviar email</u></a>

</button>
    </div>


  )
}

export default Footer