import React from 'react'
import {Link} from 'react-router'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li><Link to='conseils'>Conseils</Link></li>
                <li><Link to='coach'>Coach</Link></li>
                <li><Link to='temoignage'>Témoignage</Link></li>
                <li><Link to='programme'>Programme</Link></li>
            </ul>
            
        </nav>

    </header>
  )
}

export default Header