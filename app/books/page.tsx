'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BooksPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allBooks = [
    {
      title: 'Membangun Startup Digital',
      author: 'Tim Kamio',
      category: 'Teknologi',
      status: 'Coming Soon',
      cover: '💻',
    },
    {
      title: 'Jejak Langkah di Uwan',
      author: 'Ayu Lestari',
      category: 'Novel',
      status: 'Coming Soon',
      cover: '📖',
    },
    {
      title: 'Panduan Desain UI/UX Modern',
      author: 'Raka Pratama',
      category: 'Pendidikan',
      status: 'Coming Soon',
      cover: '🎨',
    },
    {
      title: 'Strategi Bisnis Era AI',
      author: 'Budi Santoso',
      category: 'Bisnis',
      status: 'Coming Soon',
      cover: '📈',
    },
  ];

  const categories = ['Semua', 'Novel', 'Komik', 'Teknologi', 'Bisnis', 'Pendidikan', 'Pengembangan Diri'];

  const features = [
    { icon: '📖', title: 'Koleksi Berkualitas', desc: 'Kurasi buku digital pilihan dari penulis dan kreator terpercaya.' },
    { icon: '📱', title: 'Baca di Mana Saja', desc: 'Akses perpustakaan digital Anda dengan mulus di berbagai gawai.' },
    { icon: '🌏', title: 'Mendukung Multi Bahasa', desc: 'Pilihan bahasa yang beragam untuk kenyamanan membaca.' },
    { icon: '🔄', title: 'Update Berkala', desc: 'Pembaruan bab, edisi revisi, dan rilis judul baru secara rutin.' },
    { icon: '⚡', title: 'Akses Cepat', desc: 'Unduh dan buka lembar halaman instan tanpa hambatan loading.' },
    { icon: '🔒', title: 'Pembelian Aman', desc: 'Sistem transaksi terlindungi dengan berbagai metode pembayaran.' },
  ];

  const readingPlatforms = [
    { name: 'Google Play Books', status: 'Available' },
    { name: 'Web Reader', status: 'Available' },
    { name: 'Android', status: 'Available' },
    { name: 'iOS', status: 'Coming Soon' },
  ];

  const popularLists = [
    { title: 'Top Download', items: ['Membangun Startup Digital', 'Jejak Langkah di Uwan', 'Strategi Bisnis Era AI'] },
    { title: "Editor's Choice", items: ['Panduan Desain UI/UX Modern', 'Membangun Startup Digital'] },
    { title: 'Trending', items: ['Jejak Langkah di Uwan', 'Strategi Bisnis Era AI', 'Panduan Desain UI/UX Modern'] },
  ];

  const faqs = [
    {
      q: 'Bagaimana membeli buku?',
      a: 'Anda dapat memilih buku melalui katalog, melakukan pembayaran via metode yang tersedia, dan buku akan langsung masuk ke perpustakaan digital Anda.'
    },
    {
      q: 'Apakah tersedia versi cetak?',
      a: 'Saat ini Kamio Books berfokus penuh pada distribusi buku digital (e-book) untuk menjangkau pembaca secara global dan praktis.'
    },
    {
      q: 'Di mana saya membaca buku?',
      a: 'Buku dapat dibaca langsung melalui Web Reader di browser atau menggunakan aplikasi pembaca yang didukung seperti Google Play Books dan perangkat Android.'
    },
    {
      q: 'Bagaimana menjadi penulis?',
      a: 'Anda dapat mendaftarkan diri melalui program penerbitan penulis di platform Kamio dengan mengirimkan draf karya untuk dikurasi.'
    },
    {
      q: 'Apakah tersedia refund?',
      a: 'Ketentuan pengembalian dana mengikuti kebijakan refund Kamio yang berlaku untuk produk digital.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Kamio Books
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Jelajahi koleksi buku digital yang diterbitkan oleh Kamio. Mulai dari novel, komik, panduan, hingga buku edukasi yang dapat dinikmati di berbagai perangkat.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#koleksi-buku" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Jelajahi Buku
          </a>
          <a href="#menjadi-penulis" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Menjadi Penulis
          </a>
        </div>
      </section>

      {/* Featured Book ⭐ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-amber-400">⭐</span>
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-300">Featured Book</h3>
        </div>
        
        <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                Novel
              </span>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold rounded-lg">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Buku Unggulan Kamio
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Karya pilihan dengan narasi mendalam yang siap membawa imajinasi Anda menembus batas baru. Diterbitkan secara eksklusif oleh Kamio Books.
            </p>
            <div className="pt-2">
              <Link href="/books/featured" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
                Baca Selengkapnya
              </Link>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-2">
              Nanti otomatis mengambil buku terbaru.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl h-64 sm:h-80 flex items-center justify-center text-6xl shadow-inner">
            📖
          </div>
        </div>
      </section>

      {/* Koleksi Buku & Filter & Search */}
      <section id="koleksi-buku" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8 scroll-mt-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Koleksi Buku</h2>
          
          {/* Search Box */}
          <div className="w-full lg:w-80">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 text-xs">
                🔍
              </span>
              <input 
                type="text"
                placeholder="Cari buku..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Kategori Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid 4 Kolom Card Buku */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {allBooks
            .filter(b => activeCategory === 'Semua' || b.category === activeCategory)
            .filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((book, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-slate-950 border border-slate-800/80 rounded-2xl h-48 flex items-center justify-center text-5xl">
                    {book.cover}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-blue-400 font-bold">{book.category}</span>
                    <h3 className="text-base font-bold text-white line-clamp-1">{book.title}</h3>
                    <p className="text-xs text-slate-400">Oleh {book.author}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono font-bold rounded-lg">
                    {book.status}
                  </span>
                  <Link href={`/books/${book.title.toLowerCase().replace(/ /g, '-')}`} className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition">
                    Lihat Detail
                  </Link>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* Mengapa Memilih Kamio Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Mengapa Memilih Kamio Books</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Platform baca digital terpadu untuk pengalaman literasi terbaik.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
              <div className="text-3xl">{f.icon}</div>
              <h4 className="font-bold text-white text-base">{f.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buku Terbaru & Buku Populer (Carousel / Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-12">
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-white">Buku Terbaru</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Cover 1', 'Cover 2', 'Cover 3', 'Cover 4'].map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl h-44 flex flex-col items-center justify-center gap-2 text-slate-500 shadow-inner">
                <span className="text-3xl">📘</span>
                <span className="text-xs font-mono">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-extrabold text-white">Buku Populer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {popularLists.map((list, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
                <h4 className="font-bold text-blue-400 text-sm uppercase tracking-wider">{list.title}</h4>
                <ul className="space-y-3 text-xs text-slate-300 divide-y divide-slate-800/80">
                  {list.items.map((bookItem, i) => (
                    <li key={i} className="pt-3 first:pt-0 flex items-center justify-between">
                      <span className="font-medium hover:text-white transition cursor-pointer">{bookItem}</span>
                      <span className="text-slate-500 font-mono text-[10px]">#0{i+1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Membaca */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Platform Membaca</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Nikmati koleksi buku Kamio di berbagai ekosistem pembaca pilihan.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {readingPlatforms.map((p, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 text-center space-y-2 shadow-sm">
              <h4 className="font-bold text-white text-base">{p.name}</h4>
              <p className="text-xs font-mono">
                {p.status === 'Coming Soon' ? (
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-[10px]">Coming Soon</span>
                ) : (
                  <span className="text-emerald-400">Available</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Menjadi Penulis Card Besar */}
      <section id="menjadi-penulis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full scroll-mt-20">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl max-w-4xl mx-auto">
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
              Program Penulis
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Terbitkan Buku Anda Bersama Kamio</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Kami membuka peluang bagi penulis untuk menerbitkan karya digital melalui ekosistem Kamio dan menjangkau pembaca yang lebih luas.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/books/publish" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
              Pelajari Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-6">
        <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">FAQ (Pertanyaan Umum)</h3>
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm divide-y divide-slate-800/80">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left font-semibold text-sm sm:text-base text-slate-200 hover:text-white transition"
              >
                <span>{faq.q}</span>
                <span className="text-blue-400 text-lg font-mono">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-gradient-to-r from-blue-900/60 via-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Temukan Cerita Baru Bersama Kamio</h3>
            <p className="text-blue-100 text-xs sm:text-sm">Jelajahi koleksi buku digital kami.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#koleksi-buku" className="px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl text-xs transition shadow">
              Lihat Semua Buku
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090D16] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            
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

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">PRODUK</h4>
              <ul className="space-y-2.5">
                <li><Link href="/games" className="hover:text-white transition">Games</Link></li>
                <li><Link href="/books" className="hover:text-white transition">Books</Link></li>
                <li><Link href="/store" className="hover:text-white transition">Store</Link></li>
                <li><Link href="/downloader" className="hover:text-white transition">Downloader</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">SOLUSI</h4>
              <ul className="space-y-2.5">
                <li><Link href="/solutions/individu" className="hover:text-white transition">Individu</Link></li>
                <li><Link href="/solutions/bisnis" className="hover:text-white transition">Bisnis</Link></li>
                <li><Link href="/solutions/enterprise" className="hover:text-white transition">Enterprise</Link></li>
                <li><Link href="/solutions/developer" className="hover:text-white transition">Developer</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">PERUSAHAAN</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="hover:text-white transition">Tentang</Link></li>
                <li><Link href="/karier" className="hover:text-white transition">Karier</Link></li>
                <li><Link href="/news" className="hover:text-white transition">Berita</Link></li>
                <li><Link href="/investor" className="hover:text-white transition">Investor</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">RESOURCE</h4>
              <ul className="space-y-2.5">
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-white transition">Docs</Link></li>
                <li><Link href="/status" className="hover:text-white transition">Status</Link></li>
                <li><Link href="/brand" className="hover:text-white transition">Brand</Link></li>
              </ul>
            </div>

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