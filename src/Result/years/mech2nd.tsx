import { useState } from 'react';
import '../result.css';

interface MechYear2Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '2GMech-1', name: 'မကေသီရီအောင်', marks: ['A', 'A+', 'A', 'A', 'A-', 'A+', 'A-', 'A'] },
  { no: 2, rollNo: '2GMech-2', name: 'မောင်နေမျိုးရှိန်း', marks: ['A', 'A+', 'A-', 'A', 'A-', 'A+', 'A+', 'A+'] },
  { no: 3, rollNo: '2GMech-3', name: 'မောင်ညီစစ်မင်း', marks: ['B+', 'A', 'B+', 'A-', 'A-', 'A', 'A', 'A'] },
  { no: 4, rollNo: '2GMech-4', name: 'မောင်ဘုန်းမြတ်ပိုင်ထွန်း', marks: ['B+', 'A+', 'C', 'A', 'A-', 'A', 'A', 'A-'] },
  { no: 5, rollNo: '2GMech-5', name: 'မသက်မွန်ငြိမ်း', marks: ['B+', 'A-', 'B+', 'B+', 'B+', 'B+', 'B+', 'A-'] },
  { no: 6, rollNo: '2GMech-6', name: 'မနှင်းအိလွင်', marks: ['A-', 'A-', 'B+', 'A-', 'A-', 'A-', 'A-', 'A'] },
  { no: 7, rollNo: '2GMech-7', name: 'မောင်လျှံထက်', marks: ['B-', 'B+', 'B+', 'B+', 'A-', 'A-', 'B+', 'B+'] },
  { no: 8, rollNo: '2GMech-9', name: 'မသွန်းသွယ်သော်', marks: ['B', 'A-', 'B+', 'A-', 'A-', 'B+', 'B+', 'A-'] },
  { no: 9, rollNo: '2GMech-10', name: 'မောင်ကောင်းပြည့်စုံ', marks: ['B+', 'B+', 'D', 'A-', 'A-', 'A-', 'B+', 'B'] },
  { no: 10, rollNo: '2GMech-11', name: 'မောင်ဖြိုးသူရိန်ခန့်', marks: ['A-', 'A-', 'B', 'B+', 'A-', 'B+', 'A-', 'B+'] },
  { no: 11, rollNo: '2GMech-12', name: 'မောင်ချမ်းမြေ့ဟန်', marks: ['B', 'B-', 'C', 'B', 'B+', 'A-', 'A-', 'A-'] },
  { no: 12, rollNo: '2GMech-14', name: 'မဇင်လဲဖြူ', marks: ['C', 'B', 'B', 'B', 'B+', 'B+', 'B', 'B+'] },
  { no: 13, rollNo: '2GMech-16', name: 'မောင်ထက်စည်သူအောင်', marks: ['B+', 'B', 'D', 'B+', 'A-', 'A-', 'B-', 'B'] },
  { no: 14, rollNo: '2GMech-8', name: 'မောင်ဝေယံလင်း', marks: ['A-', 'A', 'Inc', 'A-', 'A-', 'A', 'A-', 'B'] },
  { no: 15, rollNo: '2GMech-13', name: 'မောင်မင်းဝင်းပိုင်ဦး', marks: ['B', 'A-', 'Inc', 'B', 'B+', 'B+', 'B+', 'B+'] },
  { no: 16, rollNo: '2GMech-17', name: 'မောင်ဝင်းလွင်တိုး', marks: ['B', 'B-', 'Inc', 'B+', 'B+', 'A-', 'Inc', 'B-'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function MechYear2({ onBack }: MechYear2Props) {
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
          <h2>A.G.T.I. (Mechanical Engineering) - Second Year Results</h2>
          <p>2025-2026 Academic Year, Second Year, First Semester Re-exam Pass/Fail List.</p>
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
                <th style={{ padding: '10px' }}>Technical English</th>
                <th style={{ padding: '10px' }}>Laws and Guidelines relating to Technology</th>
                <th style={{ padding: '10px' }}>Applied Mathematics III</th>
                <th style={{ padding: '10px' }}>Introduction to ICT</th>
                <th style={{ padding: '10px' }}>Thermodynamics</th>
                <th style={{ padding: '10px' }}>Production Technology (Estimating & Shop)</th>
                <th style={{ padding: '10px' }}>Internal Combustion Engine I</th>
                <th style={{ padding: '10px' }}>Theory of Machines</th>
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

export default MechYear2;