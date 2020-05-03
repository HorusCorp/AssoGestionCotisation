import React from 'react'
import {Link} from 'react-router-dom';

import '../css/page404.css'

function Page404() {
    return (
        <div className='page404'>
            <h3>PAGE 404</h3>
            <p>Page not found</p>
            <button className='page404-btn' type='submit'><Link to='/'>return to home page</Link></button>
            
        </div>
    )
}

export default Page404
