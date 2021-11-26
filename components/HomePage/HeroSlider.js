import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

function HeroSlider() {
  return (
    <>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >

      <SwiperSlide>
          <div className="bg-green-300 flex justify-between items-center gap-4">
            
            {/* content */}
            <div className="p-10">
              <h1 className="text-6xl font-bold mb-5">Simple - <br /> Freah Food</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

              <button className="mt-3 text-6xl font-black p-3 px-10 rounded-full text-green-900 bg-white border-2 border-green-900">$199</button>
            </div>

            {/* thumb */}
            <div className="p-10">
              <Image width={1200} height={1100} className="object-contain" src="/images/fruits/banner1.png" />
            </div>
          </div>
      </SwiperSlide>

    </Swiper>
    </>
  )
}

export default HeroSlider
