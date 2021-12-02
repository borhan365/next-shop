import React from 'react'
import MenuHeader from './MenuHeader'
import SecondHeader from './SecondHeader'
import TopHeader from './TopHeader'
import ShoppingCart from './ShoppingCart'

function Header() {
  return (
    <>
     <TopHeader />
     <SecondHeader />
     <MenuHeader /> 
     {/* <ShoppingCart /> */}
    </>
  )
}

export default Header
