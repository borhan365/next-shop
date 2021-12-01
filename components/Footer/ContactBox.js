import Image from 'next/image'
import React from 'react'
import {FiMapPin, FiPhoneCall, FiClock} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import Link from 'next/link'

function ContactBox() {
  return (
    <>
      <div>
        {/* thumb */}
        <div className="-mt-10">
          <Image width={200} height={100} src="/khaasfood.png" className="object-contain" />
        </div>

        <ul className="flex flex-col gap-2">
          <li className="w-full inline-flex"><FiMapPin className="text-2xl mr-1" /><span className="font-semibold mr-2">Office:</span>134, Road: 12, Block: E, Banani, Dhaka </li>

          <li className="w-full inline-flex"><AiOutlineMail className="text-2xl mr-1" /><span className="font-semibold mr-2">Email:</span>info.mdborhan@gmail.com</li>

          <li className="w-full inline-flex"><BiPhoneCall className="text-2xl mr-1" /><span className="font-semibold mr-2">Call:</span>01851590081</li>

          <li className="w-full inline-flex"><FiClock className="text-2xl mr-1" /><span className="font-semibold mr-2">Time:</span>Open Time: Everyday 11AM - 9PM</li>

        </ul>
      </div>
    </>
  )
}

export default ContactBox
