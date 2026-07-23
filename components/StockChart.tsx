"use client";
import { useEffect, useRef, useState } from 'react';
import { createChart, LineSeries, CandlestickSeries, BarSeries, HistogramSeries, ColorType } from 'lightweight-charts';
import { useMarketTime } from './useMarketTime';

// Generator data realistis menggunakan Random Walk & Smoothing agar candle mengalir mulus
const generateSmoothMarketData = (rangeKey: string) => {
  const configs: Record<string, { count: number; volatility: number; trendFactor: number }> = {
    '1S':  { count: 15,  volatility: 8,   trendFactor: 0.05 },
    '1D':  { count: 25,  volatility: 10,  trendFactor: 0.08 },
    '1W':  { count: 35,  volatility: 15,  trendFactor: 0.12 },
    '1M':  { count: 45,  volatility: 22,  trendFactor: 0.15 },
    '3M':  { count: 60,  volatility: 30,  trendFactor: 0.20 },
    '1Y':  { count: 80,  volatility: 45,  trendFactor: 0.25 },
    '3Y':  { count: 100, volatility: 60,  trendFactor: 0.30 },
    '5Y':  { count: 120, volatility: 80,  trendFactor: 0.35 },
    '10Y': { count: 150, volatility: 100, trendFactor: 0.40 },
    'ALL': { count: 180, volatility: 130, trendFactor: 0.45 },
  };

  const cfg = configs[rangeKey] || configs['1Y'];
  
  const now = Math.floor(Date.now() / 1000);
  const oneDaySec = 24 * 60 * 60;
  const staticBaseTime = now - (cfg.count * oneDaySec);
  
  const rawData = [];
  let currentPrice = 1750; // Harga awal acuan (misal: IDR 1,750)
  
  // Seed statis terarah agar bentuk grafik konsisten per rentang waktu
  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < cfg.count; i++) {
    const time = staticBaseTime + (i * oneDaySec);
    
    // Pergerakan tren halus (menghindari lompatan ekstrem acak)
    const randomStep = (pseudoRandom() - 0.49) * cfg.volatility;
    const open = currentPrice;
    const close = Number((open + randomStep).toFixed(2));
    
    // Pastikan High selalu di atas dan Low selalu di bawah Open & Close
    const maxOC = Math.max(open, close);
    const minOC = Math.min(open, close);
    const highSpike = pseudoRandom() * (cfg.volatility * 0.4);
    const lowSpike = pseudoRandom() * (cfg.volatility * 0.4);
    
    const high = Number((maxOC + highSpike).toFixed(2));
    const low = Number((Math.max(100, minOC - lowSpike)).toFixed(2));
    
    currentPrice = close; // Harga close hari ini menjadi open hari berikutnya
    
    rawData.push({
      time,
      open,
      high,
      low,
      close,
      volume: Math.floor(pseudoRandom() * 35000000 + 8000000),
    });
  }

  return rawData;
};

