// import React,{useState,useEffect} from 'react'

// import '../css/Cards.css'

// function BureauMember(props) {

//     const [isLoading,setisLoading] = useState(true)
//     const [aderantsList,setaderantsList]= useState([])
//     const [membresDuBureau,setMembresBureau]= useState([])

//     useEffect(() => {
        
//             const getList= async()=>{
                
//                 const List = await fetch(`/getList`)
//                 let response = await List.json()
//                 console.log('response:'+response)
//                 setaderantsList(response)
                
//            }
//                 getList()
//                 .then(setisLoading(false));
//             },[])
    
//             useEffect(() => {
//                 clickToRefresh()
//             },[membresDuBureau])

            

            

           
//             var clickToRefresh = () =>{
        
//                 if(props.tabsToDisplay === '4'){
//                     const basicList = aderantsList
//                     const filteredByAssoList =  basicList.filter(user => user.asso === assoConnectedUser)
//                     setMembresBureau(filteredByAssoList.filter(user => user.admin === true))
//                     console.log(membresDuBureau)
//                 }
//             }

//             var assoConnectedUser = JSON.parse(localStorage.getItem('asso'))

//             const membresBureauToDisplay = membresDuBureau.map((membreBureau, i) =>
//                 <div className='box'>
//                     <div className='boxImg'>
//                         <img src={membreBureau[i].url} alt=''></img></div>
//                     <div className='content'>
//                         <h2>{membreBureau[i].nom + ' ' + membreBureau[i].prenom}<br></br><span>Tresorier</span></h2> 
//                     </div>
//                 </div>);

//     return (
//         <div style={{width:'100%'}}>
//             <div className='bureau-banner'>Membres du Bureau</div>
//             <div className='body-card'> 
//                {membresBureauToDisplay}
//             </div>
//         </div>
//     )
// }

// export default BureauMember
