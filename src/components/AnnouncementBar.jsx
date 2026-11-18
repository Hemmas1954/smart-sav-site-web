import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AnnouncementBar({ onOpenOrder }) {
  return (
    <div className="bg-[#071326] border-b border-sav-border text-xs sm:text-sm text-slate-300 py-2.5 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#00E699]/10 text-[#00E699] border border-[#00E699]/20 shrink-0">
            <Sparkles className="w-3 h-3" />
            <span>عرض تجاري</span>
          </span>
          <span className="font-medium text-slate-200 truncate">
            عرض الإطلاق التجاري | ترخيص دائم لورشتك بـ {siteConfig.pricing.priceFormatted} مع المساعدة في التثبيت والتشغيل
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#00E699] hover:text-[#34D399] transition-colors"
          >
            <span>اطلب نسختك</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
