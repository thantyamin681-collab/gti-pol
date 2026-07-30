import React, { useState } from 'react';
import { 
  Newspaper, 
  FileSpreadsheet, 
  Activity, 
  Plus, 
  Trash2, 
  Upload, 
  CheckCircle, 
  ArrowLeft 
} from 'lucide-react';

interface GTIAdminDashboardProps {
  onBackToHome?: () => void;
}

export const GTIAdminDashboard: React.FC<GTIAdminDashboardProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'results' | 'activities'>('news');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. News State
  const [newsList, setNewsList] = useState([
    { id: 1, title: '2026 Academic Year Admission Open', date: '2026-07-15', category: 'Admission' }
  ]);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('General');
  const [newsContent, setNewsContent] = useState('');
  const [newsImage, setNewsImage] = useState<File | null>(null);

  // 2. Exam Results State
  const [resultsList, setResultsList] = useState([
    { id: 1, title: 'First Year First Semester Exam Result', department: 'EC', date: '2026-06-20', fileName: 'EC_1st_Year.pdf' }
  ]);
  const [resultTitle, setResultTitle] = useState('');
  const [department, setDepartment] = useState('Civil');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 3. College Activities State
  const [activitiesList, setActivitiesList] = useState([
    { id: 1, title: 'Annual Football Tournament 2026', date: '2026-07-02', location: 'GTI Main Ground' }
  ]);
  const [actTitle, setActTitle] = useState('');
  const [actDate, setActDate] = useState('');
  const [actDesc, setActDesc] = useState('');

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Helper Function: Convert Image File to Base64 String
  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Cloudflare D1 သို့ News & Image Post လုပ်သည့် Handler
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
          image_url: imageUrlBase64
        })
      });

      if (res.ok) {
        const newItem = {
          id: Date.now(),
          title: newsTitle,
          date: new Date().toISOString().split('T')[0],
          category: newsCategory,
        };
        setNewsList([newItem, ...newsList]);
        setNewsTitle('');
        setNewsContent('');
        setNewsImage(null);
        showNotification('News & Image updated successfully to D1!');
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

  const handleUploadResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resultTitle || !selectedFile) return;
    const newResult = {
      id: Date.now(),
      title: resultTitle,
      department,
      date: new Date().toISOString().split('T')[0],
      fileName: selectedFile.name,
    };
    setResultsList([newResult, ...resultsList]);
    setResultTitle('');
    setSelectedFile(null);
    showNotification('Exam result uploaded successfully!');
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actTitle || !actDate) return;
    const newAct = {
      id: Date.now(),
      title: actTitle,
      date: actDate,
      location: 'GTI Campus',
    };
    setActivitiesList([newAct, ...activitiesList]);
    setActTitle('');
    setActDate('');
    setActDesc('');
    showNotification('Activity added successfully!');
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

        <div className="flex space-x-2 border-b border-slate-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center space-x-2 px-5 py-3 font-medium transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'news'
                ? 'border-[#64ffda] text-[#64ffda] bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Newspaper className="w-5 h-5" />
            <span>Latest News</span>
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`flex items-center space-x-2 px-5 py-3 font-medium transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'results'
                ? 'border-[#64ffda] text-[#64ffda] bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileSpreadsheet className="w-5 h-5" />
            <span>Upload Results</span>
          </button>

          <button
            onClick={() => setActiveTab('activities')}
            className={`flex items-center space-x-2 px-5 py-3 font-medium transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'activities'
                ? 'border-[#64ffda] text-[#64ffda] bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-5 h-5" />
            <span>College Activities</span>
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
                  {isSubmitting ? 'Uploading...' : 'Publish News'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-[#112240] p-6 rounded-xl border border-slate-800">
              <h2 className="text-lg font-semibold text-white mb-4">Posted Announcements</h2>
              <div className="space-y-3">
                {newsList.map((item) => (
                  <div key={item.id} className="bg-[#0a192f] p-4 rounded-lg flex justify-between items-center border border-slate-800">
                    <div>
                      <span className="text-xs bg-slate-800 text-[#64ffda] px-2 py-0.5 rounded font-mono">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-white mt-1">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">Date: {item.date}</p>
                    </div>
                    <button
                      onClick={() => setNewsList(newsList.filter(n => n.id !== item.id))}
                      className="text-slate-500 hover:text-red-400 p-2"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2 & TAB 3 - Unchanged */}
        {activeTab === 'results' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-[#112240] p-6 rounded-xl border border-slate-800 h-fit">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Upload className="w-5 h-5 text-[#64ffda]" />
                <span>Upload Exam Result PDF</span>
              </h2>
              <form onSubmit={handleUploadResult} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Result Title</label>
                  <input
                    type="text"
                    required
                    value={resultTitle}
                    onChange={(e) => setResultTitle(e.target.value)}
                    placeholder="e.g. 2nd Year EC Final Result"
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  >
                    <option value="Civil">Civil Engineering</option>
                    <option value="EC">Electronic Engineering</option>
                    <option value="EP">Electrical Power Engineering</option>
                    <option value="MP">Mechanical Engineering</option>
                    <option value="IT">Information Technology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">PDF File</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2 text-sm text-slate-300 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#64ffda] text-[#0a192f] font-bold py-2.5 rounded-lg hover:bg-[#64ffda]/80 transition-colors"
                >
                  Upload Result
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-[#112240] p-6 rounded-xl border border-slate-800">
              <h2 className="text-lg font-semibold text-white mb-4">Uploaded Exam Results</h2>
              <div className="space-y-3">
                {resultsList.map((res) => (
                  <div key={res.id} className="bg-[#0a192f] p-4 rounded-lg flex justify-between items-center border border-slate-800">
                    <div>
                      <span className="text-xs bg-slate-800 text-[#64ffda] px-2 py-0.5 rounded font-mono">
                        {res.department}
                      </span>
                      <h3 className="font-semibold text-white mt-1">{res.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">File: {res.fileName} | Date: {res.date}</p>
                    </div>
                    <button
                      onClick={() => setResultsList(resultsList.filter(r => r.id !== res.id))}
                      className="text-slate-500 hover:text-red-400 p-2"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-[#112240] p-6 rounded-xl border border-slate-800 h-fit">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Plus className="w-5 h-5 text-[#64ffda]" />
                <span>Add Activity Event</span>
              </h2>
              <form onSubmit={handleAddActivity} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Activity Name</label>
                  <input
                    type="text"
                    required
                    value={actTitle}
                    onChange={(e) => setActTitle(e.target.value)}
                    placeholder="e.g. Welcome Ceremony"
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Event Date</label>
                  <input
                    type="date"
                    required
                    value={actDate}
                    onChange={(e) => setActDate(e.target.value)}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={actDesc}
                    onChange={(e) => setActDesc(e.target.value)}
                    placeholder="Briefly describe the activity..."
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#64ffda]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#64ffda] text-[#0a192f] font-bold py-2.5 rounded-lg hover:bg-[#64ffda]/80 transition-colors"
                >
                  Save Activity
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-[#112240] p-6 rounded-xl border border-slate-800">
              <h2 className="text-lg font-semibold text-white mb-4">College Activities Schedule</h2>
              <div className="space-y-3">
                {activitiesList.map((act) => (
                  <div key={act.id} className="bg-[#0a192f] p-4 rounded-lg flex justify-between items-center border border-slate-800">
                    <div>
                      <h3 className="font-semibold text-white">{act.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">Date: {act.date} | Location: {act.location}</p>
                    </div>
                    <button
                      onClick={() => setActivitiesList(activitiesList.filter(a => a.id !== act.id))}
                      className="text-slate-500 hover:text-red-400 p-2"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};