'use client'

import { useSearchParams } from 'next/navigation'
import NewsList from '@/components/NewsList'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewsPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState(category || 'all')
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setActiveCategory(category || 'all')
    setIsVisible(true)
    
    // Scroll to top ketika kategori berubah
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [category])

  const categories = [
    { 
      id: 'all', 
      name: 'Semua Berita', 
      emoji: '', 
      color: 'from-purple-500 to-pink-500',
      icon: ''
    },
    { 
      id: 'anime', 
      name: 'Anime', 
      emoji: '', 
      color: 'from-blue-500 to-cyan-500',
      icon: ''
    },
    { 
      id: 'manga', 
      name: 'Manga', 
      emoji: '', 
      color: 'from-green-500 to-emerald-500',
      icon: ''
    },
    { 
      id: 'review', 
      name: 'Review', 
      emoji: '', 
      color: 'from-yellow-500 to-orange-500',
      icon: ''
    }
  ]

  const getPageTitle = () => {
    const categoryInfo = categories.find(cat => cat.id === activeCategory)
    return categoryInfo ? `${categoryInfo.emoji} ${categoryInfo.name.toUpperCase()}` : 'SEMUA BERITA'
  }

  const getPageDescription = () => {
    switch (activeCategory) {
      case 'anime':
        return 'Jelajahi dunia anime dengan berita terbaru seputar season baru, film, karakter, dan update terkini dari berbagai studio'
      case 'manga':
        return 'Temukan chapter terbaru, plot twist mengejutkan, dan perkembangan seru dari manga-manga populer Jepang'
      case 'review':
        return 'Baca ulasan mendalam dan analisis kritikus tentang anime dan manga terbaru sebelum memutuskan untuk menonton/membaca'
      default:
        return 'Kumpulan lengkap berita terupdate seputar anime dan manga dari berbagai kategori dan genre'
    }
  }

  const getActiveCategoryInfo = () => {
    return categories.find(cat => cat.id === activeCategory) || categories[0]
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Update URL tanpa reload page
    if (categoryId === 'all') {
      router.push('/news', { scroll: false })
    } else {
      router.push(`/news?category=${categoryId}`, { scroll: false })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Hero Section dengan Animasi */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        {/* Background Gradient Dinamis */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getActiveCategoryInfo().color.replace('from-', 'from-').replace('to-', 'to-')}/20 transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              {getActiveCategoryInfo().icon}
            </div>
          ))}
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4">
          {/* Animated Title */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="text-6xl md:text-8xl mb-4 animate-bounce-slow">
                {getActiveCategoryInfo().emoji}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 drop-shadow-2xl">
                {getPageTitle()}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
                {getPageDescription()}
              </p>

              {/* Category Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-gray-300">Artikel {activeCategory !== 'all' ? activeCategory : ''}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">Update Terkini</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-300">Kualitas Konten</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Category Filter Buttons */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
                    activeCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-2xl scale-105 ring-2 ring-white/30`
                      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <span className="text-2xl">{cat.emoji}</span>
                    {cat.name}
                    {activeCategory === cat.id && (
                      <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    )}
                  </span>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Active Pulse Effect */}
                  {activeCategory === cat.id && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.color} animate-pulse opacity-50 -z-10`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-2 animate-pulse">Scroll untuk melihat berita</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section dengan Enhanced Design */}
      <section className="relative py-20 px-4">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/10 to-gray-900/80">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-2xl">
                📋 DAFTAR BERITA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Temukan {activeCategory === 'all' ? 'semua' : activeCategory} berita terbaru yang sedang trending
            </p>
            
            {/* Active Category Badge */}
            <div className="inline-flex items-center gap-2 mt-4 glass-effect px-6 py-3 rounded-full border border-white/10">
              <span className="text-2xl">{getActiveCategoryInfo().emoji}</span>
              <span className="font-semibold text-white">Kategori Aktif: {getActiveCategoryInfo().name}</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* News List */}
          <NewsList showAll={true} category={activeCategory === 'all' ? null : activeCategory} />
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl font-bold text-lg hover-lift transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                🔄 Muat Lebih Banyak
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              🚀 Tidak Mau Ketinggalan Update?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Dapatkan notifikasi langsung ketika ada berita terbaru tentang {activeCategory !== 'all' ? activeCategory : 'anime dan manga'} favorit Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-xl glass-effect border border-white/20 focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold hover-lift transform hover:scale-105 transition-all duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}