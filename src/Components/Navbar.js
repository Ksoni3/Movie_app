import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='h-24 w-full bg-slate-200 flex justify-between'>
        <img
          className="rounded-xl h-14 ml-10 my-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
          alt=""
        />
        <ul className='flex gap-10 mr-5 my-auto font-normal text-2xl text-blue-800'>
          <li > <Link to="/"> Home </Link> </li>
          <li><Link to="/explore movies"> Explore Movies </Link> </li>
          <li> <Link to="/contact us"> Contact Us</Link> </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
