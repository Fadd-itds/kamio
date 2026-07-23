'use client';

import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-semibold tracking-wide uppercase">
              {t('Membangun Masa Depan', 'Build the Future')}
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              {t('Membangun Masa Depan Teknologi Bersama', 'Building the Future of Technology with')} <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Kamio.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t(
                'Kamio adalah ekosistem teknologi yang mengembangkan aplikasi, game, layanan digital, dan solusi inovatif untuk individu, kreator, maupun bisnis.',
                'Kamio is a technology ecosystem that develops applications, games, digital services, and innovative solutions for individuals, creators, and businesses.'
              )}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/produk"
                className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-[#F8FAFC] font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center"
              >
                {t('Jelajahi Produk', 'Explore Products')}
              </a>
              <a
                href="/perusahaan"
                className="px-8 py-3.5 rounded-xl bg-transparent border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-[#F8FAFC] font-medium hover:bg-slate-100 dark:hover:bg-[#1E293B]/50 transition text-center"
              >
                {t('Tentang Kamio', 'About Kamio')}
              </a>
            </div>
          </div>

          {/* Visual Hero: Logo & Orbiting Ecosystem Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-12">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Central Logo */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-2xl shadow-blue-600/30 z-10">
                <span className="text-2xl font-black text-white tracking-widest">KAMIO</span>
              </div>

              {/* Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-[#1E293B] animate-[spin_25s_linear_infinite]"></div>

              {/* Floating Orbit Items */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>☁️</span> Cloud
              </div>
              <div className="absolute top-1/4 -right-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>🤖</span> AI
              </div>
              <div className="absolute bottom-4 right-2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>🎮</span> Games
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>📚</span> Books
              </div>
              <div className="absolute bottom-1/4 -left-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>🛒</span> Store
              </div>
              <div className="absolute -top-4 left-2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-[#CBD5E1] shadow-lg flex items-center gap-2">
                <span>📱</span> Apps
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trusted By Section */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-[#CBD5E1]/60 font-semibold mb-8">
              {t('Dipercaya Oleh Mitra & Teknologi Global', 'Trusted by Global Partners & Technologies')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-70">
              <span className="text-lg font-bold tracking-wider text-slate-600 dark:text-[#CBD5E1]">Google Play</span>
              <span className="text-lg font-bold tracking-wider text-slate-600 dark:text-[#CBD5E1]">Hostinger</span>
              <span className="text-lg font-bold tracking-wider text-slate-600 dark:text-[#CBD5E1]">Cloudflare</span>
              <span className="text-lg font-bold tracking-wider text-slate-600 dark:text-[#CBD5E1]">Vercel</span>
              <span className="text-lg font-bold tracking-wider text-slate-600 dark:text-[#CBD5E1]">GitHub</span>
            </div>
          </div>
        </section>

        {/* 3. Produk Kamio */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Produk Kamio', 'Kamio Products')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Solusi digital terintegrasi yang dirancang khusus untuk memenuhi berbagai kebutuhan modern Anda.', 'Integrated digital solutions specifically designed to meet your various modern needs.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-[#1E293B]/80 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio Games</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Mengembangkan game interaktif berkualitas tinggi untuk berbagai platform demi pengalaman hiburan terbaik.', 'Developing high-quality interactive games for various platforms for the best entertainment experience.')}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-medium">
                <span className="text-[#22C55E] flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                  </span>
                  {t('Aktif', 'Active')}
                </span>
                <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">{t('Jelajahi', 'Explore')} &rarr;</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-[#1E293B]/80 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio MultiDownloader</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Solusi pengunduhan multi-platform yang cepat, aman, dan sangat praktis digunakan sehari-hari.', 'A fast, secure, and highly practical multi-platform downloading solution for daily use.')}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-medium">
                <span className="text-[#22C55E] flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                  </span>
                  {t('Aktif', 'Active')}
                </span>
                <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">{t('Jelajahi', 'Explore')} &rarr;</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-[#1E293B]/80 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio Books</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Platform penerbitan dan perpustakaan digital interaktif untuk kreator literasi serta pembaca modern.', 'Interactive publishing and digital library platform for literary creators and modern readers.')}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-medium">
                <span className="text-[#22C55E] flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                  </span>
                  {t('Aktif', 'Active')}
                </span>
                <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">{t('Jelajahi', 'Explore')} &rarr;</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-[#1E293B]/80 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio Store</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Pusat pembelian merchandise resmi, aksesori eksklusif, dan berbagai layanan digital pilihan.', 'Hub for purchasing official merchandise, exclusive accessories, and a variety of curated digital services.')}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-medium">
                <span className="text-[#22C55E] flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                  </span>
                  {t('Aktif', 'Active')}
                </span>
                <a href="/store" className="text-[#2563EB] dark:text-[#60A5FA] hover:underline">{t('Kunjungi Store', 'Visit Store')} &rarr;</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between opacity-80 shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#1E293B] flex items-center justify-center text-2xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio AI</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Inovasi kecerdasan buatan terpadu untuk mengoptimalkan otomatisasi kerja dan produktivitas kreatif.', 'Integrated artificial intelligence innovation to optimize workflow automation and creative productivity.')}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-amber-600 dark:text-[#FACC15] font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-[#FACC15] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 dark:bg-[#FACC15]"></span>
                </span>
                {t('Segera Hadir', 'Coming Soon')}
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between opacity-80 shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#1E293B] flex items-center justify-center text-2xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">Kamio Cloud</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                  {t('Infrastruktur server awan berperforma tinggi, aman, dan fleksibel untuk kebutuhan enterprise.', 'High-performance, secure, and flexible cloud server infrastructure for enterprise needs.')}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-amber-600 dark:text-[#FACC15] font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-[#FACC15] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 dark:bg-[#FACC15]"></span>
                </span>
                {t('Segera Hadir', 'Coming Soon')}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ekosistem Kamio */}
        <section className="bg-slate-100 dark:bg-[#020617] border-y border-slate-200 dark:border-[#1E293B] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Ekosistem Kamio', 'Kamio Ecosystem')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Struktur organisasi dan sinergi unit bisnis yang terintegrasi di bawah naungan Kamio.', 'Organizational structure and synergy of integrated business units under Kamio.')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-2xl text-center shadow-xl mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold block text-blue-200">Holding</span>
                <span className="text-lg font-bold text-white">KAMIO</span>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-8 before:bg-slate-300 dark:before:bg-[#1E293B] pt-8">
                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center relative shadow-sm dark:shadow-none">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300 dark:bg-[#1E293B]"></div>
                  <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] text-base mb-1">PT Kamio Sentra Multiteknologi</h4>
                  <p className="text-xs text-slate-500 dark:text-[#CBD5E1] mb-6">{t('Pusat Riset & Pengembangan', 'Research & Development Center')}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] p-3 rounded-xl font-medium text-slate-700 dark:text-[#CBD5E1]">{t('Pengembangan Produk', 'Product Development')}</div>
                    <div className="bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] p-3 rounded-xl font-medium text-slate-700 dark:text-[#CBD5E1]">{t('Inovasi Teknologi', 'Tech Innovation')}</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center relative shadow-sm dark:shadow-none">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300 dark:bg-[#1E293B]"></div>
                  <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] text-base mb-1">PT Kamio Sentra Niaga</h4>
                  <p className="text-xs text-slate-500 dark:text-[#CBD5E1] mb-6">{t('Pusat Komersial & Layanan', 'Commercial & Service Center')}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] p-3 rounded-xl font-medium text-slate-700 dark:text-[#CBD5E1]">{t('Store & Distribusi', 'Store & Distribution')}</div>
                    <div className="bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] p-3 rounded-xl font-medium text-slate-700 dark:text-[#CBD5E1]">{t('Sistem Pembayaran', 'Payment System')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Mengapa Kamio? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Mengapa Kamio?', 'Why Kamio?')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Nilai-nilai inti yang menjadi fondasi kami dalam membangun standar industri teknologi.', 'Core values that form our foundation in building technology industry standards.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Inovasi', 'Innovation')}</h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                {t('Mengembangkan solusi digital yang relevan, modern, dan berkelanjutan untuk masa depan.', 'Developing relevant, modern, and sustainable digital solutions for the future.')}
              </p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-xl mb-4">🔒</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Kepercayaan', 'Trust')}</h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                {t('Mengutamakan keamanan data, transparansi, serta kualitas layanan tingkat tinggi bagi pengguna.', 'Prioritizing data security, transparency, and high-level service quality for users.')}
              </p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-xl mb-4">🌍</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Ekosistem', 'Ecosystem')}</h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                {t('Berbagai produk dan layanan yang saling terhubung secara mulus dalam satu identitas Kamio.', 'Various products and services seamlessly connected under a single Kamio identity.')}
              </p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-xl mb-4">💡</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Berkembang Bersama', 'Grow Together')}</h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed">
                {t('Kami membangun teknologi yang dapat terus bertumbuh dan beradaptasi sesuai kebutuhan pengguna.', 'We build technology that can continue to grow and adapt to user needs.')}
              </p>
            </div>
          </div>
        </section>

        {/* 6. Karier Section */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Bergabung Bersama Kamio', 'Join Kamio')}</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
              {t(
                'Kami percaya bahwa teknologi dibangun oleh orang-orang hebat. Mari ciptakan dampak nyata bersama tim kami.',
                'We believe technology is built by great people. Let us create real impact together with our team.'
              )}
            </p>
            <a
              href="/karier"
              className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition shadow-xl"
            >
              {t('Lihat Lowongan', 'View Openings')}
            </a>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="bg-slate-900 dark:bg-[#020617] border-t border-slate-800 dark:border-[#1E293B] pt-16 pb-12 text-slate-300 dark:text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          {/* Kolom 1: KAMIO & Deskripsi */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-white tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              {t(
                'Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.',
                'A modern technology ecosystem delivering integrated digital solutions for a better future.'
              )}
            </p>
            <div className="text-xs text-slate-400 dark:text-[#CBD5E1]/70 space-y-1">
              <div>© 2026–Present PT Kamio Sentra Multiteknologi.</div>
              <div>{t('Building the Future with Technology.', 'Building the Future with Technology.')}</div>
              <div className="text-slate-500 dark:text-[#CBD5E1]/50">{t('Made in Indonesia', 'Made in Indonesia')}</div>
            </div>
          </div>

          {/* Kolom 2: PRODUK */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PRODUK', 'PRODUCTS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/games" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Games', 'Games')}</a></li>
              <li><a href="/books" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Books', 'Books')}</a></li>
              <li><a href="/store" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Store', 'Store')}</a></li>
              <li><a href="/downloader" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Downloader', 'Downloader')}</a></li>
            </ul>
          </div>

          {/* Kolom 3: SOLUSI */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('SOLUSI', 'SOLUTIONS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/individu" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Individu', 'Individual')}</a></li>
              <li><a href="/bisnis" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Bisnis', 'Business')}</a></li>
              <li><a href="/enterprise" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Enterprise', 'Enterprise')}</a></li>
              <li><a href="/developer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Developer', 'Developer')}</a></li>
            </ul>
          </div>

          {/* Kolom 4: PERUSAHAAN */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PERUSAHAAN', 'COMPANY')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Tentang', 'About')}</a></li>
              <li><a href="/karier" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Karier', 'Careers')}</a></li>
              <li><a href="/berita" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Berita', 'News')}</a></li>
              <li><a href="/investor" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Investor', 'Investor')}</a></li>
            </ul>
          </div>

          {/* Kolom 5: RESOURCE */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('RESOURCE', 'RESOURCES')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/blog" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Blog', 'Blog')}</a></li>
              <li><a href="/docs" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Docs', 'Docs')}</a></li>
              <li><a href="/status" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Status', 'Status')}</a></li>
              <li><a href="/brand" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Brand', 'Brand')}</a></li>
            </ul>
          </div>

          {/* Kolom 6: LEGAL & SOCIAL */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('LEGAL & SOCIAL', 'LEGAL & SOCIAL')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Privacy', 'Privacy')}</a></li>
              <li><a href="/terms" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Terms', 'Terms')}</a></li>
              <li><a href="/cookies" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Cookies', 'Cookies')}</a></li>
              <li><a href="/refund" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Refund', 'Refund')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">X</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="font-bold text-white block mb-1">{t('Berlangganan Newsletter Kamio', 'Subscribe to Kamio Newsletter')}</span>
            <p className="text-xs text-slate-400 dark:text-[#CBD5E1]">
              {t('Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.', 'Get product updates and the latest tech info straight to your inbox.')}
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input 
              type="email" 
              placeholder={t('Masukkan email Anda...', 'Enter your email...')} 
              className="bg-slate-800 dark:bg-[#050816] border border-slate-700 dark:border-[#1E293B] px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-white w-full sm:w-64"
            />
            <button className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition whitespace-nowrap">
              {t('Berlangganan', 'Subscribe')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}