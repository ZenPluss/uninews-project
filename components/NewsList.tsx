import NewsCard from './NewsCard'

// 15 Data Dummy Berita Animanga
const newsData = [
  {
    id: 1,
    title: "Demon Slayer Season 4 Diumumkan, Rilis Tahun 2024",
    excerpt: "Ufotable resmi mengumumkan season ke-4 dari anime populer Demon Slayer dengan arc Hashira Training.",
    image: "/images/Demonslayer.jpg",
    category: "Anime",
    date: "2024-01-15",
    author: "Admin",
    readTime: "4 min read",
    tags: ["Demon Slayer", "Ufotable", "Shonen"]
  },
  {
    id: 2,
    title: "Jujutsu Kaisen Chapter 245: Pertarungan Epik Yuta vs Sukuna",
    excerpt: "Chapter terbaru JJK menampilkan pertarungan memikat antara Yuta Okkotsu dan Raja Kutukan.",
    image: "/images/JJK245.jpg",
    category: "Manga",
    date: "2024-01-14",
    author: "Admin",
    readTime: "5 min read",
    tags: ["Jujutsu Kaisen", "Gege Akutami", "Shonen Jump"]
  },
  {
    id: 3,
    title: "Review: Spy x Family Movie Raih Pujian Kritikus",
    excerpt: "Film Spy x Family mendapatkan review positif dari berbagai kritikus anime internasional.",
    image: "/images/SXFMovie.jpg",
    category: "Review",
    date: "2024-01-13",
    author: "Reviewer",
    readTime: "6 min read",
    tags: ["Spy x Family", "Movie", "Comedy"]
  },
  {
    id: 4,
    title: "One Piece Chapter 1100: Revelasi Masa Lalu Luffy",
    excerpt: "Chapter terbaru mengungkap rahasia besar tentang masa kecil Luffy dan koneksinya dengan Roger.",
    image: "/images/OP1100.jpeg",
    category: "Manga",
    date: "2024-01-12",
    author: "Admin",
    readTime: "7 min read",
    tags: ["One Piece", "Eiichiro Oda", "Revelation"]
  },
  {
    id: 5,
    title: "Attack on Titan Jadi Anime Terpopuler 2023",
    excerpt: "Berdasarkan polling internasional, AOT dinobatkan sebagai anime terpopuler tahun 2023.",
    image: "/images/aot.jpg",
    category: "Anime",
    date: "2024-01-11",
    author: "Admin",
    readTime: "3 min read",
    tags: ["Attack on Titan", "Award", "Popular"]
  },
  {
    id: 6,
    title: "Manga Chainsaw Man Part 2 Capai 3 Juta Copy Terjual",
    excerpt: "Bagian kedua manga Chainsaw Man mencapai penjualan fantastis dalam waktu singkat.",
    image: "/images/chainsaw.jpg",
    category: "Manga",
    date: "2024-01-10",
    author: "Admin",
    readTime: "4 min read",
    tags: ["Chainsaw Man", "Tatsuki Fujimoto", "Sales"]
  },
  {
    id: 7,
    title: "Review: Blue Lock - Anime Sepak Bola yang Revolusioner",
    excerpt: "Blue Lock menghadirkan konsep baru dalam genre sports anime dengan pendekatan psikologis.",
    image: "/images/BL.jpg",
    category: "Review",
    date: "2024-01-09",
    author: "Reviewer",
    readTime: "8 min read",
    tags: ["Blue Lock", "Sports", "Psychological"]
  },
  {
    id: 8,
    title: "Studio Ghibli Umumkan Film Baru untuk 2024",
    excerpt: "Studio legendaris Ghibli mengumumkan produksi film animasi baru yang akan rilis tahun depan.",
    image: "/images/ghibli.jpg",
    category: "Anime",
    date: "2024-01-08",
    author: "Admin",
    readTime: "5 min read",
    tags: ["Studio Ghibli", "Movie", "Hayao Miyazaki"]
  },
  {
    id: 9,
    title: "Manga Solo Leveling Cetak Rekor Penjualan Global",
    excerpt: "Adaptasi manga Solo Leveling berhasil mencetak rekor penjualan di pasar internasional.",
    image: "/images/solo.jpg",
    category: "Manga",
    date: "2024-01-07",
    author: "Admin",
    readTime: "4 min read",
    tags: ["Solo Leveling", "Manhwa", "Record"]
  },
  {
    id: 10,
    title: "Review: Frieren - Beyond Journey's End - Masterpiece Fantasy",
    excerpt: "Frieren membawa konsep fantasy yang dalam dan emosional dengan animasi memukau.",
    image: "/images/FREIREN.jpg",
    category: "Review",
    date: "2024-01-06",
    author: "Reviewer",
    readTime: "7 min read",
    tags: ["Frieren", "Fantasy", "Madhouse"]
  },
  {
    id: 11,
    title: "Anime My Hero Academia Season 7 Rilis April 2024",
    excerpt: "Season terakhir My Hero Academia diumumkan akan tayang mulai April 2024.",
    image: "/images/mha-season8.jpg",
    category: "Anime",
    date: "2024-01-05",
    author: "Admin",
    readTime: "3 min read",
    tags: ["My Hero Academia", "Bones", "Final Season"]
  },
  {
    id: 12,
    title: "Manga Kingdom Chapter 800: Puncak Arc Perang",
    excerpt: "Chapter spesial ke-800 Kingdom menghadirkan puncak arc perang yang epik.",
    image: "/images/kingdom.jpg",
    category: "Manga",
    date: "2024-01-04",
    author: "Admin",
    readTime: "6 min read",
    tags: ["Kingdom", "Historical", "War"]
  },
  {
    id: 13,
    title: "Review: Vinland Saga Season 2 - Perubahan Karakter yang Dalam",
    excerpt: "Season kedua Vinland Saga menghadirkan perkembangan karakter Thorfinn yang luar biasa.",
    image: "/images/vinland.jpg",
    category: "Review",
    date: "2024-01-03",
    author: "Reviewer",
    readTime: "9 min read",
    tags: ["Vinland Saga", "Historical", "Character Development"]
  },
  {
    id: 14,
    title: "Anime Oshi no Ko Season 2 Dikonfirmasi Production",
    excerpt: "Season kedua anime hit Oshi no Ko resmi masuk tahap produksi.",
    image: "/images/oshi.jpg",
    category: "Anime",
    date: "2024-01-02",
    author: "Admin",
    readTime: "4 min read",
    tags: ["Oshi no Ko", "Doga Kobo", "Sequel"]
  },
  {
    id: 15,
    title: "Manga Berserk Chapter 375: Kelanjutan Cerita Setelah Hiatus",
    excerpt: "Chapter terbaru Berserk kembali setelah hiatus panjang dengan cerita yang mencekam.",
    image: "/images/berserk.jpg",
    category: "Manga",
    date: "2024-01-01",
    author: "Admin",
    readTime: "5 min read",
    tags: ["Berserk", "Dark Fantasy", "Kentaro Miura"]
  }
]

interface NewsListProps {
  showAll?: boolean
  category?: string | null
}

export default function NewsList({ showAll = false, category = null }: NewsListProps) {
  const filteredNews = category 
    ? newsData.filter(news => news.category.toLowerCase() === category.toLowerCase())
    : newsData

  const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 6)

  if (displayedNews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">😢</div>
        <h3 className="text-2xl font-bold mb-2">Tidak ada berita ditemukan</h3>
        <p className="text-gray-400">Coba gunakan kategori lain atau lihat semua berita.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
}