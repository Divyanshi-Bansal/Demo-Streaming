import React from 'react';
import HeaderName from '../Navbar/HeaderName';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Box from './Box';
import '../styles/home.css';

function home(){
    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Title'/>
        <div className='boxes'>
            <Box name='Series' title='Popular Series'/>
            <Box name='Movies' title='Popular Movies'/>
        </div>
        <Footer/>
        </React.Fragment>
    );
}

export default home;