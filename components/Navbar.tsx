"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Factura365"
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#caracteristicas" className="hover:text-gray-900 transition-colors">
            Características
          </Link>
          <Link href="/#como-funciona" className="hover:text-gray-900 transition-colors">
            Cómo funciona
          </Link>
          <Link href="/#precios" className="hover:text-gray-900 transition-colors">
            Precios
          </Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Abrir app
          </a>
          <Link
            href={siteConfig.registerUrl}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Empezar gratis
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/#caracteristicas" onClick={() => setMenuOpen(false)}>Características</Link>
          <Link href="/#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</Link>
          <Link href="/#precios" onClick={() => setMenuOpen(false)}>Precios</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Abrir app
          </a>
          <Link
            href={siteConfig.registerUrl}
            className="bg-blue-600 text-white text-center font-semibold px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Empezar gratis
          </Link>
        </div>
      )}
    </header>
  )
}
