import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'
import SearchForm from './SearchForm'

function SecondHeader() {
  return (
    <>
      <section className="border-b">
        <div className="container"> 

          {/* Wrapper */}
          <div className="flex justify-between gap-5 items-center py-2 w-full">

            {/* logo */}
            <div className="w-96 mr-10">
              <Image width={400} height={100} src="/images/logo.svg" />
            </div>

            {/* search form */}
            <div className="w-full">
                <SearchForm />
            </div>

            {/* last card and avater */}
            <div className="flex justify-end gap-2 items-center w-full">

                {/* login/register */}
                <div className="mr-1 text-sm font-medium uppercase">
                  <span>
                      <Link href="/login"> Login </Link>
                      / 
                      <Link href="/login"> Register </Link>
                    </span>
                </div>

                {/* heart */}
                <div className="text-gray-600 font-medium text-xl">
                  <FaRegHeart />
                </div>

                {/* cart button */}
                <div className="p-2 px-4 border rounded flex justify-start gap-2 items-center text-gray-600 font-medium">
                  <FiShoppingCart />
                  Cart <span className="font-bold">0</span>
                </div>

                {/* avatar */}
                <div>
                  <Image className="rounded-full object-cover" width={50} height={50} src="/images/others/happy-girl.jpg" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecondHeader
