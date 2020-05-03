import React from 'react'
import {Link} from 'react-router-dom'


function Fonctions() {

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

                                <div className='functions-card-container'>
                                    <div className='functions-card'>
                                        <div className='services-card-img-1'></div>
                                        <h2>Ajouter ou Supprimer des adhérents</h2>
                                        <p> Vous pouvez ajouter,modifier ou supprimer un adhérents</p>
                                    </div>
                                    <div className='functions-card'>
                                        <div className='services-card-img-2'></div>
                                        <h2>Valider la cotisation</h2>
                                        <p>En un clic vous pouvez valider le status de paiement de vos adhérents pour voir qui est à jour et qui ne l'est pas,chaque année la cotisation est réinitialisée</p>
                                    </div>
                                    <div className='functions-card'>
                                        <div className='services-card-img-3'></div>
                                        <h2>Modifier les informations</h2>
                                        <p>Modifier les informations de contact de vos adhérents</p>
                                    </div>
                                    <div className='functions-card'>
                                        <div className='services-card-img-4'></div>
                                        <h2>Visualiser son nombre d'adhérents</h2>
                                        <p>Connaître directement le nombre d'adhérents total, à jour et non à jour de cotisation</p>
                                    </div>
                                    <div className='functions-card'>
                                        <div className='services-card-img-5'></div>
                                        <h2>Trouver les informations du bureau</h2>
                                        <p>trouver en un éclair les coordonnées des membres du bureau</p>
                                    </div>
                                    <div className='functions-card'>
                                        <div className='services-card-img-6'></div>
                                        <h2>Consulter ou créer un evenement</h2>
                                        <p>Ajouter ou consultercles informations d'un évenement lié à l'association</p>
                                    </div>
                                </div>
                                 
                </div>
            </div>
        
    )
   
    
}

export default Fonctions
