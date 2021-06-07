import React from 'react';
import '../styles/headerName.css'

function headerName(props){
    return(
        <div className='header'>
            <h3 className='heading-1'>Popular {props.title}</h3>
        </div>
    );
}

export default headerName;