import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  CreditCard, 
  Boxes, 
  FileSpreadsheet, 
  Lock, 
  Check, 
  ArrowLeft,
  Smartphone,
  Search,
  Plus,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ProductExperienceShowcase({ onOpenOrder }) {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const screens = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: BarChart3 },
    { id: 'kanban', label: 'كانبان التصليحات', icon: Layers },
    { id: 'debts', label: 'ديون الزبائن (الكريدي)', icon: CreditCard },
    { id: 'parts', label: 'مخزون قطع الغيار', icon: Boxes },
    { id: 'commissions', label: 'كشوفات التقنيين', icon: FileSpreadsheet },
    { id: 'security', label: 'إعدادات الأمان وPIN', icon: Lock },
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold">
            <span>معاينة حية لشاشات النظام</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria">
            تجربة استخدام صُممت لسرعة العمل داخل لاتيلي
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            تصفح شاشات البرنامج الرئيسية واكتشف كيف يسهل عليك كل مرحلة من الاستقبال إلى المحاسبة والأمان.
          </p>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {screens.map((s) => {
            const Icon = s.icon;
            const isActive = activeScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScreen(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 transition-all border ${
                  isActive
                    ? 'bg-[#10B981] text-[#050914] border-[#10B981] shadow-md shadow-[#10B981]/20'
                    : 'bg-[#0D1B30] text-slate-300 border-sav-border hover:bg-[#11233E]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* High-Fidelity Conceptual UI Window */}
        <div className="bg-[#091426] border border-sav-border rounded-2xl p-2 sm:p-3 shadow-2xl">
          <div className="bg-[#050914] border border-sav-border/80 rounded-xl overflow-hidden min-h-[420px] flex flex-col">
            
            {/* Window Top Controls */}
            <div className="bg-[#091426] border-b border-sav-border px-4 py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 font-mono text-[11px] mr-2">
                  ANALYSE DZ • SAV MASTER v1.0.0
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#10B981]">
                ● وضع محلي مشفر
              </div>
            </div>

            {/* Content Area Based on Active Screen */}
            <div className="p-4 sm:p-6 flex-grow">
              
              {/* 1. DASHBOARD SCREEN */}
              {activeScreen === 'dashboard' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">لوحة المؤشرات العامة والنشاط اليومي:</span>
                    <span className="text-xs text-slate-400 font-mono">18 نوفمبر 2026</span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                      <span className="text-[11px] text-slate-400 block mb-1">صندوق اليوم الصافي</span>
                      <span className="font-mono text-lg sm:text-xl font-bold text-white">42,500 دج</span>
                      <span className="text-[10px] text-[#10B981] block mt-0.5">8 فواتير مقبوضة</span>
                    </div>

                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                      <span className="text-[11px] text-slate-400 block mb-1">أجهزة في الورشة</span>
                      <span className="font-mono text-lg sm:text-xl font-bold text-[#22D3EE]">46 جهاز</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">19 جاهز للتسليم</span>
                    </div>

                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                      <span className="text-[11px] text-slate-400 block mb-1">قطع غيار تم تركيبها</span>
                      <span className="font-mono text-lg sm:text-xl font-bold text-[#F5B942]">16 قطعة</span>
                      <span className="text-[10px] text-[#10B981] block mt-0.5">محمية 100% للورشة</span>
                    </div>

                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                      <span className="text-[11px] text-slate-400 block mb-1">مستحقات معلقة (الكريدي)</span>
                      <span className="font-mono text-lg sm:text-xl font-bold text-red-400">48,500 دج</span>
                      <span className="text-[10px] text-red-300 block mt-0.5">7 زبائن</span>
                    </div>
                  </div>

                  <div className="bg-[#0D1B30] p-3.5 rounded-xl border border-sav-border">
                    <span className="font-bold text-slate-200 text-xs block mb-2">رسم بياني للإيرادات واليد العاملة هذا الأسبوع:</span>
                    <div className="h-24 flex items-end gap-2 pt-2 border-b border-sav-border pb-1">
                      {[40, 65, 55, 80, 95, 70, 90].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className="w-full rounded-t bg-gradient-to-t from-[#10B981]/40 to-[#10B981] transition-all hover:brightness-125"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[9px] text-slate-500 font-mono">
                            {['سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. KANBAN REPAIR SCREEN */}
              {activeScreen === 'kanban' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">مسار كانبان الذكي لتتبع الأجهزة:</span>
                    <span className="text-xs text-[#10B981] font-mono">تحديث فوري بالسحب والإفلات</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border space-y-2">
                      <span className="font-bold text-slate-300 block border-b border-sav-border pb-1">1. استقبال (4)</span>
                      <div className="p-2 rounded bg-[#091426] text-[11px] space-y-0.5">
                        <div className="font-bold text-white">تلفاز Geant 43"</div>
                        <div className="text-slate-400">عطل شاشة سوداء وصوت</div>
                        <div className="text-[#22D3EE] font-mono">#SAV-095</div>
                      </div>
                    </div>

                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-[#22D3EE]/30 space-y-2">
                      <span className="font-bold text-[#22D3EE] block border-b border-sav-border pb-1">2. قيد الصيانة (6)</span>
                      <div className="p-2 rounded bg-[#091426] text-[11px] space-y-0.5 border border-[#22D3EE]/20">
                        <div className="font-bold text-white">مكيف Condor 12K</div>
                        <div className="text-slate-400">تبديل مكثف وشحن R410</div>
                        <div className="text-[#10B981] font-mono">التقني: أمين</div>
                      </div>
                    </div>

                    <div className="bg-[#0D1B30] p-3 rounded-xl border border-[#10B981]/40 space-y-2">
                      <span className="font-bold text-[#10B981] block border-b border-sav-border pb-1">3. جاهز للتسليم (8)</span>
                      <div className="p-2 rounded bg-[#10B981]/10 text-[11px] space-y-0.5 text-[#10B981]">
                        <div className="font-bold text-white">Samsung 55" 4K</div>
                        <div>تم إرسال WhatsApp للزبون 📲</div>
                        <div className="font-mono text-white">14,500 دج</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. DEBTS & BARIDIMOB SCREEN */}
              {activeScreen === 'debts' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">سجل ديون الزبائن والتحصيلات (الكريدي):</span>
                    <span className="text-xs text-red-400 font-mono">7 ملفات غير مسددة بالكامل</span>
                  </div>

                  <div className="overflow-x-auto no-scrollbar border border-sav-border rounded-xl">
                    <table className="w-full min-w-[500px] text-xs text-right">
                      <thead className="bg-[#091426] text-slate-400 font-semibold border-b border-sav-border">
                        <tr>
                          <th className="p-2.5">اسم الزبون</th>
                          <th className="p-2.5">رقم الهاتف</th>
                          <th className="p-2.5">الجهاز</th>
                          <th className="p-2.5">المسدد / الطريقة</th>
                          <th className="p-2.5">الرصيد المتبقي (الكريدي)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sav-border/50 text-slate-300">
                        <tr>
                          <td className="p-2.5 font-bold text-white">عبد القادر حميدي</td>
                          <td className="p-2.5 font-mono">0558 23 11 **</td>
                          <td className="p-2.5">مكيف LG 18000 BTU</td>
                          <td className="p-2.5"><span className="px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400">2,000 دج BaridiMob</span></td>
                          <td className="p-2.5 font-mono font-bold text-red-400">18,000 دج</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">سعيد بوقرة</td>
                          <td className="p-2.5 font-mono">0772 19 88 **</td>
                          <td className="p-2.5">مبرد Brandt</td>
                          <td className="p-2.5"><span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">4,000 دج نقداً</span></td>
                          <td className="p-2.5 font-mono font-bold text-red-400">6,000 دج</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">بلال مسعودي</td>
                          <td className="p-2.5 font-mono">0661 44 90 **</td>
                          <td className="p-2.5">شاشة Condor 43"</td>
                          <td className="p-2.5"><span className="px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">8,500 دج BaridiMob كاملة</span></td>
                          <td className="p-2.5 font-mono font-bold text-[#10B981]">0 دج (خالص ✓)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 4. SPARE PARTS & PMP SCREEN */}
              {activeScreen === 'parts' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">مخزون قطع الغيار وحساب المتوسط المرجح (PMP):</span>
                    <span className="text-xs text-[#10B981] font-mono">تحديث فوري عند أي شراء جديد</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#0D1B30] rounded-xl border border-sav-border space-y-1">
                      <span className="font-bold text-white block">Kit Led Samsung 55" UHD</span>
                      <span className="text-slate-400 text-[11px] block">المخزون المتوفر: 12 طقم</span>
                      <span className="text-[#22D3EE] font-mono text-[11px] block">سعر الشراء PMP: 6,800 دج</span>
                      <span className="text-[#10B981] font-mono font-bold block">سعر البيع للزبون: 9,500 دج</span>
                    </div>

                    <div className="p-3 bg-[#0D1B30] rounded-xl border border-sav-border space-y-1">
                      <span className="font-bold text-white block">كرت أم مكيف Condor 12K</span>
                      <span className="text-slate-400 text-[11px] block">المخزون المتوفر: 4 قطع</span>
                      <span className="text-[#22D3EE] font-mono text-[11px] block">سعر الشراء PMP: 4,200 دج</span>
                      <span className="text-[#10B981] font-mono font-bold block">سعر البيع للزبون: 6,500 دج</span>
                    </div>

                    <div className="p-3 bg-[#0D1B30] rounded-xl border border-amber-500/30 space-y-1">
                      <span className="font-bold text-white block">مكثف 35µF للتكييف</span>
                      <span className="text-amber-400 text-[11px] block">المتبقي: 1 قطعة فقط (منخفض!)</span>
                      <span className="text-[#22D3EE] font-mono text-[11px] block">سعر الشراء PMP: 650 دج</span>
                      <span className="text-[#10B981] font-mono font-bold block">سعر البيع للزبون: 1,400 دج</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. COMMISSIONS SCREEN */}
              {activeScreen === 'commissions' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">كشوفات رواتب وعمولات التقنيين (جاهزة للطباعة A4):</span>
                    <span className="text-xs text-[#22D3EE] font-mono">محسوبة على اليد العاملة الصافية</span>
                  </div>

                  <div className="bg-[#0D1B30] p-4 rounded-xl border border-sav-border space-y-3 text-xs">
                    <div className="flex justify-between items-center border-b border-sav-border pb-2">
                      <div>
                        <span className="font-bold text-white text-sm block">التقني: كمال (تخصص شاشات وتلفزيونات)</span>
                        <span className="text-slate-400 text-[11px]">نسبة العمولة المتفق عليها: 30% من Main d'œuvre</span>
                      </div>
                      <span className="px-3 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-mono font-bold text-sm">
                        مستحقات الشهر: 42,600 دج
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-300">
                      <div className="bg-[#091426] p-2 rounded">عدد الأجهزة: <b>28 جهاز</b></div>
                      <div className="bg-[#091426] p-2 rounded">إجمالي العمل: <b>142,000 دج</b></div>
                      <div className="bg-[#091426] p-2 rounded">قطع الغيار: <b>185,000 دج (0% عمولة)</b></div>
                      <div className="bg-[#091426] p-2 rounded text-[#10B981]">الصافي للتوقيع: <b>42,600 دج</b></div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. SECURITY & PIN SCREEN */}
              {activeScreen === 'security' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center pb-2 border-b border-sav-border">
                    <span className="font-bold text-white text-sm">إعدادات الأمان وقفل PIN الخاص بالمدير:</span>
                    <span className="text-xs text-[#10B981] font-mono">تشفير محلي AES-256</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-[#0D1B30] p-4 rounded-xl border border-sav-border space-y-2.5">
                      <span className="font-bold text-white block">حماية شاشات الأرباح والصندوق:</span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        يمنع الموظفين والتقنيين من الاطلاع على هوامش الربح الإجمالية أو رصيد الصندوق بدون إدخال رمز PIN.
                      </p>
                      <div className="pt-2 flex items-center gap-2">
                        <span className="px-3 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-bold">
                          ✓ كود PIN مفعل
                        </span>
                        <span className="text-slate-500 font-mono">••••</span>
                      </div>
                    </div>

                    <div className="bg-[#0D1B30] p-4 rounded-xl border border-sav-border space-y-2.5">
                      <span className="font-bold text-white block">النسخ الاحتياطي التلقائي (Local Backup):</span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        يتم حفظ نسخة احتياطية من قاعدة البيانات يومياً عند إغلاق البرنامج في مجلد آمن على حاسوبك أو فلاش ديسك.
                      </p>
                      <div className="pt-2">
                        <span className="text-slate-400 font-mono text-[11px]">
                          آخر نسخة: اليوم 13:00 (SAV_BACKUP_20261118.db)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Window Footer with Direct CTA */}
            <div className="bg-[#091426] border-t border-sav-border p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                واجهة عربية كاملة، أزرار واضحة، وسرعة فائقة تعمل بدون إنترنت وبترخيص دائم بـ 19,000 دج.
              </span>
              <button
                onClick={onOpenOrder}
                className="px-5 py-2 rounded-lg bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-xs shrink-0 transition-all shadow-sm"
              >
                اطلب نسختك الآن لورشتك
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
