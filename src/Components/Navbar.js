import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search';

const Navbar = () => {

 
  return (
    <>
      <div className='h-24 w-screen bg-slate-200 flex justify-between '>
        <img
          className="rounded-xl h-14 ml-10 my-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
          alt="" />
        
        <ul className=' flex gap-10 mr-26 my-auto font-normal text-xl text-blue-800 -mr-96'>
          <button className='h-8 w-fit'><li className='  transition hover:scale-105 duration-800 ease-in-out'> <Link to="/"> Home </Link> </li></button>
          <li className='transition hover:scale-105  duration-800 ease-in-out'><Link to="/explore_movies" > Explore Movies </Link> </li>
          <li className='transition hover:scale-15  duration-800 ease-in-out'> <Link to="/contact_us"> Contact Us</Link> </li>
          <li className='transition hover:scale-15  duration-800 ease-in-out'> <Link to="/contact_us"> Watch Later</Link> </li>
        </ul>
        <Search />
      </div>
    </>
  )
}


export default Navbar
