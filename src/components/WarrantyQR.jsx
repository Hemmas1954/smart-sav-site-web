import React, { useState } from 'react';
import { QrCode, Scan, ShieldCheck, ShieldAlert, CheckCircle, Smartphone, Calendar, Clock } from 'lucide-react';

export default function WarrantyQR() {
  const [selectedCase, setSelectedCase] = useState('valid'); // 'valid' | 'expired' | 'agent'

  const cases = {
    valid: {
      ticketNumber: '#SAV-2026-089',
      clientName: 'محمد بن علي',
      device: 'تلفاز Samsung 55" UHD 4K',
      repairDone: 'استبدال شريط ليدات Backlight أصلي',
      deliveryDate: '15 أكتوبر 2026',
      warrantyPeriod: '90 يوماً',
      expiryDate: '13 يناير 2027',
      daysLeft: 59,
      isUnderWarranty: true,
      warrantyStatusText: 'Sous Garantie (ساري المفعول)',
      badgeClass: 'bg-[#00E699]/10 text-[#00E699] border-[#00E699]/30',
    },
    expired: {
      ticketNumber: '#SAV-2026-034',
      clientName: 'فريد مسعودي',
      device: 'مكيف Condor 12000 BTU',
      repairDone: 'إصلاح كرت التغذية وشحن غاز',
      deliveryDate: '20 ماي 2026',
      warrantyPeriod: '60 يوماً',
      expiryDate: '19 جويلية 2026',
      daysLeft: 0,
      isUnderWarranty: false,
      warrantyStatusText: 'Hors Garantie (منتهي الصلاحية)',
      badgeClass: 'bg-red-500/10 text-red-400 border-red-500/30',
    },
    agent: {
      ticketNumber: '#SAV-2026-091',
      clientName: 'شركة النور (وكيل معتمد IRIS)',
      device: 'غسالة IRIS Frontale 8Kg',
      repairDone: 'استبدال محرك Inverter تحت عقد المصنع',
      deliveryDate: '01 نوفمبر 2026',
      warrantyPeriod: '180 يوماً (عقد المصنع)',
      expiryDate: '30 أفريل 2027',
      daysLeft: 166,
      isUnderWarranty: true,
      warrantyStatusText: 'Garantie Constructeur Agréé',
      badgeClass: 'bg-[#00F5FF]/10 text-[#00F5FF] border-[#00F5FF]/30',
    }
  };

  const current = cases[selectedCase];

  return (
    <section id="warranty-qr" className="py-16 sm:py-24 bg-[#030914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] text-xs font-semibold">
            <QrCode className="w-3.5 h-3.5" />
            <span>نظام الضمان الذكي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-tajawal">
            تحقق من الضمان قبل أن تتخذ قرار الإصلاح.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            مسح كود QR المطبوع على وصل الزبون يكشف لك فورياً تاريخ الإصلاح وعدد الأيام المتبقية في الضمان، لإنهاء نزاعات الزبائن وتجنب الصيانة المجانية لأجهزة انتهى ضمانها.
          </p>
        </div>

        {/* 3 Steps Visual Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          
          <div className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#071326] border border-sav-border flex items-center justify-center font-mono font-bold text-[#00F5FF] text-sm">
                01
              </span>
              <h3 className="font-bold text-white text-sm sm:text-base">
                مسح كود QR
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              مسح الرمز المطبوع على الفاتورة بواسطة قارئ الباركود، أو باستخدام كاميرا هاتفك عبر شبكة الـ Wi-Fi المحلية.
            </p>
          </div>

          <div className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#071326] border border-sav-border flex items-center justify-center font-mono font-bold text-[#00E699] text-sm">
                02
              </span>
              <h3 className="font-bold text-white text-sm sm:text-base">
                استرجاع بيانات الملف
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              يقوم النظام محلياً بجلب رقم الملف، اسم الزبون، العطل السابق المصلح، وقطع الغيار المركبة في ثوانٍ معدودة.
            </p>
          </div>

          <div className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#071326] border border-sav-border flex items-center justify-center font-mono font-bold text-[#F5B942] text-sm">
                03
              </span>
              <h3 className="font-bold text-white text-sm sm:text-base">
                فحص الصلاحية وحسم النزاع
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              ظهور حالة الضمان الدقيقة: هل هو سارٍ مع عدد الأيام المتبقية أم منتهٍ، استناداً إلى البيانات المسجلة في النظام.
            </p>
          </div>

        </div>

        {/* Live Interactive Scanner Simulation */}
        <div className="max-w-4xl mx-auto bg-[#071326] border border-sav-border rounded-2xl p-5 sm:p-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-sav-border mb-6">
            <div>
              <span className="text-xs font-bold text-slate-400 block">محاكاة عملية حية:</span>
              <span className="text-base sm:text-lg font-bold text-white">اختر حالة وصل لفحص نتيجة الضمان الفورية:</span>
            </div>

            {/* Case selector buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCase('valid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCase === 'valid'
                    ? 'bg-[#00E699] text-[#030914]'
                    : 'bg-[#0A1A33] text-slate-300 hover:bg-slate-800'
                }`}
              >
                وصل ساري الضمان
              </button>

              <button
                onClick={() => setSelectedCase('expired')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCase === 'expired'
                    ? 'bg-red-500 text-white'
                    : 'bg-[#0A1A33] text-slate-300 hover:bg-slate-800'
                }`}
              >
                وصل منتهي الضمان
              </button>

              <button
                onClick={() => setSelectedCase('agent')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCase === 'agent'
                    ? 'bg-[#00F5FF] text-[#030914]'
                    : 'bg-[#0A1A33] text-slate-300 hover:bg-slate-800'
                }`}
              >
                ضمان مصنع (Agent Agréé)
              </button>
            </div>
          </div>

          {/* Scanner Result Card */}
          <div className="bg-[#0A1A33] border border-sav-border rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Visual Simulated QR Ticket */}
            <div className="bg-white text-slate-900 rounded-lg p-4 font-mono text-center flex flex-col items-center justify-center space-y-2 border border-slate-300">
              <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                وصل الصيانة المطبوع
              </div>
              <div className="w-24 h-24 bg-slate-100 p-2 rounded flex items-center justify-center border border-slate-300">
                <QrCode className="w-full h-full text-slate-900" />
              </div>
              <div className="text-xs font-bold text-slate-800">{current.ticketNumber}</div>
              <div className="text-[9px] text-slate-500 font-sans">امسح الكود للفحص الفوري</div>
            </div>

            {/* Scanned Data */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">حالة الضمان الحالية:</span>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${current.badgeClass}`}>
                  {current.warrantyStatusText}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-sav-border">
                <div>
                  <span className="text-slate-500 text-xs block">الزبون:</span>
                  <span className="font-bold text-white">{current.clientName}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">الجهاز:</span>
                  <span className="font-bold text-white">{current.device}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">العطل المصلح سابقاً:</span>
                  <span className="text-slate-200">{current.repairDone}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">تاريخ التسليم:</span>
                  <span className="font-mono text-slate-200">{current.deliveryDate}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-sav-border flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-[#00F5FF]" />
                  <span>تاريخ الانتهاء: <b className="font-mono text-white">{current.expiryDate}</b></span>
                </div>

                <div className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#F5B942]" />
                  {current.isUnderWarranty ? (
                    <span className="text-[#00E699]">متبقي في الضمان: {current.daysLeft} يوماً (Jours restants)</span>
                  ) : (
                    <span className="text-red-400">الضمان منتهٍ منذ فترة (Hors Garantie)</span>
                  )}
                </div>
              </div>

            </div>

          </div>

          <div className="mt-4 text-center text-[11px] text-slate-400">
            * تنبيه: نتيجة الفحص مبنية ومطابقة تماماً للمعلومات وتاريخ التسليم وفترة الضمان المسجلة محلياً في قاعدة بيانات الورشة.
          </div>

        </div>

      </div>
    </section>
  );
}
