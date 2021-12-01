import React from 'react'
import {FiSearch} from 'react-icons/fi'
import Link from 'next/link'

function SearchForm() {
  return (
    <>
      <form action="#" method="POST" className="border rounded-full p-1 px-5 flex justify-between items-center">

          <select name="" id="search-category" className="border-r-2 mr-2 text-sm font-medium text-gray-600">
              <option value="Products">Products</option>
              <option value="Products">Products</option>
              <option value="Suppliers">Suppliers</option>
          </select>

          <input className="border-r-2 w-96 text-gray-600 font-medium text-sm h-10 p-1 focus:border-transparent focus:outline-none" type="text" placeholder="What Are You Looking For..." name="search" />

          <Link href="/" class="">
            <div className="flex cursor-pointer hover:text-green-600 justify-start gap-2 items-center pl-2 text-gray-600 font-medium text-sm">
              <i class=""><FiSearch /></i> Search
            </div>
          </Link>

      </form>
    </>
  )
}

export default SearchForm
