'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function SolusiEnterprise() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('Apakah Kamio menerima proyek enterprise?', 'Does Kamio accept enterprise projects?'),
      a: t('Ya, Kamio memiliki divisi khusus dan keahlian mendalam untuk menangani proyek berskala besar dengan standar keamanan serta kompleksitas tinggi.', 'Yes, Kamio has a dedicated division and deep expertise to handle large-scale projects with high security standards and complexity.')
    },
    {
      q: t('Bagaimana proses konsultasi?', 'How does the consultation process work?'),
      a: t('Proses konsultasi dimulai dari pertemuan awal untuk memahami kebutuhan organisasi, pemetaan arsitektur sistem, hingga penyusunan proposal solusi enterprise yang komprehensif.', 'The consultation process starts from an initial meeting to understand organizational needs, system architecture mapping, to drafting a comprehensive enterprise solution proposal.')
    },
    {
      q: t('Apakah tersedia NDA?', 'Is an NDA available?'),
      a: t('Tentu, kami sangat menjunjung tinggi kerahasiaan data dan siap menandatangani Perjanjian Kerahasiaan (NDA) sebelum pembahasan proyek yang lebih mendalam.', 'Certainly, we deeply value data confidentiality and are ready to sign a Non-Disclosure Agreement (NDA) prior to deeper project discussions.')
    },
    {
      q: t('Apakah dapat mengembangkan sistem khusus?', 'Can you develop custom systems?'),
      a: t('Ya, seluruh solusi kami dapat dirancang dan dikembangkan secara khusus (custom) agar selaras dengan alur kerja operasional perusahaan Anda.', 'Yes, all of our solutions can be custom-designed and developed to align with your company’s operational workflows.')
    },
    {
      q: t('Bagaimana dukungan setelah implementasi?', 'How is the support after implementation?'),
      a: t('Kami menyediakan layanan dukungan berkelanjutan berupa pemeliharaan sistem, pemantauan performa, serta SLA (Service Level Agreement) yang terikat.', 'We provide ongoing support services consisting of system maintenance, performance monitoring, and bounded Service Level Agreements (SLAs).')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            {t('Solusi Enterprise', 'Enterprise Solutions')}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t('Transformasi Digital Skala Besar Bersama', 'Large-Scale Digital Transformation With')} <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Kamio</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed mb-10">
            {t(
              'Bangun transformasi digital perusahaan Anda bersama Kamio melalui solusi teknologi yang aman, fleksibel, dan dapat disesuaikan dengan kebutuhan organisasi berskala besar.',
              'Build your company’s digital transformation with Kamio through secure, flexible technology solutions tailored to large-scale organizational needs.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/kontak"
              className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-[#F8FAFC] font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center"
            >
              {t('Konsultasi Enterprise', 'Enterprise Consultation')}
            </a>
            <a
              href="/kontak"
              className="px-8 py-3.5 rounded-xl bg-transparent border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-[#F8FAFC] font-medium hover:bg-slate-100 dark:hover:bg-[#1E293B]/50 transition text-center"
            >
              {t('Hubungi Tim Enterprise', 'Contact Enterprise Team')}
            </a>
          </div>
        </section>

        {/* 2. Mengapa Enterprise Memilih Kamio (Grid 2x3) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Mengapa Enterprise Memilih Kamio', 'Why Enterprise Chooses Kamio')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Keunggulan tingkat lanjut untuk organisasi dan korporasi berskala besar.', 'Advanced advantages for large-scale organizations and corporations.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Keamanan', 'Security')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Melindungi data dan sistem dengan standar keamanan modern.', 'Protecting data and systems with modern security standards.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Enterprise Grade</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Performa', 'Performance')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Infrastruktur yang dirancang untuk performa tinggi.', 'Infrastructure designed for high performance.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">High Throughput</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Skalabilitas', 'Scalability')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Mendukung pertumbuhan bisnis tanpa mengorbankan stabilitas.', 'Supporting business growth without sacrificing stability.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Infinite Scale</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🛠️</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Kustomisasi', 'Customization')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Solusi yang dapat disesuaikan dengan kebutuhan organisasi.', 'Solutions tailored to organizational needs.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Tailored Design</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Kemitraan Jangka Panjang', 'Long-term Partnership')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Pendampingan dari tahap perencanaan hingga operasional.', 'Guidance from planning to operational stages.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Dedicated Support</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Ekosistem Terintegrasi', 'Integrated Ecosystem')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Menghubungkan berbagai layanan dalam satu platform.', 'Connecting various services into a single platform.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Unified Architecture</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solusi Enterprise (Empat kartu besar) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Solusi Enterprise', 'Enterprise Solutions')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Arsitektur teknologi korporat untuk memperkuat infrastruktur digital Anda.', 'Corporate technology architecture to strengthen your digital infrastructure.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">💻</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Enterprise Software', 'Enterprise Software')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Pengembangan aplikasi web, mobile, dan sistem internal yang disesuaikan dengan kebutuhan perusahaan.', 'Development of web applications, mobile apps, and internal systems tailored to company requirements.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">☁️</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Infrastruktur Digital', 'Digital Infrastructure')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Implementasi solusi berbasis cloud, integrasi layanan, dan pengelolaan infrastruktur modern.', 'Implementation of cloud-based solutions, service integration, and modern infrastructure management.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">🔗</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Integrasi Sistem', 'System Integration')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Menghubungkan sistem lama dengan platform baru melalui API dan integrasi yang aman.', 'Connecting legacy systems with new platforms through secure APIs and integrations.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">📊</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Konsultasi Teknologi', 'Technology Consulting')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Pendampingan dalam perencanaan, implementasi, dan pengembangan strategi transformasi digital.', 'Guidance in planning, implementation, and development of digital transformation strategies.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 4. Layanan Enterprise (Grid) */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Layanan Enterprise', 'Enterprise Services')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Portofolio layanan spesifik untuk korporasi dan institusi.', 'Specific service portfolio for corporations and institutions.')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                Custom Development
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                System Integration
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                API Integration
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                Cloud Deployment
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                Technical Consulting
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm text-sm">
                Managed Services
              </div>
            </div>
          </div>
        </section>

        {/* 5. Industri yang Kami Layani (Grid) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Industri yang Kami Layani', 'Industries We Serve')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Sektor strategis yang mempercayakan solusi teknologi mereka pada Kamio.', 'Strategic sectors entrusting their technology solutions to Kamio.')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              {t('Perusahaan Swasta', 'Private Enterprise')}
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              BUMN
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              {t('Pemerintahan', 'Government')}
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              {t('Pendidikan', 'Education')}
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              {t('Keuangan', 'Finance')}
            </div>
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
              {t('Teknologi', 'Technology')}
            </div>
          </div>
        </section>

        {/* 6. Proses Kerja (Timeline) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Proses Kerja', 'Workflow Process')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Langkah sistematis pelaksanaan proyek enterprise.', 'Systematic steps for executing enterprise projects.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Konsultasi Awal', 'Initial Consultation')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Diskusi mendalam bersama stakeholder.', 'In-depth discussion with stakeholders.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Analisis Kebutuhan', 'Requirement Analysis')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Penyusunan spesifikasi dan ruang lingkup.', 'Drafting specs and project scope.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Perancangan Solusi', 'Solution Design')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Desain arsitektur dan cetak biru sistem.', 'System architecture and blueprint design.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">4</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Implementasi', 'Implementation')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Pengembangan dan integrasi platform.', 'Platform development and integration.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">5</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Pelatihan', 'Training')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Edukasi pengguna dan tim internal.', 'User and internal team onboarding.')}</p>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">6</div>
                <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2 text-sm">{t('Dukungan Berkelanjutan', 'Ongoing Support')}</h4>
                <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Pemeliharaan dan optimalisasi berkala.', 'Regular maintenance and optimization.')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Mengapa Bermitra dengan Kamio (Card / Grid) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Mengapa Bermitra dengan Kamio', 'Why Partner with Kamio')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Komitmen profesional untuk standar operasional korporat tertinggi.', 'Professional commitment to the highest corporate operational standards.')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Pendekatan berbasis kebutuhan', 'Needs-driven approach')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Tim teknis profesional', 'Professional technical team')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Dokumentasi lengkap', 'Comprehensive documentation')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Dukungan jangka panjang', 'Long-term support')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Teknologi yang terus berkembang', 'Continuously evolving technology')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Fleksibel untuk berbagai skala organisasi', 'Flexible for various organizational scales')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Studi Kasus Enterprise (Coming Soon Banner) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Studi Kasus', 'Case Studies')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Rekam jejak implementasi solusi teknologi tingkat lanjut.', 'Track record of advanced technology solution implementations.')}
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-3xl p-12 text-center shadow-sm">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED] dark:text-[#A78BFA] text-xs font-semibold tracking-wide uppercase mb-4">
              Enterprise Case Studies
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-900 dark:text-[#F8FAFC]">Coming Soon</h3>
            <p className="text-slate-600 dark:text-[#CBD5E1] max-w-md mx-auto text-sm">
              {t('Nanti bisa diisi proyek-proyek enterprise yang telah selesai (dengan izin klien).', 'Will be updated soon with completed enterprise projects (with client authorization).')}
            </p>
          </div>
        </section>

        {/* 9. FAQ (Accordion) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">FAQ</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Pertanyaan seputar layanan dan alur kerja sama enterprise.', 'Questions regarding enterprise services and collaboration workflows.')}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-2xl overflow-hidden shadow-sm dark:shadow-none transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left font-bold text-slate-900 dark:text-[#F8FAFC] flex items-center justify-between focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                      &darr;
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed border-t border-slate-100 dark:border-[#1E293B] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CTA Section (Background Biru) */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Siap Memulai Transformasi Digital?', 'Ready to Start Digital Transformation?')}</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              {t('Diskusikan kebutuhan enterprise Anda bersama tim Kamio.', 'Discuss your enterprise needs with the Kamio team.')}
            </p>
            <a
              href="/kontak"
              className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition shadow-xl"
            >
              {t('Hubungi Tim Enterprise', 'Contact Enterprise Team')}
            </a>
          </div>
        </section>
      </main>

      {/* 11. Footer Standar */}
      <footer className="bg-slate-900 dark:bg-[#020617] border-t border-slate-800 dark:border-[#1E293B] pt-16 pb-12 text-slate-300 dark:text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-white tracking-wider mb-4">
              KAMIO<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-[#CBD5E1] max-w-sm mb-6 leading-relaxed">
              {t('Ekosistem teknologi modern yang menghadirkan solusi digital terpadu untuk masa depan yang lebih baik.', 'A modern technology ecosystem delivering integrated digital solutions for a better future.')}
            </p>
            <div className="text-xs text-slate-400 dark:text-[#CBD5E1]/70 space-y-1">
              <div>© 2026–Present PT Kamio Sentra Multiteknologi.</div>
              <div>{t('Building the Future with Technology.', 'Building the Future with Technology.')}</div>
              <div className="text-slate-500 dark:text-[#CBD5E1]/50">{t('Made in Indonesia', 'Made in Indonesia')}</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PRODUK', 'PRODUCTS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Games', 'Games')}</a></li>
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Books', 'Books')}</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition">{t('Store', 'Store')}</a></li>
              <li><a href="/produk" className="hover:text-blue-400 transition">{t('Downloader', 'Downloader')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('SOLUSI', 'SOLUTIONS')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/solusi/individu" className="hover:text-blue-400 transition">{t('Individu', 'Individual')}</a></li>
              <li><a href="/solusi/bisnis" className="hover:text-blue-400 transition">{t('Bisnis', 'Business')}</a></li>
              <li><a href="/solusi/enterprise" className="hover:text-blue-400 transition">{t('Enterprise', 'Enterprise')}</a></li>
              <li><a href="/developer" className="hover:text-blue-400 transition">{t('Developer', 'Developer')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('PERUSAHAAN', 'COMPANY')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/perusahaan" className="hover:text-blue-400 transition">{t('Tentang', 'About')}</a></li>
              <li><a href="/karier" className="hover:text-blue-400 transition">{t('Karier', 'Careers')}</a></li>
              <li><a href="/berita" className="hover:text-blue-400 transition">{t('Berita', 'News')}</a></li>
              <li><a href="/investor" className="hover:text-blue-400 transition">{t('Investor', 'Investor')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('RESOURCE', 'RESOURCES')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/blog" className="hover:text-blue-400 transition">{t('Blog', 'Blog')}</a></li>
              <li><a href="/docs" className="hover:text-blue-400 transition">{t('Docs', 'Docs')}</a></li>
              <li><a href="/status" className="hover:text-blue-400 transition">{t('Status', 'Status')}</a></li>
              <li><a href="/brand" className="hover:text-blue-400 transition">{t('Brand', 'Brand')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">{t('LEGAL & SOCIAL', 'LEGAL & SOCIAL')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="hover:text-blue-400 transition">{t('Privacy', 'Privacy')}</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition">{t('Terms', 'Terms')}</a></li>
              <li><a href="/cookies" className="hover:text-blue-400 transition">{t('Cookies', 'Cookies')}</a></li>
              <li><a href="/refund" className="hover:text-blue-400 transition">{t('Refund', 'Refund')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">X</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="font-bold text-white block mb-1">{t('Berlangganan Newsletter Kamio', 'Subscribe to Kamio Newsletter')}</span>
            <p className="text-xs text-slate-400">{t('Dapatkan pembaruan produk dan info teknologi terbaru langsung di email Anda.', 'Get product updates and the latest tech info straight to your inbox.')}</p>
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