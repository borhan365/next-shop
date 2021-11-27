import Image from 'next/image'
import React from 'react'

const bg1 = "/images/fruits/bg1.jpg"; 
const bg2 = "/images/fruits/bg2.jpg"; 

function TwoColBanner() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 my-4">

          {/* item */}
          <div className="p-5 rounded-md w-full bg-center bg-no-repeat bg-cover h-auto flex justify-between gap-3 items-center shadow-md" style={{backgroundImage: `url(${bg1})`}}>
            <div className="w-full">
                <Image src="/images/fruits/banner3.png" width={500} height={500} className="object-contain" />
            </div>
            <div className="w-full">
              <h2 className="text-4xl font-bold line text-gray-900">Strawberry Jam 100% Natural Fruit Juice <span className="text-green-900">Sale Off 50%</span></h2>
            </div>
          </div>

        {/* item */}
        <div className="p-5 rounded-md w-full bg-center bg-no-repeat bg-cover border h-auto flex justify-between gap-3 items-center" style={{backgroundImage: `url(${bg2})`}}>
          <div className="w-full">
              <Image src="/images/fruits/banner1.png" width={500} height={500} className="object-contain" />
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-bold line text-gray-900">Strawberry Jam 100% Natural Fruit Juice <span className="text-green-900">Sale Off 50%</span></h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default TwoColBanner
