import React from 'react'
import {Link} from 'react-router-dom';

function Feedback() {


    
    return (
        <div>
            <div className='home-top-navbar'>
        <div className='brand-login-container'>
            <h1 className='brand'>ATHENA.</h1>
            <button className='home-btn'><Link to='/login'>Se connecter</Link></button>
        </div>
        </div>

        <div className='home-navbar'>
        <div className='navbar-container'>
            <ul>
                <Link to='/'><li>AthenaLogo</li></Link>
                <Link to='/tarifs'><li>Tarifs</li></Link>
                <Link to='/fonctions'><li>Fonctionnalités</li></Link>
                <Link to='/guide'><li>Utilisation</li></Link>
                <Link to='/feedback'><li>Retours utilisateurs</li></Link>
                <Link to='/contact'><li>Contactez-nous</li></Link>
            </ul>
        </div>
        </div>


        </div>
    )
}

export default Feedback
