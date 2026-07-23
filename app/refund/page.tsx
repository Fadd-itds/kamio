'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function RefundPolicyPage() {
  const [footerEmail, setFooterEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const eligibleProducts = [
    { icon: '💳', title: 'Pembayaran Ganda', desc: 'Transaksi terpotong lebih dari sekali untuk pesanan yang sama.' },
    { icon: '❌', title: 'Produk Tidak Diterima', desc: 'Produk digital atau layanan gagal dikirim ke akun Anda.' },
    { icon: '⚠', title: 'Kesalahan Sistem', desc: 'Terjadi kendala sistem saat proses pembelian berlangsung.' },
    { icon: '🛠', title: 'Gangguan Teknis', desc: 'Layanan tidak dapat diakses sama sekali akibat kendala dari server Kamio.' },
  ];

  const nonRefundableProducts = [
    { product: 'Produk digital yang telah berhasil diunduh atau diakses*', refund: '❌' },
    { product: 'Langganan yang sudah berjalan*', refund: '❌' },
    { product: 'Lisensi yang telah diaktifkan*', refund: '❌' },
    { product: 'Pembayaran yang melanggar ketentuan*', refund: '❌' },
  ];

  const refundSteps = [
    { step: '1', title: 'Hubungi Support', desc: 'Kirimkan tiket atau email ke tim dukungan pelanggan Kamio.' },
    { step: '2', title: 'Sertakan Nomor Pesanan', desc: 'Lampirkan ID pesanan dan bukti transaksi yang sah.' },
    { step: '3', title: 'Tim Melakukan Verifikasi', desc: 'Tim kami akan memeriksa kelayakan klaim refund Anda.' },
    { step: '4', title: 'Keputusan Refund', desc: 'Hasil verifikasi dan keputusan akan dikirimkan via email.' },
    { step: '5', title: 'Dana Diproses', desc: 'Pengembalian dana dikirim sesuai metode pembayaran asal.' },
  ];

  const processingTimes = [
    { title: 'Verifikasi', duration: '1–3 Hari Kerja', desc: 'Pengecekan dokumen dan transaksi.' },
    { title: 'Proses Refund', duration: '3–10 Hari Kerja', desc: 'Transfer pengembalian dana.' },
    { title: 'Total Estimasi', duration: 'Tergantung Bank', desc: 'Waktu aktual tergantung penyedia pembayaran.' },
  ];

  const refundMethods = [
    { name: 'Transfer Bank', desc: 'Pengembalian langsung ke rekening bank lokal.' },
    { name: 'E-Wallet', desc: 'Refund ke saldo dompet digital yang digunakan.' },
    { name: 'Kartu Debit/Kredit', desc: 'Kredit kembali ke tagihan kartu.' },
    { name: 'Metode Pembayaran Asal', desc: 'Sesuai kanal transaksi yang dipakai saat pembelian.' },
  ];

  const rejectionReasons = [
    'Informasi atau bukti transaksi tidak valid',
    'Melanggar Terms of Service Kamio',
    'Penyalahgunaan kebijakan refund',
    'Permintaan di luar ketentuan yang berlaku',
  ];

  const faqs = [
    {
      q: 'Kapan saya bisa meminta refund?',
      a: 'Anda dapat meminta refund jika mengalami pembayaran ganda, produk tidak diterima, atau terjadi kesalahan sistem dan gangguan teknis dari pihak Kamio.'
    },
    {
      q: 'Berapa lama proses refund?',
      a: 'Proses verifikasi membutuhkan waktu 1 hingga 3 hari kerja, sedangkan proses transfer dana memakan waktu 3 hingga 10 hari kerja tergantung bank.'
    },
    {
      q: 'Bagaimana jika pembayaran gagal tetapi saldo terpotong?',
      a: 'Segera hubungi support kami dengan menyertakan bukti potong saldo dan ID transaksi agar dapat langsung diverifikasi dan dikembalikan.'
    },
    {
      q: 'Apakah langganan Premium dapat direfund?',
      a: 'Langganan yang sudah berjalan umumnya tidak dapat direfund kecuali terdapat kesalahan sistem dari pihak Kamio.'
    },
    {
      q: 'Bagaimana mengetahui status permintaan refund saya?',
      a: 'Status dan pembaruan permintaan refund akan dikirimkan secara berkala melalui email terdaftar Anda.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Refund Policy
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Kebijakan Refund ini menjelaskan syarat, proses, dan ketentuan pengembalian dana untuk produk dan layanan yang disediakan oleh Kamio.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-blue-500/20">
            Hubungi Support
          </Link>
          <Link href="/terms" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition border border-slate-700">
            Terms of Service
          </Link>
        </div>
      </section>

      {/* Informasi Dokumen Bar */}
      <div className="bg-slate-900/40 border-y border-slate-800/80 py-4 mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div><strong className="text-white">Terakhir diperbarui:</strong> 23 Juli 2026</div>
          <div><strong className="text-white">Versi:</strong> 1.0</div>
          <div><strong className="text-white">Estimasi Waktu Baca:</strong> 6 Menit</div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        
        {/* Sticky Sidebar (Daftar Isi) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-28 space-y-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
            Refund Policy
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#pendahuluan" className="hover:text-blue-400 transition block">1. Pendahuluan</a></li>
            <li><a href="#memenuhi-syarat" className="hover:text-blue-400 transition block">2. Produk Memenuhi Syarat</a></li>
            <li><a href="#tidak-dapat-direfund" className="hover:text-blue-400 transition block">3. Tidak Dapat Direfund</a></li>
            <li><a href="#cara-mengajukan" className="hover:text-blue-400 transition block">4. Cara Mengajukan</a></li>
            <li><a href="#waktu-pemrosesan" className="hover:text-blue-400 transition block">5. Waktu Pemrosesan</a></li>
            <li><a href="#metode" className="hover:text-blue-400 transition block">6. Metode Pengembalian</a></li>
            <li><a href="#pembatalan" className="hover:text-blue-400 transition block">7. Pembatalan Pesanan</a></li>
            <li><a href="#penolakan" className="hover:text-blue-400 transition block">8. Penolakan Refund</a></li>
            <li><a href="#perubahan" className="hover:text-blue-400 transition block">9. Perubahan Kebijakan</a></li>
            <li><a href="#kontak" className="hover:text-blue-400 transition block">10. Hubungi Kami</a></li>
          </ul>
        </aside>

        {/* Konten Utama */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* 1. Pendahuluan */}
          <section id="pendahuluan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">01.</span> Pendahuluan
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-300 text-sm sm:text-base leading-relaxed">
              Kamio berkomitmen memberikan pengalaman terbaik kepada pelanggan dan memiliki kebijakan pengembalian dana yang adil, dengan mempertimbangkan karakteristik produk digital maupun layanan yang disediakan.
            </div>
          </section>

          {/* 2. Produk yang Memenuhi Syarat Refund */}
          <section id="memenuhi-syarat" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">02.</span> Produk yang Memenuhi Syarat Refund
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eligibleProducts.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-2 shadow-sm">
                  <div className="text-2xl">{item.icon}</div>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Produk yang Tidak Dapat Direfund */}
          <section id="tidak-dapat-direfund" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">03.</span> Produk yang Tidak Dapat Direfund
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">Produk / Layanan</th>
                      <th className="p-4 text-center">Refund</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {nonRefundableProducts.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/20 transition">
                        <td className="p-4 font-medium text-slate-200">{row.product}</td>
                        <td className="p-4 text-center font-mono font-bold text-rose-400">{row.refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              * Kecuali diwajibkan lain oleh hukum yang berlaku atau terdapat kesalahan dari pihak Kamio.
            </p>
          </section>

          {/* 4. Cara Mengajukan Refund */}
          <section id="cara-mengajukan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">04.</span> Cara Mengajukan Refund
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {refundSteps.map((s, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-mono text-blue-400 font-bold">Langkah {s.step}</span>
                    <h4 className="font-bold text-white text-sm">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Waktu Pemrosesan */}
          <section id="waktu-pemrosesan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">05.</span> Waktu Pemrosesan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {processingTimes.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-2 shadow-sm text-center">
                  <span className="text-xs font-semibold text-slate-400">{item.title}</span>
                  <div className="text-lg sm:text-xl font-extrabold text-blue-400 font-mono py-1">{item.duration}</div>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic">
              Catatan: waktu aktual bisa berbeda tergantung bank atau penyedia pembayaran.
            </p>
          </section>

          {/* 6. Metode Pengembalian Dana */}
          <section id="metode" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">06.</span> Metode Pengembalian Dana
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {refundMethods.map((m, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-2 shadow-sm">
                  <h4 className="font-bold text-white text-base">{m.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pengembalian dana akan dilakukan ke metode pembayaran yang digunakan saat transaksi, kecuali ada alasan yang sah untuk menggunakan metode lain.
            </p>
          </section>

          {/* 7. Pembatalan Pesanan */}
          <section id="pembatalan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">07.</span> Pembatalan Pesanan
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm leading-relaxed shadow-sm">
              <p>• Pesanan dapat dibatalkan sebelum diproses, jika memungkinkan.</p>
              <p>• Setelah produk digital dikirim atau diaktifkan, pembatalan mungkin tidak dapat dilakukan sesuai ketentuan yang berlaku.</p>
            </div>
          </section>

          {/* 8. Penolakan Refund */}
          <section id="penolakan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">08.</span> Penolakan Refund
            </h2>
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-rose-400 text-sm">Refund dapat ditolak apabila:</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                {rejectionReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-rose-400 font-bold">✗</span> {reason}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. Perubahan Kebijakan */}
          <section id="perubahan" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">09.</span> Perubahan Kebijakan
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-base">Riwayat Perubahan Kebijakan Refund</h4>
                <p className="text-xs text-slate-400">Pembaruan berkala syarat dan ketentuan pengembalian dana.</p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold rounded-lg">
                  v1.0
                </span>
                <span className="block text-[10px] text-slate-500 mt-1">23 Juli 2026</span>
              </div>
            </div>
          </section>

          {/* 10. Hubungi Kami */}
          <section id="kontak" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">10.</span> Hubungi Kami
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-white text-base">PT Kamio Sentra Multiteknologi</h4>
              <p className="text-xs text-slate-400">Butuh bantuan lebih lanjut mengenai pengembalian dana? Hubungi kami melalui:</p>
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
              <h3 className="text-2xl font-extrabold text-white">Masih memiliki pertanyaan mengenai Refund?</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Tim Kamio siap membantu proses dan informasi pengembalian dana.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow">
                Hubungi Support
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