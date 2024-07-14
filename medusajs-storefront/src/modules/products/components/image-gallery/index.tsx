'use client'
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import React, { useState, useRef, useEffect } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else if (touchEndX.current - touchStartX.current > 75) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      // Reset index if screen size changes (e.g., from mobile to desktop)
      setCurrentIndex(0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container className="flex flex-col">
      {/* Main image with swipe functionality */}
      <div 
        className="relative w-full h-[300px] md:h-[400px] mb-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex].url}
          alt={`Product image ${currentIndex + 1}`}
          className="object-cover"
          fill
          sizes="100vw"
          priority={currentIndex === 0}
        />
      </div>

      {/* Pagination dots for mobile */}
      <div className="flex justify-center space-x-2 md:hidden">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Thumbnails for desktop */}
      <div className="hidden md:grid grid-cols-4 gap-2 mt-10">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square ${
              index === currentIndex ? 'rounded-xl' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className={`relative aspect-square ${
                index === currentIndex ? 'rounded-xl ring-2 ring-gray-800' : ''
              }`}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </button>
        ))}
      </div>
    </Container>
  )
}

export default ImageGallery