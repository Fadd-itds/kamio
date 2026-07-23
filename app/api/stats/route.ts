import { NextResponse } from 'next/server';

// Contoh jika menggunakan Next.js App Router API Route
export async function GET() {
  try {
    // TODO: Ganti bagian ini dengan query database asli Anda
    // Contoh: const stats = await db.systemStats.findFirst();
    // Contoh: const onlineCount = await redis.get('online_users');

    // Data tiruan yang nantinya diambil dari database
    const data = {
      systemHealth: {
        cpu: Math.floor(Math.random() * (45 - 20 + 1)) + 20,
        ram: Math.floor(Math.random() * (50 - 38 + 1)) + 38,
        disk: 68,
        bandwidth: Math.floor(Math.random() * (25 - 10 + 1)) + 10,
      },
      onlineUsers: 436 + Math.floor(Math.random() * 10),
      quickStats: [
        { label: 'Visitors Today', value: '12.541' },
        { label: 'Revenue Today', value: 'Rp12.450.000' },
        { label: 'Orders', value: '52' },
        { label: 'Downloads', value: '2.340' },
        { label: 'Online Users', value: '436' },
        { label: 'System Status', value: 'Operational', highlight: true },
      ],
      recentActivities: [
        { time: '22:35', title: 'New Order', desc: 'Order #8892 placed successfully' },
        { time: '22:31', title: 'New User', desc: 'User fadel@kamio.id registered' },
        { time: '22:28', title: 'Blog Published', desc: 'Masa Depan AI di Indonesia' },
      ]
    };

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch database stats' },
      { status: 500 }
    );
  }
}