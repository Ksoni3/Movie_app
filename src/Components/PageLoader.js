import React from 'react'
import Loading from './Loading'

const PageLoader = () => {
  return (
    <div className="w-full bg-white rounded-lg md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  )
}

export default PageLoader
