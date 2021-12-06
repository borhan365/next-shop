import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShopByCategoryData from '../../Data/ShopByCategoryData'

function ShopByCategory() {
  return (
    <>
      <div className="grid grid-cols-5 gap-1 mt-2 mb-3">
          {
            ShopByCategoryData.map((item, index) => (
              <div className="item-overlay w-full border border-gray-100 p-3 shadow-md z-50 opacity-100 relative bg-white" key={index}>
                  <div>
                      <Link href="/category">
                          <a>
                            <Image className="object-contain" src={item.img} width={280} height={350} />
                          </a>
                      </Link>
                  </div>
                  <div>
                  <Link href="/category">
                      <a>
                        <h2 className="text-center font-semibold text-lg text-green-600 uppercase">{item.name}</h2>
                      </a>
                    </Link>
                  </div>
              </div>
            ))
          }
      </div>
    </>
  )
}

export default ShopByCategory
