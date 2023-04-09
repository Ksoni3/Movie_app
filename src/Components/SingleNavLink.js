import React from 'react'
import { Link } from 'react-router-dom'

const SingleNavLink = ({ to, linkName, onClick }) => {
  return (
    <li className="pb-10 sm:pb-0 transition hover:scale-105 duration-800 ease-in-out">
      <Link to={to} onClick={onClick}>
        {linkName}
      </Link>
    </li>
  )
}

export default SingleNavLink
