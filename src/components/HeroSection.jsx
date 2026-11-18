import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Play, 
  WifiOff, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  CreditCard, 
  Boxes, 
  Smartphone,
  Sparkles,
  ZoomIn,
  X,
  Box,
  Monitor,
  ShieldCheck,
  Check,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Cinematic easing curves
const transitionCinematic = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1]
};

export default function HeroSection({ onOpenOrder, onOpenTour }) {
  const [showcaseMode, setShowcaseMode] = useState('3d'); // '3d' or 'simulator'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-enterprise-grid">
      
      {/* 1. Cinematic Ambient Lighting Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] max-w-full h-[360px] bg-[#10B981]/[0.06] rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/3 right-1/4 w-[450px] max-w-full h-[300px] bg-[#22D3EE]/[0.04] rounded-full blur-[130px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Brand Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1B30] border border-sav-border text-slate-300 text-xs sm:text-sm font-medium shadow-md shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-semibold text-white">نظام احترافي لإدارة ورشات التصليح في الجزائر</span>
            <span className="text-slate-500">|</span>
            <span className="text-[#22D3EE] font-mono text-xs">v1.0.0 Desktop</span>
          </div>
        </motion.div>

        {/* 3. Hero Headings Sequence */}
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
          
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight font-alexandria"
          >
            ورشتك تحت السيطرة.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#10B981] via-[#34D399] to-[#22D3EE] mt-1.5 pb-1">
              من أول جهاز يدخل، حتى آخر دينار يخرج.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal px-2"
          >
            ودّع الفوضى تاع الدفاتر والمكالمات والحسابات المتفرقة. مع ANALYSE DZ • SAV MASTER، سيّر التصليحات، راقب قطع الغيار، تحكّم في الديون وعمولات التقنيين، واعرف الوضعية الحقيقية لورشتك من مكان واحد.
          </motion.p>

          {/* 4. Highlight Tag Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#091426] border border-[#10B981]/30 text-xs sm:text-sm text-slate-200 font-semibold shadow-inner flex-wrap justify-center">
              <span className="text-[#10B981]">✓</span>
              <span>شراء مرة واحدة</span>
              <span className="text-slate-600">•</span>
              <span className="text-[#10B981] font-bold">0 دج اشتراك شهري</span>
              <span className="text-slate-600">•</span>
              <span className="text-[#10B981]">✓</span>
              <span>يعمل بدون إنترنت (100% Offline)</span>
            </div>
          </motion.div>

          {/* 5. CTAs with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
          >
            <button
              onClick={onOpenOrder}
              className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#10B981] text-[#050914] font-black text-sm sm:text-base shadow-lg shadow-[#10B981]/25 hover:shadow-xl hover:shadow-[#10B981]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {/* Light reflection effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
              <span>اطلب نسختك الآن ({siteConfig.pricing.priceFormatted})</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0D1B30] hover:bg-[#11233E] text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-sav-border hover:border-slate-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              <Play className="w-4 h-4 text-[#22D3EE] fill-[#22D3EE]/20" />
              <span>شاهد إمكانيات النظام</span>
            </button>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>ترخيص دائم لحاسوب الورشة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>بياناتك محفوظة محلياً بأمان</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>دعم وتثبيت مخصص في الجزائر</span>
            </div>
          </motion.div>
        </div>

        {/* 6. CINEMATIC 3D MASTER SHOWCASE & INTERACTIVE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-1.5 sm:p-2 bg-gradient-to-b from-[#10B981]/30 via-sav-border to-[#22D3EE]/20 shadow-[0_20px_70px_rgba(16,185,129,0.15)] overflow-hidden group">
            
            {/* Occasional soft light sheen reflection */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20">
              <div className="w-[150%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-sheen" />
            </div>

            <div className="rounded-xl bg-[#050914] border border-sav-border/80 overflow-hidden">
              
              {/* Window Title & Showcase Mode Switcher Bar */}
              <div className="bg-[#091426] border-b border-sav-border px-3 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/90 inline-block"></span>
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-2 hidden sm:block"></div>
                  <span className="text-xs font-mono text-slate-300 font-bold hidden sm:inline">
                    ANALYSE DZ • SAV MASTER
                  </span>
                </div>

                {/* Primary Dual View Switcher */}
                <div className="flex items-center p-1 bg-[#050914] rounded-xl border border-sav-border shadow-inner">
                  <button
                    onClick={() => setShowcaseMode('3d')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      showcaseMode === '3d'
                        ? 'bg-[#10B981] text-[#050914] shadow-md shadow-[#10B981]/25'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>عرض المنظومة ثلاثية الأبعاد (3D)</span>
                  </button>

                  <button
                    onClick={() => setShowcaseMode('simulator')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      showcaseMode === 'simulator'
                        ? 'bg-[#22D3EE] text-[#050914] shadow-md shadow-[#22D3EE]/25'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>المحاكي التفاعلي المباشر</span>
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/30 hidden md:flex items-center gap-1.5">
                  <WifiOff className="w-3 h-3 text-[#10B981]" />
                  <span>100% Offline • ترخيص دائم</span>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* VIEW MODE 1: 3D MASTER PRODUCT SUITE SHOWCASE */}
              {/* ------------------------------------------------------------- */}
              {showcaseMode === '3d' && (
                <div className="p-3 sm:p-6 bg-gradient-to-b from-[#091426]/60 to-[#050914] space-y-6">
                  
                  {/* Top quick banner inside frame */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-[#0D1B30]/90 border border-sav-border text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                      <span className="font-semibold text-white">البرنامج الشامل لإدارة ورشات ومراكز الصيانة</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="text-[#22D3EE] hidden sm:inline font-mono">8 وحدات متكاملة في برنامج واحد</span>
                    </div>

                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#050914] hover:bg-[#11233E] text-slate-300 hover:text-[#22D3EE] border border-sav-border transition-colors text-[11px] font-semibold"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span>تكبير العلبة والشاشة (Full HD)</span>
                    </button>
                  </div>

                  {/* Flagship 3D Render Display Container */}
                  <div 
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative rounded-2xl overflow-hidden border border-sav-border bg-[#030712] cursor-pointer group/img shadow-2xl transition-all duration-300 hover:border-[#10B981]/50"
                  >
                    <img 
                      src="/images/hero-showcase.jpg" 
                      alt="ANALYSE DZ • SAV MASTER - منظومة إدارة ورشات الصيانة ثلاثية الأبعاد والعلبة الرسمية" 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/img:scale-[1.015]"
                      loading="eager"
                    />

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="px-5 py-2.5 rounded-xl bg-[#0D1B30]/95 border border-[#10B981]/50 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4 text-[#10B981]" />
                        <span>انقر لتكبير واستعراض تفاصيل العلبة وشاشات النظام</span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Feature Highlights directly from the 3D Render */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0D1B30] border border-sav-border hover:border-[#10B981]/40 transition-colors">
                      <div className="text-[11px] text-[#10B981] font-mono font-bold mb-1">01 • شاشة كانبان</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1">6 مراحل لتتبع الأجهزة</div>
                      <div className="text-[11px] text-slate-400">استقبال، تشخيص، تصليح، فحص، جاهز، تسليم.</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0D1B30] border border-sav-border hover:border-[#22D3EE]/40 transition-colors">
                      <div className="text-[11px] text-[#22D3EE] font-mono font-bold mb-1">02 • علبة التملك</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1">ترخيص دائم مدى الحياة</div>
                      <div className="text-[11px] text-slate-400">تثبيت رسمي لحاسوب الورشة بدون اشتراك شهري.</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0D1B30] border border-sav-border hover:border-[#F5B942]/40 transition-colors">
                      <div className="text-[11px] text-[#F5B942] font-mono font-bold mb-1">03 • 8 وحدات مدمجة</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1">شامل لكل عمليات الورشة</div>
                      <div className="text-[11px] text-slate-400">حماية الضمان، الكريدي، قطع الغيار، وعمولات التقنيين.</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0D1B30] border border-sav-border hover:border-[#10B981]/40 transition-colors">
                      <div className="text-[11px] text-[#10B981] font-mono font-bold mb-1">04 • دون إنترنت</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1">100% Offline محلي</div>
                      <div className="text-[11px] text-slate-400">بياناتك مشفرة محلياً على جهازك ومحمية برقم PIN.</div>
                    </div>
                  </div>

                  {/* Switch to Interactive Simulator prompt */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#091426] via-[#0D1B30] to-[#091426] border border-[#22D3EE]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        تريد اختبار واجهة البرنامج وحسابات الصندوق بنفسك؟
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        جرب المحاكي الحي المباشر للأرباح وكانبان والديون والمخزون.
                      </div>
                    </div>
                    <button
                      onClick={() => setShowcaseMode('simulator')}
                      className="px-4 py-2 rounded-lg bg-[#22D3EE] hover:bg-[#38bdf8] text-[#050914] font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all shadow-md shadow-[#22D3EE]/20"
                    >
                      <span>اختبر المحاكي المباشر الآن</span>
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>

                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* VIEW MODE 2: INTERACTIVE LIVE DASHBOARD SIMULATOR */}
              {/* ------------------------------------------------------------- */}
              {showcaseMode === 'simulator' && (
                <div>
                  {/* Application Interactive View Tabs */}
                  <div className="bg-[#091426]/70 border-b border-sav-border px-3 sm:px-4 pt-2 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`px-3 py-2 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x ${
                          activeTab === 'dashboard'
                            ? 'bg-[#050914] text-[#10B981] border-sav-border border-b-transparent -mb-px'
                            : 'text-slate-400 hover:text-slate-200 border-transparent'
                        }`}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>لوحة التحكم (الصندوق والأرباح)</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('repairs')}
                        className={`px-3 py-2 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x ${
                          activeTab === 'repairs'
                            ? 'bg-[#050914] text-[#22D3EE] border-sav-border border-b-transparent -mb-px'
                            : 'text-slate-400 hover:text-slate-200 border-transparent'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>مسار التصليحات (كانبان 6 مراحل)</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('debts')}
                        className={`px-3 py-2 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x ${
                          activeTab === 'debts'
                            ? 'bg-[#050914] text-[#F5B942] border-sav-border border-b-transparent -mb-px'
                            : 'text-slate-400 hover:text-slate-200 border-transparent'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>ديون الزبائن (الكريدي وBaridiMob)</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('parts')}
                        className={`px-3 py-2 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x ${
                          activeTab === 'parts'
                            ? 'bg-[#050914] text-[#10B981] border-sav-border border-b-transparent -mb-px'
                            : 'text-slate-400 hover:text-slate-200 border-transparent'
                        }`}
                      >
                        <Boxes className="w-3.5 h-3.5" />
                        <span>مخزون قطع الغيار وعمولات التقنيين</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setShowcaseMode('3d')}
                      className="text-xs text-[#10B981] hover:underline font-bold flex items-center gap-1 shrink-0 pb-2 px-2"
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>عرض العلبة ثلاثية الأبعاد 3D</span>
                    </button>
                  </div>

                  {/* View Content Area with Tab Transitions */}
                  <div className="p-4 sm:p-6 bg-[#050914] min-h-[380px]">
                    
                    {/* TAB 1: WORKSHOP DASHBOARD & FINANCIALS */}
                    {activeTab === 'dashboard' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4"
                      >
                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="bg-[#0D1B30] p-3.5 rounded-xl border border-sav-border hover:border-[#10B981]/40 transition-colors">
                            <div className="text-xs text-slate-400 mb-1">مداخيل الصندوق هذا الشهر</div>
                            <div className="text-lg sm:text-2xl font-bold font-mono text-white">
                              684,200 <span className="text-xs font-normal text-[#10B981]">دج</span>
                            </div>
                            <div className="text-[11px] text-[#10B981] mt-1">↑ صافي العمليات المسجلة</div>
                          </div>

                          <div className="bg-[#0D1B30] p-3.5 rounded-xl border border-sav-border hover:border-[#22D3EE]/40 transition-colors">
                            <div className="text-xs text-slate-400 mb-1">أجرة اليد العاملة الصافية</div>
                            <div className="text-lg sm:text-2xl font-bold font-mono text-white">
                              312,000 <span className="text-xs font-normal text-[#22D3EE]">دج</span>
                            </div>
                            <div className="text-[11px] text-slate-400 mt-1">وعاء عمولات التقنيين</div>
                          </div>

                          <div className="bg-[#0D1B30] p-3.5 rounded-xl border border-sav-border hover:border-[#F5B942]/40 transition-colors">
                            <div className="text-xs text-slate-400 mb-1">قطع الغيار المباعة</div>
                            <div className="text-lg sm:text-2xl font-bold font-mono text-white">
                              372,200 <span className="text-xs font-normal text-[#F5B942]">دج</span>
                            </div>
                            <div className="text-[11px] text-[#F5B942] mt-1">محمية 100% لصاحب الورشة</div>
                          </div>

                          <div className="bg-[#0D1B30] p-3.5 rounded-xl border border-sav-border hover:border-red-500/40 transition-colors">
                            <div className="text-xs text-slate-400 mb-1">ديون معلقة (الكريدي)</div>
                            <div className="text-lg sm:text-2xl font-bold font-mono text-red-400">
                              48,500 <span className="text-xs font-normal text-slate-400">دج</span>
                            </div>
                            <div className="text-[11px] text-red-300 mt-1">7 زبائن بانتظار التحصيل</div>
                          </div>
                        </div>

                        {/* Active Repairs Live Feed */}
                        <div className="bg-[#0D1B30] rounded-xl border border-sav-border p-3 sm:p-4">
                          <div className="text-xs font-bold text-slate-300 mb-3 flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                              <span>أحدث الأجهزة في الورشة الآن:</span>
                            </span>
                            <span className="text-xs text-slate-500 font-mono">تحديث فوري محلي</span>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#091426] border border-sav-border/60">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[#22D3EE] font-bold">#SAV-089</span>
                                <span className="text-white font-medium">Samsung 55" UHD Smart TV</span>
                                <span className="text-slate-400 text-[11px] hidden sm:inline">(مشكل ليدات + كرت التغذية)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-[#F5B942]/10 text-[#F5B942] border border-[#F5B942]/30 text-[11px]">
                                  قيد التصليح (Réparation)
                                </span>
                                <span className="text-slate-300 font-mono hidden md:inline">18,500 دج</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#091426] border border-sav-border/60">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[#22D3EE] font-bold">#SAV-088</span>
                                <span className="text-white font-medium">غسالة Brandt Frontale 8Kg</span>
                                <span className="text-slate-400 text-[11px] hidden sm:inline">(تغيير محرك الطرد + جوان)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-[11px]">
                                  جاهز للتسليم (Prêt)
                                </span>
                                <span className="text-slate-300 font-mono hidden md:inline">12,000 دج</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#091426] border border-sav-border/60">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[#22D3EE] font-bold">#SAV-087</span>
                                <span className="text-white font-medium">مكيف Condor 12000 BTU Inverter</span>
                                <span className="text-slate-400 text-[11px] hidden sm:inline">(شحن غاز R410A + لحام)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[11px]">
                                  الفحص والتجريب (Test)
                                </span>
                                <span className="text-slate-300 font-mono hidden md:inline">9,500 دج</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: KANBAN WORKFLOW */}
                    {activeTab === 'repairs' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                      >
                        <div className="text-xs text-slate-400 mb-2 flex items-center justify-between">
                          <span>لوحة كانبان بـ 6 مراحل واضحة لحركة الأجهزة:</span>
                          <span className="text-[#10B981] font-mono text-[11px]">سحب وإفلات Drag & Drop سلس</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-sav-border">
                            <div className="text-[11px] font-bold text-slate-300 pb-1.5 border-b border-sav-border flex justify-between">
                              <span>1. الاستقبال</span>
                              <span className="text-[#22D3EE] font-mono">12</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-300 border border-slate-700/50 space-y-0.5">
                              <div className="font-mono text-[#22D3EE]">LG 43" 4K</div>
                              <div className="text-slate-400">إيصال #092 مطبوع</div>
                            </div>
                          </div>

                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-sav-border">
                            <div className="text-[11px] font-bold text-slate-300 pb-1.5 border-b border-sav-border flex justify-between">
                              <span>2. التشخيص</span>
                              <span className="text-[#F5B942] font-mono">5</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-300 border border-slate-700/50 space-y-0.5">
                              <div className="font-mono text-[#F5B942]">غسالة LG 9Kg</div>
                              <div className="text-slate-400">تحديد العطل وكشف السعر</div>
                            </div>
                          </div>

                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-sav-border">
                            <div className="text-[11px] font-bold text-slate-300 pb-1.5 border-b border-sav-border flex justify-between">
                              <span>3. التصليح</span>
                              <span className="text-amber-400 font-mono">8</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-300 border border-slate-700/50 space-y-0.5">
                              <div className="font-mono text-amber-300">Samsung 55"</div>
                              <div className="text-slate-400">التقني: هشام</div>
                            </div>
                          </div>

                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-sav-border">
                            <div className="text-[11px] font-bold text-slate-300 pb-1.5 border-b border-sav-border flex justify-between">
                              <span>4. التجريب</span>
                              <span className="text-blue-400 font-mono">4</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-300 border border-slate-700/50 space-y-0.5">
                              <div className="font-mono text-blue-300">مكيف Condor</div>
                              <div className="text-slate-400">فحص ضغط الغاز 24h</div>
                            </div>
                          </div>

                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-[#10B981]/40 bg-[#10B981]/5">
                            <div className="text-[11px] font-bold text-[#10B981] pb-1.5 border-b border-[#10B981]/30 flex justify-between">
                              <span>5. جاهز للتسليم</span>
                              <span className="font-mono">7</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-300 border border-[#10B981]/30 space-y-0.5">
                              <div className="font-mono text-[#10B981]">ثلاجة Beko</div>
                              <div className="text-[#10B981] text-[9px]">تم إشعار الزبون WhatsApp ✓</div>
                            </div>
                          </div>

                          <div className="bg-[#0D1B30] p-2.5 rounded-xl border border-sav-border">
                            <div className="text-[11px] font-bold text-slate-300 pb-1.5 border-b border-sav-border flex justify-between">
                              <span>6. تم التسليم</span>
                              <span className="text-slate-400 font-mono">142</span>
                            </div>
                            <div className="mt-2 p-1.5 rounded bg-[#091426] text-[10px] text-slate-400 border border-slate-700/50 space-y-0.5">
                              <div className="font-mono text-slate-300">TV Iris 32"</div>
                              <div className="text-slate-500">تم القبض + كود الضمان</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 3: CUSTOMER DEBTS & BARIDIMOB */}
                    {activeTab === 'debts' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                            <div className="text-xs text-slate-400 mb-1">إجمالي الكريدي المعلق</div>
                            <div className="text-xl font-bold font-mono text-red-400">48,500 دج</div>
                            <div className="text-[10px] text-slate-400">7 زبائن</div>
                          </div>
                          <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                            <div className="text-xs text-slate-400 mb-1">المحصّل عبر BaridiMob</div>
                            <div className="text-xl font-bold font-mono text-[#22D3EE]">86,000 دج</div>
                            <div className="text-[10px] text-[#22D3EE]">مع توثيق رقم التحويل RIP</div>
                          </div>
                          <div className="bg-[#0D1B30] p-3 rounded-xl border border-sav-border">
                            <div className="text-xs text-slate-400 mb-1">المحصّل نقداً كاش</div>
                            <div className="text-xl font-bold font-mono text-[#10B981]">549,700 دج</div>
                            <div className="text-[10px] text-[#10B981]">في صندوق الورشة</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0D1B30] border border-sav-border text-xs space-y-2">
                          <div className="font-bold text-slate-300 flex justify-between">
                            <span>نموذج كشف حساب زبون (Extrait de compte):</span>
                            <span className="text-[#F5B942] font-mono">الزبون: كمال بوعلام (الأبيار)</span>
                          </div>
                          <div className="p-2 rounded bg-[#091426] flex items-center justify-between text-[11px] font-mono">
                            <span>• تصليح شاشة Samsung 65" (فاتورة #2026-114)</span>
                            <span className="text-slate-300">المبلغ: 26,500 دج</span>
                          </div>
                          <div className="p-2 rounded bg-[#091426] flex items-center justify-between text-[11px] font-mono text-[#10B981]">
                            <span>• دفعة سداد عبر BaridiMob (تحويل #TX-99410)</span>
                            <span>- 8,500 دج</span>
                          </div>
                          <div className="p-2 rounded bg-red-950/30 border border-red-500/30 flex items-center justify-between text-[11px] font-mono font-bold text-red-300">
                            <span>الرصيد المتبقي بذمة الزبون (Reste à payer):</span>
                            <span>18,000 دج (تذكير واتساب بنقرة واحدة)</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 4: SPARE PARTS & COMMISSIONS */}
                    {activeTab === 'parts' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                      >
                        <div className="p-3.5 rounded-xl bg-[#0D1B30] border border-sav-border text-xs space-y-3">
                          <div className="flex items-center justify-between border-b border-sav-border pb-2">
                            <span className="font-bold text-slate-200">
                              فصل أموال قطع الغيار عن عمولة التقني (حماية أرباح صاحب الورشة):
                            </span>
                            <span className="text-[#10B981] font-mono text-[11px]">حساب آلي دقيق</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 rounded bg-[#091426] border border-slate-700/50">
                              <div className="text-slate-400 text-[10px]">تكلفة قطع الغيار (PMP)</div>
                              <div className="text-sm font-bold font-mono text-[#F5B942]">12,000 دج</div>
                              <div className="text-[10px] text-[#F5B942]">حق صاحب الورشة 100%</div>
                            </div>
                            <div className="p-2 rounded bg-[#091426] border border-slate-700/50">
                              <div className="text-slate-400 text-[10px]">أجرة اليد العاملة الصافية</div>
                              <div className="text-sm font-bold font-mono text-[#22D3EE]">3,500 دج</div>
                              <div className="text-[10px] text-[#22D3EE]">وعاء احتساب العمولة</div>
                            </div>
                            <div className="p-2 rounded bg-[#091426] border border-[#10B981]/40 bg-[#10B981]/5">
                              <div className="text-slate-400 text-[10px]">عمولة التقني (مثلاً 25%)</div>
                              <div className="text-sm font-bold font-mono text-[#10B981]">875 دج فقط</div>
                              <div className="text-[10px] text-[#10B981]">لا يأخذ ديناراً من ثمن القطع</div>
                            </div>
                          </div>

                          <div className="p-2 rounded bg-[#091426] text-[11px] text-slate-300 flex items-center justify-between font-mono">
                            <span>كشف أجر شهري مفصل A4 قابل للطباعة لكل تقني مع تفقيط المبلغ بالدينار الجزائري.</span>
                            <span className="text-[#10B981]">جاهز للطباعة ✓</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </div>
                </div>
              )}

            </div>
          </div>
        </motion.div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 7. HIGH-DEFINITION LIGHTBOX MODAL FOR 3D RENDER */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
            
            {/* Backdrop click to close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 cursor-zoom-out"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#0D1B30] border border-sav-border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Top Modal Header */}
              <div className="bg-[#091426] border-b border-sav-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-xs font-bold font-mono">
                    ANALYSE DZ • SAV MASTER
                  </span>
                  <span className="text-xs text-slate-300 hidden sm:inline">
                    المنظومة ثلاثية الأبعاد • عرض فائق الدقة
                  </span>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-[#050914] hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-sav-border transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* High-res Image Scrollable Viewport */}
              <div className="overflow-y-auto p-2 sm:p-4 bg-[#050914] flex items-center justify-center">
                <img 
                  src="/images/hero-showcase.jpg" 
                  alt="ANALYSE DZ • SAV MASTER High-Definition Showcase" 
                  className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-2xl border border-sav-border/60"
                />
              </div>

              {/* Bottom Modal Footer with CTAs */}
              <div className="bg-[#091426] border-t border-sav-border px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white">ترخيص دائم لحاسوب الورشة</span>
                  <span className="text-slate-500 mx-2">•</span>
                  <span className="text-[#10B981] font-bold">{siteConfig.pricing.priceFormatted}</span>
                  <span className="text-slate-500 mx-2">•</span>
                  <span className="text-slate-400">0 دج اشتراك شهري</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsLightboxOpen(false);
                      onOpenOrder();
                    }}
                    className="px-5 py-2 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#050914] font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-[#10B981]/25 transition-all"
                  >
                    <span>اطلب نسختك الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="px-4 py-2 rounded-xl bg-[#0D1B30] text-slate-300 hover:text-white border border-sav-border text-xs transition-colors"
                  >
                    إغلاق
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
