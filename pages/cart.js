import React from 'react'
import CartPage from '../components/CartPage/CartPage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function cart() {
  return (
    <>
      <Header />
      <div className="container">
          <CartPage />
      </div>
      <Footer />
    </>
  )
}

export default cart
