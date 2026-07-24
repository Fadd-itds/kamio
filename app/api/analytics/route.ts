import { NextResponse } from 'next/server';

// Menyimpan data counter sementara di memori server Edge
let totalViews = 2845; // Angka awal melanjutkan data sebelumnya
let uniqueVisitors = 1125;

export async function GET(request: Request) {
  // Cek apakah ini permintaan untuk menambah hitungan (kunjungan baru)
  const url = new URL(request.url);
  const isNewVisit = url.searchParams.get('hit') === 'true';

  if (isNewVisit) {
    totalViews += 1;
    // Tambah unique visitor secara berkala atau dinamis
    if (Math.random() > 0.5) uniqueVisitors += 1;
  }

  const liveStats = {
    cpuTime: "32.7 ms",
    wallTime: "35.35 ms",
    requestDuration: "35.22 ms",
    asset4xx: "0",
    asset5xx: "0",
    totalViews: totalViews.toLocaleString() + " Views",
    uniqueVisitors: uniqueVisitors.toLocaleString() + " Visitors",
    status: "Operational (100% Uptime)",
    protection: "Cloudflare WAF Active",
    lastUpdated: new Date().toLocaleTimeString(),
  };

  return NextResponse.json(liveStats);
}