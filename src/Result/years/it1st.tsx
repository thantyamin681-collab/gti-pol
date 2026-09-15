import { useState, useEffect } from 'react';
import '../result.css';

interface ItYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  grades: string[]; // Shifted directly to letter grades matching the official mark sheets
}

const STORAGE_KEY = 'gti_it_year1_students';

// -----------------------------------------------------------------------------
// // Initial student data transcribed precisely from the official mark sheets (Roll 1 to 33)
// -----------------------------------------------------------------------------
const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: '1GIT-02', name: 'မောင်ကောင်းဇေယျ', grades: ['A-', 'A', 'A+', 'A', 'A', 'A+', 'A+', 'A+'] },
  { no: 2, rollNo: '1GIT-01', name: 'မောင်မြင့်မြတ်ဖြိုးနိုင်', grades: ['A-', 'A-', 'A+', 'A', 'A+', 'A+', 'A+', 'A+'] },
  { no: 3, rollNo: '1GIT-26', name: 'မဖြိုးဖြိုးမြင့်', grades: ['A-', 'A-', 'A+', 'A', 'A', 'A-', 'A', 'A+'] },
  { no: 4, rollNo: '1GIT-6', name: 'မောင်ထွန်းနိုင်ဦး', grades: ['A-', 'A-', 'A', 'A-', 'A', 'A', 'A', 'A'] },
  { no: 5, rollNo: '1GIT-13', name: 'မယွန်းမီမီ', grades: ['A-', 'B+', 'A+', 'A-', 'A', 'A', 'A', 'A+'] },
  { no: 6, rollNo: '1GIT-16', name: 'မသန္တာစိုး', grades: ['B+', 'A-', 'A', 'A-', 'A+', 'A', 'A+', 'A'] },
  { no: 7, rollNo: '1GIT-4', name: 'မောင်ဟန်ထူးအောင်', grades: ['B+', 'A-', 'A', 'A', 'A-', 'A+', 'A', 'A'] },
  { no: 8, rollNo: '1GIT-23', name: 'မမေဇင်သန်း', grades: ['A-', 'B+', 'A', 'A', 'A', 'A', 'A', 'A-'] },
  { no: 9, rollNo: '1GIT-22', name: 'မပြည့်ပြည့်ဝင်း', grades: ['B+', 'B+', 'A', 'A', 'A', 'A+', 'B+', 'A'] },
  { no: 10, rollNo: '1GIT-18', name: 'မမြတ်မဉ္ဇူမိုး', grades: ['A-', 'B+', 'A-', 'A-', 'A-', 'A', 'A', 'A-'] },
  { no: 11, rollNo: '1GIT-14', name: 'မောင်ဟန်ထူးလွင်', grades: ['B', 'A-', 'A', 'B+', 'A', 'A-', 'A-', 'A'] },
  { no: 12, rollNo: '1GIT-9', name: 'မောင်ခန့်ထည်', grades: ['A-', 'A-', 'A-', 'B+', 'A-', 'A-', 'A', 'A-'] },
  { no: 13, rollNo: '1GIT-31', name: 'မောင်ကီးထွန်းအောင်', grades: ['B+', 'A-', 'A-', 'B+', 'A-', 'A-', 'A', 'A-'] },
  { no: 14, rollNo: '1GIT-11', name: 'မောင်စိုင်းမြင့်မြတ်ဦး', grades: ['B', 'B+', 'A', 'B', 'B+', 'A', 'A+', 'A-'] },
  { no: 15, rollNo: '1GIT-10', name: 'မောင်ဟိန်းသန့်ဇော်', grades: ['A-', 'B+', 'A-', 'B+', 'A-', 'A-', 'A-', 'A-'] },
  { no: 16, rollNo: '1GIT-8', name: 'မဂျူးလဲ့လဲ့ကျော်', grades: ['B+', 'B+', 'A-', 'A-', 'A', 'A', 'B', 'A-'] },
  { no: 17, rollNo: '1GIT-30', name: 'မောင်အောင်ချမ်းငြိမ်း', grades: ['B', 'A-', 'A-', 'B+', 'A-', 'A-', 'A-', 'A-'] },
  { no: 18, rollNo: '1GIT-5', name: 'မောင်ရဲလင်းပိုင်', grades: ['B', 'B+', 'A-', 'B+', 'B+', 'A', 'B+', 'A-'] },
  { no: 19, rollNo: '1GIT-7', name: 'မောင်ထက်မြတ်ရှိန်', grades: ['B', 'B+', 'A-', 'B', 'B+', 'B+', 'A', 'A-'] },
  { no: 20, rollNo: '1GIT-29', name: 'မောင်စစ်သွေးဦး', grades: ['B-', 'B+', 'A', 'B+', 'A-', 'B+', 'B', 'A'] },
  { no: 21, rollNo: '1GIT-27', name: 'မောင်မြတ်ဘုန်းခေတ်', grades: ['B', 'A-', 'A-', 'B', 'A-', 'B+', 'A-', 'B+'] },
  { no: 22, rollNo: '1GIT-20', name: 'မယွန်းဝတီ', grades: ['B', 'A-', 'A-', 'B+', 'B+', 'B+', 'B+', 'A-'] },
  { no: 23, rollNo: '1GIT-24', name: 'မောင်သက်ထူးဇင်', grades: ['B-', 'B', 'A-', 'B', 'B+', 'A-', 'B+', 'A-'] },
  { no: 24, rollNo: '1GIT-12', name: 'မောင်ဇေမျိုးအောင်', grades: ['B', 'B+', 'A-', 'B', 'B+', 'B+', 'B-', 'A-'] },
  { no: 25, rollNo: '1GIT-32', name: 'မောင်ကောင်းခန့်စိုး', grades: ['B-', 'B-', 'B+', 'B-', 'B', 'B+', 'B+', 'B+'] },
  { no: 26, rollNo: '1GIT-21', name: 'မမေသူသူမျိုး', grades: ['B+', 'B+', 'B+', 'B+', 'A-', 'A-', 'A-', 'Inc'] },
  { no: 27, rollNo: '1GIT-25', name: 'မငြိမ်းချမ်းစုဟန်', grades: ['B-', 'A-', 'A-', 'Inc', 'A-', 'B+', 'A-', 'B+'] },
  { no: 28, rollNo: '1GIT-3', name: 'မောင်ရဲလင်းထွန်း', grades: ['C', 'B-', 'A-', 'Inc', 'B+', 'B+', 'A-', 'A-'] },
  { no: 29, rollNo: '1GIT-17', name: 'မောင်ချမ်းပြည့်စုံလွှမ်း', grades: ['B', 'B', 'A-', 'Inc', 'B+', 'B', 'B', 'B+'] },
  { no: 30, rollNo: '1GIT-15', name: 'မဇွန်ဝေထွန်း', grades: ['C', 'B', 'A-', 'B-', 'A-', 'B+', 'B-', 'Inc'] },
  { no: 31, rollNo: '1GIT-19', name: 'မဖိုးပြည့်ပြည့်အောင်', grades: ['B', 'B-', 'B+', 'Inc', 'Inc', 'B+', 'C', 'B+'] },
  { no: 32, rollNo: '1GIT-28', name: 'မောင်အောင်ကောင်းမြတ်', grades: ['D', 'B+', 'B+', 'Inc', 'Inc', 'Inc', 'Inc', 'Inc'] },
  { no: 33, rollNo: '1GIT-33', name: 'မောင်ရဲထက်နောင်', grades: ['C', 'C', 'Inc', 'Inc', 'Inc', 'Inc', 'C', 'Inc'] },
];

