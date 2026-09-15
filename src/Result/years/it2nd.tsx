import { useState } from 'react';
import '../result.css';

interface ItYear2Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  grades: string[];
}

// -----------------------------------------------------------------------------
// // Initial student data mapped precisely from official mark sheets (Roll 1 to 30)
// -----------------------------------------------------------------------------
const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: '2GIT-01', name: 'မအင်ကြင်းသူ', grades: ['A-', 'A+', 'A', 'A', 'A', 'A', 'A-', 'A'] },
  { no: 2, rollNo: '2GIT-02', name: 'မဝိုင်းသော်တာ', grades: ['A', 'A', 'A', 'A+', 'A', 'A', 'A-', 'A'] },
  { no: 3, rollNo: '2GIT-03', name: 'မနှင်းယုမွန်', grades: ['A', 'A+', 'A-', 'A-', 'A', 'A', 'A-', 'A-'] },
  { no: 4, rollNo: '2GIT-04', name: 'မောင်ချမ်းမြေ့ဦး', grades: ['B+', 'A-', 'B+', 'A-', 'A-', 'A-', 'B+', 'A-'] },
  { no: 5, rollNo: '2GIT-05', name: 'မောင်မင်းသက်ဟန်', grades: ['A', 'B+', 'A-', 'A', 'A-', 'A-', 'A-', 'A-'] },
  { no: 6, rollNo: '2GIT-06', name: 'မခင်သန္တာဦး', grades: ['A-', 'A', 'A-', 'A-', 'A-', 'A-', 'A-', 'A-'] },
  { no: 7, rollNo: '2GIT-07', name: 'မသူသူဝင်း', grades: ['A-', 'B', 'A-', 'B+', 'B+', 'B+', 'B+', 'A-'] },
  { no: 8, rollNo: '2GIT-08', name: 'မောင်ကျော်ဇင်ဝင်း', grades: ['B+', 'B+', 'B+', 'A-', 'A-', 'A-', 'A-', 'A-'] },
  { no: 9, rollNo: '2GIT-09', name: 'မရွှန်းလဲ့ဝင်း', grades: ['A-', 'A', 'A-', 'A-', 'B+', 'A-', 'A-', 'A-'] },
  { no: 10, rollNo: '2GIT-10', name: 'မမြတ်သင်းကြူ', grades: ['A-', 'B+', 'B+', 'B+', 'A-', 'B+', 'B+', 'B+'] },
  { no: 11, rollNo: '2GIT-12', name: 'မောင်မင်းထက်ခန့်ထွန်း', grades: ['A-', 'B+', 'B+', 'A-', 'A-', 'A-', 'B+', 'A-'] },
  { no: 12, rollNo: '2GIT-13', name: 'မောင်သော်ဒီမောင်', grades: ['A-', 'A-', 'C', 'A', 'A-', 'A-', 'A-', 'A-'] },
  { no: 13, rollNo: '2GIT-14', name: 'မောင်ချစ်လင်းကို', grades: ['A-', 'A', 'B+', 'A-', 'A-', 'A-', 'A-', 'B+'] },
  { no: 14, rollNo: '2GIT-15', name: 'မသူဇာဝင်း', grades: ['B+', 'A-', 'B+', 'A-', 'A-', 'A-', 'B+', 'A-'] },
  { no: 15, rollNo: '2GIT-16', name: 'မောင်စိုးမင်းအောင်', grades: ['B+', 'A-', 'A-', 'A-', 'A', 'A-', 'B+', 'A-'] },
  { no: 16, rollNo: '2GIT-17', name: 'မဖြိုးသီရိကျော်', grades: ['A-', 'A+', 'A-', 'A-', 'B+', 'B+', 'B+', 'B+'] },
  { no: 17, rollNo: '2GIT-18', name: 'မအိပွင့်ဖြူ', grades: ['B+', 'A-', 'A-', 'B+', 'A-', 'B+', 'B+', 'A-'] },
  { no: 18, rollNo: '2GIT-19', name: 'မောင်ဉာဏ်လင်းအောင်', grades: ['B+', 'B', 'B+', 'B+', 'A', 'A-', 'B+', 'A-'] },
  { no: 19, rollNo: '2GIT-20', name: 'မစိမ်းလဲ့စိုး', grades: ['B+', 'A', 'B+', 'A-', 'A-', 'A-', 'B+', 'A-'] },
  { no: 20, rollNo: '2GIT-26', name: 'မောင်ကျော်ဝဏ္ဏ', grades: ['A-', 'B+', 'A-', 'A-', 'B+', 'B+', 'B', 'B+'] },
  { no: 21, rollNo: '2GIT-27', name: 'မောင်နေသွင်ထူး', grades: ['A-', 'B-', 'D', 'B+', 'B', 'A-', 'B', 'B+'] },
  { no: 22, rollNo: '2GIT-28', name: 'မယုမြတ်မွန်', grades: ['C', 'A-', 'B', 'B+', 'B+', 'B', 'B', 'B+'] },
  { no: 23, rollNo: '2GIT-31', name: 'မောင်ဝေဘုန်းလင်း', grades: ['B+', 'D', 'B-', 'B', 'B', 'B-', 'B-', 'B'] },
  { no: 24, rollNo: '2GIT-11', name: 'မောင်ဇင်လင်းထွဋ်', grades: ['A-', 'B+', 'Inc', 'A-', 'B+', 'B+', 'A-', 'A-'] },
  { no: 25, rollNo: '2GIT-21', name: 'မောင်မင်းပြည့်စုံ', grades: ['B+', 'B+', 'B-', 'B+', 'B+', 'B+', 'Inc', 'B+'] },
  { no: 26, rollNo: '2GIT-22', name: 'မအေးသီရိနိုင်', grades: ['B+', 'B+', 'A-', 'B+', 'B+', 'B+', 'Inc', 'B+'] },
  { no: 27, rollNo: '2GIT-25', name: 'မောင်ကျော်ဇင်သိန်း', grades: ['B', 'D', 'Inc', 'B+', 'B+', 'B+', 'B', 'B+'] },
  { no: 28, rollNo: '2GIT-30', name: 'မစုစုဝတီ', grades: ['B+', 'B-', 'Inc', 'B+', 'B+', 'B', 'B+', 'A-'] },
  { no: 29, rollNo: '2GIT-32', name: 'မောင်ကျော်မျိုးသစ်', grades: ['C', 'D', 'Inc', 'B+', 'B', 'B-', 'B+', 'B'] },
  { no: 30, rollNo: '2GIT-33(R)', name: 'မောင်သူရထွန်း', grades: ['B', 'D', 'Inc', 'B', 'B', 'B', 'B', 'B+'] },
];

