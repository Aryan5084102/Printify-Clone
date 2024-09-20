import React, { useRef } from 'react'
import { carouselData } from './caraouselData';

const Carousel = () => {
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += 300;
  };

  return (
    <div className="flex flex-col items-center justify-center py-24  bg-gray-100">
      <h2 className="text-4xl font-black mb-8 text-black">
        Your next bestseller awaits
      </h2>

      <div className="relative w-full max-w-7xl">
        {/* Left Button */}
        <button
          className="absolute text-2xl left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded  shadow-md focus:outline-none"
          onClick={scrollLeft}
        >
          ←
        </button>

        {/* Carousel */}
        <div
          className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
          ref={carouselRef}
        >
          {/* Product Cards */} 
          {
            carouselData.map((item, index) => (
              <div key={index}  className="min-w-[220px] flex justify-center items-center flex-col max-h-[400px] p-4 bg-white shadow-lg rounded-lg text-center">
                <img src={item.imgUrl} alt="T-shirts" className="w-20 h-auto  object-cover mb-2" />
                <p className="font-semibold text-black">{item.title}</p>
              </div>
            ))
          }
        </div>

        {/* Right Button */}
        <button
          className="absolute text-xl right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded shadow-md focus:outline-none"
          onClick={scrollRight}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel