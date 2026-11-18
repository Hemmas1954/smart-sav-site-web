import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';

export default function FinancialProtection() {
  const [laborFee, setLaborFee] = useState(3500);
  const [partsCost, setPartsCost] = useState(12000);
  const [commissionRate, setCommissionRate] = useState(25);

  const totalInvoice = laborFee + partsCost;
  
  // Incorrect calculation (done on total invoice)
  const incorrectCommission = Math.round((totalInvoice * commissionRate) / 100);
  const workshopLossOnParts = incorrectCommission - Math.round((laborFee * commissionRate) / 100);

  // Correct calculation with SAV MASTER (done strictly on labor fee)
  const correctCommission = Math.round((laborFee * commissionRate) / 100);
  const protectedWorkshopProfit = totalInvoice - correctCommission;

  return (
    <section id="profit-protection" className="py-16 sm:py-24 bg-[#071326] border-y border-sav-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E699]/10 border border-[#00E699]/20 text-[#00E699] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>محرك حماية الأرباح المالي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            لا تدفع عمولة على قطعة غيار ليست أجرة عمل!
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            المعادلة الرياضية الصارمة التي تفصل بين رأس مال القطع وأجرة العمل، فتمنع تسريب أموال الورشة عبر حسابات العمولات الخاطئة.
          </p>
        </div>

        {/* Visual Math Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: The Traditional Mistake */}
          <div className="bg-[#0A1A33] border border-red-500/30 rounded-xl p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sav-border mb-5">
                <div className="flex items-center gap-2 text-red-400 font-bold text-base sm:text-lg">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>الحساب اليدوي العشوائي (نزيف مالي)</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400">
                  شائع في الورشات
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                حين يدفع الزبون الفاتورة الإجمالية، تُحسب نسبة الفني على المبلغ كاملاً، فيأخذ الفني عمولة على ثمن الشاشة أو الضاغط الذي اشتريته من مالك الخاص!
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 bg-[#071326] p-4 rounded-lg border border-sav-border">
                <div className="flex justify-between">
                  <span>أجرة اليد العاملة (Main d'œuvre):</span>
                  <span className="font-mono font-semibold">{laborFee.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between">
                  <span>ثمن قطع الغيار (رأس مالك):</span>
                  <span className="font-mono font-semibold text-slate-200">{partsCost.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between border-t border-sav-border pt-2 font-bold text-white">
                  <span>المبلغ الإجمالي المسدد:</span>
                  <span className="font-mono">{totalInvoice.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between text-red-400 font-bold border-t border-sav-border pt-2">
                  <span>عمولة الفني ({commissionRate}% من الإجمالي):</span>
                  <span className="font-mono font-bold text-base">{incorrectCommission.toLocaleString()} دج</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-red-950/30 border border-red-500/30 text-xs text-red-300">
              <span className="font-bold block mb-1">النتيجة السلبية:</span>
              الورشة تدفع <span className="font-mono font-bold text-red-200">{workshopLossOnParts.toLocaleString()} دج</span> إضافية من رأس مال قطعة الغيار دون أي مبرر!
            </div>
          </div>

          {/* Card 2: The SAV MASTER Solution */}
          <div className="bg-[#0A1A33] border border-[#00E699]/40 rounded-xl p-5 sm:p-7 flex flex-col justify-between shadow-lg shadow-[#00E699]/5">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sav-border mb-5">
                <div className="flex items-center gap-2 text-[#00E699] font-bold text-base sm:text-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>نظام ANALYSE DZ • SAV MASTER</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00E699]/10 text-[#00E699] font-semibold">
                  حماية 100%
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                يقوم النظام تلقائياً بعزل قيمة قطع الغيار، ويطبق نسبة العمولة التعاقدية المحددة حصراً على <b className="text-white">أجرة اليد العاملة الفعلية</b>.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 bg-[#071326] p-4 rounded-lg border border-sav-border">
                <div className="flex justify-between">
                  <span>أجرة اليد المحددة (وعاء الحساب):</span>
                  <span className="font-mono font-semibold text-[#00F5FF]">{laborFee.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between">
                  <span>قطع الغيار (محمية بالكامل):</span>
                  <span className="font-mono font-semibold text-white">{partsCost.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between border-t border-sav-border pt-2 font-bold text-white">
                  <span>المبلغ الإجمالي للفاتورة:</span>
                  <span className="font-mono">{totalInvoice.toLocaleString()} دج</span>
                </div>
                <div className="flex justify-between text-[#00E699] font-bold border-t border-sav-border pt-2">
                  <span>عمولة الفني العادلة ({commissionRate}% من اليد فقط):</span>
                  <span className="font-mono font-bold text-base">{correctCommission.toLocaleString()} دج</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-[#00E699]/10 border border-[#00E699]/30 text-xs text-[#00E699]">
              <span className="font-bold block mb-1">النتيجة الإيجابية:</span>
              احتفاظ صاحب الورشة بكامل ثمن قطع الغيار، مع توفير فوري بقيمة <span className="font-mono font-bold text-white">{workshopLossOnParts.toLocaleString()} دج</span> في هذه العملية وحدها!
            </div>
          </div>

        </div>

        {/* Interactive Formula Slider Bar */}
        <div className="mt-8 bg-[#0A1A33] border border-sav-border rounded-xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-sav-border mb-5">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#00F5FF]" />
              <span className="font-bold text-white text-sm">جرّب بنفسك: عدّل القيم ولاحظ الفصل الرياضي</span>
            </div>
            <div className="text-xs text-slate-400">
              * سياسة حساب العمولات في البرنامج مرنة بالكامل وقابلة للتخصيص حسب نظام ورشتك
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>أجرة اليد العاملة:</span>
                <span className="font-mono font-bold text-[#00F5FF]">{laborFee.toLocaleString()} دج</span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={laborFee}
                onChange={(e) => setLaborFee(Number(e.target.value))}
                className="w-full accent-[#00F5FF] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>قيمة قطع الغيار:</span>
                <span className="font-mono font-bold text-white">{partsCost.toLocaleString()} دج</span>
              </div>
              <input
                type="range"
                min="2000"
                max="40000"
                step="1000"
                value={partsCost}
                onChange={(e) => setPartsCost(Number(e.target.value))}
                className="w-full accent-slate-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>نسبة عمولة الفني (%):</span>
                <span className="font-mono font-bold text-[#00E699]">{commissionRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full accent-[#00E699] cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
