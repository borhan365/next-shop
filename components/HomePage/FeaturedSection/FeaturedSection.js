import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../Title'
import FeaturedBanner from './FeaturedBanner'
import BigFeaturedItem from './BigFeaturedItem'
import FeaturedItems from './FeaturedItems'

function FeaturedSection() {
  return (
    <>
      <div className="flex justify-between gap-4 mb-10">

          {/* featured item */}
          <div className="w-1/4">
            <BigFeaturedItem />
          </div>

          {/* list of items and down banner ads */}
          <div className="w-3/4">
              <Title title="Featured Vegetables" />
              <FeaturedItems />
              <FeaturedBanner />
          </div>
          
      </div>
    </>
  )
}

export default FeaturedSection
