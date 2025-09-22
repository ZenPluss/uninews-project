import Image from 'next/image'
import Link from 'next/link'

interface News {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  readTime: string
  tags: string[]
}

interface NewsCardProps {
  news: News
}

export default function NewsCard({ news }: NewsCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Anime': return 'bg-blue-500'
      case 'Manga': return 'bg-green-500'
      case 'Review': return 'bg-yellow-500'
      default: return 'bg-purple-500'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <article className="news-card hover-lift rounded-xl overflow-hidden glass-effect h-full flex flex-col">
      <div className="relative">
        <Image
          src={news.image}
          alt={news.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`${getCategoryColor(news.category)} text-white px-2 py-1 rounded text-xs font-bold`}>
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-gray-400 mb-3">
          <span>{formatDate(news.date)}</span>
          <span className="mx-2">•</span>
          <span>{news.author}</span>
          <span className="mx-2">•</span>
          <span>{news.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight">
          {news.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
          {news.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
          {news.tags.length > 2 && (
            <span className="bg-gray-600 text-gray-400 px-2 py-1 rounded text-xs">
              +{news.tags.length - 2}
            </span>
          )}
        </div>
        
        <Link 
          href={`/news/${news.id}`}
          className="inline-flex items-center text-pink-400 hover:text-pink-300 text-sm font-semibold mt-auto group"
        >
          Baca Selengkapnya
          <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}