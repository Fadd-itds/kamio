'use client';

import { useState, useTransition, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function PusatBantuanPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Semua');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [, startTransition] = useTransition();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchQuery(value);
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Data Kategori Bantuan (3x2 Grid)
  const categories = [
    { icon: '🎮', nameId: 'Kamio Games', nameEn: 'Kamio Games', descId: 'Panduan akun, top-up, dan game.', descEn: 'Account, top-up, and game guides.' },
    { icon: '📱', nameId: 'MultiDownloader', nameEn: 'MultiDownloader', descId: 'Cara unduh, kendala link, dan kecepatan.', descEn: 'Download steps, link issues, and speed.' },
    { icon: '📚', nameId: 'Kamio Books', nameEn: 'Kamio Books', descId: 'Akses baca, pembelian, dan format.', descEn: 'Reading access, purchases, and formats.' },
    { icon: '🛒', nameId: 'Kamio Store', nameEn: 'Kamio Store', descId: 'Status pesanan, pengiriman, dan produk.', descEn: 'Order status, shipping, and products.' },
    { icon: '💳', nameId: 'Pembayaran', nameEn: 'Payment', descId: 'Metode bayar, konfirmasi, dan kendala.', descEn: 'Payment methods, confirmation, and issues.' },
    { icon: '👤', nameId: 'Akun', nameEn: 'Account', descId: 'Keamanan, profil, dan pengaturan.', descEn: 'Security, profile, and settings.' },
  ];

  // Data Artikel Populer & Berdasarkan Produk
  const articles = [
    { titleId: 'Cara membeli produk', titleEn: 'How to buy products', product: 'Store' },
    { titleId: 'Cara mengaktifkan lisensi', titleEn: 'How to activate license', product: 'Store' },
    { titleId: 'Cara meminta refund', titleEn: 'How to request a refund', product: 'Payment' },
    { titleId: 'Cara reset password', titleEn: 'How to reset password', product: 'Account' },
    { titleId: 'Cara upgrade Premium', titleEn: 'How to upgrade to Premium', product: 'Account' },
    { titleId: 'Cara menghubungi support', titleEn: 'How to contact support', product: 'Semua' },
    { titleId: 'Panduan Top-Up Diamond Kamio Games', titleEn: 'Kamio Games Diamond Top-Up Guide', product: 'Kamio Games' },
    { titleId: 'Mengatasi Gagal Unduh di MultiDownloader', titleEn: 'Fixing Download Failures in MultiDownloader', product: 'MultiDownloader' },
    { titleId: 'Cara Membaca Buku Offline di Kamio Books', titleEn: 'How to Read Offline in Kamio Books', product: 'Books' },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      const matchesProduct = selectedProduct === 'Semua' || item.product === selectedProduct || (selectedProduct === 'Books' && item.product === 'Kamio Books');
      const matchesSearch = searchQuery === '' || item.titleId.toLowerCase().includes(searchQuery.toLowerCase()) || item.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesProduct && matchesSearch;
    });
  }, [selectedProduct, searchQuery, articles]);

  const faqs = [
    {
      qId: 'Apa itu Kamio?',
      qEn: 'What is Kamio?',
      aId: 'Kamio adalah ekosistem teknologi modern yang menghadirkan solusi digital terpadu mulai dari hiburan, utilitas, hingga literasi digital.',
      aEn: 'Kamio is a modern technology ecosystem offering integrated digital solutions ranging from entertainment, utilities, to digital literacy.',
    },
    {
      qId: 'Bagaimana membeli produk?',
      qEn: 'How to buy products?',
      aId: 'Anda dapat memilih produk yang diinginkan melalui Kamio Store, lalu ikuti instruksi *checkout* dan pilih metode pembayaran yang tersedia.',
      aEn: 'You can choose your desired product via Kamio Store, then follow the checkout instructions and select an available payment method.',
    },
    {
      qId: 'Bagaimana refund?',
      qEn: 'How do refunds work?',
      aId: 'Permintaan pengembalian dana (refund) dapat diajukan melalui tiket dukungan selambat-lambatnya 7 hari setelah transaksi dengan menyertakan bukti sah.',
      aEn: 'Refund requests can be submitted via a support ticket within a maximum of 7 days after the transaction by attaching valid proof.',
    },
    {
      qId: 'Bagaimana menghubungi support?',
      qEn: 'How to contact support?',
      aId: 'Anda dapat menghubungi tim kami melalui live chat WhatsApp, email support@kamio.co.id, atau membuat tiket bantuan langsung di halaman ini.',
      aEn: 'You can contact our team via WhatsApp live chat, email support@kamio.co.id, or create a support ticket directly on this page.',
    },
    {
      qId: 'Bagaimana mengganti email?',
      qEn: 'How to change email?',
      aId: 'Penggantian email akun dapat dilakukan melalui menu Pengaturan Akun di Dashboard setelah melakukan verifikasi keamanan.',
      aEn: 'Account email updates can be done via the Account Settings menu in the Dashboard after completing security verification.',
    },
    {
      qId: 'Bagaimana melaporkan bug?',
      qEn: 'How to report a bug?',
      aId: 'Bug atau kendala sistem dapat dilaporkan melalui tombol "Laporkan Bug" pada bagian Hubungi Kami di bawah ini.',
      aEn: 'Bugs or system issues can be reported via the "Report a Bug" button in the Contact Us section below.',
    },
  ];

  const productTabs = ['Semua', 'Kamio Games', 'MultiDownloader', 'Books', 'Store'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* Hero & Search Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-4">
              {t('Pusat Bantuan', 'Help Center')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {t('Pusat Bantuan Kamio', 'Kamio Help Center')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] mb-10 leading-relaxed">
              {t(
                'Temukan jawaban, panduan, dan solusi untuk seluruh produk dan layanan dalam ekosistem Kamio.',
                'Find answers, guides, and solutions for all products and services within the Kamio ecosystem.'
              )}
            </p>

            {/* Big Search Bar */}
            <div className="relative max-w-2xl mx-auto shadow-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A]">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-xl">
                🔍
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t('Bagaimana cara membeli produk? / Cara upgrade Premium...', 'How to buy products? / How to upgrade Premium...')}
                className="w-full pl-14 pr-6 py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base"
              />
            </div>
            
            {/* Quick placeholder hints */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-600 dark:text-slate-300">{t('Pencarian Populer:', 'Popular Searches:')}</span>
              <button onClick={() => setSearchQuery('membeli')} className="hover:text-[#2563EB] underline">Cara membeli produk</button>
              <span>•</span>
              <button onClick={() => setSearchQuery('upgrade')} className="hover:text-[#2563EB] underline">Cara upgrade Premium</button>
              <span>•</span>
              <button onClick={() => setSearchQuery('refund')} className="hover:text-[#2563EB] underline">Cara refund</button>
              <span>•</span>
              <button onClick={() => setSearchQuery('password')} className="hover:text-[#2563EB] underline">Reset password</button>
            </div>
          </div>
        </section>

        {/* Kategori Bantuan (Grid 3x2) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            {t('Kategori Bantuan', 'Help Categories')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProduct(cat.nameId === 'Kamio Games' ? 'Kamio Games' : cat.nameId === 'MultiDownloader' ? 'MultiDownloader' : cat.nameId === 'Kamio Books' ? 'Books' : cat.nameId === 'Kamio Store' ? 'Store' : 'Semua')}
                className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition cursor-pointer group"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#2563EB] transition">
                  {t(cat.nameId, cat.nameEn)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#CBD5E1]">
                  {t(cat.descId, cat.descEn)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Artikel Populer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Artikel Populer', 'Popular Articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(0, 6).map((art, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl shadow-sm hover:border-[#2563EB] transition cursor-pointer flex items-center justify-between"
              >
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                  {t(art.titleId, art.titleEn)}
                </span>
                <span className="text-[#2563EB] text-sm">&rarr;</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bantuan Berdasarkan Produk */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            {t('Bantuan Berdasarkan Produk', 'Help by Product')}
          </h2>
          
          {/* Product Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {productTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedProduct(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${
                  selectedProduct === tab
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/25'
                    : 'bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1E293B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filtered Articles Result */}
          <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-6 shadow-sm">
            {filteredArticles.length > 0 ? (
              <div className="space-y-4">
                {filteredArticles.map((art, idx) => (
                  <div key={idx} className="pb-4 border-b border-slate-100 dark:border-[#1E293B] last:border-0 last:pb-0 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#1E293B]/50 p-3 rounded-xl transition cursor-pointer">
                    <div>
                      <h4 className="font-semibold text-base text-slate-900 dark:text-white">
                        {t(art.titleId, art.titleEn)}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1 block">Kategori: {art.product}</span>
                    </div>
                    <span className="text-[#2563EB] font-semibold text-sm">&rarr;</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 py-8">
                {t('Tidak ada artikel yang ditemukan untuk filter/pencarian ini.', 'No articles found for this filter/search.')}
              </p>
            )}
          </div>
        </section>

        {/* Hubungi Kami (Card Grid) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Hubungi Kami', 'Contact Us')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="mailto:support@kamio.co.id" className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition text-center block">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">support@kamio.co.id</p>
            </a>

            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-emerald-500 transition text-center block">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">WhatsApp</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('Live Chat Bantuan', 'Live Support Chat')}</p>
            </a>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition text-center cursor-pointer">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{t('Kirim Tiket', 'Submit Ticket')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('Buat laporan kendala resmi', 'Create formal issue report')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-rose-500 transition text-center cursor-pointer">
              <div className="text-3xl mb-3">🐞</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{t('Laporkan Bug', 'Report a Bug')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('Bantu kami perbaiki sistem', 'Help us improve the system')}</p>
            </div>

          </div>
        </section>

        {/* Status Layanan Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🟢</span>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{t('Semua layanan berjalan normal', 'All services running normally')}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">status.kamio.co.id</p>
              </div>
            </div>
            <a
              href="https://status.kamio.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-[#1E293B] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold text-sm transition"
            >
              {t('Lihat Status', 'View Status')} &rarr;
            </a>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">FAQ</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 font-semibold text-sm sm:text-base flex justify-between items-center text-slate-900 dark:text-white"
                >
                  <span>{t(faq.qId, faq.qEn)}</span>
                  <span className="text-slate-400">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-sm text-slate-600 dark:text-[#CBD5E1] border-t border-slate-100 dark:border-[#1E293B] leading-relaxed">
                    {t(faq.aId, faq.aEn)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Developer Support & Community */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Developer Support */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-3">👨‍💻</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                  {t('Butuh bantuan integrasi API?', 'Need help with API integration?')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-6">
                  {t('Akses dokumentasi lengkap, panduan SDK, dan endpoint reference.', 'Access complete documentation, SDK guides, and endpoint references.')}
                </p>
              </div>
              <a href="/developer" className="inline-block text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline">
                {t('Kunjungi Developer Hub &rarr;', 'Visit Developer Hub &rarr;')}
              </a>
            </div>

            {/* Community */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">🌐</div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Coming Soon</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                  {t('Komunitas Kamio', 'Kamio Community')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-6">
                  {t('Diskusikan ide dan terhubung dengan sesama pengguna di Discord, Forum, dan GitHub.', 'Discuss ideas and connect with fellow users on Discord, Forum, and GitHub.')}
                </p>
              </div>
              <div className="flex gap-4 text-xs font-semibold text-slate-400">
                <span>Discord</span>
                <span>•</span>
                <span>Forum</span>
                <span>•</span>
                <span>GitHub</span>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Background Biru */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#2563EB] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl shadow-blue-600/25">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {t('Masih belum menemukan jawaban?', 'Still haven\'t found the answer?')}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('Tim Kamio siap membantu Anda.', 'The Kamio team is ready to help you.')}
            </p>
            <a
              href="mailto:support@kamio.co.id"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-[#2563EB] hover:bg-blue-50 font-bold text-sm transition shadow-md"
            >
              {t('Hubungi Kami', 'Contact Us')}
            </a>
          </div>
        </section>

      </main>

      {/* Footer Standar */}
      <footer className="bg-slate-900 dark:bg-[#020617] border-t border-slate-800 dark:border-[#1E293B] pt-16 pb-12 text-slate-300 dark:text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="font-bold text-2xl text-white tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              {t(
                'Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.',
                'A modern technology ecosystem delivering integrated digital solutions for a better future.'
              )}
            </p>
            <div className="text-xs text-slate-500 dark:text-[#CBD5E1]/60">
              © 2026 PT Kamio Sentra Multiteknologi. {t('Hak cipta dilindungi.', 'All rights reserved.')}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('Produk', 'Products')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/produk" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">Kamio Games</a></li>
              <li><a href="/produk" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">MultiDownloader</a></li>
              <li><a href="/produk" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">Kamio Books</a></li>
              <li><a href="/store" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">Kamio Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('Perusahaan', 'Company')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Tentang Kami', 'About Us')}</a></li>
              <li><a href="/karier" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Karier', 'Careers')}</a></li>
              <li><a href="/berita" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Berita & Pers', 'News & Press')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('Dukungan', 'Support')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/developer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">Developer Hub</a></li>
              <li><a href="/dukungan" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Pusat Bantuan', 'Help Center')}</a></li>
              <li><a href="/dukungan" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Kontak Support', 'Contact Support')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('Legal & Sosial', 'Legal & Social')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Kebijakan Privasi', 'Privacy Policy')}</a></li>
              <li><a href="/terms" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Syarat & Ketentuan', 'Terms & Conditions')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">Twitter / X</a></li>
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