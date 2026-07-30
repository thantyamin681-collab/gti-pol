import { useState, useEffect } from 'react';
import './index.css';
import { ChevronLeft, Menu, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { departments } from './data/departmentsData';
import { coursesData } from './data/courseData';
import logoImg from './assets/logo.jpg';

export default function App({ onNavigate }: { onNavigate?: (view: any) => void }) {
  const [selectedDept, setSelectedDept] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

  const navLinks = [
    { name: 'Home', href: '/', view: 'home' },
    { name: 'Department', href: '/department', view: 'department' },
    { name: 'Result', href: '/result', view: 'result' },
    { name: 'Activities', href: '/activities', view: 'activities' },
    { name: 'Latest News', href: '/latest-news', view: 'news' },
    { name: 'School Info', href: '/school-info', view: 'schoolinfo' },
  ];

  const handleNavClick = (viewName: string) => {
    setIsMobileMenuOpen(false);
    if (viewName === 'home') {
      if (onNavigate) onNavigate('home');
    } else if (onNavigate) {
      onNavigate(viewName);
    }
  };

  const renderNavbar = () => (
    <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={logoImg} alt="GTI Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-wide leading-tight text-white">
                GTI (Pyin Oo Lwin)
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-light">
                Government Technical Institute
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view)}
                className={`text-base font-semibold transition-colors duration-200 cursor-pointer ${
                  link.view === 'department' ? 'text-[#64ffda]' : 'text-slate-200 hover:text-[#64ffda]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view)}
              className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  if (coursesView) {
    const currentCourses = selectedDept !== null ? coursesData[selectedDept] : [];

    return (
      <div className="min-h-screen bg-white">
        {renderNavbar()}
        <div className="p-6">
          <header className="mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={backFromCourses}
                className="flex items-center gap-2 text-base font-semibold text-gray-700 hover:text-black transition cursor-pointer"
                aria-label="Back"
              >
                <ChevronLeft size={22} /> Back
              </button>
              <button onClick={closeCourses} className="text-sm text-gray-600 hover:underline cursor-pointer">
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
                  {currentCourses?.map((y: any) => (
                    <button
                      key={y.yearNumber}
                      onClick={() => openCoursesSemesters(y.yearNumber)}
                      className="flex flex-col items-center gap-3 focus:outline-none cursor-pointer"
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
                  {currentCourses?.find((d: any) => d.yearNumber === coursesView.yearNumber)?.yearLabel}
                </h1>
                <p className="mb-6 text-gray-700">Choose a Semester</p>

                <div className="flex gap-6 justify-center">
                  {currentCourses
                    ?.find((d: any) => d.yearNumber === coursesView.yearNumber)
                    ?.semesters?.map((s: any) => (
                      <button
                        key={s.id}
                        onClick={() => openCoursesSemesterDetail(coursesView.yearNumber, s.id)}
                        className="flex flex-col items-center gap-2 focus:outline-none cursor-pointer"
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
                  const year = currentCourses?.find((d: any) => d.yearNumber === coursesView.yearNumber);
                  const sem = year?.semesters?.find((s: any) => s.id === coursesView.semesterId);

                  if (!sem) {
                    return <div className="text-gray-600">Semester details not found.</div>;
                  }

                  return (
                    <>
                      <h1 className="text-2xl font-extrabold text-blue-900 mb-4">
                        {year?.yearLabel} — {sem.label}
                      </h1>

                      {sem.content ? (
                        <div className="space-y-6 text-left">
                          <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Majors</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {sem.content.majors?.map((mj: any, idx: number) => (
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
                              {sem.content.minors?.map((m: any, idx: number) => (
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
      </div>
    );
  }

  if (selectedDept !== null) {
    const dept = departments[selectedDept];

    return (
      <div className="min-h-screen bg-white">
        {renderNavbar()}
        <div className="p-6 max-w-2xl mx-auto">
          <header className="mb-8">
            <button
              onClick={() => setSelectedDept(null)}
              className="flex items-center gap-2 text-base font-semibold text-gray-700 hover:text-black transition cursor-pointer"
            >
              <ChevronLeft size={22} /> Back
            </button>
          </header>

          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">{dept.name}</h1>

          <div className="space-y-6">
            {dept.content.map((block: any, i: number) => {
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
                        {sources.map((s: any, idx: number) => (
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
                      p: ({ node, ...props }: any) => <p className="text-base md:text-lg text-gray-800 leading-relaxed" {...props} />,
                      h1: ({ node, ...props }: any) => <h1 className="text-2xl font-bold text-blue-900" {...props} />,
                      h2: ({ node, ...props }: any) => <h2 className="text-xl font-semibold text-blue-800" {...props} />,
                      ul: ({ node, ...props }: any) => <ul className="list-disc ml-6 space-y-1" {...props} />,
                      li: ({ node, ...props }: any) => <li className="text-base md:text-lg text-gray-800" {...props} />,
                      strong: ({ node, ...props }: any) => <strong className="font-semibold" {...props} />,
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

            {selectedDept !== null && selectedDept < 7 && (
              <div>
                <button
                  onClick={openCoursesYears}
                  className="mt-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-left w-full max-w-md flex items-center gap-4 border border-gray-100 cursor-pointer"
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
                className="absolute top-3 right-3 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 cursor-pointer"
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

  return (
    <div className="min-h-screen bg-white">
      {renderNavbar()}
      
      <div className="p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Departments</h1>

        <div className="max-w-6xl mx-auto mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {departments.map((dept: any, index: number) => (
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
    </div>
  );
}