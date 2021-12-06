import Link from 'next/link'
import React from 'react'
import SidebarMenu from '../../Data/SidebarMenu'
import HeroSlider from './HeroSlider'

function HeroSection({product}) {
  return (
    <>
      <div className="flex justify-between gap-5 my-0 sm:my-2 w-full overflow-hidden">

          {/* sidebar menu */}
          <div className="hidden sm:block w-1/5 bg-gray-100 border p-3">
            <ul>
              {
                SidebarMenu.map((item, index) => (
                  <li className="p-2" key={index}>
                      <Link href="/category">
                        <a>{item.name}</a>
                      </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* hero slider */}
          <div className="w-full sm:w-4/5">
            <HeroSlider />
          </div>
      </div>
    </>
  )
}

export default HeroSection
