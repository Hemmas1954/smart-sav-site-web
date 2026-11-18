import React from 'react';
import { 
  ShieldCheck, 
  QrCode, 
  Award, 
  Workflow, 
  Smartphone, 
  MessageSquare, 
  ArrowRight, 
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';

export default function KillerPillars() {
  const pillars = [
    {
      id: "profit-engine",
      number: "01",
      icon: ShieldCheck,
      badge: "Protection Financière & PMP",
      badgeColor: "text-emeraldNeon-400 border-emeraldNeon-500/30 bg-emeraldNeon-500/10",
      title: "محرك حماية الأرباح الصارم وعزل عمولات الفنيين",
      headline: "لا تدفع أبداً عمولة لفني من ثمن قطع الغيار الباهظة!",
      description: "يفصل النظام رياضياً وبشكل تلقائي بين أجرة اليد (Main d'œuvre) التي تُحسب عليها عمولة الفني بالعدل، وبين ثمن قطع الغيار (Pièces de Rechange) التي تذهب أرباحها 100% لصاحب الورشة. كما يطبق معيار PMP (Prix Moyen Pondéré) لضبط التكلفة الحقيقية لقطع الغيار بدقة دون سنتيم ضائع.",
      bullets: [
        "عزل ثمن الشاشات والضواغط وكروت الأم عن وعاء العمولة",
        "حساب التكلفة بدقة PMP حسب تقلبات أسعار الشراء بالعلمة والحميز",
        "تقارير حسابات فورية لكل فني بنقرة زر دون أخطاء محاسبية"
      ],
      glow: "hover:border-emeraldNeon-500/50 hover:shadow-neon-emerald"
    },
    {
      id: "qr-warranty",
      number: "02",
      icon: QrCode,
      badge: "Scanner QR & Garantie",
      badgeColor: "text-cyanElectric-400 border-cyanElectric-500/30 bg-cyanElectric-500/10",
      title: "محطة كود QR الذكية لفحص الضمان ومكافحة الادعاءات",
      headline: "مسحة واحدة تنهي نقاشات ونزاعات الضمان في ثانيتين!",
      description: "كل وصل أو فاتورة يُطبع عليها كود QR ذكي ومفرّد. عندما يعود الزبون بمرور شهور، يكفي توجيه الهاتف أو قارئ الباركود نحو الكود ليظهر البرنامج فوراً: هل الجهاز ما زال تحت الضمان (Sous Garantie) مع عدد الأيام المتبقية، أم أنه خارج الضمان (Hors Garantie) مع تاريخ الانتهاء الصريح بالدليل القاطع.",
      bullets: [
        "كشف فوري للأيام المتبقية أو المنتهية بالأرقام والتواريخ",
        "منع الإصلاحات المجانية غير المستحقة التي تكبدك خسائر فادحة",
        "توثيق القطع التي تم استبدالها بالضبط لمنع تبديل الأجهزة أو التلاعب"
      ],
      glow: "hover:border-cyanElectric-400/50 hover:shadow-cyan-glow"
    },
    {
      id: "agents",
      number: "03",
      icon: Award,
      badge: "Agent Agréé PRO",
      badgeColor: "text-amberGold-400 border-amberGold-500/30 bg-amberGold-500/10",
      title: "نظام الوكلاء المعتمدين وتسيير عقود المصانع والشركات",
      headline: "إدارة عقود IRIS, Condor, Brandt, Geant, Samsung كالمحترفين",
      description: "وحدة متخصصة لمراكز الخدمة المعتمدة؛ تمكنك من متابعة أرقام الشاسيه (Numéro de Série) وشهادات الضمان المصنعية، وتسيير قطع الأمانة (Consignation) الممنوحة من الشركات دون اختلاطها بقطع الورشة، مع استخراج كشوفات المطالبات الشهرية (Bordereaux de facturation) بـ PDF و Excel بضغطة زر واحدة.",
      bullets: [
        "توليد كشوفات Bordereau رسمية مطابقة لشروط مصانع الأجهزة",
        "تتبع دقيق لقطع الأمانة المستهلكة والمتبقية في مخزنك",
        "توفير 3 إلى 5 أيام من الحسابات اليدوية المعقدة كل شهر"
      ],
      glow: "hover:border-amberGold-500/50 hover:shadow-neon-gold"
    },
    {
      id: "kanban",
      number: "04",
      icon: Workflow,
      badge: "Workflow 6-Stages",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      title: "مسار كانبان الذكي لإدارة العمليات وسرعة الإنجاز",
      headline: "تتبع حالة كل جهاز من لحظة الاستقبال حتى تسليم المفاتيح",
      description: "لوحة تحكم تفاعلية مريحة للعين تنظم العمل في 6 مراحل: (استقبال ← تشخيص ← انتظار قطع ← قيد الصيانة ← جاهز للتسليم ← تم التسليم). توزع المهام على الفنيين بنقرة زر، وتمنع تراكم الأجهزة المنسية لشهور عبر منبهات بصرية ذكية للأجهزة التي تجاوزت المهلة المحددة.",
      bullets: [
        "طباعة وصولات استلام فورية A4 و A5 وتذاكر حرارية 80mm",
        "توليد ملصقات باركود حرارية للصقها مباشرة على شاسيه الجهاز",
        "تنبيهات فورية للأجهزة المتأخرة لمنع تذمر وغضب الزبائن"
      ],
      glow: "hover:border-purple-500/50 hover:shadow-glass"
    },
    {
      id: "mobile-wifi",
      number: "05",
      icon: Smartphone,
      badge: "Mobile Wi-Fi Bridge",
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      title: "تحويل كاميرا الهاتف إلى قارئ QR لاسلكي للكمبيوتر",
      headline: "وفّر ثمن أجهزة القراءة الباهظة وتخلص من الأسلاك المتشابكة!",
      description: "بفضل تقنية الربط الشبكي الداخلي المبتكرة، يستطيع الفني أو موظف الاستقبال فتح كاميرا هاتفه عبر متصفح الويب وربطه ببرنامج الكمبيوتر عبر شبكة الـ Wi-Fi المحلية فوراً. أي كود QR أو باركود يتم مسحه بالهاتف يُدخل تلقائياً في شاشة الكمبيوتر في أجزاء من الثانية دون كابلات ودون إنترنت.",
      bullets: [
        "يعمل محلياً بالكامل عبر Wi-Fi الورشة دون الحاجة لإنترنت خارجي",
        "حرية الحركة الكاملة داخل الورشة لفحص الأجهزة الكبيرة والضخمة",
        "لا حاجة لشراء Douchette إضافية باهظة الثمن"
      ],
      glow: "hover:border-blue-500/50 hover:shadow-glass"
    },
    {
      id: "whatsapp-auto",
      number: "06",
      icon: MessageSquare,
      badge: "WhatsApp SAV Automation",
      badgeColor: "text-emeraldNeon-400 border-emeraldNeon-500/30 bg-emeraldNeon-500/10",
      title: "أتمتة خدمة الزبائن ورسائل الواتساب الرسمية بنقرة واحدة",
      headline: "ودّع المكالمات الهاتفية المتكررة: «هل جهازي جاهز يا معلم؟»",
      description: "بمجرد تحويل الجهاز إلى مرحلة 'جاهز للتسليم'، يتيح لك البرنامج إرسال رسالة واتساب رسمية منسقة للزبون بضغطة زر، تتضمن رقم الملف، اسم جهازه، المبلغ المطلوب تسديده، ومدة الضمان الممنوحة. خدمة زبائن تماثل كبرى الشركات العالمية وتعطي لورشتك سمعة راقية واحترافية.",
      bullets: [
        "تقليل 80% من المكالمات الهاتفية التي تقطع عمل الفنيين",
        "تسريع استلام الزبائن لأجهزتهم لتحرير المساحة واسترجاع السيولة",
        "إمكانية إرسال تفاصيل الفاتورة الإلكترونية مباشرة للزبون"
      ],
      glow: "hover:border-emeraldNeon-500/50 hover:shadow-neon-emerald"
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-obsidian-900 overflow-hidden">
      
      {/* Background Subtle Light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emeraldNeon-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyanElectric-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emeraldNeon-500/10 border border-emeraldNeon-500/30 text-emeraldNeon-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الأعمدة الستة التي تجعل الشراء قراراً بديهياً</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            مميزات خارقة صُممت خصيصاً لتلائم ورشات الصيانة في الجزائر
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            لم نقم بتعريب برامج أجنبية عامة، بل بنينا نظاماً دقيقاً يفهم عقلية الزبون الجزائري، واقع السوق، وأساليب تعامل الوكلاء والمصانع.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`relative rounded-2xl p-6 sm:p-7 glass-card transition-all duration-300 flex flex-col justify-between group ${pillar.glow}`}
              >
                {/* Top bar in card */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-850 border border-slate-700/80 flex items-center justify-center text-slate-200 group-hover:scale-110 group-hover:border-emeraldNeon-400 transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6 text-emeraldNeon-400" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-slate-500 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emeraldNeon-300 transition-colors font-tajawal">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-semibold text-cyanElectric-300">
                    {pillar.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emeraldNeon-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
