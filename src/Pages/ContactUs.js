import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import Navbar from '../Components/Navbar'

const ContactUs = () => {
  const { setHideSearchBar } = useGlobalContext()

  useEffect(() => {
    setHideSearchBar(true)
  }, setHideSearchBar)

  return (
    <div className="h-screen bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900">
      ContactUs
    </div>
  )
}

export default ContactUs
