import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BigFeaturedItem() {
  return (
    <>
      <div className="border-2 overflow-hidden border-green-600 rounded relative">
            {/* thumb */}
            <div>
                <Link href="/single">
                    <a>
                      <Image className="object-cover" width={400} height={600} src="/images/fruits/pinaple.jpg" />
                    </a>
                </Link>
            </div>

            {/* button */}
            {/* <button className="bg-green-600 text-white font-semibold rounded-md shadow absolute bottom-2 left-2 right-2 p-2 text-md w-4/5">Buy Now</button> */}

            {/* discount */}
            <div className="bg-green-600 text-white font-semibold text-sm rounded-full shadow absolute top-2 left-2 h-10 w-10 p-6 flex justify-center items-center">-30%</div>

        </div>
    </>
  )
}

export default BigFeaturedItem
