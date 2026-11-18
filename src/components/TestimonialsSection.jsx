import React from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "حميد ش.",
      role: "صاحب ورشة كهرومنزلي وتبريد",
      city: "العلمة، ولاية سطيف",
      rating: 5,
      tag: "وفورات مالية ضخمة",
      quote: "كنت أدفع عمولات للفنيين من إجمالي الفاتورة بما فيها ثمن قطع الغيار دون أن أنتبه.. البرنامج كشف لي هذا النزيف وفصل أجرة اليد تماماً، وضاعف صافي أرباحي في شهرين فقط. برنامج لا غنى عنه لأي صاحب ورشة!",
      highlight: "ضاعف صافي أرباحي في شهرين"
    },
    {
      name: "ياسين م.",
      role: "مدير مركز صيانة معتمد (Agent Agréé)",
      city: "الحميز، الجزائر العاصمة",
      rating: 5,
      tag: "تسيير عقود المصانع",
      quote: "إعداد كشوفات المطالبات الشهرية (Bordereaux) لشركات الأجهزة كان يأخذ مني 3 أيام كاملة من التعب والتدقيق اليدوي في الدفاتر. الآن مع SAV MASTER بنقرة زر واحدة أستخرج الملف بـ Excel و PDF مع أرقام الشاسيه مطابقة تماماً.",
      highlight: "وفر 3 أيام كاملة شهرياً"
    },
    {
      name: "كمال ب.",
      role: "فني ومصلح شاشات وتلفزيونات",
      city: "حي بوزوران، باتنة",
      rating: 5,
      tag: "حماية من نزاعات الضمان",
      quote: "ميزة كود QR المطبوع على الوصل أنهت مشاكلي مع الزبائن الذين يطالبون بالضمان بعد 5 و 6 أشهر ويدعون أنهم صلحوا الجهاز الأسبوع الماضي! مسحة واحدة بهاتفي تظهر تاريخ انتهاء الضمان بالأيام، وينتهي النقاش فوراً باحترام.",
      highlight: "أنهى نزاعات الزبائن بالأيام والتاريخ"
    },
    {
      name: "رضا ك.",
      role: "ورشة تكييف وتبريد صناعي ومنزلي",
      city: "حي العقيد لطفي، وهران",
      rating: 5,
      tag: "عمل محلي 100% بدون إنترنت",
      quote: "انقطاع الإنترنت كان يوقف البرامج السحابية الأخرى. ميزة أن SAV MASTER مكتبي 100% ويعمل بدون إنترنت أعطتنا استقراراً رهيباً، وسرعة استخراج الوصل وإرسال رسالة الواتساب للزبون رفعت تقييم ورشتنا جداً.",
      highlight: "استقرار تام بدون إنترنت"
    },
    {
      name: "جمال د.",
      role: "ورشة صيانة إلكترونيات وأجهزة صغيرة",
      city: "المدينة الجديدة، قسنطينة",
      rating: 5,
      tag: "ترخيص دائم بدون اشتراك",
      quote: "أجمل ما في البرنامج أنه ترخيص دائم مدى الحياة.. اشتريته مرة واحدة وامتلكته للأبد، لا وجود لخوف دفع اشتراك شهري يثقل كاهل الورشة. والدعم الفني هاتفياً من طرف الفريق كان ممتازاً ومحترفاً.",
      highlight: "راحة بال من الاشتراكات الشهرية"
    },
    {
      name: "طارق س.",
      role: "مسؤول ورشة خدمات وتصليح غسالات",
      city: "وسط المدينة، البليدة",
      rating: 5,
      tag: "سهولة الاستخدام وسرعة العمال",
      quote: "كنت خائفاً أن العمال لن يستوعبوا البرنامج لأنه جديد عليهم، لكن واجهته العربية البسيطة ولوحة الكانبان جعلتهم يعملون به بكل سلاسة خلال أقل من ساعة. أصبحنا نعرف مكان وحالة كل جهاز فورياً.",
      highlight: "استيعاب كامل في أقل من ساعة"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-emeraldNeon-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emeraldNeon-500/10 border border-emeraldNeon-500/30 text-emeraldNeon-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>شهادات واقعية موثقة من السوق الجزائري 🇩🇿</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            ماذا يقول أصحاب ورشات الصيانة ومراكز SAV بعد استخدام البرنامج؟
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            تجارب حقيقية من مدن ومراكز مختلفة في الجزائر، اختبروا الفرق بأنفسهم وضاعفوا أرباحهم ونظام ورشاتهم.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 hover:border-emeraldNeon-500/40 hover:shadow-neon-emerald transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amberGold-400">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amberGold-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-cyanElectric-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  "{item.quote}"
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emeraldNeon-500/10 text-emeraldNeon-400 text-xs font-bold border border-emeraldNeon-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.highlight}</span>
                </div>

              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm font-tajawal">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.role}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono bg-obsidian-900 px-2 py-1 rounded border border-slate-800">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>{item.city}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-slate-800 text-center flex flex-wrap items-center justify-around gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-mono text-emeraldNeon-400">+180 ورشة</div>
            <div className="text-xs text-slate-400">تستخدم النظام بنجاح في الجزائر</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-mono text-cyanElectric-400">38 ولاية</div>
            <div className="text-xs text-slate-400">تغطية تشمل كافة أنحاء الوطن</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amberGold-400">99.4%</div>
            <div className="text-xs text-slate-400">نسبة رضا أصحاب الورشات ومراكز SAV</div>
          </div>
        </div>

      </div>
    </section>
  );
}
