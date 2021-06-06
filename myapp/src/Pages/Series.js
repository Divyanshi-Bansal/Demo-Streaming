import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderName from '../Navbar/HeaderName';
import Footer from '../Footer/Footer';

function Series(){
    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Series'/>
        <Footer/>
        </React.Fragment>
    );
}

export default Series;