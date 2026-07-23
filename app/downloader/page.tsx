'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DownloaderPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reasons = [
    { icon: '⚡', title: 'Cepat', desc: 'Kecepatan unduh optimal tanpa membebani sistem Anda.' },
    { icon: '📁', title: 'Pengelolaan File', desc: 'Atur dan kelompokkan file unduhan dengan mudah di satu tempat.' },
    { icon: '📱', title: 'Antarmuka Modern', desc: 'Desain bersih dan intuitif yang nyaman dipandang.' },
    { icon: '🔒', title: 'Privasi Terjaga', desc: 'Data dan aktivitas unduhan Anda aman terlindungi.' },
    { icon: '⬇', title: 'Multi Download', desc: 'Unduh banyak file sekaligus secara bersamaan secara efisien.' },
    { icon: '🔄', title: 'Update Berkala', desc: 'Pembaruan fitur dan peningkatan stabilitas secara rutin.' },
  ];

  const features = [
    { icon: '📥', title: 'Download Manager', desc: 'Kontrol penuh proses unduh: jeda, lanjutkan, atau batalkan.' },
    { icon: '📂', title: 'Organisasi File', desc: 'Penyortiran otomatis berdasarkan kategori format file.' },
    { icon: '▶', title: 'Preview Media', desc: 'Pratinjau file media langsung sebelum atau sesudah diunduh.' },
    { icon: '⚙', title: 'Pengaturan Fleksibel', desc: 'Sesuaikan direktori penyimpanan dan batas kecepatan sesuai kebutuhan.' },
    { icon: '📜', title: 'Riwayat Download', desc: 'Akses mudah ke daftar file yang pernah diunduh sebelumnya.' },
    { icon: '⭐', title: 'Premium Features', desc: 'Fitur tingkat lanjut untuk pengalaman unduh tanpa batas.' },
  ];

  const steps = [
    { step: '1', title: 'Install', desc: 'Unduh dan pasang aplikasi Kamio Downloader di perangkat Anda.' },
    { step: '2', title: 'Tambahkan Tautan atau Mulai Unduhan', desc: 'Salin tautan file atau mulai unduhan langsung dari browser.' },
    { step: '3', title: 'Pilih Lokasi Penyimpanan', desc: 'Tentukan folder tujuan penyimpanan file sesuai keinginan.' },
    { step: '4', title: 'Kelola File', desc: 'Pantau proses, jeda, atau buka file yang telah selesai diunduh.' },
  ];

  const platforms = [
    { name: 'Android', status: 'Available' },
    { name: 'Windows', status: 'Coming Soon' },
    { name: 'macOS', status: 'Coming Soon' },
    { name: 'Linux', status: 'Coming Soon' },
  ];

  const comparisonTable = [
    { feature: 'Download Manager', free: '✅', premium: '✅' },
    { feature: 'Riwayat Download', free: '✅', premium: '✅' },
    { feature: 'Kecepatan Maksimal', free: 'Standar', premium: 'Lebih Tinggi*' },
    { feature: 'Sinkronisasi', free: '❌', premium: '✅ (Coming Soon)' },
    { feature: 'Dukungan Prioritas', free: '❌', premium: '✅' },
  ];

  const faqs = [
    {
      q: 'Apakah aplikasi gratis?',
      a: 'Ya, Kamio Downloader dapat diunduh dan digunakan secara gratis dengan fitur dasar yang handal.'
    },
    {
      q: 'Apakah tersedia Premium?',
      a: 'Ya, kami menyediakan versi Premium dengan kecepatan lebih tinggi, dukungan prioritas, dan fitur tambahan.'
    },
    {
      q: 'Bagaimana melakukan update?',
      a: 'Pembaruan aplikasi akan diinformasikan melalui sistem atau dapat diunduh langsung melalui situs resmi Kamio.'
    },
    {
      q: 'Bagaimana melaporkan bug?',
      a: 'Anda dapat mengirimkan laporan bug melalui menu dukungan atau email langsung ke tim support Kamio.'
    },
    {
      q: 'Di mana platform aplikasi tersedia?',
      a: 'Saat ini aplikasi tersedia untuk Android, dengan versi Windows, macOS, dan Linux yang segera hadir.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Kamio Downloader
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Kelola, simpan, dan atur unduhan Anda dengan lebih mudah melalui aplikasi yang cepat, ringan, dan dirancang untuk meningkatkan produktivitas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#download" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Download Sekarang
          </a>
          <Link href="/docs" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Lihat Dokumentasi
          </Link>
        </div>
      </section>

      {/* Featured Screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl max-w-5xl mx-auto">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Kamio Downloader</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Fast. Simple. Reliable.</h3>
          </div>
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl h-64 sm:h-96 flex flex-col items-center justify-center gap-2 text-slate-500 shadow-inner">
            <span className="text-5xl">📱</span>
            <span className="text-xs font-mono">Screenshot Aplikasi</span>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Downloader */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Mengapa Memilih Downloader</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Keunggulan yang membuat pengelolaan unduhan lebih efisien.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
              <div className="text-3xl">{r.icon}</div>
              <h4 className="font-bold text-white text-base">{r.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur (Grid 2x3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Fitur Unggulan</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Dirancang dengan kelengkapan fungsi untuk kemudahan Anda.</p>
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

      {/* Cara Kerja (Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Cara Kerja</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Langkah mudah mulai mengunduh file favorit Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
              <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                Langkah {s.step}
              </span>
              <h4 className="font-bold text-white text-base">{s.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Platform</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Tersedia untuk berbagai sistem operasi.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {platforms.map((p, idx) => (
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

      {/* Screenshot Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Screenshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Home', 'Download', 'History', 'Settings'].map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl h-48 sm:h-60 flex flex-col items-center justify-center gap-2 text-slate-500 shadow-inner">
              <span className="text-3xl">🖼️</span>
              <span className="text-xs font-mono">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Perbandingan Paket */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Perbandingan Paket</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Pilih pengalaman yang sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Fitur</th>
                  <th className="p-4 text-center">Gratis</th>
                  <th className="p-4 text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20 transition">
                    <td className="p-4 font-medium text-slate-200">{row.feature}</td>
                    <td className="p-4 text-center font-mono text-slate-300">{row.free}</td>
                    <td className="p-4 text-center font-mono font-bold text-blue-400">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic text-center">
          * Jika memang ada perbedaan yang benar-benar diterapkan pada produk.
        </p>
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

      {/* CTA Section */}
      <section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full scroll-mt-20">
        <div className="bg-gradient-to-r from-blue-900/60 via-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Kelola Unduhan dengan Lebih Mudah</h3>
            <p className="text-blue-100 text-xs sm:text-sm">Download Kamio Downloader sekarang.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#download" className="px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl text-xs transition shadow">
              Download
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