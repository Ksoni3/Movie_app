import React from 'react'
import { useGlobalContext } from '../context/context'


const Search = () => {

    const {api_key, setEndPoint, query,setQuery}= useGlobalContext();

    const onSearchSubmit =(e)=>{
        e.preventDefault();
        setEndPoint(`search/movie?api_key=${api_key}&query=${query}`)
    }

  return (
    <>
        <form onSubmit={onSearchSubmit}>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search Movie" className='h-9 pl-4 px-34 mt-8 mr-10 rounded-xl border border-blue-800 text-large'/>
        </form>
        
    </>
  )
}

export default Search