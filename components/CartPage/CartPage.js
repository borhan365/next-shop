import React from 'react'
import CartData from '../Data/CartData'
import Title from '../HomePage/Title'


function CartPage() {
  return (
    <>
      <div className="mt-10 mb-10">
      <Title title="Order summery"/>
      </div>
      <div className="flex justify-between gap-20 items-start pb-20">

          {/* cart product overviews */}
          <div className="w-4/6">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {CartData.map((product) => (
                <li key={product.id} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {product.quantity}</p>

                      <div className="flex">
                        <button type="button" className="font-medium text-green-600 hover:text-green-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-2/6 py-6 px-4 sm:px-6 bg-green-100 rounded-md">
                <h2 className="text-xl font-semibold mb-7">Total Summery</h2>
              <div className="flex justify-between text-base font-medium text-gray-900 border-b py-3 border-gray-300">
                <p className="text-gray-500">Subtotal</p>
                <p>$262.00</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 border-b py-3 border-gray-300">
                <p className="text-gray-500">Shipping estimate</p>
                <p>$25.00</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 border-b py-3 border-gray-300">
                <p className="text-gray-500">Tex estimate</p>
                <p>$2.54</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 border-b py-3 border-gray-300">
                <p className="text-gray-500">Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a
                  href="/cart"
                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Checkout
                </a>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="text-green-600 font-medium hover:text-green-500"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>

      </div>
    </>
  )
}

export default CartPage
