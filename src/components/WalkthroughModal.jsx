import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Laptop, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function WalkthroughModal({ isOpen, onClose, onOpenOrder }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: "1. لوحة التحكم المركزية والصندوق",
      subtitle: "متابعة المداخيل، الأجهزة النشطة، والديون لحظة بلحظة",
      description: "توفر الشاشة الرئيسية نظرة شاملة على نشاط لاتيلي اليومي والشهري: إجمالي المقبوضات النقدية، تحويلات BaridiMob، أجرة اليد العاملة، وأرباح قطع الغيار المحمية، مع إحصائيات الأجهزة الجاهزة للتسليم والأجهزة قيد الانتظار.",
      highlights: [
        "إحصائيات الصندوق وأجرة اليد العاملة الحقيقية",
        "متابعة مجموع ديون الزبائن المعلقة (الكريدي)",
        "تتبع حالة الأجهزة النشطة بالورشة حسب المحطة"
      ]
    },
    {
      title: "2. مسار كانبان بـ 6 مراحل وإشعارات WhatsApp",
      subtitle: "اعرف وين راه كل جهاز وتخلص من المكالمات المتكررة",
      description: "تتحرك الأجهزة عبر مسار مرئي واضح: 1. استقبال، 2. تشخيص، 3. انتظار قطع الغيار، 4. قيد الصيانة، 5. جاهز للتسليم، 6. تم التسليم؛ مع إمكانية تحويل الحالة بنقرة زر وتجهيز رسالة واتساب تلقائية للزبون بمجرد جاهزية جهازه.",
      highlights: [
        "تعيين كل جهاز للتقني المختص بمجرد انتهاء التشخيص",
        "تنبيه التقني في حال توفر قطع الغيار المطلوبة للجهاز",
        "إرسال إشعار WhatsApp فوري للزبون عند اكتمال التصليح"
      ]
    },
    {
      title: "3. المسح المزدوج للضمان (Dual-Scan)",
      subtitle: "مطابقة الوصل والسيريال لمنع التلاعب وحسم النزاعات",
      description: "مسح كود QR المطبوع على وصل الاستلام ومقارنته بالسيريال المسجل على الجهاز الفعلي. إذا اكتشف النظام أي اختلاف في البيانات أو محاولة استغلال وصل لجهاز آخر، يظهر تنبيه فوري بالأحمر لمراجعة الحالة قبل اتخاذ القرار.",
      highlights: [
        "كشف فوري لتاريخ الصيانة السابقة وفترة الضمان المتبقية",
        "تنبيه بارز في حال عدم تطابق السيريال (Mismatch Warning)",
        "حماية الورشة من تقديم تصليحات مجانية لأجهزة انتهى ضمانها"
      ]
    },
    {
      title: "4. فصل قطع الغيار وعمولات التقنيين",
      subtitle: "حساب عمولة التقني على العمل فقط مع كشف راتب A4 للتوقيع",
      description: "يقوم النظام رياضياً بحساب عمولة التقني على بند أجرة اليد العاملة الصافية (Main d'œuvre) فقط، دون المساس برأس مال قطع الغيار أو هامش ربح الورشة فيها، مع إمكانية طباعة كشف الراتب الشهري بصيغة A4 ليوقع عليه التقني.",
      highlights: [
        "تحديد نسبة عمولة مخصصة لكل تقني في الورشة",
        "كشف راتب شهري رسمي شفاف يوقع عليه التقني لتفادي الخلافات",
        "حساب متوسط سعر شراء القطع PMP لمنع الخسائر"
      ]
    },
    {
      title: "5. تسيير ديون الزبائن ودفعات BaridiMob",
      subtitle: "الكريدي ما يبقاش ضايع بين أوراق الدفاتر",
      description: "يجمع النظام كافة مستحقات الزبون في حساب واحد حتى لو جلب عدة أجهزة في أوقات متفرقة، مع تسجيل الدفعات النقدية وتحويلات BaridiMob وإمكانية طباعة كشف حساب واضح أو إرسال تذكير مهذب عبر واتساب.",
      highlights: [
        "تتبع دقيق لكل دفعة نقدية أو رقم تحويل BaridiMob",
        "طباعة كشف حساب مفصل بالمبالغ المسددة والمتبقية",
        "إرسال تذكير مهذب للزبون برصيده المتبقي بنقرة زر"
      ]
    },
    {
      title: "6. كاميرا الهاتف اللاسلكية عبر Wi-Fi المحلي",
      subtitle: "مسح الباركود وتصوير حالة الجهاز بدون كابلات وبدون إنترنت",
      description: "ربط الهاتف بالكمبيوتر مباشرة عبر شبكة Wi-Fi المحلية بالورشة؛ يمكنك استعمال كاميرا الهاتف لمسح أرقام السيريال وتصوير كسور الشاشات وحالة الجهاز عند الاستلام وحفظها مباشرة داخل ملف الصيانة بالحاسوب.",
      highlights: [
        "يعمل محلياً بالكامل دون الحاجة لأي إنترنت خارجي",
        "توثيق حالة الجهاز بالصور عند الاستلام لحماية الورشة",
        "توفير ثمن قارئ الباركود السلكي واستبداله بهاتفك"
      ]
    }
  ];

  const s = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0D1B30] border border-sav-border rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-lg bg-[#091426] border border-sav-border text-slate-400 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Indicator */}
        <div className="flex items-center justify-between pb-4 border-b border-sav-border mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
            <Laptop className="w-4 h-4" />
            <span>جولة إمكانيات النظام: المحطة {currentStep + 1} من {steps.length}</span>
          </div>

          <div className="flex items-center gap-1">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentStep ? 'w-6 bg-[#10B981]' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-alexandria mb-1">
              {s.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#10B981] font-medium">
              {s.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#091426] p-4 rounded-xl border border-sav-border">
            {s.description}
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-400 block">أبرز الفوائد في هذا القسم:</span>
            {s.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-8 pt-5 border-t border-sav-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="p-2.5 rounded-lg bg-[#091426] border border-sav-border text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="السابق"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="p-2.5 rounded-lg bg-[#091426] border border-sav-border text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="التالي"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenOrder();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>طلب البرنامج لورشتك</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
