import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Login.css';

function Login() {
    return (
<Router>
    <Link to={'/login'}>
        <div className='login_button'>
            <h1>@NashTheCoder</h1>
        </div>
    </Link>
</Router>
    
            
    )
}

export default Login
