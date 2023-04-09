import React from 'react'
import Loading from './Loading'

const PageLoader = () => {
  return (
    <div className="xl:w-[90%] w-full bg-white rounded-lg flex justify-center flex-wrap gap-4">
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  )
}

export default PageLoader
