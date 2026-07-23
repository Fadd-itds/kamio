import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date().toISOString();
  
  // Simulasi data analitik live dari infrastruktur Cloudflare Workers
  // Anda bisa menghubungkannya ke database atau Cloudflare Analytics Engine nanti
  return NextResponse.json({
    requests: "2,840 Views",
    uniques: "1,120 Visitors",
    status: "Operational (100% Uptime)",
    protection: "Cloudflare Web Application Firewall (WAF) Active",
    latency: "14ms (Fast Edge)",
    lastUpdated: timestamp,
  });
}