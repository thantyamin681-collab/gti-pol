import { useState, useEffect } from 'react';
import GTIHomePage from './GTIHomePage';
import { GTIAdminDashboard } from './GTIAdminDashboard';
import { GTILogin } from './GTILogin';
import SchoolNews from './SchoolNews';
import SchoolInfo from './SchoolInfo';

function App() {
  // 'home', 'login', 'admin', 'news', 'schoolinfo' naviation states
  const [view, setView] = useState<'home' | 'login' | 'admin' | 'news' | 'schoolinfo'>('home');

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      if (p === '/latest-news') setView('news');
      else if (p === '/school-info') setView('schoolinfo');
      else setView('home');
    };


    handlePopState();


    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (target: 'home' | 'login' | 'admin' | 'news' | 'schoolinfo') => {
    setView(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'news') {
      window.history.pushState({}, '', '/latest-news');
    } else if (target === 'schoolinfo') {
      window.history.pushState({}, '', '/school-info');
    } else if (target === 'home') {
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div>
      {/* 1. Home View */}
      {view === 'home' && (
        <div>
          <GTIHomePage onNavigate={(target) => handleNavigate(target as any)} />
         
          {/* Admin Portal Floating Button */}
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => handleNavigate('login')}
              className="bg-[#64ffda] text-[#0a192f] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all text-sm"
            >
              Admin Portal
            </button>
          </div>
        </div>
      )}

      {/* 2. Login View */}
      {view === 'login' && (
        <GTILogin 
          onLoginSuccess={() => handleNavigate('admin')} 
          onBackToHome={() => handleNavigate('home')} 
        />
      )}

      {/* 3. Admin Dashboard View */}
      {view === 'admin' && (
        <GTIAdminDashboard onBackToHome={() => handleNavigate('home')} />
      )}

      {/* 4. Latest News View */}
      {view === 'news' && (
        <SchoolNews onBack={() => handleNavigate('home')} />
      )}

      {/* 5. School Info View */}
      {view === 'schoolinfo' && (
       <SchoolInfo onNavigate={(target)=> handleNavigate(target)}/>
      )}
    </div>
  );
}

export default App;