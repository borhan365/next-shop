import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCartPlus, BsEye } from 'react-icons/bs'
import VegetableData from '../Data/VegetableData'
import Title from '../HomePage/Title'

function RelatedProduct() {
  return (
    <>
      <Title title="Related Products" />
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">

        {/* item */}
        {
          VegetableData.slice(0, 5).map((item, index) => (
            <div className="w-full border-blue-300 rounded shadow-xl" key={index}>
              <div>
                  <Link href="/single">
                      <a>
                        <Image width={300} height={300} src={item.img} className="object-contain" />
                      </a>
                  </Link>
              </div>
              <div className="p-2">

                <div className="flex justify-between gap-1">
                    
                    {/* price */}
                    <div>
                      <span className="text-gray-400 font-semibold text-sm line-through mr-2">({item.beforePrice})</span>
                      <span className="text-green-600 font-semibold text-xl">${item.price}</span>
                    </div>

                    {/* icons */}
                    <div onClick={() => setOpen(true)} className="flex justify-start gap-1">
                      <span className="-gray-400 font-semibold text-xl cursor-pointer bg-gray-100 p-1 border-sm rounded-sm text-green-500"><BsEye /></span>
                      <span className="text-green-500 font-bold text-xl cursor-pointer bg-gray-100 p-1 border-sm rounded-sm"><BsCartPlus /></span>
                    </div>

                </div>
                
                <Link href="/single">
                    <a>
                      <h2 className="text-md font-medium capitalize text-green-800">{item.name}</h2>
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

export default RelatedProduct
