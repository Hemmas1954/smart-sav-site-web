import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Scan, 
  QrCode, 
  FileText, 
  Layers, 
  MessageSquare, 
  DollarSign, 
  FileSpreadsheet, 
  CreditCard, 
  Smartphone, 
  Wifi, 
  Tv, 
  Refrigerator, 
  Wind, 
  Laptop, 
  Lock, 
  History, 
  Database, 
  WifiOff, 
  CheckCircle2, 
  AlertCircle,
  Printer,
  ChevronLeft
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CoreFeatures({ onOpenOrder }) {
  // Specialty selector state for Feature 06
  const [selectedSpecialty, setSelectedSpecialty] = useState('tv');

  const specialties = {
    tv: {
      name: "تلفزيونات وشاشات (TV)",
      icon: Tv,
      accessories: ["الريموت كنترول (Télécommande)", "كابل التغذية (Câble)", "الحامل الجداري (Support)"],
      commonFaults: ["عطل الإضاءة الخلفية (Backlight / Leds)", "تلف كرت التغذية (Alimentation)", "مشكل كرت T-Con / اللوحة الأم"],
      sampleDevice: "Samsung 55\" UHD 4K (S/N: SAM-884920)"
    },
    appliances: {
      name: "أجهزة كهرومنزلية (Électroménager)",
      icon: Refrigerator,
      accessories: ["أنبوب التصريف", "كابل التغذية", "كتيب الضمان"],
      commonFaults: ["محرك الغسالة لا يدور", "الميكروويف لا يسخن", "تسريب مياه في حوض الغسيل"],
      sampleDevice: "غسالة Brandt 8Kg Frontale (S/N: BR-54910)"
    },
    ac: {
      name: "مكيفات وتبريد (Climatisation)",
      icon: Wind,
      accessories: ["الريموت", "قواطع التثبيت", "فلتر الهواء"],
      commonFaults: ["نقص شحن غاز التبريد R410A", "تلف المكثف (Condensateur)", "عطل مروحة الوحدة الخارجية"],
      sampleDevice: "مكيف Condor 12000 BTU Inverter (S/N: CND-1204)"
    },
    phones: {
      name: "هواتف ذكية وتابلت (Smartphones)",
      icon: Smartphone,
      accessories: ["الشاحن الأصلي", "شريحة SIM", "غطاء الحماية"],
      commonFaults: ["تغيير شاشة مكسورة (Afficheur)", "منفذ الشحن Connecteur de charge", "استبدال البطارية"],
      sampleDevice: "Xiaomi Redmi Note 12 Pro (S/N: MI-99214)"
    },
    pc: {
      name: "حواسيب ومكتبيات (PC & Laptop)",
      icon: Laptop,
      accessories: ["شاحن المحمول (Chargeur)", "حقيبة الجهاز", "فلاش ديسك"],
      commonFaults: ["ترقية قرص SSD وتثبيت النظام", "إصلاح شورت في اللوحة الأم", "تنظيف مروحة وتغيير المعجون"],
      sampleDevice: "Lenovo ThinkPad T480 Core i5 (S/N: LNV-4809)"
    }
  };

  const currentSpec = specialties[selectedSpecialty];
  const SpecIcon = currentSpec.icon;

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* Section Main Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>المنظومة الشاملة لإدارة ورشات ومراكز الصيانة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-alexandria">
            8 وحدات متكاملة في برنامج واحد
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            صُمم كل جزء من النظام ليحل إشكالاً حقيقياً يواجهه أصحاب ورشات الصيانة في الجزائر: من استقبال الجهاز إلى تسليمه، ومن حماية الضمان إلى حساب الأرباح.
          </p>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 8-MODULE OVERVIEW GRID (IDENTICAL TO OFFICIAL PRODUCT ARCHITECTURE) */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Module 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  1
                </span>
                <span className="text-[11px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
                  تخصيص كامل
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                تعدد الأنشطة والقوالب الذكية
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ضبط البرنامج ليناسب ورشات التلفزيونات، الكهرومنزل، التكييف، الهواتف، والحواسيب مع حقول مخصصة لكل صنف.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>5 تخصصات جاهزة بضغطة زر</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  2
                </span>
                <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/25">
                  إيصالات وباركود
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                استقبال سريع وتوثيق ضد النزاعات
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تسجيل متعدد الأجهزة في تذكرة واحدة، مع طباعة إيصالات حرارية أو A4 وملصقات باركود تضمن حقك وحق الزبون.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>طباعة فورية + إثبات استلام</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  3
                </span>
                <span className="text-[11px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
                  Wi-Fi محلي
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                ربط الهاتف بالـ Wi-Fi المحلي
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                استخدم هاتف الورشة كماسح باركود لاسلكي وتصوير حالة الجهاز وخدوشه وحفظها في التذكرة دون الحاجة للإنترنت.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>ماسح باركود وتوثيق بالصور</span>
            </div>
          </div>

          {/* Module 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  4
                </span>
                <span className="text-[11px] font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/25">
                  WhatsApp جاهز
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                لوحة كانبان وإشعارات واتساب
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                متابعة بصرية دقيقة لحالة كل جهاز عبر 6 مراحل، مع إرسال رسالة واتساب جاهزة للزبون فور الانتهاء من التصليح.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>إشعار الزبون بنقرة واحدة</span>
            </div>
          </div>

          {/* Module 5 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  5
                </span>
                <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/25">
                  حماية 100%
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                مكافحة احتيال الضمان
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                الفحص المزدوج الذكي (مطابقة كود الوصل مع سيريال الجهاز الفعلي Serial) مع إنذار فوري يمنع التلاعب بأجهزة الضمان.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>كشف الأجهزة غير المطابقة فوراً</span>
            </div>
          </div>

          {/* Module 6 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  6
                </span>
                <span className="text-[11px] font-mono text-[#F5B942] bg-[#F5B942]/10 px-2 py-0.5 rounded border border-[#F5B942]/25">
                  أرباح وعمولات
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                محرك عمولات الفنيين والمخزون
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                فصل تكلفة قطع الغيار عن أجرة اليد العاملة، حساب دقيق لعمولة كل تقني، وتنبيهات آلية عند اقتراب نفاد القطع.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>حماية أموال قطع الغيار لصاحب الورشة</span>
            </div>
          </div>

          {/* Module 7 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  7
                </span>
                <span className="text-[11px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
                  BaridiMob + كريدي
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                متابعة الديون والتحصيل
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تجميع ديون الزبائن وتصنيفها، تسجيل دفعات BaridiMob مع أرقام التحويل، وإرسال كشوفات الحساب في واتساب.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>استرجاع الكريدي دون إحراج</span>
            </div>
          </div>

          {/* Module 8 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091426] border border-[#10B981]/35 hover:border-[#10B981] transition-all duration-300 shadow-lg hover:shadow-[#10B981]/15 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#050914] font-black font-mono text-sm flex items-center justify-center shadow-md">
                  8
                </span>
                <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/25">
                  100% Offline
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                أمان كامل وبدون اشتراك
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                عمل محلي 100% بدون نت مع وضع المدير المحمي برقم PIN سري، نسخ احتياطي للبيانات، وسجل تدقيق لكل العمليات.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sav-border/50 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
              <span>بياناتك ملكك على قرص حاسوبك</span>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 01: Dual-Scan Warranty Protection */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#10B981] tracking-wider uppercase">
              الميزة 01 • حماية الضمان
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              ما تخليش التلاعب بالضمان يكلّفك خسائر.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              قارن بين معلومات الوصل والسيريال باستعمال المسح الضوئي. إذا اكتشف النظام اختلافاً في البيانات، يعطيك تنبيهاً واضحاً حتى تراجع الحالة قبل اتخاذ القرار.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>مطابقة آلية بين كود QR المطبوع ورقم السيريال المسجل.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>حسم نزاعات الزبائن بالأدلة وتاريخ التسليم الموثق.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="text-xs font-bold text-slate-400 pb-3 border-b border-sav-border mb-4 flex items-center justify-between">
              <span>نظام المسح المزدوج للمطابقة (Dual-Scan Verification)</span>
              <span className="text-[#22D3EE] font-mono">فحص فوري</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Scan Panel 1: Receipt Scan */}
              <div className="bg-[#091426] border border-sav-border rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <QrCode className="w-4 h-4 text-[#10B981]" />
                    <span>1. مسح كود وصل الاستلام</span>
                  </span>
                  <span className="text-[10px] text-[#10B981] font-mono">تم المسح</span>
                </div>
                <div className="p-2.5 rounded bg-[#0D1B30] text-xs font-mono space-y-1">
                  <div className="text-slate-400 text-[10px]">الملف الأصلي في النظام:</div>
                  <div className="text-white font-bold">#SAV-2026-089</div>
                  <div className="text-slate-300">الجهاز: Samsung 55" UHD</div>
                  <div className="text-[#10B981]">السيريال المقيد: SAM-884920</div>
                </div>
              </div>

              {/* Scan Panel 2: Serial Scan on Device */}
              <div className="bg-[#091426] border border-red-500/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Scan className="w-4 h-4 text-red-400" />
                    <span>2. مسح سيريال الجهاز الفعلي</span>
                  </span>
                  <span className="text-[10px] text-red-400 font-mono">اختلاف بيانات!</span>
                </div>
                <div className="p-2.5 rounded bg-[#0D1B30] text-xs font-mono space-y-1">
                  <div className="text-slate-400 text-[10px]">السيريال الممسوح من اللوحة الخلفية:</div>
                  <div className="text-red-400 font-bold">SAM-991044 (غير متطابق)</div>
                  <div className="text-slate-300">الزبون جلب جهازاً آخر بنفس الوصل!</div>
                </div>
              </div>
            </div>

            {/* Red Alert Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="text-xs text-red-200 leading-relaxed">
                <b className="text-white block mb-0.5">تنبيه اختلاف السيريال (Mismatch Warning):</b>
                بيانات السيريال على هذا الجهاز لا تطابق الجهاز الذي خضع للصيانة في الملف الأصلي. تحقق من الأمر قبل تقديم أي صيانة مجانية.
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 02: Kanban Repair Management + WhatsApp */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>مسار كانبان بـ 6 مراحل (Kanban Workflow)</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>إشعار WhatsApp بنقرة واحدة</span>
              </span>
            </div>

            {/* Mini Kanban Columns */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-[#091426] border border-sav-border">
                <div className="font-bold text-slate-300 pb-1 border-b border-sav-border text-[10px] flex justify-between">
                  <span>1. استقبال</span><span className="text-slate-500">4</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#0D1B30] text-[10px]">
                  <div className="font-bold text-white truncate">Geant 25L</div>
                  <div className="text-slate-400">#094</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#091426] border border-[#22D3EE]/30">
                <div className="font-bold text-[#22D3EE] pb-1 border-b border-sav-border text-[10px] flex justify-between">
                  <span>2. تشخيص</span><span className="text-slate-500">3</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#0D1B30] text-[10px]">
                  <div className="font-bold text-white truncate">LG 43"</div>
                  <div className="text-slate-400">#093</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#091426] border border-sav-border">
                <div className="font-bold text-[#F5B942] pb-1 border-b border-sav-border text-[10px] flex justify-between">
                  <span>3. انتظار قطع</span><span className="text-slate-500">2</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#0D1B30] text-[10px]">
                  <div className="font-bold text-white truncate">Brandt 8K</div>
                  <div className="text-slate-400">#088</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#091426] border border-sav-border">
                <div className="font-bold text-blue-400 pb-1 border-b border-sav-border text-[10px] flex justify-between">
                  <span>4. صيانة</span><span className="text-slate-500">6</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#0D1B30] text-[10px]">
                  <div className="font-bold text-white truncate">Condor 12K</div>
                  <div className="text-slate-400">#090</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#10B981]/15 border border-[#10B981]">
                <div className="font-bold text-[#10B981] pb-1 border-b border-[#10B981]/30 text-[10px] flex justify-between">
                  <span>5. جاهز</span><span className="text-[#10B981] font-bold">8</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#050914] text-[10px] text-[#10B981]">
                  <div className="font-bold text-white truncate">Samsung 55"</div>
                  <div>واتساب جاهز 📲</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#091426] border border-sav-border opacity-70">
                <div className="font-bold text-slate-400 pb-1 border-b border-sav-border text-[10px] flex justify-between">
                  <span>6. مسلّم</span><span className="text-slate-500">129</span>
                </div>
                <div className="mt-1.5 p-1.5 rounded bg-[#0D1B30] text-[10px]">
                  <div className="font-bold text-slate-300 truncate">IRIS 10Kg</div>
                  <div className="text-slate-500">خالص</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Notification Card Preview */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#091426] border border-[#10B981]/30 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-[#10B981] block mb-1">نص إشعار WhatsApp التلقائي للزبون:</span>
                <p className="font-mono text-[11px] text-slate-400 bg-[#050914] p-2 rounded border border-sav-border">
                  "السلام عليكم سي محمد، نعلمكم أن جهازكم (تلفاز Samsung 55") تم إصلاحه بنجاح وهو جاهز للاستلام في ورشتنا. المبلغ الإجمالي: 14,500 دج مع ضمان 90 يوماً. مرحباً بكم."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
            <span className="text-xs font-mono font-bold text-[#22D3EE] tracking-wider uppercase">
              الميزة 02 • تسيير كانبان وواتساب
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              اعرف وين راه كل جهاز، بلا ما تتبع كل واحد وحدو.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              تابع الأجهزة عبر ست مراحل واضحة من الاستلام حتى التسليم. وعند اكتمال التصليح، حضّر رسالة واتساب للزبون بضغطة زر.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>نهاية مشكل نسيان الأجهزة في زوايا الورشة.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>تقليل المكالمات اليومية المتكررة من الزبائن بنسبة كبيرة.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 03: Spare Parts and Technician Commissions */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#F5B942] tracking-wider uppercase">
              الميزة 03 • حسابات التقنيين والقطع
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              افصل حساب قطع الغيار على اليد العاملة.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              نظّم حسابات قطع الغيار، واحسب عمولة كل تقني على اليد العاملة الصافية فقط، مع إمكانية طباعة كشف الراتب بصيغة A4 للتوقيع.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>حماية رأس مال قطع الغيار لصاحب الورشة بنسبة 100%.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>كشف راتب شهري رسمي شفاف يوقع عليه التقني دون خلافات.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>المعادلة المالية الصحيحة في SAV MASTER</span>
              <span className="text-[#10B981] font-mono">طراز A4 جاهز</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-[#091426] p-4 rounded-xl border border-sav-border space-y-2.5">
                <div className="flex justify-between items-center text-slate-300">
                  <span>سعر بيع قطعة الغيار (Kit Led):</span>
                  <span className="font-mono font-bold text-white">9,500 دج (محمية 100% للورشة)</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>أجرة اليد العاملة المحددة (Main d'œuvre):</span>
                  <span className="font-mono font-bold text-[#22D3EE]">5,000 دج (وعاء الحساب)</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-sav-border font-bold">
                  <span>إجمالي الفاتورة المسددة من الزبون:</span>
                  <span className="font-mono text-white">14,500 دج</span>
                </div>
                <div className="flex justify-between items-center text-[#10B981] pt-1 font-bold">
                  <span>عمولة التقني العادلة (30% من اليد فقط):</span>
                  <span className="font-mono text-sm">1,500 دج (بدل 4,350 دج بالخطأ!)</span>
                </div>
              </div>

              {/* Printable Slip Preview */}
              <div className="p-3 bg-[#091426] rounded-xl border border-dashed border-sav-border flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Printer className="w-4 h-4 text-[#22D3EE]" />
                  <div>
                    <span className="font-bold block text-white">كشف الراتب والعمولات الشهري (A4 Bulletin de paie)</span>
                    <span className="text-[10px] text-slate-500">يتضمن تفاصيل كل جهاز أصلحه التقني ومستحقاته للتوقيع اليدوي</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-bold text-[11px]">
                  طباعة فورية
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 04: Customer Debt Management */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>ملف حساب الزبون والكريدي (Fiche Client & Solde)</span>
              <span className="text-[#22D3EE] font-mono">دعم BaridiMob والنقد</span>
            </div>

            <div className="bg-[#091426] p-4 rounded-xl border border-sav-border space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-sav-border">
                <div>
                  <span className="text-white font-bold text-sm block">الزبون: عبد القادر حميدي</span>
                  <span className="text-slate-400 font-mono text-[11px]">رقم الهاتف: 0558 23 11 90</span>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-slate-400 text-[10px] block">المبلغ المتبقي بذمته:</span>
                  <span className="font-mono text-base font-bold text-red-400">18,000 دج</span>
                </div>
              </div>

              {/* Transactions Log */}
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between py-1 px-2 rounded bg-[#0D1B30] text-slate-300">
                  <span>تلفاز Geant 43" (إصلاح تغذية):</span>
                  <span className="font-mono">8,000 دج (خالص نقداً ✓)</span>
                </div>
                <div className="flex justify-between py-1 px-2 rounded bg-[#0D1B30] text-slate-300">
                  <span>مكيف LG 18000 BTU (تغيير محرك):</span>
                  <span className="font-mono text-red-400">20,000 دج (دفع 2,000 دج عبر BaridiMob وباقي 18,000 دج)</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1B30] border border-sav-border text-slate-200">
                  <FileText className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>طباعة كشف الحساب A4</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>تذكير مهذب عبر واتساب</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
            <span className="text-xs font-mono font-bold text-[#10B981] tracking-wider uppercase">
              الميزة 04 • تسيير الديون (الكريدي)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              الكريدي ما يبقاش ضايع بين الدفاتر.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              اجمع مستحقات الزبون في حساب واحد، حتى لو عنده عدة أجهزة. سجّل الدفعات النقدية وBaridiMob، واطبع كشف حساب واضح أو حضّر تذكيراً مهذباً عبر واتساب.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>تجميع ديون كل زبون تلقائياً دون تشتت الحسابات.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>إثباتات الدفع بالصور سواء كانت نقداً أو تحويل BaridiMob.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 05: Smartphone Integration */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#22D3EE] tracking-wider uppercase">
              الميزة 05 • ربط الهاتف بالكمبيوتر
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              هاتفك يخدم معاك داخل الورشة.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              اربط هاتفك بالحاسوب عبر شبكة Wi-Fi المحلية، وامسح الباركود وصوّر حالة الجهاز ووثائق الضمان مباشرة دون كابلات أو الحاجة إلى إنترنت خارجي.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>ربط محلي 100% دون خوادم سحابية خارجية.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>تصوير الخدوش وكسور الشاشات عند الاستلام لحماية الورشة.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>جسر الشبكة المحلية (Local Wi-Fi Wireless Bridge)</span>
              <span className="text-[#10B981] flex items-center gap-1 font-mono">
                <Wifi className="w-3.5 h-3.5" />
                <span>متصل محلياً 0.01ms</span>
              </span>
            </div>

            <div className="bg-[#091426] p-4 rounded-xl border border-sav-border flex flex-col sm:flex-row items-center gap-5">
              {/* Phone Graphic Representation */}
              <div className="w-40 sm:w-44 bg-[#050914] border-2 border-slate-700 rounded-2xl p-2.5 shadow-xl shrink-0 text-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2"></div>
                <div className="bg-[#0D1B30] rounded-lg p-3 text-right space-y-2 border border-sav-border">
                  <div className="text-[10px] text-[#22D3EE] font-bold">كاميرا الورشة اللاسلكية</div>
                  <div className="aspect-square bg-slate-800/80 rounded flex items-center justify-center border border-dashed border-slate-600">
                    <Scan className="w-8 h-8 text-[#10B981] animate-pulse" />
                  </div>
                  <div className="text-[9px] text-slate-400 font-mono text-center">مسح الباركود والصور</div>
                </div>
              </div>

              {/* Data Transfer Details */}
              <div className="space-y-2 text-xs text-slate-300 w-full">
                <div className="font-bold text-white text-sm">مزامنة فورية على برنامج الحاسوب:</div>
                <div className="space-y-1.5 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    <span>مسح السيريال والباركود مباشرة في خانة الإدخال.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    <span>حفظ صور الجهاز التالف في مجلد الملف المحلي بالكمبيوتر.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    <span>بدون كابل USB وبدون أي استهلاك لبيانات الإنترنت.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 06: Multiple Workshop Specialties */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="text-xs font-bold text-slate-400 pb-3 border-b border-sav-border mb-4">
              <span>اختر تخصص ورشتك لتخصيص الحقول والملحقات التلقائية:</span>
            </div>

            {/* Specialty Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
              {Object.keys(specialties).map((key) => {
                const s = specialties[key];
                const Icon = s.icon;
                const isSelected = selectedSpecialty === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedSpecialty(key)}
                    className={`p-2 rounded-xl text-center flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-bold border ${
                      isSelected
                        ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]'
                        : 'bg-[#091426] text-slate-400 border-sav-border hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px]">{s.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content for selected specialty */}
            <div className="bg-[#091426] p-4 rounded-xl border border-sav-border space-y-3 text-xs">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <SpecIcon className="w-4 h-4 text-[#10B981]" />
                <span>{currentSpec.name}</span>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block mb-1">ملحقات الاستلام المتوفرة للاختيار السريع:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSpec.accessories.map((acc, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#0D1B30] border border-sav-border text-slate-300 text-[11px]">
                      + {acc}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block mb-1">أبرز الأعطال الشائعة المسجلة مسبقاً:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSpec.commonFaults.map((fault, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#0D1B30] border border-sav-border text-slate-300 text-[11px]">
                      • {fault}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
            <span className="text-xs font-mono font-bold text-[#F5B942] tracking-wider uppercase">
              الميزة 06 • مرونة التخصصات
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              نظام يتأقلم مع تخصص ورشتك.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              سواء كنت تخدم التلفزيونات، الأجهزة الكهرومنزلية، المكيفات، الهواتف أو الحواسيب، نظّم نشاطك وملحقات الأجهزة حسب طبيعة خدمتك.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>إمكانية إدارة عدة تخصصات في نفس الورشة في آن واحد.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>تخصيص ملحقات كل نوع جهاز لتفادي نسيان كابل أو ريموت.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 07: Privacy and Security */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#10B981] tracking-wider uppercase">
              الميزة 07 • الخصوصية والأمان
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              أرباحك وحساباتك الخاصة تبقى تحت سيطرتك.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              احمِ المعلومات المالية الحساسة بكود PIN خاص بالمدير، وراقب التعديلات من خلال سجل التدقيق، مع نسخ احتياطي لحفظ بيانات الورشة.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>قفل شاشات الأرباح والصندوق برمز سري خاص بصاحب الورشة.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>سجل تدقيق يوضح أي تعديل على الأسعار أو الفواتير.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>أمان الورشة وسجل العمليات (Security & Audit Trail)</span>
              <span className="text-[#10B981] flex items-center gap-1 font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>محمي بكود PIN المدير</span>
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {/* PIN Screen Mockup */}
              <div className="bg-[#091426] p-3.5 rounded-xl border border-sav-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050914] flex items-center justify-center text-[#10B981]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">حماية بيانات الأرباح والتقارير:</span>
                    <span className="text-slate-400 text-[11px]">مفعلة برمز PIN سري للمدير</span>
                  </div>
                </div>
                <div className="font-mono text-sm tracking-widest text-[#10B981] bg-[#050914] px-3 py-1 rounded border border-sav-border">
                  ••••
                </div>
              </div>

              {/* Audit Trail Log */}
              <div className="bg-[#091426] p-3.5 rounded-xl border border-sav-border space-y-2">
                <span className="font-bold text-slate-300 text-[11px] flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>سجل التدقيق والمراقبة (Audit Log):</span>
                </span>
                <div className="space-y-1 font-mono text-[10px] text-slate-400">
                  <div className="flex justify-between py-0.5 border-b border-sav-border/40">
                    <span>تعديل سعر قطعة الغيار (Kit Led)</span>
                    <span className="text-slate-500">اليوم 11:20 • المدير</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-sav-border/40">
                    <span>تسجيل دفعة زبون (BaridiMob 8,500 دج)</span>
                    <span className="text-slate-500">أمس 16:45 • الاستقبال</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span>أخذ نسخة احتياطية محلية (Backup)</span>
                    <span className="text-[#10B981]">ناجحة ✓ • القرص D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* FEATURE 08: Offline Ownership */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2 bg-[#0D1B30] border border-sav-border rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-sav-border mb-4 text-xs font-bold text-slate-400">
              <span>الملكية المطلقة بدون إنترنت (Offline-First Architecture)</span>
              <span className="text-[#10B981] font-mono">Licence à Vie</span>
            </div>

            <div className="bg-[#091426] p-5 rounded-xl border border-sav-border space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-white block">ترخيص دائم لحاسوب الورشة</span>
                  <span className="text-slate-400 text-xs">تدفع مرة واحدة، وتستفيد للأبد</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-black text-sm">
                  0 دج اشتراك شهري
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px]">
                <div className="p-3 rounded-lg bg-[#050914] border border-sav-border">
                  <div className="font-bold text-white mb-1">100% بدون إنترنت</div>
                  <div className="text-slate-400">البرنامج يعمل حتى لو انقطع الإنترنت أو شبكة 4G.</div>
                </div>
                <div className="p-3 rounded-lg bg-[#050914] border border-sav-border">
                  <div className="font-bold text-white mb-1">بياناتك عندك</div>
                  <div className="text-slate-400">قاعدة بيانات محلية مشفرة بالكامل داخل قرص حاسوبك.</div>
                </div>
                <div className="p-3 rounded-lg bg-[#050914] border border-sav-border">
                  <div className="font-bold text-white mb-1">راحة البال التامة</div>
                  <div className="text-slate-400">لا تتفاجأ بتوقف النظام بسبب انتهاء مدة اشتراك.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
            <span className="text-xs font-mono font-bold text-[#10B981] tracking-wider uppercase">
              الميزة 08 • تملك البرنامج
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-alexandria leading-snug">
              برنامجك ملكك، وبياناتك تبقى عندك.
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              يعمل SAV MASTER محلياً على حاسوبك دون الاعتماد على اتصال دائم بالإنترنت. تدفع مرة واحدة، وتستفيد من النسخة المشتراة دون اشتراك شهري.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-sm shadow-md transition-all"
              >
                <span>اطلب نسختك الدائمة بـ {siteConfig.pricing.priceFormatted}</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
