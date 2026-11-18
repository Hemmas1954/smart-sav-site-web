import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertOctagon, 
  Sparkles, 
  FileX, 
  TrendingDown, 
  History, 
  Archive, 
  Calculator,
  Kanban,
  Coins,
  QrCode,
  MessageSquare,
  Lock
} from 'lucide-react';

export default function PainVsGain() {
  const pains = [
    {
      icon: FileX,
      title: "سجلات ورقية ممزقة ووصولات ضائعة",
      desc: "تراكم الدفاتر والوصولات الكاربونية الممزقة يجعلك تبحث بالساعات عن ملف الزبون، مما يسبب الإحراج وفقدان هيبة واحترافية ورشتك."
    },
    {
      icon: TrendingDown,
      title: "احتساب عمولة الفني على إجمالي الفاتورة",
      desc: "أكبر نزيف مالي! احتساب نسبة الفني على ثمن قطع الغيار الباهظة (مثل الشاشات والضواغط) يبتلع رأس مالك ويحول أرباحك إلى خسائر مقنعة."
    },
    {
      icon: History,
      title: "زبائن يدعون كذباً أن الجهاز ما زال في الضمان",
      desc: "زبون يعود بعد 6 أو 8 أشهر ويدعي أنه صلح الجهاز الشهر الماضي ويطالب بإصلاح مجاني، دون وسيلة ملموسة لإثبات تاريخ انتهاء الضمان."
    },
    {
      icon: Archive,
      title: "تراكم الأجهزة المنسية لأشهر في الورشة",
      desc: "أجهزة مصلحة ومتروكة منذ أشهر دون أن يتسلمها أصحابها، مما يعطل مساحة الورشة ويجمد أموال قطع الغيار التي دفعتها من جيبك."
    },
    {
      icon: Calculator,
      title: "حسابات يدوية معقدة لكشوفات الشركات والمصانع",
      desc: "إضاعة أيام كاملة في نهاية كل شهر لمطابقة أرقام الشاسيه وفواتير شركات الأجهزة المعتمدة، مع أخطاء مستمرة تؤخر صرف مستحقاتك."
    }
  ];

  const gains = [
    {
      icon: Kanban,
      title: "تتبع لحظي من الاستقبال حتى التسليم بلوحة كانبان",
      desc: "تعرف حالة كل جهاز في ورشتك بلمحة بصر: من استلمه، من يشخصه، ما هي القطع المطلوبة، ومتى يجهز مع طباعة وصولات مشفرة فورية."
    },
    {
      icon: Coins,
      title: "فصل آلي قاطع: عمولة اليد فقط وأرباح القطع لك 100%",
      desc: "المعادلة الذهبية: الفني يأخذ نسبته من أجرة اليد (Main d'œuvre) فقط، وأرباح قطع الغيار تصب كاملة في خزينة الورشة لحماية أرباحك الصافية."
    },
    {
      icon: QrCode,
      title: "كود QR على كل فاتورة: مسحة واحدة تكشف الضمان",
      desc: "مسح سريع بكاميرا الهاتف أو القارئ يظهر فورياً: هل الجهاز ساري المفعول (Sous Garantie) أو منتهي بالأيام والتاريخ بالدليل القاطع."
    },
    {
      icon: MessageSquare,
      title: "رسائل WhatsApp آلية وتنبيهات فورية للزبائن",
      desc: "بمجرد جاهزية الجهاز يضغط الفني زراً واحداً لتصل الزبون رسالة واتساب رسمية فيها رقم الملف وتفاصيل الفاتورة وموعد الاستلام."
    },
    {
      icon: Lock,
      title: "تقارير أرباح صافية مشفرة بـ PIN لا يراها إلا المدير",
      desc: "خزينة حساباتك وأرباحك اليومية والشهرية وتكاليف المخزون PMP محمية برمز سري مشفر، لتبقى أسرار ورشتك في يدك وحدك."
    }
  ];

  return (
    <section className="py-20 relative bg-obsidian-950 border-t border-slate-800/80">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emeraldNeon-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
            <AlertOctagon className="w-3.5 h-3.5 text-amberGold-400" />
            <span>مواجهة الواقع المعاش في ورشات الصيانة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            الفرق بين ورشة تغرق في الفوضى وورشة تجني الأرباح باحترافية
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            النجاح في مهنة الصيانة ليس فقط في مهارة الإصلاح، بل في طريقة إدارة الورشة وحماية أموالك من الضياع والتسريب اليومي.
          </p>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* THE PAIN COLUMN (Traditional Workshop) */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-red-950/20 via-obsidian-900 to-obsidian-950 border border-red-500/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-red-500/20">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    الطريقة التقليدية القديمة
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 font-tajawal">
                    <span className="text-red-400">❌ الورشة بدون SAV MASTER</span>
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {pains.map((pain, idx) => {
                  const Icon = pain.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl bg-obsidian-900/80 border border-red-500/15 hover:border-red-500/30 transition-all flex items-start gap-3.5 group"
                    >
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-100 font-tajawal">
                          {pain.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {pain.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-4 border-t border-red-500/20 text-xs text-red-300/80 flex items-center gap-2 font-semibold">
              <span>⚠️ النتيجة: إرهاق ذهني، خسائر في قطع الغيار، ونزاعات متكررة مع الزبائن.</span>
            </div>
          </div>

          {/* THE GAIN COLUMN (Smart Workshop with SAV MASTER) */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-emeraldNeon-950/30 via-obsidian-900 to-obsidian-950 border-2 border-emeraldNeon-500/50 shadow-neon-emerald flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-emeraldNeon-500/30">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-emeraldNeon-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    النظام الحديث الأكثر ربحية وتنظيماً
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 font-tajawal">
                    <span className="text-emeraldNeon-400">✅ الورشة الذكية مع SAV MASTER</span>
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-emeraldNeon-500/20 border border-emeraldNeon-500/40 text-emeraldNeon-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {gains.map((gain, idx) => {
                  const Icon = gain.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl bg-obsidian-900/90 border border-emeraldNeon-500/25 hover:border-emeraldNeon-400/60 transition-all flex items-start gap-3.5 group shadow-inner"
                    >
                      <div className="p-2 rounded-lg bg-emeraldNeon-500/15 text-emeraldNeon-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-tajawal">
                          {gain.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {gain.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-4 border-t border-emeraldNeon-500/30 text-xs text-emeraldNeon-300 flex items-center gap-2 font-bold">
              <span>🚀 النتيجة: راحة بال تامة، أرباح مضاعفة، وثقة مطلقة لدى زبائنك والشركات.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
