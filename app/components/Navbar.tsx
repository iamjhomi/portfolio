"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Set dark mode permanently on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <header className="w-full bg-[#1a1a1a] dark:bg-[#0a0a0a] sticky top-0 z-50 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="#home" className="text-2xl font-bold text-white tracking-tight">
            Hom<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">i</span>
            <span className="text-purple-500">.</span>
          </Link>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8">
          <a href="#home" onClick={(e) => smoothScrollTo(e, 'home')} className="text-white hover:text-purple-400 transition-colors duration-1500 relative group font-medium cursor-pointer">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-1500"></span>
          </a>
          <a href="#about" onClick={(e) => smoothScrollTo(e, 'about')} className="text-white hover:text-purple-400 transition-colors duration-1500 relative group font-medium cursor-pointer">
            About Me
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-1500"></span>
          </a>
          <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="text-white hover:text-purple-400 transition-colors duration-1500 relative group font-medium cursor-pointer">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-1500"></span>
          </a>
          <a href="#contact" onClick={(e) => smoothScrollTo(e, 'contact')} className="text-white hover:text-purple-400 transition-colors duration-1500 relative group font-medium cursor-pointer">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-1500"></span>
          </a>
        </nav>

        {/* Right Side: Connect Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all duration-500 ease-in-out"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </header>
  );
}
