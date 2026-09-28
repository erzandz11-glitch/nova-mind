import React, { useState, useEffect } from 'react';
import { Activity, DollarSign, Layers, ArrowUpRight, ArrowDownRight, CheckCircle2, Zap } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface QuantTradingSimulatorProps {
  onAddXp?: (amount: number) => void;
}

interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  vwap: number;
}

export const QuantTradingSimulator: React.FC<QuantTradingSimulatorProps> = ({ onAddXp }) => {
  const [candles] = useState<Candle[]>([
    { time: '09:30', open: 512.4, high: 514.8, low: 511.9, close: 514.2, volume: 45000, vwap: 513.6 },
    { time: '09:45', open: 514.2, high: 515.5, low: 513.2, close: 513.8, volume: 38000, vwap: 513.9 },
    { time: '10:00', open: 513.8, high: 517.2, low: 513.5, close: 516.9, volume: 62000, vwap: 514.8 },
    { time: '10:15', open: 516.9, high: 518.4, low: 515.8, close: 517.8, volume: 51000, vwap: 515.6 },
    { time: '10:30', open: 517.8, high: 519.5, low: 516.9, close: 519.1, volume: 59000, vwap: 516.5 },
    { time: '10:45', open: 519.1, high: 521.0, low: 518.6, close: 520.4, volume: 73000, vwap: 517.4 },
    { time: '11:00', open: 520.4, high: 522.6, low: 519.8, close: 521.9, volume: 68000, vwap: 518.2 },
    { time: '11:15', open: 521.9, high: 523.2, low: 521.1, close: 522.7, volume: 42000, vwap: 518.9 }
  ]);

  const [currentPrice, setCurrentPrice] = useState(522.7);
  const [positionType, setPositionType] = useState<'NONE' | 'LONG' | 'SHORT'>('NONE');
  const [entryPrice, setEntryPrice] = useState(0);
  const [leverage, setLeverage] = useState(5);
  const [claimedReward, setClaimedReward] = useState(false);

  const bids = [
    { price: +(currentPrice - 0.2).toFixed(2), size: 1420 },
    { price: +(currentPrice - 0.5).toFixed(2), size: 2850 },
    { price: +(currentPrice - 0.9).toFixed(2), size: 5400 }
  ];

  const asks = [
    { price: +(currentPrice + 0.2).toFixed(2), size: 1150 },
    { price: +(currentPrice + 0.6).toFixed(2), size: 3100 },
    { price: +(currentPrice + 1.1).toFixed(2), size: 4800 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const delta = (Math.random() - 0.48) * 0.35;
      setCurrentPrice((prev) => +(prev + delta).toFixed(2));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  let unrealizedPnL = 0;
  let pnlPercent = 0;
  const positionSize = 25000;
  if (positionType === 'LONG') {
    unrealizedPnL = ((currentPrice - entryPrice) / entryPrice) * positionSize * leverage;
    pnlPercent = ((currentPrice - entryPrice) / entryPrice) * 100 * leverage;
  } else if (positionType === 'SHORT') {
    unrealizedPnL = ((entryPrice - currentPrice) / entryPrice) * positionSize * leverage;
    pnlPercent = ((entryPrice - currentPrice) / entryPrice) * 100 * leverage;
  }

  const handleOpen = (type: 'LONG' | 'SHORT') => {
    soundEngine.playActivate();
    setPositionType(type);
    setEntryPrice(currentPrice);
  };

  const handleClose = () => {
    if (unrealizedPnL >= 0) soundEngine.playCorrect();
    else soundEngine.playIncorrect();
    setPositionType('NONE');
    setEntryPrice(0);
  };

  const handleClaimXp = () => {
    if (claimedReward) return;
    soundEngine.playLevelUp();
    setClaimedReward(true);
    if (onAddXp) onAddXp(150);
  };

  const minPrice = 510;
  const maxPrice = 525;
  const priceRange = maxPrice - minPrice;

  return (
    <div className="space-y-6 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-medium text-white">Quantitative Microstructure Terminal</h3>
          <p className="text-xs text-zinc-400 mt-0.5">Order book imbalance and VWAP execution flow.</p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          SPY // <span className="text-white font-medium">${currentPrice}</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>INDEX SPOT</span>
            <span className="text-cyan-400">+1.84%</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            ${currentPrice}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">VWAP: $518.90</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>FED NET LIQUIDITY</span>
            <span className="text-zinc-400">EXPANDING</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            $6.28T
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">TGA Drain: $780B</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>DEALER GEX REGIME</span>
            <span className="text-cyan-400">POSITIVE</span>
          </div>
          <div className="text-sm font-mono font-medium text-white mt-1">
            Long Gamma (Pinned)
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Volatility suppressed</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>UNREALIZED PNL</span>
            <span className="text-zinc-400">{positionType}</span>
          </div>
          <div className={`text-xl font-mono font-semibold ${unrealizedPnL >= 0 ? 'text-cyan-300' : 'text-zinc-400'}`}>
            {unrealizedPnL >= 0 ? '+' : ''}${unrealizedPnL.toFixed(2)}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">ROE: {pnlPercent.toFixed(2)}%</p>
        </div>
      </div>

      {/* Candlestick & Order Book */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.06]">
            <span>SPY 15-Min Candlestick</span>
            <span className="text-cyan-400">VWAP Tracking</span>
          </div>

          <div className="h-56 w-full">
            <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
              {[514, 518, 522].map((p) => {
                const y = 220 - ((p - minPrice) / priceRange) * 220;
                return (
                  <g key={p}>
                    <line x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.06)" />
                    <text x="565" y={y - 3} fill="#71717a" fontSize="9" fontFamily="monospace">
                      ${p}
                    </text>
                  </g>
                );
              })}

              <polyline
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.2"
                strokeDasharray="3 2"
                points={candles
                  .map((c, i) => `${30 + i * 70},${220 - ((c.vwap - minPrice) / priceRange) * 220}`)
                  .join(' ')}
              />

              {candles.map((c, idx) => {
                const x = 30 + idx * 70;
                const isUp = c.close >= c.open;
                const highY = 220 - ((c.high - minPrice) / priceRange) * 220;
                const lowY = 220 - ((c.low - minPrice) / priceRange) * 220;
                const openY = 220 - ((c.open - minPrice) / priceRange) * 220;
                const closeY = 220 - ((c.close - minPrice) / priceRange) * 220;
                const bodyTop = Math.min(openY, closeY);
                const bodyHeight = Math.max(3, Math.abs(closeY - openY));

                return (
                  <g key={idx}>
                    <line
                      x1={x}
                      y1={highY}
                      x2={x}
                      y2={lowY}
                      stroke={isUp ? '#06b6d4' : '#71717a'}
                      strokeWidth="1"
                    />
                    <rect
                      x={x - 8}
                      y={bodyTop}
                      width="16"
                      height={bodyHeight}
                      rx="1"
                      fill={isUp ? '#06b6d4' : '#27272a'}
                      stroke={isUp ? 'none' : '#71717a'}
                      strokeWidth="1"
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Order Book Depth & Execution */}
        <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-3 font-mono text-xs">
          <div className="text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06] flex justify-between">
            <span>Depth Book</span>
            <span className="text-cyan-400">+64% Imbalance</span>
          </div>

          <div className="space-y-1">
            {asks.slice().reverse().map((a, i) => (
              <div key={i} className="flex justify-between text-zinc-400 text-[11px]">
                <span>${a.price.toFixed(2)}</span>
                <span className="text-zinc-500">{a.size}</span>
              </div>
            ))}
          </div>

          <div className="py-1 px-2 rounded bg-zinc-900 text-center font-medium text-white border border-white/[0.06]">
            ${currentPrice}
          </div>

          <div className="space-y-1">
            {bids.map((b, i) => (
              <div key={i} className="flex justify-between text-cyan-300 text-[11px]">
                <span>${b.price.toFixed(2)}</span>
                <span className="text-zinc-500">{b.size}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>Leverage:</span>
              <div className="flex gap-1">
                {([1, 5, 10] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLeverage(l)}
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      leverage === l ? 'bg-white text-zinc-950 font-medium' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {l}x
                  </button>
                ))}
              </div>
            </div>

            {positionType === 'NONE' ? (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleOpen('LONG')}
                  className="py-2 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-medium transition-colors"
                >
                  Buy Long
                </button>
                <button
                  onClick={() => handleOpen('SHORT')}
                  className="py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors border border-white/10"
                >
                  Sell Short
                </button>
              </div>
            ) : (
              <button
                onClick={handleClose}
                className="w-full py-2 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Close ({unrealizedPnL >= 0 ? '+' : ''}${unrealizedPnL.toFixed(2)})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Claim Button Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">Execution Telemetry Verified</h4>
          <p className="text-xs text-zinc-400 mt-0.5">Order flow imbalance and liquidity metrics confirmed.</p>
        </div>

        <button
          onClick={handleClaimXp}
          disabled={claimedReward}
          className={`px-4 py-2 rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
            claimedReward
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-medium'
          }`}
        >
          {claimedReward ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Logged (+150 XP)</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Verify & Claim +150 XP</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
