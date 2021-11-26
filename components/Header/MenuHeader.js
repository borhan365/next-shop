import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'
import SearchForm from './SearchForm'
import MainMenuData from '../Data/MainMenuData'

function MenuHeader() {
  return (
    <>
      <section className="border-b">
        <div className="container"> 

          {/* Wrapper */}
          <div className="flex justify-between gap-5 items-center py-2 w-full">

              {/* menu area */}
              <div>
                <ul className="flex justify-start items-center gap-4">
                  {
                    MainMenuData.map((item, index) => (
                      <Link key={index} href={item.url}>
                        <li className="cursor-pointer font-medium text-sm text-gray-700 uppercase">{item.name}</li>
                      </Link>
                    ))
                  }
                </ul>
              </div>

              {/* right */}
              <div>
                <Link href="/category">
                  <a className="bg-green-600 hover:bg-green-800 p-2 px-4 text-white font-medium uppercase text-sm rounded-sm">Shop now</a>
                </Link>
              </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuHeader
