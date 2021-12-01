import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link'
import {FaRegHeart} from 'react-icons/fa'

function CartComp() {
  return (
    <>
      {/* login/register */}
      <div className="mr-1 text-sm font-medium uppercase">
        <span>
          <Link href="/login"> 
              <a className="hover:text-green-600 mr-1">Login</a> 
          </Link> /
          <Link href="/register"> 
            <a className="hover:text-green-600 ml-1">Register</a> 
          </Link>
        </span>
      </div>

      {/* heart */}
      <div className="text-gray-600 font-medium text-xl">
        <FaRegHeart />
      </div>
      <div className="p-2 px-4 border rounded flex justify-start gap-2 items-center text-gray-600 font-medium cursor-pointer hover:text-green-600 hover:border-green-500">
        <FiShoppingCart />
        Cart <span className="font-bold">0</span>
      </div>

      {/* avatar */}
      <div>
        <Link href="/profile">
          <a>
            <Image
              className="rounded-full object-cover"
              width={50}
              height={50}
              src="/images/others/happy-girl.jpg"
            />
          </a>
        </Link>
      </div>
    </>
  );
}

export default CartComp;
