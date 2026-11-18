import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050914] text-white flex flex-col items-center justify-center p-6 text-center" dir="rtl">
          <div className="w-16 h-16 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] text-2xl font-black mb-4">
            !
          </div>
          <h1 className="text-2xl font-bold font-alexandria mb-2">حدث تنبيه في تحميل الصفحة</h1>
          <p className="text-slate-400 text-sm max-w-md mb-6 font-alexandria">
            اضغط على الزر أدناه لإعادة تحميل الصفحة وحل المشكلة فوراً.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-[#10B981] text-[#050914] font-bold text-sm hover:bg-[#0ea5e9] transition-all"
            >
              تحديث الصفحة الآن (Reload)
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.reload();
              }}
              className="px-6 py-3 rounded-xl bg-[#0D1B30] text-slate-300 border border-slate-700 font-bold text-sm hover:text-white"
            >
              تفريغ الكاش وإعادة التحميل
            </button>
          </div>
          {this.state.error && (
            <pre className="mt-8 p-4 rounded-lg bg-black/60 text-red-400 text-xs font-mono text-left max-w-lg overflow-x-auto" dir="ltr">
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
