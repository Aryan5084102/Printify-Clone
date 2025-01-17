import React, { useState } from 'react';

const Pricing = () => {
  const [price, setPrice] = useState(20); // Initial price for the product
  const [dailySales, setDailySales] = useState(1); // Initial daily sales
  const fulfillmentCost = 8.26; // Constant fulfillment cost

  // Calculate monthly earnings
  const monthlyEarnings = (price - fulfillmentCost) * dailySales * 30;

  return (
    <div className="bg-[#2f2e0c] min-h-screen flex flex-col py-28 justify-center items-center">
      {/* Centered heading */}
      <h1 className="text-4xl font-black mb-16 text-white text-center">
        See how much you can make:
      </h1>

      {/* Content container with max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8">
          {/* Left side image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://printify.com/pfh/assets/profit-calculator/t-shirt-desktop.jpg"
              alt="Tshirt Image"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2 px-6">
            <h2 className="text-xl font-bold text-gray-800 mb-8">Choose a product</h2>

            {/* Product Selection */}
            <div className="mb-8">
              {/* <label className="block text-sm font-medium text-gray-700 mb-2">Choose a product</label> */}
              <div className="flex space-x-2">
                <button className="bg-gray-200 py-2 px-4 rounded-lg">Tshirt</button>
                <button className="bg-gray-200 py-2 px-4 rounded-lg">Socks</button>
                <button className="bg-gray-200 py-2 px-4 rounded-lg">Phone case</button>
                <button className="bg-gray-200 py-2 px-4 rounded-lg">Notebook</button>
              </div>
            </div>

            {/* Price Slider */}
            <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Quantity and Price</h2>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Sell it for:</label>
              <input
                type="range"
                min="10"
                max="100"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-right text-gray-800 font-bold">${price}</div>
            </div>

            {/* Daily Sales Slider */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Daily sales:</label>
              <input
                type="range"
                min="1"
                max="100"
                value={dailySales}
                onChange={(e) => setDailySales(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-right text-gray-800 font-bold">{dailySales}</div>
            </div>

            {/* Monthly Earnings */}
            <div className="bg-lime-300 p-4 pb-28 rounded-lg text-center font-extrabold text-2xl text-black">
              Your monthly earnings: <br /> ${monthlyEarnings.toFixed(2)} 
            <div className="mt-12">
              <button className="bg-black text-white py-4 px-6 rounded-lg  font-bold">
                Start designing
              </button>
            </div>
            </div>

            {/* Button */}

            {/* Fulfillment Cost Note */}
            <p className="text-xs text-gray-600 mt-4 text-center">
              *The production cost includes the fulfillment price of one item with one print. It doesn’t include shipping fees, taxes, and other possible storefront expenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
