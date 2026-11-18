import React from 'react';
import { Play, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function VideoShowcase({ onOpenTour }) {
  return (
    <section id="walkthrough" className="py-16 sm:py-24 bg-[#030914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E699]/10 border border-[#00E699]/20 text-[#00E699] text-xs font-semibold">
            <Laptop className="w-3.5 h-3.5" />
            <span>معاينة حية وتطبيقية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            شاهد كيف تعمل ورشتك مع SAV MASTER
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            استكشف واجهة البرنامج الحقيقية وكيفية تسجيل الملفات، طباعة الوصولات، وحساب الأرباح في خطوات مبسطة.
          </p>
        </div>

        {/* Video Frame Placeholder with Play Action */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-[#071326] border border-sav-border p-2 sm:p-3 shadow-2xl overflow-hidden group">
            
            {/* Aspect Ratio 16:9 Showcase Screen */}
            <div className="relative aspect-video rounded-xl bg-[#0A1A33] border border-sav-border overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              
              {/* Background illustrative elements */}
              <div className="absolute inset-0 bg-enterprise-grid opacity-30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-[#00E699]/10 rounded-full blur-[90px] pointer-events-none" />

              {/* Central Trigger Action */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <button
                  onClick={onOpenTour}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00E699] text-[#030914] flex items-center justify-center shadow-lg shadow-[#00E699]/25 hover:scale-105 active:scale-95 transition-all group-hover:bg-[#34D399]"
                  aria-label="بدء جولة المعاينة"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-[#030914] ml-1" />
                </button>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    جولة استعراض وظائف البرنامج الرئيسية
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    اضغط لبدء العرض التفاعلي المفصل خطوة بخطوة لشاشات البرنامج
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E699]" />
                    استقبال وطباعة الوصل
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E699]" />
                    فحص الضمان بالـ QR
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E699]" />
                    تسوية الوكلاء وعقود المصانع
                  </span>
                </div>
              </div>

              {/* Developer / Owner note for embedding video */}
              <div className="absolute bottom-3 inset-x-0 text-center">
                <span className="text-[10px] font-mono text-slate-400 bg-[#071326]/80 px-2 py-0.5 rounded border border-sav-border">
                  منطقة مخصصة لإدراج فيديو الشرح التوضيحي الرسمي (MP4 / YouTube Walkthrough)
                </span>
              </div>

            </div>

          </div>

          {/* Direct CTA under video */}
          <div className="mt-8 text-center">
            <a
              href={siteConfig.whatsapp.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1A33] hover:bg-[#0F2342] border border-sav-border hover:border-slate-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>هل تريد تجربة عملية مخصصة لورشتك؟ تواصل معنا عبر واتساب</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
