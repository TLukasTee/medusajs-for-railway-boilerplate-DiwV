'use client'
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="flex items-start relative">
      {/* Thumbnails */}
      <div className="flex flex-col gap-y-4 mr-4 w-1/5">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-square w-full overflow-hidden bg-ui-bg-subtle cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              priority={index <= 2}
              className="absolute inset-0 rounded-rounded object-cover"
              alt={`Product thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100px, 150px"
            />
          </Container>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1">
        <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle">
          <Image
            src={selectedImage.url}
            priority
            className="absolute inset-0 rounded-rounded object-scale-down"
            alt="Selected product image"
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          />
        </Container>
      </div>
    </div>
  )
}

export default ImageGallery