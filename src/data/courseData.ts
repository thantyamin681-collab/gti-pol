
// src/data/coursesData.ts

export type CourseSubject = {
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
};

export type SemesterContent = {
  majors: CourseSubject[];
  minors: CourseSubject[];
};

export type YearData = {
  yearLabel: string;
  yearNumber: number;
  semesters: {
    id: number;
    label: string;
    content?: SemesterContent;
  }[];
};

// ဌာန (၇) ခုစာအတွက် ဤကဲ့သို့ ဌာနအလိုက် ခွဲထုတ်လိုက်ပါ
export const coursesData: Record<string, YearData[]> = {
 
 
  
    
  0: [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
             {
              title: 'Building Material & Construction 1',
               subtitle: '',
                description: 'Introduction to basic building materials, properties of construction elements, aggregates, timber, bricks, and fundamental construction techniques.'
                     },],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
              {
                
      title: 'CE-DP 1103 Surveying I',
      subtitle: '',
      description: 'Fundamentals of surveying, linear measurement, leveling, contouring, and the use of surveying instruments.'
    },
    {
      title: 'CE-DP 1102 Civil Engineering Drawing',
      subtitle: '1:00 PM to 5:00 PM',
      description: 'Principles of civil engineering drafting, structural detailing, architectural symbols, and blueprint reading.'
    },
    {
      title: 'CE-DP 1202 Building Materials & Construction II',
      subtitle: '',
      description: 'Advanced study of construction materials, concrete technology, masonry, and building construction techniques.'
    }
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

            {
      title: ' Fundamentals of Geotechnical Engineering',
      subtitle: '',
      description: 'Study of soil mechanics, soil properties, site investigation, foundation types, and earthworks.'
    },
    {
      title: ' Mechanics of Materials',
      subtitle: '',
      description: 'Study of mechanical behavior of materials under external forces, stress, strain, shear, and bending moments.'
    },
    {
      title: 'Fluid Mechanics (Water)',
      subtitle: '',
      description: 'Study of fluid behavior, hydrostatics, fluid kinematics, dynamics, and flow through pipes and open channels.'
    },
    {
      title: 'Roads and Bridges (Transportation)',
      subtitle: '',
      description: 'Principles of highway engineering, road design, traffic flow, and bridge construction planning.'
    },
    {
      title: ' Surveying II',
      subtitle: '',
      description: 'Advanced surveying techniques, geodetic methods, curve ranging, and modern surveying instruments.'
    }

          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

           {
      title: ' Specialized Software Application',
      subtitle: '',
      description: 'Training in specialized software applications used for civil engineering design, drafting, and analysis.'
    },
    {
      title: ' Theory of Structures',
      subtitle: '',
      description: 'Study of structural analysis principles, loads, bending moments, shear forces, and analysis of beams and frames.'
    },
    {
      title: '2801 Building Services',
      subtitle: '',
      description: 'Principles of building services including plumbing, electrical installations, ventilation, and fire safety systems.'
    },
    {
      title: ' 2602 Hydrology and Irrigation (Water)',
      subtitle: '',
      description: 'Study of water resources, precipitation, runoff, groundwater, and the design of irrigation systems.'
    }

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

           {
      title: 'Estimating',
      subtitle: '9:00 AM to 1:00 PM',
      description: 'Principles of construction cost estimating, quantity surveying, material takeoff, and project budgeting.'
    },
    {
      title: ' Design of Concrete, Steel and Timber Structures',
      subtitle: '',
      description: 'Design principles and analysis of reinforced concrete, structural steel, and timber elements according to engineering standards.'
    },
    {
      title: 'Railways and Airports',
      subtitle: '',
      description: 'Planning, design, and construction of railway tracks, airport runways, taxiways, and transportation terminals.'
    },
    {
      title: '3603 Hydropower Engineering',
      subtitle: '',
      description: 'Study of hydroelectric power generation, dam design, water turbines, and plant operations.'
    },
    {
      title: 'Environmental Engineering',
      subtitle: '',
      description: 'Principles of water and wastewater treatment, air pollution control, solid waste management, and environmental impact assessment.'
    }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],
  
 1: [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
             {
              title: 'Computer Hardware and System Administration',
               subtitle: '',
                description: 'The study, setup, maintenance, and management of physical computer components, servers, operating systems, and network infrastructure to ensure secure and efficient system operations.'
                     },],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
             {
      title: ' Fundamentals of C Programming',
      subtitle: '',
      description: 'Introduction to programming concepts, syntax, data types, control structures, and basic algorithms using the C programming language.'
    },
    {
      title: 'Analog and Digital Electronics',
      subtitle: '',
      description: 'Study of analog electronic components, semiconductor devices, and digital logic circuits including gates and combinational systems.'
    },
    {
      title: 'Computer Hardware and System Administration II',
      subtitle: '',
      description: 'Advanced study of computer hardware components, system troubleshooting, operating system deployment, and network administration.'
    }
    
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [
{
      title: ' Principles of Data Structure Using C',
      subtitle: '',
      description: 'Study of fundamental data structures such as arrays, linked lists, stacks, and queues implemented using the C programming language.'
    },
    {
      title: ' Fundamentals of Computer Networking',
      subtitle: '',
      description: 'Introduction to networking concepts, OSI model, TCP/IP, LAN/WAN topologies, routing basics, and network protocols.'
    },
    {
      title: ' Web Design I',
      subtitle: '',
      description: 'Fundamentals of web design, HTML, CSS, responsive layouts, and user interface design principles.'
    },
    {
      title: ' Database Management System',
      subtitle: '',
      description: 'Introduction to database architecture, relational models, SQL queries, normalization, and database design principles.'
    }
          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

          {
      title: ' Web Design II',
      subtitle: '',
      description: 'Advanced web design concepts, frontend frameworks, interactive UI elements, and modern web development practices.'
    },
    {
      title: 'TCP/IP Routing and Switching',
      subtitle: '',
      description: 'Advanced study of computer networking, IP addressing, routing protocols, VLANs, and network switching configuration.'
    },
    {
      title: ' Object Oriented Programming in C++',
      subtitle: '',
      description: 'Principles of object-oriented programming including classes, objects, inheritance, polymorphism, and encapsulation using C++.'
    },
    {
      title: 'Specialized Software Application',
      subtitle: '',
      description: 'Training in specialized IT software applications, system utilities, and professional tool integration.'
    }

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

          {
      title: ' Programming with C#',
      subtitle: '',
      description: 'Advanced programming concepts, object-oriented principles, and application development using the C# language and .NET framework.'
    },
    {
      title: ' Web Development Technology Using PHP',
      subtitle: '',
      description: 'Server-side web development using PHP, database connectivity, dynamic page creation, and web application security.'
    },
    {
      title: ' Information Security',
      subtitle: '',
      description: 'Principles of information security, cryptography, threat analysis, network defense, and secure system design.'
    },
    {
      title: ' Computer Network Administration',
      subtitle: '',
      description: 'Advanced network administration, server configuration, domain services, security policies, and troubleshooting.'
    },
    {
      title: ' Mobile Application Development',
      subtitle: '',
      description: 'Design and development of mobile applications, UI/UX implementation, mobile architecture, and cross-platform deployment.'
    }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],
  
  // ၃။ တတိယမြောက် ဌာန
  3:  [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
              {
                title: 'Basic Electricity',
                subtitle: '',
                description: 'The fundamental study of electrical charges, voltage, current, resistance and simple direct current (DC) circuits.',
              },
            ],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
             {
        title: ' Mechanical Engineering Fundamental',
        subtitle: '',
        description: 'Basic concepts of mechanical engineering systems, mechanics, energy, and thermodynamics.'
      },
      {
        title: ' 1201 Basic Analog and Digital Electronics',
        subtitle: '',
        description: 'Introduction to electronic devices, circuits, semiconductor components, and digital logic systems.'
      },
      {
        title: ' 1301 Basic Electrical Drawing',
        subtitle: '1:00 PM to 5:00 PM',
        description: 'Fundamentals of electrical drafting, symbols, schematics, and technical diagram reading.'
      }
    
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

           {
                title: 'Electrical Wiring Designs and Illumination Engineering',
                subtitle: '',
                description: 'Circuit analysis and design principles for electrical wiring and lighting systems.'
              },
              {
                title: 'Circuit Analysis',
                subtitle: '',
                description: 'Fundamental concepts of AC and DC circuit analysis, network theorems, and transient responses.'
              },
              {
                title: 'Generation, Transmission and Distribution',
                subtitle: '',
                description: 'Study of electrical power systems, power plants, transmission lines, and distribution networks.'
              },
              {
                title: 'Electrical Machines',
                subtitle: '',
                description: 'Principles, operation, and characteristics of transformers, DC machines, and AC motors/generators.'
              }

          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

           {
        title: ' Electrical Wiring Design and Illumination II',
        subtitle: '',
        description: 'Advanced principles of electrical wiring layouts, lighting calculations, and illumination design standards for residential and commercial buildings.'
      },
      {
        title: 'Electrical Machines II',
        subtitle: '',
        description: 'Advanced study of AC and DC electrical machines, performance characteristics, testing methods, and operational control.'
      },
      {
        title: ' Generation, Transmission and Distribution II',
        subtitle: '',
        description: 'In-depth analysis of electrical power generation systems, high-voltage transmission lines, substation equipment, and power distribution networks.'
      },
      {
        title: ' Specialized Software Application (AutoCAD)',
        subtitle: '',
        description: 'Practical training in computer-aided design (CAD) software for drafting and creating professional electrical and engineering diagrams.'
      }

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

           {
            title: ' Electrical Estimating',
            subtitle: '9:00 AM to 1:00 PM',
            description: 'Principles and methods of estimating electrical installation costs, material quantities, labor, and preparing project quotations.'
          },
          {
            title: ' Industrial Motor Control',
            subtitle: '',
            description: 'Study of industrial motor control circuits, starters, protection devices, and automated switching systems.'
          },
          {
            title: ' Electrical Safety and Protection',
            subtitle: '',
            description: 'Electrical safety standards, grounding systems, circuit protection devices, and hazard prevention in electrical environments.'
          },
          {
            title: ' Programmable Logic Control',
            subtitle: '',
            description: 'Fundamentals of PLC programming, ladder logic diagrams, input/output interfacing, and industrial automation applications.'
          },
          {
            title: 'Renewable Energy (Solar)',
            subtitle: '',
            description: 'Principles of photovoltaic solar systems, energy conversion, system design, and grid integration.'
          }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],

  
  2:  [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
              {
                title: 'Computer Hardware and Systems Administration',
                subtitle: '',
                description: 'The study, setup, maintenance, and management of physical computer components, servers, operating systems, and network infrastructure to ensure secure and efficient system operations.',
              },
            ],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
              {
                title: 'C Programming',
                subtitle: '',
                description: 'Basics of programming: variables, control flow, functions, pointers, and simple data structures in C.',
              },
              {
                title: 'Computer Hardware and Systems AdministrationII',
                subtitle: '',
                description: 'The study, setup, maintenance, and management of physical computer components, servers, operating systems, and network infrastructure to ensure secure and efficient system operations.',
              },
              {
                title: 'Analog and Digital Electronics',
                subtitle: 'Digital Electronics: Processes discrete binary signals (0s and 1s) using logic gates and microcontrollers',
                description: 'Analog Electronics: Processes continuous signals that vary smoothly over time using components like transistors and amplifiers.',
              },
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

            {

              title: 'Computer Programming 2',

              subtitle: '',

              description: 'The advanced study of software development concepts, typically focusing on object-oriented programming (OOP) principles, data structures, algorithms, file handling, and modular design using a high-level programming language.',

            },

           {

              title: 'Electrical Machines 1',

              subtitle: '',

              description: 'The advanced study of AC electrical machinery, focusing on the construction, operation, characteristics, and control of induction motors, synchronous generators, synchronous motors, and special-purpose machines.',

            },

            {

              title: 'Electrical Machines 2',

              subtitle: '',

              description: 'The advanced study of AC electrical machinery, focusing on the construction, operation, characteristics, and control of induction motors, synchronous generators, synchronous motors, and special-purpose machines.',

            },

            {

              title: 'Analog Electronics 2',

              subtitle: '',

              description: 'The study and application of electronic circuits that process continuous signals, utilizing components such as diodes, transistors, and operational amplifiers to amplify, filter, or manipulate analog waveforms.',

            },

          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

             {

              title: 'Specialized Software Applications',

              subtitle: '',

              description: 'Introduction to C++ programming language, covering syntax, data structures, and algorithms.',

            },


            {

              title: 'Computer Programming 2',

              subtitle: '',

              description: 'The advanced study of software development concepts, typically focusing on object-oriented programming (OOP) principles, data structures, algorithms, file handling, and modular design using a high-level programming language.',

            },

             {

              title: 'Electronic Communication Systems 1',

              subtitle: '',

              description: 'Introduction to electronic communication systems, covering modulation techniques, signal processing, and communication protocols.',

            },

            {

              title: 'Automation  Control Systems 1',

              subtitle: '',

              description: 'Introduction to automation and control systems, covering control theory, system dynamics, and automation technologies.',

            },

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [
            {

              title: 'Electronic Communication Systems 2',

              subtitle: '',

              description: 'Introduction to electronic communication systems: modulation, transmission, and reception techniques.',

            },

            {

              title: 'Automation and Control Systems 2',

              subtitle: '',

              description: 'Introduction to automation and control systems: principles, components, and applications.',

            },

            {

              title: 'PIC Microcontroller',

              subtitle: '',

              description: 'Introduction to PIC microcontroller architecture, programming, and applications in embedded systems.',

            },

            {

              title: 'Communication and Networking',

              subtitle: 'Communication and Networking and Solar Photovoltaic System Specialization: Students can choose between Communication and Networking or Solar Photovoltaic System as their specialization track in their final year.',

              description: 'The study and application of data transmission, network protocols, architecture, and infrastructure that enable devices to connect, share data, and communicate locally or globally (such as the Internet).',

            },

             {

              title: 'Solar Photovoltaic System',

              subtitle: 'Communication and Networking and Solar Photovoltaic System Specialization: Students can choose between Communication and Networking or Solar Photovoltaic System as their specialization track in their final year.',
              description: 'A renewable energy technology that converts sunlight directly into electricity using semiconductor solar cells.',

            },

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],

  // ၅။ ပဉ္စမမြောက် ဌာန
  4:  [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
              {
                title: 'Principles of Electrical and Electronic Technology',
                subtitle: '',
                description: 'Introduction to electrical and electronic principles, circuit analysis, and basic components.',
              },
            ],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
              {
      title: 'Strength of Materials',
      subtitle: '',
      description: 'Study of mechanical behavior of materials under various types of force, stress, strain, bending, and torsion.'
    },
    {
      title: ' Workshop Technology',
      subtitle: '',
      description: 'Practical training on workshop tools, machining processes, welding, casting, and metal fabrication techniques.'
    },
    {
      title: ' Mechanical Engineering Drawing',
      subtitle: '',
      description: 'Fundamentals of technical drawing, orthographic projections, assembly drawings, and engineering blueprints.'
    }
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

           {
      title: 'Production Technology (Estimating & Shop Management)',
      subtitle: '',
      description: 'Study of manufacturing processes, production planning, cost estimating, and workshop management principles.'
    },
    {
      title: 'Thermodynamics',
      subtitle: '',
      description: 'Fundamental principles of energy conversion, laws of thermodynamics, properties of gases, and thermal systems.'
    },
    {
      title: 'Internal Combustion Engine I',
      subtitle: '',
      description: 'Introduction to internal combustion engines, operating cycles, fuel systems, and performance characteristics.'
    },
    {
      title: 'Theory of Machines',
      subtitle: '',
      description: 'Study of mechanisms, kinematics, dynamics of machinery, gears, and power transmission systems.'
    }
          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {
              title: ' Internal Combustion Engine II',
              subtitle: '',
              description: 'Advanced study of internal combustion engine systems, thermodynamic cycles, fuel injection, and performance analysis.'
            },
            {
              title: ' Applied Hydraulics and Pneumatics',
              subtitle: '',
              description: 'Principles of fluid power systems, hydraulic and pneumatic components, circuit design, and industrial automation applications.'
            },
      {
        title: ' Specialized Software Application (AutoCAD)',
        subtitle: '',
        description: 'Practical training in computer-aided design (CAD) software for drafting and creating professional engineering diagrams.'
      },
      {
        title: ' Automotive Chassis and Electricity',
        subtitle: '',
        description: 'Study of vehicle chassis structures, suspension, steering systems, braking mechanisms, and automotive electrical systems.'
      }

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

           {
        title: 'Fluids Mechanics',
        subtitle: '',
        description: 'Study of fluid behavior, fluid statics, kinematics, and dynamics, including flow through pipes and fluid systems.'
      },
      {
        title: ' Design of Machine Elements',
        subtitle: '',
        description: 'Principles of mechanical design, stress analysis, failure theories, and the selection/design of standard machine components.'
      },
      {
        title: 'Refrigeration and Air-Conditioning',
        subtitle: '',
        description: 'Principles of thermodynamics applied to refrigeration cycles, cooling systems, and air-conditioning design.'
      },
      {
        title: ' Advanced IC Engine',
        subtitle: '',
        description: 'Advanced study of internal combustion engines, thermodynamic performance, combustion processes, and emission control.'
      },
      {
        title: ' CNC Machining Technology',
        subtitle: '',
        description: 'Principles of computer numerical control (CNC) programming, machine setup, and modern automated machining operations.'
      }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],
  
  


  5: [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
              {
                title: ' Fundamentals of Automotive Power Train I',
                subtitle: '',
                description: 'Introduction to basic automotive powertrain components, clutches, manual transmissions, and drive systems.'
              },
              {
                title: ' Fundamentals of Automotive Chassis I',
                subtitle: '',
                description: 'Basic principles of automotive chassis construction, suspension layouts, steering systems, and wheel alignment.'
              },
    {
      title: ' Fundamentals of Automotive Electric I',
      subtitle: '',
      description: 'Introduction to basic automotive electrical principles, wiring, batteries, lighting, and starting/charging circuits.'
    },
    { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
            ],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
              {
      title: 'Basic Engineering Drawing',
      subtitle: '',
      description: 'Fundamentals of engineering drawing standards, projections, geometrical sketching, and technical detailing.'
    },
    {
      title: 'Fundamental of Automotive Power Train II',
      subtitle: '',
      description: 'Advanced fundamental study of automotive powertrain assemblies, differentials, axles, and drive mechanisms.'
    },
    {
      title: 'Fundamental of Automotive Chassis II',
      subtitle: '',
      description: 'Fundamental principles of advanced vehicle chassis layouts, suspension components, steering systems, and brakes.'
    },
    {
      title: 'Fundamental of Automotive Electric II',
      subtitle: '',
      description: 'Fundamental study of automotive electrical systems, charging components, starting mechanisms, and basic circuitry.'
    }
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

            {
      title: ' Engineering Mechanics',
      subtitle: '',
      description: 'Study of forces, moments, equilibrium of particles and rigid bodies, kinematics, and dynamics in engineering applications.'
    },
    {
      title: ' Automotive Power Train I',
      subtitle: '',
      description: 'Introduction to automotive powertrain systems, clutches, manual/automatic transmissions, and drive shafts.'
    },
    {
      title: ' Automotive Chassis I',
      subtitle: '',
      description: 'Study of vehicle frame construction, suspension types, steering geometry, and braking systems.'
    },
    {
      title: 'Automotive Electric I',
      subtitle: '',
      description: 'Fundamentals of automotive electrical systems, batteries, charging circuits, starting systems, and basic wiring.'
    }

          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [
{
      title: ' Automotive Chassis II',
      subtitle: '',
      description: 'Advanced study of vehicle chassis systems, steering geometry, suspension tuning, and advanced braking systems.'
    },
    {
      title: ' Specialized Software Application (AutoCAD)',
      subtitle: '',
      description: 'Practical training in computer-aided design (CAD) software for drafting and creating professional engineering diagrams.'
    },
    {
      title: ' Automotive Electric II',
      subtitle: '',
      description: 'Advanced automotive electrical systems, multiplexing, sensors, actuators, and electronic control modules.'
    },
    {
      title: ' Automotive Power Train II',
      subtitle: '',
      description: 'Advanced study of automotive powertrain systems, clutches, manual/automatic transmissions, and drive shafts.'
    },

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [
{
      title: ' Modern Automotive Technology',
      subtitle: '',
      description: 'Study of advanced vehicle systems, modern electronics, hybrid/electric technology, and onboard diagnostic systems.'
    },
    {
      title: ' Advanced Automotive Fault Diagnosis',
      subtitle: '',
      description: 'Advanced troubleshooting techniques, testing procedures, and diagnostic tools for modern automotive systems and electronic control units.'
    },
    {
      title: ' Automotive Inspection',
      subtitle: '',
      description: 'Systematic procedures for inspecting vehicle components, safety checks, emissions testing, and maintenance evaluation.'
    },
    {
      title: ' Automotive Air-Conditioning',
      subtitle: '',
      description: 'Principles of vehicle climate control systems, refrigeration cycles, component repair, and servicing.'
    },
    {
      title: 'Body Repair & Painting',
      subtitle: '',
      description: 'Techniques for automotive body panel repair, dent removal, surface preparation, priming, and professional vehicle painting.'
    }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],
    

  // ၇။ သတ္တမမြောက် ဌာန
  6:  [
    {
      yearLabel: 'First Year',
      yearNumber: 1,
      semesters: [
        {
          id: 1,
          label: 'First Semester',
          content: {
            majors: [
              {
                title: 'Electrical and Electronics Technology 1',
                subtitle: '',
                description: 'The introductory study of fundamental electrical principles, circuit elements, DC/AC circuit analysis, and basic electronic components.',
              },
            ],
            minors: [
              { title: 'Myanmar', subtitle: '', description: 'Myanmar Literature and Communication' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency' },
              { title: 'Mathematics', subtitle: '', description: 'Calculus, matrices, and foundational engineering calculations.' },
              { title: 'Physics', subtitle: '', description: 'Mechanics, electricity, magnetism, and wave/light concepts.' },
              { title: 'Engineering Drawing', subtitle: '', description: 'Fundamentals of engineering drawing: technical sketches, CAD software, and design principles.' },
              { title: 'Engineering Mechanics(EM)', subtitle: '', description: 'Introduction to engineering mechanics: forces, moments, and equilibrium in structures.' },
              { title: 'Information and Communication Technology(IOT)', subtitle: '', description: 'Introduction to information and communication technology: digital literacy, online communication, and basic IT skills.' },
            ],
          },
        },
        {
          id: 2,
          label: 'Second Semester',
          content: {
            majors: [
              {
      title: 'Electronic Circuit Analysis',
      subtitle: '',
      description: 'Study of electronic circuit principles, semiconductor devices, amplifiers, and network analysis methods.'
    },
    {
      title: 'Electrical and Electronic Technology II',
      subtitle: '',
      description: 'Advanced study of electrical machines, circuits, electronic components, and power systems applications.'
    },
    {
      title: ' Basic Engineering Drawing II',
      subtitle: '1:00 PM to 5:00 PM',
      description: 'Advanced technical drawing concepts, orthographic sections, assembly views, and engineering drafting standards.'
    }
            ],
            minors: [
              { title: 'Social Science', subtitle: '', description: 'Introduction to social science concepts and methodologies.' },
              { title: 'Mathematics ', subtitle: '', description: 'Differential and integral calculus fundamentals.' },
              { title: 'English', subtitle: '', description: 'Technical Communication and English Proficiency.' },
              { title: 'Engineering Chemistry', subtitle: '', description: 'Introduction to engineering chemistry concepts and their applications.' },
              { title: 'Occupational Safety and Health(OSH)', subtitle: '', description: 'Introduction to occupational safety and health principles and practices.' },
            ],
          },
        },
      ],
    },
    {
      yearLabel: 'Second Year',

      yearNumber: 2,

      semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [

            {
      title: 'Control Engineering (Pneumatics and Electro-Pneumatics)',
      subtitle: '',
      description: 'Study of pneumatic and electro-pneumatic control systems, circuit design, components, and automated industrial applications.'
    },
    {
      title: ' Computer Aided Design',
      subtitle: '',
      description: 'Practical training in computer-aided design (CAD) software for drafting and creating professional engineering models and drawings.'
    },
    {
      title: ' Digital Electronics I',
      subtitle: '',
      description: 'Introduction to digital electronic systems, number systems, logic gates, Boolean algebra, and combinational circuits.'
    },
    {
      title: ' Industrial Wiring Installation and Motor Control I',
      subtitle: '',
      description: 'Fundamentals of industrial electrical wiring, installation standards, basic motor control circuits, and safety practices.'
    }

          ],

          minors: [

            { title: 'Mathematics ', subtitle: '', description: 'Fundamentals of discrete mathematics: logic, set theory, and combinatorics.' },



          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Law and Guidelines for Engineering', subtitle: '', description: 'Fundamentals of law and ethical guidelines in engineering practice.' },

        { title: 'Life Skills', subtitle: '', description: 'Fundamentals of life skills: communication, teamwork, and problem-solving.' },



        ],

       

        },

       

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {
      title: ' Control Engineering (Hydraulics and Electro-Hydraulics)',
      subtitle: '',
      description: 'Study of control systems, hydraulic and electro-hydraulic principles, circuit design, and automation applications.'
    },
    {
      title: ' Digital Electronics II',
      subtitle: '',
      description: 'Advanced digital electronics, sequential circuits, microprocessors, and logic system implementations.'
    },
    {
      title: 'Industrial Wiring Installation and Motor Control II',
      subtitle: '',
      description: 'Advanced industrial wiring techniques, installation standards, complex motor control circuits, and protective systems.'
    }

          ],

          minors: [

            { title: 'Mathematics', subtitle: '', description: 'Fundamentals of linear algebra: vectors, matrices, and linear transformations.' },

          { title: 'English', subtitle: '', description: 'Fundamentals of English language and literature.' },

        { title: 'Ethics', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },

        { title: 'National Development Plan(NDP)', subtitle: '', description: 'Fundamentals of national development planning: strategies, policies, and implementation.' },



          ],

        },

      },

    ],

  },

  {

    yearLabel: 'Third Year',

    yearNumber: 3,

    semesters: [

      {

        id: 1,

        label: 'First Semester',

        content: {

          majors: [
{
      title: ' Programmable Logic Controllers',
      subtitle: '',
      description: 'Fundamentals of programmable logic controllers (PLCs), programming instructions, ladder logic, and industrial automation applications.'
    },
    {
      title: 'Industrial Motor Drives',
      subtitle: '',
      description: 'Study of industrial motor drive systems, speed control methods, power electronic converters, and operational characteristics.'
    },
    {
      title: 'Computer Science and Programming',
      subtitle: '',
      description: 'Introduction to computer science concepts, software development principles, and programming fundamentals.'
    },
    {
      title: 'Process Automation',
      subtitle: '',
      description: 'Principles of industrial process control, instrumentation, feedback loops, and automated manufacturing systems.'
    },
    {
      title: 'Factory Automation',
      subtitle: '',
      description: 'Advanced concepts in smart manufacturing, robotics, automated assembly lines, and industrial integration systems.'
    }

          ],

          minors: [

            { title: 'Engineering Economics', subtitle: 'Minor — Engineering Economics', description: 'Fundamentals of engineering economics: cost analysis, economic decision-making, and project evaluation.' },

            { title: 'Engineering Entrepreneurship', subtitle: '', description: 'The branch of philosophy and professional code that deals with moral principles, values, and the distinction between right and wrong behavior, particularly regarding professional conduct, decision-making, and responsibilities in engineering and society.' },



          ],

        },

      },

      {

        id: 2,

        label: 'Second Semester',

        content: {

          majors: [

            {

              title: 'Internship Training',

              subtitle: '',

              description: 'Practical hands-on work experience in a professional engineering or industry environment, allowing students to apply their academic knowledge to real-world projects and develop industry-specific skills.',

            },

           

          ],

          minors: [

            { title: 'Project Presentation', subtitle: 'A comprehensive final presentation where students showcase their capstone or graduation project, explaining the problem solved, methodologies used, implementation details, and project outcomes to an audience or evaluation panel.', description: '' },

          ],

        },

      },

    ]

  },

],

}
