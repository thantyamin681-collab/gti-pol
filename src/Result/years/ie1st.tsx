import { useState } from 'react';
import '../result.css';

interface IeYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GIE-1', name: 'မောင်အောင်မြတ်သူ', marks: ['A-', 'A', 'A+', 'A+', 'A+', 'A+', 'A+', 'A+'] },
  { no: 2, rollNo: '1GIE-15', name: 'မဆင့်အိန္ဒြေထွန်း', marks: ['A-', 'B+', 'A', 'A-', 'A', 'A', 'A+', 'A'] },
  { no: 3, rollNo: '1GIE-12', name: 'မနွေးထွေးအောင်', marks: ['B+', 'B+', 'A+', 'A-', 'A', 'A', 'A', 'A'] },
  { no: 4, rollNo: '1GIE-18', name: 'မမေမြတ်သူ', marks: ['B+', 'B+', 'A', 'A-', 'A-', 'A-', 'A+', 'A'] },
  { no: 5, rollNo: '1GIE-5', name: 'မချမ်းခြိမ့်ခြိမ့်နွေ', marks: ['B', 'A-', 'A-', 'B+', 'A-', 'A', 'A', 'A'] },
  { no: 6, rollNo: '1GIE-20', name: 'မတွယ်တာမိုးထက်', marks: ['B', 'B+', 'A', 'B+', 'A-', 'A-', 'A', 'A'] },
  { no: 7, rollNo: '1GIE-3', name: 'မစန်းသီရိမော်', marks: ['B+', 'B+', 'A', 'B+', 'A-', 'A', 'B+', 'A'] },
  { no: 8, rollNo: '1GIE-10', name: 'မရှိန်းလိန်းပိုင်', marks: ['A-', 'B+', 'A-', 'A-', 'A-', 'A-', 'A-', 'A-'] },
  { no: 9, rollNo: '1GIE-21', name: 'မခင်ယုလှိုင်', marks: ['B+', 'B+', 'B+', 'A-', 'A', 'A-', 'A-', 'A-'] },
  { no: 10, rollNo: '1GIE-23', name: 'မသီရိသူ', marks: ['A-', 'B+', 'B+', 'B+', 'A-', 'A-', 'A+', 'A-'] },
  { no: 11, rollNo: '1GIE-9', name: 'မောင်ဇေယျာဖြိုး', marks: ['B+', 'B+', 'A', 'B+', 'A-', 'B+', 'A-', 'A'] },
  { no: 12, rollNo: '1GIE-27', name: 'မမီမီသော်', marks: ['A-', 'B+', 'A', 'A-', 'A-', 'A', 'B', 'B+'] },
  { no: 13, rollNo: '1GIE-26', name: 'မောင်စိုင်းထက်လွင်', marks: ['B+', 'B+', 'A-', 'B', 'B+', 'B+', 'A-', 'A'] },
  { no: 14, rollNo: '1GIE-22', name: 'မတာတာနွယ်', marks: ['B+', 'B', 'B+', 'B+', 'A-', 'A-', 'A-', 'B+'] },
  { no: 15, rollNo: '1GIE-19', name: 'မဆုရွှန်းပြည့်', marks: ['B+', 'B+', 'A', 'B', 'B+', 'A-', 'B+', 'A-'] },
  { no: 16, rollNo: '1GIE-17', name: 'မောင်ကျော်ကိုကိုထက်', marks: ['C', 'B-', 'A-', 'B', 'B+', 'B', 'A-', 'A-'] },
  { no: 17, rollNo: '1GIE-7', name: 'မောင်အောင်ဘုန်းမြတ်', marks: ['B+', 'B-', 'Inc', 'B', 'Inc', 'B+', 'A-', 'A-'] },
  { no: 18, rollNo: '1GIE-2', name: 'မောင်ခန့်ဇင်ဟိန်း', marks: ['B+', 'C', 'B+', 'B', 'Inc', 'B+', 'A-', 'A-'] },
  { no: 19, rollNo: '1GIE-13', name: 'မောင်မင်းသက်ဝေ', marks: ['B-', 'B', 'B+', 'Inc', 'Inc', 'B+', 'B+', 'A-'] },
  { no: 20, rollNo: '1GIE-28', name: 'မောင်နိုင်အောင်ကျော်', marks: ['B-', 'B-', 'B+', 'Inc', 'Inc', 'B+', 'B-', 'A-'] },
  { no: 21, rollNo: '1GIE-24', name: 'မောင်နေဇင်လတ်', marks: ['C', 'C', 'B+', 'Inc', 'Inc', 'Inc', 'B', 'B+'] },
  { no: 22, rollNo: '1GIE-29', name: 'မောင်ဟိန်းထက်သော်ဇင်', marks: ['C', 'D', 'B+', 'Inc', 'Inc', 'B+', 'C', 'B+'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function IeYear1({ onBack }: IeYear1Props) {
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
          <h2>A.G.T.I. (Industrial Engineering) - First Year Results</h2>
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
                <th style={{ padding: '10px' }}>Electrical and Electronic Technology I</th>
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

export default IeYear1;