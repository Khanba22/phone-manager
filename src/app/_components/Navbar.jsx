'use client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Company Name and Location */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">Contact Manager</span>
          <span className="text-sm text-gray-500">| Made By Mushan Khan</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/dashboard"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Dashboard
          </a>
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home Page
          </Link>
          <a
            href="https://github.com/Khanba22"
            target='_blank'
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            My Github
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div id="mobile-menu" className="md:hidden hidden bg-white shadow-md">
        <nav className="flex flex-col space-y-2 px-4 py-3">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Link 1
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Link 2
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Link 3
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
