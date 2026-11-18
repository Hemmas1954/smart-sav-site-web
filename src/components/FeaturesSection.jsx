import React from 'react';
import { Section, SectionHeading } from './Shared';

export default function FeaturesSection() {
  const features = [
    {
      badge: 'إدارة الصيانة',
      title: 'تتبع كل جهاز من الاستقبال إلى التسليم',
      desc: 'نظام كانبان بـ 6 مراحل واضحة: استقبال، تشخيص، انتظار قطع، قيد الصيانة، جاهز للتسليم، تم التسليم. لا يضيع أي جهاز.',
      color: 'brand-emerald',
      details: ['وصل استقبال لكل جهاز مع رقم تتبع', 'تحديث المراحل بنقرة زر', 'إشعار WhatsApp تلقائي عند الجاهزية', 'سجل كامل لكل عملية صيانة'],
    },
    {
      badge: 'قطع الغيار',
      title: 'إدارة مخزون ذكية بالتسعير المرجح',
      desc: 'تتبع كل قطعة غيار: الشراء، البيع، المخزون المتبقي، والتسعير المرجح PMP. تنبيهات تلقائية عند انخفاض المخزون.',
      color: 'brand-cyan',
      details: ['حركة المخزون (دخول/خروج/تحويل)', 'التسعير المرجح التلقائي PMP', 'ربط القطع بملفات الصيانة', 'تنبيهات المخزون المنخفض'],
    },
    {
      badge: 'الفنيون',
      title: 'عمولات عادلة تحمي أرباحك',
      desc: 'محرك حماية الأرباح يفصل أجرة اليد عن قطع الغيار. العمولة تُحسب على العمل فقط (Main d\'œuvre) وليس على ثمن القطع.',
      color: 'amber-400',
      details: ['فصل تلقائي: أجرة اليد ≠ قطع الغيار', 'عمولة الفني على العمل فقط', 'تقرير شهري لكل فني', 'مقارنة الأداء بين الفنيين'],
    },
    {
      badge: 'المالية',
      title: 'لوحة مالية شاملة بأرقام حقيقية',
      desc: 'إيرادات، مصاريف، هوامش ربح، وتفاصيل مالية دقيقة لكل يوم وشهر. تعرف بالضبط كم تربح ومن أين.',
      color: 'violet-400',
      details: ['ملخص مالي يومي وشهري وسنوي', 'إيرادات أجرة اليد منفصلة عن القطع', 'تتبع المصاريف والتكاليف', 'تقارير قابلة للطباعة'],
    },
    {
      badge: 'الوكلاء المعتمدين',
      title: 'تسيير عقود المصانع ومراكز SAV Agréé',
      desc: 'إدارة كاملة لعقود الشركات (IRIS, Condor, Brandt, Samsung...) وقطع الأمانة والمطالبات المالية (Bordereau).',
      color: 'blue-400',
      details: ['ملفات مرتبطة بعقود المصانع', 'قطع أمانة الشركات (Consignation)', 'توليد كشوفات المطالبات تلقائياً', 'تسويات مالية دقيقة'],
    },
    {
      badge: 'حماية البيانات',
      title: 'بياناتك ملكك — مشفرة ومحمية محلياً',
      desc: 'لا خادم خارجي، لا اشتراك سحابي. بياناتك مشفرة داخل جهازك ولا تخرج منه أبداً. نسخ احتياطي تلقائي.',
      color: 'brand-emerald',
      details: ['تشفير AES للقاعدة المحلية', 'نسخ احتياطي تلقائي ويدوي', 'لا تبعية لأي خادم سحابي', 'استعادة سريعة في أي وقت'],
    },
  ];

  const colorMap = {
    'brand-emerald': {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-400',
      border: 'border-emerald-500/10 hover:border-emerald-500/25',
    },
    'brand-cyan': {
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      dot: 'bg-cyan-400',
      border: 'border-cyan-500/10 hover:border-cyan-500/25',
    },
    'amber-400': {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      dot: 'bg-amber-400',
      border: 'border-amber-500/10 hover:border-amber-500/25',
    },
    'violet-400': {
      badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      dot: 'bg-violet-400',
      border: 'border-violet-500/10 hover:border-violet-500/25',
    },
    'blue-400': {
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      dot: 'bg-blue-400',
      border: 'border-blue-500/10 hover:border-blue-500/25',
    },
  };

  return (
    <Section id="features">
      <SectionHeading
        badge="الحل المتكامل"
        title="كل ما تحتاجه لإدارة ورشتك في مكان واحد"
        subtitle="ستة محاور أساسية صُممت لتغطية كل جوانب عملك اليومي."
      />

      <div className="space-y-5">
        {features.map((f, i) => {
          const c = colorMap[f.color] || colorMap['brand-emerald'];
          const isReversed = i % 2 !== 0;

          return (
            <div
              key={i}
              className={`reveal rounded-xl border ${c.border} bg-white/[0.01] p-5 sm:p-7 transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 items-start`}>
                {/* Text */}
                <div className="flex-1">
                  <span className={`inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border mb-4 ${c.badge}`}>
                    {f.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {f.desc}
                  </p>
                  <ul className="space-y-2">
                    {f.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[13px] text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder — abstract UI representation */}
                <div className="flex-1 w-full lg:max-w-[380px]">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 min-h-[180px]">
                    <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <span className="text-xs text-slate-500 font-medium">{f.badge}</span>
                    </div>
                    {/* Abstract data rows */}
                    <div className="space-y-2.5">
                      {[0.9, 0.7, 0.5, 0.3].map((w, k) => (
                        <div key={k} className="flex items-center gap-2">
                          <div className="w-6 h-2.5 rounded bg-white/[0.04]" />
                          <div className="h-2.5 rounded bg-white/[0.04]" style={{ width: `${w * 100}%` }} />
                        </div>
                      ))}
                    </div>
                    {/* Abstract metrics */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[1, 2, 3].map((k) => (
                        <div key={k} className="rounded bg-white/[0.03] p-2 text-center">
                          <div className="h-4 w-8 rounded bg-white/[0.06] mx-auto mb-1" />
                          <div className="h-2 w-12 rounded bg-white/[0.04] mx-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
