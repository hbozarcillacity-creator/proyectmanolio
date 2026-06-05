"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-cubicup-teal"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xl font-semibold text-white">Cubicup</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="#como-funciona"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#reformas"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Nuestras reformas
          </Link>
          <Link
            href="#business"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Business
          </Link>
          <Link
            href="#ambientes"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Ambientes
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#login"
            className="px-5 py-2 text-sm font-medium text-cubicup-navy bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#presupuesto"
            className="px-5 py-2 text-sm font-medium text-white bg-cubicup-teal rounded-full hover:bg-cubicup-teal/90 transition-colors"
          >
            Pide presupuesto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cubicup-navy/95 backdrop-blur-sm py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link
              href="#como-funciona"
              className="text-white/90 hover:text-white text-sm font-medium"
            >
              Cómo funciona
            </Link>
            <Link
              href="#reformas"
              className="text-white/90 hover:text-white text-sm font-medium"
            >
              Nuestras reformas
            </Link>
            <Link
              href="#business"
              className="text-white/90 hover:text-white text-sm font-medium"
            >
              Business
            </Link>
            <Link
              href="#ambientes"
              className="text-white/90 hover:text-white text-sm font-medium"
            >
              Ambientes
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
              <Link
                href="#login"
                className="px-5 py-2 text-sm font-medium text-center text-cubicup-navy bg-white rounded-full"
              >
                Log in
              </Link>
              <Link
                href="#presupuesto"
                className="px-5 py-2 text-sm font-medium text-center text-white bg-cubicup-teal rounded-full"
              >
                Pide presupuesto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
