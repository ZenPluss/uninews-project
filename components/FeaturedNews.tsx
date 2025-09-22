import Image from 'next/image'
import Link from 'next/link'

const featuredNews = {
  title: "One Piece Chapter 1100: Revelasi Mengejutkan tentang Masa Lalu Luffy!",
  excerpt: "Chapter terbaru One Piece mengungkap rahasia besar tentang masa kecil Luffy dan koneksinya dengan Gol D. Roger. Plot twist yang tidak terduga mengubah seluruh perspektif cerita!",
  image: "/images/OP1100.jpg",
  category: "Manga",
  date: "2024-01-15",
  author: "Admin",
  readTime: "5 min read",
  tags: ["One Piece", "Eiichiro Oda", "Revelation", "Shonen Jump"]
}

export default function FeaturedNews() {
  return (
    <div className="news-card hover-lift rounded-2xl overflow-hidden glass-effect animate-fade-in-up">
      <div className="md:flex bg-gradient-to-br from-gray-900/50 to-gray-800/30">
        <div className="md:w-2/3 relative">
          <Image
            src={featuredNews.image}
            alt={featuredNews.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-full object-cover"
          />
          {/* Overlay untuk kontras teks lebih baik */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          
          {/* Content di atas gambar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center text-sm mb-3">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                {featuredNews.category}
              </span>
              <span>📅 {new Date(featuredNews.date).toLocaleDateString('id-ID')}</span>
              <span className="mx-2">•</span>
              <span>👤 {featuredNews.author}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight drop-shadow-lg">
              {featuredNews.title}
            </h3>
            
            <p className="text-gray-200 mb-4 line-clamp-2 drop-shadow-md">
              {featuredNews.excerpt}
            </p>
          </div>
        </div>
        
        {/* Side Info Panel */}
        <div className="md:w-1/3 p-8 flex flex-col justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="space-y-4">
            <div className="flex items-center text-sm text-white">
              <span className="bg-blue-500/20 px-3 py-1 rounded-lg mr-3">⏱️</span>
              <span>{featuredNews.readTime}</span>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {featuredNews.tags.map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <Link 
              href="#" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover-lift mt-4 group"
            >
              🚀 Baca Selengkapnya
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}