import React, {useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {message} from 'antd';
import '../css/LoginForm.css'


function SubscribeForm() {

        //declaration des etats
        const [etatNameInput, setetatNameInput] = useState('')
        const [etatEntrepriseInput, setetatEntrepriseInput] = useState('')
        const [profilePicture, setProfilePicture] = useState('https://res.cloudinary.com/dzqfghzga/image/upload/v1585144690/lztvy8m7chy0lkvbwnqr.png');
        const [listErrorsSignup, setErrorsSignup] = useState([])
        const [telNumber,setTelNumber] = useState('')
        const [asso,setAsso] = useState('')
        const [getbackuser,setGetbackuser] =useState('')
        
        
        
        var getLocalInfos = async () =>{
          var pseudoConnectedUser = await JSON.parse(localStorage.getItem('nom'))
          setGetbackuser(pseudoConnectedUser)
          console.log(pseudoConnectedUser)

            if(getbackuser === null || getbackuser === undefined){
              console.log('pseudoUserConnected:'+ getbackuser)
              return<Redirect to='/login'/>
          }
        }

        useEffect(()=>{
          var assoConnectedUser = JSON.parse(localStorage.getItem('asso'))
          setAsso(assoConnectedUser)
          getLocalInfos()  
           
      },[])


        

        //fonctionde lien entre back et front,j'envoi au back les values de mes etats
        var handleSubmitSignup = async () => {
        
        const data = await fetch('/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `nom=${etatNameInput}&prenom=${etatEntrepriseInput}&url=${profilePicture}&tel=${telNumber}&asso=${asso}`
        })
        
        const body = await data.json()
        
        console.log('body',body)
        console.log('error.length',body.error.length)
        message.success('Utilisateur enregistré');

        if(body.error.length === 0){
          return <Redirect to='/login'/>
        } else {
          setErrorsSignup(body.error)
        }

        if(body.result === true){
          return <Redirect to='/products'/>
        }
      }

    
      /*UPLOAD IMG FUNCTION */
      const handleUpload = async (e) => {
        const files = Array.from(e.target.files);
    
        const formData = new FormData();
    
        files.forEach((file, i) => {
          formData.append(i, file);
        });
    
        var rawResponse = await fetch(`/upload-picture`, {
          method: 'POST',
          body: formData
        });
    
        var response = await rawResponse.json();
    
        if (response.pictureURL !== undefined) {
          setProfilePicture(response.pictureURL);
          console.log(response.pictureURL)
        } else {
          alert('Upload failed');
        }
      };

     
      //Gestion des erreurs
      var tabErrorsSignup = listErrorsSignup.map((error,i) => {
        return(<p key={i} className='error-mess'>{error}</p>)
      })

      if (tabErrorsSignup.length === 0){
        tabErrorsSignup = listErrorsSignup.map((error,i) => {
            return(null)
    })
  }
  


    return (
        <div className='form-container'>
            <div className='form'>
                <img className='form-user-icon-uploaded' src={profilePicture} alt='profilepics'></img>
                <h2>AJOUTER UN ADHERENT</h2>
                <input onChange={(e) => setetatEntrepriseInput(e.target.value)} className='input-login' type='ets' name='user-ets' placeholder='Nom'></input>
                <input onChange={(e) => setetatNameInput(e.target.value)} className='input-login' type='text' name='user-name' placeholder='Prénom'></input>
                <input onChange={(e) => setTelNumber(e.target.value)} className='input-login' type='text' name='user-tel' placeholder='Telephone'></input>
                <div>	
                  <label for="file" className="label-file">Choisir une image</label>
                  <input type='file' id='file' className="input-file" name='picture' onChange={(e) => handleUpload(e)} />
                </div>
                {tabErrorsSignup}
                <button  onClick={() => handleSubmitSignup()} className='login-btn' type='submit'>AJOUTER</button>
                <p><span><Link to ='/products'>Retour</Link></span></p>
            </div>
        </div>
    )
}

export default SubscribeForm