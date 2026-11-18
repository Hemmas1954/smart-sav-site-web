import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  MessageSquare, 
  Laptop, 
  HardDrive, 
  Calculator, 
  TrendingUp, 
  Box, 
  WifiOff, 
  Sparkles,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PricingOffer({ onOpenOrder }) {
  // Interactive ROI Calculator State
  const [monthlyRepairs, setMonthlyRepairs] = useState(35);
  const [avgTicketPrice, setAvgTicketPrice] = useState(3500);

  // Estimated monthly saved lost debts / parts leakage avoided
  const estimatedAvoidedLeakage = Math.round(monthlyRepairs * 450); // e.g. 15,750 DZD
  const daysToBreakEven = Math.max(4, Math.round((siteConfig.pricing.priceDzd / (monthlyRepairs * (avgTicketPrice * 0.35))) * 30));

  const inclusions = [
    "ترخيص دائم مدى الحياة لحاسوب ورشتك (شراء لمرة واحدة فقط).",
    "0 دج اشتراك شهري أو سنوي — لا توجد أي رسوم تجديد دورية نهائياً.",
    "تشغيل محلي 100% بدون إنترنت مع قاعدة بيانات SQLite مشفرة ومؤمنة.",
    "نسخة Installer رسمية معتمدة ومتوافقة مع Windows 10 & 11 (64-bit).",
    "8 وحدات متكاملة في برنامج واحد (استقبال، كانبان، ضمان، قطع غيار، عمولات، كريدي، هاتف، أمان).",
    "فصل عمولات التقنيين عن ثمن قطع الغيار لحماية أرباح صاحب الورشة.",
    "نظام فحص الضمان ومطابقة السيريال المزدوج بكود QR لمنع الاحتيال.",
    "تسيير ديون الزبائن وتوثيق تحويلات BaridiMob وتذكير الواتساب.",
    "ربط كاميرا الهاتف عبر Wi-Fi الورشة لمسح الباركود دون إنترنت.",
    "حماية الصندوق والأرباح بكود PIN خاص بالمدير وسجل تدقيق العمليات.",
    "المساعدة في التثبيت والتفعيل الأولي وفق شروط الدعم المعتمدة في الجزائر."
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#091426] border-y border-sav-border relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>عرض التملك الدائم • بدون اشتراك</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria">
            استثمر مرة واحدة... وريح راسك من الاشتراكات الشهرية.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            احصل على نظام متكامل لورشتك دون مخاوف انقطاع الإنترنت أو فواتير شهرية تتراكم عليك. تملك حقيقي لبرنامجك بـ <b className="text-[#10B981] font-mono">{siteConfig.pricing.priceFormatted}</b> فقط.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE ROI / BREAK-EVEN CALCULATOR */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-sav-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  حاسبة العائد الاستثماري لورشتك (Calculateur de Rentabilité)
                </h3>
                <p className="text-xs text-slate-400">
                  شاهد كيف يسترجع البرنامج ثمنه (19,000 دج) في أيام معدودة
                </p>
              </div>
            </div>

            <div className="text-xs text-[#22D3EE] font-mono bg-[#22D3EE]/10 px-3 py-1 rounded-full border border-[#22D3EE]/30">
              حساب فوري للأرباح
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
            {/* Sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>عدد الأجهزة التي تصلحها الورشة شهرياً:</span>
                  <span className="font-mono font-bold text-[#10B981]">{monthlyRepairs} جهاز</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  step="5"
                  value={monthlyRepairs}
                  onChange={(e) => setMonthlyRepairs(Number(e.target.value))}
                  className="w-full accent-[#10B981] bg-[#050914] rounded-lg h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>متوسط قيمة التصليح مع اليد العاملة:</span>
                  <span className="font-mono font-bold text-[#22D3EE]">{avgTicketPrice.toLocaleString()} دج</span>
                </div>
                <input 
                  type="range" 
                  min="1500" 
                  max="15000" 
                  step="500"
                  value={avgTicketPrice}
                  onChange={(e) => setAvgTicketPrice(Number(e.target.value))}
                  className="w-full accent-[#22D3EE] bg-[#050914] rounded-lg h-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Results Output */}
            <div className="bg-[#050914] border border-sav-border rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-sav-border/50">
                <span>توفير ديون وقطع غيار مهدرة شهرياً:</span>
                <span className="font-mono font-bold text-[#10B981]">~ {estimatedAvoidedLeakage.toLocaleString()} دج / شهر</span>
              </div>

              <div className="text-center py-1">
                <div className="text-xs text-slate-400 mb-1">البرنامج يسترجع تكلفته (19,000 دج) في:</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#22D3EE]">
                  {daysToBreakEven} يوماً فقط!
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  وبعدها: أرباح وتنظيم مستمر لورشتك لسنوات دون دفع دينار واحد اشتراك.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MAIN PRICING & PRODUCT BOX SHOWCASE GRID */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3D Retail Box Showcase Card */}
          <div className="lg:col-span-5 bg-[#0D1B30] border border-sav-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold mb-4">
                <Box className="w-3.5 h-3.5" />
                <span>حقيبة التملك الرقمية الرسمية</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white font-alexandria mb-2">
                {siteConfig.brand.fullName}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                تستلم ملف التثبيت المعتمد لحاسوب ورشتك مع كود التفعيل الدائم، وتعمل به محلياً مدى الحياة دون أي اشتراك شهري.
              </p>

              {/* 3D Box Visual Thumbnail */}
              <div className="relative rounded-xl overflow-hidden border border-sav-border bg-[#050914] shadow-lg mb-5 group">
                <img 
                  src="/images/hero-showcase.jpg" 
                  alt="ANALYSE DZ • SAV MASTER Retail Box" 
                  className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2.5 right-3 left-3 flex justify-between items-center text-xs text-white font-mono">
                  <span className="bg-[#10B981]/90 text-[#050914] px-2 py-0.5 rounded font-bold">100% Offline</span>
                  <span className="text-[#22D3EE] font-bold">ترخيص مدى الحياة ∞</span>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#091426] border border-sav-border/60">
                  <span className="text-slate-400">نظام التشغيل:</span>
                  <span className="text-white font-bold">Windows 10 / 11 (64-bit)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#091426] border border-sav-border/60">
                  <span className="text-slate-400">قاعدة البيانات:</span>
                  <span className="text-[#10B981] font-bold">SQLite محلية مشفرة</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#091426] border border-sav-border/60">
                  <span className="text-slate-400">الاتصال بالإنترنت:</span>
                  <span className="text-[#10B981] font-bold">غير مطلوب نهائياً (0% Net)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sav-border text-center text-xs text-slate-400">
              دعم وتثبيت مخصص لجميع ولايات الجزائر الـ 58
            </div>
          </div>

          {/* Right Column: Inclusions & Master Purchase Card */}
          <div className="lg:col-span-7 bg-[#0D1B30] border border-[#10B981]/40 rounded-2xl p-6 sm:p-9 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Header with Price */}
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-sav-border">
                <div>
                  <span className="text-xs font-bold text-[#22D3EE] uppercase tracking-wider block font-mono">
                    الترخيص التجاري الكامل v1.0.0
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white font-alexandria mt-1">
                    ترخيص دائم لحاسوب ورشتك
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    استخدام غير محدود لكامل مميزات البرنامج مدى الحياة
                  </p>
                </div>

                <div className="text-right sm:text-left">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-[#10B981]">
                    {siteConfig.pricing.priceFormatted}
                  </div>
                  <div className="text-xs text-[#10B981] font-semibold flex items-center gap-1 justify-end sm:justify-start">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>0 دج اشتراك شهري مدى الحياة</span>
                  </div>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="py-6 space-y-2.5">
                <div className="text-xs font-bold text-slate-300 mb-3">
                  ما يتضمنه الترخيص المكتبي الكامل:
                </div>

                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-sav-border space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenOrder}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/25 hover:scale-[1.01] transition-all"
                >
                  <span>اطلب نسختك الآن ({siteConfig.pricing.priceFormatted})</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <a
                  href={siteConfig.whatsapp.pricing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#091426] hover:bg-[#11233E] border border-sav-border text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#10B981]" />
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1 font-mono">
                <span>✓ ترخيص دائم</span>
                <span>•</span>
                <span>✓ تفعيل محلي</span>
                <span>•</span>
                <span>✓ دعم ومساعدة في التثبيت</span>
                <span>•</span>
                <span>✓ دفع آمن بالدينار الجزائري</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
