'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

interface Product {
  id: string;
  name: string;
  category: 'Game' | 'Aplikasi' | 'Layanan' | 'Developer' | 'Coming Soon';
  icon: string;
  description: string;
  status: 'Active' | 'Coming Soon';
  link: string;
}

const productsData: Product[] = [
  {
    id: 'games',
    name: 'Kamio Games',
    category: 'Game',
    icon: '🎮',
    description: 'Mengembangkan game untuk Android, PC, dan platform lainnya.',
    status: 'Active',
    link: '/produk/games',
  },
  {
    id: 'multidownloader',
    name: 'Kamio MultiDownloader',
    category: 'Aplikasi',
    icon: '📱',
    description: 'Mengunduh konten dari berbagai platform dengan mudah.',
    status: 'Active',
    link: '/produk/multidownloader',
  },
  {
    id: 'books',
    name: 'Kamio Books',
    category: 'Layanan',
    icon: '📚',
    description: 'Platform penerbitan buku digital.',
    status: 'Active',
    link: '/produk/books',
  },
  {
    id: 'store',
    name: 'Kamio Store',
    category: 'Layanan',
    icon: '🛒',
    description: 'Pusat pembelian seluruh produk dan layanan Kamio.',
    status: 'Active',
    link: '/store',
  },
  {
    id: 'ai',
    name: 'Kamio AI',
    category: 'Coming Soon',
    icon: '🤖',
    description: 'Solusi cerdas berbasis kecerdasan buatan untuk otomatisasi dan produktivitas.',
    status: 'Coming Soon',
    link: '#',
  },
  {
    id: 'cloud',
    name: 'Kamio Cloud',
    category: 'Coming Soon',
    icon: '☁️',
    description: 'Infrastruktur cloud dan layanan server andal untuk bisnis digital.',
    status: 'Coming Soon',
    link: '#',
  },
];

const categories = ['Semua', 'Game', 'Aplikasi', 'Layanan', 'Developer', 'Coming Soon'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua'
    ? productsData
    : activeCategory === 'Coming Soon'
    ? productsData.filter((p) => p.status === 'Coming Soon')
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            Ekosistem Kamio
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Produk <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Kamio</span>
          </h1>
          <p className="text-[#CBD5E1] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Teknologi yang dirancang untuk membantu pengguna, kreator, pengembang, dan bisnis dalam satu ekosistem.
          </p>
          <div>
            <a
              href="/dukungan"
              className="inline-block px-8 py-3.5 rounded-xl bg-[#2563EB] text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-sm sm:text-base"
            >
              Hubungi Kami
            </a>
          </div>
        </section>

        {/* 2. Filter Bar Interaktif */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/20'
                      : 'bg-[#0F172A] border border-[#1E293B] text-[#CBD5E1] hover:bg-[#1E293B]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. Daftar Produk */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const isComingSoon = product.status === 'Coming Soon';
                return (
                  <div
                    key={product.id}
                    className={`group bg-[#0F172A] border border-[#1E293B] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 shadow-xl shadow-black/20 ${
                      isComingSoon ? 'opacity-85 hover:border-[#FACC15]/50' : 'hover:border-[#2563EB]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{product.icon}</span>
                        <h3 className="text-xl font-bold text-[#F8FAFC]">{product.name}</h3>
                      </div>
                      <div className="w-full h-[1px] bg-[#1E293B] mb-6"></div>
                      <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1E293B]/50 flex items-center justify-between">
                      {isComingSoon ? (
                        <span className="text-xs font-medium text-[#FACC15] flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]"></span>
                          </span>
                          Coming Soon
                        </span>
                      ) : (
                        <>
                          <span className="text-xs font-medium text-[#22C55E] flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                            </span>
                            Active
                          </span>
                          <a
                            href={product.link}
                            className="text-[#60A5FA] font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                          >
                            Pelajari <span>&rarr;</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12 text-[#CBD5E1]">
                Belum ada produk untuk kategori ini.
              </div>
            )}
          </div>
        </section>

        {/* 4. Statistik Ekosistem */}
        <section className="border-y border-[#1E293B] bg-[#020617]/60 py-16 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-2">6+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#CBD5E1]">Produk</div>
              </div>
              <div className="p-6 border-y md:border-y-0 md:border-x border-[#1E293B]">
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#CBD5E1]">Ekosistem Kamio</div>
              </div>
              <div className="p-6">
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#CBD5E1]">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white mb-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Tidak menemukan solusi yang Anda cari?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-base sm:text-lg mb-8">
              Hubungi tim Kamio untuk berdiskusi.
            </p>
            <a
              href="/dukungan"
              className="inline-block px-8 py-4 bg-white text-[#050816] font-bold rounded-xl hover:bg-blue-50 transition shadow-xl text-sm sm:text-base"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="bg-[#020617] border-t border-[#1E293B] pt-16 pb-12 text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="font-bold text-2xl text-[#F8FAFC] tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.
            </p>
            <div className="text-xs text-[#CBD5E1]/60">
              © 2026 PT Kamio Sentra Multiteknologi. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Produk</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/products" className="hover:text-[#60A5FA] transition">Kamio Games</a></li>
              <li><a href="/products" className="hover:text-[#60A5FA] transition">MultiDownloader</a></li>
              <li><a href="/products" className="hover:text-[#60A5FA] transition">Kamio Books</a></li>
              <li><a href="/store" className="hover:text-[#60A5FA] transition">Kamio Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Perusahaan</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-[#60A5FA] transition">Tentang Kami</a></li>
              <li><a href="/karier" className="hover:text-[#60A5FA] transition">Karier</a></li>
              <li><a href="/berita" className="hover:text-[#60A5FA] transition">Berita & Pers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Dukungan</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/developer" className="hover:text-[#60A5FA] transition">Developer Hub</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Pusat Bantuan</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Kontak Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Legal & Sosial</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Kebijakan Privasi</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Syarat & Ketentuan</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA] transition">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA] transition">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="font-bold text-[#F8FAFC] block mb-1">Berlangganan Newsletter Kamio</span>
            <p className="text-xs text-[#CBD5E1]">Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Masukkan email Anda..." 
              className="bg-[#050816] border border-[#1E293B] px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-[#F8FAFC] w-full sm:w-64"
            />
            <button className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-[#F8FAFC] text-sm font-medium rounded-xl transition whitespace-nowrap">
              Berlangganan
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}