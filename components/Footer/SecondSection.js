import Image from 'next/image'
import React from 'react'

function SecondSection() {
  return (
    <>
      <section>
          <div className="flex justify-between gap-2 items-center border-t border-gray-300 py-3">

              {/* left */}
              <div className="flex justify-start items-center gap-2">
                  
                  <div className="capitalize text-sm font-semibold">CHECK OUT OUR APP!</div>
                  <Image width={100} height={50} src="/images/newicon/ios-logo.jpg" className="object-contain" />
                  
                  <Image width={100} height={50} src="/images/newicon/android-logo.jpg" className="object-contain" />
              </div>

              {/* right */}
              <div className="flex justify-start items-center gap-2">
                  
                  <div className="capitalize text-sm font-semibold">CHECK OUT OUR APP!</div>
                  <Image width={250} height={50} src="/images/newicon/payment-footer.png" className="object-contain" />
              </div>

          </div>
      </section>
    </>
  )
}

export default SecondSection
