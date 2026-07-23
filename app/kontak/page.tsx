'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function KontakSupportPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const helpTypes = [
    {
      icon: '🛠️',
      titleId: 'Bantuan Teknis',
      titleEn: 'Technical Support',
      descId: 'Masalah aplikasi • Bug • Error',
      descEn: 'App issues • Bugs • Errors',
    },
    {
      icon: '💳',
      titleId: 'Pembayaran',
      titleEn: 'Billing & Payment',
      descId: 'Transaksi • Refund • Invoice',
      descEn: 'Transactions • Refunds • Invoices',
    },
    {
      icon: '🤝',
      titleId: 'Kerja Sama',
      titleEn: 'Partnership',
      descId: 'Partnership • Bisnis • Media',
      descEn: 'Partnerships • Business • Media',
    },
    {
      icon: '👨‍💻',
      titleId: 'Developer',
      titleEn: 'Developer',
      descId: 'API • SDK • Integrasi',
      descEn: 'APIs • SDKs • Integration',
    },
    {
      icon: '📢',
      titleId: 'Media',
      titleEn: 'Media',
      descId: 'Pers • Logo • Media Kit',
      descEn: 'Press • Logos • Media Kits',
    },
    {
      icon: '📋',
      titleId: 'Lainnya',
      titleEn: 'Others',
      descId: 'Pertanyaan umum',
      descEn: 'General inquiries',
    },
  ];

  const productContacts = [
    { name: 'Kamio Games', email: 'games@kamio.co.id' },
    { name: 'Kamio Store', email: 'store@kamio.co.id' },
    { name: 'Developer', email: 'developer@kamio.co.id' },
    { name: 'Media', email: 'press@kamio.co.id' },
  ];

  const faqs = [
    {
      qId: 'Berapa lama balasan email?',
      qEn: 'How long does email response take?',
      aId: 'Tim kami berupaya membalas setiap email dalam waktu kurang dari 24 jam kerja.',
      aEn: 'Our team strives to reply to every email within less than 24 working hours.',
    },
    {
      qId: 'Bagaimana menghubungi WhatsApp?',
      qEn: 'How to contact via WhatsApp?',
      aId: 'Anda dapat mengklik kartu WhatsApp di atas untuk langsung terhubung ke layanan *live chat* dukungan kami pada jam operasional.',
      aEn: 'You can click the WhatsApp card above to connect directly to our support live chat during operational hours.',
    },
    {
      qId: 'Apakah tersedia live chat?',
      qEn: 'Is live chat available?',
      aId: 'Ya, *live chat* tersedia melalui WhatsApp dan widget dukungan di platform kami selama jam operasional aktif.',
      aEn: 'Yes, live chat is available via WhatsApp and the support widget on our platform during active operational hours.',
    },
    {
      qId: 'Bagaimana mengirim laporan bug?',
      qEn: 'How to submit a bug report?',
      aId: 'Laporan bug dapat dikirimkan melalui Formulir Kontak dengan memilih kategori "Bantuan Teknis" atau melalui email dukungan.',
      aEn: 'Bug reports can be submitted via the Contact Form by selecting the "Technical Support" category or via support email.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-4">
              {t('Kontak Support', 'Contact Support')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {t('Kontak Support', 'Contact Support')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] mb-8 leading-relaxed">
              {t(
                'Tim Kamio siap membantu pertanyaan, kendala teknis, kerja sama, maupun kebutuhan lainnya melalui berbagai saluran komunikasi resmi.',
                'The Kamio team is ready to assist with inquiries, technical issues, partnerships, or other needs through various official communication channels.'
              )}
            </p>
          </div>

          {/* Status Respons (Saran Tambahan) */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-6 shadow-sm mt-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <span>⏱️</span> {t('Estimasi Waktu Respons', 'Estimated Response Time')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/50">
                <span className="block font-bold text-slate-900 dark:text-white mb-1">📧 Email</span>
                <span className="text-slate-500 dark:text-slate-400">&lt; 24 jam kerja</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/50">
                <span className="block font-bold text-slate-900 dark:text-white mb-1">💬 WhatsApp</span>
                <span className="text-slate-500 dark:text-slate-400">&lt; 2 jam kerja</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/50">
                <span className="block font-bold text-slate-900 dark:text-white mb-1">📝 Formulir</span>
                <span className="text-slate-500 dark:text-slate-400">1–2 hari kerja</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/50">
                <span className="block font-bold text-slate-900 dark:text-white mb-1">👨‍💻 Developer</span>
                <span className="text-slate-500 dark:text-slate-400">1–3 hari kerja</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pilih Jenis Bantuan (Grid 2x3) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            {t('Pilih Jenis Bantuan', 'Select Help Category')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition cursor-pointer group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-[#2563EB] transition">
                  {t(item.titleId, item.titleEn)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(item.descId, item.descEn)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hubungi Kami (4 Kartu Besar) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Hubungi Kami', 'Contact Us')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="mailto:support@kamio.co.id" className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition block">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">support@kamio.co.id</p>
            </a>

            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-emerald-500 transition block">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">WhatsApp</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('Jam Operasional Aktif', 'Active Operational Hours')}</p>
            </a>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{t('Formulir Kontak', 'Contact Form')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('Balasan melalui email', 'Reply via email')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm hover:border-[#2563EB] transition">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{t('Alamat', 'Address')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Indonesia</p>
            </div>

          </div>
        </section>

        {/* Jam Operasional */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Jam Operasional', 'Operational Hours')}
          </h2>
          <div className="max-w-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-[#1E293B]">
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{t('Senin - Jumat', 'Monday - Friday')}</span>
              <span className="text-sm font-medium text-[#2563EB] dark:text-[#60A5FA]">08.00 - 17.00 WIB</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-[#1E293B]">
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{t('Sabtu', 'Saturday')}</span>
              <span className="text-sm font-medium text-[#2563EB] dark:text-[#60A5FA]">09.00 - 14.00 WIB</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{t('Minggu & Hari Libur', 'Sunday & Public Holidays')}</span>
              <span className="text-sm font-medium text-rose-500">{t('Tutup', 'Closed')}</span>
            </div>
          </div>
        </section>

        {/* Formulir Kontak */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Kirim Pesan kepada Kami', 'Send Us a Message')}
          </h2>
          <div className="max-w-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-8 shadow-sm">
            {formSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center">
                {t('Pesan Anda berhasil dikirim! Kami akan segera merespons via email.', 'Your message has been sent successfully! We will respond via email shortly.')}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap Anda..."
                    className="w-full bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alamat@email.com..."
                    className="w-full bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
                  <select className="w-full bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-slate-900 dark:text-white">
                    <option>Bantuan Teknis</option>
                    <option>Pembayaran</option>
                    <option>Kerja Sama</option>
                    <option>Developer</option>
                    <option>Media</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subjek</label>
                  <input
                    type="text"
                    required
                    placeholder="Topik pesan..."
                    className="w-full bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan detail pesan atau kendala Anda di sini..."
                  className="w-full bg-slate-50 dark:bg-[#050816] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] text-slate-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm transition shadow-lg shadow-blue-600/25"
              >
                {t('Kirim Pesan', 'Send Message')}
              </button>
            </form>
          </div>
        </section>

        {/* Kontak Berdasarkan Produk */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Kontak Berdasarkan Produk', 'Contact by Product')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productContacts.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{item.name}</h3>
                <span className="text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">{item.email}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Lokasi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-[#1E293B]">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('Lokasi Kantor', 'Office Location')}
          </h2>
          <div className="max-w-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm text-center">
            <div className="text-4xl mb-3">🏢</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">PT Kamio Sentra Multiteknologi</h3>
            <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
              {t('Operasional berbasis di Indonesia. Alamat kantor fisik akan diperbarui setelah tersedia.', 'Operationally based in Indonesia. Physical office address will be updated once available.')}
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase">
              Indonesia
            </span>
          </div>
        </section>

        {/* FAQ Singkat Accordion */}
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

        {/* CTA Background Biru */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#2563EB] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl shadow-blue-600/25">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {t('Masih membutuhkan bantuan?', 'Still need help?')}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('Kunjungi Pusat Bantuan atau hubungi tim kami.', 'Visit the Help Center or contact our team.')}
            </p>
            <a
              href="/dukungan"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-[#2563EB] hover:bg-blue-50 font-bold text-sm transition shadow-md"
            >
              {t('Pusat Bantuan', 'Help Center')}
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
              <li><a href="/kontak" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Kontak Support', 'Contact Support')}</a></li>
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