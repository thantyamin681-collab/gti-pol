import { useState, useEffect } from 'react';
import './index.css';
import { ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { departments } from './data/departmentsData';
import { coursesData } from './data/courseData';

export default function App() {
  const [selectedDept, setSelectedDept] = useState<number | null>(null);

  // Lightbox state (unchanged)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxSrc]);

  function openLightbox(src: string | undefined, alt?: string) {
    if (!src) return;
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }
  function closeLightbox() {
    setLightboxSrc(null);
    setLightboxAlt(undefined);
  }

  type CoursesView =
    | { page: 'years' }
    | { page: 'semesters'; yearNumber: number }
    | { page: 'semesterDetail'; yearNumber: number; semesterId: number };

  // Courses view state
  const [coursesView, setCoursesView] = useState<CoursesView | null>(null);

  function openCoursesYears() {
    setCoursesView({ page: 'years' });
  }
  function openCoursesSemesters(yearNumber: number) {
    setCoursesView({ page: 'semesters', yearNumber });
  }
  function openCoursesSemesterDetail(yearNumber: number, semesterId: number) {
    setCoursesView({ page: 'semesterDetail', yearNumber, semesterId });
  }
  function closeCourses() {
    setCoursesView(null);
  }
  function backFromCourses() {
    if (!coursesView) return;
    if (coursesView.page === 'semesterDetail') {
      setCoursesView({ page: 'semesters', yearNumber: coursesView.yearNumber });
    } else if (coursesView.page === 'semesters') {
      setCoursesView({ page: 'years' });
    } else {
      setCoursesView(null);
    }
  }

  // Render courses view first so it can be opened from the department detail page
  if (coursesView) {
    return (
      <div className="min-h-screen bg-white p-6">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={backFromCourses}
              className="flex items-center gap-2 text-base font-semibold text-gray-700 hover:text-black transition"
              aria-label="Back"
            >
              <ChevronLeft size={22} /> Back
            </button>
            <button onClick={closeCourses} className="text-sm text-gray-600 hover:underline">
              Close Courses
            </button>
          </div>
        </header>

        <div className="max-w-3xl mx-auto text-center">
          {coursesView.page === 'years' && (
            <>
              <h1 className="text-3xl font-extrabold text-blue-900 mb-6">Courses</h1>
              <p className="mb-6 text-gray-700">Choose a Year</p>

              <div className="flex gap-6 justify-center">
                {coursesData[selectedDept]?.map((y) => (
                  <button
                    key={y.yearNumber}
                    onClick={() => openCoursesSemesters(y.yearNumber)}
                    className="flex flex-col items-center gap-3 focus:outline-none"
                    aria-label={y.yearLabel}
                  >
                    <div className="rounded-full w-28 h-28 bg-blue-100 flex items-center justify-center text-blue-900 font-semibold text-lg shadow-md hover:scale-105 transform transition">
                      {y.yearLabel.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-700">{y.yearLabel}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {coursesView.page === 'semesters' && (
            <>
              <h1 className="text-2xl font-extrabold text-blue-900 mb-4">
             {coursesData[selectedDept]?.find((d) => d.yearNumber === coursesView.yearNumber)?.yearLabel}
              </h1>
              <p className="mb-6 text-gray-700">Choose a Semester</p>

              <div className="flex gap-6 justify-center">
                {coursesData[selectedDept]?.find((d) => d.yearNumber === coursesView.yearNumber)
                  ?.semesters.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => openCoursesSemesterDetail(coursesView.yearNumber, s.id)}
                      className="flex flex-col items-center gap-2 focus:outline-none"
                      aria-label={s.label}
                    >
                      <div className="rounded-full w-20 h-20 bg-green-100 flex items-center justify-center text-green-900 font-medium text-sm shadow-sm hover:scale-105 transform transition">
                        {s.label.split(' ')[0]}
                      </div>
                      <div className="text-sm text-gray-700">{s.label}</div>
                    </button>
                  )) || null}
              </div>
            </>
          )}

          {coursesView.page === 'semesterDetail' && (
            <>
              {(() => {
                const year = coursesData[selectedDept]?.find((d) => d.yearNumber === coursesView.yearNumber);
                const sem = year.semesters.find((s) => s.id === coursesView.semesterId)!;
                return (
                  <>
                    <h1 className="text-2xl font-extrabold text-blue-900 mb-4">
                      {year.yearLabel} — {sem.label}
                    </h1>

                    {sem.content ? (
                      <div className="space-y-6 text-left">
                        <section>
                          <h2 className="text-xl font-semibold text-gray-800 mb-3">Majors</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sem.content.majors.map((mj, idx) => (
                              <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
                                <div className="text-lg font-semibold">{mj.title}</div>
                                {mj.subtitle && <div className="text-sm text-gray-600 mb-2">{mj.subtitle}</div>}
                                <div className="text-gray-700">{mj.description}</div>
                              </div>
                            ))}
                          </div>
                        </section>

                        <section>
                          <h2 className="text-xl font-semibold text-gray-800 mb-3">Minors</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sem.content.minors.map((m, idx) => (
                              <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
                                <div className="text-md font-semibold">{m.title}</div>
                                {m.subtitle && <div className="text-sm text-gray-600 mb-1">{m.subtitle}</div>}
                                <div className="text-gray-700">{m.description}</div>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>
                    ) : (
                      <div className="text-gray-600">Content for this semester is not yet available.</div>
                    )}
                  </>
                );
              })()}
            </>
          )}
        </div>
      </div>
    );
  }

  // Detail view when a department is selected
  if (selectedDept !== null) {
    const dept = departments[selectedDept];

    return (
      <div className="min-h-screen bg-white p-6">
        <header className="mb-8">
          <button
            onClick={() => setSelectedDept(null)}
            className="flex items-center gap-2 text-base font-semibold text-gray-700 hover:text-black transition"
          >
            <ChevronLeft size={22} /> Back
          </button>
        </header>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">{dept.name}</h1>

          <div className="space-y-6">
            {dept.content.map((block, i) => {
              if (block.type === 'text') {
                return (
                  <div key={i} className="text-base md:text-lg text-gray-800 leading-relaxed">
                    {block.text}
                  </div>
                );
              }

              if (block.type === 'image') {
                const sources = Array.isArray(block.src) ? block.src : [block.src];

                if (sources.length > 1) {
                  return (
                    <figure key={i} className="mx-auto text-center">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {sources.map((s, idx) => (
                          <img
                            key={idx}
                            src={s}
                            alt={block.alt ?? dept.name}
                            className="w-full h-28 object-cover rounded-md shadow-sm cursor-zoom-in"
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => openLightbox(s as string, block.alt ?? dept.name)}
                          />
                        ))}
                      </div>
                      {block.caption && <figcaption className="mt-2 text-sm text-gray-600">{block.caption}</figcaption>}
                    </figure>
                  );
                }

                return (
                  <figure key={i} className="mx-auto text-center">
                    <img
                      src={sources[0]}
                      alt={block.alt ?? dept.name}
                      className="w-full max-w-md h-auto object-cover rounded-lg shadow-sm cursor-zoom-in"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => openLightbox(sources[0] as string, block.alt ?? dept.name)}
                    />
                    {block.caption && <figcaption className="mt-2 text-sm text-gray-600">{block.caption}</figcaption>}
                  </figure>
                );
              }

              return (
                <div key={i} className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => <p className="text-base md:text-lg text-gray-800 leading-relaxed" {...props} />,
                      h1: ({ ...props }) => <h1 className="text-2xl font-bold text-blue-900" {...props} />,
                      h2: ({ ...props }) => <h2 className="text-xl font-semibold text-blue-800" {...props} />,
                      ul: ({ ...props }) => <ul className="list-disc ml-6 space-y-1" {...props} />,
                      li: ({ ...props }) => <li className="text-base md:text-lg text-gray-800" {...props} />,
                      strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
                      img: ({ node, ...props }: any) => (
                        <img
                          {...props}
                          draggable={false}
                          onDragStart={(e) => e.preventDefault()}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => openLightbox(props.src as string, props.alt ?? dept.name)}
                          className={`${props.className ?? ''} cursor-zoom-in`}
                        />
                      ),
                    }}
                  >
                    {block.markdown}
                  </ReactMarkdown>
                </div>
              );
            })}

            {/* Courses button: only show when selectedDept is not null and < 7 */}
            {selectedDept !== null && selectedDept < 7 && (
              <div>
                <button
                  onClick={openCoursesYears}
                  className="mt-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-left w-full max-w-md flex items-center gap-4 border border-gray-100"
                  aria-label="Open Courses"
                >
                  {dept.logo && (
                    <img
                      src={dept.logo}
                      alt={dept.name}
                      className="rounded-full w-12 h-12 object-cover shadow-sm flex-shrink-0"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      onMouseDown={(e) => e.preventDefault()}
                    />
                  )}
                  <div>
                    <div className="text-md font-semibold text-gray-800">Courses</div>
                    <div className="text-sm text-gray-600">Explore Years, Semesters and Subjects</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {lightboxSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={closeLightbox}
          >
            <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
              <button
                aria-label="Close"
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1"
              >
                ✕
              </button>
              <img
                src={lightboxSrc}
                alt={lightboxAlt}
                className="max-w-[90vw] max-h-[90vh] rounded-md shadow-2xl object-contain"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Home grid (Courses button removed so it only appears in the department detail page)
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Departments</h1>

      <div className="max-w-6xl mx-auto mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <button
            key={index}
            onClick={() => setSelectedDept(index)}
            className="cursor-pointer bg-white p-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-left"
            aria-label={`Open ${dept.name}`}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-32 sm:h-36 md:h-32 object-cover object-center filter brightness-95 hover:brightness-105 transition-all duration-300"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>

            <h2 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
              {dept.name}
            </h2>
          </button>
        ))}
      </div>
    </div>
  );
}