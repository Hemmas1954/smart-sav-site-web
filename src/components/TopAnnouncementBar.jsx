import React, { useState, useEffect } from 'react';
import { Zap, Clock, ChevronLeft } from 'lucide-react';

export default function TopAnnouncementBar({ onOpenOrderModal }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="relative z-50 bg-gradient-to-r from-obsidian-950 via-emeraldNeon-900/40 to-obsidian-950 border-b border-emeraldNeon-500/30 text-xs sm:text-sm py-2 px-3 text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Main Announcement text */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-right">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emeraldNeon-500/20 text-emeraldNeon-400 border border-emeraldNeon-500/40 font-bold text-[11px] sm:text-xs animate-pulse shrink-0">
            <Zap className="w-3 h-3" />
            عرض الإطلاق 🇩🇿
          </span>
          <p className="font-semibold text-slate-100 text-[11px] sm:text-xs md:text-sm">
            ترخيص دائم مدى الحياة بـ <span className="text-emeraldNeon-400 font-black font-mono text-xs sm:text-sm underline decoration-emeraldNeon-500/50">19,000 دج</span> فقط مع تثبيت وتدريب مجاني
          </p>
        </div>

        {/* Countdown & Quick Action */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs bg-obsidian-900/90 px-2.5 py-1 rounded-lg border border-slate-700/60 shadow-inner">
            <Clock className="w-3 h-3 text-amberGold-400 shrink-0" />
            <span className="text-slate-400">ينتهي:</span>
            <span className="text-amberGold-400 font-bold tracking-wider">
              {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md bg-emeraldNeon-500 hover:bg-emeraldNeon-400 text-obsidian-950 transition-all shadow-sm hover:shadow-neon-emerald"
          >
            <span>احجز بـ 19,000 دج</span>
            <ChevronLeft className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
