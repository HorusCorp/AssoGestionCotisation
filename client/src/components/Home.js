import React from 'react'
import {Link} from 'react-router-dom';

import '../App.css'
import HomeZone from './HomeZone';
import Sparkling from './whitebg.mp4'

function Home() {


    

    return (
        <div className='home-page'>
          

           <div className='home-top-navbar'>
             <div className='brand-login-container'>
                 <h1 className='brand'>AMETHYST.</h1>
                 <button className='home-btn'><Link to='/login'>Se connecter</Link></button>
             </div>
           </div>

           <div className='home-navbar'>
              <div className='navbar-container'>
                <ul>
                    <li><div className='small-logo'></div></li>
                    <Link to='/tarifs'><li>Tarifs</li></Link>
                    <Link to='/fonctions'><li>Fonctionnalités</li></Link>
                    <Link to='/guide'><li>Utilisation</li></Link>
                    <Link to='/feedback'><li>Retours utilisateurs</li></Link>
                    <Link to='/contact'><li>Contactez-nous</li></Link>
                </ul>
              </div>
           </div>

           <div className='grey-zone-under-nav'>
                  <span>La version 1.0 est maintenant disponible !</span>
            </div>

            {/* <video autoPlay loop muted style={
                          {
                          width:'100%',
                          height:'100%',
                          objectFit:'cover',
                          zIndex:1,
                          }
                      }>
                      <source src={Sparkling} type='video/mp4'></source>
                      
          </video> */}
          <HomeZone/>
                
                
            
        </div>
    )
}

export default Home
