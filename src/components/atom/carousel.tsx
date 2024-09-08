
import React, { ReactNode } from 'react'
import useCarousel from '../../../hooks/useCarousel'

const Carousel = ({ children, className}: { children: ReactNode, className?:string }) => {
  const { carouselRef, next, prev } = useCarousel()
  return (
    <div className={`relative ${className}`}>
      <button className="absolute left-0 top-1/2 text-2xl z-40 prev leftArrow" onClick={prev}>
        {'<'}
      </button>
      <button className="absolute right-0 top-1/2 text-2xl z-40 next rightArrow" onClick={next}>
        {'>'}
      </button>
      <div className="carousel no-scrollbar relative py-2">
        <div className="mx-auto container overflow-x-visible relative">
          <ul
            ref={carouselRef}
            className=" w-screen md:pl-10 flex relative transition-transform duration-[0.2s] ease-[ease-in-out]"
          >
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Carousel
