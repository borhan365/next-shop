import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import SocialIcon from '../Data/SocialIcon'
import Link from 'next/link'

function TopHeader() {
  return (
    <>
      <section className="border py-1">
        <div className="container">
          <div className="flex justify-between items-center">

                {/* left */}
                <div className="flex justify-start items-center gap-2 text-gray-600 font-normal text-sm">
                  <FiPhoneCall />
                    <p>Hotline: 01851590081</p>
                </div>

              {/* right */}
              <div className="flex justify-start items-center gap-5">
                  
                {/* dropdown */}
                <div>
                  {/* language */}
                  <select id="cars" className="text-gray-600 text-sm font-medium">
                    <option value="language">Language</option>
                    <option value="bangla">Bangla</option>
                    <option value="english">English</option>
                  </select>

                  {/* language */}
                  <select id="cars" className="text-gray-600 text-sm font-medium">
                    <option value="currency">Currency</option>
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                  </select>
                </div>

                {/* social */}
                <div>
                  <ul className="flex justify-start items-center gap-2 text-gray-600 font-normal text-sm">
                    {
                      SocialIcon.map((item, index) => (
                        <li>
                          <Link href="/">{item.icon}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopHeader
