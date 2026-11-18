import React, { useState } from 'react';
import { Calculator, AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ROICalculator({ onOpenOrder }) {
  // Inputs as required by the Master Prompt
  const [monthlyJobs, setMonthlyJobs] = useState(80);
  const [avgLaborFee, setAvgLaborFee] = useState(4000);
  const [commissionRate, setCommissionRate] = useState(30);
  const [affectedJobs, setAffectedJobs] = useState(25); // Number of jobs where spare parts were included in commission
  const [avgPartsOvercharge, setAvgPartsOvercharge] = useState(1500); // Average commission incorrectly calculated on parts

  // Calculation formula per prompt:
  // Potential commission exposure = Number of affected jobs × Average incorrectly calculated commission.
  const monthlyExposure = affectedJobs * avgPartsOvercharge;
  const annualExposure = monthlyExposure * 12;

  // Reset to default
  const handleReset = () => {
    setMonthlyJobs(80);
    setAvgLaborFee(4000);
    setCommissionRate(30);
    setAffectedJobs(25);
    setAvgPartsOvercharge(1500);
  };

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 bg-[#071326] border-y border-sav-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/20 text-[#F5B942] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة التعرض المالي لعمولات القطع</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            حاسبة التقدير المالي لأخطاء حساب العمولات
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            أداة تفاعلية لتقدير الحجم المالي المحتمل للتسريب الناتج عن حساب عمولات الفنيين على إجمالي الفواتير بدلاً من أجور اليد العاملة وحدها.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-[#0A1A33] border border-sav-border rounded-2xl p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Inputs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-sav-border">
                <span className="font-bold text-white text-sm">أدخل تقديرات ورشتك الشهرية:</span>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>إعادة الضبط</span>
                </button>
              </div>

              {/* Input 1: Monthly repair jobs */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-1.5">
                  <span>عدد أجهزة الصيانة شهرياً:</span>
                  <span className="font-mono font-bold text-white">{monthlyJobs} جهاز</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="5"
                  value={monthlyJobs}
                  onChange={(e) => setMonthlyJobs(Number(e.target.value))}
                  className="w-full accent-[#00F5FF] cursor-pointer"
                />
              </div>

              {/* Input 2: Average labor fee */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-1.5">
                  <span>متوسط أجرة اليد العاملة للجهاز (Main d'œuvre):</span>
                  <span className="font-mono font-bold text-[#00F5FF]">{avgLaborFee.toLocaleString()} دج</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={avgLaborFee}
                  onChange={(e) => setAvgLaborFee(Number(e.target.value))}
                  className="w-full accent-[#00F5FF] cursor-pointer"
                />
              </div>

              {/* Input 3: Commission rate */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-1.5">
                  <span>نسبة عمولة الفني المعتمدة في ورشتك:</span>
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

              {/* Input 4: Number of affected jobs */}
              <div className="pt-2 border-t border-sav-border">
                <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-1.5">
                  <span className="text-[#F5B942]">عدد الأجهزة التي تتضمن قطع غيار شهرياً:</span>
                  <span className="font-mono font-bold text-[#F5B942]">{affectedJobs} جهاز</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max={Math.min(monthlyJobs, 150)}
                  step="5"
                  value={affectedJobs}
                  onChange={(e) => setAffectedJobs(Number(e.target.value))}
                  className="w-full accent-[#F5B942] cursor-pointer"
                />
              </div>

              {/* Input 5: Estimated error value per job */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-1.5">
                  <span className="text-red-400">متوسط العمولة الزائدة المدفوعة على القطع للجهاز الواحد:</span>
                  <span className="font-mono font-bold text-red-400">{avgPartsOvercharge.toLocaleString()} دج</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="6000"
                  step="100"
                  value={avgPartsOvercharge}
                  onChange={(e) => setAvgPartsOvercharge(Number(e.target.value))}
                  className="w-full accent-red-400 cursor-pointer"
                />
              </div>

            </div>

            {/* Right Column: Output Results */}
            <div className="lg:col-span-5 bg-[#071326] border border-sav-border rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                  النتيجة التقديرية المحسوبة
                </div>
                <h3 className="text-base font-bold text-white mb-4">
                  حجم التعرض المالي لعمولات القطع غير المفصولة:
                </h3>

                <div className="space-y-4">
                  <div className="bg-[#0A1A33] border border-red-500/30 rounded-lg p-4">
                    <span className="text-xs text-slate-400 block mb-1">التعرض المالي التقديري شهرياً:</span>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-red-400">
                      {monthlyExposure.toLocaleString()} <span className="text-xs font-normal text-slate-400">دج / شهر</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      ({affectedJobs} أجهزة × {avgPartsOvercharge.toLocaleString()} دج عمولة مدفوعة بالخطأ على القطع)
                    </span>
                  </div>

                  <div className="bg-[#0A1A33] border border-[#F5B942]/30 rounded-lg p-4">
                    <span className="text-xs text-slate-400 block mb-1">التعرض المالي التقديري سنوياً:</span>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-[#F5B942]">
                      {annualExposure.toLocaleString()} <span className="text-xs font-normal text-slate-400">دج / سنة</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      مبلغ مالي كافٍ لتجهيز ورشتك وتغطية أدواتها لسنوات
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-2">
                <button
                  onClick={onOpenOrder}
                  className="w-full py-3 px-4 rounded-xl bg-[#00E699] hover:bg-[#34D399] text-[#030914] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>اضبط حساباتك بـ {siteConfig.pricing.priceFormatted} لمرة واحدة</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Strict required disclaimer */}
          <div className="mt-6 pt-4 border-t border-sav-border flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-[#F5B942] shrink-0 mt-0.5" />
            <p>
              <b>تنبيه وتوضيح منهجي:</b> جميع القيم والمبالغ الموضحة أعلاه هي تقديرات مبنية على الأرقام والمدخلات التي يحددها المستخدم بنفسه، والهدف منها توضيح الأثر المحتمل لغياب الفصل بين القطع وأجرة العمل. لا يقدم البرنامج وعوداً بأرباح مضمونة، بل يوفر الآلية الحسابية الدقيقة لتنفيذ السياسة المالية التي تختارها ورشتك.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
