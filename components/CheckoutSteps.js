import React from 'react'
import Link from 'next/link'

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <nav className="mb-3">
        <li>
          {
            step1 ? (
              <Link href="/login">
                  <a className="text-green-600 font-semibold text-xl">Login</a>
              </Link>
            ) : 
            <a disabled className="bg-gray rounded">LOGIN</a>
          }
        </li>

        <li>
          {
            step2 ? (
              <Link href="/shipping">
                  <a className="text-green-600 font-semibold text-xl">Shipping </a>
              </Link>
            ) : 
            <a disabled className="bg-gray rounded">Shipping</a>
          }
        </li>

        <li>
          {
            step3 ? (
              <Link href="/payment">
                  <a className="text-green-600 font-semibold text-xl">Payment</a>
              </Link>
            ) : 
            <a disabled className="bg-gray rounded">Payment</a>
          }
        </li>

        <li>
          {
            step4 ? (
              <Link href="/placeorder">
                  <a className="text-green-600 font-semibold text-xl">Place order </a>
              </Link>
            ) : 
            <a disabled className="bg-gray rounded">Place order</a>
          }
        </li>

    </nav>
  )
}

export default CheckoutSteps
