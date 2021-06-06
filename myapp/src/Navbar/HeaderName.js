import React from 'react';
import '../styles/headerName.css'

function headerName(props){
    return(
        <div className='header'>
            <h2 className='heading-1'>Popular {props.title}</h2>
        </div>
    );
}

export default headerName;