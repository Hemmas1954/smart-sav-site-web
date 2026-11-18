import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowLeft, Wrench } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ onOpenOrder }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const links = [
    { label: "الرئيسية", href: "#hero" },
    { label: "المميزات", href: "#features" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "واجهة النظام", href: "#showcase" },
    { label: "العرض", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050914]/92 backdrop-blur-xl border-b border-sav-border shadow-lg shadow-black/40 py-3'
          : 'bg-[#050914]/75 backdrop-blur-md border-b border-sav-border/40 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Product Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0D1B30] border border-sav-border flex items-center justify-center group-hover:border-[#10B981]/50 transition-colors shrink-0">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white font-alexandria">
                {siteConfig.brand.name}
              </span>
              <span className="text-sm sm:text-base font-black text-[#10B981]">
                • {siteConfig.brand.product}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-inter tracking-wider">
              {siteConfig.brand.edition}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#091426]/80 border border-sav-border px-3 py-1.5 rounded-full text-xs font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-[#10B981] px-3 py-1 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-[#0D1B30] border border-sav-border hover:border-slate-500 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span className="font-mono" dir="ltr">{siteConfig.contact.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenOrder}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10B981] text-[#050914] font-bold text-xs sm:text-sm hover:bg-[#34D399] transition-all shadow-sm hover:shadow-[#10B981]/25"
          >
            <span>اطلب نسختك</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#0D1B30] border border-sav-border text-slate-300 hover:text-white focus:outline-none"
          aria-label="القائمة"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sav-border bg-[#050914]/98 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-sav-border">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-slate-300 hover:text-[#10B981] hover:bg-[#0D1B30] p-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0D1B30] border border-sav-border text-slate-200 text-xs sm:text-sm font-medium"
            >
              <PhoneCall className="w-4 h-4 text-[#22D3EE]" />
              <span>اتصال مباشر: </span>
              <span className="font-mono dir-ltr font-bold text-[#22D3EE]">
                {siteConfig.contact.phoneDisplay}
              </span>
            </a>

            <button
              onClick={() => {
                closeMenu();
                onOpenOrder();
              }}
              className="w-full py-3 rounded-lg bg-[#10B981] text-[#050914] font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span>اطلب نسختك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
