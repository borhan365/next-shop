import React from 'react'
import MenuHeader from '../Header/MenuHeader'
import SecondHeader from '../Header/SecondHeader'
import TopHeader from '../Header/TopHeader'
import HeroSection from './HeroSection'

function HomePage() {
  return (
    <>
      <TopHeader />
      <SecondHeader />
      <MenuHeader />

      <div className="container">
        <HeroSection />
      </div>

    </>
  )
}

export default HomePage
