import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Monitor, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  QrCode, 
  Award, 
  Sparkles,
  Play
} from 'lucide-react';

export default function SoftwareTourModal({ isOpen, onClose, onOpenOrderModal }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: "1. شاشة استقبال الأجهزة وإنشاء الوصل الرسمي",
      badge: "Réception & Bon d'entrée",
      desc: "تسجيل بيانات الزبون، نوع الجهاز، العطل المشخص، والملحقات المرفقة في أقل من 20 ثانية، مع إمكانية طباعة وصل A4, A5 أو Ticket حراري فوري عليه كود QR ورقم الشاسيه.",
      features: [
        "إدخال سريع برقم هاتف الزبون واسترجاع بياناته تلقائياً",
        "تحديد سقف التكلفة التقريبية بالاتفاق مع الزبون",
        "طباعة ملصق الباركود للصقه على ظهر الجهاز"
      ],
      previewContent: {
        windowTitle: "SAV MASTER • نافذة استقبال جهاز جديد",
        box1Title: "بيانات الزبون والجهاز",
        box1Items: ["الزبون: كمال الدين سلطاني", "الجهاز: تلفاز Samsung 50\" QLED", "العطل: ينطفئ بعد 10 دقائق من التشغيل"],
        box2Title: "الوصل والمطبوعات",
        box2Items: ["رقم الوصل: #SAV-2026-104", "كود QR الضمان: تم التوليد بنجاح", "الطابعة: Ticket Thermique 80mm"]
      }
    },
    {
      title: "2. لوحة كانبان الذكية لإدارة مسار الورشة (6 مراحل)",
      badge: "Workflow Kanban",
      desc: "لوحة بصرية مريحة تلخص حالة كل جهاز في ورشتك؛ يستطيع الفني سحب وإفلات البطاقة أو تغيير حالتها بنقرة واحدة من هاتفه أو الحاسوب.",
      features: [
        "توزيع المهام وتعيين الفني المسؤول عن كل جهاز",
        "تنبيهات للأجهزة المتأخرة لتجنب غضب الزبائن",
        "إحصائيات فورية لعدد الأجهزة الجاهزة للتسليم"
      ],
      previewContent: {
        windowTitle: "SAV MASTER • لوحة كانبان التفاعلية",
        box1Title: "مراحل المسار النشط",
        box1Items: ["استقبال (3) | تشخيص (5)", "انتظار قطع (2) | قيد الصيانة (7)", "جاهز للتسليم (12) | تم التسليم (142)"],
        box2Title: "مؤشرات الإنجاز",
        box2Items: ["متوسط مدة الصيانة: 1.8 يوم", "أجهزة جاهزة اليوم: 4 أجهزة", "نسبة رضا الزبائن: 99.2%"]
      }
    },
    {
      title: "3. محرك حماية الأرباح الصارم وحساب تكلفة الـ PMP",
      badge: "Protection Financière & PMP",
      desc: "يفصل رياضياً بين أجرة اليد التي يحسب عليها الفني نسبته، وبين ثمن قطع الغيار التي تعود أرباحها كاملة لصاحب الورشة.",
      features: [
        "منع نزيف العمولات على الشاشات والضواغط باهظة الثمن",
        "حساب تكلفة المخزون بمعيار PMP عند تقلب أسعار الشراء",
        "تقارير مشفرة برمز PIN لا يراها إلا صاحب الورشة"
      ],
      previewContent: {
        windowTitle: "SAV MASTER • الخزينة وتقارير الأرباح الصافية",
        box1Title: "المعادلة المحاسبية المطبقة",
        box1Items: ["إجمالي الفاتورة: 25,000 دج", "قطع غيار: 19,000 دج (0% عمولة مسربة)", "أجرة اليد: 6,000 دج (وعاء العمولة)"],
        box2Title: "صافي الأرباح المحمية",
        box2Items: ["عمولة الفني (30% من اليد): 1,800 دج", "ربح الورشة الصافي: 23,200 دج", "حالة الصندوق: متطابق بالسنتيم"]
      }
    },
    {
      title: "4. فاحص كود QR للضمان ومكافحة التلاعب",
      badge: "Scanner QR & Anti-Fraude",
      desc: "مسح كود QR المطبوع على الوصل القديم يكشف فوراً هل الجهاز مشمول بالضمان مع الأيام المتبقية أم منتهي الصلاحية، لإنهاء ادعاءات الزبائن بالدليل الملموس.",
      features: [
        "كشف فوري لعدد الأيام المتبقية أو المنتهية",
        "عرض القطع المصلحة سابقاً لمنع تكرار الإصلاح المجاني لأعطال جديدة",
        "يعمل بكاميرا الهاتف عبر الـ Wi-Fi أو بقارئ الباركود"
      ],
      previewContent: {
        windowTitle: "SAV MASTER • فاحص كود QR للضمان",
        box1Title: "نتيجة المسح الفوري",
        box1Items: ["الحالة: 🟢 Sous Garantie", "متبقي في الضمان: 42 يوماً", "تاريخ الانتهاء: 28 ديسمبر 2026"],
        box2Title: "سجل العمليات السابق",
        box2Items: ["تاريخ الإصلاح: 28 سبتمبر 2026", "القطعة المستبدلة: شريط ليد كوندور", "الفني المنفذ: أمين تبريد"]
      }
    },
    {
      title: "5. مركز الوكلاء المعتمدين والمطالبات (Bordereaux)",
      badge: "Agent Agréé PRO",
      desc: "تسيير عقود Condor, Brandt, IRIS, Samsung وغيرها، ومتابعة قطع الأمانة واستخراج كشوفات الفوترة الشهرية بـ Excel و PDF بضغطة زر.",
      features: [
        "فصل قطع الأمانة المصنعية عن قطع الورشة الخاصة",
        "إلزامية مطابقة أرقام الشاسيه وبطاقات الضمان",
        "تصدير جداول المطالبات المعتمدة لدى إدارات المصانع"
      ],
      previewContent: {
        windowTitle: "SAV MASTER • وحدة الوكلاء وكشوفات Bordereaux",
        box1Title: "ملف شركة Brandt Algérie",
        box1Items: ["عدد الملفات المنجزة: 38 ملفاً", "قطع أمانة مستهلكة: 41 قطعة", "مجموع أجرة اليد المطالب بها: 215,000 دج"],
        box2Title: "التصدير والطباعة",
        box2Items: ["تصدير كشف Excel: جاهز للتحميل", "كشف PDF مع الختم: جاهز للطباعة", "حالة الدفع من المصنع: قيد التسوية"]
      }
    }
  ];

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-obsidian-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-obsidian-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emeraldNeon-500/10 border border-emeraldNeon-500/30 flex items-center justify-center text-emeraldNeon-400">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-tajawal">
                جولة داخل برنامج ANALYSE DZ • SAV MASTER
              </div>
              <div className="text-[11px] text-slate-400">
                استعراض الواجهات والميزات الأساسية خطوة بخطوة
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-obsidian-850 text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="bg-obsidian-950/50 px-4 sm:px-6 py-2 border-b border-slate-800/80 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar touch-scroll flex-nowrap text-xs">
          {steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition-all text-xs ${
                currentStep === idx
                  ? 'bg-emeraldNeon-500 text-obsidian-950 shadow-neon-emerald'
                  : 'bg-obsidian-850 text-slate-400 hover:text-slate-200'
              }`}
            >
              الواجهة {idx + 1}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyanElectric-500/10 text-cyanElectric-400 border border-cyanElectric-500/30">
              {current.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-tajawal">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Interactive Screen Simulation Frame */}
          <div className="rounded-2xl bg-obsidian-950 border border-slate-700/80 overflow-hidden shadow-inner">
            <div className="bg-obsidian-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-slate-200 font-bold">{current.previewContent.windowTitle}</span>
              <span className="text-emeraldNeon-400">Offline ERP Active</span>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-obsidian-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-cyanElectric-400 pb-1 border-b border-slate-800 font-cairo">
                  {current.previewContent.box1Title}
                </div>
                {current.previewContent.box1Items.map((item, iIdx) => (
                  <div key={iIdx} className="text-slate-300 font-cairo text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyanElectric-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-obsidian-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-emeraldNeon-400 pb-1 border-b border-slate-800 font-cairo">
                  {current.previewContent.box2Title}
                </div>
                {current.previewContent.box2Items.map((item, iIdx) => (
                  <div key={iIdx} className="text-slate-300 font-cairo text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emeraldNeon-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bullet Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              أهم المزايا في هذه الواجهة:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {current.features.map((feat, fIdx) => (
                <div key={fIdx} className="p-2.5 rounded-xl bg-obsidian-850 border border-slate-800 text-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emeraldNeon-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-obsidian-950 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 disabled:opacity-40 text-slate-200 text-xs font-bold flex items-center gap-1 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              disabled={currentStep === steps.length - 1}
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 disabled:opacity-40 text-slate-200 text-xs font-bold flex items-center gap-1 transition-all"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenOrderModal();
            }}
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emeraldNeon-500 to-cyanElectric-400 text-obsidian-950 font-black text-xs sm:text-sm shadow-neon-emerald hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>احجز بـ 19,000 دج</span>
          </button>
        </div>

      </div>

    </div>
  );
}
