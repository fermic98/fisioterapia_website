"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Gestisce lo scroll per nascondere la navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollY;
      
      setIsScrolled(isScrollingDown && scrollY > 100);
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Barra principale - completamente trasparente */}
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-white">
            Body Revival
          </Link>

          {/* Hamburger menu button - Visibile solo su mobile */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu - Nascosto su mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className={`text-white hover:underline ${
                    isActive("/") ? "font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi"
                  className={`text-white hover:underline ${
                    isActive("/servizi") ? "font-semibold" : ""
                  }`}
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link
                  href="/corpo-umano-in-movimento"
                  className={`text-white hover:underline ${
                    isActive("/corpo-umano-in-movimento") ? "font-semibold" : ""
                  }`}
                >
                  Corpo umano in movimento
                </Link>
              </li>
              <li>
                <Link
                  href="/chi-sono"
                  className={`text-white hover:underline ${
                    isActive("/chi-sono") ? "font-semibold" : ""
                  }`}
                >
                  Chi Sono
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu overlay - Posizionato absolute per sovrapporre il contenuto */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out bg-black/80 backdrop-blur-md ${
          isMenuOpen ? "max-h-64 opacity-100 py-2" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul>
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 text-white hover:bg-white/10 ${
                  isActive("/") ? "font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/servizi"
                className={`block px-4 py-2 text-white hover:bg-white/10 ${
                  isActive("/servizi") ? "font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Servizi
              </Link>
            </li>
            <li>
              <Link
                href="/corpo-umano-in-movimento"
                className={`block px-4 py-2 text-white hover:bg-white/10 ${
                  isActive("/corpo-umano-in-movimento") ? "font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Corpo umano in movimento
              </Link>
            </li>
            <li>
              <Link
                href="/chi-sono"
                className={`block px-4 py-2 text-white hover:bg-white/10 ${
                  isActive("/chi-sono") ? "font-semibold" : ""
                }`}
                onClick={closeMenu}
              >
                Chi Sono
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}