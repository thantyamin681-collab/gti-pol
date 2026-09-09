import { useState } from 'react';
import '../result.css';

interface ItYear3Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: number[];
}

// -----------------------------------------------------------------------------
// // Initial student data for Third Year Information Technology
// -----------------------------------------------------------------------------
const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: '3GIT-01', name: 'မယမင်းသန့်', marks: [80, 98, 92, 95, 99, 80, 80, ] },
  { no: 2, rollNo: '3GIT-02', name: 'မဇင်နှင်းမောင်', marks: [82, 88, 95, 88, 80, 83, 75, ] },
  { no: 3, rollNo: '3GIT-03', name: 'မရွှေအိ', marks: [95, 95, 95, 95, 95, 85, 75 ] },
  { no: 4, rollNo: '3GIT-04', name: 'မခင်ထိပ်ထားဦး', marks: [95, 95, 95, 95, 95, 80,80 ] },
  { no: 5, rollNo: '3GIT-05', name: 'မယွန်းဒါလီဝင်းမောင်', marks: [70, 65, 75, 80, 72, 68, 74 ] },
  { no: 6, rollNo: '3GIT-06', name: 'မရွှန်းလဲ့ဝေ', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 7, rollNo: '3GIT-07', name: 'မထက်နန္ဒာလှိုင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 8, rollNo: '3GIT-08', name: 'မသျှားသက်ဟန်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 9, rollNo: '3GIT-09', name: 'မနွေနေနန်း', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 10, rollNo: '3GIT-10', name: 'မမင်းပပခိုင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 11, rollNo: '3GIT-11', name: 'မခိုင်ကြာဖြူစင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 12, rollNo: '3GIT-12', name: 'မယဉ်မင်းမြတ်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 13, rollNo: '3GIT-13', name: 'မပန်းအိသွယ်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 14, rollNo: '3GIT-14', name: 'မချောရတနာ', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 15, rollNo: '3GIT-15', name: 'မစောကလျာထူး', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 16, rollNo: '3GIT-16', name: 'မောင်အောင်မင်းသန့်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 17, rollNo: '3GIT-17', name: 'မသက်သက်ခင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 18, rollNo: '3GIT-18', name: 'မဖြိုးအိန္ဒြေအောင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 19, rollNo: '3GIT-19', name: 'မအေးငြိမ်းဖြိုး', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 20, rollNo: '3GIT-20', name: 'မရွှန်းပြည့်ပြည့်အောင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 21, rollNo: '3GIT-21', name: 'မသက်ထားခင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 22, rollNo: '3GIT-22', name: 'မမေဇူးဇူးအောင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 23, rollNo: '3GIT-23', name: 'မောင်ကောင်းခန့်ကျော်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 24, rollNo: '3GIT-24', name: 'မောင်စည်သူအောင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 25, rollNo: '3GIT-25', name: 'မောင်ကောင်းခန့်သူ', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 26, rollNo: '3GIT-26', name: 'မအေးငြိမ်းထိုက်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 27, rollNo: '3GIT-27', name: 'မောင်သူရိန်စိုးစံ', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 28, rollNo: '3GIT-28', name: 'မကြယ်စင်ဝန်း', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 29, rollNo: '3GIT-29', name: 'မောင်ထက်ယံအောင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  { no: 30, rollNo: '3GIT-30', name: 'မပန်းအိစံ', marks: [25, 29, 30, 35, 48, 32, 27 ] },
   { no: 31, rollNo: '3GIT-31', name: 'မဖူးမြတ်သွယ်ဇင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
   { no: 32, rollNo: '3GIT-32', name: 'မောင်ရဲရင့်ရန်နိုင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
   { no: 33, rollNo: '3GIT-33', name: 'မောင်စစ်အောင်မှူး', marks: [25, 29, 30, 35, 48, 32, 27 ] },
   { no: 34, rollNo: '3GIT-34', name: 'မောင်မျိုးသူရိန်ခန့်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
   { no: 35, rollNo: '3GIT-35R', name: 'မသက်မှူးခိုင်', marks: [25, 29, 30, 35, 48, 32, 27 ] },
  
  
];

// -----------------------------------------------------------------------------
// // Utility function to calculate letter grade based on marks
// -----------------------------------------------------------------------------
const getGrade = (mark: number): string => {
  if (mark >= 95) return 'A+';
  if (mark >= 80) return 'A';
  if (mark >= 75) return 'A-';
  if (mark >= 70) return 'B-';
  if (mark >= 65) return 'B';
  if (mark >= 55) return 'C';
  if (mark >= 40) return 'D';
  return 'Inc';
};

// -----------------------------------------------------------------------------
// // Utility function to determine overall pass, fail, or re-exam status
// -----------------------------------------------------------------------------
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

export function ItYear3({ onBack }: ItYear3Props) {
  // ---------------------------------------------------------------------------
  // // React state hooks for searching, editing, and admin management
  // ---------------------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<StudentResult[]>(initialStudentResults);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingRollNo, setEditingRollNo] = useState<string | null>(null);
  const [tempMarks, setTempMarks] = useState<number[]>([]);

  // ---------------------------------------------------------------------------
  // // Filter students dynamically by roll number or name
  // ---------------------------------------------------------------------------
  const filteredStudents = students.filter((student) => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStartEdit = (student: StudentResult) => {
    setEditingRollNo(student.rollNo);
    setTempMarks([...student.marks]);
  };

  const handleMarkChange = (index: number, value: string) => {
    const numVal = parseInt(value) || 0;
    const updated = [...tempMarks];
    updated[index] = numVal > 100 ? 100 : numVal < 0 ? 0 : numVal;
    setTempMarks(updated);
  };

  const handleSaveEdit = (rollNo: string) => {
    setStudents(prev => 
      prev.map(st => st.rollNo === rollNo ? { ...st, marks: tempMarks } : st)
    );
    setEditingRollNo(null);
  };

  return (
    <div className="results-wrapper">
      <div className="results-container" style={{ maxWidth: '100%', padding: '2rem 3rem' }}>
        
        {/* Top Bar with Back Button, Admin Toggle & Search Box */}
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

            <button 
              onClick={() => setIsAdmin(!isAdmin)}
              style={{
                padding: '0.6rem 1rem',
                backgroundColor: isAdmin ? '#dc2626' : '#475569',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem'
              }}
            >
              {isAdmin ? '🔒 Exit Admin Mode' : '🔑 Admin Login (Test)'}
            </button>
          </div>

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
          <h2>Information Technology - Third Year Results</h2>
          <p>Detailed subject grades and performance records for Year 3.</p>
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
            <span style={{ fontSize: '0.8rem', color: isAdmin ? '#dc2626' : '#10b981', fontWeight: '600' }}>
              {isAdmin ? '⚠️ Admin Mode Active: Marks and Fix options are visible.' : '👁️ Client View: Marks and Action buttons are hidden.'}
            </span>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '900px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px' }}>No</th>
                <th style={{ padding: '12px' }}>Roll No</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px' }}>Engineering Economics</th>
                <th style={{ padding: '12px' }}>Entrepreneurship Development and Project Management</th>
                <th style={{ padding: '12px' }}>Programming with C#</th>
                <th style={{ padding: '12px' }}>Web Development Technology Using PHP</th>
                <th style={{ padding: '12px' }}>Information Security</th>
                <th style={{ padding: '12px' }}>Computer Network Administration (Elective)</th>
                <th style={{ padding: '12px' }}>Mobile Application Development (Elective)</th>

                <th style={{ padding: '12px' }}>Result</th>
                {isAdmin && <th style={{ padding: '12px' }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const isEditing = editingRollNo === student.rollNo;
                  const currentMarksToEvaluate = isEditing ? tempMarks : student.marks;
                  const { status } = calculateResult(currentMarksToEvaluate);

                  return (
                    <tr key={student.rollNo} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.9rem' }}>
                      <td style={{ padding: '12px' }}>{student.no}</td>
                      <td style={{ padding: '12px', fontWeight: '600' }}>{student.rollNo}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: '500' }}>{student.name}</td>
                      
                      {student.marks.map((mark, idx) => {
                        const activeMark = isEditing ? tempMarks[idx] : mark;
                        const grade = getGrade(activeMark);

                        return (
                          <td key={idx} style={{ padding: '12px 4px' }}>
                            {isAdmin && isEditing ? (
                              <input 
                                type="number" 
                                value={activeMark} 
                                onChange={(e) => handleMarkChange(idx, e.target.value)}
                                style={{
                                  width: '45px',
                                  padding: '4px',
                                  textAlign: 'center',
                                  border: '1px solid #3b82f6',
                                  borderRadius: '4px',
                                  fontSize: '0.85rem',
                                  outline: 'none'
                                }}
                              />
                            ) : (
                              <div>
                                <span style={{ fontWeight: grade === 'Inc' ? '700' : '600', color: grade === 'Inc' ? '#dc2626' : '#1e293b' }}>
                                  {grade}
                                </span>
                                {isAdmin && (
                                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>({mark})</div>
                                )}
                              </div>
                            )}
                          </td>
                        );
                      })}

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

                      {isAdmin && (
                        <td style={{ padding: '12px' }}>
                          {isEditing ? (
                            <button 
                              onClick={() => handleSaveEdit(student.rollNo)}
                              style={{
                                padding: '4px 10px',
                                backgroundColor: '#10b981',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}
                            >
                              Save
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleStartEdit(student)}
                              style={{
                                padding: '4px 10px',
                                backgroundColor: '#3b82f6',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}
                            >
                              Fix Marks
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 13 : 12} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>
                    No student records found.
                  </td>
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

export default ItYear3;
