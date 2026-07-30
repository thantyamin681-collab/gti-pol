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
  Newspaper,
  // HelpCircle
} from 'lucide-react';

// Complete Navigation View Targets including admin support
export type NavTarget = 
  | 'home' 
  | 'department' 
  | 'result' 
  | 'activities' 
  | 'activity' 
  | 'latest-news' 
  | 'schoolinfo' 
  | 'login' 
  | 'admin';

export interface NavLink {
  name: string;
  href: string;
  view: NavTarget;
  target?: NavTarget;
}

export interface GTIHomePageProps {
  onNavigate?: (view: NavTarget) => void;
  href?: string;
  view?: NavTarget;
}

export interface NewsItem {
  id: string | number;
  title: string;
  date?: string;
  created_at?: string;
  summary?: string;
  content?: string;
  category: string;
  image_url?: string;
}

const GTIHomePage: React.FC<GTIHomePageProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Consolidated Navigation Links Data
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', view: 'home', target: 'home' },
    { name: 'Department', href: '/department', view: 'department', target: 'department' },
    { name: 'Result', href: '/result', view: 'result', target: 'result' },
    { name: 'Activities', href: '/activity', view: 'activities', target: 'activities' },
    { name: 'Latest News', href: '/latest-news', view: 'latest-news', target: 'latest-news' },
    { name: 'School Info', href: '/school-info', view: 'schoolinfo', target: 'schoolinfo' },
  ];

  // Latest News State with Default Fallback Data
  const [latestNews, setLatestNews] = useState<NewsItem>({
    id: 'news-2026-001',
    title: 'Academic Year 2026-2027 Registration & Course Schedules',
    date: 'July 20, 2026',
    summary: 'Official course registration and timetable details for Civil, Electrical, and Mechanical departments are now available.',
    category: 'Academic Announcement'
  });

  // Centralized Navigation Handler (Updates URL history + triggers onNavigate view switch)
  const handleNavClick = (href: string, view: NavTarget) => {
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', href);
    }
    if (onNavigate) {
      onNavigate(view);
    }
  };

  // D1 Database Auto-fetch for News
  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          const item = data[0];
          setLatestNews({
            id: item.id,
            title: item.title,
            date: item.created_at || item.date || 'Recently',
            summary: item.content || item.summary,
            category: item.category || 'News',
            image_url: item.image_url
          });
        }
      })
      .catch((err) => console.log("Using default fallback news data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 flex flex-col font-sans">
      
      {/* 1. Navigation Bar (Responsive Sticky Header) */}
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Branding */}
            <div 
              onClick={() => handleNavClick('/', 'home')}
              className="flex items-center space-x-3 cursor-pointer"
            >
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href, link.view)}
                  className="text-base font-semibold text-slate-200 hover:text-[#64ffda] transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
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

        {/* Mobile Navigation Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href, link.view)}
                className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 2. Hero / Banner Image Section */}
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

      {/* 3. Main Content Layout: Multi-Column Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* College Background Section (6 cols out of 12) */}
          <section className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-6 inline-block">
                College Background
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                  alt="GTI Campus Building"
                  className="w-full sm:w-1/2 h-48 object-cover rounded-lg shadow-sm"
                />
                <div className="sm:w-1/2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>
                    Government Technical Institute (Pyin Oo Lwin) provides high-quality diploma programs designed to build technical proficiency and practical expertise. Located in Pyin Oo Lwin, our college nurtures academic excellence and technological advancement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Latest News Section (3 cols out of 12) */}
          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between h-full">
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
              onClick={() => handleNavClick('/latest-news', 'latest-news')}
              className="mt-4 inline-flex items-center justify-center text-xs font-semibold text-[#0a192f] hover:text-blue-700 transition-colors"
            >
              View All News <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </section>

          {/* Quick Links Section (3 cols out of 12) */}
          <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between h-full">
            <div>
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
                  onClick={() => handleNavClick('/activity', 'activities')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#0a192f] hover:text-white border border-slate-200 text-slate-700 text-sm font-medium transition-all group text-left"
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

      {/* Floating FAQ Action Button*/}
      {/* <a
        href="/faq"
        aria-label="Frequently Asked Questions"
        className="fixed bottom-20 right-6 z-50 bg-[#0a192f] hover:bg-slate-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-white/20"
      >
        <HelpCircle className="w-7 h-7 text-[#64ffda]" /> 
      </a> */}

      {/* 4. Footer */}
      <footer className="bg-[#0a192f] text-slate-400 text-sm py-8 mt-auto border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
    <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All Rights Reserved.</p>
    <button
      type="button"
      onClick={() => handleNavClick('/admin', 'admin')}
      className="text-xs text-slate-500 hover:text-[#64ffda] mt-2 sm:mt-0 transition-colors"
    >
      Admin Portal
    </button>
  </div>
</footer>
    </div>
  );
};

export default GTIHomePage;