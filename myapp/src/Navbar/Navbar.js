import React from 'react';
import ReactDom from 'react-dom';
import '../styles/navbar.css';


function Navbar(){
    return (
        <div className='main'>
            <h1 className='heading'>DEMO Streaming</h1>
            <div className='link'>
            <a className='login'  href='#'>Login</a>
            <button className='btn'>Start your free trial</button>
            </div>
        </div>
    );
}

export default Navbar;