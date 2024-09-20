import React from 'react'

const Cards = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-lg  text-gray-700 mb-2">{title}</h2>
      <p className="text-black font-extrabold text-xl mb-4">{description}</p>
      <a href={link} className="text-black underline font-medium">Learn more</a>
    </div>
  </div>
  )
}

export default Cards