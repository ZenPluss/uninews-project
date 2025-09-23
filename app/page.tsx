'use client'

import { useEffect, useState, useRef } from 'react'
import FeaturedNews from '@/components/FeaturedNews'
import NewsList from '@/components/NewsList'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const newsSectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Fungsi untuk scroll ke section berita
  const scrollToNews = () => {
    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Fungsi untuk pergi ke halaman anime
  const goToAnimePage = () => {
    router.push('/news?category=anime')
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background dan efek lainnya tetap sama */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/70 to-blue-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-30 max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4">
          {/* Animated Logo/Title */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-2xl relative">
                ANINEWS
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mix-blend-overlay animate-pulse"></span>
              </h1>
              
              <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6 animate-width-expand"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="glass-effect rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-2xl backdrop-blur-xl">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                Portal Berita Terupdate Dunia Anime & Manga
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {['🎌', '🎮', '📺', '📚', '🎨'].map((emoji, i) => (
                  <span 
                    key={i}
                    className="text-xl sm:text-2xl animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons - NOW FUNCTIONAL */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
              {/* Tombol Jelajahi Berita - Scroll ke section berita */}
              <button 
                onClick={scrollToNews}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg sm:text-xl hover-lift transform hover:scale-110 transition-all duration-300 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  📖 Jelajahi Berita
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {/* Tombol Trending Anime - Redirect ke halaman anime */}
              <button 
                onClick={goToAnimePage}
                className="group relative glass-effect border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/10 transition-all duration-300 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  🎬 Trending Anime
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '500+', label: 'Berita Update', emoji: '📰' },
                { number: '50K+', label: 'Pembaca Setia', emoji: '👥' },
                { number: '100+', label: 'Series Tercover', emoji: '🎞️' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="glass-effect rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.emoji}</div>
                    <div className="text-3xl font-bold text-white drop-shadow-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-200 font-medium mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 animate-pulse">Scroll untuk Explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/50 to-gray-900/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-2xl">
                🎯 BERITA UTAMA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Temukan berita-berita terpenting dan terupdate dari dunia anime dan manga
            </p>
          </div>
          <FeaturedNews />
        </div>
      </section>

      {/* News List Section - dengan ref untuk scroll */}
      <section 
        ref={newsSectionRef} 
        className="py-20 px-4 bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-2xl">
                📰 BERITA TERBARU
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Update terkini seputar anime, manga, film, dan event terbaru
            </p>
            
            {/* Navigation cepat ke kategori */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button 
                onClick={() => router.push('/news?category=anime')}
                className="glass-effect px-6 py-3 rounded-lg hover:bg-blue-500/20 transition-all border border-blue-500/30"
              >
                🎬 Anime
              </button>
              <button 
                onClick={() => router.push('/news?category=manga')}
                className="glass-effect px-6 py-3 rounded-lg hover:bg-green-500/20 transition-all border border-green-500/30"
              >
                📚 Manga
              </button>
              <button 
                onClick={() => router.push('/news?category=review')}
                className="glass-effect px-6 py-3 rounded-lg hover:bg-yellow-500/20 transition-all border border-yellow-500/30"
              >
                ⭐ Review
              </button>
              <button 
                onClick={() => router.push('/news')}
                className="glass-effect px-6 py-3 rounded-lg hover:bg-purple-500/20 transition-all border border-purple-500/30"
              >
                📰 Semua Berita
              </button>
            </div>
          </div>
          <NewsList />
        </div>
      </section>
    </div>
  )
}