import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

function Tarifs() {
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

                <div className='text-side'>
                    <span>Nos Formules</span>
                </div>
                <div className='price-card-container'>
                    <div className='price-card'>
                        <div className='name-formule'>Formule De Base</div>
                        <div className='detail-formule'>
                            <div className='price-detail'>
                                <h2>10€<span>/mois</span></h2> 
                                
                            </div>
                            <div>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>1 compte administrateur</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Ajout d'adhérents</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Supression d'adhérents</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Adhérents illimités</p>
                            </div>
                        </div>
                        <div className='price-formule'>
                            <div>Soit un virement annuel de 120 euros</div>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='name-formule'>Formule Prenium</div>
                        <div className='detail-formule2'>
                            <div className='price-detail2'>
                                <h2>15€<span>/mois</span></h2> 
                                
                            </div>
                            <div>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Jusqu'à 3 comptes administrateurs</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Ajout d'adhérents</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Supression d'adhérents</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Adhérents illimités</p>
                                <p><FontAwesomeIcon style={{width:15,height:15}} icon={faCheck}></FontAwesomeIcon>Assistance téléphonique</p>
                            </div>
                        </div>
                        <div className='price-formule'>
                            <div>Ou un virement annuel de 165 euros (soit 1 mois offert)</div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Tarifs
