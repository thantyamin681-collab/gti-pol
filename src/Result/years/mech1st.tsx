import { useState } from 'react';
import '../result.css';

interface MechYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GMech-26', name: 'မောင်စိုင်းနန်းဒီ', marks: ['A-', 'A-', 'A+', 'A', 'A', 'A+', 'A-', 'A+'] },
  { no: 2, rollNo: '1GMech-7', name: 'မဆီဆီသူ', marks: ['A-', 'B+', 'A', 'A', 'A', 'A', 'A-', 'A'] },
  { no: 3, rollNo: '1GMech-3', name: 'မောင်ပြည့်ဘုန်းစိုးမောင်', marks: ['A-', 'B', 'A', 'A', 'A', 'A', 'A-', 'A'] },
  { no: 4, rollNo: '1GMech-8', name: 'မောင်ရဲရင့်ဇင်ဝင်း', marks: ['A-', 'B+', 'A', 'A-', 'A', 'A-', 'A', 'A'] },
  { no: 5, rollNo: '1GMech-18', name: 'မောင်အောင်ဟိန်းစိုးကျော်', marks: ['B', 'B+', 'A', 'A-', 'A-', 'A-', 'A-', 'A'] },
  { no: 6, rollNo: '1GMech-25', name: 'မောင်ရွှေရုန်းစိုးအောင်', marks: ['B+', 'B', 'B+', 'B+', 'A', 'A-', 'A', 'A-'] },
  { no: 7, rollNo: '1GMech-6', name: 'မောင်ဇင်ဖြိုးထက်', marks: ['B+', 'A-', 'A', 'B+', 'B+', 'A-', 'A-', 'A-'] },
  { no: 8, rollNo: '1GMech-22', name: 'မရွှေဝတ်စုံ', marks: ['B+', 'B+', 'A-', 'B+', 'B+', 'A-', 'A-', 'A'] },
  { no: 9, rollNo: '1GMech-13', name: 'မောင်မင်းသုတစိုး', marks: ['B+', 'A-', 'A-', 'B+', 'A-', 'A-', 'A-', 'B+'] },
  { no: 10, rollNo: '1GMech-24', name: 'မောင်သက်ထွဋ်စိုးအောင်', marks: ['B+', 'B+', 'A-', 'B+', 'A-', 'A-', 'B', 'A-'] },
  { no: 11, rollNo: '1GMech-1', name: 'မောင်ဟိန်းစိုးထက်အောင်', marks: ['B+', 'A-', 'A-', 'D', 'B+', 'B+', 'B', 'A-'] },
  { no: 12, rollNo: '1GMech-9', name: 'မောင်ပြီးစီးသိဟ်ကျော်', marks: ['B+', 'B-', 'A-', 'B', 'B-', 'A-', 'C', 'A-'] },
  { no: 13, rollNo: '1GMech-4', name: 'မောင်ပြည့်ဖြိုးဦးစိုး', marks: ['B+', 'B-', 'A-', 'C', 'B+', 'B+', 'D', 'A-'] },
  { no: 14, rollNo: '1GMech-20', name: 'မောင်ည်ညီအောင်', marks: ['B+', 'B+', 'A-', 'B', 'D', 'B+', 'D', 'A-'] },
  { no: 15, rollNo: '1GMech-14', name: 'မောင်ပြေဇော်ထက်', marks: ['B+', 'A-', 'A-', 'A-', 'Inc', 'A', 'A-', 'A'] },
  { no: 16, rollNo: '1GMech-2', name: 'မောင်စတေးဝါးဝါး', marks: ['B', 'A-', 'A-', 'Inc', 'B+', 'A', 'A', 'A'] },
  { no: 17, rollNo: '1GMech-16', name: 'မောင်ပြည့်စောင်အောင်ခန့်', marks: ['B+', 'A-', 'B+', 'B+', 'Inc', 'A-', 'B+', 'A-'] },
  { no: 18, rollNo: '1GMech-17', name: 'မောင်ထင်အောင်ကျော်', marks: ['B+', 'B-', 'Inc', 'Inc', 'B+', 'B+', 'A-', 'A-'] },
  { no: 19, rollNo: '1GMech-12', name: 'မောင်မင်းခန့်ကျော်', marks: ['B+', 'B+', 'A-', 'Inc', 'A-', 'A-', 'B-', 'A-'] },
  { no: 20, rollNo: '1GMech-30', name: 'မောင်ပြည့်ဖြိုးမောင်', marks: ['B', 'Inc', 'B+', 'Inc', 'Inc', 'B+', 'A-', 'B+'] },
  { no: 21, rollNo: '1GMech-19', name: 'မချယ်ရီသိဒ်', marks: ['B+', 'B+', 'B+', 'Inc', 'Inc', 'B+', 'B+', 'A-'] },
  { no: 22, rollNo: '1GMech-23', name: 'မောင်ဇေယျာစိုးအောင်', marks: ['B+', 'B+', 'Inc', 'B', 'C', 'A-', 'D', 'A'] },
  { no: 23, rollNo: '1GMech-10', name: 'မောင်လင်းလက်ဉာဏ်မောင်', marks: ['B-', 'D', 'B+', 'Inc', 'Inc', 'B+', 'B-', 'A-'] },
  { no: 24, rollNo: '1GMech-5', name: 'မောင်ထက်ဝေယံဦး', marks: ['C', 'B', 'B+', 'Inc', 'Inc', 'B-', 'D', 'B+'] },
  { no: 25, rollNo: '1GMech-31', name: 'မောင်စိုင်းဆိုင်င်မောက်', marks: ['B+', 'Inc', 'Inc', 'B+', 'Inc', 'Inc', 'A-', 'B+'] },
  { no: 26, rollNo: '1GMech-Ext-1', name: 'မောင်မင်းခန့်ဇော်', marks: ['F', 'F', 'F', 'Inc', 'Inc', 'Inc', 'F', 'F'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc') || marks.includes('F')) {
    return 'Re-exam / Fail';
  }
  return 'Pass';
};

export function MechYear1({ onBack }: MechYear1Props) {
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
          <h2>A.G.T.I. (Mechanical Engineering) - First Year Results</h2>
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
                <th style={{ padding: '10px' }}>Principles of Electrical and Electronic Technology</th>
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
                          <span style={{ fontWeight: grade === 'Inc' || grade === 'F' ? '700' : '600', color: grade === 'Inc' || grade === 'F' ? '#dc2626' : '#1e293b' }}>
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

export default MechYear1;