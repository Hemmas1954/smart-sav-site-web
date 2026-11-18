import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "هل يحتاج البرنامج إلى الإنترنت؟",
      a: "لا، البرنامج مصمم بنظام (Offline-First) ليعمل محلياً بنسبة 100% دون الحاجة إلى أي اتصال بالإنترنت. بياناتك وقواعد البيانات مشفرة ومحفوظة مباشرة على القرص الصلب لحاسوبك ولا تتأثر بانقطاع الشبكة."
    },
    {
      q: "هل يمكنني استخدامه في ورشة تصليح التلفزيونات؟",
      a: "نعم بكل تأكيد، البرنامج يتضمن وضعاً مخصصاً لورشات التلفزيونات والشاشات، مع حقول جاهزة لتسجيل أعطال الإضاءة (Backlight/Leds)، كروت التغذية، كرت T-Con، وتسجيل ملحقات مثل الريموت كنترول والحامل الجداري."
    },
    {
      q: "هل يمكنني تسيير أكثر من تخصص في نفس الورشة؟",
      a: "نعم، يمكنك تسيير عدة تخصصات في نفس الوقت (شاشات، كهرومنزلي، مكيفات وتبريد، هواتف، وحواسيب)، مع تخصيص حقول وأعطال وملحقات كل قسم بشكل مستقل."
    },
    {
      q: "هل يمكنني استعمال هاتفي مع البرنامج؟",
      a: "نعم، يمكنك ربط هاتفك الذكي بالكمبيوتر لاسلكياً عبر شبكة Wi-Fi المحلية داخل الورشة (بدون إنترنت خارجي)، واستخدام كاميرا هاتفك كقارئ باركود سريع أو لتصوير حالة الجهاز ووثائق الضمان مباشرة إلى ملف الصيانة."
    },
    {
      q: "كيف يتم حساب عمولة التقنيين؟",
      a: "يقوم البرنامج بحساب عمولة التقني كنسبة مئوية من أجرة اليد العاملة الصافية فقط (Main d'œuvre)، ويعزل ثمن قطع الغيار لصاحب الورشة بنسبة 100%، مع إمكانية طباعة كشف راتب شهري بصيغة A4 لتوقيع التقني."
    },
    {
      q: "هل يمكنني متابعة ديون الزبائن (الكريدي)؟",
      a: "نعم، البرنامج يجمع كل مستحقات الزبون في حساب واحد حتى لو جلب عدة أجهزة، ويسجل دفعات النقد وتحويلات BaridiMob مع إمكانية طباعة كشف حساب واضح أو تجهيز رسالة تذكير مهذبة عبر واتساب بنقرة زر."
    },
    {
      q: "هل توجد اشتراكات شهرية؟",
      a: "إطلاقاً. لا توجد أي اشتراكات شهرية أو سنوية (0 دج اشتراك). تدفع ثمن الترخيص الدائم لمرة واحدة فقط بـ 19,000 دج، وتصبح النسخة المشتراة ملكاً لورشتك دون انقطاع."
    },
    {
      q: "هل بيانات الورشة محفوظة على حاسوبي؟",
      a: "نعم، جميع بياناتك وأسماء الزبائن والأرباح والديون محفوظة محلياً في قاعدة بيانات مشفرة على قرص جهازك، ولا تُرسل إلى أي خادم خارجي. كما يوفر البرنامج نظام نسخ احتياطي محلي لحفظ بياناتك على فلاش ديسك."
    },
    {
      q: "كيف أطلب البرنامج وأحصل عليه؟",
      a: "يمكنك الضغط على زر 'اطلب نسختك الآن' أو التواصل معنا مباشرة عبر واتساب. يتواصل معك فريقنا لتزويدك بملف التثبيت الرسمي لنظام Windows والمساعدة في التفعيل والإعداد الأولي على حاسوبك."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#050914] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>الأسئلة الشائعة والأجوبة الصريحة</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria">
            كل ما تحتاج معرفته عن ANALYSE DZ • SAV MASTER
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            إجابات واضحة ومباشرة مبنية على الإمكانيات الحقيقية للبرنامج ونظام العمل المكتبي.
          </p>
        </div>

        {/* 9 Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0D1B30] border border-sav-border rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 text-slate-200 hover:text-white transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">
                    {index + 1}. {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#091426] border border-sav-border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#10B981]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-sav-border/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
