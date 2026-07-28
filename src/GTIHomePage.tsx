import React, { useState, useEffect } from 'react';
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

interface NavLink {
  name: string;
  href: string;
 view: 'home' | 'department' | 'result' | 'activities' | 'news' | 'schoolinfo';
}

interface NewsItem {
  id: string | number;
  title: string;
  date?: string;
  created_at?: string;
  summary?: string;
  content?: string;
  category: string;
  image_url?: string;
}

const GTIHomePage: React.FC<any> = ({ onNavigate }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Centralized navigation handler mapping paths to view states
  const handleNavClick = (href: string, view: string) => {
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', href);
      if (onNavigate) {
        onNavigate(view);
      }
    }
  };
  // D1 Database မှ တိုက်ရိုက် ရရှိလာမည့် Latest News State
  const [latestNews, setLatestNews] = useState<NewsItem>({
    id: 'news-2026-001',
    title: 'Academic Year 2026-2027 Registration & Course Schedules',
    date: 'July 20, 2026',
    summary: 'Official course registration and timetable details for Civil, Electrical, and Mechanical departments are now available.',
    category: 'Academic Announcement'
  });

  // D1 Database ထဲမှ Data ကို Auto ခေါ်ယူခြင်း
  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          const item = data[0]; // အသစ်ဆုံး သတင်းကို ရွေးထုတ်ခြင်း
          setLatestNews({
            id: item.id,
            title: item.title,
            date: item.created_at || 'Recently',
            summary: item.content,
            category: item.category,
            image_url: item.image_url
          });
        }
      })
      .catch((err) => console.log("Using default fallback news data",err));
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', view: 'home' },
    { name: 'Department', href: '/department', view: 'department' },
    { name: 'Result', href: '/result', view: 'result' },
    { name: 'Activities', href: '/activities', view: 'activities' },
    { name: 'Latest News', href: '/latest-news', view: 'news' },
    { name: 'School Info', href: '/school-info', view: 'schoolinfo' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 flex flex-col font-sans">
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src={logoImg} 
                alt="GTI Logo" 
                className="w-12 h-12 object-contain"
              />
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-semibold text-slate-200 hover:text-[#64ffda] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="relative h-80 sm:h-96 md:h-[450px] bg-slate-900 text-white flex items-center justify-center overflow-hidden">
        <img
          src={campusImg}
          alt="GTI Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            Government Technical Institute (Pyin Oo Lwin)
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering future engineers and leaders with practical technical education and innovation.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <section className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200/80 h-full">
            <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-6 inline-block">
              College Background
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                alt="GTI Campus Building"
                className="w-full sm:w-1/2 h-48 object-cover rounded-lg shadow-sm"
              />
              <div className="sm:w-1/2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Government Technical Institute (Pyin Oo Lwin), established in 1998 in Pyin Oo Lwin, Mandalay Region, operates under the Department of Technical and Vocational Education and Training (DTVET), Ministry of Education. We are dedicated to cultivating skilled and high-caliber technicians who drive the development of the nation's industrial and technological sectors.
                </p>
              </div>
            </div>
          </section>

          {/* Dynamic News Section (D1) */}
          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#0a192f] pb-2 mb-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Latest News</h2>
                <Newspaper className="w-5 h-5 text-slate-500" />
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#0a192f]">
                {latestNews.image_url && (
                  <img 
                    src={latestNews.image_url} 
                    alt={latestNews.title} 
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                )}
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  {latestNews.date || latestNews.created_at}
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
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('/latest-news', 'news')}
              className="mt-4 inline-flex items-center justify-center text-xs font-semibold text-[#0a192f] hover:text-blue-700 transition-colors"
            >
              View All News <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </section>

          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 h-full">
            <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-4 inline-block">
              Quick Links
            </h2>
            <div className="space-y-3 mt-2">
              <button
                type="button"
                onClick={() => handleNavClick('/department', 'department')}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <Building2 className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                  <span>Departments</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('/result', 'result')}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                  <span>Exam Results</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('/activities', 'activities')}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-blue-600 group-hover:text-cyan-400" />
                  <span>Campus Activities</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* <a
        href="/faq"
        aria-label="Frequently Asked Questions"
        className="fixed bottom-20 right-6 z-50 bg-[#0a192f] hover:bg-slate-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-white/20"
      >
        <HelpCircle className="w-7 h-7 text-[#64ffda]" />
      </a> */}

      <footer className="bg-[#0a192f] text-slate-400 text-sm py-8 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default GTIHomePage;