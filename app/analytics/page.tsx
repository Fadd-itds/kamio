"use client";

import { useState, useEffect } from "react";

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    cpuTime: "Loading...",
    wallTime: "Loading...",
    requestDuration: "Loading...",
    asset4xx: "0",
    asset5xx: "0",
    totalViews: "...",
    uniqueVisitors: "...",
    status: "Checking...",
    protection: "Cloudflare WAF Active",
    lastUpdated: "-",
  });
  const [loading, setLoading] = useState(true);

  const fetchMetrics = async (isNewHit = false) => {
    setLoading(true);
    try {
      const endpoint = isNewHit ? '/api/analytics?hit=true' : '/api/analytics';
      const res = await fetch(endpoint);
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Failed to fetch analytics", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Kirim sinyal kunjungan baru saat halaman pertama kali dibuka
    fetchMetrics(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-800">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              Kamio Infrastructure Analytics
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" title="Live System"></span>
            </h1>
            <p className="text-gray-400 mt-1">
              Real-time telemetry and active traffic monitoring for <code className="text-blue-400">kamio-website</code>.
            </p>
          </div>
          <button
            onClick={() => fetchMetrics(false)}
            disabled={loading}
            className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "Syncing..." : "Refresh Data"}
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Total Views</h3>
            <p className="text-3xl font-bold mt-2 text-blue-400">{stats.totalViews}</p>
            <span className="text-xs text-green-400 mt-2 inline-block">↑ Live Traffic Counter</span>
          </div>

          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Unique Visitors</h3>
            <p className="text-3xl font-bold mt-2 text-indigo-400">{stats.uniqueVisitors}</p>
            <span className="text-xs text-gray-400 mt-2 inline-block">Global Edge Tracking</span>
          </div>

          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">CPU Time</h3>
            <p className="text-3xl font-bold mt-2 text-amber-400">{stats.cpuTime}</p>
            <span className="text-xs text-amber-300 mt-2 inline-block">Worker Processing</span>
          </div>

          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Wall Time</h3>
            <p className="text-3xl font-bold mt-2 text-purple-400">{stats.wallTime}</p>
            <span className="text-xs text-gray-400 mt-2 inline-block">Total Elapsed Time</span>
          </div>

          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Request Duration</h3>
            <p className="text-3xl font-bold mt-2 text-emerald-400">{stats.requestDuration}</p>
            <span className="text-xs text-green-400 mt-2 inline-block">Edge Response Speed</span>
          </div>

          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">WAF Protection</h3>
            <p className="text-lg font-bold mt-2 text-purple-400">{stats.protection}</p>
            <span className="text-xs text-purple-300 mt-2 inline-block">Cloudflare Shield</span>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-800">
          Powered by Cloudflare Pages & Next.js API Routes. Last synced: {stats.lastUpdated}
        </div>
      </div>
    </div>
  );
}