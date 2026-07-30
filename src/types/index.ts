export type ContentBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string | string[]; alt?: string; caption?: string } // <-- allow array
  | { type: 'markdown'; markdown: string };

export type Department = {
  name: string;
  image: string; // thumbnail for grid
  logo?: string
  content: ContentBlock[]; // rich content for detail page
};
export type CourseSubject = {
  title: string;
  subtitle: string;
  description: string;
};
export type SemesterContent = {
  major: CourseSubject;
  minors: CourseSubject[];
};
export type CoursesView =
   | { page: 'years' }
   | { page: 'semesters'; yearNumber: number }
   | { page: 'semesterDetail'; yearNumber: number; semesterId: number };
