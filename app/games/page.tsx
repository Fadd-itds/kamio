'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function GamesPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activePlatform, setActivePlatform] = useState('Semua');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allGames = [
    {
      title: 'Meet With the Girl Beyond the Sky',
      genre: 'Visual Novel',
      platform: 'Android • Windows',
      status: 'Coming Soon',
      thumbnail: '🌌',
    },
    {
      title: 'Our Spring Together',
      genre: 'Visual Novel',
      platform: 'Android',
      status: 'Archived / Prototype',
      thumbnail: '🌸',
    },
  ];

  const platforms = [
    { name: 'Android', status: 'Available' },
    { name: 'Windows', status: 'Available' },
    { name: 'Linux', status: 'Coming Soon' },
    { name: 'macOS', status: 'Coming Soon' },
    { name: 'Web', status: 'Coming Soon' },
  ];

  const features = [
    { icon: '📖', title: 'Cerita Original', desc: 'Alur cerita mendalam yang dikembangkan khusus oleh tim Kamio.' },
    { icon: '🎨', title: 'Visual Berkualitas', desc: 'Sentuhan art style menawan dengan perhatian penuh pada detail visual.' },
    { icon: '🎵', title: 'Audio Imersif', desc: 'Soundtrack dan efek suara orisinal untuk pengalaman bermain yang emosional.' },
    { icon: '📱', title: 'Optimasi Mobile', desc: 'Performa mulus dan ringan saat dimainkan di berbagai perangkat genggam.' },
    { icon: '🌍', title: 'Multi Bahasa', desc: 'Dukungan berbagai bahasa untuk menjangkau pemain di seluruh dunia.' },
    { icon: '🔄', title: 'Update Berkala', desc: 'Pembaruan konten, perbaikan bug, dan tambahan fitur secara kontinu.' },
  ];

  const roadmapItems = [
    { year: '2026', title: 'Game Pertama', desc: 'Peluncuran perdana judul game utama dari Kamio.' },
    { year: '2027', title: '2 Game Baru', desc: 'Ekspansi portofolio dengan merilis dua judul game baru.' },
    { year: '2028', title: 'PC Expansion', desc: 'Perluasan platform game secara menyeluruh ke ranah PC.' },
  ];

  const faqs = [
    {
      q: 'Di platform apa game tersedia?',
      a: 'Game dari Kamio dirilis di berbagai platform seperti Android, Windows, Linux, macOS, dan Web tergantung pada judul dan proyeknya.'
    },
    {
      q: 'Apakah gratis?',
      a: 'Sebagian besar game kami dapat diunduh dan dimainkan secara gratis dengan opsi konten tambahan atau pembelian opsional.'
    },
    {
      q: 'Apakah ada pembelian dalam aplikasi?',
      a: 'Beberapa game menyediakan item kosmetik opsional atau bab cerita tambahan melalui pembelian dalam aplikasi (in-app purchase).'
    },
    {
      q: 'Bagaimana melaporkan bug?',
      a: 'Anda dapat melaporkan kendala atau bug melalui halaman dukungan (support) atau email langsung ke tim teknis kami.'
    },
    {
      q: 'Bagaimana menjadi beta tester?',
      a: 'Informasi pendaftaran beta tester akan diumumkan secara berkala melalui sosial media dan newsletter resmi Kamio.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Kamio Games
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Jelajahi koleksi game yang dikembangkan dan dipublikasikan oleh Kamio. Dari visual novel hingga pengalaman interaktif lainnya, kami menghadirkan hiburan digital yang dibuat dengan penuh perhatian terhadap kualitas dan cerita.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#games-list" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Jelajahi Game
          </a>
          <a href="#download" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Download
          </a>
        </div>
      </section>

      {/* Featured Game ⭐ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-amber-400">⭐</span>
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-300">Featured Game</h3>
        </div>
        
        <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                Visual Novel
              </span>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold rounded-lg">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Meet With the Girl Beyond the Sky
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Sebuah visual novel emosional tentang pertemuan tak terduga melintasi batasan dunia. Ikuti kisah penuh teka-teki dan pilihan naratif yang menentukan akhir cerita.
            </p>
            <div className="pt-2">
              <Link href="/games/meet-with-the-girl" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
                Lihat Detail
              </Link>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-2">
              Nanti ketika game pertama rilis, bagian ini otomatis berubah menjadi game terbaru atau paling direkomendasikan.
            </p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl h-64 sm:h-80 flex items-center justify-center text-6xl shadow-inner">
            🌌
          </div>
        </div>
      </section>

      {/* Semua Game & Filter */}
      <section id="games-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Semua Game</h2>
          
          {/* Filter Kategori */}
          <div className="flex flex-wrap gap-2">
            {['Semua', 'Visual Novel', 'Puzzle', 'Adventure', 'Simulation', 'Coming Soon'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Card Filter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {platforms.map((p) => (
            <button
              key={p.name}
              onClick={() => setActivePlatform(activePlatform === p.name ? 'Semua' : p.name)}
              className={`p-4 rounded-2xl border text-left transition space-y-1 ${
                activePlatform === p.name
                  ? 'bg-blue-950/40 border-blue-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <h4 className="font-bold text-white text-sm">{p.name}</h4>
              <p className="text-[11px] text-slate-400 font-mono">
                {p.status === 'Coming Soon' ? (
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-[10px]">Coming Soon</span>
                ) : (
                  <span className="text-emerald-400">Available</span>
                )}
              </p>
            </button>
          ))}
        </div>

        {/* Grid 3 Kolom Card Game */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {allGames.map((game, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800/80 rounded-2xl h-48 flex items-center justify-center text-5xl">
                  {game.thumbnail}
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-blue-400 font-bold">{game.genre}</span>
                  <h3 className="text-lg font-bold text-white">{game.title}</h3>
                  <p className="text-xs text-slate-400">{game.platform}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono font-bold rounded-lg">
                  {game.status}
                </span>
                <Link href={`/games/${game.title.toLowerCase().replace(/ /g, '-')}`} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition">
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mengapa Bermain Game Kamio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Mengapa Bermain Game Kamio</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Komitmen kami dalam meracik hiburan digital berkualitas tinggi.</p>
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

      {/* Screenshot Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Screenshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['Game 1 - Screenshot 1', 'Game 1 - Screenshot 2', 'Game 1 - Screenshot 3'].map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl h-48 sm:h-60 flex flex-col items-center justify-center gap-2 text-slate-500 shadow-inner">
              <span className="text-3xl">🖼️</span>
              <span className="text-xs font-mono">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trailer Video */}
      <section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-6 scroll-mt-20">
        <h2 className="text-2xl font-extrabold text-white">Trailer</h2>
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-slate-950 aspect-video flex flex-col items-center justify-center gap-4 text-slate-400 relative">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg shadow-blue-500/30 cursor-pointer hover:bg-blue-700 transition">
              ▶
            </div>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Official Trailer • Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Roadmap</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Rencana pengembangan game Kamio ke depan.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roadmapItems.map((r, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 text-center shadow-sm">
              <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                {r.year}
              </span>
              <h4 className="font-bold text-white text-base">{r.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
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

      {/* CTA Banner Background Biru */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-gradient-to-r from-blue-900/60 via-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Siap Memulai Petualangan?</h3>
            <p className="text-blue-100 text-xs sm:text-sm">Temukan game favorit Anda dari Kamio.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#games-list" className="px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl text-xs transition shadow">
              Lihat Semua Game
            </a>
          </div>
        </div>
      </section>

      {/* Footer Standar */}
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