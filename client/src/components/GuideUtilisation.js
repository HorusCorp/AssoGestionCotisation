import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'

function Guideutilisation() {

    const [pageToShow,setPageToShow] = useState(1)

    if(pageToShow === 1){
    return (
        
            <div className='home-page'>

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

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        Commencer par nous contacter pour créer un compte.
                                        <div className='center-icon' onClick={()=>setPageToShow(2)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-1'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}
    else if(pageToShow === 2){
        return (
        
            <div className='home-page'>

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
                        <li>Utilisation</li>
                        <Link to='/feedback'><li>Retours utilisateurs</li></Link>
                        <Link to='/contact'><li>Contactez-nous</li></Link>
                    </ul>
                </div>
                </div>

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(1)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                            Choisissez une métode de contact.
                                        <div className='center-icon' onClick={()=>setPageToShow(3)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-2'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}

    else if(pageToShow === 3){
        return (
        
            <div className='home-page'>

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
                        <li>Utilisation</li>
                        <Link to='/feedback'><li>Retours utilisateurs</li></Link>
                        <Link to='/contact'><li>Contactez-nous</li></Link>
                    </ul>
                </div>
                </div>

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(2)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                        Ensuite connectez-vous avec vos identifiants.
                                        <div className='center-icon' onClick={()=>setPageToShow(4)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-3'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}

    else if(pageToShow === 4){
        return (
        
            <div className='home-page'>

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

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(3)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                            Et c'est parti ! Commencez par ajouter vos adhérents.
                                            
                                        <div className='center-icon' onClick={()=>setPageToShow(5)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                        
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-4'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}

    else if(pageToShow === 5){
        return (
        
            <div className='home-page'>

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

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(4)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                            Remplissez le formulaire et attendez que la photo s'affiche avant de valider,
                                            retournez ensuite sur votre interface grâce au boutton retour.
                                        <div className='center-icon' onClick={()=>setPageToShow(6)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                        
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-5'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}

    else if(pageToShow === 6){
        return (
        
            <div className='home-page'>

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

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(5)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                            Vous pouvez desormais valider sa cotisation ou supprimer l'adhérent si vous avez fait une erreur.
                                        <div className='center-icon' onClick={()=>setPageToShow(7)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                        
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-6'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}

    else if(pageToShow === 7){
        return (
        
            <div className='home-page'>

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

                

                <div className='fonctions-zone'>

                       
                            
                                <div className='functions-zone-one'>
                                    <div className='text-side'>
                                        <div className='center-icon' onClick={()=>setPageToShow(6)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                                            Et voila , à vous de jouer !                                        
                                    </div>
                                    <div className='img-side'>
                                        <div className='guide-img-7'></div>
                                    </div>
                                    
                                </div>
                                 
                </div>
            </div>
        
    )}
    
}

export default Guideutilisation