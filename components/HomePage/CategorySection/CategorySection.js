import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryItem from '../../Data/CategoryItem'

function CategorySection() {
  
  return (
    <>
      <div className="grid grid-cols-10 gap-1 my-4">

          {/* item */}
          {
            CategoryItem.map((item, index) => (
              <div key={index} className="rounded-md border text-center p-3 shadow-sm">
                <Link href={item.url}>
                  <a>
                    <Image src={item.img} alt={item.name} width={50} height={40} className="object-contain bg-opacity-70" />
                    <h2 className="text-sm font-medium">{item.name}</h2>
                  </a>
                </Link>
              </div>
            ))
          }

      </div>
    </>
  )
}

export default CategorySection
