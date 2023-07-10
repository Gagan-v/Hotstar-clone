import '../styles/movies.css'
import {useEffect, useState } from 'react'
import MoviesLogic from './moviesLogic'
const Movies = () => {
    
    let [favouritesData,setFavData]=useState([])
    useEffect(()=>{
        let fetchData = async()=>{
           
            let response=await fetch('http://localhost:4000/favourites')
            let data=await response.json()
            setFavData(data)
        }
        fetchData()
    },[])//empty arr needed or else data wont be deleted it keeps on rendering page on remove click
    let handleRemove=(id,title)=>{
    setFavData(favouritesData.filter(x=> x.id!=id)) //setFavData is updater and updates the value n displayes it
    alert(`${title} has been removed`) 
    }
    return ( 
        <div className="movies">
           <MoviesLogic title="Favourites of all time" data={favouritesData} removeFunction={handleRemove}/>
           <MoviesLogic title="Top rated" data={favouritesData.filter(x=>x.Rating>4)} removeFunction={handleRemove}/>
           <MoviesLogic title="Action" data={favouritesData.filter(x=>x.Genre=="Action")} removeFunction={handleRemove}/>
        </div>
     );
}
export default Movies;