export default function StockChart() {
  const marketInfo = useMarketTime();

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);
  const volumeSeriesRef = useRef<any>(null);
  const maSeriesRef = useRef<any>(null);
  const emaSeriesRef = useRef<any>(null);
  const historyRef = useRef<any[]>([]); 
  
  const [stockInfo] = useState<any>({ marketCap: 1710000000000, shares: 1800000000 });
  const [isClientReady, setIsClientReady] = useState<boolean>(false);
  const [timeRange, setTimeRange] = useState<string>('1Y');

  const initialDummy = generateSmoothMarketData('1Y');
  const lastInitial = initialDummy[initialDummy.length - 1];
  const firstInitial = initialDummy[0];

  const [livePrice, setLivePrice] = useState<number>(lastInitial.close);
  const [basePrice, setBasePrice] = useState<number>(firstInitial.close);
  const [periodOpen, setPeriodOpen] = useState<number>(firstInitial.open);
  
  const [priceChange, setPriceChange] = useState<number>(lastInitial.close - firstInitial.close);
  const [priceChangePercent, setPriceChangePercent] = useState<number>(Number((((lastInitial.close - firstInitial.close) / firstInitial.close) * 100).toFixed(2)));
  
  const [priceFlash] = useState<'up' | 'down' | null>(null);
  const [dayHigh, setDayHigh] = useState<number>(Math.max(...initialDummy.map(d => d.high)));
  const [dayLow, setDayLow] = useState<number>(Math.min(...initialDummy.map(d => d.low)));

  const [chartType, setChartType] = useState<'line' | 'candlestick' | 'ohlc'>('candlestick');
  const [feedStatus] = useState<'Connected' | 'Reconnecting...' | 'Disconnected'>('Connected');

  const [showMa, setShowMa] = useState<boolean>(true);
  const [showEma, setShowEma] = useState<boolean>(true);
  const [legendData, setLegendData] = useState<{
    time?: string;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    value?: number;
    volume?: number;
    ma?: number;
    ema?: number;
  }>({});

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    if (!isClientReady || !chartContainerRef.current) return;

    const containerWidth = chartContainerRef.current.clientWidth || 800;

    const chart = createChart(chartContainerRef.current, {
      width: containerWidth,
      height: 480,
      layout: {
        background: { type: ColorType.Solid, color: '#ffffff' },
        textColor: '#1f2937',
      },
      grid: {
        vertLines: { color: '#f0f3f6' },
        horzLines: { color: '#f0f3f6' },
      },
      rightPriceScale: { 
        borderColor: '#d1d5db',
        scaleMargins: { top: 0.1, bottom: 0.25 },
      },
      timeScale: { 
        borderColor: '#d1d5db', 
        timeVisible: true,
        fixLeftEdge: true,
        fixRightEdge: true,
        barSpacing: 9,
        minBarSpacing: 3,
      },
    });
    chartRef.current = chart;

    const volumeSeries = chart.addSeries(HistogramSeries, {
      color: '#93c5fd',
      priceFormat: { type: 'volume' },
      priceScaleId: 'volume',
    });
    volumeSeriesRef.current = volumeSeries;

    chart.priceScale('volume').applyOptions({
      scaleMargins: { top: 0.78, bottom: 0 },
    });

    chart.subscribeCrosshairMove((param: any) => {
      if (!param.time || !param.point) {
        if (historyRef.current.length > 0) {
          const last = historyRef.current[historyRef.current.length - 1];
          const lastMa = maSeriesRef.current ? getLatestIndicatorValue(historyRef.current, 20, 'sma') : undefined;
          const lastEma = emaSeriesRef.current ? getLatestIndicatorValue(historyRef.current, 20, 'ema') : undefined;
          
          const formattedDate = typeof last.time === 'number' 
            ? new Date(last.time * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
            : last.time;

          setLegendData({
            time: formattedDate,
            open: last.open,
            high: last.high,
            low: last.low,
            close: last.close,
            value: last.close,
            volume: last.volume,
            ma: lastMa,
            ema: lastEma,
          });
        }
        return;
      }

      const found = historyRef.current.find((item) => item.time === param.time);
      if (found) {
        const barData = param.seriesData.get(seriesRef.current);
        const maData = maSeriesRef.current ? param.seriesData.get(maSeriesRef.current) : null;
        const emaData = emaSeriesRef.current ? param.seriesData.get(emaSeriesRef.current) : null;

        const formattedDate = typeof found.time === 'number' 
          ? new Date(found.time * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
          : found.time;

        setLegendData({
          time: formattedDate,
          open: found.open,
          high: found.high,
          low: found.low,
          close: found.close,
          value: barData?.value ?? found.close,
          volume: found.volume,
          ma: maData?.value,
          ema: emaData?.value,
        });
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        seriesRef.current = null;
        volumeSeriesRef.current = null;
        maSeriesRef.current = null;
        emaSeriesRef.current = null;
      }
    };
  }, [isClientReady]);

  const getLatestIndicatorValue = (arr: any[], period: number, type: 'sma' | 'ema') => {
    if (arr.length < period) return undefined;
    if (type === 'sma') {
      const slice = arr.slice(arr.length - period, arr.length);
      const sum = slice.reduce((acc, curr) => acc + curr.close, 0);
      return Number((sum / period).toFixed(2));
    } else {
      let k = 2 / (period + 1);
      let ema = arr[0].close;
      for (let i = 1; i < arr.length; i++) {
        ema = (arr[i].close * k) + (ema * (1 - k));
      }
      return Number(ema.toFixed(2));
    }
  };

  useEffect(() => {
    if (!isClientReady || !chartRef.current) return;

    if (seriesRef.current) {
      chartRef.current.removeSeries(seriesRef.current);
      seriesRef.current = null;
    }
    if (maSeriesRef.current) {
      chartRef.current.removeSeries(maSeriesRef.current);
      maSeriesRef.current = null;
    }
    if (emaSeriesRef.current) {
      chartRef.current.removeSeries(emaSeriesRef.current);
      emaSeriesRef.current = null;
    }

    let series: any;
    if (chartType === 'line') {
      series = chartRef.current.addSeries(LineSeries, { color: '#16a34a', lineWidth: 2 });
    } else if (chartType === 'candlestick') {
      series = chartRef.current.addSeries(CandlestickSeries, {
        upColor: '#16a34a',
        downColor: '#dc2626',
        borderVisible: false,
        wickUpColor: '#16a34a',
        wickDownColor: '#dc2626',
      });
    } else {
      series = chartRef.current.addSeries(BarSeries, {
        upColor: '#16a34a',
        downColor: '#dc2626',
      });
    }
    seriesRef.current = series;

    const maSeries = chartRef.current.addSeries(LineSeries, {
      color: '#2563eb',
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
      visible: showMa,
    });
    maSeriesRef.current = maSeries;

    const emaSeries = chartRef.current.addSeries(LineSeries, {
      color: '#ea580c',
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
      visible: showEma,
    });
    emaSeriesRef.current = emaSeries;

    const rawData = generateSmoothMarketData(timeRange);
    if (rawData.length === 0) return;

    const firstRow = rawData[0];
    const lastRow = rawData[rawData.length - 1];

    const calcBase = firstRow.close;
    const calcOpen = firstRow.open;
    const calcHigh = Math.max(...rawData.map(r => r.high));
    const calcLow = Math.min(...rawData.map(r => r.low));
    const finalClose = lastRow.close;

    setBasePrice(calcBase);
    setPeriodOpen(calcOpen);
    setLivePrice(finalClose);

    const diff = finalClose - calcBase;
    setPriceChange(Math.round(diff));
    setPriceChangePercent(Number(((diff / calcBase) * 100).toFixed(2)));

    setDayHigh(calcHigh);
    setDayLow(calcLow);

    historyRef.current = rawData;

    const mainData = rawData.map(row => {
      if (chartType === 'line') return { time: row.time, value: row.close };
      return { time: row.time, open: row.open, high: row.high, low: row.low, close: row.close };
    });

    const volumeData = rawData.map(row => ({
      time: row.time,
      value: row.volume,
      color: row.close >= row.open ? '#86efac' : '#fca5a5',
    }));

    const maData = rawData.map((row, idx, arr) => {
      if (idx < 19) return null;
      const slice = arr.slice(idx - 19, idx + 1);
      const sum = slice.reduce((acc, curr) => acc + curr.close, 0);
      return { time: row.time, value: Number((sum / 20).toFixed(2)) };
    }).filter(item => item !== null);

    let k = 2 / (20 + 1);
    let prevEma = rawData[0]?.close || 0;
    const emaData = rawData.map((row, idx) => {
      if (idx === 0) {
        prevEma = row.close;
        return { time: row.time, value: row.close };
      }
      prevEma = (row.close * k) + (prevEma * (1 - k));
      return { time: row.time, value: Number(prevEma.toFixed(2)) };
    });

    if (chartRef.current && seriesRef.current && volumeSeriesRef.current && maSeriesRef.current && emaSeriesRef.current) {
      seriesRef.current.setData(mainData);
      volumeSeriesRef.current.setData(volumeData);
      maSeriesRef.current.setData(maData);
      emaSeriesRef.current.setData(emaData);
      chartRef.current.timeScale().fitContent();

      const formattedDate = typeof lastRow.time === 'number' 
        ? new Date(lastRow.time * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
        : lastRow.time;

      setLegendData({
        time: formattedDate,
        open: lastRow.open,
        high: lastRow.high,
        low: lastRow.low,
        close: lastRow.close,
        value: lastRow.close,
        volume: lastRow.volume,
        ma: maData[maData.length - 1]?.value,
        ema: emaData[emaData.length - 1]?.value,
      });
    }
  }, [isClientReady, chartType, timeRange]);

  useEffect(() => {
    if (maSeriesRef.current) {
      maSeriesRef.current.applyOptions({ visible: showMa });
    }
  }, [showMa]);

  useEffect(() => {
    if (emaSeriesRef.current) {
      emaSeriesRef.current.applyOptions({ visible: showEma });
    }
  }, [showEma]);

  const formatRupiah = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num);

  const formatMarketCap = (marketCap: number) => {
    if (!marketCap) return 'Rp0';
    const triliun = marketCap / 1e12;
    return `Rp${triliun.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} T`;
  };

  const formatShares = (shares: number) => {
    if (!shares) return '0';
    return `${(shares / 1e9).toFixed(1)} Billion`;
  };

  const isPositive = priceChange >= 0;

  if (!isClientReady) {
    return <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md max-w-5xl mx-auto h-[480px] flex items-center justify-center text-gray-400">Memuat Grafik...</div>;
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-gray-900 max-w-5xl mx-auto space-y-6">
      
      {/* HEADER SECTION */}
      <div className="p-5 bg-white rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-start justify-between gap-6">
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl font-black tracking-tight text-gray-900">BRPT.JK</h2>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${marketInfo.badgeColor}`}>
              <span className={`w-2 h-2 rounded-full ${marketInfo.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              {marketInfo.statusLabel}
            </span>
          </div>

          <div className="space-y-1 text-xs text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span>🏢</span>
              <span>PT Barito Pacific Tbk</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{marketInfo.dateText}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕘</span>
              <span>Last Trade: <strong className="text-gray-700">{marketInfo.lastTradeText}</strong></span>
            </div>
          </div>

          <div className="text-xs bg-white rounded-lg border border-gray-200 overflow-hidden shadow-2xs max-w-md">
            <div className="bg-gray-50 px-3 py-1.5 border-b border-gray-200 flex justify-between items-center font-bold text-gray-700">
              <span>Market Session (BEI)</span>
              <span className="text-[10px] text-gray-400 font-normal">WIB (GMT+7)</span>
            </div>
            
            <div className="p-3 grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600">
              <div className="flex justify-between"><span className="text-gray-500">Pre-Open :</span><span className="font-mono font-medium">08:45–08:55</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Session I :</span><span className="font-mono font-medium">09:00–12:00</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Lunch Break :</span><span className="font-mono font-medium">12:00–13:30</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Session II :</span><span className="font-mono font-medium">13:30–15:49</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Post Trading :</span><span className="font-mono font-medium">15:50–16:00</span></div>
              <div className="flex justify-between"><span className="text-red-600 font-semibold">Closed :</span><span className="font-mono font-bold text-red-600">16:00 WIB</span></div>
            </div>

            <div className="px-3 py-2 bg-gray-50/70 border-t border-gray-100 flex justify-between items-center text-[11px]">
              <div>
                <span className="text-gray-400 block font-normal">Current Session</span>
                <span className="font-bold text-gray-800">✔ {marketInfo.statusLabel}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-400 block font-normal">Next Session</span>
                <span className="font-semibold text-emerald-600">{marketInfo.nextSessionText}</span>
              </div>
            </div>

            <div className="px-3 py-1.5 bg-zinc-900 text-zinc-100 flex justify-between items-center text-[10px]">
              <span className="font-medium text-zinc-400">Server Time</span>
              <span className="font-mono font-semibold tracking-wider text-emerald-400">{marketInfo.serverTimeText}</span>
            </div>
          </div>
        </div>

        <div className="text-left md:text-right space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center md:justify-end gap-1.5">
            <span>{marketInfo.isLive ? 'Live Price' : 'Last Price'}</span>
            <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[9px] font-mono border border-emerald-200 uppercase font-bold">
              Period: {timeRange}
            </span>
          </div>

          <div className={`text-4xl font-black tracking-tight transition-colors duration-300 ${isClientReady ? 'opacity-100' : 'opacity-0'} ${
            priceFlash === 'up' ? 'text-green-600 bg-green-50 px-2 py-0.5 rounded-md inline-block animate-pulse' : 
            priceFlash === 'down' ? 'text-red-600 bg-red-50 px-2 py-0.5 rounded-md inline-block animate-pulse' : 'text-gray-900'
          }`}>
            {formatRupiah(livePrice)}
          </div>

          <div className={`text-sm font-bold flex items-center md:justify-end gap-1.5 mt-0.5 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <span>{isPositive ? `+${priceChange}` : priceChange}</span>
            <span>({isPositive ? `+${priceChangePercent.toFixed(2)}%` : `${priceChangePercent.toFixed(2)}%`})</span>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Period Open Ref : <strong className="text-gray-700">{formatRupiah(periodOpen)}</strong>
          </div>

          <div className="pt-2 space-y-2 border-t border-gray-100 mt-2">
            <div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Next Trading Session</span>
              <div className="text-xs font-bold text-gray-800 mt-0.5">{marketInfo.nextSessionText}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">Starts in</div>
              <div className="text-base font-extrabold font-mono text-gray-900 tracking-tight">
                {marketInfo?.countdownText || '00h 00m 00s'}
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] font-semibold text-gray-500">
                <span>Trading Session</span>
                <span className="font-mono text-gray-800">{marketInfo.progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${marketInfo.progressPercent}%` }}
                />
              </div>
            </div>
            
            <div className="pt-1 text-[10px] text-gray-400">
              {marketInfo.syncText}
            </div>
          </div>
        </div>

      </div>

      {/* CHART CONTROLS & RANGE SELECTION */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Type:</span>
            <div className="flex gap-3 text-xs font-medium text-gray-600">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="chartType" checked={chartType === 'line'} onChange={() => setChartType('line')} /> Line
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="chartType" checked={chartType === 'candlestick'} onChange={() => setChartType('candlestick')} /> Candlestick
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="chartType" checked={chartType === 'ohlc'} onChange={() => setChartType('ohlc')} /> OHLC
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l pl-4 border-gray-300">
            <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Indicators:</span>
            <label className="flex items-center gap-1.5 text-xs font-medium text-blue-600 cursor-pointer">
              <input type="checkbox" checked={showMa} onChange={(e) => setShowMa(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" />
              MA20
            </label>
            <label className="flex items-center gap-1.5 text-xs font-medium text-orange-600 cursor-pointer">
              <input type="checkbox" checked={showEma} onChange={(e) => setShowEma(e.target.checked)} className="rounded text-orange-600 focus:ring-orange-500" />
              EMA20
            </label>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide whitespace-nowrap">Zoom:</span>
          <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xs">
            {(['1S', '1D', '1W', '1M', '3M', '1Y', '3Y', '5Y', '10Y', 'ALL'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase transition-colors border-r border-gray-200 last:border-r-0 whitespace-nowrap ${
                  timeRange === range ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TOOLTIP LEGEND BAR */}
      <div className="bg-gray-900 text-gray-200 px-4 py-2.5 rounded-xl text-xs flex flex-wrap items-center justify-between gap-y-2 font-mono">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-gray-400">{legendData.time || '-'}</span>
          <span>O: <strong className="text-white">{legendData.open ? formatRupiah(legendData.open) : '-'}</strong></span>
          <span>H: <strong className="text-white">{legendData.high ? formatRupiah(legendData.high) : '-'}</strong></span>
          <span>L: <strong className="text-white">{legendData.low ? formatRupiah(legendData.low) : '-'}</strong></span>
          <span>C: <strong className="text-white">{legendData.close ? formatRupiah(legendData.close) : '-'}</strong></span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-blue-400">MA20: <strong className={legendData.ma ? "text-blue-400" : "text-gray-400"}>{legendData.ma ? formatRupiah(legendData.ma) : '-'}</strong></span>
          <span className="text-orange-400">EMA20: <strong>{legendData.ema ? formatRupiah(legendData.ema) : '-'}</strong></span>
          <span className="text-gray-400">Vol: <strong>{legendData.volume?.toLocaleString() ?? '-'}</strong></span>
        </div>
      </div>

      {/* CHART CONTAINER */}
      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white">
        <div ref={chartContainerRef} className="w-full" />
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
          <span className="text-gray-400 block text-xs font-semibold uppercase tracking-wider mb-1">Market Cap</span>
          <span className="text-lg font-bold text-gray-900">{formatMarketCap(stockInfo?.marketCap || (livePrice * 1800000000))}</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
          <span className="text-gray-400 block text-xs font-semibold uppercase tracking-wider mb-1">Shares Outstanding</span>
          <span className="text-lg font-bold text-gray-900">{formatShares(stockInfo?.shares || 1800000000)}</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
          <span className="text-gray-400 block text-xs font-semibold uppercase tracking-wider mb-1">Day Range</span>
          <span className="text-sm font-bold text-gray-900">{formatRupiah(dayLow)} - {formatRupiah(dayHigh)}</span>
        </div>
      </div>

      {/* FEED STATUS BAR */}
      <div className="flex items-center justify-between text-xs text-gray-400 px-1">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${feedStatus === 'Connected' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
          <span>Feed Status: <strong className="text-gray-600">{feedStatus}</strong></span>
        </div>
        <div>
          <span>Engine: <strong className="text-gray-600">TradingView Lightweight Charts</strong></span>
        </div>
      </div>

    </div>
  );
}