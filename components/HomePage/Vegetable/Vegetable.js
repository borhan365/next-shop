import React from 'react'
import Image from 'next/image'
import VegetableData from '../../Data/VegetableData'
import Title from '../Title'

function Vegetable() {
  return (
    <>
      <Title title="Fresh Vegetable from farmar" />
      <div className="grid grid-cols-5 gap-2">

        {/* item */}
        {
          VegetableData.map((item, index) => (
            <div className="w-full border-blue-300 rounded shadow-xl" key={index}>
              <div>
                  <Image width={300} height={300} src={item.img} className="object-contain" />
              </div>
              <div className="p-2">
                <span className="text-gray-400 font-semibold text-sm line-through mr-2">({item.beforePrice})</span>
                <span className="text-green-600 font-semibold text-xl">${item.price}</span>
                <h2 className="text-md font-medium capitalize text-green-800">{item.name}</h2>
              </div>
          </div>
          ))
        }
      </div>
    </>
  )
}

export default Vegetable
