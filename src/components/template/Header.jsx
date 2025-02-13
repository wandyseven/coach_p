import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='apropos'>À propos</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li><Link to='conseil'>Conseil</Link></li>
                <li><Link to='temoignage'>Témoignage</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header