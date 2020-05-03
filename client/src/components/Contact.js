import React from 'react'
import {Link} from 'react-router-dom';
import emailjs from 'emailjs-com';

import {message} from 'antd';

function Contact() {
    const success = () => {
        message.success('Email envoyé avec succès !');
      };
    
    const error = () => {
        message.error('Erreur lors de l\'envoi du message');
    };
    
      


    function sendEmail(e) {
    
        e.preventDefault();
        
        //recuperation des infos ('email services', 'email template' et ton 'user Id dans ton account')
        emailjs.sendForm('smtp_server', 'template_9z9W5xfD', e.target, 'user_7KR033XElGoFAFDzhs796')
        
          .then((result) => {
              
              console.log(result.text);
              handleSubmit()
              success()
          }, (error) => {
              console.log(error.text);
              error()
          });
      }


  const handleSubmit = () =>{
    document.getElementById('message').value = ''
    document.getElementById('email').value = ''
    document.getElementById('name').value = ''
  }

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
                    <span>Contactez - Nous</span>
                </div>
        <div className='price-card-container'>
            <div className='left-part-contact'>
            <div>Par téléphone au : </div>
            <div className='contact-tel'>06.28.33.20.17</div>
            </div>
            <div className='right-part-contact'>
                <form className="contact-form " onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label style={{display:'none'}}>Nom</label>
                    {/* dans ton email template tu dois mettre le name {{user_name}}... */}
                    <input id='name' type="text" name="user_name"    placeholder='Votre Nom'/>
                    <label style={{display:'none'}}>Email</label>
                    <input id='email' type="email" name="user_email" placeholder='Votre Email' />
                    <label style={{display:'none'}}>message</label>
                    <textarea id='message' name="message"  placeholder='Votre message ici ...' />
                    <input  className='submit-btn' type="submit" value="Envoyez" />
                </form>
            </div>
        </div>

    </div>
    )
}

export default Contact




 



 



  
  

