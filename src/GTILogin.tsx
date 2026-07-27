import React, { useState } from 'react';
import { Lock, User, KeyRound, ArrowLeft } from 'lucide-react';

interface GTILoginProps {
  onLoginSuccess: () => void;
  onBackToHome: () => void;
  onNavigate?: (view: 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info') => void;
}

export const GTILogin: React.FC<GTILoginProps> = ({ onLoginSuccess, onBackToHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Admin Username နှင့် Password စစ်ဆေးခြင်း
    if (username === 'admin' && password === 'gti12345') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Username သို့မဟုတ် Password မှားယွင်းနေပါသည်။');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col justify-center items-center px-4 font-sans">
      <div className="w-full max-w-md bg-[#112240] p-8 rounded-xl border border-slate-800 shadow-2xl">
        {/* Back Button */}
        <button 
          onClick={onBackToHome}
          className="flex items-center space-x-1 text-slate-400 hover:text-[#64ffda] text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ပင်မစာမျက်နှာသို့ ပြန်သွားမည်</span>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-[#64ffda]/10 rounded-full text-[#64ffda] mb-3">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Admin Login</h2>
          <p className="text-slate-400 text-sm mt-1">ခွင့်ပြုချက်ရရှိထားသော တာဝန်ရှိသူများသာ ဝင်ရောက်ပါ</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Username</label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username ထည့်ပါ"
                className="w-full bg-[#0a192f] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#64ffda]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <div className="relative">
              <KeyRound className="w-5 h-5 absolute left-3 top-3 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password ထည့်ပါ"
                className="w-full bg-[#0a192f] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#64ffda]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#64ffda] text-[#0a192f] font-bold py-2.5 rounded-lg hover:bg-[#64ffda]/80 transition-colors shadow-md mt-2"
          >
            ဝင်ရောက်မည် (Log In)
          </button>
        </form>
      </div>
    </div>
  );
};