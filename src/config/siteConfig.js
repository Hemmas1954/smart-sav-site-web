/**
 * ANALYSE DZ • SAV MASTER
 * Centralized Application & Landing Page Configuration
 */

export const siteConfig = {
  brand: {
    name: "ANALYSE DZ",
    product: "SAV MASTER",
    fullName: "ANALYSE DZ • SAV MASTER",
    edition: "v1.0.0 Enterprise Desktop Edition",
    headline: "ورشتك تحت السيطرة. من أول جهاز يدخل، حتى آخر دينار يخرج.",
    tagline: "ودّع الفوضى تاع الدفاتر والمكالمات والحسابات المتفرقة. مع ANALYSE DZ • SAV MASTER، سيّر التصليحات، راقب قطع الغيار، تحكّم في الديون وعمولات التقنيين، واعرف الوضعية الحقيقية لورشتك من مكان واحد.",
    version: "v1.0.0",
  },
  
  contact: {
    phoneDisplay: "0676 06 76 52",
    phoneRaw: "0676067652",
    phoneInternational: "213676067652",
    email: "contact@analysedz.com",
    address: "الجزائر",
  },

  pricing: {
    priceDzd: 19000,
    priceFormatted: "19,000 دج",
    isLifetime: true,
    hasSubscription: false,
    badgeText: "شراء مرة واحدة • بدون اشتراك شهري • يعمل بدون إنترنت",
    subscriptionFee: "0 دج اشتراك شهري",
  },

  whatsapp: {
    hero: `https://wa.me/213676067652?text=${encodeURIComponent(
      "السلام عليكم، أود الاستفسار حول برنامج ANALYSE DZ • SAV MASTER وطلب نسخة لورشتي (19,000 دج)."
    )}`,
    pricing: `https://wa.me/213676067652?text=${encodeURIComponent(
      "السلام عليكم، أريد طلب ترخيص SAV MASTER الدائم (19,000 دج) وتفاصيل التثبيت على حاسوب الورشة."
    )}`,
    demo: `https://wa.me/213676067652?text=${encodeURIComponent(
      "السلام عليكم، أريد معاينة عملية لإمكانيات برنامج SAV MASTER وكيف يخدم تخصص ورشتي."
    )}`,
    general: `https://wa.me/213676067652?text=${encodeURIComponent(
      "السلام عليكم، لدي استفسار بخصوص برنامج ANALYSE DZ • SAV MASTER لإدارة ورشات التصليح."
    )}`,
  },

  navLinks: [
    { id: "hero", label: "الرئيسية", href: "#hero" },
    { id: "features", label: "المميزات", href: "#features" },
    { id: "how-it-works", label: "كيف يعمل", href: "#how-it-works" },
    { id: "showcase", label: "واجهة النظام", href: "#showcase" },
    { id: "pricing", label: "العرض والترخيص", href: "#pricing" },
    { id: "faq", label: "الأسئلة الشائعة", href: "#faq" },
  ],
};
