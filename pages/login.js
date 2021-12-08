import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Link from 'next/link'
import {FaUserCircle} from 'react-icons/fa'

function login() {
  return (
    <>
    <Header />
      <div className="container">
        <form className="my-20 w-full max-w-xl m-auto border border-gray-200 shadow-xl p-5 rounded py-10 relative">
            <i className="bg-green-600 p-2 w-20 h-20 absolute -top-2 left-1/2 right-1/2 text-5xl text-white rounded-full flex justify-center items-center">
              <FaUserCircle />
            </i>
            <input type="text" className="w-full border rounded p-3 mb-5" placeholder="Email address" />
            <input type="text" className="w-full border rounded p-3 mb-5" placeholder="Password" />
            <Link href="/">
              <button className="p-3 w-full bg-green-600 text-white font-semibold text-xl uppercase">Login</button>
            </Link>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default login
