import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function OrderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    workshopName: '',
    contactName: '',
    phone: '',
    wilaya: '16 - الجزائر (Alger)',
    specialty: 'تلفزيونات وشاشات (TV)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const algerianWilayas = [
    "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة",
    "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة",
    "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو",
    "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة",
    "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة",
    "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
    "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس",
    "36 - الطارف", "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة",
    "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة",
    "46 - عين تموشنت", "47 - غرداية", "48 - غليزان", "49 - تيميمون", "50 - برج باجي مختار",
    "51 - أولاد جلال", "52 - بني عباس", "53 - عين صالح", "54 - عين قزام", "55 - توقرت",
    "56 - جانت", "57 - المغير", "58 - المنيعة"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `السلام عليكم، أود طلب ترخيص برنامج ${siteConfig.brand.fullName}:
• اسم الورشة (لاتيلي): ${formData.workshopName}
• الاسم واللقب: ${formData.contactName}
• رقم الهاتف: ${formData.phone}
• الولاية: ${formData.wilaya}
• تخصص الورشة: ${formData.specialty}
${formData.notes ? `• تفاصيل إضافية: ${formData.notes}` : ''}
السعر: ${siteConfig.pricing.priceFormatted} (شراء مرة واحدة • ترخيص دائم).`;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneInternational}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0D1B30] border border-sav-border rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-lg bg-[#091426] border border-sav-border text-slate-400 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>طلب ترخيص دائم ({siteConfig.pricing.priceFormatted})</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-alexandria">
            طلب برنامج SAV MASTER لورشتك
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            املأ بيانات لاتيلي وسيتواصل معك فريقنا لتسليم النسخة والمساعدة في التثبيت والتفعيل.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              اسم الورشة (لاتيلي) *
            </label>
            <input
              type="text"
              required
              placeholder="مثال: ورشة النخبة للإلكترونيات"
              value={formData.workshopName}
              onChange={(e) => setFormData({ ...formData, workshopName: e.target.value })}
              className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                اسم ولقب المسؤول *
              </label>
              <input
                type="text"
                required
                placeholder="مثال: كمال بوعلام"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                رقم الهاتف (واتساب) *
              </label>
              <input
                type="tel"
                required
                placeholder="06 XX XX XX XX"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] font-mono text-right"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                الولاية *
              </label>
              <select
                value={formData.wilaya}
                onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#10B981]"
              >
                {algerianWilayas.map((w) => (
                  <option key={w} value={w} className="bg-[#0D1B30] text-white">
                    {w}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                التخصص الرئيسي *
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#10B981]"
              >
                <option value="تلفزيونات وشاشات (TV)">تلفزيونات وشاشات (TV)</option>
                <option value="أجهزة كهرومنزلية">أجهزة كهرومنزلية (Électroménager)</option>
                <option value="مكيفات وتبريد">مكيفات وتبريد (Froid & Climatisation)</option>
                <option value="هواتف وتابلت">هواتف وتابلت (Smartphones)</option>
                <option value="حواسيب ومكتبيات">حواسيب ومكتبيات (PC & Laptop)</option>
                <option value="تخصصات متعددة">تخصصات متعددة في نفس الورشة</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              ملاحظات أو استفسار إضافي (اختياري)
            </label>
            <textarea
              rows="2"
              placeholder="أي سؤال ترغب في طرحه على فريق الدعم..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-[#091426] border border-sav-border rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
            ></textarea>
          </div>

          {/* Pricing summary */}
          <div className="p-3 rounded-xl bg-[#091426] border border-sav-border text-xs text-slate-300 space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>قيمة الترخيص الدائم:</span>
              <span className="font-mono text-[#10B981] text-sm">{siteConfig.pricing.priceFormatted}</span>
            </div>
            <div className="text-[11px] text-slate-400">
              ✓ شراء لمرة واحدة • 0 دج اشتراك شهري • تشغيل 100% بدون إنترنت
            </div>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/25 transition-all duration-200"
          >
            {submitted ? (
              <span>جاري التحويل إلى واتساب...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>تأكيد الطلب والتواصل مع الدعم عبر واتساب</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
