import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SidebarMenu from '../Data/SidebarMenu'
import HeroSlider from './HeroSlider'

function HeroSection() {
  return (
    <>
      <div className="flex justify-between gap-5 my-2">

          {/* sidebar menu */}
          <div className="w-80 bg-gray-100 border p-3 overflow-hidden">
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
          <div>
            <HeroSlider />
          </div>
      </div>
    </>
  )
}

export default HeroSection
