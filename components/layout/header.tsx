"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons/custom-icons"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/80 backdrop-blur-md border-b border-white/20",
        isScrolled ? "h-14 shadow-sm" : "h-16",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">БА</span>
          </div>
          <span className="font-bold text-xl text-gray-900">БелАвто Центр</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Каталог
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            О нас
          </Link>
          <Link href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+375291234567" className="text-gray-700 hover:text-blue-600 font-medium">
            +375 (29) 123-45-67
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PhoneIcon className="w-4 h-4 mr-2" />
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            <Link href="/catalog" className="block text-gray-700 font-medium">
              Каталог
            </Link>
            <Link href="/about" className="block text-gray-700 font-medium">
              О нас
            </Link>
            <Link href="/contacts" className="block text-gray-700 font-medium">
              Контакты
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <a href="tel:+375291234567" className="block text-blue-600 font-medium mb-3">
                +375 (29) 123-45-67
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Связаться</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
