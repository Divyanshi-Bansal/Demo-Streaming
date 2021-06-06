import React from 'react';
import '../styles/box.css';

function Box(props){
    return(
        <div className='box'>
            <h2 style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assests/images/clip.png')`, backgroundSize: "300px 500px" , backgroundRepeat:"no-repeat"} }className='textOnImage'>{props.name}</h2>
            <h3 className='title'>{props.title}</h3>
        </div>
    );
}

export default Box;