import React, { useState } from 'react';
import { MessageSquare, PhoneCall, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FloatingWhatsApp() {
  const [bubbleOpen, setBubbleOpen] = useState(true);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2.5">
      {/* Speech Bubble */}
      {bubbleOpen && (
        <div className="bg-[#0D1B30] border border-sav-border rounded-2xl p-3 shadow-xl max-w-[240px] text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setBubbleOpen(false)}
            className="absolute top-2.5 left-2.5 text-slate-500 hover:text-white"
            aria-label="إغلاق"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="font-bold text-[#10B981] mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>الدعم التقني متصل</span>
          </div>

          <p className="text-slate-300 text-[11px] leading-relaxed">
            عندك استفسار حول ترخيص البرنامج لورشتك؟ راسلنا مباشرة في واتساب.
          </p>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        <a
          href={siteConfig.whatsapp.general}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#10B981] hover:bg-[#34D399] text-[#050914] flex items-center justify-center shadow-lg shadow-[#10B981]/25 hover:scale-105 active:scale-95 transition-all"
          aria-label="تواصل عبر واتساب"
        >
          <MessageSquare className="w-6 h-6 fill-[#050914]" />
        </a>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0D1B30] hover:bg-[#11233E] border border-sav-border text-slate-200 text-xs font-mono font-semibold shadow-md transition-all"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span dir="ltr">{siteConfig.contact.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
