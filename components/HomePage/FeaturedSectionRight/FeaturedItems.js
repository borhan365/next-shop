import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeaturedData from '../../Data/FeaturedData'

function FeaturedItems() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">

        {/* items */}
        {
          FeaturedData.map((item, index) => (
          <div className="border border-gray-100 shadow-md p-2" key={index}>
            <Link href="/single">
              <a>
                <Image className="object-contain" width={320} height={300} src={item.img} />

                <div className="mt-1">
                    <h2 className="font-semibold text-sm mb-1 text-gray-800">{item.name}</h2>
                    <h3 className="text-green-700 font-bold text-xl">$ {item.price}</h3>

                    <button className="bg-green-600 text-white font-semibold rounded-sm shadow p-2 py-1 mt-1 text-md w-full">Buy Now</button>
                </div>
              </a>
            </Link>
        </div>
          ))
        }
        
      </div>
    </>
  )
}

export default FeaturedItems
