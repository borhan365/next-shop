import React from 'react'
import {BsChevronRight} from 'react-icons/bs'
import Link from 'next/link'

function Title(props) {
  return (
    <>
      <div className="flex justify-between items-center w-full mb-2">
          <h2 className="text-green-600 capitalize font-semibold text-md sm:text-2xl">{props.title}</h2>
          <div>
            <Link href="/category">
              <a className="flex justify-start items-center w-full font-semibold uppercase text-xs sm:text-md">Shop More <BsChevronRight /></a>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Title
