import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { BiMenu } from 'react-icons/bi'
import { RxCrossCircled } from 'react-icons/rx'

import Search from './Search'

const Navbar = () => {
  const { mobile, isOpen, setIsOpen } = useGlobalContext()

  const menuClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="h-28 sm:h-24 bg-slate-200 flex items-center justify-between flex-wrap">
        <img
          className="rounded-xl h-9 sm:h-11 md:h-14 ml-4 sm:ml-5 md:ml-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
          alt=""
        />

        <ul className=" hidden lg:flex lg:gap-8 xl:gap-10 font-normal text-xl text-blue-800 ">
          <button className="h-8 w-fit">
            <li className="  transition hover:scale-105 duration-800 ease-in-out">
              {' '}
              <Link to="/"> Home </Link>{' '}
            </li>
          </button>
          <li className="transition hover:scale-105  duration-800 ease-in-out">
            <Link to="/explore_movies"> Explore Movies </Link>{' '}
          </li>
          <li className="transition hover:scale-15  duration-800 ease-in-out">
            {' '}
            <Link to="/contact_us"> Contact Us</Link>{' '}
          </li>
          <li className="transition hover:scale-15  duration-800 ease-in-out">
            {' '}
            <Link to="/watchlater"> Watch Later</Link>{' '}
          </li>
        </ul>

        <ul
          className={
            isOpen
              ? ' flex flex-col justify-center items-center md:hidden gap-12 text-3xl pb-20 font-semibold text-blue-800 border-b-2 absolute top-28 bg-white w-full h-screen z-10 '
              : ' flex flex-col justify-center items-center md:hidden gap-12 text-3xl font-semibold text-blue-800 border-b-2 absolute -top-full bg-white w-full h-screen z-10 '
          }
        >
          <li className=" transition hover:scale-105 duration-800 ease-in-out">
            {' '}
            <Link to="/" onClick={menuClose}>
              {' '}
              Home{' '}
            </Link>{' '}
          </li>

          <li className=" pt-10 transition hover:scale-105  duration-800 ease-in-out">
            <Link to="/explore_movies" onClick={menuClose}>
              {' '}
              Explore Movies{' '}
            </Link>{' '}
          </li>
          <li className=" pt-10 transition hover:scale-15  duration-800 ease-in-out">
            {' '}
            <Link to="/contact_us" onClick={menuClose}>
              {' '}
              Contact Us
            </Link>{' '}
          </li>
          <li className=" pt-10 transition hover:scale-15  duration-800 ease-in-out">
            {' '}
            <Link to="/watchlater" onClick={menuClose}>
              {' '}
              Watch Later
            </Link>{' '}
          </li>
        </ul>
        <Search />
        <div
          className="block lg:hidden text-4xl sm:text-5xl mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCrossCircled /> : <BiMenu />}
        </div>
      </div>
    </>
  )
}

export default Navbar
