import React, { useState, useEffect, useCallback } from 'react';
import logoImg from './assets/logo.jpg';
import campusImg from './assets/campus.jpg';
import { 
  Menu, 
  X, 
  Building2, 
  GraduationCap, 
  Calendar, 
  ChevronRight, 
  Newspaper 
} from 'lucide-react';

export interface GTIHomePageProps {
  onNavigate?: (view: string) => void;
}

export const GTIHomePage: React.FC<GTIHomePageProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Default State ကို null ထားပြီး API ရမှ ပြပါမည်
  const [latestNews, setLatestNews] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Database မှ News ဆွဲယူမည့် Function
  const fetchLatestNews = useCallback(async () => {
    try {
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // နောက်ဆုံးတင်ထားသော Post (ကဏ္ဍ ၁) ကို ယူမည်
          const item = data[0];
          setLatestNews({
            id: item.id,
            title: item.title,
            date: item.created_at || item.date || 'Recently',
            summary: item.content || item.summary,
            category: item.category || 'Announcement',
            image_url: item.image_url
          });
        }
      }
    } catch (err) {
      console.error("News fetching error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLatestNews();

    // Admin Dashboard က Post တင်ရင် Live Update ဖြစ်စေရန် Event Listener
    window.addEventListener('newsUpdated', fetchLatestNews);
    return () => {
      window.removeEventListener('newsUpdated', fetchLatestNews);
    };
  }, [fetchLatestNews]);

  const handleNavClick = (href: string, view: string) => {
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', href);
    }
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              onClick={() => handleNavClick('/', 'home')}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img src={logoImg} alt="GTI Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl tracking-wide leading-tight text-white">
                  GTI (Pyin Oo Lwin)
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-light">
                  Government Technical Institute
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('/', 'home')} className="text-base font-semibold text-slate-200 hover:text-[#64ffda]">Home</button>
              <button onClick={() => handleNavClick('/department', 'department')} className="text-base font-semibold text-slate-200 hover:text-[#64ffda]">Department</button>
              <button onClick={() => handleNavClick('/result', 'result')} className="text-base font-semibold text-slate-200 hover:text-[#64ffda]">Result</button>
              <button onClick={() => handleNavClick('/activity', 'activities')} className="text-base font-semibold text-slate-200 hover:text-[#64ffda]">Activities</button>
              <button onClick={() => handleNavClick('/latest-news', 'latest-news')} className="text-base font-semibold text-slate-200 hover:text-[#64ffda]">Latest News</button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-72 bg-slate-900 text-white flex items-center justify-center overflow-hidden">
        <img 
          src={campusImg} 
          alt="GTI Campus" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-md">
      Government Technical Institute <br />
      <span className="inline-block whitespace-nowrap">(Pyin Oo Lwin)</span>
    </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light drop-shadow">
            Empowering future engineers and leaders with practical technical education.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Background Section */}
          <section className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-6 inline-block">
                College Background
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src={campusImg}
                  alt="GTI Campus"
                  className="w-full sm:w-1/2 h-48 object-cover rounded-lg shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <p className="sm:w-1/2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Government Technical Institute (Pyin Oo Lwin) provides high-quality diploma programs designed to build technical proficiency and practical expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Dynamic Latest News Section */}
          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#0a192f] pb-2 mb-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Latest News</h2>
                <Newspaper className="w-5 h-5 text-slate-500" />
              </div>

              {loading ? (
                <div className="p-4 text-center text-slate-400 text-sm">Loading latest news...</div>
              ) : latestNews ? (
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#0a192f]">
                  {latestNews.image_url && (
                    <img 
                      src={latestNews.image_url} 
                      alt={latestNews.title} 
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                  )}
                  <span className="text-xs font-semibold text-slate-500 uppercase block mb-1">
                    {latestNews.date}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded mb-2">
                    {latestNews.category}
                  </span>
                  <h3 className="font-semibold text-slate-800 text-base mb-2 leading-snug">
                    {latestNews.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {latestNews.summary}
                  </p>
                </div>
              ) : (
                <div className="p-4 text-center text-slate-400 text-sm">No news available.</div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('/latest-news', 'latest-news')}
              className="mt-4 inline-flex items-center justify-center text-xs font-semibold text-[#0a192f] hover:text-blue-700 transition-colors"
            >
              View All News <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </section>

          {/* Quick Links Section */}
          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-4 inline-block">
                Quick Links
              </h2>
              <div className="space-y-3 mt-2">
                <button
                  onClick={() => handleNavClick('/department', 'department')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                    <span>Departments</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => handleNavClick('/result', 'result')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                    <span>Exam Results</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => handleNavClick('/activity', 'activities')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                    <span>Campus Activities</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-slate-400 text-sm py-6 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin).</p>
          <button
            type="button"
            onClick={() => handleNavClick('/admin', 'admin')}
            className="text-xs text-slate-500 hover:text-[#64ffda] mt-2 sm:mt-0"
          >
            Admin Portal
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GTIHomePage;