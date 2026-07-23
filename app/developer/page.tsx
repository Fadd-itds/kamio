'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function DeveloperPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      qId: 'Bagaimana mendapatkan API Key?',
      qEn: 'How to get an API Key?',
      aId: 'Anda dapat membuat dan mengelola API Key melalui Dashboard Akun Anda setelah fitur Developer Portal dibuka secara penuh.',
      aEn: 'You can create and manage API Keys through your Account Dashboard once the Developer Portal is fully launched.',
    },
    {
      qId: 'Apakah API gratis?',
      qEn: 'Is the API free?',
      aId: 'Kamio menyediakan tier gratis (free tier) dengan batasan kuota tertentu untuk pengembang, serta tier berbayar untuk kebutuhan enterprise.',
      aEn: 'Kamio provides a free tier with specific quota limits for developers, as well as paid tiers for enterprise needs.',
    },
    {
      qId: 'Bagaimana rate limit?',
      qEn: 'How do rate limits work?',
      aId: 'Rate limit standar ditetapkan berdasarkan jenis akun Anda. Detail lengkap akan dicantumkan pada dokumentasi endpoint masing-masing.',
      aEn: 'Standard rate limits are determined by your account type. Full details will be listed in the respective endpoint documentation.',
    },
    {
      qId: 'Bagaimana melaporkan bug?',
      qEn: 'How to report a bug?',
      aId: 'Anda dapat melaporkan bug atau kerentanan keamanan melalui halaman dukungan kami atau langsung melalui repository GitHub resmi Kamio.',
      aEn: 'You can report bugs or security vulnerabilities through our support page or directly via Kamio’s official GitHub repository.',
    },
    {
      qId: 'Bagaimana menghubungi Developer Support?',
      qEn: 'How to contact Developer Support?',
      aId: 'Tim dukungan pengembang kami dapat dihubungi melalui email support@kamio.co.id atau melalui halaman /dukungan.',
      aEn: 'Our developer support team can be reached via support@kamio.co.id or through the /dukungan page.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center border-b border-slate-200 dark:border-[#1E293B]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-4">
              {t('Developer Hub', 'Developer Hub')}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              {t('Developer Hub', 'Developer Hub')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-8">
              {t(
                'Bangun, integrasikan, dan kembangkan aplikasi Anda dengan ekosistem Kamio melalui dokumentasi resmi, API, SDK, dan berbagai sumber daya untuk developer.',
                'Build, integrate, and scale your applications with the Kamio ecosystem through official documentation, APIs, SDKs, and developer resources.'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#getting-started"
                className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition shadow-lg shadow-blue-600/25"
              >
                {t('Mulai Mengembangkan', 'Start Developing')}
              </a>
              <a
                href="#dokumentasi"
                className="px-6 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E293B] font-medium text-sm transition"
              >
                {t('Dokumentasi', 'Documentation')}
              </a>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            {t('Akses Cepat', 'Quick Access')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Pelajari cara menggunakan layanan Kamio.', 'Learn how to use Kamio services.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Jelajahi &rarr;', 'Explore &rarr;')}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">🔌</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">API Reference</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Endpoint, autentikasi, dan contoh request.', 'Endpoints, authentication, and request examples.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Lihat API &rarr;', 'View API &rarr;')}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">SDK</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Library resmi untuk berbagai bahasa.', 'Official libraries for various languages.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Unduh SDK &rarr;', 'Download SDK &rarr;')}
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Quick Start</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Mulai integrasi hanya dalam beberapa menit.', 'Start integration in just a few minutes.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Mulai &rarr;', 'Get Started &rarr;')}
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Changelog</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Riwayat perubahan API dan layanan.', 'API and service change history.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Riwayat &rarr;', 'History &rarr;')}
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
              <div className="text-3xl mb-3">🟢</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Status</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                {t('Lihat status seluruh layanan Kamio.', 'View status of all Kamio services.')}
              </p>
              <div className="border-t border-slate-100 dark:border-[#1E293B] pt-3 text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {t('Cek Status &rarr;', 'Check Status &rarr;')}
              </div>
            </div>

          </div>
        </section>

        {/* Getting Started (Timeline) */}
        <section id="getting-started" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              {t('Mulai Cepat', 'Getting Started')}
            </h2>
            <p className="text-slate-600 dark:text-[#CBD5E1] text-sm">
              {t('Ikuti langkah sederhana berikut untuk mempersiapkan integrasi Anda.', 'Follow these simple steps to prepare your integration.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm relative">
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Coming Soon</span>
              <div className="text-3xl font-extrabold text-[#2563EB] mb-3">1️⃣</div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{t('Buat Akun', 'Create Account')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('Daftar akun pengembang di ekosistem Kamio.', 'Register a developer account in the Kamio ecosystem.')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm relative">
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Coming Soon</span>
              <div className="text-3xl font-extrabold text-[#2563EB] mb-3">2️⃣</div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{t('Dapatkan API Key', 'Get API Key')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('Generate kredensial API unik untuk akses aman.', 'Generate unique API credentials for secure access.')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm relative">
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Coming Soon</span>
              <div className="text-3xl font-extrabold text-[#2563EB] mb-3">3️⃣</div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{t('Baca Dokumentasi', 'Read Docs')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('Pelajari spesifikasi endpoint dan contoh kode.', 'Learn endpoint specifications and code examples.')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm relative">
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Coming Soon</span>
              <div className="text-3xl font-extrabold text-[#2563EB] mb-3">4️⃣</div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{t('Mulai Integrasi', 'Start Integration')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('Kirim request pertama Anda ke server Kamio.', 'Send your first request to the Kamio server.')}
              </p>
            </div>

          </div>
        </section>

        {/* Dokumentasi Grid */}
        <section id="dokumentasi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Dokumentasi', 'Documentation')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              Authentication
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              API Keys
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              Rate Limits
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              Errors
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              Webhooks
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm hover:border-blue-500 transition cursor-pointer">
              Examples
            </div>
          </div>
        </section>

        {/* SDK Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">SDK</h2>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase">Coming Soon</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              JavaScript
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              PHP
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              Python
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              Flutter
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              Go
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm">
              Java
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-xl text-center font-semibold text-sm shadow-sm bg-slate-100 dark:bg-[#1E293B]">
              {t('Semua', 'All')}
            </div>
          </div>
        </section>

        {/* API Reference Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">API Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">REST API</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t('Standar arsitektur HTTP request/response.', 'Standard HTTP request/response architecture.')}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase">Coming Soon</span>
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">GraphQL</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t('Query data fleksibel sesuai kebutuhan.', 'Flexible data querying as needed.')}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase">Coming Soon</span>
            </div>
          </div>
        </section>

        {/* Open Source & Status */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Open Source */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <span>🐙</span> GitHub Open Source
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase">Coming Soon</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-6">
                  {t('Kontribusi dan jelajahi kode sumber terbuka kami di repository resmi.', 'Contribute and explore our open source code in the official repository.')}
                </p>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline">
                {t('Kunjungi GitHub &rarr;', 'Visit GitHub &rarr;')}
              </a>
            </div>

            {/* Status */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <span>🟢</span> {t('Status Layanan', 'Service Status')}
                  </h3>
                  <span className="text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full">Operational</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-6">
                  {t('Semua layanan berjalan normal tanpa kendala.', 'All services are running normally without issues.')}
                </p>
              </div>
              <a href="https://status.kamio.co.id" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline">
                status.kamio.co.id &rarr;
              </a>
            </div>

          </div>
        </section>

        {/* Changelog Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Changelog</h2>
          <div className="space-y-6 max-w-2xl">
            
            <div className="flex gap-4 items-start">
              <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs">v2.0</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">REST API</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Planned release for enterprise public access.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs">v1.1</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">SDK</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Multi-language software development kits rollout.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs">v1.0</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Developer Hub diluncurkan</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Initial release of developer documentation portal.</p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-[#1E293B]">
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

        {/* CTA Background Biru */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#2563EB] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl shadow-blue-600/25">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {t('Siap Membangun Bersama Kamio?', 'Ready to Build with Kamio?')}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('Dokumentasi kami dirancang untuk membantu Anda membangun integrasi dengan cepat dan aman.', 'Our documentation is designed to help you build integrations quickly and securely.')}
            </p>
            <a
              href="/dukungan"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-[#2563EB] hover:bg-blue-50 font-bold text-sm transition shadow-md"
            >
              {t('Mulai Sekarang', 'Get Started Now')}
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