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
  { no: 1, rollNo: 'IT-Y3-01', name: 'Zin Mar', marks: [90, 88, 92, 85, 89, 91, 94, 87] },
  { no: 2, rollNo: 'IT-Y3-02', name: 'Min Min', marks: [82, 79, 85, 88, 80, 83, 81, 84] },
  { no: 3, rollNo: 'IT-Y3-03', name: 'Wai Wai', marks: [35, 52, 40, 58, 60, 45, 38, 41] },
  { no: 4, rollNo: 'IT-Y3-04', name: 'Bo Bo', marks: [25, 29, 30, 35, 48, 32, 27, 30] },
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
                <th style={{ padding: '12px' }}>Sub 1</th>
                <th style={{ padding: '12px' }}>Sub 2</th>
                <th style={{ padding: '12px' }}>Sub 3</th>
                <th style={{ padding: '12px' }}>Sub 4</th>
                <th style={{ padding: '12px' }}>Sub 5</th>
                <th style={{ padding: '12px' }}>Sub 6</th>
                <th style={{ padding: '12px' }}>Sub 7</th>
                <th style={{ padding: '12px' }}>Sub 8</th>
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
