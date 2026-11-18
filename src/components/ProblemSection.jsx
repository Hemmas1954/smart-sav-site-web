import React from 'react';
import { 
  FileQuestion, 
  CreditCard, 
  Calculator, 
  PhoneCall, 
  ArrowDown, 
  AlertTriangle 
} from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      number: "01",
      icon: FileQuestion,
      title: "أجهزة تضيع بين مراحل التصليح، وما تعرفش وين وصل كل جهاز.",
      description: "يدخل الجهاز لاتيلي، يقعد في ركن بين الأجهزة الأخرى، وتنسى هل تم فحصه، أو بانتظار قطعة غيار، أو جاهز للتسليم، ما يخلق ضغطاً يومياً وحرجاً كبيراً مع الزبائن.",
      badge: "فوضى المتابعة"
    },
    {
      number: "02",
      icon: CreditCard,
      title: "ديون الزبائن تتخلط، وتلقى صعوبة تعرف شكون خلّص وشكون ما زال.",
      description: "الكريدي مسجل في كناش ورقي أو أوراق متفرقة، زبون دفع تسبيقاً وزبون حول على BaridiMob، وفي نهاية الشهر تلقى مبالغ ضائعة وما تعرفش بالضبط شحال راك تسال.",
      badge: "نزيف الكريدي"
    },
    {
      number: "03",
      icon: Calculator,
      title: "قطع الغيار وعمولات التقنيين يخلطولك الحسابات.",
      description: "كي تحسب عمولة التقني على إجمالي الفاتورة بدل اليد العاملة وحدها، يدي نسبة من ثمن قطعة الغيار اللي شريتها من مالك الخاص، فتتحمل الخسارة من رأس مالك دون انتباه.",
      badge: "خسارة رأس المال"
    },
    {
      number: "04",
      icon: PhoneCall,
      title: "مكالمات يومية من الزبائن يسقسيو على حالة أجهزتهم.",
      description: "نصف وقتك يضيع في الرد على مكالمات الزبائن: 'ألو، واش وجد التلفزيون؟'، وتضطر كل مرة تحبس خدمتك وتروح تفركت وتبحث بين الأجهزة في الورشة.",
      badge: "تضييع الوقت والتركيز"
    }
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-[#091426] border-y border-sav-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/25 text-[#EF4444] text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>واقع التسيير التقليدي في الورشات</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria leading-snug">
            قدّاه من حاجة تضيع منك كي تسير الورشة بالطريقة التقليدية؟
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            مواقف يومية يعيشها كل صاحب ورشة تصليح في الجزائر بسبب الاعتماد على الدفاتر وأكوام الأوراق والمكالمات العشوائية.
          </p>
        </div>

        {/* 4 Premium Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="bg-[#0D1B30] border border-sav-border rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-slate-500/40 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#091426] border border-sav-border flex items-center justify-center text-[#EF4444]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 text-red-300 border border-[#EF4444]/20">
                        {p.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {p.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Persuasive Transition */}
        <div className="mt-14 sm:mt-18 text-center">
          <div className="inline-flex flex-col items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              حان وقت إنهاء هذه المعاناة
            </span>
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#0D1B30] border border-[#10B981]/40 text-white font-black text-sm sm:text-base shadow-lg shadow-[#10B981]/5">
              <span className="text-[#10B981]">الحل؟ نظام واحد يجمعلك كامل ورشتك.</span>
              <ArrowDown className="w-4 h-4 text-[#10B981] animate-bounce" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
