import React, { useState, useEffect, useCallback } from 'react';
import { 
  Newspaper, 
  Plus, 
  CheckCircle, 
  ArrowLeft 
} from 'lucide-react';

interface GTIAdminDashboardProps {
  onBackToHome?: () => void;
  onNavigate?: (view: 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info') => void;
}

export const GTIAdminDashboard: React.FC<GTIAdminDashboardProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'results' | 'activities'>('news');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // News States
  const [newsList, setNewsList] = useState<any[]>([]);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('General');
  const [newsContent, setNewsContent] = useState('');
  const [newsImage, setNewsImage] = useState<File | null>(null);

  // Database ထဲမှ News များ ဆွဲယူခြင်း (History Persistent ဖြစ်စေရန်)
  const fetchNewsList = useCallback(async () => {
    try {
      const res = await fetch('/api/news');
      if (res.ok) {
        const data: any = await res.json();
        if (Array.isArray(data)) {
          setNewsList(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch news list:', err);
    }
  }, []);

  useEffect(() => {
    fetchNewsList();
  }, [fetchNewsList]);

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Cloudflare D1 သို့ News တင်ခြင်း
  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsContent) return;

    setIsSubmitting(true);
    let imageUrlBase64 = '';

    try {
      if (newsImage) {
        imageUrlBase64 = await convertBase64(newsImage);
      }

      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newsTitle,
          category: newsCategory,
          content: newsContent,
          description: newsContent, // Field name တူညီစေရန် နှစ်မျိုးလုံး ပို့ပေးခြင်း
          image_url: imageUrlBase64,
          imageUrl: imageUrlBase64
        })
      });

      if (res.ok) {
        setNewsTitle('');
        setNewsContent('');
        setNewsImage(null);

        // ၁။ Database မှ Data သစ်များကို ပြန်ဆွဲယူမည် (History Update ဖြစ်စေရန်)
        await fetchNewsList();

        // ၂။ Homepage / တခြား Component များ သိရှိစေရန် Event Trigger ပေးမည်
        window.dispatchEvent(new Event('newsUpdated'));

        showNotification('News posted and synced successfully!');
      } else {
        alert('Database သို့ တင်ရာတွင် အဆင်မပြေပါခင်ဗျာ။');
      }
    } catch (err) {
      console.error(err);
      alert('Upload Error ဖြစ်ပွားခဲ့ပါသည်။');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 font-sans">
      <header className="bg-[#071325] border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {onBackToHome && (
            <button 
              onClick={onBackToHome}
              className="flex items-center space-x-1 text-slate-300 hover:text-[#64ffda] text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          )}
          <h1 className="text-xl font-bold text-white">GTI Admin Dashboard</h1>
        </div>
        <span className="text-xs bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full font-mono">
          Admin Portal
        </span>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {successMsg && (
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 p-4 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="flex space-x-2 border-b border-slate-800 mb-8">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center space-x-2 px-5 py-3 font-medium transition-all border-b-2 ${
              activeTab === 'news'
                ? 'border-[#64ffda] text-[#64ffda] bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Newspaper className="w-5 h-5" />
            <span>Latest News</span>
          </button>
        </div>

        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-[#112240] p-6 rounded-xl border border-slate-800 h-fit">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Plus className="w-5 h-5 text-[#64ffda]" />
                <span>Publish New Announcement</span>
              </h2>
              <form onSubmit={handleAddNews} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">News Title</label>
                  <input
                    type="text"
                    required
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    placeholder="Enter news title..."
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Category</label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value)}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  >
                    <option value="General">General</option>
                    <option value="Academic">Academic</option>
                    <option value="Admission">Admission</option>
                    <option value="Exam">Exam</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Upload Photo (Image)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewsImage(e.target.files ? e.target.files[0] : null)}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2 text-sm text-slate-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Description / Content</label>
                  <textarea
                    rows={4}
                    required
                    value={newsContent}
                    onChange={(e) => setNewsContent(e.target.value)}
                    placeholder="Write news details..."
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#64ffda] text-[#0a192f] font-bold py-2.5 rounded-lg hover:bg-[#64ffda]/80 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Publishing...' : 'Publish News'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-[#112240] p-6 rounded-xl border border-slate-800">
              <h2 className="text-lg font-semibold text-white mb-4">Posted Announcements History</h2>
              <div className="space-y-3">
                {newsList.length === 0 ? (
                  <p className="text-slate-400 text-sm">No news posted yet.</p>
                ) : (
                  newsList.map((item, index) => (
                    <div key={item.id || index} className="bg-[#0a192f] p-4 rounded-lg flex justify-between items-center border border-slate-800">
                      <div>
                        <span className="text-xs bg-slate-800 text-[#64ffda] px-2 py-0.5 rounded font-mono">
                          {item.category || 'General'}
                        </span>
                        <h3 className="font-semibold text-white mt-1">{item.title}</h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Date: {item.created_at || item.date || 'N/A'}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GTIAdminDashboard;