'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar 
} from 'recharts';

// Komponen Pembatas Aman agar Recharts hanya dirender di sisi client browser
function SafeChartWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-64 bg-slate-950/80 rounded-2xl animate-pulse flex items-center justify-center text-xs text-slate-500 font-mono">Loading Chart...</div>;
  }

  return <>{children}</>;
}

export default function ControlCenterPage() {
  const [trafficTab, setTrafficTab] = useState('24H');
  const [revenueTab, setRevenueTab] = useState('Month');
  
  // State utama yang siap dihubungkan dengan API database backend
  const [systemHealth, setSystemHealth] = useState({
    cpu: 0,
    ram: 0,
    disk: 0,
    bandwidth: 0
  });

  const [onlineUsers, setOnlineUsers] = useState(0);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [quickStatsData, setQuickStatsData] = useState<any[]>([]);

  // Fungsi Fetch data asli dari backend API (/api/stats)
  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/stats');
      const result = await response.json();
      
      if (result.success) {
        setSystemHealth(result.data.systemHealth);
        setOnlineUsers(result.data.onlineUsers);
        setRecentActivities(result.data.recentActivities);
        if (result.data.quickStats) {
          setQuickStatsData(result.data.quickStats);
        }
      }
    } catch (error) {
      console.error('Gagal mengambil data dari database API:', error);
    }
  };

  // Polling data otomatis dari backend setiap 5 detik
  useEffect(() => {
    fetchDashboardData(); // Panggil saat pertama kali load

    const interval = setInterval(() => {
      fetchDashboardData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Data Grafik Otomatis berdasarkan Tab
  const trafficDataMap: Record<string, any[]> = {
    '24H': [
      { time: '00:00', visitor: 400, session: 240, pageView: 600 },
      { time: '04:00', visitor: 200, session: 130, pageView: 300 },
      { time: '08:00', visitor: 1200, session: 900, pageView: 2100 },
      { time: '12:00', visitor: 2400, session: 1800, pageView: 4200 },
      { time: '16:00', visitor: 2100, session: 1500, pageView: 3800 },
      { time: '20:00', visitor: 2900, session: 2200, pageView: 5100 },
    ],
    '7D': [
      { time: 'Sen', visitor: 8400, session: 6200, pageView: 14000 },
      { time: 'Sel', visitor: 9200, session: 7100, pageView: 16200 },
      { time: 'Rab', visitor: 11500, session: 8900, pageView: 20400 },
      { time: 'Kam', visitor: 10800, session: 8200, pageView: 19100 },
      { time: 'Jum', visitor: 13400, session: 10200, pageView: 24500 },
      { time: 'Sab', visitor: 15200, session: 12100, pageView: 28900 },
      { time: 'Min', visitor: 14100, session: 11000, pageView: 26000 },
    ],
    '30D': [
      { time: 'Minggu 1', visitor: 54000, session: 42000, pageView: 98000 },
      { time: 'Minggu 2', visitor: 62000, session: 49000, pageView: 115000 },
      { time: 'Minggu 3', visitor: 71000, session: 55000, pageView: 132000 },
      { time: 'Minggu 4', visitor: 68000, session: 52000, pageView: 124000 },
    ],
    '90D': [
      { time: 'Bulan 1', visitor: 210000, session: 160000, pageView: 380000 },
      { time: 'Bulan 2', visitor: 245000, session: 190000, pageView: 440000 },
      { time: 'Bulan 3', visitor: 280000, session: 215000, pageView: 510000 },
    ],
    '1Y': [
      { time: 'Q1', visitor: 650000, session: 500000, pageView: 1200000 },
      { time: 'Q2', visitor: 780000, session: 610000, pageView: 1450000 },
      { time: 'Q3', visitor: 920000, session: 720000, pageView: 1700000 },
      { time: 'Q4', visitor: 1100000, session: 850000, pageView: 2100000 },
    ]
  };

  const revenueDataMap: Record<string, any[]> = {
    'Today': [
      { period: '08:00', revenue: 1200000 },
      { period: '11:00', revenue: 3400000 },
      { period: '14:00', revenue: 2800000 },
      { period: '17:00', revenue: 4100000 },
      { period: '20:00', revenue: 1950000 },
    ],
    'Week': [
      { period: 'Senin', revenue: 45000000 },
      { period: 'Selasa', revenue: 52000000 },
      { period: 'Rabu', revenue: 61000000 },
      { period: 'Kamis', revenue: 58000000 },
      { period: 'Jumat', revenue: 74000000 },
      { period: 'Sabtu', revenue: 89000000 },
      { period: 'Minggu', revenue: 81000000 },
    ],
    'Month': [
      { period: 'Minggu 1', revenue: 310000000 },
      { period: 'Minggu 2', revenue: 380000000 },
      { period: 'Minggu 3', revenue: 420000000 },
      { period: 'Minggu 4', revenue: 395000000 },
    ],
    'Year': [
      { period: 'Q1', revenue: 1200000000 },
      { period: 'Q2', revenue: 1450000000 },
      { period: 'Q3', revenue: 1700000000 },
      { period: 'Q4', revenue: 2100000000 },
    ]
  };

  const quickStats = quickStatsData.length > 0 ? quickStatsData : [
    { icon: '👥', label: 'Visitors Today', value: '12.541' },
    { icon: '💰', label: 'Revenue Today', value: 'Rp12.450.000' },
    { icon: '🛒', label: 'Orders', value: '52' },
    { icon: '📱', label: 'Downloads', value: '2.340' },
    { icon: '👤', label: 'Online Users', value: onlineUsers.toLocaleString() },
    { icon: '🖥', label: 'System Status', value: 'Operational', highlight: true },
  ];

  const productAnalytics = [
    { icon: '🎮', name: 'Games', metrics: ['Download: 1.2k', 'Revenue: Rp5.4M'] },
    { icon: '📚', name: 'Books', metrics: ['Sales: 340', 'Reads: 4.1k'] },
    { icon: '📱', name: 'Apps', metrics: ['Install: 890', 'Premium: 120'] },
    { icon: '🛒', name: 'Store', metrics: ['Orders: 52', 'Revenue: Rp7.0M'] },
  ];

  const infrastructure = [
    { name: 'Website', status: 'Operational', color: 'bg-emerald-400' },
    { name: 'API', status: 'Operational', color: 'bg-emerald-400' },
    { name: 'Database', status: 'Operational', color: 'bg-emerald-400' },
    { name: 'Storage', status: 'Operational', color: 'bg-emerald-400' },
    { name: 'CDN', status: 'Operational', color: 'bg-emerald-400' },
    { name: 'Email', status: 'Operational', color: 'bg-emerald-400' },
  ];

  const securityItems = [
    { label: 'Blocked IP', count: '142' },
    { label: 'Login Failed', count: '23' },
    { label: 'Threat', count: '0' },
    { label: 'Firewall', count: 'Active' },
    { label: 'Bot', count: 'Mitigated' },
  ];

  const notifications = [
    { title: 'Server Restart', time: '20 mins ago', type: 'info' },
    { title: 'SSL Expire', time: 'In 45 days', type: 'warning' },
    { title: 'Domain Expire', time: 'In 180 days', type: 'info' },
    { title: 'Update Available', time: 'v1.1.0 Ready', type: 'success' },
    { title: 'Payment Error', time: '1 transaction failed', type: 'danger' },
  ];

  const quickActions = [
    { label: 'Tambah Produk', href: '/control/products/add' },
    { label: 'Tulis Blog', href: '/control/blog/add' },
    { label: 'Tambah Game', href: '/control/games/add' },
    { label: 'Tambah Buku', href: '/control/books/add' },
    { label: 'Tambah App', href: '/control/apps/add' },
    { label: 'Broadcast Email', href: '/control/broadcast' },
  ];

  const auditLog = [
    { admin: 'Fadel Irhami', action: 'Admin Login', time: '22:35 WIB' },
    { admin: 'System', action: 'Settings Updated', time: '21:00 WIB' },
    { admin: 'SuperAdmin', action: 'Role Changed', time: '19:15 WIB' },
    { admin: 'Fadel Irhami', action: 'Payment Updated', time: '15:40 WIB' },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* Top Header Navigation */}
      <header className="bg-[#090D16] border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold text-white tracking-wider">KAMIO</span>
            <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono font-bold rounded-md">
              Control Center (API Ready)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 hidden sm:inline">Admin: <strong className="text-white">Fadel Irhami</strong></span>
            <Link href="/" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition">
              Keluar ke Situs
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        {/* Hero Section */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Kamio Control Center
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
            Kelola seluruh ekosistem Kamio dari satu dashboard terpadu dengan pembaruan data secara real-time via Database API.
          </p>
        </div>

        {/* Welcome Card & System Health Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest">Administrator Access</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Selamat Datang,</h2>
                <p className="text-lg font-bold text-blue-400">Fadel Irhami</p>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-1">
              <p className="text-xs text-slate-400 font-medium">Last Login</p>
              <p className="text-xs font-mono font-bold text-slate-200">23 Juli 2026 • 22:35 WIB</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">System Health (Database Connected)</h3>
              <span className="flex items-center gap-2 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live API
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'CPU', value: `${systemHealth.cpu}%` },
                { label: 'RAM', value: `${systemHealth.ram}%` },
                { label: 'Disk', value: `${systemHealth.disk}%` },
                { label: 'Bandwidth', value: `${systemHealth.bandwidth}%` },
              ].map((sh, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 space-y-1 text-center transition-all duration-500">
                  <span className="text-xs text-slate-400">{sh.label}</span>
                  <div className="text-xl font-mono font-extrabold text-white">{sh.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Statistics */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">⭐</span>
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-300">Quick Statistics</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickStats.map((stat: any, idx: number) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex items-center justify-between shadow-sm">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
                  <div className={`text-xl sm:text-2xl font-extrabold font-mono ${stat.highlight ? 'text-emerald-400' : 'text-white'}`}>
                    {stat.value}
                  </div>
                </div>
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Realtime Activity Stream */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Realtime Activity Stream</h3>
            <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              API Polling Active
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { label: 'Online User', val: onlineUsers.toLocaleString() },
              { label: 'Traffic', val: 'Optimal' },
              { label: 'Download', val: 'Active' },
              { label: 'Orders', val: 'Realtime' },
              { label: 'API Calls', val: '2.4k/s' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-center space-y-1">
                <span className="text-[11px] text-slate-400 font-medium">{item.label}</span>
                <div className="text-sm sm:text-base font-mono font-bold text-white">{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Overview & Revenue Analytics (Protected by SafeChartWrapper) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Traffic Overview Chart */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Traffic Overview</h3>
              <div className="flex gap-1">
                {['24H', '7D', '30D', '90D', '1Y'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTrafficTab(tab)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition ${
                      trafficTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 h-64 shadow-inner">
              <SafeChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficDataMap[trafficTab]}>
                    <defs>
                      <linearGradient id="colorVisitor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#090D16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="visitor" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitor)" />
                  </AreaChart>
                </ResponsiveContainer>
              </SafeChartWrapper>
            </div>
          </div>

          {/* Revenue Analytics Chart */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Revenue Analytics</h3>
              <div className="flex gap-1">
                {['Today', 'Week', 'Month', 'Year'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRevenueTab(tab)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition ${
                      revenueTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 h-64 shadow-inner">
              <SafeChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueDataMap[revenueTab]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="period" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#090D16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                    <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </SafeChartWrapper>
            </div>
          </div>

        </div>

        {/* Product Analytics & User Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Product Analytics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productAnalytics.map((prod, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{prod.icon}</span>
                    <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                    <span>{prod.metrics[0]}</span>
                    <span>{prod.metrics[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">User Analytics</h3>
            <div className="space-y-3">
              {[
                { label: 'New Users', val: '+1.240' },
                { label: 'Premium Users', val: '430' },
                { label: 'Returning Users', val: '8.120' },
                { label: 'Deleted Users', val: '12' },
              ].map((u, i) => (
                <div key={i} className="flex items-center justify-between text-xs bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-slate-400">{u.label}</span>
                  <span className="font-mono font-bold text-white">{u.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure & Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Infrastructure Status</h3>
            <div className="space-y-3">
              {infrastructure.map((infra, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800/80 text-xs">
                  <span className="font-medium text-slate-200">{infra.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-400">{infra.status}</span>
                    <span className={`w-2.5 h-2.5 rounded-full ${infra.color}`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Security & Protection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {securityItems.map((sec, idx) => (
                <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
                  <span className="text-xs text-slate-400">{sec.label}</span>
                  <div className="text-sm font-mono font-bold text-white">{sec.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Notifications</h3>
            <div className="space-y-3">
              {notifications.map((notif, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800/80 text-xs">
                  <span className="font-medium text-slate-200">{notif.title}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{notif.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Recent Activity Feed</h3>
            <div className="space-y-4">
              {recentActivities.length > 0 ? (
                recentActivities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                    <span className="font-mono text-blue-400 font-bold shrink-0">{act.time}</span>
                    <div className="space-y-0.5">
                      <p className="font-bold text-white">{act.title}</p>
                      <p className="text-slate-400">{act.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 font-mono text-center py-4">Memuat aktivitas dari database...</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions & Audit Log */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickActions.map((qa, idx) => (
                <Link
                  key={idx}
                  href={qa.href}
                  className="p-4 bg-slate-950 hover:bg-blue-600/10 border border-slate-800 hover:border-blue-500/30 rounded-2xl text-center text-xs font-semibold text-slate-200 hover:text-white transition flex items-center justify-center shadow-inner"
                >
                  {qa.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Audit Log</h3>
            <div className="space-y-3">
              {auditLog.map((log, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800/80 text-xs">
                  <div className="space-y-0.5">
                    <p className="font-medium text-white">{log.action}</p>
                    <p className="text-[10px] text-slate-400">Admin: {log.admin}</p>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#090D16] border-t border-slate-800 text-slate-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-bold text-white">Kamio Control Center</p>
            <p className="text-[11px] text-slate-500">© 2026 PT Kamio Sentra Multiteknologi.</p>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Version: <strong>1.0.0 (API Ready)</strong></span>
            <span>Last Update: <strong>23 Juli 2026</strong></span>
          </div>
        </div>
      </footer>

    </div>
  );
}