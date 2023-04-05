import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../Scss/loading.scss'
import LoadingImage from '../context/LoadingImage.png'

const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="image">
          <img className="loadingimage" src={LoadingImage} />
        </div>
        <div className="skeleton-theming">
          <SkeletonTheme
            height="50px"
            baseColor="hsl(200, 20%, 80%)"
            highlightColor="#444"
          >
            <h1>
              <Skeleton />
            </h1>
          </SkeletonTheme>

          <SkeletonTheme
            height="80px"
            baseColor="hsl(200, 20%, 80%)"
            highlightColor="#444"
          >
            <p>
              <Skeleton />
            </p>
          </SkeletonTheme>

          <SkeletonTheme
            height="60px"
            baseColor="hsl(200, 20%, 80%)"
            highlightColor="#444"
          >
            <h2>
              <Skeleton />
            </h2>
          </SkeletonTheme>
        </div>
      </div>
    </>
  )
}

export default Loading
