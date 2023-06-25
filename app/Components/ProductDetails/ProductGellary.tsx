'use client'
import React,{useState} from 'react'
import Image from "next/image";
type imagesType = {
  images?:string[],
  mainImage?:string
}
function ProductGellary({mainImage,images}:imagesType) {
    const [imagePreview, setImagePreview] = useState<string|undefined>(images?.[0] || mainImage);
  return (
    <div className="grid grid-cols-3">
    <div className="col-span-3 md:col-span-1">
      <div className="flex h-full w-full items-center justify-center gap-4 md:flex-col">
        {images?.map((img, i) => (
          <Image
            width={100}
            height={100}
            alt={img}
            src={img}
            key={i}
            onClick={() => setImagePreview(images[i])}
            className="cursor-pointer transition hover:opacity-80"
          />
        ))}
      </div>
    </div>
    <div className="col-span-3 md:col-span-2">
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={imagePreview}
          alt="image-preview"
          className="object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default ProductGellary