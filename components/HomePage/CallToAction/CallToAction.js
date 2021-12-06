import React from 'react'
import Image from 'next/image'

function CallToAction() {
  return (
    <>
      <div className="border border-gray-200 p-3 flex justify-between items-center flex-col sm:flex-row gap-3 my-4 mb-7">

          {/* item */}
          <div className="flex justify-start items-center gap-2 w-full">

            {/* thumb */}
              <div className="bg-blue-500 rounded-md flex justify-center items-center">
                <Image src="/images/newicon/icon-1.png" width={55} height={55} className="object-contain" />
              </div>

              {/* content */}
              <div>
                <xs className="text-sm font-semibold uppercase text-gray-800">FREE SHIPPING!</xs>
                <p className="text-sm text-gray-500">On Orders Over 500 Taka.</p>
              </div>
          </div>

          {/* item */}
          <div className="flex justify-start items-center gap-2 w-full">

            {/* thumb */}
              <div className="bg-purple-700 rounded-md flex justify-center items-center">
                <Image src="/images/newicon/icon-2.png" width={55} height={55} className="object-contain" />
              </div>

              {/* content */}
              <div>
                <xs className="text-sm font-semibold uppercase text-gray-800">EXCHANGE POLICY</xs>
                <p className="text-sm text-gray-500">Fast & Hassle Free</p>
              </div>
          </div>

          {/* item */}
          <div className="flex justify-start items-center gap-2 w-full">

            {/* thumb */}
              <div className="bg-pink-700 rounded-md flex justify-center items-center">
                <Image src="/images/newicon/icon-3.png" width={55} height={55} className="object-contain" />
              </div>

              {/* content */}
              <div>
                <xs className="text-sm font-semibold uppercase text-gray-800">ONLINE SUPPORT</xs>
                <p className="text-sm text-gray-500">24/7 Everyday</p>
              </div>
          </div>

          {/* item */}
          <div className="flex justify-start items-center gap-2 w-full">

            {/* thumb */}
              <div className="bg-red-600 rounded-md flex justify-center items-center">
                <Image src="/images/newicon/icon-4.png" width={55} height={55} className="object-contain" />
              </div>

              {/* content */}
              <div>
                <xs className="text-sm font-semibold uppercase text-gray-800">REWARD POINTS</xs>
                <p className="text-sm text-gray-500">Earn 1% Cashback</p>
              </div>
          </div>

          {/* item */}
          <div className="flex justify-start items-center gap-2 w-full">

            {/* thumb */}
              <div className="bg-green-700 rounded-md flex justify-center items-center">
                <Image src="/images/newicon/icon-5.png" width={55} height={55} className="object-contain" />
              </div>

              {/* content */}
              <div>
                <xs className="text-sm font-semibold uppercase text-gray-800">
PAYMENT METHOD</xs>
                <p className="text-sm text-gray-500">Credit Card, bKash & PayPal</p>
              </div>
          </div>

      </div>
    </>
  )
}

export default CallToAction
