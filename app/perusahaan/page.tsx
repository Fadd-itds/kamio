import Navbar from '@/components/Navbar';

export default function PerusahaanPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center overflow-hidden">
          {/* Background Glow/Illustration accent */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/40 to-[#7C3AED]/40 rounded-full blur-3xl"></div>
          </div>

          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
            Tentang Perusahaan
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Membangun Teknologi untuk <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Masa Depan</span>
          </h1>
          <p className="text-[#CBD5E1] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Kamio adalah grup teknologi Indonesia yang berfokus pada pengembangan perangkat lunak, game, layanan digital, serta membangun ekosistem teknologi yang inovatif, terpercaya, dan berkelanjutan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tentang"
              className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-sm sm:text-base"
            >
              Tentang Kami
            </a>
            <a
              href="/dukungan"
              className="px-8 py-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#CBD5E1] hover:bg-[#1E293B] hover:text-white transition text-sm sm:text-base font-medium"
            >
              Hubungi Kami
            </a>
          </div>
        </section>

        {/* 2. Tentang Kamio */}
        <section id="tentang" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-8 sm:p-12 shadow-xl shadow-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F8FAFC]">Tentang Kamio</h2>
            <div className="space-y-4 text-[#CBD5E1] text-base sm:text-lg leading-relaxed text-center sm:text-left">
              <p>
                Kamio merupakan grup teknologi yang berkomitmen menghadirkan inovasi digital melalui pengembangan perangkat lunak, game, aplikasi, layanan digital, serta berbagai solusi teknologi lainnya.
              </p>
              <p>
                Dengan semangat inovasi dan kolaborasi, Kamio membangun ekosistem yang menghubungkan pengembangan produk, distribusi digital, hingga layanan bagi pengguna dan mitra bisnis.
              </p>
              <p className="font-medium text-[#F8FAFC] pt-2">
                Kami percaya bahwa teknologi bukan sekadar alat, tetapi fondasi untuk menciptakan masa depan yang lebih baik.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Visi */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold tracking-wide uppercase">
            Visi Kami
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F8FAFC]">Visi</h2>
          <p className="text-xl sm:text-2xl font-medium text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed italic bg-gradient-to-r from-[#F8FAFC] to-[#CBD5E1] bg-clip-text text-transparent">
            &ldquo;Menjadi perusahaan teknologi Indonesia yang menghadirkan inovasi digital berkualitas serta memberikan dampak positif bagi masyarakat global.&rdquo;
          </p>
        </section>

        {/* 4. Misi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Misi</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Langkah nyata yang kami ambil dalam mewujudkan visi perusahaan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition duration-300 shadow-lg">
              <div>
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Inovasi</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Mengembangkan produk dan layanan digital yang bermanfaat.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition duration-300 shadow-lg">
              <div>
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Kepercayaan</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Menjunjung tinggi integritas, keamanan, dan transparansi.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition duration-300 shadow-lg">
              <div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Pertumbuhan</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Mendorong inovasi berkelanjutan dan pengembangan talenta.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition duration-300 shadow-lg">
              <div>
                <div className="text-3xl mb-4">🌏</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Dampak</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Memberikan kontribusi positif bagi masyarakat melalui teknologi.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition duration-300 shadow-lg md:col-span-2 lg:col-span-1">
              <div>
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Ekosistem</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Membangun ekosistem digital yang saling terhubung dan berkembang bersama.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Nilai Perusahaan (Grid 2x3) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Nilai Perusahaan</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Prinsip dasar yang menjadi pegangan setiap individu di Kamio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Integritas</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami menjunjung kejujuran dan tanggung jawab dalam setiap keputusan.</p>
            </div>
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Inovasi</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami terus mencari cara baru untuk menciptakan solusi yang lebih baik.</p>
            </div>
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Kolaborasi</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami percaya hasil terbaik lahir dari kerja sama.</p>
            </div>
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Kualitas</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami berkomitmen memberikan produk dan layanan terbaik.</p>
            </div>
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Berorientasi Pengguna</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami mengembangkan teknologi dengan memahami kebutuhan pengguna.</p>
            </div>
            <div className="bg-[#0F172A]/70 border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-blue-400">Pembelajaran Berkelanjutan</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami terus berkembang melalui pembelajaran dan adaptasi.</p>
            </div>
          </div>
        </section>

        {/* 6. Ekosistem Kamio ⭐ */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase">
              Struktur Organisasi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-3">Ekosistem Kamio</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Struktur terpadu dalam Kamio Group.</p>
          </div>

          <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-x-auto">
            <div className="min-w-[650px] flex flex-col items-center">
              {/* Root */}
              <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-center shadow-lg mb-8 text-base">
                KAMIO GROUP
              </div>

              {/* Connecting line down & split */}
              <div className="w-[60%] h-6 border-x-2 border-b-2 border-[#1E293B] rounded-b-2xl mb-8"></div>

              {/* Two Entities */}
              <div className="grid grid-cols-2 gap-12 w-full">
                {/* Left Branch */}
                <div className="flex flex-col items-center">
                  <div className="w-full text-center px-4 py-3 rounded-xl bg-[#020617] border border-[#2563EB]/40 font-semibold text-[#F8FAFC] text-sm sm:text-base mb-6 shadow-md">
                    PT Kamio Sentra Multiteknologi
                  </div>
                  <div className="w-0.5 h-6 bg-[#1E293B] mb-6"></div>
                  <div className="w-full space-y-3 bg-[#020617]/50 p-4 rounded-xl border border-[#1E293B]">
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#2563EB]">├──</span> Kamio Games
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#2563EB]">├──</span> Kamio Books
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#2563EB]">├──</span> Kamio MultiDownloader
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#2563EB]">├──</span> Kamio AI
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#2563EB]">└──</span> Kamio Cloud
                    </div>
                  </div>
                </div>

                {/* Right Branch */}
                <div className="flex flex-col items-center">
                  <div className="w-full text-center px-4 py-3 rounded-xl bg-[#020617] border border-[#7C3AED]/40 font-semibold text-[#F8FAFC] text-sm sm:text-base mb-6 shadow-md">
                    PT Kamio Sentra Niaga
                  </div>
                  <div className="w-0.5 h-6 bg-[#1E293B] mb-6"></div>
                  <div className="w-full space-y-3 bg-[#020617]/50 p-4 rounded-xl border border-[#1E293B]">
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#7C3AED]">├──</span> Kamio Store
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#7C3AED]">├──</span> Premium
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#7C3AED]">├──</span> Billing
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#7C3AED]">├──</span> Lisensi
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#CBD5E1] font-medium py-1.5 px-3 rounded-lg bg-[#0F172A]">
                      <span className="text-[#7C3AED]">└──</span> Distribusi Digital
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center max-w-3xl mx-auto text-[#CBD5E1] text-sm sm:text-base leading-relaxed bg-[#0F172A]/50 border border-[#1E293B] p-6 rounded-2xl">
            Setiap perusahaan dalam Kamio Group memiliki peran yang saling melengkapi. <strong className="text-[#F8FAFC]">PT Kamio Sentra Multiteknologi</strong> berfokus pada riset, pengembangan, dan inovasi produk, sedangkan <strong className="text-[#F8FAFC]">PT Kamio Sentra Niaga</strong> mengelola distribusi, penjualan, serta layanan komersial untuk seluruh ekosistem Kamio.
          </div>
        </section>

        {/* 7. Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Timeline</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Jejak langkah perjalanan Kamio Group.</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center font-bold text-[#2563EB] shadow">
              2026
            </div>
            <div className="text-[#1E293B] font-bold text-lg">↓</div>
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center text-[#CBD5E1] shadow">
              Kamio didirikan
            </div>
            <div className="text-[#1E293B] font-bold text-lg">↓</div>
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center text-[#CBD5E1] shadow">
              Produk pertama diluncurkan
            </div>
            <div className="text-[#1E293B] font-bold text-lg">↓</div>
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center text-[#CBD5E1] shadow">
              Kamio Store hadir
            </div>
            <div className="text-[#1E293B] font-bold text-lg">↓</div>
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center text-[#CBD5E1] shadow">
              Ekosistem berkembang
            </div>
            <div className="text-[#1E293B] font-bold text-lg">↓</div>
            <div className="w-full bg-[#0F172A] border border-[#1E293B] p-4 rounded-xl text-center text-[#CBD5E1] shadow">
              Produk baru terus bertambah
            </div>
          </div>
        </section>

        {/* 8. Legalitas */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Legalitas Perusahaan</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Informasi legalitas resmi badan usaha.</p>
          </div>

          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl mb-6">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-[#1E293B]">
                  <td className="p-4 sm:p-5 font-semibold text-[#F8FAFC] bg-[#020617]/50 w-1/3">Nama Perusahaan</td>
                  <td className="p-4 sm:p-5 text-[#CBD5E1]">PT Kamio Sentra Multiteknologi</td>
                </tr>
                <tr className="border-b border-[#1E293B]">
                  <td className="p-4 sm:p-5 font-semibold text-[#F8FAFC] bg-[#020617]/50">Status</td>
                  <td className="p-4 sm:p-5 text-[#CBD5E1]">Perseroan Terbatas</td>
                </tr>
                <tr className="border-b border-[#1E293B]">
                  <td className="p-4 sm:p-5 font-semibold text-[#F8FAFC] bg-[#020617]/50">NIB</td>
                  <td className="p-4 sm:p-5 text-[#CBD5E1]">Ditampilkan jika sudah siap dipublikasikan</td>
                </tr>
                <tr className="border-b border-[#1E293B]">
                  <td className="p-4 sm:p-5 font-semibold text-[#F8FAFC] bg-[#020617]/50">Domisili</td>
                  <td className="p-4 sm:p-5 text-[#CBD5E1]">Indonesia</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#F8FAFC] bg-[#020617]/50">Bidang Usaha</td>
                  <td className="p-4 sm:p-5 text-[#CBD5E1]">Teknologi Informasi dan Layanan Digital</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#CBD5E1]/60 text-center italic">
            * Informasi legalitas yang ditampilkan merupakan informasi umum. Dokumen resmi dapat diberikan sesuai kebutuhan dan ketentuan yang berlaku.
          </p>
        </section>

        {/* 9. Mengapa Memilih Kamio */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Mengapa Memilih Kamio</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Komitmen kami dalam memberikan layanan terbaik.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition">
              <div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Teknologi Modern</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami membangun solusi dengan teknologi terkini.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition">
              <div>
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Keamanan</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Keamanan data dan privasi pengguna menjadi prioritas.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition">
              <div>
                <div className="text-3xl mb-4">🌏</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Ekosistem Terintegrasi</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Berbagai produk dan layanan dalam satu identitas Kamio.</p>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col justify-between hover:border-[#2563EB] transition">
              <div>
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Mitra Jangka Panjang</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Kami membangun hubungan yang berlandaskan kepercayaan dan kolaborasi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base">Pertanyaan yang sering diajukan mengenai Kamio.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">Apa itu Kamio?</h3>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">Kamio adalah grup teknologi yang mengembangkan produk dan layanan digital.</p>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">Apa saja produk Kamio?</h3>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">Game, aplikasi, platform digital, layanan premium, dan solusi teknologi lainnya.</p>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">Bagaimana cara bekerja sama dengan Kamio?</h3>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">Hubungi kami melalui halaman kontak untuk mendiskusikan peluang kerja sama.</p>
            </div>

            <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">Apakah Kamio membuka lowongan kerja?</h3>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">Ya. Seluruh lowongan tersedia pada halaman Karier.</p>
            </div>
          </div>
        </section>

        {/* 11. Call to Action (Background Biru) */}
        <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Mari Berkembang Bersama Kamio</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              Baik sebagai pengguna, mitra bisnis, maupun calon talenta, kami mengundang Anda untuk menjadi bagian dari perjalanan Kamio dalam membangun teknologi untuk masa depan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/dukungan"
                className="px-8 py-4 bg-white text-[#050816] font-bold rounded-xl hover:bg-blue-50 transition shadow-xl text-sm sm:text-base"
              >
                Hubungi Kami
              </a>
              <a
                href="/karier"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition shadow-xl text-sm sm:text-base"
              >
                Lihat Karier
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
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