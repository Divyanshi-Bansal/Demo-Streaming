import React from 'react';
// import {appStore , microsoft , googlePlay} from '../images';
import '../styles/footer.css';


function Footer(){
    return(
        <div className='footer'>
            <ul className='ul'>
                <a className='a-tag'>Home</a>
                <a className='a-tag'>|</a>
                <a className='a-tag'>Terms and Conditions</a>
                <a className='a-tag'>|</a>
                <a className='a-tag'>Privacy Policy</a>
                <a className='a-tag'>|</a>
                <a className='a-tag'>Collection Statement</a>
                <a className='a-tag'>|</a>
                <a className='a-tag'>Help</a>
                <a className='a-tag'>|</a>
                <a className='a-tag'>Manage Account</a>
            </ul>
            <p className='copyright'>Copyright © 201<span style={{fontWeight:'lighter',fontSize:'23px'}}>6</span> DEMO Streaming. All Rights Reserved.</p>
            <div className='footer-links'>
                <div className='icons'>
                    <a href='#'><i className="fab fa-facebook-f"></i>F</a>
                    <a href='#'><i className="fab fa-twitter"></i>T</a>
                    <a href='#'><i className="fab fa-instagram"></i>I</a>
                </div>
                <div className='img-link'>
                    <img src= {`${process.env.PUBLIC_URL}/assets/images/appStore.png`} />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/microsoft.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/googlePlay.png`}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;