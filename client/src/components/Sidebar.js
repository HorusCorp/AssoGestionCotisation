import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux';
import '../css/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCheck,faUserClock,faUsers,faUserShield} from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {



    const [showModal, setShowModal] = useState('1')
    const [loaded,setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    var handleStateChange = ()=>{
        props.handleClick()
        setShowModal('1')
    }
    var handleStateChange2 = ()=>{
        props.handleClick2()
        setShowModal('2')
    }
    var handleStateChange3 = ()=>{
        props.handleClick3()
        setShowModal('3')
    }
    var handleStateChange4 = ()=>{
        props.handleClick4()
        setShowModal('4')
    }
 


    

 if(showModal === '1'){
    return (
        <div className='sidebar-container'>
            <ul>
                 <li className='act' onClick={()=>handleStateChange()}>
                 <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>TOUS 
                </li>
                <div className='separator-side'></div>
                <li className='not-act' onClick={()=>handleStateChange2()}>
                    <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> A JOUR 
                </li>
                <div className='separator-side'></div>
                <li className='not-act' onClick={()=>handleStateChange3()}>
                    <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>A RELANCER 
                </li>
                <div className='separator-side'></div>
                <li className='not-act' onClick={()=>handleStateChange4()}>
                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>BUREAU
                </li>
                <div className='separator-side'></div>
                
            </ul>
        </div>
    )}

if(showModal === '2'){
    return (
        <div className='sidebar-container'>
            <ul>
                 <li className='not-act' onClick={()=>handleStateChange()}>
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>TOUS 
                </li>
                <div className='separator-side'></div>
                <li className='act' onClick={()=>handleStateChange2()}>
                    <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>A JOUR 
                </li>
                <div className='separator-side'></div>
                <li className='not-act' onClick={()=>handleStateChange3()}>
                    <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>A RELANCER 
                </li>
                <div className='separator-side'></div>
                <li className='not-act' onClick={()=>handleStateChange4()}>
                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>BUREAU
                </li>
                <div className='separator-side'></div>
                
            </ul>
        </div>
    )}

    if(showModal === '3'){
        return (
            <div className='sidebar-container'>
                <ul>
                     <li className='not-act' onClick={()=>handleStateChange()}>
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>TOUS 
                    </li>
                    <div className='separator-side'></div>
                    <li className='not-act' onClick={()=>handleStateChange2()}>
                        <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>A JOUR 
                    </li>
                    <div className='separator-side'></div>
                    <li className='act' onClick={()=>handleStateChange3()}>
                        <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>A RELANCER 
                    </li>
                    <div className='separator-side'></div>
                    <li className='not-act' onClick={()=>handleStateChange4()}>
                        <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>BUREAU
                    </li>
                    <div className='separator-side'></div>
                    
                </ul>
            </div>
        )}
        
        if(showModal === '4'){
            return (
                <div className='sidebar-container'>
                    <ul>
                         <li className='not-act' onClick={()=>handleStateChange()}>
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>TOUS 
                        </li>
                        <div className='separator-side'></div>
                        <li className='not-act' onClick={()=>handleStateChange2()}>
                            <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>A JOUR 
                        </li>
                        <div className='separator-side'></div>
                        <li className='not-act' onClick={()=>handleStateChange3()}>
                            <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>A RELANCER 
                        </li>
                        <div className='separator-side'></div>
                        <li className='act' onClick={()=>handleStateChange4()}>
                            <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>BUREAU
                        </li>
                        <div className='separator-side'></div>
                        
                        
                    </ul>
                </div>
            )} 

            if(showModal === '5'){
                return (
                    <div className='sidebar-container'>
                        
                        <ul>
                             <li className='not-act' onClick={()=>handleStateChange()}>
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>TOUS 
                            </li>
                            <div className='separator-side'></div>
                            <li className='not-act' onClick={()=>handleStateChange2()}>
                                <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>A JOUR 
                            </li>
                            <div className='separator-side'></div>
                            <li className='not-act' onClick={()=>handleStateChange3()}>
                                <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>A RELANCER 
                            </li>
                            <div className='separator-side'></div>
                            
                            
                        </ul>
                    </div>
                )} 
}

function mapDispatchToProps(dispatch) {
    return {
      
    handleClick : function(){
        dispatch( {type: 'tabschange1'} ) 
    },
    handleClick2: function(){
        dispatch( {type: 'tabschange2'} ) 
    },
    handleClick3: function(){
        dispatch( {type: 'tabschange3'} ) 
    },
    handleClick4: function(){
        dispatch( {type: 'tabschange4'} ) 
    },
    
    }
  }

  
  export default connect(
      null,
      mapDispatchToProps
  )(Sidebar);
  



  
   


