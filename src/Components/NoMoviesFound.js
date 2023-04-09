import React from 'react'
import Shake from 'react-reveal/Shake'

const NoMoviesFound = () => {
  return (
    <div>
      <div className="h-100vh text-center p-10 text-xl">
        <Shake>
          <h1> No Movies Found</h1>
        </Shake>
      </div>
    </div>
  )
}

export default NoMoviesFound
