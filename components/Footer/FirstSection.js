import React from 'react'
import MenuBox from './MenuBox'
import ContactBox from './ContactBox'

function FirstSection() {
  return (
    <>
        {/* first section */}
          <section>
              <div className="flex gap-4 mb-6">

                  {/* item */}
                  <div className="w-1/3">
                      <ContactBox />
                  </div>

                  <div className="w-2/3 grid grid-cols-3 gap-10">
                      {/* item two */}
                  <div>
                    <MenuBox 
                      title="CUSTOMER SERVICE"
                      menuOne="Shipping & Returns"
                      menuTwo="Track Your Order"
                      menuThree="International Shipping"
                      menuFour="Payment Method"
                      menuFive="About Us"
                    />
                  </div>

                  {/* item three */}
                  <div>
                    <MenuBox 
                      title="MAKE MONEY WITH US"
                      menuOne="Shipping & Returns"
                      menuTwo="Track Your Order"
                      menuThree="International Shipping"
                      menuFour="Payment Method"
                      menuFive="About Us"
                    />
                  </div>

                  {/* item four */}
                  <div>
                    <MenuBox 
                      title="HEADQUARTER"
                      menuOne="Shipping & Returns"
                      menuTwo="Track Your Order"
                      menuThree="International Shipping"
                      menuFour="Payment Method"
                      menuFive="About Us"
                    />
                  </div>
                  </div>

              </div>
          </section>
    </>
  )
}

export default FirstSection
