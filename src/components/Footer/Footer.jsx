import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
      <h3>📩</h3><p id='enlace'>comunicate conmigo!</p>


<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

<a href="mailto:mayradelvallegonzalez@gmail.com" target='_BLANK' className='enlace'><u>Email</u></a>

</button>
<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

<a href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/" target='_BLANK' className='enlace'><u>Linkedin</u></a>

</button>
    </div>


  )
}

export default Footer