// -----------------------------------------------------------------------------
// // Utility function to determine overall pass, re-exam, or fail status (D is now Pass)
// -----------------------------------------------------------------------------
const calculateResult = (grades: string[]): { status: string; incCount: number } => {
  // Only 'Inc' counts as an unpassed/incomplete condition requiring re-exam
  const incCount = grades.filter(g => g === 'Inc').length;

  if (incCount === 0) {
    return { status: 'Pass', incCount };
  } else if (incCount > 4) {
    return { status: 'Fail', incCount };
  } else {
    return { status: 'Re-exam', incCount };
  }
};

export function ItYear2({ onBack }: ItYear2Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<StudentResult[]>(initialStudentResults);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingRollNo, setEditingRollNo] = useState<string | null>(null);
  const [tempGrades, setTempGrades] = useState<string[]>([]);

  const filteredStudents = students.filter((student) => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStartEdit = (student: StudentResult) => {
    setEditingRollNo(student.rollNo);
    setTempGrades([...student.grades]);
  };

  const handleGradeChange = (index: number, value: string) => {
    const updated = [...tempGrades];
    updated[index] = value;
    setTempGrades(updated);
  };

  const handleSaveEdit = (rollNo: string) => {
    setStudents(prev => 
      prev.map(st => st.rollNo === rollNo ? { ...st, grades: tempGrades } : st)
    );
    setEditingRollNo(null);
  };

  return (
    <div className="results-wrapper">
      <div className="results-container" style={{ maxWidth: '100%', padding: '2rem 3rem' }}>
        
        {/* Top Bar */}
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
          <h2>Information Technology - Second Year Results</h2>
          <p>Detailed subject grades and performance records for Year 2.</p>
        </div>

        {/* Table Container with Responsive View */}
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
              {isAdmin ? '⚠️ Admin Mode Active: Grades and Fix options are visible.' : '👁️ Client View: Action buttons are hidden.'}
            </span>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '900px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px' }}>No</th>
                <th style={{ padding: '12px' }}>Roll No</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px' }}>Technical English</th>
                <th style={{ padding: '12px' }}>Laws and Guidelines related to Technology</th>
                <th style={{ padding: '12px' }}>Applied Mathematics III</th>
                <th style={{ padding: '12px' }}>Introduction to ICT</th>
                <th style={{ padding: '12px' }}>Web Design I</th>
                <th style={{ padding: '12px' }}>Fundamentals of Computer Networking</th>
                <th style={{ padding: '12px' }}>Database Management System</th>
                <th style={{ padding: '12px' }}>Principles of Data Structure Using C</th>
                <th style={{ padding: '12px' }}>Result</th>
                {isAdmin && <th style={{ padding: '12px' }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const isEditing = editingRollNo === student.rollNo;
                  const currentGradesToEvaluate = isEditing ? tempGrades : student.grades;
                  const { status } = calculateResult(currentGradesToEvaluate);

                  return (
                    <tr key={student.rollNo} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.9rem' }}>
                      <td style={{ padding: '12px' }}>{student.no}</td>
                      <td style={{ padding: '12px', fontWeight: '600' }}>{student.rollNo}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: '500' }}>{student.name}</td>
                      
                      {student.grades.map((grade, idx) => {
                        const activeGrade = isEditing ? tempGrades[idx] : grade;

                        return (
                          <td key={idx} style={{ padding: '12px 4px' }}>
                            {isAdmin && isEditing ? (
                              <input 
                                type="text" 
                                value={activeGrade} 
                                onChange={(e) => handleGradeChange(idx, e.target.value)}
                                style={{
                                  width: '50px',
                                  padding: '4px',
                                  textAlign: 'center',
                                  border: '1px solid #3b82f6',
                                  borderRadius: '4px',
                                  fontSize: '0.85rem',
                                  outline: 'none'
                                }}
                              />
                            ) : (
                              <span style={{ 
                                fontWeight: activeGrade === 'Inc' || activeGrade === 'D' ? '700' : '600', 
                                color: activeGrade === 'Inc' ? '#dc2626' : activeGrade === 'D' ? '#ea580c' : '#1e293b' 
                              }}>
                                {activeGrade}
                              </span>
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
                              Fix Grades
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 14 : 13} style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>
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

export default ItYear2;