import React from 'react'

const Ideas = () => {
  return (
    <div className="max-w-full my-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-extrabold my-10">Ideas and inspiration</h1>

        {/* Content Section */}
        <div className="flex  w-full gap-4">
          {/* Left side image */}
          <div className="w-full md:w-6/12">
            <img
              src="https://printify.com/pfh/assets/products-display/grid-image-1.png"
              alt="Error"
              className="w-full h-[710px]"
            />
          </div>

          {/* Right side grid */}
          <div className="w-full md:w-6/12 flex flex-col gap-4">
            {/* Top Image */}
            <div className="w-full h-96">
              <img
                src="https://printify.com/pfh/assets/products-display/grid-image-2.png"
                alt="Error"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom two smaller images */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <img
                  src="https://printify.com/pfh/assets/products-display/grid-image-3.png"
                  alt="Error"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="https://printify.com/pfh/assets/products-display/grid-image-4.png"
                  alt="Error"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Ideas