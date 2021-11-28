
import React from 'react'
import SearchForm from './SearchForm'
import CartComp from './CartComp'
import Logo from '../Logo'

function SecondHeader() {
  return (
    <>
      <section className="border-b">
        <div className="container"> 

          {/* Wrapper */}
          <div className="flex justify-between gap-5 items-center py-2 w-full">

            {/* logo */}
            <Logo />

            {/* search form */}
            <div className="w-full">
                <SearchForm />
            </div>

            {/* last card and avater */}
            <div className="flex justify-end gap-2 items-center w-full">

                {/* cart button */}
                <CartComp />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecondHeader
