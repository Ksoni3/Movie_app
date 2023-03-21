import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

    const {id} = useParams();
    const [singleMovie, setSingleMovie] = useState({})


    useEffect(()=>{
        const getSingleMovie = (id)=>{
            console.log(id)
           try {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d3129f18427d37c5012b4f4f64b1222a`)
            .then((res) => {
                setSingleMovie(res.data)})
           } catch (error) {
            console.log(error)
            
           }
        }
        getSingleMovie(id);
       
    },[id])

     







  return (
    <div>
    <div className='w-screen h-screen pt-14'> 
    <div className='w-3/4 h-3/4  bg-white m-auto shadow shadow-orange-300 flex  '>
    <div className='w-[40%] bg-red-800'> Right section
    <h1> {singleMovie.original_title}</h1></div>
    <div  className='w-[60%] bg-green-600'>Left Section</div>
    
     </div>

     </div>
    </div>
  )
}

export default MovieDetails