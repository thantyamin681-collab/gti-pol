import { useState } from 'react';
import '../result.css';

// ပုံ Import
import civilImg from '../../assets/civil.jpg';

// years folder ထဲမှ Year Components များကို Import ပြုလုပ်ခြင်း
import { CivilYear1 } from '../years/civil1st';
// import { CivilYear2 } from '../years/civil2nd';
// import { CivilYear3 } from '../years/civil3rd';

interface YearCard {
  id: string;
  yearName: string;
  code: string;
  description: string;
}

interface CivilPageProps {
  onBack: () => void; // Result.tsx သို့ ပြန်သွားရန် Callback Function
  onSelectYear?: (yearCode: string) => void;
}

const yearsList: YearCard[] = [
  { id: '1', yearName: 'First Year', code: 'Year 1', description: 'Fundamental civil engineering, engineering mechanics, surveying basics, drawing, and mathematics.' },
  { id: '2', yearName: 'Second Year', code: 'Year 2', description: 'Structural analysis, building construction materials, fluid mechanics, and soil mechanics.' },
  { id: '3', yearName: 'Third Year', code: 'Year 3', description: 'Reinforced concrete design, transportation engineering, environmental engineering, and project management.' },
];

export function CivilPage({ onBack, onSelectYear }: CivilPageProps) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleYearClick = (code: string) => {
    setSelectedYear(code);
    if (onSelectYear) {
      onSelectYear(code);
    }
  };

  // Year 1 နှိပ်ပါက CivilYear1 ပြသမည်
  if (selectedYear === 'Year 1') {
    return <CivilYear1 onBack={() => setSelectedYear(null)} />;
  }

  // Year 2 နှိပ်ပါက CivilYear2 ပြသမည်
  // if (selectedYear === 'Year 2') {
  //   return <CivilYear2 onBack={() => setSelectedYear(null)} />;
  // }

  // // Year 3 နှိပ်ပါက CivilYear3 ပြသမည်
  // if (selectedYear === 'Year 3') {
  //   return <CivilYear3 onBack={() => setSelectedYear(null)} />;
  // }

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* 1. Content Wrapper (Header + Cards) */}
      <div>
        {/* Full-Width Header Banner */}
        <header className="results-header" style={{ width: '100%', borderRadius: 0, margin: 0, padding: '2rem 1rem' }}>
          <div className="results-header-inner" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            
            {/* Back to Departments Button - Header Top Left */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.2rem', width: '100%' }}>
              <button 
                type="button"
                onClick={onBack}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#ffffff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ← Back to Departments
              </button>
            </div>

            <h2>Civil Engineering (CIVIL) Results</h2>
            <p>Select an academic year below to view student performance and records.</p>
          </div>
        </header>

        {/* Centered Content Container */}
        <div className="results-container">
          {/* 3 Year Cards Responsive Grid */}
          <div className="majors-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {yearsList.map((item) => (
              <div 
                key={item.code} 
                className="major-card"
                onClick={() => handleYearClick(item.code)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="major-image-container"
                  style={{
                    height: '140px',
                    backgroundImage: `url(${civilImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(13, 42, 148, 0.55), rgba(15, 23, 42, 0.85))',
                  }} />
                  <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '800', margin: 0 }}>{item.code}</h2>
                  </div>
                </div>
                <div className="major-content">
                  <h3>{item.yearName}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Full-Width Footer */}
      <footer className="results-footer" style={{ width: '100%', borderRadius: 0, margin: 0, marginTop: '3rem' }}>
        <p>© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All rights reserved.</p>
        <p className="footer-sub">Civil Engineering Department - Academic Tracking</p>
      </footer>

    </div>
  );
}

export default CivilPage;