import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderName from '../Navbar/HeaderName';
import Footer from '../Footer/Footer';

function movies(){
    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Movies'/>
        <Footer/>
        </React.Fragment>
    );
}

export default movies;