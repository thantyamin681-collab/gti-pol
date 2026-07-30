import { useEffect, useState } from 'react';
import logoImg from './assets/logo.jpg';
import {  Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  view?: 'home' | 'news' | 'schoolinfo';
}

interface SchoolInfoProps {
  onNavigate?: (view: 'home' | 'news' | 'schoolinfo') => void;
}

export default function SchoolInfo({ onNavigate }: SchoolInfoProps) {
  const [activeTab, setActiveTab] = useState<'admission' | 'rules'>('admission');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>('/school-info');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveRoute(window.location.pathname);
    }
  }, []);

  
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', view: 'home' },
    { name: 'Department', href: '/department' },
    { name: 'Result', href: '/result' },
    { name: 'Activities', href: '/activities' },
    { name: 'Latest News', href: '/latest-news', view: 'news' },
    { name: 'School Info', href: '/school-info', view: 'schoolinfo' },
  ];

  const handleNavigation = (link: NavLink) => {
    setIsMobileMenuOpen(false);

    if (link.view && onNavigate) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', link.href);
      }
      onNavigate(link.view);
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 flex flex-col font-sans">
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Name */}
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={() => handleNavigation(navLinks[0])}
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
                const isActive = activeRoute === link.href;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavigation(link)}
                    className={`text-base font-semibold transition-colors duration-200 ${
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavigation(link)}
                className="w-full text-left px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 2. Main Content Container */}
      <main className="flex-1 max-w-5xl mx-auto p-4 md:p-8 space-y-10 w-full">
        {/* Page Title */}
        <div className="border-b pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            School Information
          </h1>
        </div>

        {/* ==========================================
            SECTION 1: SCHOOL INTAKE
        ========================================== */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">
            1. School Intake & Academic Calendar
          </h2>

          {/* English Block */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            {/* <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              English
            </span> */}
            <p className="text-slate-700 font-medium text-sm md:text-base">
              Our school operates with <strong>2 semesters</strong> in each academic year:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li><strong>1st Semester:</strong> December to March</li>
              <li><strong>2nd Semester:</strong> June to September</li>
              <li><strong>Examinations:</strong> Exams are held at the end of each semester.</li>
            </ul>
          </div>

          {/* Myanmar Block */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            {/* <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
              မြန်မာ
            </span> */}
            <p className="text-slate-700 font-medium text-sm md:text-base">
              မိမိတို့ကျောင်း၏ ပညာသင်နှစ်တစ်ခုတွင် <strong>စာသင်နှစ်ဝက် (၂) ခု</strong> ခွဲခြားထားပါသည် -
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li><strong>ပထမစာသင်နှစ်ဝက်:</strong> ဒီဇင်ဘာလ မှ မတ်လ အထိ</li>
              <li><strong>ဒုတိယစာသင်နှစ်ဝက်:</strong> ဇွန်လ မှ စက်တင်ဘာလ အထိ</li>
              <li><strong>စာမေးပွဲများ:</strong> စာသင်နှစ်ဝက် တစ်ခုစီ၏ အဆုံးတွင် စာမေးပွဲများ ကျင်းပမည်ဖြစ်သည်။</li>
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: ADMISSION CRITERIA & RULES
        ========================================== */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">
            2. Admission & Student Regulations
          </h2>

          {/* Tabs Switcher */}
          <div className="flex border-b border-slate-200 gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('admission')}
              className={`py-2.5 px-4 font-semibold text-sm transition-all border-b-2 cursor-pointer ${
                activeTab === 'admission'
                  ? 'border-teal-600 text-teal-700 bg-teal-50/50 rounded-t-lg'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              ဝင်ခွင့်သတ်မှတ်ချက်များ (Admission Criteria)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rules')}
              className={`py-2.5 px-4 font-semibold text-sm transition-all border-b-2 cursor-pointer ${
                activeTab === 'rules'
                  ? 'border-teal-600 text-teal-700 bg-teal-50/50 rounded-t-lg'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              လိုက်နာရန်စည်းကမ်းချက်များ (Regulations)
            </button>
          </div>

          {/* TAB 1: ဝင်ခွင့်သတ်မှတ်ချက်များ */}
          {activeTab === 'admission' && (
            <div className="space-y-4">
              {/* English Block */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                {/* <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  English
                </span> */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Admission Requirements:</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-slate-600 space-y-1 mt-1 pl-2">
                    <li>Must be in good mental and physical health, capable of field work and practical workshop training.</li>
                    <li>Must have passed the Matriculation examination with Mathematics, Physics, and Chemistry subjects.</li>
                    <li>Selection is based on total marks obtained in English and Mathematics in the Matriculation exam.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Required Documents:</h4>
                  <ol className="list-decimal list-inside text-xs md:text-sm text-slate-600 space-y-1 mt-1 pl-2">
                    <li>Applicant's Citizenship Scrutiny Card (Copy)</li>
                    <li>Medical recommendation certificate from the Township Health Department</li>
                    <li>Original Matriculation Exam mark sheet issued officially</li>
                    <li>Household member list form (Copy)</li>
                    <li>Recommendation letter from local police station certifying clean criminal record</li>
                    <li>(3) passport-sized color photos</li>
                  </ol>
                </div>
              </div>

              {/* Myanmar Block */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                {/* <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  မြန်မာ
                </span> */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">ဝင်ခွင့်လျှောက်ထားသူများ လိုက်နာရမည့် သတ်မှတ်ချက်များ:</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-slate-600 space-y-1 mt-1 pl-2">
                    <li>နည်းပညာနှင့် သက်မွေးဝမ်းကျောင်းဆိုင်ရာ ကျန်းမာရေးကောင်းမွန်သူဖြစ်ပြီး ကွင်းဆင်းဆောင်ရွက်နိုင်သူဖြစ်ရမည်။</li>
                    <li>တက္ကသိုလ်ဝင်စာမေးပွဲတွင် သင်္ချာ၊ ရူပဗေဒ၊ ဓာတုဗေဒ ဘာသာတွဲများဖြင့် အောင်မြင်သူဖြစ်ရမည်။</li>
                    <li>တက္ကသိုလ်ဝင်စာမေးပွဲတွင် ရရှိသည့် အင်္ဂလိပ်စာနှင့် သင်္ချာ စုစုပေါင်းရမှတ်ပေါ် မူတည်၍ ရွေးချယ်မည်။</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">ဝင်ခွင့်လျှောက်ထားရန် လိုအပ်ချက်များ:</h4>
                  <ol className="list-decimal list-inside text-xs md:text-sm text-slate-600 space-y-1 mt-1 pl-2">
                    <li>လျှောက်ထားသူ၏ နိုင်ငံသားစိစစ်ရေးကတ်ပြား (မိတ္တူ)</li>
                    <li>ကျန်းမာရေးကောင်းမွန်ကြောင်း မြို့နယ်ကျန်းမာရေးဦးစီးဌာနမှ ထောက်ခံစာမူရင်း</li>
                    <li>တက္ကသိုလ်ဝင်တန်းအောင်မြင်သည့် အမှတ်စာရင်း (မူရင်း)</li>
                    <li>အိမ်ထောင်စုဇယား (မိတ္တူ)</li>
                    <li>သက်ဆိုင်ရာနယ်မြေရဲစခန်း၏ ပြစ်မှုကင်းရှင်းကြောင်း ထောက်ခံစာမူရင်း</li>
                    <li>ပတ်စပို့အရွယ် ရောင်စုံဓာတ်ပုံ (၃) ပုံ</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: လိုက်နာရန် စည်းကမ်းချက်များ */}
          {activeTab === 'rules' && (
            <div className="space-y-4">
              {/* English Block */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                {/* <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  English
                </span> */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Students admitted to GTI (Pyin Oo Lwin) must strictly adhere to the following rules to become qualified future engineers:
                </p>
                <ol className="list-decimal list-inside text-xs md:text-sm text-slate-600 space-y-1.5 pl-2">
                  <li>Monthly attendance notices will be posted to track the 75% class attendance requirement. Department heads, guardians, and parents will be notified.</li>
                  <li>Students must not engage in strikes or activities that disrupt academic learning.</li>
                  <li>Vandalism or damage to school property is strictly prohibited.</li>
                  <li>Failure to meet the 75% attendance requirement will result in disqualification from taking exams (and repetition of the academic year).</li>
                </ol>
              </div>

              {/* Myanmar Block */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                {/* <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  မြန်မာ
                </span> */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  အစိုးရစက်မှုလက်မှုသိပ္ပံ (ပြင်ဦးလွင်) သို့ တက်ရောက်ခွင့်ရရှိသော ကျောင်းသား/သူများသည် အင်ဂျင်နီယာကောင်းများဖြစ်စေရေးအတွက် အောက်ပါစည်းကမ်းချက်များကို လိုက်နာရမည် -
                </p>
                <ol className="list-decimal list-inside text-xs md:text-sm text-slate-600 space-y-1.5 pl-2">
                  <li>ကျောင်းခေါ်ချိန် ၇၅% ပြည့်/မပြည့်ကို လစဉ် ကြော်ငြာသင်ပုန်းတွင် ကြော်ငြာမည်ဖြစ်ပြီး မိဘ/အုပ်ထိန်းသူများထံ အကြောင်းကြားစာ ပေးပို့မည်။</li>
                  <li>ပညာသင်ကြားခြင်းကို အနှောင့်အယှက်ဖြစ်စေမည့် ဆူပူခြင်း စသည့် မည်သည့်အပြုအမူမျှ မပြုလုပ်ရ။</li>
                  <li>ကျောင်းပိုင်ပစ္စည်းအားလုံးကို ပျက်စီးအောင် ဖျက်ဆီးခြင်း လုံးဝ မပြုလုပ်ရ။</li>
                  <li>ကျောင်းခေါ်ချိန် (၇၅%) မပြည့်မီပါက စာမေးပွဲ ဖြေဆိုခွင့် မပြုဘဲ (တစ်နှစ်ကျ) အဖြစ် သတ်မှတ်မည်။</li>
                </ol>
              </div>
            </div>
          )}
        </section>

        {/* ==========================================
    SECTION 3: EVENT CALENDAR
========================================== */}
<section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 my-6">
  <div className="flex justify-between items-center border-l-4 border-indigo-600 pl-3">
    <h2 className="text-xl font-bold text-indigo-900">
      3. Academic Event Calendar
    </h2>
    <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium border border-indigo-100">
      Annual Overview
    </span>
  </div>

  {/* Modern Academic Timeline (English Version with Dimmed Vacations & Exam Focus) */}
  <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-6 my-4">
    
    {/* 1. First Semester Coursework */}
    <div className="relative">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-emerald-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-[#0a192f] text-[#64ffda] rounded-xl text-center shrink-0 font-extrabold text-xs uppercase">
            DEC - FEB
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">First Semester Coursework</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">Academic Period</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Lecture classes, lab practicals, and continuous assessments.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 2. First Semester Final Exam */}
    <div className="relative">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-sm ring-2 ring-rose-200" />
      <div className="bg-rose-50/40 rounded-2xl p-4 border border-rose-200 hover:bg-rose-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-rose-600 text-white rounded-xl text-center shrink-0 font-extrabold text-xs uppercase">
            LATE MAR
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">1st Semester Final Examinations</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 uppercase">At most 8 Subjects</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Final evaluation week covering up to 8 departmental subjects.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 3. Semester Break & Vacation (Dimmed) */}
    <div className="relative opacity-60 hover:opacity-100 transition-opacity">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-sm" />
      <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60 border-dashed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-slate-200 text-slate-600 rounded-xl text-center shrink-0 font-bold text-xs uppercase">
            APR - MAY
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">Semester Break & Vacation</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 uppercase">School Vacation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Inter-semester holiday break and enrollment preparation.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 4. Second Semester Coursework */}
    <div className="relative">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-emerald-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-[#0a192f] text-[#64ffda] rounded-xl text-center shrink-0 font-extrabold text-xs uppercase">
            JUN - AUG
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">Second Semester Coursework</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">Academic Period</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Resumes advanced engineering modules and practical workshops.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 5. Second Semester Final Exam */}
    <div className="relative">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-sm ring-2 ring-rose-200" />
      <div className="bg-rose-50/40 rounded-2xl p-4 border border-rose-200 hover:bg-rose-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-rose-600 text-white rounded-xl text-center shrink-0 font-extrabold text-xs uppercase">
            LATE SEP
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">2nd Semester Final Examinations</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 uppercase">At most 8 Subjects</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">End-of-year final assessment covering up to 8 subjects.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 6. Academic Year Break (Dimmed) */}
    <div className="relative opacity-60 hover:opacity-100 transition-opacity">
      <div className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-sm" />
      <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60 border-dashed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 bg-slate-200 text-slate-600 rounded-xl text-center shrink-0 font-bold text-xs uppercase">
            OCT - NOV
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">Academic Year Break</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 uppercase">School Vacation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">End of academic year vacation and results announcement.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
      </main>
      {/* 4. Footer */}
      <footer className="bg-[#0a192f] text-slate-400 text-sm py-8 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}