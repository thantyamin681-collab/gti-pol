import { useState, useEffect } from 'react';
import logoImg from './assets/logo.jpg';
import { Menu, X } from 'lucide-react';

type NavTarget = 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info';

interface NewsItem {
  id: number | string;
  title: string;
  content?: string;
  description?: string;
  image_url?: string;
  imageUrl?: string;
  created_at?: string;
  date?: string;
  category?: string;
}

interface NavLink {
  name: string;
  target: NavTarget;
}

interface SchoolNewsProps {
  onBackToHome?: () => void;
  onNavigate?: (view: NavTarget) => void;
  currentView?: NavTarget;
}

interface DescriptionWithSeeMoreProps {
  text: string;
}

function DescriptionWithSeeMore({ text }: DescriptionWithSeeMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text || text.length <= 150) {
    return <p className="text-sm leading-7 text-slate-600 sm:text-base">{text}</p>;
  }

  return (
    <div>
      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        {isExpanded ? text : `${text.slice(0, 150)}...`}
      </p>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-2 cursor-pointer text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 hover:underline"
      >
        {isExpanded ? 'See less' : 'See more'}
      </button>
    </div>
  );
}

export default function SchoolNews({ onBackToHome, onNavigate }: SchoolNewsProps) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setNewsItems(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching news from D1:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', target: 'home' },
    { name: 'Department', target: 'home' },
    { name: 'Result', target: 'result' },
    { name: 'Activities', target: 'activity' },
    { name: 'Latest News', target: 'latest-news' },
    { name: 'School Info', target: 'school-info' },
  ];

  const handleNavClick = (target: NavTarget) => {
    setIsMobileMenuOpen(false);
    if (target === 'home') {
      if (onBackToHome) {
        onBackToHome();
      } else {
        onNavigate?.('home');
      }
    } else {
      onNavigate?.(target);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans flex flex-col">
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Name */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = link.target === 'latest-news';
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link.target)}
                    className={`text-base font-semibold transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                      isActive ? 'text-[#64ffda]' : 'text-slate-200 hover:text-[#64ffda]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-200 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a192f] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = link.target === 'latest-news';
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.target)}
                  className={`block w-full text-left py-2 px-3 rounded-md text-base font-medium bg-transparent border-none cursor-pointer ${
                    isActive ? 'bg-slate-800 text-[#64ffda]' : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* 2. Main Content Container */}
      <div className="px-4 py-8 sm:px-6 lg:px-8 flex-1">
        <header className="mx-auto mb-8 text-center max-w-5xl">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            School News
          </h1>
        </header>

        <main className="mx-auto flex max-w-5xl flex-col gap-5">
          {loading ? (
            <div className="p-12 text-center text-slate-500">Loading latest announcements...</div>
          ) : newsItems.length === 0 ? (
            <div className="p-12 text-center text-slate-500">No news announcements available yet.</div>
          ) : (
            newsItems.map((item) => {
              const imageUrl = item.image_url || item.imageUrl;
              const newsContent = item.content || item.description || '';
              const newsDate = item.created_at || item.date || 'Recent';

              return (
                <article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md md:flex-row"
                >
                  {imageUrl && (
                    <div className="h-48 w-full overflow-hidden md:h-auto md:w-2/5">
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-sm font-medium text-emerald-600">{newsDate}</p>
                        {item.category && (
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h2 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h2>
                      <DescriptionWithSeeMore text={newsContent} />
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </main>
      </div>
    </div>
  );
}