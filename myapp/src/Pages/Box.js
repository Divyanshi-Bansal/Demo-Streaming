import React from 'react';
import '../styles/box.css';

function Box(props){
    return(
        <div className='box'>
            <h2 style={{backgroundImage:`url(${props.image})`, backgroundSize: "260px 270px" , backgroundRepeat:"no-repeat"} }className='textOnImage'>{props.name}</h2>
            <h3 className='title'>{props.title}</h3>
        </div>
    );
}

export default Box;