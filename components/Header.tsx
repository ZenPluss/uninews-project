'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Detect active page berdasarkan path dan query parameters
  useEffect(() => {
    const category = searchParams.get('category')
    
    if (pathname === '/') {
      setActivePage('home')
    } else if (pathname === '/news') {
      if (category) {
        setActivePage(category) // anime, manga, review
      } else {
        setActivePage('news')
      }
    }
  }, [pathname, searchParams])

  const handleCategoryClick = (category: string) => {
    router.push(`/news?category=${category.toLowerCase()}`)
    setIsMenuOpen(false)
  }

  const handleNavigation = (page: string) => {
    setActivePage(page)
    setIsMenuOpen(false)
  }

  // Fungsi untuk menentukan style aktif
  const getActiveStyle = (page: string) => {
    return activePage === page 
      ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg'
      : 'text-gray-300 hover:text-white'
  }

  const getMobileActiveStyle = (page: string) => {
    return activePage === page 
      ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-r-4 border-purple-500 pl-3'
      : 'text-gray-300 hover:text-white'
  }

  return (
    <header className="glass-effect sticky top-0 z-50 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">漢</span>
            </div>
            <span className={`text-xl font-bold font-orbitron transition-all duration-300 ${
              activePage === 'home' ? 'text-white' : 'text-gray-300 group-hover:text-white'
            }`}>
              AniNews
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-4 py-2 transition-all duration-300 ${getActiveStyle('home')}`}
              onClick={() => handleNavigation('home')}
            >
              <span className="flex items-center gap-2">
                🏠 Home
              </span>
            </Link>
            
            <Link 
              href="/news" 
              className={`px-4 py-2 transition-all duration-300 ${getActiveStyle('news')}`}
              onClick={() => handleNavigation('news')}
            >
              <span className="flex items-center gap-2">
                📰 Semua Berita
              </span>
            </Link>
            
            <button 
              onClick={() => handleCategoryClick('anime')}
              className={`px-4 py-2 transition-all duration-300 ${getActiveStyle('anime')}`}
            >
              <span className="flex items-center gap-2">
                🎬 Anime
                {activePage === 'anime' && (
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
            
            <button 
              onClick={() => handleCategoryClick('manga')}
              className={`px-4 py-2 transition-all duration-300 ${getActiveStyle('manga')}`}
            >
              <span className="flex items-center gap-2">
                📚 Manga
                {activePage === 'manga' && (
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
            
            <button 
              onClick={() => handleCategoryClick('review')}
              className={`px-4 py-2 transition-all duration-300 ${getActiveStyle('review')}`}
            >
              <span className="flex items-center gap-2">
                ⭐ Review
                {activePage === 'review' && (
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
          </div>

          {/* Search & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover-lift transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
              🔐 Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect rounded-xl mt-2 p-6 border border-white/10 shadow-2xl">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`py-3 px-4 transition-all duration-300 ${getMobileActiveStyle('home')}`}
                onClick={() => handleNavigation('home')}
              >
                <span className="flex items-center gap-3">
                  🏠 Home
                  {activePage === 'home' && (
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </Link>
              
              <Link 
                href="/news" 
                className={`py-3 px-4 transition-all duration-300 ${getMobileActiveStyle('news')}`}
                onClick={() => handleNavigation('news')}
              >
                <span className="flex items-center gap-3">
                  📰 Semua Berita
                  {activePage === 'news' && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </Link>
              
              <button 
                onClick={() => handleCategoryClick('anime')}
                className={`py-3 px-4 transition-all duration-300 text-left ${getMobileActiveStyle('anime')}`}
              >
                <span className="flex items-center gap-3">
                  🎬 Anime
                  {activePage === 'anime' && (
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
              
              <button 
                onClick={() => handleCategoryClick('manga')}
                className={`py-3 px-4 transition-all duration-300 text-left ${getMobileActiveStyle('manga')}`}
              >
                <span className="flex items-center gap-3">
                  📚 Manga
                  {activePage === 'manga' && (
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
              
              <button 
                onClick={() => handleCategoryClick('review')}
                className={`py-3 px-4 transition-all duration-300 text-left ${getMobileActiveStyle('review')}`}
              >
                <span className="flex items-center gap-3">
                  ⭐ Review
                  {activePage === 'review' && (
                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
              
              <div className="pt-4 border-t border-gray-600 mt-2">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 rounded-lg font-semibold hover-lift transition-all duration-300">
                  🔐 Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Active Indicator Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
        style={{
          width: '100%',
          transform: 'scaleX(1)',
          opacity: activePage !== 'home' ? 1 : 0.7
        }}
      />
    </header>
  )
}