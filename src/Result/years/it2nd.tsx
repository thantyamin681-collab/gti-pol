import { useState } from 'react';
import '../result.css';

interface ItYear2Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: number[];
}

// -----------------------------------------------------------------------------
// // Initial student data for Second Year Information Technology
// -----------------------------------------------------------------------------
const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: '2GIT-01', name: 'မအင်ကြင်းသူ', marks: [75, 99, 80, 80, 80, 80, 76, 80] },
  { no: 2, rollNo: '2GIT-02', name: 'မဝိုင်းသော်တာ', marks: [92, 94, 89, 91, 88, 90, 93, 95] },
  { no: 3, rollNo: '2GIT-03', name: 'မနှင်းယုမွန်', marks: [38, 45, 35, 55, 50, 42, 48, 36] },
  { no: 4, rollNo: '2GIT-04', name: 'မောင်ချမ်းမြေ့ဦး', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
  { no: 5, rollNo: '2GIT-05', name: 'မောင်မင်းသက်ဟန်', marks: [75, 80, 78, 82, 70, 76, 81, 79] },
  { no: 6, rollNo: '2GIT-06', name: 'မခင်သန္တာဦး', marks: [65, 68, 70, 72, 60, 66, 69, 71] },
  { no: 7, rollNo: '2GIT-07', name: 'မသူသူဝင်း', marks: [55, 58, 60, 62, 50, 56, 59, 61] },
  { no: 8, rollNo: '2GIT-08', name: 'မောင်ကျော်ဇင်ဝင်း', marks: [45, 48, 50, 52, 40, 46, 49, 51] },
  { no: 9, rollNo: '2GIT-09', name: 'မရွှန်းလဲ့ဝင်း', marks: [35, 38, 40, 42, 30, 36, 39, 41] },
  { no: 10, rollNo: '2GIT-10', name: 'မမြတ်သင်းကြူ', marks: [25, 28, 30, 32, 20, 26, 29, 31] },
  { no: 11, rollNo: '2GIT-11', name: 'မောင်မင်းထက်ခန့်ထွန်း', marks: [95, 98, 100, 92, 90, 96, 99, 97] },
  { no: 12, rollNo: '2GIT-12', name: 'မောင်သော်ဒီမောင်', marks: [85, 88, 90, 82, 80, 86, 89, 87] },  
{ no: 13, rollNo: '2GIT-13', name: 'မောင်ချစ်လင်းကို', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 14, rollNo: '2GIT-14', name: 'မသူဇာဝင်း', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 15, rollNo: '2GIT-15', name: 'မောင်စိုးမင်းအောင်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 16, rollNo: '2GIT-16', name: 'မဖြိုးသီရိကျော်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 17, rollNo: '2GIT-17', name: 'မအိပွင့်ဖြူ', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 18, rollNo: '2GIT-18', name: 'မောင်ဉာဏ်လင်းအောင်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 19, rollNo: '2GIT-19', name: 'မစိမ်းလဲ့စိုး', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 20, rollNo: '2GIT-20', name: 'မောင်ကျော်ဝဏ္ဏ', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 21, rollNo: '2GIT-21', name: 'မောင်နေသွင်ထူး', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 22, rollNo: '2GIT-22', name: 'မယုမြတ်မွန်', marks: [28, 30, 25, 32, 45, 40, 29,90]},
{ no: 23, rollNo: '2GIT-23', name: 'မောင်ဝေဘုန်းလင်း', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 24, rollNo: '2GIT-24', name: 'မောင်ဇင်လင်းထွဋ်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 25, rollNo: '2GIT-25', name: 'မောင်မင်းပြည့်စုံ', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 26, rollNo: '2GIT-26', name: 'မအေးသီရိနိုင်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 27, rollNo: '2GIT-27', name: 'မောင်ကျော်ဇင်သိန်း', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 28, rollNo: '2GIT-28', name: 'မစုစုဝတီ', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 29, rollNo: '2GIT-29', name: 'မောင်ကျော်မျိုးသစ်', marks: [28, 30, 25, 32, 45, 40, 29, 31] },
{ no: 30, rollNo: '2GIT-30', name: 'မောင်သူရထွန်း', marks: [28, 30, 25, 32, 45, 40, 29, 31] },



];

// -----------------------------------------------------------------------------
// // Utility function to calculate letter grade based on marks
// -----------------------------------------------------------------------------
const getGrade = (mark: number): string => {
  if (mark >= 95) return 'A+';
  if (mark >= 80) return 'A';
  if (mark >= 75) return 'A-';
  if (mark >= 70) return 'B+';
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

export function ItYear2({ onBack }: ItYear2Props) {
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
          <h2>Information Technology - Second Year Results</h2>
          <p>Detailed subject grades and performance records for Year 2.</p>
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
                <th style={{ padding: '12px' }}>Technical English</th>
                <th style={{ padding: '12px' }}>Laws and Guidliness related to Technology</th>
                <th style={{ padding: '12px' }}>Applied Mathematics 3</th>
                <th style={{ padding: '12px' }}>Introduction to ICT</th>
                <th style={{ padding: '12px' }}>Web Design 1</th>
                <th style={{ padding: '12px' }}>Fundamental of Computer Networking</th>
                <th style={{ padding: '12px' }}>Database Management System</th>
                <th style={{ padding: '12px' }}>Principles of Data Structure using C</th>
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

export default ItYear2;
