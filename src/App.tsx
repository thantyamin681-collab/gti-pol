import { useState } from 'react';
import GTIHomePage from './GTIHomePage';
import { GTIAdminDashboard } from './GTIAdminDashboard';
import { GTILogin } from './GTILogin';
function App() {
  // 'home', 'login', 'admin' ဆိုပြီး State သုံးခု ခွဲခြားထားပါသည်
  const [view, setView] = useState<'home' | 'login' | 'admin'>('home');

  return (
    <div>
      {/* ၁။ ပင်မစာမျက်နှာ (ကျောင်းသား/အများပြည်သူ ကြည့်ရန်) */}
      {view === 'home' && (
        <div>
          <GTIHomePage />
          {/* Admin Panel သို့ သွားမည့် ခလုတ် */}
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => setView('login')}
              className="bg-[#64ffda] text-[#0a192f] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all text-sm"
            >
              Admin Portal
            </button>
          </div>
        </div>
      )}

      {/* ၂။ Login ဝင်ရန် စာမျက်နှာ (Password စစ်ဆေးမည်) */}
      {view === 'login' && (
        <GTILogin 
          onLoginSuccess={() => setView('admin')} 
          onBackToHome={() => setView('home')} 
        />
      )}

      {/* ၃။ စစ်ဆေးပြီးမှ ကြည့်ရှုနိုင်မည့် Admin Dashboard */}
      {view === 'admin' && (
        <GTIAdminDashboard onBackToHome={() => setView('home')} />
      )}
    </div>
  );
}

export default App;