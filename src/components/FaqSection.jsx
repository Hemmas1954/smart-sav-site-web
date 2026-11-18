import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  WifiOff, 
  Infinity as InfinityIcon, 
  HardDrive, 
  Smile, 
  Truck, 
  Printer,
  Sparkles
} from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "هل البرنامج يحتاج إلى إنترنت للعمل داخل الورشة؟",
      icon: WifiOff,
      answer: "إطلاقاً! البرنامج مكتبي محلي 100% (Offline-First Desktop ERP). يعمل في ورشتك بكفاءة وسرعة فائقة حتى لو انقطع الإنترنت لأيام أو شهور. جميع بياناتك، ملفات الزبائن، وأسرار أرباحك مشفرة ومحفوظة محلياً على القرص الصلب لحاسوبك ولا يمكن لأي جهة خارجية الوصول إليها."
    },
    {
      question: "هل توجد اشتراكات شهرية، سنوية، أو مصاريف تجديد خفية؟",
      icon: InfinityIcon,
      answer: "لا على الإطلاق! سياستنا واضحة وشفافة تماماً: تدفع ثمن البرنامج لمرة واحدة فقط عند الشراء (19,000 دج)، وتمتلك ترخيص الاستخدام الدائم مدى الحياة (Licence à Vie) لورشة واحدة. لن يُطلب منك دفع أي دينار إضافي لتجديد البرنامج مستقبلاً."
    },
    {
      question: "ماذا لو تعطل جهاز الكمبيوتر الخاص بي أو أردت تغييره؟",
      icon: HardDrive,
      answer: "البرنامج مزود بنظام أمان ونسخ احتياطي ذكي وفوري (Backup & Restore). يمكنك بنقرة واحدة حفظ نسخة احتياطية مشفرة على قرص فلاش USB أو Google Drive. إذا تعطل جهازك أو قمت بفرمتته، يساعدك فريق الدعم الفني في إعادة تثبيت نسختك واسترجاع كل بياناتك ووصولاتك في أقل من 10 دقائق دون فقدان أي حرف."
    },
    {
      question: "هل البرنامج معقد ويتطلب عمالاً ذوي خبرة في الإعلام الآلي؟",
      icon: Smile,
      answer: "صُمم البرنامج خصيصاً ليناسب الواقع الجزائري؛ واجهته باللغة العربية الواضحة والمصطلحات التقنية الشائعة، مع خطوط مريحة للعين وتصميم كانبان بصري ملون. نوفر لك أيضاً فيديوهات شرح قصيرة ودورة تدريبية مباشرة عبر الهاتف و AnyDesk، تضمن أن أي عامل في ورشتك سيتقنه ويبدأ العمل به خلال أقل من نصف ساعة."
    },
    {
      question: "كيف تتم عملية الشراء، الاستلام، وتفعيل الترخيص؟",
      icon: Truck,
      answer: "بكل بساطة وسرعة: تتواصل معنا عبر الهاتف أو الواتساب، ونرسل لك رابط تحميل ملف التثبيت الرسمي وقاعدة البيانات. يتصل معك مهندس من فريقنا التقني عبر برنامج AnyDesk لتثبيت البرنامج، إدخال اسم ورشتك وشعارك، وتفعيل كود الترخيص الدائم في حاسوبك فوراً، ثم تدريبك على كل الميزات."
    },
    {
      question: "هل يدعم البرنامج طباعة الوصولات بمختلف أنواع الطابعات؟",
      icon: Printer,
      answer: "نعم 100%! يدعم النظام طباعة الفواتير الكبيرة A4، وصولات التسليم A5، تذاكر الطابعات الحرارية الشائعة (Ticket de Caisse 80mm و 58mm)، بالإضافة إلى طباعة ملصقات الباركود والـ QR اللاصقة (Etiquettes Thermiques) لوضعها مباشرة على ظهر أجهزة الزبائن لسهولة التعرف عليها."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-cyanElectric-400" />
            <span>الأسئلة الشائعة وتفنيد الاعتراضات</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            إجابات واضحة وصريحة على كل ما يدور في ذهنك
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            نريدك أن تشتري وأنت مطمئن 100% أن استثمارك في مكانه الصحيح.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-obsidian-900 border-emeraldNeon-500/40 shadow-neon-emerald'
                    : 'bg-obsidian-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isOpen 
                        ? 'bg-emeraldNeon-500/20 text-emeraldNeon-400' 
                        : 'bg-obsidian-850 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-white font-tajawal">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-emeraldNeon-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-slate-800 text-center space-y-3">
          <div className="font-bold text-white text-base font-tajawal">
            هل لديك سؤال خاص بورشة عملك أو أجهزتك؟
          </div>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            فريقنا التقني في الجزائر يسعد بالرد على جميع استفساراتك وتقديم استشارة تقنية مجانية تناسب طبيعة ورشتك.
          </p>
          <div className="pt-1">
            <a
              href="tel:0676067652"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyanElectric-400 hover:text-cyanElectric-300 bg-obsidian-950 px-4 py-2 rounded-lg border border-cyanElectric-500/30"
            >
              <span>اتصل بنا مباشرة:</span>
              <span className="font-mono dir-ltr font-bold text-sm">0676 06 76 52</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
