'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const { language, setLanguage, t } = useLanguage(); // Diperbaiki dari lang/setLang ke language/setLanguage
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  // Inisialisasi awal tema berdasarkan localStorage atau default ke Dark (true)
  useEffect(() => {
    const savedTheme = localStorage.getItem('kamio_theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Fungsi toggle tema
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kamio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kamio_theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* 📢 Announcement Bar */}
      {announcementVisible && (
        <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium relative flex items-center justify-center shadow-inner">
          <span className="flex items-center gap-2">
            <span>🚀</span> {t('Selamat datang di Kamio. Jelajahi ekosistem teknologi kami.', 'Welcome to Kamio. Explore our technology ecosystem.')}
            <a href="/berita" className="underline hover:text-blue-100 ml-1">{t('Selengkapnya', 'Learn more')} &rarr;</a>
          </span>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 text-white/80 hover:text-white font-bold text-base"
            aria-label="Tutup pengumuman"
          >
            &times;
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-[#050816]/90 dark:bg-[#050816]/90 backdrop-blur-md border-b border-[#1E293B] text-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Nav Links */}
          <div className="flex items-center gap-8">
            <a href="/" className="font-bold text-2xl tracking-wider text-[#F8FAFC] dark:text-[#F8FAFC]">
              KAMIO<span className="text-[#2563EB]">.</span>
            </a>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#CBD5E1]">
              <a href="/produk" className="hover:text-[#60A5FA] transition">{t('Produk', 'Products')}</a>
              <a href="/perusahaan" className="hover:text-[#60A5FA] transition">{t('Perusahaan', 'Company')}</a>
              <a href="/store" className="hover:text-[#60A5FA] transition">Store</a>
              <a href="/dukungan" className="hover:text-[#60A5FA] transition">{t('Dukungan', 'Support')}</a>
              <a href="/control" className="hover:text-[#60A5FA] transition">{t('Kontrol', 'Kontrol')}</a>
              <a href="/analytics" className="hover:text-[#60A5FA] transition">{t('Analytics', 'Analytics')}</a>
            </div>
          </div>

          {/* Right Action Items: Search, Lang, Dark/Light Mode */}
          <div className="flex items-center gap-3">
            
            {/* 🔍 Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-[#0F172A] border border-[#1E293B] rounded-xl px-3 py-1.5 shadow-xl w-60 sm:w-72">
                  <input
                    type="text"
                    placeholder={t('Cari di Kamio...', 'Search in Kamio...')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-xs text-[#F8FAFC] focus:outline-none placeholder-[#CBD5E1]/50"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-xs text-[#CBD5E1] hover:text-white ml-2 px-1"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#CBD5E1] hover:text-white hover:bg-[#1E293B] transition text-sm flex items-center gap-1.5"
                  title="Cari"
                >
                  <span>🔍</span>
                  <span className="hidden sm:inline text-xs">{t('Cari', 'Search')}</span>
                </button>
              )}
            </div>

            {/* 🌐 Bahasa (Terhubung ke Context Global) */}
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="px-3 py-2 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#CBD5E1] hover:text-white hover:bg-[#1E293B] transition text-xs font-semibold flex items-center gap-1.5 uppercase"
              title="Ganti Bahasa"
            >
              <span>🌐</span> {language}
            </button>

            {/* 🌙 Dark / Light Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#CBD5E1] hover:text-white hover:bg-[#1E293B] transition text-sm"
              title="Ubah Tema"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {/* CTA Akun */}
            <a
              href="/store"
              className="hidden sm:inline-block px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition shadow-md shadow-blue-600/25"
            >
              {t('Akun Saya', 'My Account')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}