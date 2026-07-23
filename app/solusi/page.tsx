import Navbar from '@/components/Navbar';

export default function SolusiPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Solusi Kamio</h1>
        <p className="text-[#CBD5E1] mb-8">Temukan berbagai pendekatan dan layanan yang disesuaikan untuk menyelesaikan tantangan industri Anda.</p>
        
        {/* Grid Solusi dengan Kartu Desain Sistem Baru */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0F172A] border border-[#1E293B] hover:border-[#1E293B]/80 hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2 text-[#F8FAFC]">Solusi Enterprise</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Skabilitas tinggi, keamanan tingkat lanjut, dan dukungan khusus untuk perusahaan skala besar.</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-[#22C55E] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Status: Operational
            </div>
          </div>

          <div className="bg-[#0F172A] border border-[#1E293B] hover:border-[#1E293B]/80 hover:bg-[#1E293B] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-[#F8FAFC]">Solusi Startup</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">Infrastruktur gesit dan efisien biaya untuk mempercepat peluncuran produk ke pasar.</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-[#22C55E] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Status: Operational
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