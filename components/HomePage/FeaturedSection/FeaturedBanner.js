import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeaturedBanner() {
  return (
    <>
      <div className="mt-3">
        <Link href="/single">
            <a>
              <Image className="" width={1000} height={90} src="/images/fruits/fresh-banner.png" className="object-cover" />
            </a>
        </Link>
      </div>
    </>
  )
}

export default FeaturedBanner
