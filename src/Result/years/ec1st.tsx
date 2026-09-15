import { useState } from 'react';
import '../result.css';

interface EcYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GEC-2', name: 'မောင်ဟိန်းစစ်နိုင်', marks: ['A-', 'A-', 'A-', 'A', 'A', 'A', 'A', 'A+'] },
  { no: 2, rollNo: '1GEC-7', name: 'မသက်မွန်အေး', marks: ['A-', 'B+', 'A-', 'A-', 'A', 'A+', 'A', 'A'] },
  { no: 3, rollNo: '1GEC-3', name: 'မသီရိကျော်', marks: ['A-', 'A-', 'A', 'A-', 'A', 'A', 'A-', 'A'] },
  { no: 4, rollNo: '1GEC-22', name: 'မယုဝတီအောင်', marks: ['A-', 'B+', 'A', 'A-', 'A', 'A', 'A-', 'A'] },
  { no: 5, rollNo: '1GEC-15', name: 'မပြုံးအိအိဇော်', marks: ['A-', 'A-', 'A', 'A-', 'A-', 'A-', 'A+', 'A'] },
  { no: 6, rollNo: '1GEC-14', name: 'မသဇင်ထိုက်', marks: ['A-', 'B+', 'B+', 'A-', 'A', 'A', 'A-', 'A+'] },
  { no: 7, rollNo: '1GEC-4', name: 'မောင်ဟိန်းသူဝေ', marks: ['A-', 'B+', 'A+', 'B+', 'A', 'A', 'B+', 'A-'] },
  { no: 8, rollNo: '1GEC-23', name: 'မရွှန်းထက်ထက်နိုင်', marks: ['A-', 'B', 'B+', 'B+', 'A-', 'A-', 'A', 'A'] },
  { no: 9, rollNo: '1GEC-11', name: 'မဆုပန်စိုးလွင်', marks: ['A-', 'A-', 'A', 'A-', 'A-', 'A', 'B-', 'A'] },
  { no: 10, rollNo: '1GEC-12', name: 'မနှင်းရွှေလီ', marks: ['A-', 'B+', 'A-', 'A-', 'B+', 'A-', 'A-', 'A-'] },
  { no: 11, rollNo: '1GEC-20', name: 'မနွယ်နီလင်းမောင်', marks: ['B+', 'B+', 'B+', 'B+', 'A-', 'A-', 'A-', 'A'] },
  { no: 12, rollNo: '1GEC-8', name: 'မောင်ဟန်ဖြိုးကျော်', marks: ['B+', 'B+', 'A-', 'B+', 'A-', 'A-', 'B+', 'A-'] },
  { no: 13, rollNo: '1GEC-9', name: 'မသံသာမိုးဦး', marks: ['A-', 'B+', 'A-', 'B+', 'B+', 'A-', 'B+', 'A-'] },
  { no: 14, rollNo: '1GEC-6', name: 'မောင်ဟိန်းထက်စိုး', marks: ['A-', 'B+', 'A-', 'B+', 'A-', 'A', 'C', 'A-'] },
  { no: 15, rollNo: '1GEC-17', name: 'မောင်ခန့်မင်းသန့်', marks: ['B', 'B-', 'B+', 'B+', 'B+', 'A-', 'B+', 'A-'] },
  { no: 16, rollNo: '1GEC-10', name: 'မဇူးရတီနိုင်', marks: ['A-', 'A-', 'B+', 'B', 'B+', 'A-', 'B', 'A-'] },
  { no: 17, rollNo: '1GEC-5', name: 'မောင်သတိုးထက်', marks: ['B-', 'B+', 'A-', 'C', 'B+', 'B+', 'D', 'B+'] },
  { no: 18, rollNo: '1GEC-16', name: 'မောင်ညီသစ်ဆင်း', marks: ['B+', 'B+', 'Inc', 'B+', 'B+', 'A-', 'A-', 'B+'] },
  { no: 19, rollNo: '1GEC-19', name: 'မအိမ်လွမ်းသော်', marks: ['A-', 'B', 'A-', 'B+', 'A-', 'A', 'Inc', 'A-'] },
  { no: 20, rollNo: '1GEC-13', name: 'မနန်းချစ်စိုးနွယ်', marks: ['B', 'B+', 'Inc', 'B+', 'C', 'B+', 'B+', 'A-'] },
  { no: 21, rollNo: '1GEC-27', name: 'မောင်သူရိန်လင်းထက်', marks: ['C', 'A-', 'Inc', 'Inc', 'Inc', 'B', 'A-', 'B+'] },
  { no: 22, rollNo: '1GEC-28R', name: 'မောင်ကောင်းမြတ်ထွန်း', marks: ['D', 'D', 'B', 'Inc', 'Inc', 'D', 'D', 'B+'] },
  { no: 23, rollNo: '1GEC-21', name: 'မောင်ဆိုင်းလင်းထူး', marks: ['B-', 'D', 'Inc', 'Inc', 'Inc', 'D', 'D', 'B+'] },
  { no: 24, rollNo: '1GEC-EX1', name: 'မမွန်မြတ်သဒ္ဓါ', marks: ['F', 'C', 'F', 'Inc', 'Inc', 'Inc', 'F', 'Inc'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc') || marks.includes('F')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function EcYear1({ onBack }: EcYear1Props) {
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
          <h2>A.G.T.I. (Electronic Communications) - First Year Results</h2>
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
                <th style={{ padding: '10px' }}>Circuit Analysis I</th>
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

export default EcYear1;