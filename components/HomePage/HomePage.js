import React from 'react'
import MenuHeader from '../Header/MenuHeader'
import SecondHeader from '../Header/SecondHeader'
import TopHeader from '../Header/TopHeader'
import CategorySection from './CategorySection/CategorySection'
import HeroSection from './HeroSection/HeroSection'
import JustArrivedSection from './JustArrivedSection/JustArrivedSection'
import LatestProduct from './LatestProduct/LatestProduct'
import TwoColBanner from './TwoColBanner/TwoColBanner'

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
        <JustArrivedSection />
        <LatestProduct />
      </div>

    </>
  )
}

export default HomePage
