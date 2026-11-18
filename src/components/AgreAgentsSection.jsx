import React from 'react';
import { 
  Award, 
  FileSpreadsheet, 
  CheckCircle2, 
  Building2, 
  Layers, 
  ShieldCheck, 
  FileCheck, 
  Download, 
  Printer, 
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function AgreAgentsSection({ onOpenOrderModal }) {
  const brands = [
    { name: "CONDOR", color: "from-blue-500 to-cyan-500", label: "كوندور للإلكترونيات" },
    { name: "BRANDT", color: "from-red-500 to-amber-500", label: "براندت الجزائر" },
    { name: "IRIS", color: "from-green-500 to-emerald-500", label: "إيريس سات" },
    { name: "SAMSUNG", color: "from-blue-600 to-indigo-600", label: "سامسونج المعتمد" },
    { name: "GEANT", color: "from-purple-500 to-pink-500", label: "جيون إلكترونيكس" },
    { name: "LG", color: "from-rose-500 to-red-600", label: "إل جي الكهرومنزلي" },
    { name: "MIDEA", color: "from-cyan-500 to-blue-500", label: "ميديا للتكييف والتبريد" },
    { name: "TCL", color: "from-red-600 to-amber-600", label: "تي سي إل شاشات" }
  ];

  const features = [
    {
      title: "تسيير قطع الأمانة (Pièces en Consignation)",
      desc: "فصل تام بين قطع الغيار التي اشتريتها بمالك الخاص، وقطع الأمانة المسلمة من الشركة المصنعة، لتفادي أي عجز أو اختلاط في الجرد السنوي."
    },
    {
      title: "إلزامية الرقم التسلسلي ورقم شهادة الضمان",
      desc: "البرنامج يجبر الفني على إدخال Numéro de Série و Bon de Garantie وصورة العطل قبل إغلاق الملف، لتفادي رفض الملفات من مصلحة SAV للمصنع."
    },
    {
      title: "توليد كشوفات المطالبات (Bordereaux) بنقرة زر",
      desc: "استخراج جدول الفوترة الشهري بصيغة Excel و PDF الرسمية المعتمدة لدى إدارات المصانع، متضمناً أتعاب اليد وتكاليف قطع الأمانة بدقة متناهية."
    },
    {
      title: "تتبع حالة التسوية المالية (État de Règlement)",
      desc: "معرفة المبالغ التي سددتها الشركات لورشتك والمبالغ العالقة قيد التدقيق، لضمان تحصيل كل مستحقاتك في مواعيدها المحددة."
    }
  ];

  return (
    <section id="agents" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amberGold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-400 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>نظام مراكز الصيانة والوكلاء المعتمدين (SAV Agréé PRO)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            تسيير احترافي لعقود مصانع الأجهزة الكبرى في الجزائر
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            إذا كنت مركز خدمة معتمد (Agent Agréé) لشركة أو تطمح للحصول على اعتمادات رسمية، فإن SAV MASTER هو شريكك لتقديم تقارير مطابقة للمعايير المصنعية الصارمة.
          </p>
        </div>

        {/* Brand Logos Cloud */}
        <div className="mb-14 p-6 rounded-2xl bg-obsidian-900/60 border border-slate-800 backdrop-blur-md">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center mb-6">
            متوافق 100% مع نماذج مطالبات وكشوفات كبرى العلامات التجارية في السوق الجزائري:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {brands.map((b, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-obsidian-950/80 border border-slate-800/80 hover:border-slate-600 transition-all text-center group"
              >
                <div className="font-black font-mono text-sm sm:text-base text-slate-200 group-hover:text-amberGold-400 transition-colors">
                  {b.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content & Visual Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Features Left */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white font-tajawal mb-6 flex items-center gap-2">
              <span className="text-amberGold-400">⚡ إنهاء 3 إلى 5 أيام</span> من التعب والإرهاق عند إعداد الـ Bordereau كل نهاية شهر!
            </h3>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-obsidian-900/90 border border-slate-800 hover:border-amberGold-500/40 transition-all flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-amberGold-500/10 text-amberGold-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-tajawal">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="px-6 py-3 rounded-xl bg-amberGold-500 hover:bg-amberGold-400 text-obsidian-950 font-black text-sm flex items-center gap-2 shadow-neon-gold transition-all"
              >
                <span>احصل على وحدة الوكلاء المعتمدين مع نسختك</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bordereau Mockup Right */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-700/80 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 font-mono font-bold text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Bordereau_Reclamation_Brandt_Oct2026.xlsx</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  جاهز للإرسال للمصنع
                </span>
              </div>

              {/* Simulated Spreadsheet View */}
              <div className="bg-obsidian-950 rounded-xl border border-slate-800 p-2 sm:p-3 overflow-x-auto touch-scroll no-scrollbar text-xs font-mono">
                <table className="w-full min-w-[480px] text-right text-[11px]">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2">N° Dossier</th>
                      <th className="p-2">Appareil</th>
                      <th className="p-2">N° Série</th>
                      <th className="p-2">Pièce Consignée</th>
                      <th className="p-2">Main d'œuvre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="p-2 text-cyanElectric-400 font-bold">#DZ-0412</td>
                      <td className="p-2">Brandt LL801</td>
                      <td className="p-2 text-slate-400">BRD-89104-X</td>
                      <td className="p-2 text-amberGold-400">Carte Mère Inverter</td>
                      <td className="p-2 font-bold text-emeraldNeon-400">3,500 دج</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-cyanElectric-400 font-bold">#DZ-0413</td>
                      <td className="p-2">Brandt Four FP10</td>
                      <td className="p-2 text-slate-400">BRD-77210-A</td>
                      <td className="p-2 text-amberGold-400">Résistance Sole 1800W</td>
                      <td className="p-2 font-bold text-emeraldNeon-400">2,800 دج</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-cyanElectric-400 font-bold">#DZ-0414</td>
                      <td className="p-2">Brandt Frigo NoFrost</td>
                      <td className="p-2 text-slate-400">BRD-66512-R</td>
                      <td className="p-2 text-amberGold-400">Ventilateur Évaporateur</td>
                      <td className="p-2 font-bold text-emeraldNeon-400">4,000 دج</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Totals */}
              <div className="flex items-center justify-between bg-obsidian-900 p-3 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400">إجمالي مستحقات أجرة اليد المطالب بها:</span>
                  <div className="font-mono font-black text-emeraldNeon-400 text-base">
                    184,500 دج (24 ملفاً مطابقاً)
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer" title="تصدير Excel">
                    <Download className="w-4 h-4 text-emerald-400" />
                  </span>
                  <span className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer" title="طباعة رسمية">
                    <Printer className="w-4 h-4 text-cyanElectric-400" />
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                ✓ متوافق مع تصدير صيغ Excel, PDF, وملفات CSV المصنعية.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
