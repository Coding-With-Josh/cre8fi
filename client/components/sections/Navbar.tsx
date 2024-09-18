'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed bg-transparent backdrop-blur-md border-b border-white/20 shadow-lg w-screen z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-2xl text-primary">Cre8Fi</span>
            </Link>

            <div className="hidden md:block md: ml-10">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      pathname === item.path
                        ? 'text-primary border-b-2 border-primary/50'
                        : 'text-gray-300 hover:text-primary '
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">Log In</Link>
              <Link href="/signup" className="ml-3 px-4 py-2 rounded-full text-sm font-medium text-white bg-primary/30 hover:bg-primary/80 transition-colors duration-300">Sign Up</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="block px-3 py-2 rounded-full text-base font-medium text-gray-300 hover:text-primary hover:bg-primary/5" onClick={() => setIsOpen(false)}>Log In</Link>
          <Link href="/signup" className="block px-3 py-2 rounded-full text-base font-medium text-white bg-primary/30 hover:bg-primary/80" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;