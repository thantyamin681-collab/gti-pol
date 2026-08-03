import { useState, useEffect } from 'react';
import { 
  Calendar, 
  ChevronRight, 
  ArrowLeft,
  Clock,
  MapPin,
  Menu,
  X,
  Image as ImageIcon
} from 'lucide-react';
import logoImg from '../assets/logo.jpg';

//welcome
import welcome2 from '../assets/welcome2.jpg';
import welcome3 from '../assets/welcome3.jpg';
import welcome4 from '../assets/welcome4.jpg';
import welcome5 from '../assets/welcome5.jpg';
import welcome6 from '../assets/welcome6.jpg';
import welcome7 from '../assets/welcome7.jpg';

//htamane festival images
import htamaneImg1 from '../assets/htamane1.jpg';
import htamaneImg3 from '../assets/htamane3.jpg';
import htamaneImg4 from '../assets/htamane4.jpg';
import htamaneImg5 from '../assets/htamane5.jpg';
import htamaneImg2 from '../assets/htamane2.jpg';

//fusal
import fusal from '../assets/fusal.jpg'
import fusal1 from '../assets/fusal1.jpg'


//thingyan
import thingyan from '../assets/thingyan.jpg';
import thingyan1 from '../assets/thingyan1.jpg';
import thingyan2 from '../assets/thingyan2.jpg';

//major inductory 
import induct2 from '../assets/induct2.jpg';
import induct3 from '../assets/induct3.jpg';
import induct4 from '../assets/induct4.jpg';
import induct5 from '../assets/induct5.jpg';
import induct6 from '../assets/induct6.jpg';
import induct7 from '../assets/induct7.jpg';
import induct8 from '../assets/induct8.jpg';
import induct9 from '../assets/induct9.jpg';
import induct10 from '../assets/induct10.jpg';
import induct11 from '../assets/induct11.jpg';

//monson competition images
import monsonImg1 from '../assets/monson1.jpg';
import monsonImg2 from '../assets/monson2.jpg';
import monsonImg3 from '../assets/monson3.jpg';
import monsonImg4 from '../assets/monson4.jpg';
import monsonImg5 from '../assets/monson5.jpg';
import monsonImg6 from '../assets/monson6.jpg';

//bridge
import bridge from '../assets/other.jpg';
import bridge1 from '../assets/other1.jpg';
// import bridge2 from '../assets/other2.mp4';

//homage ceremony images
import homageImg1 from '../assets/homage1.jpg';
import homageImg2 from '../assets/homage2.jpg';
import homageImg3 from '../assets/homage3.jpg';
import homageImg4 from '../assets/homage4.jpg';

type NavTarget = 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info'| 'department';

interface NavLink {
  name: string;
  target: NavTarget;
}

interface ActivityItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  images: string[];
}

