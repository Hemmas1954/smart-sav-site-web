import React from 'react';
import { 
  FileText, 
  Boxes, 
  ShieldCheck, 
  QrCode, 
  Building2, 
  Users, 
  Wallet, 
  DatabaseBackup 
} from 'lucide-react';

export default function SolutionGrid() {
  const modules = [
    {
      id: 'A',
      icon: FileText,
      title: "إدارة ملفات الصيانة",
      desc: "تسجيل كل جهاز ببياناته ورقم تتبعه، تدوين الأعطال والملاحظات، ومتابعة حالة الجهاز عبر مسار كانبان من الاستقبال حتى التسليم.",
      tag: "تتبع متكامل"
    },
    {
      id: 'B',
      icon: Boxes,
      title: "إدارة المخزون وقطع الغيار",
      desc: "متابعة حركة القطع (دخول/خروج/ربط بملف)، مع حساب تلقائي للمتوسط المرجح لأسعار الشراء (PMP) وتنبيهات نفاد المخزون.",
      tag: "حساب PMP"
    },
    {
      id: 'C',
      icon: ShieldCheck,
      title: "محرك العمولات وحماية الأرباح",
      desc: "فصل رياضي صارم بين ثمن قطعة الغيار وأجرة اليد العاملة، لضمان حساب عمولة الفني على مجهوده فقط دون اقتطاع من رأسمال القطع.",
      tag: "حماية رأس المال"
    },
    {
      id: 'D',
      icon: QrCode,
      title: "فحص الضمان بواسطة QR",
      desc: "توليد كود QR مطبوع على وصل الزبون؛ يكفي مسحه لمعرفة هل الجهاز تحت الضمان (Sous Garantie) وتاريخ انتهائه فورياً.",
      tag: "فحص فوري"
    },
    {
      id: 'E',
      icon: Building2,
      title: "الوكلاء المعتمدون والشركات",
      desc: "تسيير ملفات عقود المصانع، قطع الأمانة (Consignation)، واستخراج كشوفات المطالبات والفوترة (Bordereaux) بنقرة زر واحدة.",
      tag: "Agent Agréé"
    },
    {
      id: 'F',
      icon: Users,
      title: "إدارة الفنيين",
      desc: "توزيع الأجهزة على الفنيين حسب التخصص، تسجيل الأداء الفردي، وحساب مستحقات العمولات لكل فني بشفافية ودقة.",
      tag: "تسيير الفرق"
    },
    {
      id: 'G',
      icon: Wallet,
      title: "الحسابات والصندوق",
      desc: "متابعة المقبوضات اليومية، الدفعات الجزئية، التسبيقات، وتكاليف المصاريف العامة لمعرفة الربح الصافي للورشة لحظة بلحظة.",
      tag: "رؤية مالية"
    },
    {
      id: 'H',
      icon: DatabaseBackup,
      title: "النسخ الاحتياطي والاستعادة",
      desc: "تخزين البيانات محلياً داخل جهازك في قاعدة مشفرة مع إمكانية أخذ نسخة احتياطية (Backup) ونقلها بكل سهولة عند تغيير الحاسوب.",
      tag: "أمان محلي"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#030914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E699]/10 border border-[#00E699]/20 text-[#00E699] text-xs font-semibold">
            <span>الوحدات الأساسية للنظام</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            نظام واحد يجمع عمليات ورشتك في مكان واحد.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            تم بناء كل وحدة لتغطي مرحلة حقيقية في إدارة ورشة الصيانة الحديثة، دون تعقيد أو إضافات لا تحتاجها.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="group bg-[#0A1A33] border border-sav-border rounded-xl p-5 transition-all duration-200 hover:border-[#00E699]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#071326] border border-sav-border flex items-center justify-center text-[#00E699] group-hover:text-[#00F5FF] group-hover:border-[#00F5FF]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#071326] text-slate-400 border border-sav-border">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00E699] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
