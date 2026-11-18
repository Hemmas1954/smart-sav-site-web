import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  MessageSquare, 
  Infinity as InfinityIcon, 
  Gift, 
  Headphones, 
  Database, 
  Laptop, 
  Clock,
  ChevronLeft
} from 'lucide-react';

export default function LifetimePricingOffer({ onOpenOrderModal }) {
  const features = [
    { text: "ترخيص دائم مدى الحياة لورشة واحدة (Licence Définitive à Vie)", bold: true },
    { text: "0 دج مصاريف خفية، بدون أي اشتراكات شهرية أو سنوية مقلقة للأبد", bold: true },
    { text: "يعمل 100% بدون إنترنت مع قاعدة بيانات محلية فائقة الأمان والتشفير", bold: true },
    { text: "تثبيت وإعداد كامل عن بُعد عبر AnyDesk أو تثبيت مباشر مع قاعدة بيانات جاهزة", bold: false },
    { text: "تدريب تطبيقي مخصص لك ولكافة عمال وفنيي الورشة حتى الإتقان التام", bold: false },
    { text: "قاعدة بيانات تجريبية جاهزة مسبقاً (Demo Data) للتدريب الفوري بدون عناء", bold: false },
    { text: "محرك حماية أرباح قطع الغيار وفصل Main d'œuvre وحساب تكلفة PMP", bold: true },
    { text: "نظام كود QR الذكي لفحص سريان الضمان ومنع ادعاءات الزبائن الكاذبة", bold: true },
    { text: "تحويل كاميرا الهاتف إلى قارئ QR لاسلكي عبر الـ Wi-Fi المحلي مجاناً", bold: false },
    { text: "وحدة تسيير الوكلاء المعتمدين (Agent Agréé) وتوليد كشوفات Bordereaux بضغطة زر", bold: true },
    { text: "أتمتة إرسال إشعارات الواتساب الرسمية للزبائن عند جاهزية الجهاز", bold: false },
    { text: "نظام النسخ الاحتياطي السحابي/المحلي الآلي لحماية كافة ملفاتك من الضياع", bold: false },
    { text: "دعم فني جزائري متخصص ومستمر عبر الهاتف والواتساب طيلة أيام الأسبوع", bold: true },
  ];

  const whatsappMessage = encodeURIComponent(
    "السلام عليكم، أنا مهتم بالحصول على العرض الدائم لبرنامج ANALYSE DZ • SAV MASTER v1.0.0 Enterprise (سعر العرض: 19,000 دج مدى الحياة). أرجو تزويدي بتفاصيل التثبيت والتفعيل في ورشتي."
  );

  return (
    <section id="pricing" className="py-24 relative bg-obsidian-900 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[650px] h-[450px] bg-emeraldNeon-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emeraldNeon-500/10 border border-emeraldNeon-500/30 text-emeraldNeon-400 text-xs font-bold">
            <InfinityIcon className="w-4 h-4" />
            <span>عرض التملّك الدائم - استثمر مرة واحدة وامتلكه للأبد</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            باقة المؤسسات الاحترافية الشاملة (Enterprise Edition)
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            لا تجعل ورشتك رهينة للاشتراكات الشهرية المتكررة.. احصل على نسختك المرخصة رسمياً الآن مع كافة الملحقات والتدريب والتثبيت المجاني.
          </p>
        </div>

        {/* Pricing Card Master Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-emeraldNeon-500 via-cyanElectric-400 to-emeraldNeon-600 shadow-2xl">
            
            <div className="rounded-[22px] bg-obsidian-950 p-6 sm:p-10 border border-slate-800">
              
              {/* Top Banner Ribbon */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-800">
                <div className="space-y-1 text-center sm:text-right">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-2xl sm:text-3xl font-black text-white font-tajawal">
                      SAV MASTER v1.0.0 Enterprise
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emeraldNeon-500/15 text-emeraldNeon-400 border border-emeraldNeon-500/30 font-bold text-xs">
                      ترخيص دائم
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">
                    الحزمة المتكاملة لكافة ورشات الصيانة ومراكز SAV المعتمدة في الجزائر
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-center sm:text-left bg-obsidian-900/90 p-4 rounded-2xl border border-slate-800 w-full sm:w-auto">
                  <div className="flex items-center gap-2 justify-center sm:justify-end">
                    <span className="text-xs text-slate-500 line-through font-mono">38,000 دج</span>
                    <span className="text-xs font-bold text-amberGold-400 bg-amberGold-500/10 px-2 py-0.5 rounded border border-amberGold-500/30">
                      خصم 50% (وفر 19,000 دج)
                    </span>
                  </div>
                  <div className="text-3xl sm:text-5xl font-black font-mono text-emeraldNeon-400 mt-1">
                    19,000 <span className="text-base sm:text-lg font-bold text-white">دج</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                    دفعة واحدة فقط • ترخيص دائم مدى الحياة (0 دج اشتراك)
                  </div>
                </div>
              </div>

              {/* Free Bonuses Included */}
              <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-emeraldNeon-950/40 via-obsidian-900 to-cyanElectric-950/40 border border-emeraldNeon-500/30 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="p-2 rounded-lg bg-emeraldNeon-500/10 text-emeraldNeon-400 shrink-0">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">تثبيت وإعداد مجاني</span>
                    <span className="text-slate-400 text-[11px]">عن بُعد عبر AnyDesk</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="p-2 rounded-lg bg-cyanElectric-500/10 text-cyanElectric-400 shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">قاعدة تجريبية جاهزة</span>
                    <span className="text-slate-400 text-[11px]">للتدريب المباشر فوراً</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="p-2 rounded-lg bg-amberGold-500/10 text-amberGold-400 shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">دعم ومرافقة مستمرة</span>
                    <span className="text-slate-400 text-[11px]">مرافقة خطوة بخطوة</span>
                  </div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  كل ما تتضمنه نسختك المرخصة:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${feat.bold ? 'text-emeraldNeon-400' : 'text-cyanElectric-400'}`} />
                      <span className={`${feat.bold ? 'font-bold text-white' : 'text-slate-300'}`}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* WhatsApp Direct Buy Button */}
                  <a
                    href={`https://wa.me/213676067652?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gradient-to-r from-emeraldNeon-500 to-emeraldNeon-400 hover:from-emeraldNeon-400 hover:to-emeraldNeon-300 text-obsidian-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-neon-emerald transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-5 h-5 fill-obsidian-950" />
                    <span>اطلب عبر WhatsApp فوراً (0676067652)</span>
                  </a>

                  {/* Direct Phone Call Button */}
                  <a
                    href="tel:0676067652"
                    className="p-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-cyanElectric-400 flex items-center justify-center gap-2.5 transition-all"
                  >
                    <PhoneCall className="w-5 h-5 text-cyanElectric-400" />
                    <span>اتصال هاتفي مباشر: <span className="font-mono dir-ltr font-bold text-cyanElectric-400">0676 06 76 52</span></span>
                  </a>

                </div>

                {/* Order Form Modal trigger */}
                <div className="text-center pt-2">
                  <button
                    onClick={onOpenOrderModal}
                    className="text-xs text-slate-400 hover:text-emeraldNeon-400 underline decoration-slate-600 transition-colors"
                  >
                    أو اضغط هنا لملء استمارة الطلب السريع وسنتصل بك لتأكيد التثبيت
                  </button>
                </div>
              </div>

              {/* Guarantee Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
                <span className="flex items-center gap-1.5 text-emeraldNeon-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ضمان الرضا وتوافق البرنامج 100% مع نشاط ورشتك</span>
                </span>
                <span>•</span>
                <span>تفعيل فوري خلال دقائق بعد الشراء</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
