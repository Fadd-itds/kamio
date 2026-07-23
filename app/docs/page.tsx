'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DocPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [footerEmail, setFooterEmail] = useState('');

  const searchExamples = [
    'Cara menggunakan Kamio Store',
    'API Authentication',
    'Instalasi',
    'SDK',
    'Refund'
  ];

  const quickAccessItems = [
    { title: 'Getting Started', icon: '🚀' },
    { title: 'User Guide', icon: '📖' },
    { title: 'Developer', icon: '👨‍💻' },
    { title: 'API', icon: '🔌' },
    { title: 'SDK', icon: '📦' },
    { title: 'FAQ', icon: '📝' }
  ];

  const categories = [
    { title: 'Kamio MultiDownloader', icon: '📱' },
    { title: 'Kamio Games', icon: '🎮' },
    { title: 'Kamio Store', icon: '🛒' },
    { title: 'Kamio Books', icon: '📚' },
    { title: 'Developer Hub', icon: '💻' },
    { title: 'Platform', icon: '⚙️' }
  ];

  const gettingStartedSteps = [
    { num: '1', title: 'Pilih Produk' },
    { num: '2', title: 'Baca Panduan' },
    { num: '3', title: 'Ikuti Langkah' },
    { num: '4', title: 'Mulai Menggunakan' }
  ];

  const popularDocs = [
    'Cara Membeli Produk',
    'Cara Upgrade Premium',
    'Cara Mengaktifkan Lisensi',
    'Cara Reset Password',
    'Panduan Refund',
    'Developer Quick Start'
  ];

  const developerDocs = [
    { title: 'Authentication', badge: 'v1.0' },
    { title: 'REST API', badge: 'Stable' },
    { title: 'SDK', badge: 'Updated' },
    { title: 'Webhooks', badge: 'New' },
    { title: 'Error Codes', badge: '' },
    { title: 'Rate Limits', badge: '' }
  ];

  const faqs = [
    { q: 'Di mana memulai?', a: 'Anda dapat memulai melalui bagian Getting Started di atas untuk memilih produk dan mengikuti panduan dasar.' },
    { q: 'Bagaimana menggunakan dokumentasi?', a: 'Gunakan kolom pencarian di bagian atas atau jelajahi kategori dokumen sesuai dengan produk yang Anda gunakan.' },
    { q: 'Bagaimana melaporkan kesalahan dokumentasi?', a: 'Anda dapat menghubungi tim kami atau mengirimkan feedback melalui tautan di bagian bawah pusat bantuan.' },
    { q: 'Bagaimana meminta dokumentasi baru?', a: 'Kirimkan permintaan topik baru melalui halaman Hubungi Kami agar dapat diprioritaskan oleh tim penulis teknis kami.' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Documentation
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Panduan resmi untuk menggunakan produk, layanan, dan platform Kamio. Temukan dokumentasi, tutorial, referensi API, serta panduan teknis dalam satu tempat.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="#search-docs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-600/20">
            Mulai Membaca
          </a>
          <Link href="/solutions/developer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition">
            Developer Hub
          </Link>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 w-full">
        
        {/* Search Documentation ⭐⭐⭐⭐⭐ */}
        <section id="search-docs" className="max-w-3xl mx-auto w-full space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 focus-within:border-blue-500 transition">
              <span className="text-xl">🔍</span>
              <input 
                type="text" 
                placeholder="Cari dokumentasi..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none text-white placeholder-slate-500"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
              <span className="text-slate-500 font-semibold">Contoh:</span>
              {searchExamples.map((ex, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSearchQuery(ex)}
                  className="px-2.5 py-1 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition text-slate-300"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Grid */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Quick Access</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessItems.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center space-y-3 hover:border-slate-700 transition shadow-sm cursor-pointer group">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-bold text-sm group-hover:text-blue-400 transition">{item.title}</h3>
                <div className="w-12 h-0.5 bg-slate-800 mx-auto"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Kategori Dokumentasi Grid */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Kategori Dokumentasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/65 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-slate-700 transition shadow-sm cursor-pointer group">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {cat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base group-hover:text-blue-400 transition">{cat.title}</h3>
                  <div className="w-16 h-0.5 bg-slate-800"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Timeline */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Getting Started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gettingStartedSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 bg-blue-600/10 border border-blue-500/20 text-blue-400 font-extrabold rounded-lg flex items-center justify-center text-sm">
                    {step.num}
                  </span>
                  {idx < gettingStartedSteps.length - 1 && (
                    <span className="text-slate-600 hidden lg:block text-lg font-mono">↓</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{step.title}</h3>
                  <p className="text-slate-400 text-xs mt-1">Langkah esensial untuk memaksimalkan fitur platform Kamio.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Layout Berdampingan: Dokumentasi Populer & Developer Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Dokumentasi Populer Card */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Dokumentasi Populer</h2>
            <div className="space-y-3">
              {popularDocs.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800/80 rounded-xl hover:border-slate-700 transition cursor-pointer group">
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition">{doc}</span>
                  <span className="text-slate-600 font-mono text-sm">↓</span>
                </div>
              ))}
            </div>
          </section>

          {/* Developer Documentation Card Besar */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Developer Documentation</h2>
            <div className="space-y-3">
              {developerDocs.map((dev, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800/80 rounded-xl hover:border-slate-700 transition cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition">{dev.title}</span>
                    {dev.badge && (
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold rounded">
                        {dev.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-slate-600 font-mono text-sm">↓</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Versi Dokumentasi */}
        <section className="max-w-sm mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 shadow-sm">
          <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Versi Dokumentasi</h3>
          <div className="text-2xl font-extrabold text-blue-500 font-mono">v1.0</div>
          <p className="text-xs text-slate-500">Terakhir diperbarui <strong className="text-slate-300">23 Juli 2026</strong></p>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto w-full space-y-6">
          <h2 className="text-xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base hover:text-blue-400 transition"
                  >
                    <span>{faq.q}</span>
                    <span className="text-slate-400 font-mono">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-400 text-xs sm:text-sm border-t border-slate-800/60 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section (Background Biru) */}
        <section className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-xl mx-auto space-y-2 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Tidak menemukan yang Anda cari?</h2>
            <p className="text-blue-100 text-sm">Hubungi tim kami atau kunjungi Pusat Bantuan untuk bantuan lebih lanjut.</p>
          </div>
          <div>
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 transition shadow-lg">
              Hubungi Kami
            </button>
          </div>
        </section>

      </main>

      {/* Footer Standar (Multi-Kolom Konsisten) */}
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

          {/* Bagian Bawah Footer */}
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