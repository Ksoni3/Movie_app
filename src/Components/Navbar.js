import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { BiMenu } from 'react-icons/bi'
import { RxCrossCircled } from 'react-icons/rx'
import SingleNavLink from './SingleNavLink'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'

import Search from './Search'

const Navbar = () => {
  const navigate = useNavigate()
  const {
    isOpen,
    setIsOpen,
    hideSearchBar,
    setHidesSearchBar,
    isDark,
    setIsDark,
  } = useGlobalContext()

  //setIntervalFunction

  setTimeout(() => {
    if (isDark) {
      setIsDark(false)
    }
  }, 60000)

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
    <div
      className={`   px-2 md:px-8 py-4 md:py-6 ${
        isDark
          ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
          : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
      } flex items-center justify-between z-50 `}
    >
      <img
        className=" w-[15%] md:w-[8%] rounded-xl h-11 block"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
        alt=""
        onClick={() => navigate('/')}
      />

      <ul className=" w-[60%] hidden lg:flex items-center justify-center lg:gap-8 xl:gap-10 font-normal text-xl text-white ">
        <SingleNavLink to="/" linkName="Home" />
        <SingleNavLink to="/explore_movies" linkName="Explore Movies" />
        <SingleNavLink to="/contact_us" linkName="Contact Us" />
        <SingleNavLink to="/watchlater" linkName=" Watch Later" />
      </ul>

      <ul
        className={` ${
          isDark
            ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
            : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
        } text-white flex flex-col justify-center items-center border-blue-600 lg:hidden gap-12 text-3xl pb-20 font-semibold absolute ${
          isOpen ? 'top-20' : '-top-full'
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
      <div
        className={`hidden md:flex w-[10%] md:w-[5%] justify-center sm:text-3xl text-5xl ${
          isDark ? 'text-white' : 'text-white'
        }`}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <MdDarkMode /> : <FiSun />}
      </div>

      <Search />

      <div
        className={`sm:hidden w-[10%] text-3xl ${
          isDark ? 'text-white' : 'text-white'
        }`}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <MdDarkMode /> : <FiSun />}
      </div>

      <div
        className="block lg:hidden text-5xl text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCrossCircled /> : <BiMenu />}
      </div>
    </div>
  )
}

export default Navbar
