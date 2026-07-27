import { useState, useEffect } from 'react';
import GTIHomePage from './GTIHomePage';
import { GTIAdminDashboard } from './GTIAdminDashboard';
import { GTILogin } from './GTILogin';
import { Result } from './Result/result';
import { Activity } from './Activity/activity'; //[cite: 3]: Activity component ကို import လုပ်ခြင်း

type NavTarget = 'home' | 'login' | 'admin' | 'result' | 'activity';

function App() {
  /**/ // URL path သို့မဟုတ် hash ကိုကြည့်၍ မူလ view ကို သတ်မှတ်ခြင်း
  const [view, setView] = useState<NavTarget>(() => {
    const path = window.location.pathname.replace('/', '');
    if (['home', 'login', 'admin', 'result', 'activity'].includes(path)) {
      return path as NavTarget;
    }
    return 'home';
  });

  /**/ // view ပြောင်းလဲတိုင်း browser URL ပါ တစ်ပါတည်း ပြောင်းလဲစေခြင်း
  const handleNavigate = (target: NavTarget) => {
    setView(target);
    window.history.pushState({}, '', `/${target === 'home' ? '' : target}`);
  };

  /**/ // Browser ၏ Forward/Backward ခလုတ်များကို နှိပ်သည့်အခါ view ကို လိုက်ပါပြောင်းလဲစေခြင်း
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') as NavTarget;
      if (['home', 'login', 'admin', 'result', 'activity'].includes(path)) {
        setView(path || 'home');
      } else {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {/* ၁။ ပင်မစာမျက်နှာ */}
      {view === 'home' && (
        <div>
          <GTIHomePage onNavigate={handleNavigate} />
          
          <div className="fixed bottom-4 right-4 z-50">
            <button
              type="button"
              onClick={() => handleNavigate('login')}
              className="bg-[#64ffda] text-[#0a192f] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all text-sm cursor-pointer border-none"
            >
              Admin Portal
            </button>
          </div>
        </div>
      )}

      {/* ၂။ Login ဝင်ရန် စာမျက်နှာ */}
      {view === 'login' && (
        <GTILogin 
          onLoginSuccess={() => handleNavigate('admin')} 
          onBackToHome={() => handleNavigate('home')} 
        />
      )}

      {/* ၃။ Admin Dashboard */}
      {view === 'admin' && (
        <GTIAdminDashboard onBackToHome={() => handleNavigate('home')} />
      )}

      {/* ၄။ Exam Result Page */}
      {view === 'result' && (
        <Result onBackToHome={() => handleNavigate('home')} onNavigate={handleNavigate} />
      )}

     {/* ၅။ Activity Page */}
      {view === 'activity' && (
        <Activity onBackToHome={() => handleNavigate('home')} onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;