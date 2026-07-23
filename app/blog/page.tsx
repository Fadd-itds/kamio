'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');

  const categories = ['Semua', 'Teknologi', 'Produk', 'Tutorial', 'Developer', 'Bisnis', 'Perusahaan', 'Keamanan'];

  const recentArticles = [
    {
      id: 1,
      title: 'Mengenal Kamio Store',
      summary: 'Eksplorasi mendalam bagaimana Kamio Store mendistribusikan aplikasi dan layanan digital secara aman dan cepat.',
      category: 'Produk',
      date: '21 Jul 2026',
      readTime: '4 menit baca',
      thumbnail: '🛍️'
    },
    {
      id: 2,
      title: 'Tips Mengelola File Digital',
      summary: 'Strategi praktis merapikan aset digital perusahaan dan pribadi agar produktivitas meningkat secara signifikan.',
      category: 'Tutorial',
      date: '19 Jul 2026',
      readTime: '3 menit baca',
      thumbnail: '📁'
    },
    {
      id: 3,
      title: 'Mengapa Privasi Data Itu Penting?',
      summary: 'Komitmen Kamio dalam menjaga enkripsi dan keamanan data pengguna di era ancaman siber modern.',
      category: 'Keamanan',
      date: '15 Jul 2026',
      readTime: '6 menit baca',
      thumbnail: '🔒'
    },
    {
      id: 4,
      title: 'Perjalanan Membangun Kamio',
      summary: 'Kisah dibalik layar bagaimana ekosistem teknologi Kamio dirintis dari awal hingga menjadi platform terintegrasi.',
      category: 'Perusahaan',
      date: '10 Jul 2026',
      readTime: '7 menit baca',
      thumbnail: '🚀'
    },
    {
      id: 5,
      title: 'Cara Memulai Developer Hub',
      summary: 'Panduan lengkap bagi pengembang untuk mengintegrasikan API dan layanan Kamio ke dalam aplikasi Anda.',
      category: 'Developer',
      date: '05 Jul 2026',
      readTime: '5 menit baca',
      thumbnail: '💻'
    }
  ];

  const popularArticles = [
    'Cara Upgrade Premium',
    'Mengenal Kamio Store',
    'Membangun Website Modern',
    'Panduan Developer Hub'
  ];

  const topics = [
    { name: 'Teknologi', icon: '💻' },
    { name: 'Aplikasi', icon: '📱' },
    { name: 'Game', icon: '🎮' },
    { name: 'Buku', icon: '📚' },
    { name: 'Cloud', icon: '☁️' },
    { name: 'AI', icon: '🤖' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Blog <span className="text-blue-500">Kamio</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Temukan artikel, panduan, wawasan teknologi, pengembangan produk, dan cerita di balik ekosistem Kamio.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="#artikel-terbaru" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-600/20">
            Jelajahi Artikel
          </a>
          <a href="#newsletter" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition">
            Berlangganan
          </a>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Featured Article ⭐ */}
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Artikel Unggulan ⭐</h2>
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-64 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center text-6xl shadow-inner">
              ⚡
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">Teknologi</span>
                <span className="text-slate-400">5 menit membaca</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight hover:text-blue-400 transition cursor-pointer">
                Cara Kami Membangun Ekosistem Teknologi Kamio
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Menyelami arsitektur di balik layar, skalabilitas sistem, dan prinsip desain yang kami terapkan untuk menyatukan berbagai layanan digital dalam satu ekosistem yang mulus.
              </p>
              <div className="flex items-center justify-between pt-4">
                <span className="text-xs text-slate-500">Ditulis oleh <strong className="text-slate-300">Tim Kamio</strong></span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Kategori Grid Horizontal */}
        <section className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-500 shadow'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Layout Utama & Sidebar Populer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Artikel Terbaru (3 Kolom Grid / 2 Kolom di layout ini) */}
          <div id="artikel-terbaru" className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Artikel Terbaru</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentArticles.map((art) => (
                <div key={art.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition shadow-sm">
                  <div>
                    <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-center text-3xl mb-4">
                      {art.thumbnail}
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-blue-400 font-semibold">{art.category}</span>
                      <span className="text-slate-500">{art.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-blue-400 transition cursor-pointer">{art.title}</h3>
                    <p className="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">{art.summary}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs">
                    <span className="text-slate-500">{art.date}</span>
                    <button className="text-blue-400 font-bold hover:underline">Baca →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Artikel Populer & Topik Pilihan */}
          <div className="space-y-8">
            
            {/* Artikel Populer */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
                <span>🔥</span> Artikel Terpopuler
              </h3>
              <ul className="space-y-3">
                {popularArticles.map((pop, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 hover:text-blue-400 transition cursor-pointer border-b border-slate-800/40 pb-2.5 last:border-0">
                    <span className="text-blue-500 font-mono font-bold">0{idx + 1}</span>
                    <span className="line-clamp-2">{pop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topik Pilihan */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold border-b border-slate-800 pb-3">Topik Pilihan</h3>
              <div className="grid grid-cols-2 gap-2">
                {topics.map((top, idx) => (
                  <button key={idx} className="flex items-center gap-2 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition">
                    <span>{top.icon}</span>
                    <span>{top.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Newsletter Section (Background Berbeda) */}
        <section id="newsletter" className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Jangan Lewatkan Artikel Terbaru</h2>
            <p className="text-slate-400 text-sm">Dapatkan wawasan teknologi, tips, dan pembaruan produk langsung ke inbox Anda.</p>
          </div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Masukkan email Anda..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-blue-600/20">
              Berlangganan
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-4 py-6">
          <h3 className="text-xl font-bold">Ingin mengetahui lebih banyak?</h3>
          <p className="text-slate-400 text-sm">Jelajahi seluruh artikel dan wawasan dari Kamio.</p>
          <div className="pt-2">
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold text-sm transition">
              Lihat Semua Artikel
            </button>
          </div>
        </section>

      </main>

      {/* Footer Lengkap Multi-Kolom Sesuai Referensi */}
      <footer className="bg-[#090D16] border-t border-slate-800 text-slate-400 text-xs mt-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            
            {/* Kolom 1: Brand & Deskripsi */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-1.5 text-xl font-extrabold text-white tracking-wider">
                <span>KAMIO</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.
              </p>
              <div className="space-y-1 text-slate-500 pt-2">
                <p>© 2026–Present PT Kamio Sentra Multiteknologi.</p>
                <p>Building the Future with Technology.</p>
                <p className="pt-1 text-slate-400 font-medium">Made in Indonesia</p>
              </div>
            </div>

            {/* Kolom 2: Produk */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">PRODUK</h4>
              <ul className="space-y-2.5">
                <li><Link href="/games" className="hover:text-white transition">Games</Link></li>
                <li><Link href="/books" className="hover:text-white transition">Books</Link></li>
                <li><Link href="/store" className="hover:text-white transition">Store</Link></li>
                <li><Link href="/downloader" className="hover:text-white transition">Downloader</Link></li>
              </ul>
            </div>

            {/* Kolom 3: Solusi */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">SOLUSI</h4>
              <ul className="space-y-2.5">
                <li><Link href="/solutions/individu" className="hover:text-white transition">Individu</Link></li>
                <li><Link href="/solutions/bisnis" className="hover:text-white transition">Bisnis</Link></li>
                <li><Link href="/solutions/enterprise" className="hover:text-white transition">Enterprise</Link></li>
                <li><Link href="/solutions/developer" className="hover:text-white transition">Developer</Link></li>
              </ul>
            </div>

            {/* Kolom 4: Perusahaan */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">PERUSAHAAN</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="hover:text-white transition">Tentang</Link></li>
                <li><Link href="/karier" className="hover:text-white transition">Karier</Link></li>
                <li><Link href="/news" className="hover:text-white transition">Berita</Link></li>
                <li><Link href="/investor" className="hover:text-white transition">Investor</Link></li>
              </ul>
            </div>

            {/* Kolom 5: Resource */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">RESOURCE</h4>
              <ul className="space-y-2.5">
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-white transition">Docs</Link></li>
                <li><Link href="/status" className="hover:text-white transition">Status</Link></li>
                <li><Link href="/brand" className="hover:text-white transition">Brand</Link></li>
              </ul>
            </div>

            {/* Kolom 6: Legal & Social */}
            <div className="space-y-3 lg:col-span-1">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">LEGAL & SOCIAL</h4>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition">Cookies</Link></li>
                <li><Link href="/refund" className="hover:text-white transition">Refund</Link></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">X</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>

          </div>

          {/* Bagian Bawah Footer: Baris Newsletter Sesuai Gambar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <h5 className="font-bold text-white text-sm">Berlangganan Newsletter Kamio</h5>
              <p className="text-slate-400 text-xs">Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.</p>
            </div>
            <div className="w-full lg:w-auto flex items-center gap-3">
              <input 
                type="email" 
                placeholder="Masukkan email Anda..." 
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="w-full lg:w-72 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
              />
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow shrink-0">
                Berlangganan
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}