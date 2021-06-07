import React from 'react';
import HeaderName from '../Navbar/HeaderName';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Box from './Box';
import '../styles/home.css';
import {BrowserRouter , Switch , Route, Link} from 'react-router-dom';

function home(){
    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Title'/>
        <div className='boxes'>
            <Link to="/series" className='boxes-link'><Box name='Series' title='Popular Series' image={`${process.env.PUBLIC_URL}/assests/images/clip.jpg`}/></Link>
            <Link to="/movies" className='boxes-link'><Box name='Movies' title='Popular Movies' image={`${process.env.PUBLIC_URL}/assests/images/clip.jpg`}/></Link>
        </div>
        <Footer/>
        </React.Fragment>
    );
}

export default home;
