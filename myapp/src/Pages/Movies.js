import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderName from '../Navbar/HeaderName';
import Footer from '../Footer/Footer';
import Box from './Box';
import '../styles/home.css';
import Series from './Series';


function Movies(){
    const [movies,setMovies]=useState([]);
    const getMovies=()=>{
      fetch(`${process.env.PUBLIC_URL}/feed/morr-sample.json`,
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
        .then(function(response){
          // console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          // console.log(myJson);
          setMovies(myJson)
        });
    }
    useEffect(()=>{
      getMovies()
    },[])

  // console.log(`{$.movies.entries.images}`);

  const entries = movies.entries;
  const filtered = Object.values(entries).filter(function(entries) { return entries.releaseYear >= '2010' && entries.programType.includes("movie")});
  filtered.sort(function (a, b) {
    return a.title> b.title;
  })

    return(
        <React.Fragment>
        <Navbar/>
        <HeaderName title='Movies'/>
        <div className='boxes'>
          {filtered.length>0?(filtered.map(element => {
            return <Box name={element.title} title={element.programType} image={element.images.PosterArt.url}/>
          })): <p>Loading...</p>}
        </div>
        <Footer/>
        </React.Fragment>
    );
}

export default Movies;