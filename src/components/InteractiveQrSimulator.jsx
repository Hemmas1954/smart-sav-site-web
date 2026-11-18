import React, { useState } from 'react';
import { 
  QrCode, 
  Scan, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Calendar, 
  FileText, 
  Smartphone, 
  Sparkles,
  Search,
  Check,
  Ban
} from 'lucide-react';

export default function InteractiveQrSimulator() {
  const [selectedReceipt, setSelectedReceipt] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);

  const receipts = [
    {
      id: 1,
      tag: "حالة الضمان ساري المفعول",
      customer: "عبد القادر بلحاج (سطيف)",
      phone: "0554 21 89 **",
      device: "تلفاز Samsung 55\" UHD 4K",
      serial: "SAM-884920-DZ",
      repairDate: "12 أكتوبر 2026",
      warrantyPeriod: "90 يوماً (3 أشهر)",
      expiryDate: "10 يناير 2027",
      daysLeft: 57,
      status: "VALID",
      badge: "🟢 ساري المفعول (Sous Garantie)",
      partReplaced: "طقم ليدات Backlight أصلي + لوحة التغذية",
      laborCost: "4,500 دج",
      partsCost: "11,000 دج",
      totalCost: "15,500 دج",
      verdict: "الجهاز مشمول بالضمان المجاني بالكامل، ويحق للزبون الفحص دون دفع سنتيم إذا كان نفس العطل!"
    },
    {
      id: 2,
      tag: "حالة محاولة تحايل (ضمان منتهي)",
      customer: "مراد قدور (العلمة)",
      phone: "0771 90 44 **",
      device: "مكيف Condor 12000 BTU Alpha",
      serial: "CND-COND-2026-09",
      repairDate: "15 جوان 2026",
      warrantyPeriod: "60 يوماً (شهران)",
      expiryDate: "15 أوت 2026",
      daysExpired: 91,
      status: "EXPIRED",
      badge: "🔴 منتهي الصلاحية (Hors Garantie)",
      partReplaced: "مكثف إقلاع 45uF وشحن غاز R410",
      laborCost: "3,500 دج",
      partsCost: "4,000 دج",
      totalCost: "7,500 دج",
      verdict: "الضمان منتهٍ منذ 91 يوماً! الزبون يدعي أنه صلح الجهاز قبل 20 يوماً فقط.. البرنامج يكشف التاريخ الدقيق ويثبت أن الإصلاح الجديد مدفوع 100%!"
    },
    {
      id: 3,
      tag: "حالة مركز معتمد (عقد مصنع Brandt)",
      customer: "مركز خدمة معتمد (Le Blanc)",
      phone: "عقد وكالة Brandt Algérie",
      device: "غسالة Brandt Frontale 8Kg Inverter",
      serial: "BRD-INV-77401",
      repairDate: "05 نوفمبر 2026",
      warrantyPeriod: "سنتان (Garantie Constructeur)",
      expiryDate: "05 نوفمبر 2028",
      daysLeft: 721,
      status: "CONSTRUCTEUR",
      badge: "🔵 ضمان المصنع المعتمد (Bordereau)",
      partReplaced: "كارت إلكتروني وقفل الباب Sécurité",
      laborCost: "مدرج في تسعيرة المصنع",
      partsCost: "قطعة أمانة مجانية (Consignation)",
      totalCost: "كشف المطالبات الشهري",
      verdict: "ملف معتمد مستوفٍ للشروط، يتم ترحيل التكلفة تلقائياً لكشف الـ Bordereau ليتم تسديده من طرف شركة Brandt مباشرة."
    }
  ];

  const handleScan = (receipt) => {
    setIsScanning(true);
    setScannedResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScannedResult(receipt);
    }, 700);
  };

  return (
    <section id="qr-warranty" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[550px] h-[400px] bg-cyanElectric-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyanElectric-500/10 border border-cyanElectric-500/30 text-cyanElectric-400 text-xs font-bold">
            <Scan className="w-3.5 h-3.5" />
            <span>محاكي فحص الضمان التفاعلي المباشر</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tajawal">
            جرّب بنفسك: كيف ينهي كود QR نزاعات الزبائن وادعاءاتهم في ثانيتين!
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            اختر أحد الوصولات الثلاثة أدناه واضغط على <span className="text-cyanElectric-400 font-bold">«مسح كود QR»</span> لترى كيف يقرأ البرنامج البيانات المشفرة ويفصل في صحة الضمان بالدليل القاطع.
          </p>
        </div>

        {/* The Interactive Simulator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Receipts Selector */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>اختر وصلاً لتجربة مسحه:</span>
              <span className="text-cyanElectric-400">انقر للمعاينة والمسح</span>
            </h3>

            <div className="space-y-3">
              {receipts.map((rc) => {
                const isSelected = selectedReceipt === rc.id;
                return (
                  <div
                    key={rc.id}
                    onClick={() => {
                      setSelectedReceipt(rc.id);
                      handleScan(rc);
                    }}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-right relative overflow-hidden ${
                      isSelected 
                        ? 'bg-obsidian-850 border-cyanElectric-400 shadow-cyan-glow' 
                        : 'bg-obsidian-900/80 border-slate-800 hover:border-slate-700 hover:bg-obsidian-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        وصل رقم #SAV-2026-00{rc.id}
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        rc.status === 'VALID' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : rc.status === 'EXPIRED'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                      }`}>
                        {rc.tag}
                      </span>
                    </div>

                    <div className="font-bold text-sm sm:text-base text-white font-tajawal mb-1">
                      {rc.device}
                    </div>

                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>الزبون: {rc.customer}</span>
                      <span className="font-mono text-cyanElectric-300">{rc.repairDate}</span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-400">مدة الضمان الأصلية: {rc.warrantyPeriod}</span>
                      <span className="text-cyanElectric-400 flex items-center gap-1">
                        <QrCode className="w-3.5 h-3.5" />
                        <span>اضغط للمسح الآن</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Helper Box */}
            <div className="p-4 rounded-xl bg-obsidian-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Smartphone className="w-4 h-4 text-emeraldNeon-400 shrink-0 mt-0.5" />
              <span>
                في الورشة الحقيقية، يمكنك مسح هذا الكود بعصا القارئ العادية (Douchette) أو مباشرة بكاميرا هاتفك المربوط بالـ Wi-Fi.
              </span>
            </div>
          </div>

          {/* Right Column: The Scanner & Result Screen */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 border-2 border-slate-800/90 shadow-2xl relative overflow-hidden">
              
              {/* Simulator Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyanElectric-400 animate-pulse"></span>
                  <span className="text-slate-200 font-bold">SAV MASTER • قارئ QR الذكي للضمان</span>
                </div>
                <div className="flex items-center gap-1.5 text-emeraldNeon-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>محرك الفحص جاهز</span>
                </div>
              </div>

              {/* Scanning Laser Screen Animation */}
              <div className="my-6 relative rounded-2xl bg-obsidian-950 border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[220px] overflow-hidden">
                
                {isScanning ? (
                  <div className="text-center space-y-3 animate-in fade-in">
                    {/* Laser Line */}
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyanElectric-400 to-transparent shadow-cyan-glow animate-bounce"></div>
                    <QrCode className="w-20 h-20 text-cyanElectric-400 animate-pulse mx-auto" />
                    <div className="text-sm font-mono text-cyanElectric-300 font-bold">
                      جاري فك تشفير كود QR ومطابقة قاعدة البيانات...
                    </div>
                  </div>
                ) : scannedResult ? (
                  <div className="w-full space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    
                    {/* Verdict Banner */}
                    <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                      scannedResult.status === 'VALID'
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                        : scannedResult.status === 'EXPIRED'
                        ? 'bg-red-950/40 border-red-500/50 text-red-300'
                        : 'bg-blue-950/40 border-blue-500/50 text-blue-300'
                    }`}>
                      {scannedResult.status === 'VALID' ? (
                        <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      ) : scannedResult.status === 'EXPIRED' ? (
                        <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                      )}

                      <div className="space-y-1">
                        <div className="font-bold text-sm sm:text-base font-tajawal flex items-center gap-2">
                          <span>{scannedResult.badge}</span>
                          {scannedResult.status === 'VALID' && (
                            <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                              متبقي {scannedResult.daysLeft} يوماً
                            </span>
                          )}
                          {scannedResult.status === 'EXPIRED' && (
                            <span className="text-xs bg-red-500/20 px-2 py-0.5 rounded-full font-mono">
                              منتهي منذ {scannedResult.daysExpired} يوماً!
                            </span>
                          )}
                        </div>
                        <p className="text-xs leading-relaxed opacity-90">
                          {scannedResult.verdict}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Data Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 text-xs">
                      
                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">الجهاز المسجل:</div>
                        <div className="font-bold text-white truncate">{scannedResult.device}</div>
                      </div>

                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">الرقم التسلسلي (S/N):</div>
                        <div className="font-mono font-bold text-cyanElectric-300 truncate">{scannedResult.serial}</div>
                      </div>

                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">تاريخ الإصلاح الأصلي:</div>
                        <div className="font-mono font-bold text-white">{scannedResult.repairDate}</div>
                      </div>

                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">تاريخ انتهاء الضمان:</div>
                        <div className="font-mono font-bold text-amberGold-400">{scannedResult.expiryDate}</div>
                      </div>

                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">القطع المصلحة المشمولة:</div>
                        <div className="font-semibold text-slate-200 truncate">{scannedResult.partReplaced}</div>
                      </div>

                      <div className="bg-obsidian-900 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-500">إجمالي الفاتورة الأصلية:</div>
                        <div className="font-mono font-bold text-emeraldNeon-400">{scannedResult.totalCost}</div>
                      </div>

                    </div>

                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <QrCode className="w-16 h-16 text-slate-600 mx-auto" />
                    <div className="text-xs text-slate-400">
                      اختر وصلاً من القائمة على اليمين واضغط على زر المسح لبدء الفحص
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Simulator Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-400 text-center sm:text-right">
                  💡 تخيّل كمية النقاشات والتوتر التي ستوفرها على نفسك وعمالك كل يوم!
                </div>

                <button
                  onClick={() => {
                    const current = receipts.find(r => r.id === selectedReceipt) || receipts[0];
                    handleScan(current);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyanElectric-500 hover:bg-cyanElectric-400 text-obsidian-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-cyan-glow transition-all"
                >
                  <Scan className="w-4 h-4" />
                  <span>إعادة مسح الكود المختار الآن</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
