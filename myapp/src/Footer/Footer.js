import React from 'react';
import '../styles/footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className='footer'>
            <ul className='ul'>
                <a href='#' className='a-tag'>Home</a>
                <a href='#' className='a-tag'>|</a>
                <a href='#' className='a-tag'>Terms and Conditions</a>
                <a href='#' className='a-tag'>|</a>
                <a href='#' className='a-tag'>Privacy Policy</a>
                <a href='#' className='a-tag'>|</a>
                <a href='#' className='a-tag'>Collection Statement</a>
                <a href='#' className='a-tag'>|</a>
                <a href='#' className='a-tag'>Help</a>
                <a href='#' className='a-tag'>|</a>
                <a href='#' className='a-tag'>Manage Account</a>
            </ul>
            <p className='copyright'>Copyright © 201<span style={{fontWeight:'lighter',fontSize:'23px'}}>6</span> DEMO Streaming. All Rights Reserved.</p>
            <div className='footer-links'>
                <div className='icons'>
                </div>
                <div className='img-link'>
                    <img className='image' src= {`${process.env.PUBLIC_URL}/assests/images/appStore.png`} />
                    <img className='image' src={`${process.env.PUBLIC_URL}/assests/images/microsoft.png`}/>
                    <img className='image' src={`${process.env.PUBLIC_URL}/assests/images/googlePlay.png`}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;