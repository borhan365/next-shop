import React from "react";
import Image from 'next/image'
import ThreeColBannerData from "../../Data/ThreeColBannerData";

const bg1 = "/images/fruits/bg1.jpg"; 
const bg2 = "/images/fruits/bg2.jpg"; 

function ThreeColBanner() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-4">
        {/* item */}
        {ThreeColBannerData.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-md w-full bg-center bg-no-repeat bg-cover h-auto flex justify-between gap-3 items-center shadow-md"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="w-full">
              <Image
                src={item.img}
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="w-full">
              <h2 className="text-1xl font-bold line text-gray-900">
                {item.title}{" "}
                <span className="text-green-900">{item.discount}</span>
              </h2>
              <button className="text-white font-semibold text-sm bg-green-600 p-2 rounded-full border shadow-md px-5 mt-2">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ThreeColBanner;
