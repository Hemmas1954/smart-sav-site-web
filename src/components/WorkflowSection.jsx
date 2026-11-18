import React from 'react';
import { Download, Users, Wrench, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function WorkflowSection({ onOpenOrder }) {
  const steps = [
    {
      num: "01",
      title: "ثبّت البرنامج على حاسوبك.",
      desc: "تحميل وتثبيت ملف الـ Installer الرسمي لنظام Windows (10 أو 11) بمساعدة فريقنا خطوة بخطوة وتفعيل ترخيصك الدائم محلياً.",
      icon: Download
    },
    {
      num: "02",
      title: "أدخل بيانات الورشة والتقنيين وقطع الغيار.",
      desc: "ضبط اسم لاتيلي والشعار على وصل الاستلام، تسجيل أسماء التقنيين ونسب عمولاتهم، وإدخال أسعار قطع الغيار المعتمدة.",
      icon: Users
    },
    {
      num: "03",
      title: "ابدأ بتسجيل الأجهزة ومتابعة التصليحات والحسابات.",
      desc: "استقبال أجهزة الزبائن، طباعة الوصل بكود QR، متابعة الصيانة عبر مسار كانبان، وضبط الصندوق والديون وعمولات التقنيين.",
      icon: Wrench
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#091426] border-y border-sav-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold">
            <span>سهولة الانطلاق والتثبيت</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria">
            بسيطة... من أول نهار تقدر تبدأ.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            النظام مصمم ليكون عملياً ومباشراً دون تعقيد، وبدون الحاجة إلى خلفية في المحاسبة أو البرمجة.
          </p>
        </div>

        {/* Timeline Sequence: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-[#10B981]/30 via-[#22D3EE]/30 to-[#10B981]/30 -translate-y-8 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#0D1B30] border border-sav-border rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#10B981]/40 transition-colors shadow-lg z-10"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-[#10B981]">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#091426] border border-sav-border flex items-center justify-center text-[#22D3EE] shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-sav-border/50 flex items-center gap-1.5 text-[11px] text-[#10B981] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>مساعدة فريق الدعم متوفرة للتثبيت</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0D1B30] hover:bg-[#11233E] border border-[#10B981]/40 text-white font-bold text-sm transition-all shadow-md"
          >
            <span>اطلب نسختك وانطلق في ورشتك اليوم</span>
            <ArrowLeft className="w-4 h-4 text-[#10B981]" />
          </button>
        </div>

      </div>
    </section>
  );
}
