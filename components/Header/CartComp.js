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
          <Link href="/login"> Login </Link>/
          <Link href="/login"> Register </Link>
        </span>
      </div>

      {/* heart */}
      <div className="text-gray-600 font-medium text-xl">
        <FaRegHeart />
      </div>
      <div className="p-2 px-4 border rounded flex justify-start gap-2 items-center text-gray-600 font-medium">
        <FiShoppingCart />
        Cart <span className="font-bold">0</span>
      </div>

      {/* avatar */}
      <div>
        <Image
          className="rounded-full object-cover"
          width={50}
          height={50}
          src="/images/others/happy-girl.jpg"
        />
      </div>
    </>
  );
}

export default CartComp;
