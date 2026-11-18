import React from 'react';
import { 
  Building2, 
  FileCheck2, 
  Boxes, 
  Receipt, 
  ArrowLeft, 
  Layers, 
  CheckCircle2, 
  FileSpreadsheet 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AuthorizedService({ onOpenOrder }) {
  const highlights = [
    {
      title: "تسيير عقود المصانع والشركات",
      desc: "تسجيل أسعار أتعاب اليد العاملة التعاقدية المحددة مسبقاً مع الشركات، وتعيين شروط الضمان الخاصة بكل علامة تجارية.",
      icon: Building2
    },
    {
      title: "قطع الأمانة (Consignation)",
      desc: "متابعة دقيقة لمخزون القطع المسلمة من الشركة كأمانة؛ تسجيل القطع المستهلكة في كل ملف والقطع المتبقية في المخزن بدقة تامة.",
      icon: Boxes
    },
    {
      title: "توليد كشوفات المطالبات (Bordereaux)",
      desc: "استخراج كشوفات المطالبة المالية الشاملة لشركة محددة خلال شهر معين بنقرة واحدة، جاهزة للطباعة أو التصدير بتفاصيل كل جهاز وتكلفته.",
      icon: FileSpreadsheet
    },
    {
      title: "الدفعات الجزئية والتسويات",
      desc: "تسجيل دفعات الشركات على دفعات، متابعة الرصيد المتبقي بذمة كل شركة، وتسوية مستحقات الورشة المالية دون التباس.",
      icon: Receipt
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "استقبال الجهاز المعتمد",
      detail: "إدخال رقم وصل الشركة، نوع الجهاز، العطل، والرقم التسلسلي (S/N)."
    },
    {
      step: "02",
      title: "استهلاك قطعة الأمانة",
      detail: "صرف القطعة من رصيد الشركة (Consignation) وربطها برقم الملف."
    },
    {
      step: "03",
      title: "إتمام الصيانة وحساب الفني",
      detail: "تسجيل عمولة الفني المحددة على عقد الصيانة المعتمد."
    },
    {
      step: "04",
      title: "استخراج كشف المطالبة (Bordereau)",
      detail: "توليد الكشف النهائي وتقديمه للشركة مع المطالبة المالية."
    },
    {
      step: "05",
      title: "التسوية والتحصيل المالي",
      detail: "قبض مستحقات الورشة وإغلاق دورة الملفات المحاسبية."
    }
  ];

  return (
    <section id="authorized-service" className="py-16 sm:py-24 bg-[#071326] border-y border-sav-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E699]/10 border border-[#00E699]/20 text-[#00E699] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>وحدة مراكز الخدمة المعتمدة (Agent Agréé)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            إدارة احترافية لملفات الصيانة المعتمدة.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            إذا كنت مركز صيانة معتمداً أو تتعامل مع شركات ومصانع الأجهزة، يوفر لك SAV MASTER كل ما تحتاجه لفوترة أتعابك ومتابعة قطع الأمانة وإعداد المطالبات الرسمية بسلاسة تامة.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 sm:p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#071326] border border-sav-border flex items-center justify-center text-[#00E699] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1.5">{h.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustrative Workflow Steps */}
        <div className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#00F5FF] block uppercase tracking-wider">
              مسار العمل النموذجي (Workflow)
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              من استقبال جهاز الزبون التابع للشركة إلى استلام مستحقات المطالبة المالية:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {workflowSteps.map((ws, i) => (
              <div key={ws.step} className="bg-[#071326] border border-sav-border rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-[#00E699] mb-1">
                    المرحلة {ws.step}
                  </div>
                  <div className="font-bold text-slate-200 text-xs sm:text-sm mb-1.5">
                    {ws.title}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    {ws.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clarification banner */}
          <div className="mt-6 pt-5 border-t border-sav-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              * ملاحظة قانونية توضيحية: العلامات التجارية والمصانع (مثل IRIS, Condor, Brandt, Samsung وغيرها) تُذكر كأمثلة لتوضيح توافق مسارات العمل الحسابية والتقارير في النظام، ولا تعني وجود رعاية أو شراكة رسمية مباشرة.
            </p>
            <a
              href={siteConfig.whatsapp.agent}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00E699] hover:text-[#34D399] font-bold shrink-0"
            >
              <span>استفسر عن حلول الوكلاء المعتمدين</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
