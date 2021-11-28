import React from 'react'
import MenuHeader from '../Header/MenuHeader'
import SecondHeader from '../Header/SecondHeader'
import TopHeader from '../Header/TopHeader'
import BlogSection from './BlogSection/BlogSection'
import CategorySection from './CategorySection/CategorySection'
import FeaturedSection from './FeaturedSection/FeaturedSection'
import HeroSection from './HeroSection/HeroSection'
import JustArrivedSection from './JustArrivedSection/JustArrivedSection'
import LatestProduct from './LatestProduct/LatestProduct'
import ThreeColBanner from './ThreeColBanner/ThreeColBanner'
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
        <FeaturedSection />
        <ThreeColBanner />
        <BlogSection />
      </div>

    </>
  )
}

export default HomePage
