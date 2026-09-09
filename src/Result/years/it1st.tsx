import { useState, useEffect } from 'react';
import '../result.css';

interface ItYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: number[];
}

const STORAGE_KEY = 'gti_it_year1_students';

const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: '1GIT-01', name: 'မောင်ကောင်းဇေယျ', marks: [75, 78, 90, 88, 76, 82, 89, 91] },
  { no: 2, rollNo: '1GIT-02', name: 'မငြိမ်းမြင့်ခိုင်', marks: [95, 92, 88, 90, 85, 89, 94, 96] },
  { no: 3, rollNo: '1GIT-03', name: 'မဖြိုးဖြိုးမြင့်', marks: [35, 50, 38, 60, 55, 48, 52, 40] },
  { no: 4, rollNo: '1GIT-04', name: 'မောင်ထွန်းနိုင်ဦး', marks: [30, 25, 35, 38, 55, 48, 32, 28] },
  { no: 5, rollNo: '1GIT-05', name: 'မယွန်းမီမီ', marks: [70, 75, 80, 78, 72, 74, 76, 79] },
  { no: 6, rollNo: '1GIT-06', name: 'မသန္တာစိုး', marks: [65, 68, 70, 72, 66, 64, 69, 71] }, 
  { no: 7, rollNo: '1GIT-07', name: 'မောင်ဟန်ထူးအောင်', marks: [55, 58, 60, 62, 56, 54, 59, 61] },
  { no: 8, rollNo: '1GIT-08', name: 'မမေဇင်သန်း', marks: [45, 48, 50, 52, 46, 44, 49, 51] },
  { no: 9, rollNo: '1GIT-09', name: 'မပြည့်ပြည့်ဝင်း', marks: [50, 55, 58, 60, 52, 54, 56, 58] },
  { no: 10, rollNo: '1GIT-10', name: 'မမြတ်မဉ္ဇူမိုး', marks: [40, 45, 48, 50, 42, 44, 46, 48] } ,
  { no: 11, rollNo: '1GIT-11', name: 'မောင်ဟန်ထူးလွင်', marks: [38, 42, 45, 48, 40, 43, 46, 49] },
  { no: 12, rollNo: '1GIT-12', name: 'မောင်ခန့်ထည်', marks: [60, 65, 68, 70, 62, 64, 66, 68] },
  { no: 13, rollNo: '1GIT-13', name: 'မောင်ကီးထွန်းအောင်', marks: [75, 78, 80, 82, 76, 74, 79, 81] },
  { no: 14, rollNo: '1GIT-14', name: 'မောင်စိုင်းမြင့်မြတ်ဦး', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 15, rollNo: '1GIT-15', name: 'မောင်ဟိန်းသန့်ဇော်', marks: [95, 98, 100, 102, 96, 94, 99, 101] },
  { no: 16, rollNo: '1GIT-16', name: 'မဂျူးလဲ့လဲ့ကျော်', marks: [30, 35, 38, 40, 32, 34, 36, 38] },
  { no: 17, rollNo: '1GIT-17', name: 'မောင်အောင်ချမ်းငြိမ်း', marks: [50, 55, 58, 60, 52, 54, 56, 58] },
  { no: 18, rollNo: '1GIT-18', name: 'မောင်ရဲလင်းပိုင်', marks: [65, 68, 70, 72, 66, 64, 69, 71] },
  { no: 19, rollNo: '1GIT-19', name: 'မောင်ထက်မြတ်ရှိန်', marks: [75, 78, 80, 82, 76, 74, 79, 81] },
  { no: 20, rollNo: '1GIT-20', name: 'မောင်စစ်သွေးဦး', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 21, rollNo: '1GIT-21', name: 'မောင်မြတ်ဘုန်းခေတ်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 22, rollNo: '1GIT-22', name: 'မယွန်းဝတီ', marks: [85, 88, 90, 92, 86, 84, 89, 91] }, 
  { no: 23, rollNo: '1GIT-23', name: 'မောင်သက်ထူးဇင်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 24, rollNo: '1GIT-24', name: 'မောင်ဇေမျိုးအောင်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 25, rollNo: '1GIT-25', name: 'မောင်ကောင်းခန့်စိုး', marks: [85, 88, 90, 92, 86, 84, 89, 91] }, 
  { no: 26, rollNo: '1GIT-26', name: 'မမေသူသူမျိုး', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 27, rollNo: '1GIT-27', name: 'မငြိမ်းချမ်းစုဟန်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 28, rollNo: '1GIT-28', name: 'မောင်ရဲလင်းထွန်း', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
 { no: 29, rollNo: '1GIT-29', name: 'မောင်ချမ်းပြည့်စုံလွှမ်း', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 30, rollNo: '1GIT-30', name: 'မဇွန်ဝေထွန်း', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 31, rollNo: '1GIT-31', name: 'မဖိုးပြည့်ပြည့်အောင်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
  { no: 32, rollNo: '1GIT-32', name: 'မောင်အောင်ကောင်းမြတ်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },
   { no: 33, rollNo: '1GIT-33', name: 'မောင်ရဲထက်နောင်', marks: [85, 88, 90, 92, 86, 84, 89, 91] },

  ];

const getGrade = (mark: number): string => {
  if (mark >= 80) return 'A';
  if (mark >= 75) return 'A-';
  if (mark >= 70) return 'B-';
  if (mark >= 65) return 'B';
  if (mark >= 55) return 'C';
  if (mark >= 40) return 'D';
  return 'Inc';
};

const calculateResult = (marks: number[]): { status: string; incCount: number } => {
  const incCount = marks.filter(m => m < 40).length;

  if (incCount === 0) {
    return { status: 'Pass', incCount };
  } else if (incCount > 4) {
    return { status: 'Fail', incCount };
  } else {
    return { status: 'Re-exam', incCount };
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

        {/* Table Container */}
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
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '600' }}>
            
            </span>
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
                  const { status } = calculateResult(student.marks);

                  return (
                    <tr key={student.rollNo} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.9rem' }}>
                      <td style={{ padding: '12px' }}>{student.no}</td>
                      <td style={{ padding: '12px', fontWeight: '600' }}>{student.rollNo}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: '500' }}>{student.name}</td>
                      
                      {student.marks.map((mark, idx) => {
                        const grade = getGrade(mark);

                        return (
                          <td key={idx} style={{ padding: '12px 4px' }}>
                            <div>
                              <span style={{ fontWeight: grade === 'Inc' ? '700' : '600', color: grade === 'Inc' ? '#dc2626' : '#1e293b' }}>
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
{/* PDF Download Button with Cloudflare URL
<a 
  href="https://gti-pol.pages.dev/results/it1st.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    padding: '0.6rem 1.2rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    fontSize: '0.9rem'
  }}
>
  📄 Download Official PDF Result
</a> */}
      <footer className="results-footer">
        <p>© 2026 Departmental Results Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ItYear1;