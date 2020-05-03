import React from 'react'

import '../css/ProductList.css'
import Navbar from './Navbar'
import Cards from './Cards'
import Sidebar from './Sidebar'


function ProductList(props) {
  
    
    
    return (
        <div>
        <Navbar/> 
            <div className='main-page'>
                <div className='side-nav'>
                    <Sidebar/>
                </div>
                <div className='products-container'>
                    <Cards/>
                </div>
            </div>
        </div>
        
    )
}


export default ProductList
