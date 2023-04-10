import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { BiMenu } from 'react-icons/bi'
import { RxCrossCircled } from 'react-icons/rx'
import SingleNavLink from './SingleNavLink'

import Search from './Search'

const Navbar = () => {
  const {
    isOpen,
    setIsOpen,
    hideSearchBar,
    setHidesSearchBar,
  } = useGlobalContext()

  const menuClose = () => {
    setIsOpen(false)
  }

  const handleSearchBar = () => {
    if (hideSearchBar === true) {
      return
    } else {
      setHidesSearchBar(true)
    }
  }

  return (
    <>
      <div className="h-28 md:h-24 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 flex items-center justify-between flex-wrap z-50">
        <img
          className="rounded-xl h-9 sm:h-11 md:h-14 ml-4 sm:ml-5 md:ml-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
          alt=""
        />

        <ul className=" hidden lg:flex lg:gap-8 xl:gap-10 font-normal text-xl text-white ">
          <SingleNavLink to="/" linkName="Home" />
          <SingleNavLink to="/explore_movies" linkName="Explore Movies" />
          <SingleNavLink to="/contact_us" linkName="Contact Us" />
          <SingleNavLink to="/watchlater" linkName=" Watch Later" />
        </ul>

        <ul
          className={` bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 text-white flex flex-col justify-center items-center lg:hidden gap-12 text-3xl pb-20 font-semibold border-b-2 absolute ${
            isOpen ? 'top-28' : '-top-full'
          } bg-white w-full h-screen z-10`}
        >
          <SingleNavLink to="/" linkName="Home" onClick={menuClose} />
          <SingleNavLink
            to="/explore_movies"
            linkName="Explore Movies"
            onClick={menuClose}
          />
          <SingleNavLink
            to="/contact_us"
            linkName="Contact Us"
            onClick={menuClose}
          />
          <SingleNavLink
            to="/watchlater"
            linkName=" Watch Later"
            onClick={menuClose}
          />
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
