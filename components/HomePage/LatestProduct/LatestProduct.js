import React from 'react'
import Title from '../Title'
import Link from 'next/link'
import Image from 'next/image'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'

function LatestProduct() {
  return (
    <>
      <Title title="Latest Fruits" />

      {/* Latest product */}
      <div className="grid grid-cols-5 gap-3 items-start mb-20">

        {/* item */}
        <div className="border border-gray-100 rounded-sm shadow-md">

            {/* thumbnail */}
            <Link href="/single">
              <a>
                <Image src="/images/fruits/dragon-fruit-thai-net-weight-100-gm-11-kg.webp" width={300} height={300} className="object-contain rounded-sm" />
              </a>
            </Link>

            {/* content area */}
            <div className="p-2"> 
              <Link href="/single">
                <a>
                  <h2 className="font-medium text-md my-1">Pure vagetables</h2>

                  {/* reviews */}
                  <div className="flex justify-start gap-1">
                    <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                    <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                    <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                    <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                    <i className="text-yellow-600 text-sm"><BsStarHalf /></i>
                  </div>

                  {/* price and discount */}
                  <div>
                    <h3 className="my-1">
                      {/* line through */}
                      <span className="text-sm text-gray-500 font-medium line-through">$149</span>

                      {/* discount */}
                      <span className="text-xs text-gray-500 font-medium">(-25%)</span></h3> 

                      {/* actual price */}
                      <span className="text-green-700 font-semibold text-1xl"> $49 </span>
                  </div>
                  </a>
              </Link>
            </div>

        </div>
        {/* item */}
        <div className="border border-gray-200 rounded-sm shadow-md">

            {/* thumbnail */}
            <Image src="/images/fruits/gala-apple-net-weight-50-gm-1-kg.webp" width={300} height={300} className="object-contain rounded-sm" />

            {/* content area */}
            <div className="p-2"> 
              <h2 className="font-medium text-md my-1">Pure vagetables</h2>

              {/* reviews */}
              <div className="flex justify-start gap-1">
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarHalf /></i>
              </div>

              {/* price and discount */}
              <div>
                <h3 className="my-1">
                  {/* line through */}
                  <span className="text-sm text-gray-500 font-medium line-through">$149</span>

                  {/* discount */}
                  <span className="text-xs text-gray-500 font-medium">(-25%)</span></h3> 

                  {/* actual price */}
                  <span className="text-green-700 font-semibold text-1xl"> $49 </span>
              </div>
            </div>

        </div>
        {/* item */}
        <div className="border border-gray-200 rounded-sm shadow-md">

            {/* thumbnail */}
            <Image src="/images/fruits/banana-sagor-4-pcs.webp" width={300} height={300} className="object-contain rounded-sm" />

            {/* content area */}
            <div className="p-2"> 
              <h2 className="font-medium text-md my-1">Pure vagetables</h2>

              {/* reviews */}
              <div className="flex justify-start gap-1">
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarHalf /></i>
              </div>

              {/* price and discount */}
              <div>
                <h3 className="my-1">
                  {/* line through */}
                  <span className="text-sm text-gray-500 font-medium line-through">$149</span>

                  {/* discount */}
                  <span className="text-xs text-gray-500 font-medium">(-25%)</span></h3> 

                  {/* actual price */}
                  <span className="text-green-700 font-semibold text-1xl"> $49 </span>
              </div>
            </div>

        </div>
        {/* item */}
        <div className="border border-gray-200 rounded-sm shadow-md">

            {/* thumbnail */}
            <Image src="/images/fruits/green-coconut-daab-1-pcs.webp" width={300} height={300} className="object-contain rounded-sm" />

            {/* content area */}
            <div className="p-2"> 
              <h2 className="font-medium text-md my-1">Pure vagetables</h2>

              {/* reviews */}
              <div className="flex justify-start gap-1">
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarHalf /></i>
              </div>

              {/* price and discount */}
              <div>
                <h3 className="my-1">
                  {/* line through */}
                  <span className="text-sm text-gray-500 font-medium line-through">$149</span>

                  {/* discount */}
                  <span className="text-xs text-gray-500 font-medium">(-25%)</span></h3> 

                  {/* actual price */}
                  <span className="text-green-700 font-semibold text-1xl"> $49 </span>
              </div>
            </div>

        </div>
        {/* item */}
        <div className="border border-gray-200 rounded-sm shadow-md">

            {/* thumbnail */}
            <Image src="/images/fruits/lychee-premium-50-pcs.webp" width={300} height={300} className="object-contain rounded-sm" />

            {/* content area */}
            <div className="p-2"> 
              <h2 className="font-medium text-md my-1">Pure vagetables</h2>

              {/* reviews */}
              <div className="flex justify-start gap-1">
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarFill /></i>
                <i className="text-yellow-600 text-sm"><BsStarHalf /></i>
              </div>

              {/* price and discount */}
              <div>
                <h3 className="my-1">
                  {/* line through */}
                  <span className="text-sm text-gray-500 font-medium line-through">$149</span>

                  {/* discount */}
                  <span className="text-xs text-gray-500 font-medium">(-25%)</span></h3> 

                  {/* actual price */}
                  <span className="text-green-700 font-semibold text-1xl"> $49 </span>
              </div>
            </div>

        </div>


      </div>
    </>
  )
}

export default LatestProduct
