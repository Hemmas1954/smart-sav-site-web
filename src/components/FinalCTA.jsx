import React from 'react';
import { MessageSquare, PhoneCall, ArrowLeft, CheckCircle2, ShieldCheck, Laptop } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FinalCTA({ onOpenOrder }) {
  return (
    <section className="py-16 sm:py-24 bg-[#091426] border-t border-sav-border relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 font-mono">
            {siteConfig.brand.fullName}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-alexandria">
            خلي وقتك للتصليح... وخلي SAV MASTER يهتم بالتنظيم.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ابدأ في تسيير ورشتك بطريقة أكثر احترافية، وخلّي كل جهاز وكل دين وكل قطعة غيار محسوبة. ترخيص دائم بدون أي اشتراك شهري.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-base shadow-lg shadow-[#10B981]/25 transition-all duration-200"
            >
              <span>تواصل معنا واطلب نسختك</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href={siteConfig.whatsapp.general}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0D1B30] hover:bg-[#11233E] text-slate-200 font-bold text-base border border-sav-border hover:border-slate-400 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>اسألنا عن البرنامج عبر واتساب</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              شراء مرة واحدة بـ {siteConfig.pricing.priceFormatted}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              0 دج اشتراك شهري
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              يعمل 100% دون إنترنت
            </span>
          </div>

          {/* Mini Closing Visual Feature */}
          <div className="mt-10 p-3 max-w-lg mx-auto bg-[#050914] border border-sav-border rounded-xl flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-white">Windows 10 / 11 Desktop Edition</span>
            </div>
            <span className="text-[#10B981]">ترخيص محلي جاهز</span>
          </div>

        </div>

      </div>
    </section>
  );
}
