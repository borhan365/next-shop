import React from 'react'
import Image from 'next/image'

const img = "/images/fruits/banner3.png"

function SingleThumb() {
  return (
    <>
       {/* gallery */}
      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={img}
          alt="this featured image"
          className="w-full h-full object-center object-contain"
        />
      </div>
    </>
  )
}

export default SingleThumb
