import Navbar from '@/components/Navbar';

export default function StorePage() {
  const categories = [
    { name: 'Game', icon: '🎮', link: '#produk' },
    { name: 'Aplikasi', icon: '📱', link: '#produk' },
    { name: 'Premium', icon: '💎', link: '#produk' },
    { name: 'Buku', icon: '📚', link: '#produk' },
    { name: 'Lisensi', icon: '🔑', link: '#produk' },
    { name: 'Voucher', icon: '🎟', link: '#produk' },
  ];

  const featuredProducts = [
    {
      id: 'multidownloader-premium',
      name: 'Kamio MultiDownloader Premium',
      category: 'Aplikasi & Premium',
      price: 'Rp 49.000',
      period: '/bulan',
      description: 'Akses tanpa batas, kecepatan unduh maksimal tanpa iklan untuk semua platform.',
      icon: '⚡',
      badge: 'Best Seller',
    },
    {
      id: 'spring-together',
      name: 'Our Spring Together',
      category: 'Game',
      price: 'Rp 89.000',
      period: '',
      description: 'Game naratif visual novel indie eksklusif besutan Kamio Games dengan cerita emosional.',
      icon: '🎮',
      badge: 'New Release',
    },
  ];

  const whyChooseUs = [
    {
      icon: '✅',
      title: 'Pembayaran Aman',
      description: 'Didukung berbagai sistem pembayaran terpercaya dan terenkripsi.',
    },
    {
      icon: '🔄',
      title: 'Lisensi Resmi',
      description: 'Semua produk dijamin keasliannya langsung dari ekosistem Kamio.',
    },
    {
      icon: '⚡',
      title: 'Aktivasi Instan',
      description: 'Produk digital dan lisensi langsung aktif otomatis setelah pembayaran berhasil.',
    },
    {
      icon: '🛡',
      title: 'Dukungan Resmi',
      description: 'Tim support siap membantu kendala transaksi dan produk Anda kapan saja.',
    },
  ];

  const paymentMethods = [
    { name: 'QRIS', desc: 'Scan & Pay instan' },
    { name: 'Virtual Account', desc: 'BCA, Mandiri, BNI, BRI, dll' },
    { name: 'Transfer Bank', desc: 'Antar bank real-time' },
    { name: 'Kartu Kredit', desc: 'Visa, Mastercard, JCB' },
    { name: 'E-Wallet', desc: 'GoPay, OVO, DANA, ShopeePay' },
  ];

  const faqs = [
    {
      q: 'Bagaimana cara membeli produk di Kamio Store?',
      a: 'Pilih produk yang Anda inginkan, klik tombol beli, selesaikan pembayaran melalui metode yang tersedia, dan produk/lisensi akan langsung aktif atau dikirimkan ke akun Anda.',
    },
    {
      q: 'Bagaimana ketentuan dan proses refund?',
      a: 'Refund dapat diajukan dalam waktu maksimal 3 hari setelah pembelian jika produk mengalami kendala teknis fatal dan tidak dapat digunakan, sesuai dengan syarat & ketentuan yang berlaku.',
    },
    {
      q: 'Bagaimana cara aktivasi lisensi produk?',
      a: 'Kode lisensi atau akses premium akan otomatis dikirimkan via email terdaftar atau dapat dilihat langsung pada dashboard akun Kamio Anda setelah pembayaran terkonfirmasi.',
    },
    {
      q: 'Bagaimana cara menghubungi tim support Kamio Store?',
      a: 'Anda dapat menghubungi tim dukungan kami melalui halaman bantuan atau kontak support resmi yang tersedia di bagian bawah situs.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/40 to-[#7C3AED]/40 rounded-full blur-3xl"></div>
          </div>

          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            Kamio Store Official
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Satu Tempat untuk Seluruh <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Produk Digital Kamio</span>
          </h1>
          <p className="text-[#CBD5E1] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Temukan aplikasi, game, langganan premium, lisensi, dan layanan digital resmi dalam satu platform.
          </p>
          <div>
            <a
              href="#produk"
              className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-sm sm:text-base inline-block"
            >
              Mulai Belanja
            </a>
          </div>
        </section>

        {/* 2. Kategori Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <a
                key={idx}
                href={cat.link}
                className="bg-[#0F172A] border border-[#1E293B] hover:border-[#2563EB] p-6 rounded-2xl flex flex-col items-center justify-center text-center transition group shadow-lg"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="font-semibold text-sm sm:text-base text-[#F8FAFC]">{cat.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 3. Produk Unggulan */}
        <section id="produk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Produk Unggulan</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Pilihan produk digital dan layanan terbaik dari Kamio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#0F172A] border border-[#1E293B] hover:border-[#2563EB]/60 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold rounded-full">
                  {prod.badge}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{prod.icon}</span>
                    <div>
                      <span className="text-xs text-[#CBD5E1] font-medium">{prod.category}</span>
                      <h3 className="text-xl font-bold text-[#F8FAFC]">{prod.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-8">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1E293B] flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">{prod.price}</span>
                    <span className="text-xs text-[#CBD5E1] ml-1">{prod.period}</span>
                  </div>
                  <button className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition shadow-md shadow-blue-600/20">
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Mengapa Berbelanja di Kamio Store? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Mengapa Berbelanja di Kamio Store?</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Komitmen kami untuk memberikan pengalaman transaksi yang aman dan nyaman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">{item.title}</h3>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Metode Pembayaran */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Metode Pembayaran</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Pilih berbagai kemudahan metode pembayaran terpercaya.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-[#0F172A]/70 border border-[#1E293B] p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                <h3 className="font-bold text-base text-[#F8FAFC] mb-1">{method.name}</h3>
                <p className="text-xs text-[#CBD5E1]">{method.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Pertanyaan seputar transaksi dan layanan Kamio Store.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">{faq.q}</h3>
                <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Butuh Bantuan?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              Hubungi Tim Kamio Store untuk pertanyaan seputar produk, pembayaran, atau bantuan transaksi.
            </p>
            <a
              href="/dukungan"
              className="px-8 py-4 bg-white text-[#050816] font-bold rounded-xl hover:bg-blue-50 transition shadow-xl text-sm sm:text-base inline-block"
            >
              Hubungi Tim Kamio Store
            </a>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="bg-[#020617] border-t border-[#1E293B] pt-16 pb-12 text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="font-bold text-2xl text-[#F8FAFC] tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.
            </p>
            <div className="text-xs text-[#CBD5E1]/60">
              © 2026 PT Kamio Sentra Multiteknologi. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Produk</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/products" className="hover:text-[#60A5FA] transition">Kamio Games</a></li>
              <li><a href="/products" className="hover:text-[#60A5FA] transition">MultiDownloader</a></li>
              <li><a href="/products" className="hover:text-[#60A5FA] transition">Kamio Books</a></li>
              <li><a href="/store" className="hover:text-[#60A5FA] transition">Kamio Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Perusahaan</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-[#60A5FA] transition">Tentang Kami</a></li>
              <li><a href="/karier" className="hover:text-[#60A5FA] transition">Karier</a></li>
              <li><a href="/berita" className="hover:text-[#60A5FA] transition">Berita & Pers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Dukungan</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/developer" className="hover:text-[#60A5FA] transition">Developer Hub</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Pusat Bantuan</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Kontak Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#F8FAFC] uppercase tracking-wider mb-4">Legal & Sosial</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Kebijakan Privasi</a></li>
              <li><a href="/dukungan" className="hover:text-[#60A5FA] transition">Syarat & Ketentuan</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA] transition">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA] transition">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="font-bold text-[#F8FAFC] block mb-1">Berlangganan Newsletter Kamio</span>
            <p className="text-xs text-[#CBD5E1]">Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Masukkan email Anda..." 
              className="bg-[#050816] border border-[#1E293B] px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-[#F8FAFC] w-full sm:w-64"
            />
            <button className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-[#F8FAFC] text-sm font-medium rounded-xl transition whitespace-nowrap">
              Berlangganan
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}