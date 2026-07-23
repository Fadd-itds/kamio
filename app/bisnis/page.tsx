'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function SolusiBisnis() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('Apakah Kamio menerima proyek khusus?', 'Does Kamio accept custom projects?'),
      a: t('Ya, kami menyediakan layanan pengembangan software dan solusi digital yang disesuaikan secara khusus dengan kebutuhan operasional serta spesifikasi perusahaan Anda.', 'Yes, we provide software development services and digital solutions tailored specifically to your company’s operational needs and specifications.')
    },
    {
      q: t('Bagaimana proses kerja sama?', 'How does the collaboration process work?'),
      a: t('Proses kerja sama dimulai dari sesi konsultasi awal, analisis mendalam terhadap kebutuhan bisnis, perancangan arsitektur solusi, implementasi, hingga dukungan pemeliharaan berkelanjutan.', 'The collaboration process starts from an initial consultation session, deep analysis of business requirements, solution architecture design, implementation, to continuous maintenance support.')
    },
    {
      q: t('Apakah tersedia layanan konsultasi?', 'Are consultation services available?'),
      a: t('Tentu, tim ahli kami siap mendampingi Anda dalam sesi konsultasi untuk merumuskan strategi transformasi digital yang paling efektif bagi bisnis Anda.', 'Certainly, our team of experts is ready to assist you in consultation sessions to formulate the most effective digital transformation strategy for your business.')
    },
    {
      q: t('Bagaimana cara menghubungi tim bisnis?', 'How to contact the business team?'),
      a: t('Anda dapat menjangkau tim bisnis kami melalui tombol "Konsultasi Sekarang" atau mengirimkan email langsung ke alamat kemitraan resmi Kamio.', 'You can reach our business team through the "Consult Now" button or send an email directly to Kamio’s official partnership address.')
    },
    {
      q: t('Berapa lama proses pengerjaan?', 'How long does the development process take?'),
      qAlt: t('Berapa lama proses pengerjaan?', 'How long does the project execution take?'),
      a: t('Durasi pengerjaan bervariasi tergantung pada skala kerumitan, ruang lingkup proyek, serta kebutuhan integrasi sistem yang disepakati bersama.', 'The execution duration varies depending on the scale of complexity, project scope, and agreed-upon system integration needs.')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] dark:text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            {t('Solusi untuk Bisnis', 'Solutions for Business')}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t('Akselerasi Pertumbuhan Melalui', 'Accelerate Growth Through')} <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">{t('Solusi Digital Profesional', 'Professional Digital Solutions')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed mb-10">
            {t(
              'Kamio membantu perusahaan, organisasi, dan pelaku usaha membangun, mengembangkan, dan mengelola solusi digital melalui layanan, produk, dan kemitraan yang dirancang untuk mendukung pertumbuhan bisnis.',
              'Kamio helps companies, organizations, and business practitioners build, develop, and manage digital solutions through services, products, and partnerships designed to support business growth.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/kontak"
              className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-[#F8FAFC] font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center"
            >
              {t('Konsultasi Sekarang', 'Consult Now')}
            </a>
            <a
              href="/kontak"
              className="px-8 py-3.5 rounded-xl bg-transparent border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-[#F8FAFC] font-medium hover:bg-slate-100 dark:hover:bg-[#1E293B]/50 transition text-center"
            >
              {t('Hubungi Tim Kami', 'Contact Our Team')}
            </a>
          </div>
        </section>

        {/* 2. Mengapa Memilih Kamio (Grid 2x3) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Mengapa Memilih Kamio', 'Why Choose Kamio')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Standar profesionalitas dan keunggulan untuk menunjang skala enterprise.', 'Standards of professionalism and excellence to support enterprise scale.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Inovasi', 'Innovation')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Membangun solusi digital yang modern.', 'Building modern digital solutions.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Modern Stack</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Keamanan', 'Security')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Mengutamakan perlindungan data dan sistem.', 'Prioritizing data and system protection.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Enterprise Grade</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Skalabilitas', 'Scalability')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Layanan yang dapat berkembang bersama bisnis Anda.', 'Services that scale along with your business.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Growth Oriented</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Kemitraan', 'Partnership')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Pendekatan kolaboratif untuk hasil terbaik.', 'Collaborative approach for the best outcomes.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Strategic Alignment</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Efisiensi', 'Efficiency')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Membantu meningkatkan produktivitas operasional.', 'Helping improve operational productivity.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Optimized Workflow</div>
              </div>

              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="text-3xl mb-4">🛠</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-[#F8FAFC]">{t('Dukungan', 'Support')}</h3>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                    {t('Tim support siap membantu kebutuhan bisnis Anda.', 'Support team ready to assist your business needs.')}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-[#1E293B] pt-4 text-xs text-slate-400">Dedicated SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solusi Kami (Empat kartu besar) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Solusi Kami', 'Our Solutions')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Portofolio layanan korporat untuk memperkuat kapabilitas digital Anda.', 'Corporate service portfolio to strengthen your digital capabilities.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">🎮</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Publishing & Distribusi Digital', 'Digital Publishing & Distribution')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Bantu pengembang mempublikasikan game dan aplikasi ke berbagai platform digital.', 'Help developers publish games and apps to various digital platforms.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-2xl mb-6">💳</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Solusi Pembayaran Digital', 'Digital Payment Solutions')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Integrasi layanan pembayaran dan pengelolaan transaksi digital melalui mitra resmi Kamio.', 'Integration of payment services and digital transaction management through Kamio official partners.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">📈</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Pengembangan Software', 'Software Development')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Pengembangan aplikasi, website, sistem internal, dan solusi digital sesuai kebutuhan bisnis.', 'Development of applications, websites, internal systems, and digital solutions tailored to business requirements.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl mb-6">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#F8FAFC]">{t('Kemitraan Bisnis', 'Business Partnership')}</h3>
                <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  {t('Kolaborasi strategis untuk distribusi produk, integrasi layanan, maupun pengembangan teknologi bersama.', 'Strategic collaboration for product distribution, service integration, and joint technology development.')}
                </p>
              </div>
              <a href="/kontak" className="text-[#2563EB] dark:text-[#60A5FA] font-medium text-sm inline-flex items-center gap-1 hover:underline">
                {t('Pelajari Lebih Lanjut', 'Learn More')} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 4. Industri yang Kami Dukung (Grid) */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Industri yang Kami Dukung', 'Industries We Support')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Fleksibilitas layanan yang disesuaikan dengan berbagai sektor usaha.', 'Service flexibility tailored to various business sectors.')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                Startup
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                UMKM
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Perusahaan', 'Enterprise')}
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Instansi', 'Institution')}
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                {t('Komunitas', 'Community')}
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-xl font-bold text-slate-900 dark:text-[#F8FAFC] shadow-sm">
                Developer
              </div>
            </div>
          </div>
        </section>

        {/* 5. Alur Kerja (Timeline) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Alur Kerja', 'Workflow')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Prosedur terstruktur untuk menjamin keberhasilan proyek Anda.', 'Structured procedure to ensure your project success.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto relative">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">1</div>
              <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Konsultasi', 'Consultation')}</h4>
              <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Diskusi awal mengenai visi dan tujuan bisnis.', 'Initial discussion on business vision and goals.')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">2</div>
              <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Analisis Kebutuhan', 'Requirement Analysis')}</h4>
              <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Bedah spesifikasi teknis dan ruang lingkup.', 'Deep dive into technical specs and scope.')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">3</div>
              <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Perancangan Solusi', 'Solution Design')}</h4>
              <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Penyusunan arsitektur dan rancangan cetak biru.', 'Drafting architecture and blueprints.')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">4</div>
              <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Implementasi', 'Implementation')}</h4>
              <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Eksekusi pengembangan dan integrasi sistem.', 'Development execution and system integration.')}</p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl text-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center mx-auto mb-4">5</div>
              <h4 className="font-bold text-slate-900 dark:text-[#F8FAFC] mb-2">{t('Dukungan Berkelanjutan', 'Ongoing Support')}</h4>
              <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{t('Pemeliharaan berkala dan peningkatan performa.', 'Regular maintenance and performance tuning.')}</p>
            </div>
          </div>
        </section>

        {/* 6. Keunggulan Kamio (Grid) */}
        <section className="border-y border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Keunggulan Kamio', 'Kamio Advantages')}</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Komitmen penuh kami sebagai mitra strategis perusahaan Anda.', 'Our full commitment as your company’s strategic partner.')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Pendekatan fleksibel', 'Flexible approach')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Teknologi modern', 'Modern technology')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Tim berpengalaman', 'Experienced team')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Dukungan berkelanjutan', 'Ongoing support')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Solusi yang dapat disesuaikan', 'Customizable solutions')}</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">✓</span>
                <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">{t('Siap berkembang bersama bisnis Anda', 'Ready to scale with your business')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Studi Kasus (Coming Soon Banner) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Studi Kasus', 'Case Studies')}</h2>
            <p className="text-slate-600 dark:text-[#CBD5E1]">
              {t('Melihat rekam jejak keberhasilan kolaborasi bersama klien kami.', 'Reviewing the track record of successful collaborations with our clients.')}
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B] rounded-3xl p-12 text-center shadow-sm">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED] dark:text-[#A78BFA] text-xs font-semibold tracking-wide uppercase mb-4">
              Case Study
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-900 dark:text-[#F8FAFC]">Coming Soon</h3>
            <p className="text-slate-600 dark:text-[#CBD5E1] max-w-md mx-auto text-sm">
              {t('Nanti bisa diisi proyek-proyek yang sudah selesai.', 'Will be updated soon with our completed corporate projects.')}
            </p>
          </div>
        </section>

        {/* 8. FAQ (Accordion) */}
        <section className="border-t border-slate-200 dark:border-[#1E293B] bg-slate-100/50 dark:bg-[#020617]/50 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">FAQ</h2>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {t('Informasi seputar layanan korporat dan kemitraan bisnis Kamio.', 'Information regarding Kamio corporate services and business partnerships.')}
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

        {/* 9. CTA Section (Background Biru) */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('Siap Mengembangkan Bisnis Anda?', 'Ready to Grow Your Business?')}</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              {t('Diskusikan kebutuhan bisnis Anda bersama tim Kamio.', 'Discuss your business needs with the Kamio team.')}
            </p>
            <a
              href="/kontak"
              className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition shadow-xl"
            >
              {t('Hubungi Tim Bisnis', 'Contact Business Team')}
            </a>
          </div>
        </section>
      </main>

      {/* 10. Footer Standar */}
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