const activitiesList: ActivityItem[] = [
  {
    id: '1',
    title: 'Annual Fresher Welcome Ceremony',
    date: 'hold on every 1st semester of the academic year',
    time: '8:00 AM - 4:00 PM',
    location: 'Main Building Field, GTI Campus',
    description: 'Showcasing innovative student projects across Civil, Electrical, Mechanical, and IT departments with guest industry speakers, panel discussions, and project exhibitions.',
    category: 'Welcome Event',
    images: [
     welcome2,
     welcome3,
     welcome4,
     welcome5,
     welcome6,
     welcome7,
    ]
  },
  {
    id: '2',
    title: 'Htamane (ထမနဲ) Festival',
    date: 'every 1st semester of the academic year after the Fresher Welcome Ceremony',
    time: '9:00 AM - 2:00 PM',
    location: 'GTI Campus Field',
    description: 'Traditional Myanmar sticky rice making festival bringing together students and teachers across departments for team-building, cooking, and cultural unity.',
    category: 'Festival',
    images: [
      htamaneImg1,
      htamaneImg2,
      htamaneImg3,
      htamaneImg4,
      htamaneImg5,
    ]
  },
  {
    id: '3',
    title: 'Interdepartmental Friendly Futsal Tournament',
    date: 'every 1st semester of the academic year',
    time: 'depends on the events',
    location: 'Off-campus Futsal court',
    description: 'Competitive and friendly sports competition between Civil, Electrical, Mechanical, and IT engineering departments promoting sportsmanship and health.',
    category: 'Friendly Futsal Tournament',
    images: [
      fusal,
     fusal1,
    ]
  },
  {
    id: '4',
    title: 'Major Introductory Workshop',
    date: 'every 1st week of the 1st semester of the academic year',
    time: '8:00 AM - 11:00 AM',
    location: 'GTI Main Hall',
    description: 'Orientation session for incoming students providing detailed roadmaps, curriculum overview, and career paths for Civil, Electrical, Mechanical, and IT majors.',
    category: 'Majors Introductory',
    images: [
      induct2,
      induct3,
      induct4,
      induct5,
      induct6,
      induct7,
      induct8,
      induct9,
      induct10,
      induct11,
    ]
  },
  {
    id: '5',
    title: 'Major Thingyan (မေဂျာသင်္ကြန်) Festival',
    date: 'every end of the 1st semester of the academic year',
    time: '10:00 AM - 2:00 PM',
    location: 'IT Lab 2',
    description: 'Hands-on training session focusing on microcontrollers, IoT automation workflows, and modern web software development practices for aspiring engineers.',
    category: 'Thingyan Festival',
    images: [
     thingyan,
     thingyan1,
     thingyan2,
    ]
  },
  {
    id: '6',
    title: 'Other Community & Environmental Awareness Program',
    date: 'based on the academic calendar and student union schedule',
    time: 'varies depending on the event',
    location: 'GTI Campus and surrounding community areas',
    description: 'Community service initiative led by the student union to promote environmental sustainability, green campus goals, and ecological awareness.',
    category: 'Bridge programs',
    images: [
      bridge,
      bridge1,
      // bridge2
    ]
  },
  {
    id: '7',
    title: 'Annual Monsoon Competition ',
    date: 'highlight of the 2nd semester of the academic year',
    time: 'based on the competition schedule',
    location: 'GTI campus and State Hall',
    description: 'Hands-on training session focusing on microcontrollers, IoT automation workflows, and modern web software development practices for aspiring engineers.',
    category: 'Monsoon Competition',
    images: [
      monsonImg1,
      monsonImg2,   
      monsonImg3,
      monsonImg4,
      monsonImg5,
      monsonImg6,
    ]
  },
  {
    id: '8',
    title: `Compound Farewell & Teacher's Homage Ceremony`,
    date: 'End of 2nd semester of the academic year',
    time: '8:00 AM - 11:00 AM',
    location: 'GTI Shrine Room',
    description: 'Community service initiative led by the student union to promote environmental sustainability, green campus goals, and ecological awareness.',
    category: `Teacher's Homage Ceremony`,
    images: [
      homageImg1,
      homageImg2,
      homageImg3,
      homageImg4,
    ]
  },
];

interface ActivityProps {
  onBackToHome?: () => void;
  onNavigate?: (view: NavTarget) => void;
  currentView?: NavTarget;
}

