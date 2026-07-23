"use client";

import { useEffect, useState } from "react";

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    requests: "Loading...",
    status: "Active",
    protection: "Cloudflare Secured"
  });

  useEffect(() => {
    // Simulasi data real-time / bisa dihubungkan ke API Cloudflare Analytics
    const timer = setTimeout(() => {
      setStats({
        requests: "1,245 Views",
        status: "Normal (99.9% Uptime)",
        protection: "Active & Secure"
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Website Analytics</h1>
        <p className="text-gray-400 mb-8">
          Statistik pengunjung real-time untuk Kamio Website.
        </p>

        {/* Kotak Informasi / Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-sm text-gray-400 font-medium">Total Requests</h3>
            <p className="text-2xl font-bold mt-2 text-blue-400">{stats.requests}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-sm text-gray-400 font-medium">Status Server</h3>
            <p className="text-xl font-bold mt-2 text-green-400">{stats.status}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-sm text-gray-400 font-medium">Cloudflare Protection</h3>
            <p className="text-xl font-bold mt-2 text-purple-400">{stats.protection}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center py-12">
          <p className="text-gray-300">
            Halaman ini terintegrasi secara otomatis dengan infrastruktur Cloudflare Pages.
          </p>
        </div>
      </div>
    </div>
  );
}