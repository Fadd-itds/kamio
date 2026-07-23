'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('pendahuluan');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Offset untuk header sticky
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'pendahuluan', labelId: 'Pendahuluan', labelEn: 'Introduction' },
    { id: 'definisi', labelId: 'Definisi', labelEn: 'Definitions' },
    { id: 'persetujuan', labelId: 'Persetujuan', labelEn: 'Acknowledgment & Agreement' },
    { id: 'akun-pengguna', labelId: 'Akun Pengguna', labelEn: 'User Accounts' },
    { id: 'penggunaan-layanan', labelId: 'Penggunaan Layanan', labelEn: 'Use of Services' },
    { id: 'pembelian-pembayaran', labelId: 'Pembelian & Pembayaran', labelEn: 'Purchases & Payments' },
    { id: 'lisensi', labelId: 'Lisensi', labelEn: 'Licenses' },
    { id: 'hki', labelId: 'Hak Kekayaan Intelektual', labelEn: 'Intellectual Property' },
    { id: 'konten-pengguna', labelId: 'Konten Pengguna', labelEn: 'User Content' },
    { id: 'larangan-penggunaan', labelId: 'Larangan Penggunaan', labelEn: 'Prohibited Uses' },
    { id: 'penghentian-layanan', labelId: 'Penghentian Layanan', labelEn: 'Termination' },
    { id: 'penafian', labelId: 'Penafian', labelEn: 'Disclaimer' },
    { id: 'batasan-tanggung-jawab', labelId: 'Batasan Tanggung Jawab', labelEn: 'Limitation of Liability' },
    { id: 'perubahan-ketentuan', labelId: 'Perubahan Ketentuan', labelEn: 'Changes to Terms' },
    { id: 'hukum-yang-berlaku', labelId: 'Hukum yang Berlaku', labelEn: 'Governing Law' },
    { id: 'hubungi-kami', labelId: 'Hubungi Kami', labelEn: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-slate-200 dark:border-[#1E293B]">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              {t('Syarat dan Ketentuan', 'Terms and Conditions')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-8">
              {t(
                'Syarat dan Ketentuan ini mengatur penggunaan website, produk, aplikasi, layanan, dan platform yang disediakan oleh PT Kamio Sentra Multiteknologi dan entitas terkait dalam ekosistem Kamio. Dengan mengakses atau menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang berlaku.',
                'These Terms and Conditions govern the use of the website, products, applications, services, and platforms provided by PT Kamio Sentra Multiteknologi and related entities within the Kamio ecosystem. By accessing or using our services, you are deemed to have read, understood, and agreed to all applicable terms.'
              )}
            </p>

            {/* Informasi Dokumen Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-[#CBD5E1]/80 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-2xl shadow-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">{t('Terakhir diperbarui', 'Last updated')}</span>
                <span className="font-bold text-slate-800 dark:text-white">23 Juli 2026</span>
              </div>
              <div className="border-l border-slate-200 dark:border-[#1E293B] pl-6">
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">{t('Versi', 'Version')}</span>
                <span className="font-bold text-slate-800 dark:text-white">1.0</span>
              </div>
              <div className="border-l border-slate-200 dark:border-[#1E293B] pl-6">
                <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">{t('Estimasi waktu baca', 'Reading time')}</span>
                <span className="font-bold text-slate-800 dark:text-white">{t('12 menit', '12 minutes')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout dengan Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Daftar Isi (Sticky Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-4">
                {t('Syarat & Ketentuan', 'Terms & Conditions')}
              </h3>
              <nav className="space-y-1.5 text-sm">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition font-medium truncate ${
                      activeSection === item.id
                        ? 'bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] font-semibold'
                        : 'text-slate-600 dark:text-[#CBD5E1] hover:bg-slate-100 dark:hover:bg-[#1E293B]/50 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    • {t(item.labelId, item.labelEn)}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Terms Content */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* 1. Pendahuluan */}
              <section id="pendahuluan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  1. {t('Pendahuluan', 'Introduction')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Syarat dan Ketentuan ini berlaku untuk seluruh layanan dalam ekosistem Kamio, termasuk website, aplikasi, game, layanan premium, toko digital, dan produk lainnya yang dikelola oleh PT Kamio Sentra Multiteknologi.',
                    'These Terms and Conditions apply to all services within the Kamio ecosystem, including websites, applications, games, premium services, digital stores, and other products managed by PT Kamio Sentra Multiteknologi.'
                  )}
                </p>
              </section>

              {/* 2. Definisi */}
              <section id="definisi" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  2. {t('Definisi', 'Definitions')}
                </h2>
                <div className="overflow-x-auto border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 dark:bg-[#0F172A] text-slate-700 dark:text-[#CBD5E1] border-b border-slate-200 dark:border-[#1E293B]">
                      <tr>
                        <th className="p-4 font-semibold">{t('Istilah', 'Term')}</th>
                        <th className="p-4 font-semibold">{t('Arti', 'Meaning')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-[#1E293B] bg-white dark:bg-[#050816]">
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Kamio</td>
                        <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">PT Kamio Sentra Multiteknologi beserta entitas dalam ekosistem Kamio</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">{t('Pengguna', 'User')}</td>
                        <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Individu atau organisasi yang menggunakan layanan', 'Individual or organization using the services')}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">{t('Layanan', 'Services')}</td>
                        <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Website, aplikasi, game, API, dan layanan digital lainnya', 'Websites, applications, games, APIs, and other digital services')}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">{t('Akun', 'Account')}</td>
                        <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Identitas pengguna yang digunakan untuk mengakses layanan tertentu', 'User identity used to access specific services')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3. Persetujuan Pengguna */}
              <section id="persetujuan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  3. {t('Persetujuan Pengguna', 'User Acknowledgment & Agreement')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Dengan menggunakan layanan Kamio, pengguna menyetujui seluruh syarat yang berlaku, baik dalam bentuk akses penelusuran umum maupun pendaftaran akun resmi.',
                    'By using Kamio services, users agree to all applicable terms, whether through general browsing access or official account registration.'
                  )}
                </p>
              </section>

              {/* 4. Akun Pengguna */}
              <section id="akun-pengguna" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  4. {t('Akun Pengguna', 'User Accounts')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl flex items-start gap-3 shadow-sm">
                    <span className="text-xl">👤</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Pengguna bertanggung jawab atas keamanan akun.', 'Users are responsible for account security.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl flex items-start gap-3 shadow-sm">
                    <span className="text-xl">🔒</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Wajib menjaga kerahasiaan kata sandi.', 'Must maintain password confidentiality.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl flex items-start gap-3 shadow-sm">
                    <span className="text-xl">📧</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Informasi akun harus akurat.', 'Account information must be accurate.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl flex items-start gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Dilarang meminjamkan akun kepada pihak lain apabila bertentangan dengan ketentuan layanan.', 'Prohibited from lending accounts to third parties if contrary to the terms of service.')}</span>
                  </div>
                </div>
              </section>

              {/* 5. Penggunaan Layanan */}
              <section id="penggunaan-layanan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  5. {t('Penggunaan Layanan', 'Use of Services')}
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    {t('Pengguna diperbolehkan menggunakan layanan sesuai fungsi yang disediakan, contohnya:', 'Users are allowed to use the services according to the provided functions, such as:')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>{t('Mengunduh aplikasi resmi', 'Downloading official applications')}</li>
                    <li>{t('Membeli produk digital', 'Purchasing digital products')}</li>
                    <li>{t('Mengakses dokumentasi', 'Accessing documentation')}</li>
                    <li>{t('Menghubungi dukungan pelanggan', 'Contacting customer support')}</li>
                  </ul>
                </div>
              </section>

              {/* 6. Pembelian & Pembayaran */}
              <section id="pembelian-pembayaran" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  6. {t('Pembelian & Pembayaran', 'Purchases & Payments')}
                </h2>
                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm space-y-3 text-slate-600 dark:text-[#CBD5E1]">
                  <ul className="list-disc list-inside space-y-2">
                    <li>{t('Harga dapat berubah sewaktu-waktu.', 'Prices are subject to change at any time.')}</li>
                    <li>{t('Pembayaran diproses melalui penyedia pembayaran resmi.', 'Payments are processed through official payment providers.')}</li>
                    <li>{t('Pembelian produk digital dapat memiliki ketentuan lisensi masing-masing.', 'Digital product purchases may have individual license terms.')}</li>
                    <li>{t('Ketentuan pengembalian dana mengacu pada Kebijakan Refund apabila tersedia.', 'Refund conditions refer to the Refund Policy if available.')}</li>
                  </ul>
                </div>
              </section>

              {/* 7. Lisensi */}
              <section id="lisensi" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  7. {t('Lisensi', 'Licenses')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Pembelian produk digital memberikan hak penggunaan sesuai lisensi, bukan pengalihan hak kepemilikan intelektual atas produk tersebut.',
                    'The purchase of digital products grants usage rights according to the license, not the transfer of intellectual property ownership of the product.'
                  )}
                </p>
              </section>

              {/* 8. Hak Kekayaan Intelektual */}
              <section id="hki" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  8. {t('Hak Kekayaan Intelektual', 'Intellectual Property Rights')}
                </h2>
                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">Logo Kamio</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">Game</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">{t('Aplikasi', 'Applications')}</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">Website</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">{t('Desain', 'Designs')}</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm">{t('Konten', 'Content')}</div>
                    <div className="p-3 bg-slate-50 dark:bg-[#050816] rounded-xl border border-slate-200 dark:border-[#1E293B] text-center font-medium text-sm col-span-2">{t('Merek Dagang', 'Trademarks')}</div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                    {t(
                      'Semua merupakan hak milik Kamio atau pihak yang memberikan lisensi kepada Kamio dan dilindungi oleh hukum yang berlaku.',
                      'All are the property of Kamio or third parties licensing to Kamio and are protected by applicable laws.'
                    )}
                  </p>
                </div>
              </section>

              {/* 9. Konten Pengguna */}
              <section id="konten-pengguna" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  9. {t('Konten Pengguna', 'User Content')}
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    {t('Jika pengguna mengirim komentar, ulasan, atau laporan bug, berlaku ketentuan berikut:', 'If users submit comments, reviews, or bug reports, the following conditions apply:')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>{t('Tidak boleh melanggar hukum.', 'Must not violate the law.')}</li>
                    <li>{t('Tidak boleh mengandung spam.', 'Must not contain spam.')}</li>
                    <li>{t('Tidak boleh melanggar hak pihak lain.', 'Must not infringe upon the rights of others.')}</li>
                    <li>{t('Pengguna bertanggung jawab penuh atas konten yang dikirimkan.', 'Users are fully responsible for their submitted content.')}</li>
                  </ul>
                </div>
              </section>

              {/* 10. Larangan Penggunaan */}
              <section id="larangan-penggunaan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  10. {t('Larangan Penggunaan', 'Prohibited Uses')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Reverse engineering tanpa izin.', 'Unauthorized reverse engineering.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Menyebarkan malware.', 'Distributing malware.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Mengganggu layanan.', 'Disrupting services.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Penyalahgunaan API.', 'API misuse.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Pelanggaran hak cipta.', 'Copyright infringement.')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🚫</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Aktivitas ilegal.', 'Illegal activities.')}</span>
                  </div>
                </div>
              </section>

              {/* 11. Penghentian Layanan */}
              <section id="penghentian-layanan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  11. {t('Penghentian Layanan', 'Termination of Services')}
                </h2>
                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm space-y-3 text-slate-600 dark:text-[#CBD5E1]">
                  <p>{t('Kamio berhak melakukan tindakan berikut sesuai ketentuan yang berlaku:', 'Kamio reserves the right to take the following actions in accordance with applicable terms:')}</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>{t('Menangguhkan akun.', 'Suspend accounts.')}</li>
                    <li>{t('Membatasi akses.', 'Restrict access.')}</li>
                    <li>{t('Menghentikan layanan.', 'Terminate services.')}</li>
                    <li>{t('Menghapus konten yang melanggar.', 'Remove violating content.')}</li>
                  </ul>
                </div>
              </section>

              {/* 12. Penafian */}
              <section id="penafian" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  12. {t('Penafian (Disclaimer)', 'Disclaimer')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Layanan disediakan sebagaimana adanya ("as is"), dan Kamio berupaya menjaga keandalan layanan namun tidak dapat menjamin bebas dari gangguan atau kesalahan setiap saat.',
                    'Services are provided "as is", and Kamio strives to maintain service reliability but cannot guarantee they will be free from interruptions or errors at all times.'
                  )}
                </p>
              </section>

              {/* 13. Batasan Tanggung Jawab */}
              <section id="batasan-tanggung-jawab" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  13. {t('Batasan Tanggung Jawab', 'Limitation of Liability')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Sejauh diizinkan oleh hukum yang berlaku, Kamio tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan.',
                    'To the maximum extent permitted by applicable law, Kamio shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the services.'
                  )}
                </p>
              </section>

              {/* 14. Perubahan Ketentuan */}
              <section id="perubahan-ketentuan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  14. {t('Perubahan Ketentuan', 'Changes to Terms')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-6">
                  {t(
                    'Kamio dapat memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Penggunaan berkelanjutan atas layanan menandakan persetujuan Anda terhadap perubahan tersebut.',
                    'Kamio may update these Terms and Conditions at any time. Continued use of the services indicates your agreement to such changes.'
                  )}
                </p>

                {/* Tabel Riwayat */}
                <div className="overflow-x-auto border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 dark:bg-[#0F172A] text-slate-700 dark:text-[#CBD5E1] border-b border-slate-200 dark:border-[#1E293B]">
                      <tr>
                        <th className="p-4 font-semibold">{t('Versi', 'Version')}</th>
                        <th className="p-4 font-semibold">{t('Tanggal', 'Date')}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#050816]">
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">v1.0</td>
                        <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">23 Juli 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 15. Hukum yang Berlaku */}
              <section id="hukum-yang-berlaku" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  15. {t('Hukum yang Berlaku', 'Governing Law')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {t(
                    'Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Sengketa yang timbul akan diselesaikan sesuai mekanisme hukum yang berlaku di yurisdiksi Indonesia.',
                    'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising shall be resolved in accordance with applicable legal mechanisms in Indonesia.'
                  )}
                </p>
              </section>

              {/* 16. Hubungi Kami */}
              <section id="hubungi-kami" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  16. {t('Hubungi Kami', 'Contact Us')}
                </h2>
                
                {/* Card Kontak */}
                <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm mb-8 space-y-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">PT Kamio Sentra Multiteknologi</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="block text-xs uppercase text-slate-400 font-semibold">Email</span>
                      <a href="mailto:support@kamio.co.id" className="text-[#2563EB] dark:text-[#60A5FA] font-medium hover:underline">support@kamio.co.id</a>
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-slate-400 font-semibold">Website</span>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">kamio.co.id</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-slate-400 font-semibold">{t('Halaman Kontak', 'Contact Page')}</span>
                      <a href="/dukungan" className="text-[#2563EB] dark:text-[#60A5FA] font-medium hover:underline">/dukungan</a>
                    </div>
                  </div>
                </div>

                {/* Callout / CTA */}
                <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20 p-8 rounded-2xl text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t('Masih memiliki pertanyaan mengenai Syarat dan Ketentuan?', 'Still have questions regarding the Terms and Conditions?')}
                  </h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm mb-6">
                    {t('Hubungi tim Kamio melalui halaman kontak.', 'Contact the Kamio team through the contact page.')}
                  </p>
                  <a
                    href="/dukungan"
                    className="inline-block px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition shadow-lg shadow-blue-600/20"
                  >
                    {t('Hubungi Kami', 'Contact Us')}
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
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