export function Activity({ onBackToHome, onNavigate }: ActivityProps) {
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentBgIndex, setCurrentBgIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % activitiesList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Reset selected image index when switching activities
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedActivityId]);

  const navLinks: NavLink[] = [
    { name: 'Home', target: 'home' },
    { name: 'Department', target: 'department' },
    { name: 'Result', target: 'result' },
    { name: 'Activities', target: 'activity' },
    { name: 'Latest News', target: 'latest-news' },
    { name: 'School Info', target: 'school-info' },
  ];

  const handleNavClick = (target: NavTarget) => {
    setSelectedActivityId(null);
    if (target === 'home') {
      if (onBackToHome) {
        onBackToHome();
      } else {
        onNavigate?.('home');
      }
    } else {
      onNavigate?.(target);
    }
  };

  const selectedActivity = activitiesList.find(item => item.id === selectedActivityId);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f0f4f8] overflow-x-hidden m-0 p-0">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-md w-full">
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-between h-20 w-full">
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

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.target)}
                  className="text-base font-semibold text-slate-200 hover:text-[#64ffda] transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#071325] border-t border-slate-800 px-4 pt-2 pb-4 space-y-2 w-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(link.target);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium text-slate-200 hover:text-[#64ffda] hover:bg-slate-800 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full m-0 p-0">
        {selectedActivityId && selectedActivity ? (
          /* DETAIL VIEW WITH PHOTO GALLERY */
          <div className="flex-1 flex flex-col px-4 sm:px-8 py-8 max-w-275 mx-auto w-full">
            <div className="flex items-center justify-between mb-6 w-full">
              <button
                type="button"
                onClick={() => setSelectedActivityId(null)}
                className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-[#0a192f] font-bold hover:text-blue-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#64ffda]" />
                <span>Back to Activities</span>
              </button>
              <span className="text-slate-500 text-sm hidden sm:inline">GTI Activity Details</span>
            </div>

            <div className="bg-[#0a192f] text-white p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl w-full box-border">
              
              {/* Featured Image / Video Viewer */}
              <div className="relative w-full h-[260px] sm:h-[400px] rounded-xl overflow-hidden mb-6 shadow-2xl">
                {selectedActivity.images[activeImageIndex]?.endsWith('.mp4') ? (
                  <video 
                    src={selectedActivity.images[activeImageIndex]} 
                    className="w-full h-full object-cover transition-all duration-500"
                    controls
                    playsInline
                    muted
                  />
                ) : (
                  <img 
                    src={selectedActivity.images[activeImageIndex] || selectedActivity.images[0]} 
                    alt={selectedActivity.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                )}
              </div>

              {/* Category tag & Header */}
              <span className="inline-block bg-[#1e3a8a] text-[#64ffda] text-xs sm:text-sm font-semibold px-3 py-1 rounded-md mb-3">
                {selectedActivity.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedActivity.title}
              </h2>

              <div className="flex flex-col gap-3 text-slate-400 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#64ffda] shrink-0" />
                  <span>{selectedActivity.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#64ffda] shrink-0" />
                  <span>{selectedActivity.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#64ffda] shrink-0" />
                  <span>{selectedActivity.location}</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg border-t border-slate-800 pt-6">
                {selectedActivity.description}
              </p>

              {/* 📸 GALLERY SECTION: Show all photos/videos here */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-5 h-5 text-[#64ffda]" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Event Gallery ({selectedActivity.images.length})
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedActivity.images.map((imgUrl, index) => (
                    <div 
                      key={index} 
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 h-48 group ${
                        activeImageIndex === index ? 'border-[#64ffda] ring-2 ring-[#64ffda]/40' : 'border-slate-800 hover:border-slate-500'
                      }`}
                    >
                      {imgUrl.endsWith('.mp4') ? (
                        <video 
                          src={imgUrl} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          muted
                          playsInline
                        />
                      ) : (
                        <img 
                          src={imgUrl} 
                          alt={`${selectedActivity.title} photo ${index + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* LIST VIEW */
          <>
            <header className="relative py-12 sm:py-20 px-4 sm:px-8 text-center text-white mb-8 w-full box-border overflow-hidden min-h-[300px] flex flex-col justify-center items-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${activitiesList[currentBgIndex].images[0]})` }}
              />
              <div className="absolute inset-0 bg-black/60 z-10" />

              <div className="max-w-200 mx-auto w-full relative z-20 flex flex-col items-center">
                <div className="inline-flex p-3 sm:p-4 bg-white/10 rounded-full mb-4 backdrop-blur-md">
                  <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-[#64ffda]" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">
                  Campus Activities
                </h2>
                <p className="text-slate-200 text-sm sm:text-lg max-w-xl drop-shadow-sm px-2">
                  Explore upcoming events, workshops, sports, and technical community programs at GTI (Pyin Oo Lwin).
                </p>

                <div className="flex justify-center gap-2 mt-6">
                  {activitiesList.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBgIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                        index === currentBgIndex ? 'w-6 bg-[#64ffda]' : 'w-2 bg-slate-400/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </header>

            <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-8 pb-16 box-border">
              <div className="flex flex-col gap-6 w-full">
                {activitiesList.map((activity, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={activity.id}
                      onClick={() => setSelectedActivityId(activity.id)}
                      className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[#0a192f] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden md:overflow-visible my-2 w-full`}
                    >
                      {/* Responsive Image/Video Collage */}
                      <div className="w-full md:w-[220px] shrink-0 relative p-4 md:p-0 min-h-[200px] md:min-h-auto flex justify-center items-center">
                        <div className={`relative md:absolute md:top-1/2 md:-translate-y-1/2 ${isEven ? 'md:-left-4' : 'md:-right-4'} w-full max-w-[280px] md:w-[175px] h-[160px] md:h-[130px] rounded-xl overflow-hidden shadow-2xl bg-[#0a192f] border-2 sm:border-3 border-white z-20 group-hover:scale-105 transition-transform duration-300`}>
                          {activity.images[0]?.endsWith('.mp4') ? (
                            <video src={activity.images[0]} className="w-full h-full object-cover" muted playsInline />
                          ) : (
                            <img src={activity.images[0]} alt={activity.title} className="w-full h-full object-cover" />
                          )}
                        </div>

                        <div className={`hidden lg:block absolute top-[12%] ${isEven ? 'left-[65px]' : '-right-[55px]'} w-[110px] h-[80px] rounded-lg overflow-hidden shadow-xl bg-[#0a192f] border-2 border-white z-10 transition-all duration-400 group-hover:-translate-y-3 group-hover:scale-110 group-hover:-rotate-6`}>
                          {activity.images[1]?.endsWith('.mp4') ? (
                            <video src={activity.images[1]} className="w-full h-full object-cover" muted playsInline />
                          ) : (
                            <img src={activity.images[1]} alt="Activity preview" className="w-full h-full object-cover" />
                          )}
                        </div>

                        <div className={`hidden lg:block absolute bottom-[8%] ${isEven ? 'left-[55px]' : '-right-[45px]'} w-[100px] h-[75px] rounded-lg overflow-hidden shadow-xl bg-[#0a192f] border-2 border-white z-30 transition-all duration-400 group-hover:translate-y-3 group-hover:scale-110 group-hover:rotate-6`}>
                          {activity.images[2]?.endsWith('.mp4') ? (
                            <video src={activity.images[2]} className="w-full h-full object-cover" muted playsInline />
                          ) : (
                            <img src={activity.images[2]} alt="Activity preview" className="w-full h-full object-cover" />
                          )}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className="text-xs font-semibold text-[#64ffda] bg-[#1e3a8a] px-3 py-1 rounded-md">
                              {activity.category}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              {activity.date}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#64ffda] transition-colors">
                            {activity.title}
                          </h3>

                          <p className="text-sm sm:text-base text-slate-300 line-clamp-2 leading-relaxed">
                            {activity.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                          <span className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 truncate max-w-[70%]">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">{activity.location}</span>
                          </span>
                          <div className="flex items-center gap-1 text-[#64ffda] font-semibold text-sm shrink-0">
                            <span>View Details</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-slate-400 py-6 px-4 text-center mt-auto w-full box-border border-t border-slate-800">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} Government Technical Institute (Pyin Oo Lwin). All rights reserved.</p>
        <p className="text-xs text-slate-500 mt-1">Designed for Campus Life & Student Engagement</p>
      </footer>

    </div>
  );
}

export default Activity;