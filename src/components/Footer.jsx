import React from 'react';
import { Wrench, PhoneCall, MessageSquare, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ onOpenOrder }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050914] border-t border-sav-border text-slate-400 text-xs sm:text-sm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-sav-border">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0D1B30] border border-sav-border flex items-center justify-center text-[#10B981]">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white font-alexandria">
                {siteConfig.brand.fullName}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              برنامج مكتبي احترافي لإدارة ورشات التصليح ومراكز الخدمة في الجزائر. تسيير الأجهزة، قطع الغيار، الديون، وعمولات التقنيين دون إنترنت وبدون أي اشتراك شهري.
            </p>

            <div className="pt-1 text-xs text-slate-500 font-mono">
              الإصدار التجاري: {siteConfig.brand.edition}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs sm:text-sm font-alexandria">أقسام الصفحة</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#10B981] transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-[#10B981] transition-colors">المميزات الثمانية</a></li>
              <li><a href="#how-it-works" className="hover:text-[#10B981] transition-colors">كيف يعمل النظام</a></li>
              <li><a href="#showcase" className="hover:text-[#10B981] transition-colors">واجهة البرنامج</a></li>
              <li><a href="#pricing" className="hover:text-[#10B981] transition-colors">العرض والترخيص</a></li>
            </ul>
          </div>

          {/* Core Modules */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs sm:text-sm font-alexandria">وظائف لاتيلي</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-slate-200">فحص الضمان المزدوج (Dual-Scan)</span></li>
              <li><span className="hover:text-slate-200">مسار كانبان وإشعار واتساب</span></li>
              <li><span className="hover:text-slate-200">فصل عمولات التقنيين وكشف A4</span></li>
              <li><span className="hover:text-slate-200">ديون الزبائن ودفعات BaridiMob</span></li>
              <li><span className="hover:text-slate-200">ربط كاميرا الهاتف عبر Wi-Fi</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs sm:text-sm font-alexandria">التواصل والطلب</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="font-mono dir-ltr">{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.whatsapp.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
                <span>واتساب المبيعات والدعم</span>
              </a>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-1.5 text-[#10B981] font-bold hover:underline pt-1 text-right"
              >
                <span>طلب نسخة لورشتك الآن ←</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Policy Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة © {currentYear} {siteConfig.brand.name} • {siteConfig.brand.product}.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>شروط الاستخدام والدعم الفني المكتبي</span>
            <span>•</span>
            <span>سياسة حماية البيانات المحلية المشفرة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
