import React, { useState, useEffect, useCallback } from 'react';
import logoImg from './assets/logo.jpg';
import campusImg from './assets/campus.jpg';
import { Menu, X, Building2, GraduationCap, Calendar, ChevronRight, Newspaper } from 'lucide-react';

export const GTIHomePage: React.FC<any> = ({ onNavigate }) => {
  const [latestNews, setLatestNews] = useState<any>(null);

  // Latest News အား Database မှ ဆွဲယူသည့် Function
  const fetchLatestNews = useCallback(() => {
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
      .catch((err) => console.log("News fetching error:", err));
  }, []);

  useEffect(() => {
    fetchLatestNews();

    window.addEventListener('newsUpdated', fetchLatestNews);
    return () => {
      window.removeEventListener('newsUpdated', fetchLatestNews);
    };
  }, [fetchLatestNews]);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 flex flex-col font-sans">
      {/* Header with Logo */}
      <nav className="bg-[#0a192f] text-white p-4 flex justify-between items-center px-8">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
          <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl">GTI (Pyin Oo Lwin)</span>
        </div>
      </nav>

      {/* Hero Banner with Campus Image */}
      <section className="relative h-64 bg-slate-900 text-white flex items-center justify-center overflow-hidden">
        <img src={campusImg} alt="Campus" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <h1 className="relative z-10 text-3xl font-bold">Government Technical Institute</h1>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <section className="lg:col-span-12 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-[#0a192f] border-b-2 border-[#0a192f] pb-2 mb-4">Latest News</h2>
            {latestNews ? (
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#0a192f]">
                {latestNews.image_url && (
                  <img src={latestNews.image_url} alt={latestNews.title} className="w-full h-40 object-cover rounded mb-3" />
                )}
                <span className="text-xs text-slate-500 uppercase block mb-1">{latestNews.date}</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mb-2">{latestNews.category}</span>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">{latestNews.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{latestNews.summary}</p>
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Loading latest updates...</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default GTIHomePage;