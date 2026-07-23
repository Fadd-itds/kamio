'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
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
    { id: 'data-yang-dikumpulkan', labelId: 'Data yang Kami Kumpulkan', labelEn: 'Data We Collect' },
    { id: 'cara-penggunaan', labelId: 'Cara Kami Menggunakan Data', labelEn: 'How We Use Data' },
    { id: 'cookies', labelId: 'Cookies', labelEn: 'Cookies' },
    { id: 'berbagi-informasi', labelId: 'Berbagi Informasi', labelEn: 'Information Sharing' },
    { id: 'keamanan-data', labelId: 'Keamanan', labelEn: 'Security' },
    { id: 'penyimpanan-data', labelId: 'Penyimpanan Data', labelEn: 'Data Storage' },
    { id: 'hak-pengguna', labelId: 'Hak Pengguna', labelEn: 'User Rights' },
    { id: 'tautan-pihak-ketiga', labelId: 'Tautan Pihak Ketiga', labelEn: 'Third-Party Links' },
    { id: 'privasi-anak', labelId: 'Privasi Anak', labelEn: "Children's Privacy" },
    { id: 'perubahan-kebijakan', labelId: 'Perubahan Kebijakan', labelEn: 'Policy Changes' },
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
              {t('Privacy Policy', 'Privacy Policy')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-8">
              {t(
                'Kami menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana Kamio mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan website, produk, dan layanan kami.',
                'We value your privacy. This Privacy Policy explains how Kamio collects, uses, stores, and protects your personal information when using our website, products, and services.'
              )}
            </p>

            {/* Informasi Singkat Meta */}
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
                <span className="font-bold text-slate-800 dark:text-white">{t('10 menit', '10 minutes')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout dengan Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Daftar Isi (Sticky Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-4">
                {t('Daftar Isi', 'Table of Contents')}
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

            {/* Main Policy Content */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* 1. Pendahuluan */}
              <section id="pendahuluan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  1. {t('Pendahuluan', 'Introduction')}
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    PT Kamio Sentra Multiteknologi (&quot;Kamio&quot;, &quot;kami&quot;, atau &quot;milik kami&quot;) berkomitmen untuk melindungi privasi setiap pengguna. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi yang diperoleh melalui website, aplikasi, maupun layanan resmi Kamio.
                  </p>
                  <p>
                    Dengan mengakses atau menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini.
                  </p>
                </div>
              </section>

              {/* 2. Data yang Kami Kumpulkan */}
              <section id="data-yang-dikumpulkan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  2. {t('Data yang Kami Kumpulkan', 'Data We Collect')}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Informasi Akun */}
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>👤</span> {t('Informasi Akun', 'Account Information')}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-[#CBD5E1]">
                      <li className="flex items-center gap-2">• Nama</li>
                      <li className="flex items-center gap-2">• Email</li>
                      <li className="flex items-center gap-2">• Nomor Telepon</li>
                      <li className="flex items-center gap-2">• Username</li>
                    </ul>
                  </div>

                  {/* Card 2: Informasi Teknis */}
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>💻</span> {t('Informasi Teknis', 'Technical Information')}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-[#CBD5E1]">
                      <li className="flex items-center gap-2">• IP Address</li>
                      <li className="flex items-center gap-2">• Browser</li>
                      <li className="flex items-center gap-2">• Device</li>
                      <li className="flex items-center gap-2">• Sistem Operasi</li>
                      <li className="flex items-center gap-2">• Bahasa</li>
                      <li className="flex items-center gap-2">• Zona Waktu</li>
                    </ul>
                  </div>

                  {/* Card 3: Informasi Penggunaan */}
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>📊</span> {t('Informasi Penggunaan', 'Usage Information')}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-[#CBD5E1]">
                      <li className="flex items-center gap-2">• Halaman yang dikunjungi</li>
                      <li className="flex items-center gap-2">• Durasi kunjungan</li>
                      <li className="flex items-center gap-2">• Aktivitas pengguna</li>
                      <li className="flex items-center gap-2">• Error log</li>
                    </ul>
                  </div>

                  {/* Card 4: Informasi Pembayaran */}
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span>💳</span> {t('Informasi Pembayaran', 'Payment Information')}
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-[#CBD5E1] mb-4">
                        <li className="flex items-center gap-2">• Riwayat transaksi</li>
                        <li className="flex items-center gap-2">• Status pembayaran</li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#050816] p-3 rounded-xl border border-slate-200 dark:border-[#1E293B] leading-relaxed">
                      Kamio tidak menyimpan informasi lengkap kartu kredit atau metode pembayaran sensitif. Proses pembayaran dilakukan melalui penyedia layanan pembayaran yang bekerja sama dengan kami.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Cara Kami Menggunakan Informasi */}
              <section id="cara-penggunaan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  3. {t('Cara Kami Menggunakan Informasi', 'How We Use Information')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Menyediakan layanan', 'Provide services')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Memproses transaksi', 'Process transactions')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Dukungan pelanggan', 'Customer support')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Pengembangan produk', 'Product development')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Analitik', 'Analytics')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✅</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Keamanan sistem', 'System security')}</span>
                  </div>
                </div>
              </section>

              {/* 4. Cookies */}
              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  4. {t('Cookies', 'Cookies')}
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    Kami menggunakan cookies dan teknologi pelacakan serupa untuk memantau aktivitas di layanan kami dan menyimpan informasi tertentu guna meningkatkan pengalaman pengguna.
                  </p>
                  
                  {/* Tabel Jenis Cookies */}
                  <div className="overflow-x-auto border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 dark:bg-[#0F172A] text-slate-700 dark:text-[#CBD5E1] border-b border-slate-200 dark:border-[#1E293B]">
                        <tr>
                          <th className="p-4 font-semibold">{t('Jenis', 'Type')}</th>
                          <th className="p-4 font-semibold">{t('Fungsi', 'Function')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-[#1E293B] bg-white dark:bg-[#050816]">
                        <tr>
                          <td className="p-4 font-medium text-slate-900 dark:text-white">Essential</td>
                          <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Login & keamanan', 'Login & security')}</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-slate-900 dark:text-white">Functional</td>
                          <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Preferensi pengguna', 'User preferences')}</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-slate-900 dark:text-white">Analytics</td>
                          <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Analisis penggunaan website', 'Website usage analysis')}</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-slate-900 dark:text-white">Performance</td>
                          <td className="p-4 text-slate-600 dark:text-[#CBD5E1]">{t('Optimasi performa', 'Performance optimization')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 5. Berbagi Informasi */}
              <section id="berbagi-informasi" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  5. {t('Berbagi Informasi', 'Information Sharing')}
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    Kami menjaga kerahasiaan informasi Anda dengan ketat. Namun dalam kondisi tertentu, kami dapat membagikan data kepada pihak tepercaya yang mendukung operasional kami.
                  </p>

                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl shadow-sm">
                    <p className="font-semibold text-slate-900 dark:text-white mb-4">{t('Kami dapat membagikan data kepada:', 'We may share data with:')}</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-[#CBD5E1]">
                      <li className="flex items-center gap-3">✔ {t('Penyedia pembayaran', 'Payment providers')}</li>
                      <li className="flex items-center gap-3">✔ {t('Penyedia cloud', 'Cloud providers')}</li>
                      <li className="flex items-center gap-3">✔ {t('Penyedia email', 'Email service providers')}</li>
                      <li className="flex items-center gap-3">✔ {t('Mitra analitik', 'Analytics partners')}</li>
                      <li className="flex items-center gap-3">✔ {t('Otoritas pemerintah apabila diwajibkan oleh hukum', 'Government authorities when required by law')}</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium">
                    🛡️ {t('Kamio tidak menjual data pribadi pengguna kepada pihak ketiga.', 'Kamio does not sell user personal data to third parties.')}
                  </div>
                </div>
              </section>

              {/* 6. Keamanan Data */}
              <section id="keamanan-data" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  6. {t('Keamanan Data', 'Data Security')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">🔒</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">HTTPS</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">🔑</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{t('Enkripsi', 'Encryption')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">🛡️</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Firewall</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">👤</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{t('Kontrol Akses', 'Access Control')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">📊</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Monitoring</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-5 rounded-2xl text-center shadow-sm">
                    <span className="text-2xl block mb-2">💾</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Backup</span>
                  </div>
                </div>
              </section>

              {/* 7. Penyimpanan Data */}
              <section id="penyimpanan-data" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  7. {t('Penyimpanan Data', 'Data Storage')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  Data disimpan selama diperlukan untuk menyediakan layanan, memenuhi kewajiban hukum, menyelesaikan sengketa, atau menegakkan perjanjian kami.
                </p>
              </section>

              {/* 8. Hak Pengguna */}
              <section id="hak-pengguna" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  8. {t('Hak Pengguna', 'User Rights')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">📄</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Meminta salinan data', 'Request data copy')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">✏️</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Memperbarui data', 'Update data')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">🗑️</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Menghapus akun', 'Delete account')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm">
                    <span className="text-xl">📩</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Berhenti menerima email promosi', 'Unsubscribe from promotional emails')}</span>
                  </div>
                  <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-4 rounded-xl flex items-center gap-3 shadow-sm sm:col-span-2">
                    <span className="text-xl">🔒</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t('Membatasi pemrosesan data sesuai ketentuan yang berlaku', 'Restrict data processing in accordance with applicable laws')}</span>
                  </div>
                </div>
              </section>

              {/* 9. Tautan ke Situs Pihak Ketiga */}
              <section id="tautan-pihak-ketiga" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  9. {t('Tautan ke Situs Pihak Ketiga', 'Third-Party Links')}
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  <p>
                    Layanan kami mungkin berisi tautan ke platform eksternal seperti:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Google Play</li>
                    <li>GitHub</li>
                    <li>Cloudflare</li>
                    <li>{t('Berbagai platform media sosial', 'Various social media platforms')}</li>
                  </ul>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium pt-2">
                    Kamio tidak bertanggung jawab atas kebijakan privasi situs pihak ketiga tersebut.
                  </p>
                </div>
              </section>

              {/* 10. Privasi Anak */}
              <section id="privasi-anak" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  10. {t("Privasi Anak", "Children's Privacy")}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  Layanan Kamio tidak ditujukan untuk mengumpulkan data pribadi anak tanpa persetujuan orang tua atau wali apabila diwajibkan oleh hukum.
                </p>
              </section>

              {/* 11. Perubahan Kebijakan */}
              <section id="perubahan-kebijakan" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  11. {t('Perubahan Kebijakan', 'Policy Changes')}
                </h2>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-6">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan secara resmi pada halaman ini.
                </p>

                {/* Tabel Riwayat Perubahan */}
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

              {/* 12. Hubungi Kami */}
              <section id="hubungi-kami" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  12. {t('Hubungi Kami', 'Contact Us')}
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

                {/* Callout Box */}
                <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20 p-8 rounded-2xl text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t('Masih memiliki pertanyaan mengenai privasi?', 'Still have questions regarding privacy?')}
                  </h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm mb-6">
                    {t('Hubungi tim kami melalui halaman kontak.', 'Contact our team through the contact page.')}
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
              <li><a href="/dukungan" className="hover:text-blue-400 dark:hover:text-[#60A5FA] transition">{t('Syarat & Ketentuan', 'Terms & Conditions')}</a></li>
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