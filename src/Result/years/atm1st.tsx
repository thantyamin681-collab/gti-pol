import { useState } from 'react';
import '../result.css';

interface AtmYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GATM-1', name: 'မောင်စိုးပြည့်ကိုကို', marks: ['A-', 'B+', 'A', 'A', 'A-', 'A-', 'A-', 'A-', 'A-'] },
  { no: 2, rollNo: '1GATM-12', name: 'မမေရွှန်းလဲ့ဇော်', marks: ['A-', 'B+', 'A-', 'A-', 'A', 'A-', 'B+', 'B', 'B'] },
  { no: 3, rollNo: '1GATM-27', name: 'မောင်ဝင်းမင်းသန့်', marks: ['A-', 'B+', 'A-', 'A-', 'A-', 'A-', 'B+', 'B', 'B'] },
  { no: 4, rollNo: '1GATM-18', name: 'မောင်ဝေဇင်ဦး', marks: ['B+', 'B+', 'A-', 'B+', 'A-', 'A-', 'B+', 'B+', 'B+'] },
  { no: 5, rollNo: '1GATM-28', name: 'မောင်အောင်မြင့်မြတ်', marks: ['B', 'B', 'A-', 'A-', 'A-', 'B+', 'A-', 'B', 'B'] },
  { no: 6, rollNo: '1GATM-9', name: 'မောင်ခန့်ပြည့်ဖြိုးဖြိုး', marks: ['B+', 'B+', 'A-', 'A-', 'A-', 'B+', 'B', 'B', 'B'] },
  { no: 7, rollNo: '1GATM-16', name: 'မောင်လင်းလတ်ဉာဏ်စည်', marks: ['B+', 'B', 'A-', 'B+', 'A-', 'B+', 'B+', 'B', 'B'] },
  { no: 8, rollNo: '1GATM-8', name: 'မောင်စာနည်ခန့်နိုင်', marks: ['B+', 'B+', 'A-', 'B+', 'B+', 'A-', 'B', 'B+', 'B+'] },
  { no: 9, rollNo: '1GATM-3', name: 'မောင်အုပ်စိုးမင်း', marks: ['B+', 'B-', 'A-', 'B+', 'A-', 'B+', 'B+', 'B', 'B'] },
  { no: 10, rollNo: '1GATM-7', name: 'မောင်သူရကျော်', marks: ['B+', 'B', 'A-', 'B', 'B+', 'B+', 'B+', 'B+', 'B+'] },
  { no: 11, rollNo: '1GATM-26', name: 'မောင်ဟိန်းထက်အောင်', marks: ['B+', 'C', 'B+', 'B+', 'B+', 'B+', 'B+', 'B', 'B'] },
  { no: 12, rollNo: '1GATM-17', name: 'မောင်ထက်ဝင်းကျော်', marks: ['B+', 'B-', 'B+', 'B', 'B+', 'B+', 'B', 'B', 'B'] },
  { no: 13, rollNo: '1GATM-15', name: 'မောင်ဝင်းလျှံသူ', marks: ['B+', 'B', 'B+', 'B', 'B+', 'A-', 'B', 'B-', 'B-'] },
  { no: 14, rollNo: '1GATM-13', name: 'မောင်ဇော်ဇော်မင်းဦး', marks: ['B+', 'B-', 'A+', 'A-', 'C', 'C', 'B', 'B+', 'B+'] },
  { no: 15, rollNo: '1GATM-5', name: 'မဆိမ့်မှူးသူယွယ်', marks: ['B+', 'B', 'B+', 'B+', 'C', 'B+', 'B+', 'B-', 'B-'] },
  { no: 16, rollNo: '1GATM-29', name: 'မောင်ဟံဗြိးဖြိုး', marks: ['B', 'D', 'B+', 'C', 'B', 'B', 'B+', 'B', 'B'] },
  { no: 17, rollNo: '1GATM-20', name: 'မောင်စိုင်းစိုင်းစောဦး', marks: ['B+', 'B-', 'B+', 'Inc', 'B+', 'A-', 'B+', 'B', 'B'] },
  { no: 18, rollNo: '1GATM-10', name: 'မဇုလိုင်ထွန်း', marks: ['A-', 'B', 'A-', 'Inc', 'A-', 'B+', 'B+', 'B-', 'B-'] },
  { no: 19, rollNo: '1GATM-6', name: 'မောင်ရွှေထက်မာန်', marks: ['B+', 'B+', 'A-', 'A-', 'B+', 'A-', 'Inc', 'Inc', 'B-'] },
  { no: 20, rollNo: '1GATM-24', name: 'မောင်အောင်ဇေယျာဖြိုး', marks: ['B+', 'B-', 'A-', 'B', 'Inc', 'C', 'B+', 'B', 'B'] },
  { no: 21, rollNo: '1GATM-32', name: 'မောင်ပိုင်မင်းခန့်', marks: ['B', 'C', 'B+', 'B', 'Inc', 'B+', 'A-', 'B', 'B'] },
  { no: 22, rollNo: '1GATM-23', name: 'မဆီရွှေစင်အောင်', marks: ['B+', 'B+', 'A-', 'Inc', 'Inc', 'B', 'Inc', 'B-', 'B-'] },
  { no: 23, rollNo: '1GATM-33', name: 'မောင်နိုင်ခန့်အောင်', marks: ['B', 'C', 'B+', 'B', 'Inc', 'Inc', 'B+', 'B', 'B'] },
  { no: 24, rollNo: '1GATM-11', name: 'မောင်ဝေယံစိုးချစ်', marks: ['B-', 'D', 'B+', 'B', 'Inc', 'B-', 'B+', 'B+', 'B+'] },
  { no: 25, rollNo: '1GATM-22', name: 'မောင်အောင်ကို', marks: ['B-', 'B', 'A', 'Inc', 'Inc', 'B-', 'C', 'B', 'B'] },
  { no: 26, rollNo: '1GATM-19', name: 'မောင်ဉာဏ်မင်းထွဋ်', marks: ['B', 'C', 'B+', 'Inc', 'C', 'B+', 'C', 'C', 'C'] },
  { no: 27, rollNo: '1GATM-14', name: 'မောင်အောင်ခန့်ဖြိုး', marks: ['B', 'B', 'Inc', 'Inc', 'Inc', 'A-', 'A-', 'Inc', 'C'] },
  { no: 28, rollNo: '1GATM-34', name: 'မောင်အောင်ခန့်ကျော်', marks: ['B-', 'Inc', 'Inc', 'Inc', 'Inc', 'Inc', 'B+', 'B', 'B'] },
  { no: 29, rollNo: '1GATM-31', name: 'မောင်အောင်စဉ်သူလင်း', marks: ['B', 'Inc', 'Inc', 'Inc', 'Inc', 'B-', 'B+', 'B+', 'Inc'] },
  { no: 30, rollNo: '1GATM-4', name: 'မောင်ကောင်းဆက်ကိုဦး', marks: ['D', 'D', 'Inc', 'Inc', 'Inc', 'Inc', 'C', 'Inc', 'C'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam / Fail';
  }
  return 'Pass';
};

export function AtmYear1({ onBack }: AtmYear1Props) {
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
          <h2>A.G.T.I. (Automotive Technology) - First Year Results</h2>
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
                <th style={{ padding: '10px' }}>Basic Technical Drawing</th>
                <th style={{ padding: '10px' }}>Fundamental of Automotive Power Train I</th>
                <th style={{ padding: '10px' }}>Fundamental of Automotive Chassis I</th>
                <th style={{ padding: '10px' }}>Fundamental of Automotive Electric I</th>
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
                  <td colSpan={13} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>No student records found.</td>
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

export default AtmYear1;