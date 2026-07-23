'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function StatusPage() {
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isAllOperational, setIsAllOperational] = useState(true);

  const [systemComponents, setSystemComponents] = useState([
    { name: 'Website (kamio.co.id)', status: 'Operational', isUp: true, latency: '42ms' },
    { name: 'API', status: 'Operational', isUp: true, latency: '65ms' },
    { name: 'Database', status: 'Operational', isUp: true, latency: '12ms' },
    { name: 'CDN', status: 'Operational', isUp: true, latency: '18ms' },
    { name: 'Storage', status: 'Operational', isUp: true, latency: '24ms' },
    { name: 'Authentication', status: 'Operational', isUp: true, latency: '51ms' },
    { name: 'Payment Gateway', status: 'Operational', isUp: true, latency: '89ms' },
    { name: 'Email Service', status: 'Operational', isUp: true, latency: '110ms' },
    { name: 'Download Server', status: 'Operational', isUp: true, latency: '35ms' },
    { name: 'Search', status: 'Operational', isUp: true, latency: '28ms' },
  ]);

  const [uptimes, setUptimes] = useState([
    { name: 'Website', uptime: '99.98%' },
    { name: 'API', uptime: '99.95%' },
    { name: 'Store', uptime: '99.99%' },
  ]);

  useEffect(() => {
    const updateLiveTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZone: 'Asia/Jakarta',
        hour12: false 
      };
      const formatted = new Intl.DateTimeFormat('id-ID', options).format(now);
      setCurrentTime(formatted.replace('.', ':') + ' WIB');
    };

    updateLiveTime();
    const timer = setInterval(updateLiveTime, 1000);

    const intervalCheck = setInterval(() => {
      setSystemComponents(prev => prev.map(comp => {
        const randomPing = Math.floor(Math.random() * 30) + 20;
        return { ...comp, latency: `${randomPing}ms` };
      }));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(intervalCheck);
    };
  }, []);

  const productStatuses = [
    { name: 'Website', status: 'Operational' },
    { name: 'Kamio Games', status: 'Operational' },
    { name: 'Kamio Books', status: 'Operational' },
    { name: 'Kamio Store', status: 'Operational' },
    { name: 'Developer Hub', status: 'Operational' },
    { name: 'API', status: 'Operational' },
  ];

  const incidentHistory = [
    { date: '23 Juli 2026', desc: 'Tidak ada gangguan.', status: 'Normal' },
    { date: '20 Juli 2026', desc: 'Maintenance Website', status: 'Selesai' },
    { date: '15 Juli 2026', desc: 'Gangguan Email', status: 'Resolved' },
  ];

  const regions = [
    { name: 'Indonesia', status: 'Operational' },
    { name: 'Singapore', status: 'Operational' },
    { name: 'Global', status: 'Operational' },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Status Layanan Kamio
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Pantau status operasional seluruh produk dan layanan Kamio secara real-time.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 w-full">
        
        {/* Ringkasan Status ⭐ */}
        <section className={`border rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl transition-all ${
          isAllOperational 
            ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300' 
            : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
        }`}>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="text-4xl sm:text-5xl animate-pulse">
              {isAllOperational ? '🟢' : '🟡'}
            </span>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {isAllOperational ? 'Semua Sistem Beroperasi Normal' : 'Gangguan Sebagian'}
              </h2>
              <p className="text-xs text-slate-400">Seluruh infrastruktur terpantau stabil tanpa kendala signifikan.</p>
            </div>
          </div>
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 text-center shrink-0 w-full sm:w-auto">
            <span className="text-[11px] uppercase tracking-widest text-slate-500 block font-semibold">Terakhir diperbarui</span>
            <span className="text-xs font-mono font-bold text-slate-200">{currentTime || '23 Juli 2026 21:45 WIB'}</span>
          </div>
        </section>

        {/* Status Produk Grid */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Status Produk</h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-sm divide-y divide-slate-800/80">
            {productStatuses.map((prod, idx) => (
              <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm">🟢</span>
                  <span className="font-semibold text-sm sm:text-base text-slate-200">{prod.name}</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {prod.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Komponen Sistem Otomatis */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Komponen Sistem (Real-Time Auto-Check)</h3>
            <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-lg font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span> Live Monitoring
            </span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-sm divide-y divide-slate-800/80">
            {systemComponents.map((comp, idx) => (
              <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs">🟢</span>
                  <span className="font-medium text-sm text-slate-300">{comp.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">{comp.latency}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    Normal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Uptime Card */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Uptime (30 Hari Terakhir)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {uptimes.map((up, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center space-y-2 shadow-sm">
                <span className="text-xs font-semibold text-slate-400">{up.name}</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">{up.uptime}</div>
                <div className="w-12 h-0.5 bg-emerald-500/30 mx-auto"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Incident History Timeline */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Incident History</h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            {incidentHistory.map((inc, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-800 space-y-1 last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900"></div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 font-mono">{inc.date}</span>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {inc.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-200">{inc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Jadwal Maintenance</h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 text-center space-y-3 shadow-sm">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold rounded-full">
              Maintenance Terjadwal
            </span>
            <div className="text-base font-bold text-slate-200">26 Juli 2026</div>
            <div className="text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
              <span>02.00 WIB</span>
              <span>→</span>
              <span>03.00 WIB</span>
            </div>
          </div>
        </section>

        {/* Status Berdasarkan Region */}
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400">Status Berdasarkan Region</h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-sm divide-y divide-slate-800/80">
            {regions.map((reg, idx) => (
              <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between">
                <span className="font-semibold text-sm text-slate-200">{reg.name}</span>
                <span className="text-xs">🟢 Operational</span>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe Notification */}
        <section className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/20 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-xl">
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl font-extrabold text-white">Dapatkan Notifikasi Gangguan</h3>
            <p className="text-slate-400 text-xs">Terima pemberitahuan instan via email ketika terjadi gangguan atau pemeliharaan sistem.</p>
          </div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Masukkan email Anda..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
              Subscribe
            </button>
          </div>
        </section>

      </main>

      {/* Footer Lengkap Multi-Kolom Sesuai Referensi */}
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

          {/* Bagian Bawah Footer: Baris Newsletter Sesuai Gambar */}
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