// -----------------------------------------------------------------------------
// // Utility function to determine status ('Inc' and 'D' count towards re-exam/fail conditions appropriately)
// -----------------------------------------------------------------------------
const calculateResult = (grades: string[]): { status: string; incCount: number } => {
  const incCount = grades.filter(g => g === 'Inc').length;
  const failOrIncCount = grades.filter(g => g === 'Inc' || g === 'D').length;

  if (incCount === 0 && failOrIncCount === 0) {
    return { status: 'Pass', incCount };
  } else if (failOrIncCount > 4 || incCount > 3) {
    return { status: 'Fail', incCount: failOrIncCount };
  } else {
    return { status: 'Re-exam', incCount: failOrIncCount };
  }
};

export function ItYear1({ onBack }: ItYear1Props) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Initialize state from localStorage or fallback to default initial results
  const [students, setStudents] = useState<StudentResult[]>(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (err) {
        console.error('Failed to parse student results from localStorage:', err);
      }
    }
    return initialStudentResults;
  });

  // Sync state if localStorage changes (e.g. updated from admin dashboard)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        try {
          setStudents(JSON.parse(savedData));
        } catch (err) {
          console.error(err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('adminDataUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('adminDataUpdated', handleStorageChange);
    };
  }, []);

  const filteredStudents = students.filter((student) => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="results-wrapper">
      <div className="results-container" style={{ maxWidth: '100%', padding: '2rem 3rem' }}>
        
        {/* Top Bar with Back Button & Search Box */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem', 
          width: '100%',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={onBack}
              style={{
                padding: '0.6rem 1.2rem',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                color: '#1e293b',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              ← Back to Years
            </button>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '280px' }}>
            <input 
              type="text" 
              placeholder="Search by Roll No or Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.2rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                outline: 'none',
                fontSize: '0.9rem',
                backgroundColor: '#ffffff',
                color: '#1e293b',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            />
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
              🔍
            </span>
          </div>
        </div>

        <div className="results-header">
          <h2>Information Technology - First Year Results</h2>
          <p>Detailed subject grades and performance records.</p>
        </div>

        {/* Table Container with Responsive View */}
        <div style={{ 
          background: '#ffffff', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          width: '100%',
          overflowX: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ color: '#1e293b', margin: 0 }}>Comprehensive Student Marksheet & Grades</h3>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '900px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px' }}>No</th>
                <th style={{ padding: '12px' }}>Roll No</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px' }}>MM-CP 1101 - Myanmar</th>
                <th style={{ padding: '12px' }}>EN-CP 1101 - English for Communication I</th>
                <th style={{ padding: '12px' }}>GE-CP 1111 - Life Skills</th>
                <th style={{ padding: '12px' }}>AM-CM 1101 - Applied Mathematics I</th>
                <th style={{ padding: '12px' }}>APh-CM 1101 - Applied Physics</th>
                <th style={{ padding: '12px' }}>ME-DP 1501 - Engineering Mechanics</th>
                <th style={{ padding: '12px' }}>ME-DP 1101 - Basic Technical Drawing</th>
                <th style={{ padding: '12px' }}>IT-DP 1301 - Computer Hardware and System Administration I</th>
                <th style={{ padding: '12px' }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const { status } = calculateResult(student.grades);

                  return (
                    <tr key={student.rollNo} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.9rem' }}>
                      <td style={{ padding: '12px' }}>{student.no}</td>
                      <td style={{ padding: '12px', fontWeight: '600' }}>{student.rollNo}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: '500' }}>{student.name}</td>
                      
                      {student.grades.map((grade, idx) => {
                        return (
                          <td key={idx} style={{ padding: '12px 4px' }}>
                            <div>
                              <span style={{ 
                                fontWeight: grade === 'Inc' || grade === 'D' ? '700' : '600', 
                                color: grade === 'Inc' ? '#dc2626' : grade === 'D' ? '#ea580c' : '#1e293b' 
                              }}>
                                {grade}
                              </span>
                            </div>
                          </td>
                        );
                      })}

                      {/* Result Badge */}
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          fontSize: '0.75rem', 
                          fontWeight: '700',
                          backgroundColor: status === 'Pass' ? '#dcfce7' : status === 'Re-exam' ? '#fef9c3' : '#fee2e2',
                          color: status === 'Pass' ? '#15803d' : status === 'Re-exam' ? '#ca8a04' : '#b91c1c'
                        }}>
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={12} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>
                    No student records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <footer className="results-footer">
        <p>© 2026 Departmental Results Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ItYear1;