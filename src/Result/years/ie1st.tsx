import { useState } from 'react';
import '../result.css';

interface IeYear1Props {
  onBack: () => void;
}

interface StudentResult {
  no: number;
  rollNo: string;
  name: string;
  marks: number[];
}

const initialStudentResults: StudentResult[] = [
  { no: 1, rollNo: 'IE-01', name: 'Thura', marks: [80, 82, 85, 88, 79, 81, 84, 87] },
];

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

const calculateResult = (marks: number[]): { status: string; incCount: number } => {
  const incCount = marks.filter(m => m < 40).length;
  if (incCount === 0) return { status: 'Pass', incCount };
  if (incCount > 4) return { status: 'Fail', incCount };
  return { status: 'Re-exam', incCount };
};

export function IeYear1({ onBack }: IeYear1Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<StudentResult[]>(initialStudentResults);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingRollNo, setEditingRollNo] = useState<string | null>(null);
  const [tempMarks, setTempMarks] = useState<number[]>([]);

  const filteredStudents = students.filter((s) => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="results-wrapper">
      <div className="results-container" style={{ maxWidth: '100%', padding: '2rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={onBack} style={{ padding: '0.6rem 1.2rem', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', color: '#1e293b' }}>← Back to Years</button>
            <button onClick={() => setIsAdmin(!isAdmin)} style={{ padding: '0.6rem 1rem', backgroundColor: isAdmin ? '#dc2626' : '#475569', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem' }}>{isAdmin ? '🔒 Exit Admin Mode' : '🔑 Admin Login (Test)'}</button>
          </div>
          <div style={{ position: 'relative', width: '280px' }}>
            <input type="text" placeholder="Search by Roll No or Name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.2rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#ffffff' }} />
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
          </div>
        </div>

        <div className="results-header">
          <h2>Information Engineering (IE) - First Year Results</h2>
          <p>Detailed subject grades and performance records.</p>
        </div>

        <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '900px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px' }}>No</th>
                <th style={{ padding: '12px' }}>Roll No</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                {[1,2,3,4,5,6,7,8].map(i => <th key={i} style={{ padding: '12px' }}>Sub {i}</th>)}
                <th style={{ padding: '12px' }}>Result</th>
                {isAdmin && <th style={{ padding: '12px' }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => {
                const isEditing = editingRollNo === student.rollNo;
                const currentMarks = isEditing ? tempMarks : student.marks;
                const { status } = calculateResult(currentMarks);

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
                            <input type="number" value={activeMark} onChange={(e) => {
                              const val = parseInt(e.target.value) || 0;
                              const updated = [...tempMarks];
                              updated[idx] = val > 100 ? 100 : val < 0 ? 0 : val;
                              setTempMarks(updated);
                            }} style={{ width: '45px', textAlign: 'center' }} />
                          ) : (
                            <div>
                              <span style={{ fontWeight: grade === 'Inc' ? '700' : '600', color: grade === 'Inc' ? '#dc2626' : '#1e293b' }}>{grade}</span>
                              {isAdmin && <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>({mark})</div>}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td style={{ padding: '12px' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: status === 'Pass' ? '#dcfce7' : status === 'Re-exam' ? '#fef9c3' : '#fee2e2', color: status === 'Pass' ? '#15803d' : status === 'Re-exam' ? '#ca8a04' : '#b91c1c' }}>
                        {status}
                      </span>
                    </td>
                    {isAdmin && (
                      <td style={{ padding: '12px' }}>
                        {isEditing ? (
                          <button onClick={() => { setStudents(prev => prev.map(s => s.rollNo === student.rollNo ? { ...s, marks: tempMarks } : s)); setEditingRollNo(null); }} style={{ padding: '4px 10px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                        ) : (
                          <button onClick={() => { setEditingRollNo(student.rollNo); setTempMarks([...student.marks]); }} style={{ padding: '4px 10px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Fix Marks</button>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="results-footer"><p>© 2026 Departmental Results Portal. All rights reserved.</p></footer>
    </div>
  );
}

export default IeYear1;
