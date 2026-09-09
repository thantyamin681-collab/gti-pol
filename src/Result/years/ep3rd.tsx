import { useState } from 'react';
import '../result.css';

interface EpYear3Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[]; // Stored as grade strings (A, A+, B+, etc.) based on marksheet
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '3GEP-1', name: 'မနှင်းပြည့်စုံ', marks: ['A', 'A+', 'A', 'A', 'A', 'A+'] },
  { no: 2, rollNo: '3GEP-2', name: 'မရွှန်းလဲ့ဦး', marks: ['A', 'A', 'A-', 'A', 'A', 'A'] },
  { no: 3, rollNo: '3GEP-3', name: 'မဖူးပြည့်စုံကျော်', marks: ['A-', 'A', 'B', 'A-', 'A', 'A-'] },
  { no: 4, rollNo: '3GEP-4', name: 'မောင်အာကာမင်းထက်', marks: ['A', 'A', 'A-', 'A-', 'A', 'A'] },
  { no: 5, rollNo: '3GEP-5', name: 'မောင်ခန့်ကျော်စွာဝင်း', marks: ['A-', 'A-', 'B+', 'A-', 'B+', 'A-'] },
  { no: 6, rollNo: '3GEP-6', name: 'မောင်ရဲရင့်စွဲ', marks: ['B+', 'A-', 'B+', 'A-', 'A-', 'A-'] },
  { no: 7, rollNo: '3GEP-7', name: 'မောင်သာလင်းထက်', marks: ['A-', 'A-', 'B', 'A-', 'A-', 'A-'] },
  { no: 8, rollNo: '3GEP-8', name: 'မောင်ရဲလင်းလှိုင်', marks: ['A-', 'A-', 'A-', 'B+', 'A', 'A-'] },
  { no: 9, rollNo: '3GEP-9', name: 'မောင်အောင်ဘုန်းမြင့်', marks: ['B+', 'A-', 'B-', 'B+', 'A-', 'A-'] },
  { no: 10, rollNo: '3GEP-10', name: 'မောင်ဇော်နိုင်ထွန်း', marks: ['B+', 'B+', 'B', 'B+', 'B+', 'B+'] },
  { no: 11, rollNo: '3GEP-12', name: 'မောင်ဟိန်းထက်နိုင်', marks: ['B', 'B+', 'C', 'B+', 'B+', 'B+'] },
  { no: 12, rollNo: '3GEP-14', name: 'မောင်ခွန်ကောင်းမောင်မင်း', marks: ['A-', 'B+', 'B+', 'B+', 'A-', 'A-'] },
  { no: 13, rollNo: '3GEP-11', name: 'မမေမြတ်မြတ်မင်း', marks: ['B+', 'B+', 'B-', 'Inc', 'B+', 'B+'] },
  { no: 14, rollNo: '3GEP-13', name: 'မောင်ရန်မျိုးထွန်း', marks: ['B+', 'B+', 'Inc', 'Inc', 'B+', 'B+'] },
 
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function EpYear3({ onBack }: EpYear3Props) {
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
          <h2>A.G.T.I. (Electrical Power) - Third Year Results</h2>
          <p>2025-2026 Academic Year, Third Year, Second Semester Re-exam Pass/Fail List.</p>
        </div>

        <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '100%', overflowX: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ color: '#1e293b', margin: 0 }}>Comprehensive Student Marksheet & Grades</h3>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '1000px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.8rem' }}>
                <th style={{ padding: '10px' }} rowSpan={2}>No</th>
                <th style={{ padding: '10px' }} rowSpan={2}>Roll No</th>
                <th style={{ padding: '10px', textAlign: 'left' }} rowSpan={2}>Name</th>
                <th style={{ padding: '10px' }}>Engineering Economics</th>
                <th style={{ padding: '10px' }}>Entrepreneurship Development & Project Management</th>
                <th style={{ padding: '10px' }}>Electrical Estimating</th>
                <th style={{ padding: '10px' }}>Electrical Safety and Protection</th>
                <th style={{ padding: '10px' }}>Industrial Motor Control</th>
                <th style={{ padding: '10px' }}>Programmable Logic Control / Renewable Energy</th>
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

                      {/* Pad extra cell if row has fewer subjects (e.g. 3GEC rows have 5 subject columns instead of 6) */}
                      {student.marks.length < 6 && <td style={{ padding: '10px 4px' }}>-</td>}

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
                  <td colSpan={10} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>No student records found.</td>
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

export default EpYear3;