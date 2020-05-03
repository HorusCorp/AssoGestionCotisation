import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt,faUserPlus} from '@fortawesome/free-solid-svg-icons'

import '../css/Navbar.css'

function Navbar() {

    
    
    var pseudoConnectedUser = JSON.parse(localStorage.getItem('nom'))
   
    
   
    return (
        <div className='navbar'>
            <div className='nav-gauche'>
                <h2>Athena.</h2>
            </div>

            <div className='nav-droite'>
                 <Link to='/subscribe'><div className='add-member'><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>Ajouter un membre</div></Link>
            <div className='username'>{pseudoConnectedUser}</div>
                <Link to='/login'><button onClick={localStorage.removeItem('nom')}><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>Logout</button></Link>
            </div>
        </div>
    )
}

export default Navbar
