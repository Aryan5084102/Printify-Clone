import React, {useState} from 'react'
import {Link}  from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-2 items-center">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold text-[#000000]">Printify</h1>
          </div>

          {/* Hamburger menu (for small screens) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#000000] inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8 text-[#000000] font-medium">
            <Link to="/catalog" className="hover:underline">
              Catalog
            </Link>
            <Link to="/how-it-works" className="hover:underline">
              How it works
            </Link>
            <Link to="/pricing" className="hover:underline">
              Pricing
            </Link>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/use-cases" className="hover:underline">
              Use-cases
            </Link>
            <Link to="/need-help" className="hover:underline">
              Need help?
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/login">
              <button className="border border-[#464225] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#f1f1f1]">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#b1ff4f] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#a1ee3d]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is toggled) */}
      {isOpen && (
        <div className="">
          <div className="px-2 pt-2 pb-3 space-y-1 text-[#464225] font-medium">
            <Link to="/catalog" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Catalog
            </Link>
            <Link to="/how-it-works" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              How it works
            </Link>
            <Link to="/pricing" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Pricing
            </Link>
            <Link to="/blog" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Blog
            </Link>
            <Link to="/services" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link to="/use-cases" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Use-cases
            </Link>
            <Link to="/need-help" className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              Need help?
            </Link>
            <div className="mt-3 space-y-1">
              <Link to="/login">
                <button className="block w-full border border-[#464225] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#f1f1f1]">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="block w-full bg-[#b1ff4f] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#a1ee3d]">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar