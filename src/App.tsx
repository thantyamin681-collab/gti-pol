import { useState, useEffect } from 'react';
import GTIHomePage from './GTIHomePage';
import { GTIAdminDashboard } from './GTIAdminDashboard';
import { GTILogin } from './GTILogin';
import SchoolNews from './SchoolNews';
import SchoolInfo from './SchoolInfo';
import DepartmentApp from './dept';

function App() {
  const [view, setView] = useState<'home' | 'login' | 'admin' | 'news' | 'schoolinfo' | 'department'>('home');

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      if (p === '/latest-news') setView('news');
      else if (p === '/school-info') setView('schoolinfo');
      else if (p === '/department') setView('department');
      else setView('home');
    };

    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (target: 'home' | 'login' | 'admin' | 'news' | 'schoolinfo' | 'department') => {
    setView(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'news') {
      window.history.pushState({}, '', '/latest-news');
    } else if (target === 'schoolinfo') {
      window.history.pushState({}, '', '/school-info');
    } else if (target === 'department') {
      window.history.pushState({}, '', '/department');
    } else if (target === 'home') {
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div>
      {view === 'home' && (
        <div>
          <GTIHomePage onNavigate={(target: any) => handleNavigate(target as any)} />
         
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

      {view === 'login' && (
        <GTILogin 
          onLoginSuccess={() => handleNavigate('admin')} 
          onBackToHome={() => handleNavigate('home')} 
        />
      )}

      {view === 'admin' && (
        <GTIAdminDashboard onBackToHome={() => handleNavigate('home')} />
      )}

      {view === 'news' && (
        <SchoolNews onNavigate={(target) => handleNavigate(target as any)} />
      )}

      {view === 'schoolinfo' && (
       <SchoolInfo onNavigate={(target) => handleNavigate(target as any)} />
      )}

      {view === 'department' && (
        <DepartmentApp onNavigate={(target: any) => handleNavigate(target)} />
      )}
    </div>
  );
}

export default App;