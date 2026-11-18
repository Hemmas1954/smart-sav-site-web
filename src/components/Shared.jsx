import React, { useEffect } from 'react';

// Scroll reveal hook
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

// Section wrapper
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Section heading
export function SectionHeading({ badge, title, subtitle }) {
  return (
    <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16">
      {badge && (
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-5">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
