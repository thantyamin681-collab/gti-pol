import { useState } from 'react';
import './result.css';
import { 
  GraduationCap, 
  ChevronRight, 
  Menu,
  X 
} from 'lucide-react';

import logoImg from '../assets/logo.jpg';
import itImg from '../assets/it.jpg';
import epImg from '../assets/ep.jpg';
import ecImg from '../assets/ec.jpg';
import ieImg from '../assets/ie.jpg';
import atmImg from '../assets/atm.jpg';
import civilImg from '../assets/civil.jpg';
import mechImg from '../assets/mech.jpg';

// deptsx ဖိုင်များမှ Component များကို Import ပြုလုပ်ခြင်း
import { ItPage } from './deptsx/itres';
// နောင်တွင် ဖိုင်များဖန်တီးပြီးပါက Comment ပြန်ဖွင့်ပါ
import { EpPage } from './deptsx/epres';
import { EcPage } from './deptsx/ecres';
import { IePage } from './deptsx/ieres';
import { AtmPage } from './deptsx/atmres';
import { CivilPage } from './deptsx/civilres';
import { MechPage } from './deptsx/mechres';

type NavTarget = 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info'| 'department';

interface NavLink {
  name: string;
  target: NavTarget;
}

interface Major {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
}

const majorsList: Major[] = [
  { id: '1', name: 'Information Technology', code: 'IT', description: 'Software engineering, networks, and databases.', image: itImg },
  { id: '2', name: 'Electrical Power', code: 'EP', description: 'Power generation, distribution, and smart grids.', image: epImg },
  { id: '3', name: 'Electronic Engineering', code: 'EC', description: 'Semiconductors, embedded systems, and communication.', image: ecImg },
  { id: '4', name: 'Industrial Engineering', code: 'IE', description: 'Supply chain, logistics, and process optimization.', image: ieImg },
  { id: '5', name: 'Automotive Technology', code: 'ATM', description: 'Automation, robotics, and control systems.', image: atmImg },
  { id: '6', name: 'Civil Engineering', code: 'CIVIL', description: 'Structural design, construction, and infrastructure.', image: civilImg },
  { id: '7', name: 'Mechanical Engineering', code: 'MECH', description: 'Thermodynamics, mechanics, and machine design.', image: mechImg },
];

interface ResultProps {
  onBackToHome?: () => void;
  onNavigate?: (view: NavTarget) => void;
}

export function Result({ onBackToHome, onNavigate }: ResultProps) {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Home', target: 'home' },
    { name: 'Department', target: 'department' },
    { name: 'Result', target: 'result' },
    { name: 'Activities', target: 'activity' },
    { name: 'Latest News', target: 'latest-news' },
    { name: 'School Info', target: 'school-info' },
  ];

  const handleNavClick = (target: NavTarget) => {
    setSelectedCode(null);

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

  // ရွေးချယ်ထားသော မေဂျာ စာမျက်နှာကို ပြသပေးသည့် ဖန်ရှင်
  const renderSelectedPage = () => {
    switch (selectedCode) {
      case 'IT':
        return <ItPage onBack={() => setSelectedCode(null)} />;
      
      
      case 'EP':
        return <EpPage onBack={() => setSelectedCode(null)} />;
      case 'EC':
        return <EcPage onBack={() => setSelectedCode(null)} />;
      case 'IE':
        return <IePage onBack={() => setSelectedCode(null)} />;
      case 'ATM':
        return <AtmPage onBack={() => setSelectedCode(null)} />;
      case 'CIVIL':
        return <CivilPage onBack={() => setSelectedCode(null)} />;
      case 'MECH':
        return <MechPage onBack={() => setSelectedCode(null)} />;
      

      default:
        return null;
    }
  };

  return (
    <div className="results-wrapper">
      {/* Sub-page ကို ရွေးချယ်ထားခြင်း မရှိမှသာ Top Navigation Bar ကို ပြသမည် */}
      {!selectedCode && (
        <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
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

              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link.target)}
                    className="text-base font-semibold text-slate-200 hover:text-[#64ffda] transition-colors duration-200 cursor-pointer bg-transparent border-none"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

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

          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(link.target);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      )}

      <div className="viewport-container responsive">
        {selectedCode ? (
          renderSelectedPage()
        ) : (
          <>
            <header className="results-header">
              <div className="results-header-inner">
                <div className="results-icon-wrapper">
                  <GraduationCap className="w-8 h-8 text-[#64ffda]" />
                </div>
                <h2>Departmental Results</h2>
                <p>Select a major below to view academic performance, student rankings, and official records.</p>
              </div>
            </header>

            <main className="results-container">
              <div className="majors-grid">
                {majorsList.map((major) => (
                  <div
                    key={major.code}
                    onClick={() => setSelectedCode(major.code)}
                    className="major-card"
                  >
                    <div className="major-image-container">
                      <img src={major.image} alt={major.name} className="major-image" />
                      <div className="major-badge">{major.code}</div>
                    </div>
                    
                    <div className="major-content">
                      <div>
                        <h3>{major.name}</h3>
                        <p>{major.description}</p>
                      </div>

                      <div className="major-footer-link">
                        <span>View Records</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            <footer className="results-footer">
              <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All rights reserved.</p>
              <p className="footer-sub">Designed for Academic Excellence & Performance Tracking</p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;