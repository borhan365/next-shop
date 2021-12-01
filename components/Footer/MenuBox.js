import React from 'react'
import Link from 'next/link'

function MenuBox(props) {
  return (
    <>
      <div>
        <h3 className="text-gray-600 font-semibold uppercase text-md mb-1 border-b-2 border-gray-300 pb-2">{props.title}</h3>
          <ul className="flex flex-col gap-2 mt-5">
              <li>
                  <Link href="/">
                      <a className="hover:text-green-700 inline-block">{props.menuOne}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="hover:text-green-700 inline-block">{props.menuTwo}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="hover:text-green-700 inline-block">{props.menuThree}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="hover:text-green-700 inline-block">{props.menuFour}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="hover:text-green-700 inline-block">{props.menuFive}</a>
                  </Link>
              </li>
          </ul>
      </div>
    </>
  )
}

export default MenuBox
