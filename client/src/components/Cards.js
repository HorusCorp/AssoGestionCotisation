import React, {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes,faCheck,faPhone} from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';
import ReactLoading from 'react-loading';
import '../css/Cards.css'

import {message,Tooltip} from 'antd';



function Cards(props) {

const [isLoading,setisLoading] = useState(true)
const [aderantsList,setaderantsList]= useState([])
const [aderantToDisplay,setaderantToDisplay] = useState([])
const [reload,setReload]= useState(false)
// STATE  de la pagination
const [targetPage, setTargetPage] = useState(1);
const [nbPage, setNbPage] = useState(0);
const [count,setCount] = useState(0);

//pour composant ant message
const success = () => {
    message.success('Utilisateur supprimé avec succès !');
  };

  const successPayent = () => {
    message.success('Paiement validé !');
  };









//AU CHARGEMENT DU COMPOSANT
useEffect(() => {
    setTimeout(() => {
        const getList= async()=>{
            
            const List = await fetch(`/getList`)
            let response = await List.json()
            console.log('response:'+response)
            setaderantsList(response)
            setaderantToDisplay(response)
       }
       
            getList()
            .then(setisLoading(false));
        },800)
        },[])

        
//QUAND reload CHANGE 
        useEffect(() => {
            const getList= async()=>{
            
                const List = await fetch(`/getList`)
                let response = await List.json()
                console.log('response:'+response)
                setaderantsList(response)
            }
            getList()
            .then(setReload(false))
            clickToRefresh()            
        },[reload])

//POUR ACTUALISER LA LISTE SI MODIF OU AJOUT
useEffect(()=>{
    clickToRefresh()
    
},[props.tabsToDisplay,aderantsList])
    

   

    var assoConnectedUser = JSON.parse(localStorage.getItem('asso'))

    var clickToRefresh = () =>{
        
        if(props.tabsToDisplay === '1'){
            const basicList = aderantsList
            const filteredByAssoList =  basicList.filter(user => user.asso === assoConnectedUser)
            setaderantToDisplay(filteredByAssoList)
            setCount(filteredByAssoList.length)  
        }

        else if(props.tabsToDisplay === '2'){
            const basicList = aderantsList
            const filteredByAssoList =  basicList.filter(user => user.asso === assoConnectedUser)
            setaderantToDisplay(filteredByAssoList.filter(user => (user.cotisation === true && ((nowDate - user.dateToUse) < 31536000000)) ))
            setCount(filteredByAssoList.filter(user => user.cotisation === true ).length)
        }

        else if(props.tabsToDisplay === '3'){
            const basicList = aderantsList
            const filteredByAssoList =  basicList.filter(user => user.asso === assoConnectedUser)
            setaderantToDisplay(filteredByAssoList.filter(user => (user.cotisation === false || (user.cotisation === true && ((nowDate - user.dateToUse) > 31536000000)) )))
            setCount(filteredByAssoList.filter(user => user.cotisation === false).length)    
        }

        else if(props.tabsToDisplay === '4'){
            const basicList = aderantsList
            const filteredByAssoList =  basicList.filter(user => user.asso === assoConnectedUser)
            setaderantToDisplay(filteredByAssoList.filter(user => user.bureau === true))
            setCount(filteredByAssoList.filter(user => user.bureau === true).length)  
        }  
    }


    // MODIFIER LE STATUS DE LA COTISATION
    var clickToUpdate = async(adherantToUpdate)=>{
            
            var d = new Date();
            var nowDate = d.getTime();
            console.log('nowDate / dateToUse : ' + nowDate)

            var date = d.getDate();
            var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
            var year = d.getFullYear();
            
            var dateUpdate = date + "/" + month + "/" + year;
            console.log('dateUpdate : ' + dateUpdate);

            const Update = await fetch(`/updateAderant`,{
                method: 'PUT',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `id=${adherantToUpdate}&date=${dateUpdate}&dateToUse=${nowDate}`
            })
            let Rawresponse = await Update.json()
            console.log('response update cotisation:'+ Rawresponse)
            successPayent()
            setReload(true)
        }
        


        //MODIFIER LE NUM DE TEL D'UN ADHERENT
        var clickToUpdatePhone = async(adherantToUpdate)=>{

            // var inputPhone = req.body.phone

            const Update = await fetch(`/updateAderantPhone`,{
                method: 'PUT',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `id=${adherantToUpdate}&phone=${''}`
            })
            let Rawresponse = await Update.json()
            console.log('response update phone:'+ Rawresponse)
            setReload(true)
        } 
        



        //SUPPRIMER UN ADHERENT
        var clickToDelete = async(adherantToSupress)=>{
              
                
                    const Delete = await fetch(`/deleteAderant/${adherantToSupress}`,{
                        method: 'DELETE',
                    })
                    let Rawresponse = await Delete.json()
                    console.log('response delete adhérent:'+ Rawresponse)
                    setReload(true)
                    success()
                   
               
        }  

        








  //  PAGINATION
  var copyAllAderents = [...aderantToDisplay]

  if (copyAllAderents.length > 8) {
    var nbDePage = Math.ceil(copyAllAderents.length/8)
    if (nbDePage !== nbPage) {
      setNbPage(nbDePage)
    }
  }else {
     nbDePage = 1
    if (nbDePage !== nbPage) {
      setNbPage(nbDePage)
    }
  }

  var paginationTableau = copyAllAderents.splice((targetPage-1)*8,8)

  var tableMap = [];
  for (var i = 1; i <= nbDePage; i++) {
    tableMap.push(i)
  }

  //BOUTTONS DE  PAGINATION
  var paginationLi;
  paginationLi = tableMap.map(p => {
    return <li  className={p === targetPage?"pagination-btn-active":"pagination-btn"} onClick={()=>{
      setTargetPage(p)

    }}>{p}</li>
  })

  var paginationFirst = <li className="pagination-btn" onClick={()=>{setTargetPage(1)}}> {"<<"} </li>
  var paginationPrev = <li className="pagination-btn" onClick={()=>{setTargetPage(targetPage-1)}}> {"<"} </li>
  var paginationSui = <li className="pagination-btn" onClick={()=>{setTargetPage(targetPage+1)}}> {">"} </li>
  var paginationLast = <li className="pagination-btn" onClick={()=>{setTargetPage(paginationLi.length)}}> {">>"} </li>








//MAP DATABASE
//one hours ms = 3600000
//one year ms = 31536000000

var nowTime = new Date();
var nowDate = nowTime.getTime();
console.log('nowDateAfterUseEffect : ' + nowDate)

const aderantToDisplayList = paginationTableau.map((aderant, i) =>{

    

// var showInput = 0 ;

// var showInputFunc = () =>{
//     showInput = 1
//     setTimeout(()=>{
       
//         if(showInput === 1){
//             return<input type='text' placeholder='Entrez le nouveau numéro'></input>
            
//         }else{
//             return<div></div>
//         }
                       
//     },500)
//     clickToRefresh()
    
// }
    
    if((nowDate - aderant.dateToUse) < 31536000000){
        var isEven = i%2

            
                    return<div className='card' key={aderant._id} style={{backgroundColor:isEven === 0?'#FAFAFA':'#FFF'}}>
                    <div className='user-id'>
                        <img src={aderant.url} alt='avatar-1' className='avatar-user'></img>
                    </div>
                    <div className='user-name'>{aderant.nom}</div>
                    <div className='user-prenom'>{aderant.prenom}</div>
                    <div className='user-tel'>{aderant.tel}</div>
                    <div className='cotisations-col' style={{color:aderant.cotisation?'#58B848':'#9070f7',fontWeight:'bold'}}>{aderant.cotisation?'A JOUR':'A RELANCER'}</div>
                    <div className='user-cot-date'>{aderant.datepayment?aderant.datepayment:'-'}</div>
                    <div className='user-action'>
                        <Tooltip title="Supprimer un adhérent"><div className='suprimer' onClick={()=>clickToDelete(aderant._id)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></div></Tooltip>
                        <Tooltip title="Modifier le numéro"><div className='telnb'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div></Tooltip>
                        <Tooltip title="Cliquez ici pour valider le paiement"><div className='valider' style={{display:aderant.cotisation?'none':'block'}} onClick={()=>clickToUpdate(aderant._id)}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></div></Tooltip>
                    </div>
            </div>}else{
            return<div className='card' key={aderant._id} style={{backgroundColor:isEven === 0?'#FAFAFA':'#FFF'}}>
                    <div className='user-id'>
                        <img src={aderant.url} alt='avatar-1' className='avatar-user'></img>
                    </div>
                    <div className='user-name'>{aderant.nom}</div>
                    <div className='user-prenom'>{aderant.prenom}</div>
                    <div className='user-tel'>{aderant.tel}</div>
                    <div className='cotisations-col' style={{color:'#ED4745',fontWeight:'bold'}}>A RELANCER</div>
                    <div className='user-cot-date'>{aderant.datepayment?aderant.datepayment:'-'}</div>
                    <div className='user-action'>
                        <Tooltip title="Supprimer un adhérent"><div className='suprimer' onClick={()=>clickToDelete(aderant._id)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></div></Tooltip> 
                        <Tooltip title="Modifier le numéro"><div className='telnb'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div></Tooltip>                       
                        <Tooltip title="Valider le paiement"><div className='valider'  onClick={()=>clickToUpdate(aderant._id)}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></div></Tooltip> 
                    </div>
            </div>}
    }  
);
    






//RENDU
    return (
        isLoading?(<div className='cards'>

            {/* HEADER TABLEAU */}
                        <div className='card-grey'>
                            <div className='user-id'>#</div>
                            <div className='user-name'> NOM</div>
                            <div className='user-prenom'>PRENOM</div>
                            <div className='user-tel'>TELEPHONE</div>
                            <div className='cotisations-col'>COTISATION</div>
                            <div className='user-cot-date'>DATE PAYMENT</div>
                            <div className='user-action'>ACTIONS</div>
                        </div>
                        <div style={{width:'100%',height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ReactLoading type={"spinningBubbles"} color={"#727ef5"} /></div>
            </div>
        ) : (<div className='cards'>

{/* HEADER TABLEAU */}  <div className='label'>{count +' '}résultats</div>
                        <div className='card-grey'>
                            <div className='user-id'>#</div>
                            <div className='user-name'> NOM</div>
                            <div className='user-prenom'>PRENOM</div>
                            <div className='user-tel'>TELEPHONE</div>
                            <div className='cotisations-col'>COTISATION</div>
                            <div className='user-cot-date'>DATE PAYMENT</div>
                            <div className='user-action'>ACTIONS</div>
                        </div>

{/* LISTE ADHERENTS */} 

                        <div style={{minHeight:410}}>{aderantToDisplayList}</div>
                       
                        <div className='pagination-zone'>
                        
                                <ul>
                                {targetPage === 1 ? "" : paginationFirst}
                                {targetPage === 1 ? "" : paginationPrev}
                                {paginationLi}
                                {nbPage === targetPage ? "" : paginationSui}
                                {nbPage === targetPage ? "" : paginationLast}
                                </ul>
                        </div>
                
        </div>
    ) )
}


//REDUX
function mapStateToProps(state) {
    return { tabsToDisplay: state.newTabs }
  }
    
  export default connect(
     mapStateToProps, 
     null
  )(Cards);
