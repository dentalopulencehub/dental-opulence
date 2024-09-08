
import { useRef } from 'react'
import { getCarouselData } from '../lib/carousel'


const useCarousel = () => {
  const slide = useRef(0)
  const carouselRef = useRef<HTMLUListElement>(null)

  const setSlide = (slideIndex: number) => {
    slide.current = slideIndex
    if (carouselRef.current) {
      const { childWidth } = getCarouselData(carouselRef.current)

      carouselRef.current.style.transform = `translateX(-${
        childWidth * slideIndex
      }px)`
    }
  }

  const next = () => {
    if (carouselRef.current) {
      const { lastSlide } = getCarouselData(carouselRef.current)
      const newIndex = lastSlide === slide.current ? 0 : slide.current + 1

      setSlide(newIndex)
    }
  }

  const prev = () => {
    if (carouselRef.current) {
      const { lastSlide } = getCarouselData(carouselRef.current)
      const newIndex = slide.current === 0 ? lastSlide : slide.current - 1

      setSlide(newIndex)
    }
  }

  return {
    carouselRef,
    next,
    prev,
  }
}

export default useCarousel
