import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../css/LoginForm.css'

function LoginForm() {

        const [etatNameLogin, setetatNameLogin] = useState('')
        const [etatPasswordLogin, setetatPasswordLogin] = useState('')

        const [userExists, setUserExists] = useState()
        const [listErrorsSignin, setErrorsSignin] = useState([])

        var handleSubmitLogin = async () => {

            const dataForLogin = await fetch('/signin', {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: `nom=${etatNameLogin}&password=${etatPasswordLogin}`
            })

            const body = await dataForLogin.json()
            console.log(body)

            if(body.result === true){
                setUserExists(true)
                localStorage.setItem('nom',JSON.stringify(body.user.nom))
                localStorage.setItem('asso',JSON.stringify(body.user.asso))
                } else {
                setErrorsSignin(body.error)
                }
            }
            if(userExists){
                return <Redirect to='/products'/>
              }
            if(userExists === false){
                return <Redirect to='/login'/>
              }

            var tabErrorsSignin = listErrorsSignin.map((error,i) => {
                return(<p className='error-mess' key={i}>{error}</p>)
            });

            if (tabErrorsSignin.length === 0){
                tabErrorsSignin = listErrorsSignin.map((error,i) => {
                    return(null)
            })
        }

          
        
    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-user-icon'></div>
                <h2>LOGIN</h2>
                <input onChange={(e) => setetatNameLogin(e.target.value)} className='input-login' type='text' name='pseudo' placeholder='Nom Utilisateur'></input>
                <input onChange={(e) => setetatPasswordLogin(e.target.value)} className='input-login' type='password' name='user-psd' placeholder='Mot de passe'></input>
                {tabErrorsSignin}
                <button onClick={() => handleSubmitLogin()} className='login-btn' type='submit'>LOGIN</button>
                <p>Contactez le créateur du site si vous n'avez pas encore de compte</p>
            </div>
        </div>
    )
}

export default LoginForm
