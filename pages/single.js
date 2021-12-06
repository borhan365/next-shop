
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MobileHeader from '../components/MobileHeader/MobileHeader'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: '/images/fruits/banner3.png',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
      <MobileHeader />
      <Header />
      <div className="container bg-white">
        <div className="py-6">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          <section className="container grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* gallery */}
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-full object-center object-contain"
              />
            </div>

            {/* right content */}
            <div>
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mb-5">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              </div>

              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              {/* Options */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price}</p>

                {/* Reviews */}
                <div className="mt-1 sm:mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-green-600' : 'text-gray-200',
                            'h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a href={reviews.href} className="ml-3 text-sm font-medium text-green-600 hover:text-green-500">
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-2 sm:mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                'h-8 w-8 border border-green-600 border-opacity-10 rounded-full'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-2 sm:mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                      <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
                        Size guide
                      </a>
                    </div>

                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                      <div className="grid grid-cols-6 gap-1 sm:gap-2 sm:grid-cols-6 lg:grid-cols-6">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                active ? 'ring-2 ring-green-500' : '',
                                'group relative border rounded-md h-9 sm:h-10 w-10 sm:w-16 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                {size.inStock ? (
                                  <div
                                    className={classNames(
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-green-500' : 'border-transparent',
                                      'absolute -inset-px rounded-md pointer-events-none'
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <div
                                    aria-hidden="true"
                                    className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                  >
                                    <svg
                                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </div>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 sm:mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
    </div>
    <Footer />
    </>
  )
}
