import React from 'react'
import {Link} from 'react-router-dom';


function HomeZone() {
    return (
        <div className='main-home-zone'>
                    

                    
        
                   <div className='brand-logo'><div className='logo-home-center'></div></div>
                   <div className='animated-desc'>Une interface pour la gestion de votre association
                   </div>
                   <div className='btn-banner-zone'>
                        <Link to='/guide'><div className='first-home-btn'>Commencer</div></Link>
                        <Link to='/fonctions' style={{color:"#666"}}><div className='second-home-btn'>Découvrir</div></Link>
                   </div>
                   
        
        </div>
    )
}

export default HomeZone
