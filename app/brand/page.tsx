'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BrandPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const colorPalettes = [
    { name: 'Primary Blue', hex: '#2563EB', bg: 'bg-blue-600', text: 'text-white' },
    { name: 'Dark', hex: '#0F172A', bg: 'bg-slate-900', text: 'text-white' },
    { name: 'Light', hex: '#F8FAFC', bg: 'bg-slate-100', text: 'text-slate-900' },
    { name: 'Accent', hex: '#38BDF8', bg: 'bg-sky-400', text: 'text-slate-950' },
  ];

  const productIcons = [
    { name: 'Kamio Games', desc: 'Hiburan dan ekosistem gaming digital.' },
    { name: 'Kamio Books', desc: 'Platform literasi dan bacaan modern.' },
    { name: 'Kamio Store', desc: 'Pusat aplikasi dan transaksi digital.' },
    { name: 'MultiDownloader', desc: 'Utilitas pengunduh berkas berkecepatan tinggi.' },
  ];

  const assets = [
    { name: 'Logo', desc: 'Kumpulan logo resmi format vector & raster.' },
    { name: 'Icon', desc: 'Ikon aplikasi dan favicon.' },
    { name: 'Brand Kit', desc: 'Panduan lengkap dan aset identitas visual.' },
    { name: 'Media Kit', desc: 'Profil perusahaan dan foto petinggi.' },
    { name: 'Wallpaper', desc: 'Latar belakang resmi desktop & mobile.' },
    { name: 'Press Kit', desc: 'Siaran pers dan materi publikasi.' },
  ];

  const brandPersonalities = [
    { title: 'Modern', desc: 'Selalu mengikuti tren teknologi terkini dan relevan.' },
    { title: 'Professional', desc: 'Standar kualitas tinggi dalam setiap layanan.' },
    { title: 'Simple', desc: 'Desain dan antarmuka yang bersih serta mudah digunakan.' },
    { title: 'Innovative', desc: 'Terus menciptakan solusi terdepan.' },
    { title: 'Trusted', desc: 'Aman, transparan, dan dapat diandalkan.' },
  ];

  const faqs = [
    {
      q: 'Bolehkah menggunakan logo Kamio?',
      a: 'Logo Kamio hanya boleh digunakan oleh mitra resmi, media, atau untuk keperluan publikasi yang telah disetujui tanpa mengubah proporsi maupun warna asli.'
    },
    {
      q: 'Bagaimana meminta izin penggunaan logo?',
      a: 'Anda dapat menghubungi tim media dan humas kami melalui email resmi media@kamio.co.id untuk permohonan penggunaan khusus.'
    },
    {
      q: 'Di mana mengunduh logo resmi?',
      a: 'Seluruh aset resmi termasuk logo dalam berbagai format (PNG, SVG, PDF, AI) dapat diunduh langsung melalui halaman Brand ini pada bagian aset di atas.'
    },
    {
      q: 'Bagaimana melaporkan penyalahgunaan merek?',
      a: 'Jika Anda menemukan pihak yang menyalahgunakan identitas atau merek Kamio secara ilegal, silakan laporkan ke legal@kamio.co.id.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Brand Kamio
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Panduan resmi penggunaan identitas visual Kamio, termasuk logo, warna, tipografi, aset media, dan pedoman merek.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#assets" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Download Brand Kit
          </a>
          <a href="#assets" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Media Kit
          </a>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16 w-full">
        
        {/* Tentang Brand */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h3 className="text-sm uppercase tracking-wider font-bold text-blue-400">Tentang Brand</h3>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Membangun ekosistem teknologi Indonesia melalui perangkat lunak, game, layanan digital, dan inovasi yang berorientasi pada masa depan.
            </h2>
            <p className="text-slate-400 font-mono text-sm">
              &ldquo;Building the Future with Technology.&rdquo;
            </p>
          </div>
        </section>

        {/* Logo Section */}
        <section className="space-y-6">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Logo Resmi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Logo Utama */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-white">Logo Utama</h4>
                <div className="h-28 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-center text-xl font-black tracking-widest text-white">
                  KAMIO<span className="text-blue-500">.</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['PNG', 'SVG', 'PDF', 'AI'].map((fmt, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] font-mono font-bold rounded-lg border border-slate-700">
                      {fmt}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold text-xs transition">
                  Download
                </button>
              </div>
            </div>

            {/* Logo Monokrom */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-white">Logo Monokrom</h4>
                <div className="h-28 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-center text-xl font-black tracking-widest text-slate-300">
                  KAMIO<span className="text-slate-500">.</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['PNG', 'SVG'].map((fmt, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] font-mono font-bold rounded-lg border border-slate-700">
                      {fmt}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold text-xs transition">
                  Download
                </button>
              </div>
            </div>

            {/* Logo Ikon */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-white">Logo Ikon</h4>
                <div className="h-28 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-center text-2xl font-black text-blue-500">
                  K<span className="w-2 h-2 rounded-full bg-blue-500 inline-block ml-0.5"></span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['PNG', 'SVG'].map((fmt, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] font-mono font-bold rounded-lg border border-slate-700">
                      {fmt}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold text-xs transition">
                  Download
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Clear Space & Minimum Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Clear Space */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Clear Space</h3>
            <div className="bg-slate-950 border border-dashed border-slate-700 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs font-mono text-slate-500">┌─────────────────────────────┐</div>
              <div className="font-bold text-white tracking-widest py-2">LOGO</div>
              <div className="text-xs font-mono text-blue-400">← minimal spacing →</div>
              <div className="text-xs font-mono text-slate-500">└─────────────────────────────┘</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Logo harus selalu memiliki ruang kosong minimum di sekelilingnya agar tidak bertabrakan dengan elemen visual lain.
            </p>
          </section>

          {/* Minimum Size */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Minimum Size</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Desktop</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">120 px</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Mobile</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">80 px</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pastikan ukuran logo tidak lebih kecil dari batas minimum di atas agar keterbacaan tetap terjaga optimal.
            </p>
          </section>

        </div>

        {/* Warna Brand */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Warna Brand</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colorPalettes.map((color, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
                <div className={`h-20 rounded-2xl ${color.bg} border border-white/10 flex items-end p-3`}>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm ${color.text}`}>
                    {color.hex}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">{color.name}</h4>
                  <p className="text-[11px] text-slate-400 font-mono">HEX: {color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipografi */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Tipografi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-xs text-slate-400 font-semibold">Heading</span>
              <div className="text-2xl font-extrabold text-white">Geist</div>
              <span className="text-[10px] text-slate-500 block">Modern Sans-Serif</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-xs text-slate-400 font-semibold">Body</span>
              <div className="text-2xl font-extrabold text-white">Geist</div>
              <span className="text-[10px] text-slate-500 block">Optimized Readability</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-xs text-slate-400 font-semibold">Fallback</span>
              <div className="text-2xl font-extrabold text-white">sans-serif</div>
              <span className="text-[10px] text-slate-500 block">System Font Stack</span>
            </div>
          </div>
        </section>

        {/* Penggunaan Logo (Do & Don't) */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Penggunaan Logo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Boleh */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-base">
                <span>✅</span> Boleh Dilakukan
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-3">✓ Menggunakan logo asli</li>
                <li className="flex items-center gap-3">✓ Menjaga proporsi tetap seimbang</li>
                <li className="flex items-center gap-3">✓ Memakai warna resmi merek</li>
                <li className="flex items-center gap-3">✓ Menyediakan resolusi tinggi</li>
              </ul>
            </div>

            {/* Tidak Boleh */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-base">
                <span>❌</span> Tidak Boleh Dilakukan
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-3">✗ Memutar sudut logo (diputar)</li>
                <li className="flex items-center gap-3">✗ Meregangkan atau mengubah aspek rasio</li>
                <li className="flex items-center gap-3">✗ Mengganti warna sembarangan</li>
                <li className="flex items-center gap-3">✗ Menambah efek bayangan atau glow berlebihan</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Ikon Produk */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Ikon Produk</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productIcons.map((prod, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
                <div className="h-14 w-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-lg font-black text-blue-400">
                  {prod.name.charAt(0)}
                </div>
                <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                <p className="text-xs text-slate-400">{prod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Asset Download */}
        <section id="assets" className="space-y-4 scroll-mt-12">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Asset Download</h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-sm divide-y divide-slate-800/80">
            {assets.map((item, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-200">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold text-xs transition shrink-0">
                  Unduh Berkas
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Voice & Personality */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Brand Voice & Personality</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandPersonalities.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-2 shadow-sm">
                <h4 className="font-extrabold text-blue-400 text-base">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Penggunaan Nama */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Penggunaan Nama</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900/60 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="text-emerald-400 font-extrabold text-sm uppercase tracking-wide">Gunakan</div>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="font-bold text-white">Kamio</li>
                <li className="text-xs text-slate-400 font-mono">PT Kamio Sentra Multiteknologi</li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-rose-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="text-rose-400 font-extrabold text-sm uppercase tracking-wide">Jangan Gunakan</div>
              <ul className="space-y-2 text-sm text-slate-400 line-through">
                <li>KAMIOO</li>
                <li>Kamio Inc.</li>
                <li>Kamiyo</li>
              </ul>
            </div>

          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4">
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
            <h3 className="text-2xl font-extrabold text-white">Membutuhkan aset resmi Kamio?</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Unduh Brand Kit atau hubungi tim media kami untuk informasi lebih lanjut.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#assets" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
              Download Brand Kit
            </a>
          </div>
        </section>

      </main>

      {/* Footer Lengkap */}
      <footer className="bg-[#090D16] border-t border-slate-800 text-slate-400 text-xs mt-20 pt-16 pb-12">
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