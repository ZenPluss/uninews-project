import React from 'react';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="id">
      <head>
        <title>Global News - Situs Berita Terkini</title>
        <meta name="description" content="Dapatkan berita terkini dari seluruh dunia" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">Global News</div>
              <nav className="nav">
                <ul>
                  <li><a href="#">Beranda</a></li>
                  <li><a href="#">Politik</a></li>
                  <li><a href="#">Ekonomi</a></li>
                  <li><a href="#">Teknologi</a></li>
                  <li><a href="#">Olahraga</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="logo">Global News</div>
                <p>Menyajikan berita terkini dari seluruh dunia</p>
              </div>
              <nav className="footer-nav">
                <ul>
                  <li><a href="#">Tentang Kami</a></li>
                  <li><a href="#">Kontak</a></li>
                  <li><a href="#">Kebijakan Privasi</a></li>
                  <li><a href="#">Syarat & Ketentuan</a></li>
                </ul>
              </nav>
            </div>
            <div className="copyright">
              &copy; {new Date().getFullYear()} Global News. Semua hak dilindungi.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;