import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const ContactUs = () => {
  const { setHideSearchBar } = useGlobalContext()

  useEffect(() => {
    setHideSearchBar(true)
  }, setHideSearchBar)

  return <div className="h-screen">ContactUs</div>
}

export default ContactUs
