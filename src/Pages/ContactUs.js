import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const ContactUs = () => {
  const { setHideSearchBar, isDark } = useGlobalContext()

  useEffect(() => {
    setHideSearchBar(true)
  }, [setHideSearchBar])

  return (
    <div
      className={`h-screen ${
        isDark
          ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
          : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
      }`}
    >
      ContactUs
    </div>
  )
}

export default ContactUs
