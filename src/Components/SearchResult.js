import React from 'react'
import { useGlobalContext } from '../context/context'
import MovieCard from './MovieCard';
import Search from './Search';


const SearchResult = () => {
     const {movie}= useGlobalContext();
  return (
    <div>
    {movie.map((curMovie,index)=>{
        return (
            <MovieCard  id= {index} curMovie={curMovie}/>
        )
    })}


    </div>
  )
}

export default SearchResult