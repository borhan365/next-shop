import React from 'react'
import Logo from '../Logo'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

function MobileHeader() {
  return (
    <>
      <section className="sm:hidden bg-green-600">
          <div className="container flex justify-between items-center px-5 py-2 bg-green-600">
              <div className="w-full">
                  <span className="float-left text-2xl text-white"><AiOutlineMenu /></span>
              </div>
              <div className="w-full">
                <Link href="/">
                  <a>
                    <Image width={200} height={70} src="/khaasfood.png" />
                  </a>
                </Link>
              </div>
              <div className="w-full text-xl">
                <span className="float-right text-2xl text-white"><FiShoppingCart /></span>
              </div>
          </div>
      </section>
    </>
  )
}

export default MobileHeader
