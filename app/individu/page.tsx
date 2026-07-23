'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function SolusiIndividu() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('Apakah semua produk gratis?', 'Are all products free?'),
      a: t('Sebagian besar produk Kamio dapat diakses secara gratis dengan fitur dasar. Kami juga menyediakan opsi layanan premium untuk pengalaman yang lebih optimal dan tanpa batas.', 'Most Kamio products can be accessed for free with basic features. We also provide premium service options for a more optimal and limitless experience.')
    },
    {
      q: t('Bagaimana cara upgrade Premium?', 'How to upgrade to Premium?'),
      a: t('Anda dapat melakukan upgrade melalui menu Kamio Store atau langsung di dalam aplikasi pilihan Anda dengan memilih paket berlangganan yang tersedia.', 'You can upgrade via the Kamio Store menu or directly within your chosen app by selecting the available subscription package.')
    },
    {
      q: t('Apakah tersedia di Android?', 'Is it available on Android?'),
      a: t('Ya, sebagian besar aplikasi dan solusi digital Kamio dirancang agar kompatibel dengan perangkat Android serta platform modern lainnya.', 'Yes, most Kamio applications and digital solutions are designed to be compatible with Android devices as well as other modern platforms.')
    },
    {
      q: t('Bagaimana menghubungi support?', 'How to contact support?'),
      a: t('Anda dapat menghubungi tim dukungan kami melalui halaman kontak atau mengirimkan email langsung ke support resmi Kamio.', 'You can contact our support team through the contact page or send an email directly to official Kamio support.')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            {t('Solusi untuk Individu', 'Solutions for Individuals')}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t('Solusi Digital untuk Setiap', 'Digital Solutions for Every')} <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">{t('Aktivitas Anda', 'Activity')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed mb-10">
            {t(
              'Temukan berbagai solusi digital dari Kamio yang dirancang untuk membantu aktivitas sehari-hari, mulai dari hiburan, produktivitas, pembelajaran, hingga pengelolaan file digital.',
              'Discover various digital solutions from Kamio designed to help everyday activities, ranging from entertainment, productivity, learning, to digital file management.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/produk"
              className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-[#F8FAFC] font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center"
            >
              {t('Jelajahi Produk', 'Explore Products')}
            </a>
            <a
              href="/kontak"
              className="px-8 py-3.5 rounded-xl bg-transparent border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-[#F8FAFC] font-medium hover:bg-slate-100 dark:hover:bg-[#1E293B]/50 transition text-center"
            >
              {t('Hubungi Kami', 'Contact Us')}
            </a>
          </div>
        </section>

        {/* 2. Mengapa Memilih Kamio (4 Cards) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Mengapa Memilih Kamio', 'Why Choose Kamio')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Keunggulan yang kami tawarkan untuk kenyamanan digital Anda.', 'The advantages we offer for your digital comfort.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Cepat', 'Fast')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Aplikasi ringan dan responsif.', 'Lightweight and responsive applications.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Kamio Performance</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Aman', 'Secure')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Privasi dan keamanan menjadi prioritas.', 'Privacy and security are top priorities.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Kamio Security</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Mudah Digunakan', 'Easy to Use')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Antarmuka sederhana untuk semua pengguna.', 'Simple interface for all users.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">User Experience</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🌏</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Selalu Berkembang', 'Always Growing')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Pembaruan fitur secara berkala.', 'Regular feature updates.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Continuous Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solusi Kami (Grid 2x2) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Solusi Kami', 'Our Solutions')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Pilihan layanan terintegrasi yang siap mendukung produktivitas dan hiburan Anda.', 'Integrated service options ready to support your productivity and entertainment.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">🎮</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Hiburan Digital', 'Digital Entertainment')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Nikmati game dan pengalaman interaktif yang dikembangkan oleh Kamio Games.', 'Enjoy games and interactive experiences developed by Kamio Games.')}
                </p>
              </div>
              <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">📥</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Pengelolaan File', 'File Management')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Unduh dan kelola konten digital dengan lebih mudah menggunakan MultiDownloader.', 'Download and manage digital content more easily using MultiDownloader.')}
                </p>
              </div>
              <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">📚</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Membaca & Belajar', 'Reading & Learning')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Temukan buku digital dan materi bacaan melalui Kamio Books.', 'Discover digital books and reading materials through Kamio Books.')}
                </p>
              </div>
              <a href="/produk" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">⭐</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Layanan Premium', 'Premium Services')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Nikmati fitur tambahan dan pengalaman tanpa batas melalui layanan premium Kamio.', 'Enjoy additional features and a seamless experience through Kamio premium services.')}
                </p>
              </div>
              <a href="/store" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari', 'Learn More')} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 4. Siapa yang Cocok? (Horizontal Timeline) */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Siapa yang Cocok?', 'Who is it for?')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Solusi Kamio dirancang untuk berbagai kalangan pengguna.', 'Kamio solutions are designed for various types of users.')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="w-full md:w-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-6 py-4 rounded-xl text-center font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Mahasiswa', 'Students')}
              </div>
              <div className="text-[#2563EB] font-bold text-lg rotate-90 md:rotate-0">&darr;</div>
              <div className="w-full md:w-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-6 py-4 rounded-xl text-center font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Pelajar', 'Pupils')}
              </div>
              <div className="text-[#2563EB] font-bold text-lg rotate-90 md:rotate-0">&darr;</div>
              <div className="w-full md:w-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-6 py-4 rounded-xl text-center font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Pekerja', 'Workers')}
              </div>
              <div className="text-[#2563EB] font-bold text-lg rotate-90 md:rotate-0">&darr;</div>
              <div className="w-full md:w-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-6 py-4 rounded-xl text-center font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Kreator', 'Creators')}
              </div>
              <div className="text-[#2563EB] font-bold text-lg rotate-90 md:rotate-0">&darr;</div>
              <div className="w-full md:w-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] px-6 py-4 rounded-xl text-center font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Pengguna Umum', 'General Users')}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Keunggulan (Grid) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Keunggulan', 'Advantages')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Fitur dan komitmen utama yang kami berikan.', 'Key features and commitments we provide.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Mudah digunakan', 'Easy to use')}</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Desain modern', 'Modern design')}</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Sinkron lintas perangkat (Coming Soon)', 'Cross-device sync (Coming Soon)')}</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Dukungan pelanggan', 'Customer support')}</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Update berkala', 'Regular updates')}</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
              <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Ekosistem terintegrasi', 'Integrated ecosystem')}</span>
            </div>
          </div>
        </section>

        {/* 6. Cara Memulai (Timeline) */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Cara Memulai', 'How to Start')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Empat langkah mudah menikmati ekosistem Kamio.', 'Four easy steps to enjoy the Kamio ecosystem.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Pilih produk', 'Choose product')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Tentukan aplikasi atau layanan yang sesuai kebutuhan.', 'Determine the app or service that suits your needs.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Unduh atau daftar', 'Download or register')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Dapatkan aplikasi atau buat akun Kamio Anda.', 'Get the app or create your Kamio account.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Gunakan layanan', 'Use service')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Mulai jelajahi berbagai fitur yang tersedia.', 'Start exploring the available features.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">4</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Nikmati pengalaman Kamio', 'Enjoy Kamio experience')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Rasakan kemudahan dan efisiensi digital.', 'Experience digital ease and efficiency.')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ (Accordion) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">FAQ</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Pertanyaan yang sering diajukan seputar solusi individu Kamio.', 'Frequently asked questions about Kamio individual solutions.')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl overflow-hidden shadow-sm dark:shadow-none transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 dark:text-[#F8FAFC] flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    &darr;
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed border-t border-slate-100 dark:border-[#1E293B] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 8. CTA Section (Background Biru) */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Siap Memulai?', 'Ready to Start?')}</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              {t('Temukan solusi digital yang tepat untuk kebutuhan Anda.', 'Find the right digital solution for your needs.')}
            </p>
            <a
              href="/produk"
              className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition shadow-xl"
            >
              {t('Lihat Produk', 'View Products')}
            </a>
          </div>
        </section>
      </main>

      {/* 9. Footer Standar */}
      <footer className="bg-slate-900 dark:bg-[#020617] border-t border-slate-800 dark:border-[#1E293B] pt-16 pb-12 text-slate-300 dark:text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-white tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              {t('Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.', 'A modern technology ecosystem delivering integrated digital solutions for a better future.')}
            </p>
            <div className="text-xs text-slate-400 dark:text-[#CBD5E1]/70 space-y-1">
              <div>© 2026–Present PT Kamio Sentra Multiteknologi.</div>
              <div>{t('Building the Future with Technology.', 'Building the Future with Technology.')}</div>
              <div className="text-slate-500 dark:text-[#CBD5E1]/50">{t('Made in Indonesia', 'Made in Indonesia')}</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PRODUK', 'PRODUCTS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Games', 'Games')}</a></li>
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Books', 'Books')}</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition">{t('Store', 'Store')}</a></li>
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Downloader', 'Downloader')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('SOLUSI', 'SOLUTIONS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/solusi/individu" className="hover:text-blue-400 transition">{t('Individu', 'Individual')}</a></li>
              <li><a href="/solusi/bisnis" className="hover:text-blue-400 transition">{t('Bisnis', 'Business')}</a></li>
              <li><a href="/solusi/enterprise" className="hover:text-blue-400 transition">{t('Enterprise', 'Enterprise')}</a></li>
              <li><a href="/developer" className="hover:text-blue-400 transition">{t('Developer', 'Developer')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PERUSAHAAN', 'COMPANY')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-blue-400 transition">{t('Tentang', 'About')}</a></li>
              <li><a href="/karier" className="hover:text-blue-400 transition">{t('Karier', 'Careers')}</a></li>
              <li><a href="/berita" className="hover:text-blue-400 transition">{t('Berita', 'News')}</a></li>
              <li><a href="/investor" className="hover:text-blue-400 transition">{t('Investor', 'Investor')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('RESOURCE', 'RESOURCES')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/blog" className="hover:text-blue-400 transition">{t('Blog', 'Blog')}</a></li>
              <li><a href="/docs" className="hover:text-blue-400 transition">{t('Docs', 'Docs')}</a></li>
              <li><a href="/status" className="hover:text-blue-400 transition">{t('Status', 'Status')}</a></li>
              <li><a href="/brand" className="hover:text-blue-400 transition">{t('Brand', 'Brand')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('LEGAL & SOCIAL', 'LEGAL & SOCIAL')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="hover:text-blue-400 transition">{t('Privacy', 'Privacy')}</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition">{t('Terms', 'Terms')}</a></li>
              <li><a href="/cookies" className="hover:text-blue-400 transition">{t('Cookies', 'Cookies')}</a></li>
              <li><a href="/refund" className="hover:text-blue-400 transition">{t('Refund', 'Refund')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">X</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="font-bold text-white block mb-1">{t('Berlangganan Newsletter Kamio', 'Subscribe to Kamio Newsletter')}</span>
            <p className="text-xs text-slate-400">{t('Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.', 'Get product updates and the latest tech info straight to your inbox.')}</p>
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