import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Text and CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl lg:text-6xl font-extrabold text-[#00000] mb-6">
            CREATE AND SELL <br /> CUSTOM PRODUCTS
          </h1>

          {/* Features */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> 100% Free to use
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> 900+ products
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> Global delivery
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#b1ff4f] text-[#464225] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#a1ee3d] transition duration-300 mb-4">
            Get started for free
          </button>
          <p className="text-gray-600">No credit card required</p>

          {/* Ratings and Trust Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-2 mt-6">
            <p className="text-black font-semibold">Trusted by 10M+ sellers</p>
            <span>|</span>
            <div className="flex items-center">
              <span className="text-[#000000] mr-2">⭐⭐⭐⭐⭐</span>
              <span className="text-[#464225] font-bold">4.8</span>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s"
              alt="Shopify"
              className="h-6 ml-2"
            />
            <span className='font-extrabold '>shopify</span>
           <span>and</span>
            <img
              src="https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg"
              alt="Trustpilot"
              className="h-6 ml-2"
            />
            <span className='font-semibold'>Trustpilot</span>
          </div>
        </div>

        {/* Right Section: Image/Illustration */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <video
            src="https://printify.com/pfh/assets/hero/newbies-hero-horizontal.mp4"
            autoPlay
            className="w-[500px] h-[400px] object-cover"
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero