import { useState } from 'react';
import '../result.css';

interface EcYear2Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '2GEC-1', name: 'မရွှန်းလဲ့ဆွေ', marks: ['B+', 'A', 'A', 'A-', 'A-', 'A-', 'A', 'A-'] },
  { no: 2, rollNo: '2GEC-2', name: 'မမျိုးသီရိဇော်', marks: ['B+', 'A', 'A', 'B+', 'B+', 'B+', 'A-', 'A-'] },
  { no: 3, rollNo: '2GEC-3', name: 'မောင်စိုင်းချမ်းမြေ့နိုင်', marks: ['B-', 'A-', 'B+', 'A-', 'B+', 'A-', 'A-', 'A-'] },
  { no: 4, rollNo: '2GEC-4', name: 'မောင်ကျော်မျိုးနိုင်', marks: ['B+', 'A', 'B+', 'A-', 'B+', 'B+', 'A-', 'B+'] },
  { no: 5, rollNo: '2GEC-11', name: 'မဆုချိုသန္တာရွှယ်', marks: ['B-', 'A-', 'B+', 'B+', 'B+', 'A-', 'B+', 'A-'] },
  { no: 6, rollNo: '2GEC-15', name: 'မောင်ကျော်ဇေယျ', marks: ['B+', 'B', 'B', 'B+', 'B+', 'B+', 'B+', 'B+'] },
  { no: 7, rollNo: '2GEC-5', name: 'မောင်ဘုန်းပြည့်ဖြိုးလွင်', marks: ['B+', 'B+', 'B+', 'Inc', 'B+', 'B+', 'B+', 'A-'] },
  { no: 8, rollNo: '2GEC-6', name: 'မောင်စေဖြိုးသာ', marks: ['B+', 'B+', 'Inc', 'B+', 'B+', 'B+', 'A-', 'B+'] },
  { no: 9, rollNo: '2GEC-7', name: 'မနှင်းယုလွင်', marks: ['B+', 'B+', 'Inc', 'B+', 'B+', 'B+', 'B+', 'A-'] },
  { no: 10, rollNo: '2GEC-8', name: 'မဝေဝေခိုင်', marks: ['B+', 'B-', 'B+', 'B+', 'B+', 'B+', 'B+', 'Inc'] },
  { no: 11, rollNo: '2GEC-9', name: 'မရှင်းမျက်သွယ်', marks: ['B', 'B-', 'Inc', 'B+', 'B+', 'B+', 'B+', 'Inc'] },
  { no: 12, rollNo: '2GEC-10', name: 'မောင်သိန်းသန်းဝင်း', marks: ['B+', 'B+', 'Inc', 'B+', 'B+', 'B+', 'B+', 'B+'] },
  { no: 13, rollNo: '2GEC-12', name: 'မောင်လျှံလွှမ်းအောင်', marks: ['B+', 'B+', 'Inc', 'B+', 'B+', 'B+', 'A-', 'A-'] },
  { no: 14, rollNo: '2GEC-13', name: 'မရွှန်းနုဒီ', marks: ['B+', 'B', 'Inc', 'B+', 'B+', 'A-', 'A-', 'A-'] },
  { no: 15, rollNo: '2GEC-16', name: 'မောင်ကျော်ဇင်ဝင်း', marks: ['B+', 'B+', 'Inc', 'A-', 'B+', 'B+', 'B+', 'A-'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc')) {
    return 'Re-exam';
  }
  return 'Pass';
};

export function EcYear2({ onBack }: EcYear2Props) {
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
          <h2>A.G.T.I. (Electronic Communications) - Second Year Results</h2>
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
                <th style={{ padding: '10px' }}>Electrical Machines</th>
                <th style={{ padding: '10px' }}>Digital Electronics II</th>
                <th style={{ padding: '10px' }}>Analog Electronics II</th>
                <th style={{ padding: '10px' }}>Computer Programming I</th>
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

export default EcYear2;