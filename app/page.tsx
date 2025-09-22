import React from 'react';

const HomePage: React.FC = () => {
  // Data berita contoh
  const newsItems = [
    {
      id: 1,
      title: 'Perkembangan Terbaru dalam Perundingan Perdamaian',
      excerpt: 'Para diplomat melaporkan kemajuan signifikan dalam perundingan perdamaian yang sedang berlangsung...',
      category: 'Politik',
      date: '15 Maret 2023',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      id: 2,
      title: 'Inovasi Teknologi Terbaru Ubah Cara Kerja Perusahaan',
      excerpt: 'Perusahaan teknologi meluncurkan produk revolusioner yang diharapkan dapat mengubah landscape industri...',
      category: 'Teknologi',
      date: '14 Maret 2023',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      id: 3,
      title: 'Pasar Saham Global Tunjukkan Pemulihan',
      excerpt: 'Indeks pasar saham utama di seluruh dunia menunjukkan tanda-tanda pemulihan setelah periode volatilitas...',
      category: 'Ekonomi',
      date: '14 Maret 2023',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      id: 4,
      title: 'Tim Nasional Raih Kemenangan Penting di Kualifikasi',
      excerpt: 'Dalam pertandingan yang menegangkan, tim nasional berhasil meraih kemenangan penting menuju turnamen internasional...',
      category: 'Olahraga',
      date: '13 Maret 2023',
      image: 'https://picsum.photos/600/400?random=4'
    },
    {
      id: 5,
      title: 'Konferensi Perubahan Iklim Hasilkan Kesepakatan Baru',
      excerpt: 'Para pemimpin dunia menyepakati serangkaian langkah baru untuk mengatasi tantangan perubahan iklim...',
      category: 'Lingkungan',
      date: '12 Maret 2023',
      image: 'https://picsum.photos/600/400?random=5'
    },
    {
      id: 6,
      title: 'Festival Budaya Internasional Sukses Digelar',
      excerpt: 'Ribuan pengunjung memadati festival budaya internasional yang menampilkan keberagaman seni dan tradisi...',
      category: 'Budaya',
      date: '11 Maret 2023',
      image: 'https://picsum.photos/600/400?random=6'
    }
  ];

  return (
    <>
      <section className="hero">
        <h1>Berita Terkini dari Seluruh Dunia</h1>
        <p>Dapatkan informasi terbaru dan terpercaya tentang berbagai peristiwa penting global</p>
      </section>
      
      <section className="featured-news">
        <h2>Berita Utama</h2>
        <div className="news-grid">
          {newsItems.map((news) => (
            <article key={news.id} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{news.title}</h3>
                <p className="news-excerpt">{news.excerpt}</p>
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                  <span className="news-date">{news.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section className="newsletter">
        <h2>Berlangganan Newsletter</h2>
        <p>Dapatkan berita terbaru langsung ke email Anda</p>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Masukkan alamat email Anda" 
            required 
          />
          <button type="submit">Berlangganan</button>
        </form>
      </section>
    </>
  );
};

export default HomePage;