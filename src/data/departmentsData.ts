import type { Department } from '../types';

import civilImg from '../assets/civil.jpg';
import itImg from '../assets/it.jpg';
import electronicImg from '../assets/ec.jpg';
import powerImg from '../assets/ep.jpg';
import mechanicalImg from '../assets/mechnical.jpg';
import automotiveImg from '../assets/atm.jpg';
import industrialImg from '../assets/ie.jpg';
import scienceImg from '../assets/sc.jpg';
import studentAffairsImg from '../assets/studentaffri.jpg';
import adminImg from '../assets/admin.jpg';
import libraryImg from '../assets/library.jpg';
import it1Img from '../assets/it1.jpg';
import it2Img from '../assets/it2.jpg';
import it3Img from '../assets/it3.jpg';
import it4Img from '../assets/it4.jpg';
import it9Img from '../assets/it9.jpg';
import it5Img from '../assets/it5.jpg';
import it6Img from '../assets/it6.jpg';
import it7Img from '../assets/it7.jpg';
import it8Img from '../assets/it8.jpg';
import atm1Img from '../assets/atm1.jpg';
import atm2Img from '../assets/atm2.jpg';
import atm3Img from '../assets/atm3.jpg';
import atm4Img from '../assets/atm4.jpg';
import atm9Img from '../assets/atm9.jpg';
import atm5Img from '../assets/atm5.jpg';
import atm6Img from '../assets/atm6.jpg';
import atm7Img from '../assets/atm7.jpg';
import atm8Img from '../assets/atm8.jpg';
import ec1Img from '../assets/ec1.jpg';
import ec2Img from '../assets/ec2.jpg';
import ec3Img from '../assets/ec3.jpg';
import ec4Img from '../assets/ec4.jpg';
import ec9Img from '../assets/ec9.jpg';
import ec5Img from '../assets/ec5.jpg';
import ec6Img from '../assets/ec6.jpg';
import ec7Img from '../assets/ec7.jpg';
import ec8Img from '../assets/ec8.jpg';
import ie1Img from '../assets/ie1.jpg';
import ie2Img from '../assets/ie2.jpg';
import ie3Img from '../assets/ie3.jpg';
import ie4Img from '../assets/ie4.jpg';
import ie9Img from '../assets/ie9.jpg';
import ie5Img from '../assets/ie5.jpg';
import ie6Img from '../assets/ie6.jpg';
import ie7Img from '../assets/ie7.jpg';
import ie8Img from '../assets/ie8.jpg';
import ep1Img from '../assets/ep1.jpg';
import ep2Img from '../assets/ep2.jpg';
import ep3Img from '../assets/ep3.jpg';
import ep4Img from '../assets/ep4.jpg';
import ep9Img from '../assets/ep9.jpg';
import ep5Img from '../assets/ep5.jpg';
import ep6Img from '../assets/ep6.jpg';
import ep7Img from '../assets/ep7.jpg';
import ep8Img from '../assets/ep8.jpg';

import dept1Img from '../assets/itlogo.jpg';
import dept2Img from '../assets/civillogo.jpg';
import dept3Img from '../assets/eclogo.jpg';
import dept4Img from '../assets/eplogo.jpg';
import dept5Img from '../assets/melogo.jpg';
import dept6Img from '../assets/atmlogo.jpg';
import dept7Img from '../assets/ielogo.jpg';

