import { useState } from 'react';
import '../result.css';

interface CivilYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: string[];
}

const studentResults: StudentResult[] = [
  { no: 1, rollNo: '1GC-1', name: 'မောင်လမင်းထက်သာ', marks: ['A-', 'A-', 'A+', 'A+', 'A', 'A', 'A', 'A+'] },
  { no: 2, rollNo: '1GC-20', name: 'မဇာခြည်ကို', marks: ['A-', 'A-', 'A+', 'A', 'A', 'A+', 'A', 'A+'] },
  { no: 3, rollNo: '1GC-30', name: 'မခိုင်ဆုမြတ်မွန်', marks: ['A-', 'A-', 'A+', 'A+', 'A', 'A+', 'A', 'A+'] },
  { no: 4, rollNo: '1GC-15', name: 'မခင်မြန်မာဆန်', marks: ['A-', 'A-', 'A+', 'A', 'A', 'A+', 'A', 'A+'] },
  { no: 5, rollNo: '1GC-5', name: 'မောင်ရဲမင်း', marks: ['A-', 'A-', 'A+', 'A', 'A', 'A+', 'A', 'A+'] },
  { no: 6, rollNo: '1GC-8', name: 'မောင်ကောင်းဆက်လင်း', marks: ['A-', 'A-', 'A', 'A', 'A', 'A', 'A', 'A+'] },
  { no: 7, rollNo: '1GC-9', name: 'မောင်ကျော်ခိုင်ဝင်း', marks: ['A-', 'B+', 'A+', 'A', 'A', 'A+', 'A', 'A+'] },
  { no: 8, rollNo: '1GC-32', name: 'မဆန်းမီ၀င်း', marks: ['A-', 'A-', 'A+', 'A', 'A-', 'A+', 'A', 'A+'] },
  { no: 9, rollNo: '1GC-6', name: 'မောင်စည်သူကျော်', marks: ['A-', 'A-', 'A', 'A', 'A-', 'A', 'A', 'A+'] },
  { no: 10, rollNo: '1GC-44', name: 'မသဒ္ဒါမောင်', marks: ['A-', 'A-', 'A', 'A', 'A-', 'A', 'A', 'A+'] },
  { no: 11, rollNo: '1GC-10', name: 'မောင်ဇေယျာဖြိုး', marks: ['A-', 'B+', 'A', 'A', 'A-', 'A+', 'A', 'A+'] },
  { no: 12, rollNo: '1GC-22', name: 'မတင်မာလာဦး', marks: ['A-', 'A-', 'A', 'A', 'A', 'A', 'A-', 'A+'] },
  { no: 13, rollNo: '1GC-29', name: 'မယွန်းမီမီထွန်း', marks: ['B+', 'B+', 'A', 'A', 'A-', 'A', 'A', 'A+'] },
  { no: 14, rollNo: '1GC-7', name: 'မောင်ပိုင်ပြည့်ဖြိုး', marks: ['A-', 'A-', 'A+', 'A-', 'A-', 'A', 'A', 'A+'] },
  { no: 15, rollNo: '1GC-28', name: 'မသက်မှူးပိုင်', marks: ['A-', 'A-', 'A', 'A', 'A-', 'A+', 'A-', 'A+'] },
  { no: 16, rollNo: '1GC-13', name: 'မောင်ရဲရင့်ဖြိုး', marks: ['A-', 'A-', 'A+', 'A', 'A-', 'A', 'A-', 'A+'] },
  { no: 17, rollNo: '1GC-4', name: 'မောင်ဘုန်းကျော်ဟန်', marks: ['B+', 'A-', 'A', 'A-', 'A-', 'A', 'A', 'A+'] },
  { no: 18, rollNo: '1GC-14', name: 'မောင်ထက်ပိုင်လင်း', marks: ['B+', 'B+', 'A-', 'A', 'A-', 'A', 'A', 'A'] },
  { no: 19, rollNo: '1GC-33', name: 'မောင်အားမာန်ထက်', marks: ['A-', 'A-', 'A-', 'A-', 'A-', 'A', 'A', 'A+'] },
  { no: 20, rollNo: '1GC-3', name: 'မသက်ဆုသွန်း', marks: ['A-', 'A-', 'A', 'A-', 'B+', 'A', 'A', 'A+'] },
  { no: 21, rollNo: '1GC-42', name: 'မောင်ကျော်မင်းခန့်', marks: ['A-', 'A-', 'A', 'A-', 'A-', 'A', 'A-', 'A+'] },
  { no: 22, rollNo: '1GC-36', name: 'မောင်ဟိန်းထက်အောင်', marks: ['A-', 'B+', 'A', 'A-', 'A-', 'A', 'A', 'A-'] },
  { no: 23, rollNo: '1GC-40', name: 'မဝတ်မှုန်အေး', marks: ['B+', 'A', 'A-', 'A-', 'B+', 'A', 'A', 'A+'] },
  { no: 24, rollNo: '1GC-11', name: 'မောင်ကျော်မင်းသန့်', marks: ['B+', 'A-', 'A', 'B+', 'B+', 'A-', 'A-', 'A+'] },
  { no: 25, rollNo: '1GC-18', name: 'မောင်စိုးရန်နိုင်ထွန်း', marks: ['B+', 'B+', 'A-', 'A-', 'B+', 'A-', 'A', 'A'] },
  { no: 26, rollNo: '1GC-24', name: 'မောင်ငြိမ်းချမ်းမင်းပြုံး', marks: ['B+', 'B+', 'A-', 'A-', 'A-', 'B+', 'A-', 'A'] },
  { no: 27, rollNo: '1GC-38', name: 'မဥဥခင်', marks: ['B+', 'A-', 'A', 'B+', 'B', 'A-', 'A-', 'A'] },
  { no: 28, rollNo: '1GC-21', name: 'စုစန္ဒီဖြိုး', marks: ['B+', 'B', 'A', 'B+', 'B+', 'A-', 'B+', 'A'] },
  { no: 29, rollNo: '1GC-17', name: 'မဇူးဇူးနိုင်', marks: ['B+', 'B+', 'B+', 'A-', 'B+', 'B+', 'A-', 'A+'] },
  { no: 30, rollNo: '1GC-12', name: 'မောင်ဟိန်းထွဋ်မြတ်', marks: ['B', 'B+', 'A', 'B+', 'B', 'A-', 'B+', 'A'] },
  { no: 31, rollNo: '1GC-41', name: 'မောင်ကျော်မျိုးအောင်', marks: ['B+', 'B+', 'A-', 'B+', 'B', 'B+', 'A-', 'A'] },
  { no: 32, rollNo: '1GC-27', name: 'မအေးမြတ်စန္ဒီ', marks: ['A-', 'B-', 'A', 'B-', 'B', 'A', 'B', 'A'] },
  { no: 33, rollNo: '1GC-34', name: 'မရွှန်းလဲ့လဲ့အောင်', marks: ['B+', 'A-', 'A-', 'B+', 'D', 'A-', 'B+', 'A'] }
];

const calculateResult = (marks: string[]): string => {
  if (marks.includes('Inc') || marks.includes('F') || marks.includes('D')) {
    return 'Pass'; // Based on the provided civil images where all displayed students show "Pass" despite D grades
  }
  return 'Pass';
};

export function CivilYear1({ onBack }: CivilYear1Props) {
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
          <h2>A.G.T.I. (Civil Engineering) - First Year Results</h2>
          <p>2025-2026 Academic Year, First Year, First Semester Pass List.</p>
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
                <th style={{ padding: '10px' }}>Applied Mathematics I</th>
                <th style={{ padding: '10px' }}>Applied Physics</th>
                <th style={{ padding: '10px' }}>Engineering Mechanics</th>
                <th style={{ padding: '10px' }}>Basic Technical Drawing</th>
                <th style={{ padding: '10px' }}>Building Materials & Construction I</th>
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
                          <span style={{ fontWeight: '600', color: '#1e293b' }}>
                            {grade}
                          </span>
                        </td>
                      ))}

                      <td style={{ padding: '10px' }}>
                        <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: '#dcfce7', color: '#15803d' }}>
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

export default CivilYear1;