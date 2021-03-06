import Image from 'next/image';
import React from 'react';
import { A11y, Navigation, Pagination } from 'swiper';
// import { EffectCards } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-cards';


function HeroSlider() {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >

      <SwiperSlide>
          <div className="bg-green-300 flex-row sm:flex justify-between items-center gap-4 h-full sm:h-96 w-full p-10">
            
            {/* content */}
            <div className="w-full">
              <h1 className="text-2xl sm:text-6xl font-bold mb-2 sm:mb-5">Simple - <br /> Fresh Food</h1>
              <p className="text-sm sm:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

              <button className="mt-3 text-xl sm:text-5xl font-black p-2 px-8 sm:px-10 rounded-full text-green-900 bg-white border-2 border-green-900">$199</button>
            </div>

            {/* thumb */}
            <div className="w-full">
              <Image width={450} height={400} className="object-contain" src="/images/fruits/banner3.png" />
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="bg-green-300 flex-row sm:flex justify-between items-center gap-4 h-full sm:h-96 w-full p-10">
            
            {/* content */}
            <div className="w-full">
              <h1 className="text-2xl sm:text-6xl font-bold mb-2 sm:mb-5">Simple - <br /> Fresh Food</h1>
              <p className="text-sm sm:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

              <button className="mt-3 text-xl sm:text-5xl font-black p-2 px-8 sm:px-10 rounded-full text-green-900 bg-white border-2 border-green-900">$199</button>
            </div>

            {/* thumb */}
            <div className="w-full">
              <Image width={450} height={400} className="object-contain" src="/images/fruits/banner1.png" />
            </div>
          </div>
      </SwiperSlide>

    </Swiper>
    </>
  )
}

export default HeroSlider
