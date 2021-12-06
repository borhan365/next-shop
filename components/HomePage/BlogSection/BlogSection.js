import React from 'react'
import BlogData from '../../Data/BlogData'
import Title from '../Title'
import Image from  'next/image'
import Link from 'next/link'

function BlogSection() {
  return (
    <>
      <div className="mt-4 sm:mt-8 mb-2 sm:mb-10">
        <Title title="Read Latest Blog"/>

        {/* items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {
            BlogData.map((item, index) => (
              <div key={index} className="border border-gray-100 shadow p-2">
                <Link href="/blog/single">
                  <a>
                    <Image src={item.img} width={300} height={300} className="object-contain" alt={item.title} />

                    <h2 className="font-semibold capitalize text-green-700 text-2xl my-2">{item.title}</h2>
                    <p>{item.desc}</p>

                    <button className="text-white bg-green-700 p-2 w-full mt-2 rounded-sm uppercase">Read More</button>
                  </a> 
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BlogSection
