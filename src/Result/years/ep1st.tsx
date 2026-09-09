import { useState } from 'react';
import '../result.css';

interface EpYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GEP-23', name: 'မစုပြည့်အိမ်', marks: ['A-', 'A-', 'A+', 'A+', 'A+', 'A', 'A-', 'A'] },
  { no: 2, rollNo: '1GEP-14', name: 'မထက်ထက်နိုင်', marks: ['A-', 'A-', 'A-', 'A-', 'A', 'A-', 'A', 'A+'] },
  { no: 3, rollNo: '1GEP-3', name: 'မောင်လားမွန့်စော', marks: ['B+', 'A-', 'A', 'A', 'A-', 'A-', 'A-', 'A'] },
  { no: 4, rollNo: '1GEP-27', name: 'မအေးသဇင်နှင်း', marks: ['A-', 'A-', 'A', 'A-', 'A-', 'A', 'A-', 'A-'] },
  { no: 5, rollNo: '1GEP-24', name: 'မနှင်းဆီအိမ်စင်', marks: ['A-', 'B+', 'B+', 'B+', 'A-', 'A', 'A', 'A'] },
  { no: 6, rollNo: '1GEP-8', name: 'မဆုမြတ်စိုး', marks: ['B+', 'A-', 'A', 'A-', 'A-', 'A', 'B+', 'A'] },
  { no: 7, rollNo: '1GEP-6', name: 'မောင်ကျော်စွာလင်း', marks: ['B+', 'B+', 'A-', 'A-', 'A-', 'A', 'B+', 'A'] },
  { no: 8, rollNo: '1GEP-12', name: 'မအိမ့်ဇာဖြူ', marks: ['A-', 'B+', 'A', 'A-', 'A-', 'A', 'B+', 'A-'] },
  { no: 9, rollNo: '1GEP-17', name: 'မောင်မင်းသုခ', marks: ['A-', 'A-', 'A-', 'B+', 'B+', 'A-', 'A-', 'A-'] },
  { no: 10, rollNo: '1GEP-2', name: 'မောင်တင်ထွန်းဇော်အောင်', marks: ['B+', 'B+', 'A-', 'A-', 'A-', 'A', 'B', 'A-'] },
  { no: 11, rollNo: '1GEP-9', name: 'မောင်လွင်စိုးအောင်', marks: ['B+', 'B+', 'A-', 'A-', 'A-', 'A-', 'B+', 'B+'] },
  { no: 12, rollNo: '1GEP-21', name: 'မောင်နေထူးအောင်', marks: ['B+', 'B', 'A-', 'A-', 'B+', 'A-', 'B', 'A-'] },
  { no: 13, rollNo: '1GEP-29', name: 'မောင်သန့်ဇင်အောင်', marks: ['B+', 'B+', 'B', 'B+', 'A-', 'B', 'A-', 'A-'] },
  { no: 14, rollNo: '1GEP-20', name: 'မောင်မင်းသူဟိန်း', marks: ['B+', 'B+', 'A', 'B', 'B+', 'B+', 'B+', 'A-'] },
  { no: 15, rollNo: '1GEP-18', name: 'မောင်အောင်ခန့်မွန့်မွန့်', marks: ['B+', 'B+', 'A-', 'B+', 'B+', 'A-', 'B+', 'B+'] },
  { no: 16, rollNo: '1GEP-1', name: 'မောင်ဟိန်းထက်အောင်', marks: ['A-', 'B+', 'A-', 'D', 'D', 'A-', 'A-', 'A-'] },
  { no: 17, rollNo: '1GEP-28', name: 'မောင်မင်းခန့်ကျော်', marks: ['B', 'B+', 'B+', 'B+', 'B-', 'B+', 'B-', 'A-'] },
  { no: 18, rollNo: '1GEP-7', name: 'မောင်လရောင်ခဧ', marks: ['B+', 'B+', 'A-', 'Inc', 'A-', 'A', 'A', 'B+'] },
  { no: 19, rollNo: '1GEP-22', name: 'မအိမ့်ရွှေစင်', marks: ['A-', 'B+', 'A', 'B+', 'A-', 'A', 'Inc', 'B+'] },
  { no: 20, rollNo: '1GEP-13', name: 'မောင်လင်းလက်ယံ', marks: ['B+', 'B', 'B+', 'Inc', 'Inc', 'B+', 'B+', 'A-'] },
  { no: 21, rollNo: '1GEP-15', name: 'မောင်ရာဇာဝင်းဖြိုး', marks: ['B', 'C', 'A-', 'B+', 'Inc', 'B', 'B-', 'B+'] },
  { no: 22, rollNo: '1GEP-10', name: 'မောင်အောင်မျိုးထွဋ်', marks: ['B+', 'B-', 'A-', 'B', 'Inc', 'B+', 'Inc', 'B'] },
  { no: 23, rollNo: '1GEP-11', name: 'မသုန္ဒရီဦး', marks: ['B+', 'B+', 'A-', 'B+', 'Inc', 'B-', 'D', 'Inc'] },
  { no: 24, rollNo: '1GEP-25', name: 'မောင်ပိုင်ပိုင်ဖြိုး', marks: ['B+', 'C', 'A-', 'Inc', 'B-', 'A-', 'Inc', 'C'] },
  { no: 25, rollNo: '1GEP-19', name: 'မောင်ဇေယျာထွဋ်', marks: ['B-', 'B+', 'A-', 'B', 'D', 'B', 'D', 'Inc'] },
  { no: 26, rollNo: '1GEP-16', name: 'မောင်အာကာကျော်', marks: ['B', 'B', 'A-', 'B+', 'Inc', 'B+', 'Inc', 'B'] },
  { no: 27, rollNo: '1GEP-4', name: 'မောင်ခန့်သူအောင်', marks: ['D', 'B', 'B', 'B-', 'Inc', 'B-', 'C', 'Inc'] },
  { no: 28, rollNo: '1GEP-5', name: 'မောင်အောင်စိုးမိုးထက်စံ', marks: ['B-', 'B', 'B+', 'Inc', 'Inc', 'Inc', 'D', 'Inc'] },
  { no: 29, rollNo: '1GEP-26', name: 'မောင်မျိုးဆက်ဟိန်း', marks: ['B+', 'B+', 'A-', 'Inc', 'Inc', 'B+', 'Inc', 'Inc'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function EpYear1({ onBack }: EpYear1Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = studentResults.filter((student) => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="results-wrapper">
      <div className="results-container" style={{ maxWidth: '100%', padding: '2rem 3rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <button onClick={onBack} style={{ padding: '0.6rem 1.2rem', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', color: '#1e293b', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              ← Back to Years
            </button>
          </div>

          <div style={{ position: 'relative', width: '280px' }}>
            <input 
              type="text" 
              placeholder="Search by Roll No or Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.2rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', backgroundColor: '#ffffff', color: '#1e293b', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
            />
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
          </div>
        </div>

        <div className="results-header">
          <h2>A.G.T.I. (Electrical Power) - First Year Results</h2>
          <p>2025-2026 Academic Year, First Year, First Semester Re-exam Pass/Fail List.</p>
        </div>

        <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '100%', overflowX: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ color: '#1e293b', margin: 0 }}>Comprehensive Student Marksheet & Grades</h3>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '1100px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.8rem' }}>
                <th style={{ padding: '10px' }} rowSpan={2}>No</th>
                <th style={{ padding: '10px' }} rowSpan={2}>Roll No</th>
                <th style={{ padding: '10px', textAlign: 'left' }} rowSpan={2}>Name</th>
                <th style={{ padding: '10px' }}>Myanmar</th>
                <th style={{ padding: '10px' }}>English for Communication I</th>
                <th style={{ padding: '10px' }}>Introduction to ICT</th>
                <th style={{ padding: '10px' }}>Applied Physics</th>
                <th style={{ padding: '10px' }}>Applied Mathematics I</th>
                <th style={{ padding: '10px' }}>Engineering Mechanics</th>
                <th style={{ padding: '10px' }}>Basic Technical Drawing</th>
                <th style={{ padding: '10px' }}>Basic Electricity</th>
                <th style={{ padding: '10px' }} rowSpan={2}>Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const status = calculateResult(student.marks);

                  return (
                    <tr key={student.rollNo} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.85rem' }}>
                      <td style={{ padding: '10px' }}>{student.no}</td>
                      <td style={{ padding: '10px', fontWeight: '600' }}>{student.rollNo}</td>
                      <td style={{ padding: '10px', textAlign: 'left', fontWeight: '500' }}>{student.name}</td>
                      
                      {student.marks.map((grade, idx) => (
                        <td key={idx} style={{ padding: '10px 4px' }}>
                          <span style={{ fontWeight: grade === 'Inc' ? '700' : '600', color: grade === 'Inc' ? '#dc2626' : '#1e293b' }}>
                            {grade}
                          </span>
                        </td>
                      ))}

                      <td style={{ padding: '10px' }}>
                        <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: status === 'Pass' ? '#dcfce7' : '#fee2e2', color: status === 'Pass' ? '#15803d' : '#b91c1c' }}>
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={12} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>No student records found.</td>
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

export default EpYear1;