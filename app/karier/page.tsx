import Navbar from '@/components/Navbar';

export default function KarierPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Karier di Kamio</h1>
        <p className="text-[#CBD5E1] mb-8">Bergabunglah bersama tim kami untuk menciptakan inovasi teknologi yang berdampak luas.</p>
        
        {/* List Karier dengan Kartu Desain Sistem Baru */}
        <div className="space-y-4">
          <div className="bg-[#0F172A] border border-[#1E293B] hover:border-[#1E293B]/80 hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC]">Senior Full-Stack Engineer</h3>
              <p className="text-[#CBD5E1] text-sm mt-1">Jakarta (Hybrid) • Full-time</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-xs text-[#22C55E] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span> Open
              </span>
              <button className="px-4 py-2 bg-[#2563EB] text-[#F8FAFC] text-sm font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Lamar Sekarang
              </button>
            </div>
          </div>

          <div className="bg-[#0F172A] border border-[#1E293B] hover:border-[#1E293B]/80 hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC]">Product Manager</h3>
              <p className="text-[#CBD5E1] text-sm mt-1">Jakarta (Remote) • Full-time</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-xs text-[#22C55E] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span> Open
              </span>
              <button className="px-4 py-2 bg-[#2563EB] text-[#F8FAFC] text-sm font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Lamar Sekarang
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Konsisten */}
      <footer className="bg-[#020617] border-t border-[#1E293B] py-8 text-center text-sm text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Kamio Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="/dukungan" className="hover:text-[#60A5FA] transition">Kebijakan Privasi</a>
            <a href="/dukungan" className="hover:text-[#60A5FA] transition">Ketentuan Layanan</a>
            <a href="/dukungan" className="hover:text-[#60A5FA] transition">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}