export const departments: Department[] = [

  {
    name: "Civil Engineering",
    image: civilImg,
    logo: dept2Img,
    content: [
      {
        type: 'text',
        text: `Civil engineering(Civil), the profession of designing and executing plans for structural works that serve the general public, such as dams, bridges, aqueducts, canals, highways, power plants, sewerage systems, and other infrastructure. The term was first used in the 18th century to distinguish the newly recognized profession from military engineering, until then preeminent. From earliest times, however, engineers have engaged in peaceful activities, and many of the civil engineering works of ancient and medieval times—such as the Roman public baths, roads, bridges, and aqueducts; the Flemish canals; the Dutch sea defenses; the French Gothic cathedrals; and many other monuments—reveal a history of inventive genius and persistent experimentation.`
      },
      {
        type: 'markdown',
        markdown: `Civil Engineering can be divided into two main categories based on the nature of the work:

- **Design and Planning:** This involves office-based work such as drafting designs, calculating structural loads, and creating project plans before construction begins.

- **Construction and Execution:** This involves site-based, practical work including the use of heavy machinery, manual labor, and managing the actual construction process on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Civil Engineering
Additionally, Civil Engineering encompasses several specialized branches:

Structural Engineering: Calculating the load capacity and designing buildings, bridges, and dams.

Geotechnical Engineering: Studying the properties of soil and rock to ensure the stability of foundations.

Transportation Engineering: Designing and managing transportation systems such as highways, railways, airports, and bridges.

Water Resources & Environmental Engineering: Managing water supply systems, sewage systems, flood prevention, and environmental conservation.

Construction Engineering & Management: Managing construction sites, optimizing time and costs, and coordinating labor and equipment.

Surveying & Geomatics: Accurately measuring terrain and locations, map creation, and using GIS technology to collect data.`
      },
      { type: 'image', src: [civilImg, civilImg, civilImg], alt: 'Civil building', caption: 'Civil lab and projects' },
    ],
  },
  {
    name: "Information Technology",
    image: itImg,
    logo: dept1Img,
    content: [
      {
        type: 'text',
        text: 'Information Technology(IT), the profession of designing, developing, and managing computer systems, software applications, networks, and databases that serve organizations and individuals, such as web platforms, mobile applications, enterprise software, cloud infrastructure, security systems, and other digital solutions. The term represents a modern and rapidly expanding field that evolved alongside the computer revolution to handle digital data and computational tasks. From early computing machinery to modern digital systems—such as enterprise databases, internet protocols, cloud computing networks, mobile operating systems, and countless applications—the history of IT reveals continuous innovation and persistent technological advancement.'
      },
      {
        type: 'markdown',
        markdown: `Information Technology can be divided into two main categories based on the nature of the work:

Software and Development: This involves office-based or remote work such as writing application code, designing system architectures, testing software, and creating digital solutions before deployment.

Hardware and Infrastructure: This involves hands-on, practical work including setting up physical servers, configuring networking hardware, maintaining data centers, and managing hardware components on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Information Technology: Additionally, Information Technology encompasses several specialized branches:

Software Engineering: Designing, developing, and maintaining software applications and systems using programming languages and frameworks.

Network and Systems Administration: Managing and configuring computer networks, servers, and system security to ensure reliable communication and data access.`
      },
      { type: 'image', src: [it1Img, it2Img, it3Img, it4Img, it5Img, it6Img, it7Img, it8Img, it9Img], alt: 'Computers', caption: 'Computer lab,Projects,Activities' },
    ],
  },
  {
    name: "Electronic Engineering",
    image: electronicImg,
    logo: dept3Img,
    content: [
      {
        type: 'text',
        text: 'Electronic engineering(EC), the profession of designing, developing, and testing electronic equipment, circuits, and systems that serve various applications, such as telecommunications devices, computer hardware, medical instruments, power generation systems, consumer electronics, and other technology infrastructure. The term emerged as a distinct branch of engineering to focus on the behavior and effects of electrons and electrical components, expanding rapidly alongside the advancement of semiconductors and microchips. From early vacuum-tube radios to modern integrated circuits—such as microprocessors, communication transceivers, embedded sensor arrays, renewable energy inverters, and countless digital devices—the history of electronic engineering reveals continuous innovation and persistent technological advancement.'
      },
      {
        type: 'markdown',
        markdown: `Electronic Engineering can be divided into two main categories based on the nature of the work:

Design and Simulation: This involves office-based work such as drafting circuit schematics, running electronic simulations, calculating signal behaviors, and designing PCB (Printed Circuit Board) layouts before physical manufacturing begins.

Hardware and Fabrication: This involves hands-on, practical work including soldering components, assembling physical prototype boards, testing electrical hardware using oscilloscopes, and maintaining physical electronic systems on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Electronic Engineering: Additionally, Electronic Engineering encompasses several specialized branches:

Circuit Design: Designing and optimizing analog, digital, and mixed-signal integrated circuits for various electronic devices.

Embedded Systems: Integrating microcontrollers, processors, and hardware interfaces with software to control specific electronic machinery and devices.`
      },
      { type: 'image', src: [ec1Img, ec2Img, ec3Img, ec4Img, ec5Img, ec6Img, ec7Img, ec8Img, ec9Img], alt: 'Electronic lab', caption: 'Electronic lab and projects' },
    ]
  },
  {
    name: "Electrical Power",
    image: powerImg,
    logo: dept4Img,
    content: [
      {
        type: 'text',
        text: 'Electrical power engineering(EP), the profession of designing and executing plans for electrical systems that serve the general public and industries, such as power plants, transmission grids, electrical substations, renewable energy installations, distribution networks, industrial motor drives, and other energy infrastructure. The term evolved alongside the industrial revolution to harness and distribute electrical energy safely on a large scale. From early electrical generators and lighting systems to modern smart grids and high-voltage transmission lines—such as hydroelectric dynamos, regional power grids, transformer stations, industrial power distribution units, and many other monuments of engineering—the history of electrical power engineering reveals a history of inventive genius and persistent experimentation.'
      },
      {
        type: 'markdown',
        markdown: `Electrical Power Engineering can be divided into two main categories based on the nature of the work:

Design and Planning: This involves office-based work such as drafting electrical schematics, calculating power load requirements, analyzing grid stability, and creating electrical network blueprints before installation begins.

Construction and Execution: This involves site-based, practical work including installing high-voltage equipment, stringing transmission lines, wiring industrial control panels, and managing the actual deployment and maintenance of electrical systems on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Electrical Power Engineering: Additionally, Electrical Power Engineering encompasses several specialized branches:

Power Generation: Designing and operating facilities that convert various energy sources (such as thermal, hydro, solar, and wind) into electrical energy.

Transmission and Distribution: Managing the high-voltage transport of electricity across long distances and safely distributing it to commercial, industrial, and residential end-users.`
      },
      { type: 'image', src:[ep1Img,ep2Img,ep3Img,ep4Img,ep5Img,ep6Img,ep7Img,ep8Img,ep9Img], alt: 'Power lab', caption: 'Power lab and projects' },
    ],
  },
  {
    name: "Mechanical Engineering",
    image: mechanicalImg,
    logo: dept5Img,
    content:[
      {
        type: 'text',
        text: 'Mechanical engineering(ME), the profession of designing, analyzing, and manufacturing mechanical systems and thermal devices that serve the general public and industries, such as engines, power-generating equipment, HVAC systems, robotics, manufacturing tools, transportation vehicles, and other infrastructure. The term evolved during the industrial revolution to distinguish the practice from military engineering and focus on machinery and power systems. From early water wheels and steam engines to modern precision machinery—such as industrial turbines, automotive powertrains, manufacturing assembly lines, aerospace propulsion systems, and many other monuments of engineering—the history of mechanical engineering reveals a history of inventive genius and persistent experimentation.'
      },
      {
        type: 'markdown',
        markdown: `Mechanical Engineering can be divided into two main categories based on the nature of the work:

Design and Analysis: This involves office-based work such as drafting 3D CAD models, running finite element analysis (FEA) and computational fluid dynamics (CFD) simulations, calculating mechanical stresses, and creating technical blueprints before manufacturing begins.

Manufacturing and Execution: This involves site-based or factory-based practical work including machining components, assembling mechanical machinery, operating industrial fabrication equipment, and managing the actual production and maintenance processes on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Mechanical Engineering: Additionally, Mechanical Engineering encompasses several specialized branches:

Thermal and Fluid Engineering: Designing systems related to heat transfer, thermodynamics, fluid mechanics, refrigeration, and power generation.

Mechanics and Machine Design: Designing mechanical components, mechanisms, and structural parts to ensure durability, efficiency, and safety under various operational loads.`
      },
      { type: 'image', src: [mechanicalImg, mechanicalImg, mechanicalImg], alt: 'Mechanical lab', caption: 'Mechanical lab and projects' },
    ]
      },
  {
    name: "Automotive Technology",
    image: automotiveImg,
    logo: dept6Img,
    content: [
      {
        type: 'text',
        text: 'Automotive technology, the profession of designing, developing, and manufacturing vehicles and transport systems that serve the general public and industries, such as passenger cars, commercial trucks, electric vehicles, autonomous transport systems, internal combustion engines, powertrain components, and other mobility infrastructure. The term evolved alongside the rapid expansion of the automotive industry to combine mechanical, electrical, and computer systems for modern transportation. From early horseless carriages and basic mechanical carburetors to modern smart vehicles—such as hybrid powertrains, electronic control units (ECUs), advanced driver-assistance systems (ADAS), electric vehicle battery packs, and many other monuments of engineering—the history of automotive technology reveals a history of inventive genius and persistent experimentation.'
      },
      {
        type: 'markdown',
        markdown: `Automotive Technology can be divided into two main categories based on the nature of the work:

Design and Engineering: This involves office-based work such as drafting 3D CAD vehicle models, simulating aerodynamics and crash safety, programming vehicle software systems, and creating technical blueprints before production begins.

Manufacturing and Maintenance: This involves factory-based and site-based practical work including assembling vehicle frames, installing mechanical and electrical components, operating production line robotics, and diagnosing and repairing automotive systems on-site.`
      },
      {
        type: 'markdown',
        markdown: `Main Branches of Automotive Technology: Additionally, Automotive Technology encompasses several specialized branches:

Powertrain Engineering: Designing and optimizing internal combustion engines, electric motors, transmissions, and energy storage systems to drive vehicle performance.

Vehicle Electronics and Diagnostics: Managing onboard computer networks, sensors, control units, and electrical wiring systems to ensure proper vehicle operation and troubleshooting.`
      },
      { type: 'image', src: [atm1Img, atm2Img, atm3Img, atm4Img, atm5Img, atm6Img, atm7Img, atm8Img, atm9Img], alt: 'Automotive lab', caption: 'Automotive lab ,Activities and projects' },
    ]
  },
  {
    name: "Industrial Engineering",
    image: industrialImg,
    logo: dept7Img,
    content: [
      {
        type: 'text',
        text: 'Industrial engineering, the profession of designing, optimizing, and managing complex processes, systems, or organizations that serve industries and manufacturing sectors, such as supply chains, production lines, assembly plants, healthcare delivery systems, logistics networks, and other operational infrastructure. The term evolved during the industrial revolution and modern manufacturing eras to integrate human labor, machines, materials, and information efficiently. From early time-and-motion studies and factory floor layouts to modern automated facilities—such as lean manufacturing systems, global logistics networks, automated warehousing, quality control frameworks, and many other milestones of engineering—the history of industrial engineering reveals a history of inventive genius and persistent experimentation.'
      },
     { type: 'markdown', markdown: `Industrial Engineering can be divided into two main categories based on the nature of the work:

Design and Analysis: This involves office-based work such as creating facility layouts, simulating workflow bottlenecks, optimizing supply chain models, and calculating production efficiency metrics before implementation begins.

Operations and Execution: This involves factory-based and site-based practical work including implementing lean manufacturing principles, supervising shop floor operations, managing inventory systems, and ensuring quality control standards are met on-site.` },
     { type: 'markdown', markdown: `Main Branches of Industrial Engineering: Additionally, Industrial Engineering encompasses several specialized branches:

Operations Research: Utilizing mathematical modeling, statistical analysis, and optimization techniques to solve complex decision-making and resource allocation problems.

Supply Chain and Logistics Management: Designing and overseeing the flow of goods, services, and information from raw material sourcing to final customer delivery to minimize costs and maximize efficiency.` },
      { type: 'image', src:[ ie1Img,ie2Img,ie3Img,ie4Img,ie5Img,ie6Img,ie7Img,ie8Img,ie9Img], alt: 'Industrial lab', caption: 'Industrial lab and projects' },
    ]
  },
  {
    name: "Science Department",
    image: scienceImg,
    content: [
      { type: 'text', text: 'The Science Department covers various fields of science including Myanmar, English,Mathematics,Physics,Chemistry.' },
      
      { type: 'markdown', markdown: `The Department of Literature teaches various categories in addition to relevant specialized subjects. These categories include:

Law

Social Science

Life Skills

Drawing

National Development Plans (NDP)

Engineering Mechanics

Information and Communication Technology (ICT)

Ethics

Occupational Safety and Health (OSH)

Engineering Economics

Engineering Entrepreneurship and Project Management` },
      { type: 'image', src: scienceImg, alt: 'Science lab', caption: 'Science lab and projects' },
    ]
  },
  {
    name: "Student Affairs",
    image: studentAffairsImg,
     content: [
       { type: 'text', text: 'Student Affairs, the administrative department and profession focused on supporting student development, enhancing campus life, and providing services that serve the student body, such as academic advising, career counseling, housing and residential life, student organizations, financial aid, health and wellness services, and other campus infrastructure. The term evolved within higher education institutions to provide holistic support for students outside the traditional classroom environment. From early student disciplinary committees and faculty-led housing oversight to modern comprehensive student services—such as campus life centers, mental health counseling clinics, international student support offices, career placement services, and many other pillars of academic communities—the history of student affairs reveals continuous dedication to student well-being and institutional success.' },
     ]
  },
  {
    name: "Administration",
    image: adminImg,
     content: [
       { type: 'text', text: 'Administration, the profession of organizing, directing, and managing the operations, resources, and personnel of an organization to ensure its efficient functioning and achievement of goals, such as corporate offices, government agencies, educational institutions, non-profit organizations, healthcare facilities, and other institutional infrastructure. The term evolved alongside the growth of organized governance and commerce to maintain order, handle logistics, and coordinate complex institutional activities. From early bureaucratic record-keeping and royal court management to modern enterprise management systems—such as executive secretariats, institutional policy frameworks, resource allocation bureaus, regulatory compliance units, and many other pillars of organizational structure—the history of administration reveals a continuous drive toward efficiency, structure, and systematic control.' },
     ]
  },
  {
    name: "Library",
    image: libraryImg,
    content: [
      { type: 'text', text: 'Library, the profession and institution dedicated to collecting, organizing, preserving, and providing access to information, literature, and educational resources that serve the general public and academic communities, such as books, digital databases, historical archives, multimedia collections, research journals, and other knowledge infrastructure. The term evolved from ancient repositories of scrolls and manuscripts to modern digital and physical knowledge hubs. From early monastic and royal archives to modern public and university libraries—such as national libraries, digital repository networks, specialized research centers, community reading rooms, and many other monuments of learning—the history of libraries reveals a continuous commitment to preserving human knowledge and ensuring universal access to information.' },
    ]
  },
];

export default departments;