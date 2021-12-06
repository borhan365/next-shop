import React from 'react'
import MenuHeader from './MenuHeader'
import SecondHeader from './SecondHeader'
import TopHeader from './TopHeader'
import ShoppingCart from './ShoppingCart'

function Header() {
  return (
    <>
     <div className="hidden sm:block">
       <TopHeader />
        <SecondHeader />
        <MenuHeader /> 
     </div>
    </> 
  )
}

export default Header
