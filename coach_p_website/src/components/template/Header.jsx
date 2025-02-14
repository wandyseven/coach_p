import React from 'react';
import {Link} from 'react-router';



const Header = () => {
  return (
    <header>
        <nav className='navbar navbar-expand-lg mx-2 container justify-content-between'>
        <li className='nav-item navbar-nav'><Link to='/' className='nav-link'>COACH P</Link></li>
            <ul className='navbar-nav  mx-4 mb-2   '>
                <li className='nav-item'><Link to='/' className='nav-link'>Accueil</Link></li>
                <li className='nav-item'><Link to='services' className='nav-link'>Services</Link></li>
                <li className='nav-item'><Link to='conseils' className='nav-link'>Conseils</Link></li>
                <li className='nav-item'><Link to='coach' className='nav-link'>Coach</Link></li>
                <li className='nav-item'><Link to='temoignage' className='nav-link'>Témoignage</Link></li>
                <li className='nav-item'><Link to='programme'className='nav-link'>Programme</Link></li>
            </ul>
            <div className='d-flex align-items-center'> 
              <Link to='signin' className='nav-link'>Log in</Link>
              <Link to='connexion/user'><button className='rounded-pill mx-2'>Sign in</button> </Link>
            </div>
        </nav>

    </header>
  )
}

export default Header