import React from 'react'
import MenuHeader from '../Header/MenuHeader'
import SecondHeader from '../Header/SecondHeader'
import TopHeader from '../Header/TopHeader'
import CategorySection from './CategorySection/CategorySection'
import HeroSection from './HeroSection/HeroSection'
import TwoColBanner from './TwoColBanner.js/TwoColBanner'

function HomePage() {
  return (
    <>
      <TopHeader />
      <SecondHeader />
      <MenuHeader />

      <div className="container">
        <HeroSection />
        <CategorySection />
        <TwoColBanner />
      </div>

    </>
  )
}

export default HomePage
