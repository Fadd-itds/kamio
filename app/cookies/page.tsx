'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // State untuk preferensi cookie interaktif pada bagian 7
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: true,
    marketing: false,
  });

  const togglePreference = (key: 'functional' | 'analytics' | 'marketing') => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyUseCookies = [
    { icon: '🔐', title: 'Keamanan', desc: 'Melindungi sesi pengguna dan mencegah aktivitas berbahaya.' },
    { icon: '👤', title: 'Mengingat Login', desc: 'Membuat Anda tetap masuk tanpa harus memasukkan sandi berulang kali.' },
    { icon: '🌐', title: 'Preferensi Bahasa', desc: 'Menyimpan pengaturan bahasa dan tampilan pilihan Anda.' },
    { icon: '📊', title: 'Analitik', desc: 'Menganalisis cara pengunjung berinteraksi dengan website.' },
    { icon: '⚡', title: 'Performa', desc: 'Mempercepat muat halaman dan mengoptimalkan sistem.' },
    { icon: '📈', title: 'Pengembangan Produk', desc: 'Membantu kami memahami fitur apa yang paling sering digunakan.' },
  ];

  const cookieTypes = [
    { type: 'Essential', function: 'Login & keamanan', status: '✅ Wajib', active: true },
    { type: 'Functional', function: 'Menyimpan preferensi', status: '❌ Opsional', active: true },
    { type: 'Analytics', function: 'Statistik penggunaan', status: '❌ Opsional', active: true },
    { type: 'Performance', function: 'Optimasi website', status: '❌ Opsional', active: true },
    { type: 'Marketing', function: 'Personalisasi promosi (Belum digunakan)', status: '❌ Belum Digunakan', active: false },
  ];

  const specificCookies = [
    { name: 'session', purpose: 'Login pengguna', duration: 'Session' },
    { name: 'preferences', purpose: 'Bahasa & tema', duration: '1 Tahun' },
    { name: 'analytics', purpose: 'Statistik penggunaan', duration: '13 Bulan' },
  ];

  const thirdPartyCookies = [
    { name: 'Cloudflare', purpose: 'Keamanan' },
    { name: 'Google Analytics', purpose: 'Statistik Website' },
    { name: 'Google Fonts', purpose: 'Font Website' },
    { name: 'YouTube', purpose: 'Video Embed' },
  ];

  const cookieSteps = [
    { step: '1', title: 'Buka Pengaturan Browser', desc: 'Akses menu pengaturan atau preferensi pada browser Anda.' },
    { step: '2', title: 'Kelola Cookie', desc: 'Pilih opsi privasi dan keamanan atau manajemen cookie.' },
    { step: '3', title: 'Hapus Cookie', desc: 'Hapus data cookie yang tersimpan jika diperlukan.' },
    { step: '4', title: 'Simpan Perubahan', desc: 'Simpan pengaturan baru Anda dan muat ulang halaman.' },
  ];

  const faqs = [
    {
      q: 'Apa itu cookie?',
      a: 'Cookie adalah file teks kecil yang ditempatkan di perangkat Anda untuk membantu website mengingat informasi kunjungan Anda.'
    },
    {
      q: 'Apakah cookie aman?',
      a: 'Ya, cookie sepenuhnya aman. Cookie tidak dapat menjalankan program atau membawa virus ke perangkat Anda.'
    },
    {
      q: 'Bisakah saya menolak cookie?',
      a: 'Ya, Anda dapat mengatur browser untuk menolak cookie, namun beberapa fitur website mungkin tidak berfungsi secara optimal.'
    },
    {
      q: 'Apakah Kamio menjual data pengguna?',
      a: 'Tidak. Kamio tidak pernah memperjualbelikan data pribadi atau informasi cookie pengguna kepada pihak ketiga manapun.'
    },
    {
      q: 'Bagaimana mengubah preferensi cookie?',
      a: 'Anda dapat mengubah preferensi melalui panel manajemen cookie di halaman ini atau melalui pengaturan privasi browser Anda.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Cookie Policy
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Kebijakan Cookie ini menjelaskan bagaimana Kamio menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna, menjaga keamanan layanan, serta menganalisis penggunaan website.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#preferensi" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Kelola Preferensi Cookie
          </a>
          <Link href="/privacy" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Privacy Policy
          </Link>
        </div>
      </section>

      {/* Informasi Dokumen Bar */}
      <div className="bg-slate-900/40 border-y border-slate-800/80 py-4 mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div><strong className="text-white">Terakhir diperbarui:</strong> 23 Juli 2026</div>
          <div><strong className="text-white">Versi:</strong> 1.0</div>
          <div><strong className="text-white">Estimasi Waktu Baca:</strong> 5 Menit</div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        
        {/* Sticky Sidebar (Daftar Isi) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-28 space-y-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
            Cookie Policy
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#apa-itu" className="hover:text-blue-400 transition block">1. Apa itu Cookie?</a></li>
            <li><a href="#mengapa" className="hover:text-blue-400 transition block">2. Mengapa Menggunakan Cookie</a></li>
            <li><a href="#jenis" className="hover:text-blue-400 transition block">3. Jenis Cookie</a></li>
            <li><a href="#yang-digunakan" className="hover:text-blue-400 transition block">4. Cookie yang Digunakan</a></li>
            <li><a href="#pihak-ketiga" className="hover:text-blue-400 transition block">5. Cookie Pihak Ketiga</a></li>
            <li><a href="#mengelola" className="hover:text-blue-400 transition block">6. Mengelola Cookie</a></li>
            <li><a href="#preferensi" className="hover:text-blue-400 transition block">7. Preferensi Cookie</a></li>
            <li><a href="#perubahan" className="hover:text-blue-400 transition block">8. Perubahan Kebijakan</a></li>
            <li><a href="#kontak" className="hover:text-blue-400 transition block">9. Hubungi Kami</a></li>
          </ul>
        </aside>

        {/* Konten Utama */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* 1. Apa itu Cookie? */}
          <section id="apa-itu" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">01.</span> Apa itu Cookie?
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-300 text-sm sm:text-base leading-relaxed">
              Cookie adalah file kecil yang disimpan di perangkat Anda saat mengunjungi website. Cookie membantu website mengingat preferensi, meningkatkan keamanan, dan memberikan pengalaman yang lebih baik.
            </div>
          </section>

          {/* 2. Mengapa Kami Menggunakan Cookie? */}
          <section id="mengapa" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">02.</span> Mengapa Kami Menggunakan Cookie?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUseCookies.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-2 shadow-sm">
                  <div className="text-2xl">{item.icon}</div>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Jenis Cookie */}
          <section id="jenis" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">03.</span> Jenis Cookie
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">Jenis</th>
                      <th className="p-4">Fungsi</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {cookieTypes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/20 transition">
                        <td className="p-4 font-bold text-white">{row.type}</td>
                        <td className="p-4 text-slate-300">{row.function}</td>
                        <td className="p-4 font-mono font-semibold text-xs">
                          <span className={`px-2.5 py-1 rounded-full border ${row.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              * Catatan: Kategori cookie pemasaran saat ini belum digunakan pada website Kamio.
            </p>
          </section>

          {/* 4. Cookie yang Digunakan */}
          <section id="yang-digunakan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">04.</span> Cookie yang Digunakan
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">Cookie</th>
                      <th className="p-4">Tujuan</th>
                      <th className="p-4">Durasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {specificCookies.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/20 transition">
                        <td className="p-4 font-mono font-bold text-blue-400">{item.name}</td>
                        <td className="p-4 text-slate-300">{item.purpose}</td>
                        <td className="p-4 font-mono text-slate-400 text-xs">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5. Cookie Pihak Ketiga */}
          <section id="pihak-ketiga" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">05.</span> Cookie Pihak Ketiga
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {thirdPartyCookies.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm flex flex-col justify-between">
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <div className="text-xs text-blue-400 font-mono">↓ {item.purpose}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Mengelola Cookie */}
          <section id="mengelola" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">06.</span> Mengelola Cookie
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cookieSteps.map((s, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2 relative">
                    <span className="text-xs font-mono text-blue-400 font-bold">Langkah {s.step}</span>
                    <h4 className="font-bold text-white text-sm">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Menonaktifkan cookie tertentu dapat memengaruhi fungsi website dan mengurangi kenyamanan pengalaman penjelajahan Anda.
              </p>
            </div>
          </section>

          {/* 7. Preferensi Cookie (Interaktif) */}
          <section id="preferensi" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">07.</span> Preferensi Cookie
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm divide-y divide-slate-800/80">
              
              <div className="flex items-center justify-between py-3 first:pt-0">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Essential</h4>
                  <p className="text-xs text-slate-400">Diperlukan agar website dapat berfungsi dengan baik.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold rounded-full">
                  Selalu Aktif
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Functional</h4>
                  <p className="text-xs text-slate-400">Menyimpan preferensi personalisasi Anda.</p>
                </div>
                <button 
                  onClick={() => togglePreference('functional')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${preferences.functional ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  {preferences.functional ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Analytics</h4>
                  <p className="text-xs text-slate-400">Membantu kami mengumpulkan statistik penggunaan website.</p>
                </div>
                <button 
                  onClick={() => togglePreference('analytics')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${preferences.analytics ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  {preferences.analytics ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="flex items-center justify-between py-3 last:pb-0">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Marketing</h4>
                  <p className="text-xs text-slate-400">Personalisasi promosi dan iklan bertarget.</p>
                </div>
                <span className="px-3 py-1 bg-slate-800 text-slate-500 border border-slate-700 text-xs font-bold rounded-lg font-mono">
                  Coming Soon
                </span>
              </div>

            </div>
          </section>

          {/* 8. Perubahan Kebijakan */}
          <section id="perubahan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">08.</span> Perubahan Kebijakan
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-base">Riwayat Perubahan (Changelog)</h4>
                <p className="text-xs text-slate-400">Pembaruan berkala terkait kebijakan penggunaan cookie.</p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                  v1.0
                </span>
                <span className="block text-[10px] text-slate-500 mt-1">23 Juli 2026</span>
              </div>
            </div>
          </section>

          {/* 9. Hubungi Kami */}
          <section id="kontak" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">09.</span> Hubungi Kami
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-white text-base">PT Kamio Sentra Multiteknologi</h4>
              <p className="text-xs text-slate-400">Jika Anda memiliki pertanyaan seputar kebijakan cookie ini, silakan hubungi tim kami:</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="mailto:support@kamio.co.id" className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-blue-400 hover:text-blue-300 transition">
                  support@kamio.co.id
                </a>
                <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition">
                  /contact
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="space-y-4 pt-6">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">FAQ (Pertanyaan Umum)</h3>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-sm divide-y divide-slate-800/80">
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

          {/* CTA Banner */}
          <section className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
            <div className="max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Masih memiliki pertanyaan mengenai Cookie?</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Hubungi tim kami untuk informasi lebih lanjut.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
                Hubungi Kami
              </Link>
            </div>
          </section>

        </div>

      </main>

      {/* Footer Lengkap */}
      <footer className="bg-[#090D16] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
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