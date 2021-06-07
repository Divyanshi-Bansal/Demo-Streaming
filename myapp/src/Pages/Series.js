import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderName from '../Navbar/HeaderName';
import Footer from '../Footer/Footer';
import Box from "../Pages/Box";
import '../styles/home.css';

function Series(){
    const [series,setSeries]=useState([]);
    const getSeries=()=>{
        fetch('../feed/morr-sample.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setSeries(myJson)
        });
    }
    useEffect(()=>{
        getSeries()
    },[])

    const entries = series.entries;
    const filtered = Object.values(entries).filter(function(entries) { return entries.releaseYear >= '2010' && entries.programType.includes("series")});

    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Series'/>
        <div className='boxes'>
            {filtered.length>0?(filtered.map(element => {
                return <Box  title={element.programType} image={element.images.PosterArt.url}/>
            })): <p>Loading...</p>}
        </div>
        <Footer/>
        </React.Fragment>
    );
}

export default Series;