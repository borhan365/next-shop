import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function JustArrivedSection() {
  return (
    <>
      {/* Header title */}
      <div className="w-full text-center mt-16 mb-10">
          <p className="uppercase text-gray-500 text-md">NATURAL COLLECTIONS</p>
          <h2 className="text-4xl font-bold uppercase my-2">JUST NOW ARRIVED <span className="text-green-600 font-bold">FRESH FRUITS</span></h2>
          <p>Natural Food company always serve best organic fruits with 100% organic gurantte.</p>
      </div>

      <div className="grid grid-cols-4 gap-5">

          {/* item */}
          <div className="w-full">
              <Link href="/single">
                  <a>
                    <Image width={500} height={500} className="object-contain" src="/images/fruits/banner1.png" />
                  </a>
              </Link>
          </div>

          {/* item */}
          <div className="w-full">
              <Link href="/single">
                  <a>
                    <Image width={500} height={500} className="object-contain" src="/images/fruits/banner2.png" />
                  </a>
              </Link>
          </div>

          {/* item */}
          <div className="w-full">
              <Link href="/single">
                  <a>
                    <Image width={500} height={500} className="object-contain" src="/images/fruits/banner3.png" />
                  </a>
              </Link>
          </div>

          {/* item */}
          <div className="w-full">
              <Link href="/single">
                  <a>
                    <Image width={500} height={500} className="object-contain" src="/images/fruits/banner5.png" />
                  </a>
              </Link>
          </div>
      </div>
    </>
  )
}

export default JustArrivedSection
