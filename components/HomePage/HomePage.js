import React from 'react'
import Header from '../Header/Header'
import MenuHeader from '../Header/MenuHeader'
import SecondHeader from '../Header/SecondHeader'
import TopHeader from '../Header/TopHeader'
import BlogSection from './BlogSection/BlogSection'
import CallToAction from './CallToAction/CallToAction'
import CategorySection from './CategorySection/CategorySection'
import FeaturedSection from './FeaturedSection/FeaturedSection'
import FeaturedSectionRight from './FeaturedSectionRight/FeaturedSectionRight'
import HeroSection from './HeroSection/HeroSection'
import JustArrivedSection from './JustArrivedSection/JustArrivedSection'
import LatestProduct from './LatestProduct/LatestProduct'
import ThreeColBanner from './ThreeColBanner/ThreeColBanner'
import TwoColBanner from './TwoColBanner/TwoColBanner'
import Vegetable from './Vegetable/Vegetable'

function HomePage({product}) {
  return (
    <>
      <div className="container">
        <HeroSection product={product} />
        <CategorySection />
        <TwoColBanner />
        <Vegetable />
        <JustArrivedSection />
        <LatestProduct />
        <FeaturedSection />
        <ThreeColBanner />
        <FeaturedSectionRight />
        <BlogSection />
        <CallToAction />
      </div>

    </>
  )
}

export default HomePage
