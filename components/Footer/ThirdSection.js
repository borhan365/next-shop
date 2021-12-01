import React from 'react'
import Link from 'next/link'

function ThirdSection() {
  return (
    <>
      <div className="flex justify-between gap-2 items-center py-3">
          <p>@ Copyright all right reserved in 2021</p>
          <ul className="flex justify-start items-center gap-3">
            <li>
              <Link href="/">
                  <a className="text-sm font-medium text-green-800">
                    Terms & conditions
                  </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                  <a className="text-sm font-medium text-green-800">
                    Privecy policy
                  </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                  <a className="text-sm font-medium text-green-800">
                    Return policy
                  </a>
              </Link>
            </li>
          </ul>
      </div>
    </>
  )
}

export default ThirdSection
