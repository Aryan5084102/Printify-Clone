import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-[#2f2e0c] text-white py-10">
    <div className="container mx-auto px-4 ">
      {/* Top Section: Logo on the left and Social Media Icons on the right */}
      <div className="flex justify-between items-center mb-16">
        {/* Company Logo */}
        <div className="flex-shrink-0 text-4xl font-extrabold">
           Printify 
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-white text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="text-white text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="text-white text-xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" className="text-white text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" className="text-white text-xl">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com" className="text-white text-xl">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://reddit.com" className="text-white text-xl">
            <i className="fab fa-reddit-alien"></i>
          </a>
        </div>
      </div>

      {/* Footer Content: 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Integrations */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Integrations</h2>
          <ul>
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
            <li>Printify API</li>
          </ul>
        </div>

        {/* Column 2 - Discover */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Discover</h2>
          <ul>
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>WooCommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
            <li>Brands</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Column 3 - Start Selling */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Start selling</h2>
          <ul>
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
            <li>Custom All-Over-Print Hoodies</li>
          </ul>
        </div>

        {/* Column 4 - Printify */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Printify</h2>
          <ul>
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer