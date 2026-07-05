// Data extracted verbatim from Thummuri Kusuma Sai's resume
export const PROFILE = {
  fullName: "Thummuri Kusuma Sai",
  shortName: "Kusuma Sai",
  initials: "TKS",
  title: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "React.js Engineer",
    "UI Craftsperson",
    "Component Architect",
  ],
  location: "India",
  phone: "+91 9390202368",
  email: "kusumasaithummuri@gmail.com",
  linkedin: "https://www.linkedin.com/in/kusumasai",
  github: "https://github.com/kusumasaitummuri",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_01c23dd0-217f-4b1b-9bf7-3a0b89d40a65/artifacts/ipaj7dju_KUSUMA%20%282%29.docx",
  yearsOfExperience: "1+",
  summary:
    "Frontend Developer with 1+ year of experience, including professional experience at TaraFirst Fintech Private Limited. Skilled in developing responsive and scalable web applications using React.js, JavaScript, HTML, CSS, and Material UI. Experienced in building reusable components, managing application state with React Hooks, integrating RESTful APIs, and implementing dynamic routing. Focused on creating high-performance, user-friendly interfaces through clean and maintainable code. Strong team player with experience working in Agile environments, version control using Git, and participating in code reviews to ensure quality and consistency.",
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Material UI (MUI)", level: 85 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "Responsive Web Design", level: 92 },
      { name: "Component-Based Architecture", level: 90 },
      { name: "REST API Integration", level: 88 },
      { name: "State Management", level: 85 },
    ],
  },
  {
    category: "Tools & Software",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Postman", level: 85 },
    ],
  },
];

export const SOFT_SKILLS = [
  "Communication",
  "Team Collaboration",
  "Analytical Thinking",
  "Problem Solving",
  "Time Management",
];

export const EXPERIENCE = [
  {
    company: "TaraFirst Fintech Private Limited",
    role: "Junior Frontend Developer",
    period: "Apr 2025 — Present",
    current: true,
    tech: ["React.js", "JavaScript", "Material UI (MUI)", "HTML5", "CSS3", "REST APIs", "SQL", "Git", "Postman"],
    highlights: [
      "Developed dynamic and responsive user interfaces using React.js and Material UI to deliver seamless user experiences across multiple business modules.",
      "Built and maintained modules for document drafting, company registration processes, employee management, and CA firm operations.",
      "Integrated REST APIs for data retrieval, form submission, authentication, validation, and real-time updates across applications.",
      "Created reusable and modular React components to improve code maintainability, scalability, and development efficiency.",
      "Implemented client-side form validations, role-based access controls, and business workflow logic to meet application requirements.",
      "Managed application state using React Hooks and optimized component rendering for improved performance and user experience.",
      "Collaborated closely with backend developers, QA teams, and business stakeholders to deliver features according to project requirements.",
      "Identified and resolved UI bugs, performance issues, and cross-browser compatibility challenges to enhance application stability.",
      "Enhanced application usability by implementing responsive layouts, modern UI components, and consistent design standards across platforms.",
      "Used Git for version control, code collaboration, and maintaining development workflows within Agile development environments.",
    ],
  },
  {
    company: "KodNest Technologies",
    role: "Java Full Stack Development Intern",
    period: "Jun 2024 — Dec 2024",
    current: false,
    tech: ["Java", "SQL", "JDBC", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Developed web-based applications using Java, HTML, CSS, and JavaScript while following Object-Oriented Programming principles.",
      "Built responsive user interfaces and integrated frontend components with backend functionalities to support end-to-end application workflows.",
      "Designed and executed SQL queries for data retrieval, insertion, updating, and database management.",
      "Implemented JDBC connectivity to enable seamless interaction between Java applications and relational databases.",
      "Participated in debugging, code reviews, and application testing to identify issues and improve software quality.",
      "Gained hands-on experience across the software development lifecycle, including development, database integration, testing, and deployment concepts.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "E-Commerce Website",
    tag: "Full-Stack Web App",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
    description:
      "A responsive e-commerce platform with product listing, product detail, and shopping cart functionalities.",
    features: [
      "Implemented search, filtering, and sorting features to improve product discovery and user experience.",
      "Integrated REST APIs for product management, order processing, and dynamic data rendering.",
      "Designed reusable UI components and responsive layouts to ensure cross-device compatibility.",
      "Optimized application performance and navigation flow for faster user interactions.",
      "Managed frontend-backend communication and database integration using Node.js and MongoDB.",
    ],
    contributions: "End-to-end frontend architecture, API integration, and responsive UI system.",
    github: "https://github.com/kusumasaitummuri",
    demo: null,
  },
  {
    name: "Task Management Dashboard",
    tag: "Productivity Tool",
    tech: ["React.js", "JavaScript", "Material UI (MUI)", "Local Storage"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "A task management dashboard to create, update, delete, and track daily tasks.",
    features: [
      "Built reusable React components to improve maintainability and development efficiency.",
      "Implemented task filtering, search, and status management features for better task organization.",
      "Designed responsive dashboard layouts using Material UI to provide a consistent user experience.",
      "Utilized Local Storage for persistent task data management without backend dependency.",
      "Applied React Hooks and component-based architecture to deliver a scalable and user-friendly application.",
    ],
    contributions: "Component design, state management with hooks, and local persistence layer.",
    github: "https://github.com/kusumasaitummuri",
    demo: null,
  },
  {
    name: "Weather Forecast Application",
    tag: "API Integration",
    tech: ["React.js", "JavaScript", "OpenWeather API", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1513069020900-a162c4db0762?auto=format&fit=crop&w=1200&q=80",
    description:
      "A weather forecasting application using OpenWeather API to display real-time weather information.",
    features: [
      "Implemented location-based and city-wise weather search functionality with dynamic data updates.",
      "Displayed key weather metrics including temperature, humidity, wind speed, and weather conditions.",
      "Integrated external APIs and handled asynchronous data fetching and error management.",
      "Designed a responsive and interactive user interface for seamless user experience across devices.",
      "Optimized component rendering and state management for efficient performance.",
    ],
    contributions: "API integration layer, async error handling, and interactive UI design.",
    github: "https://github.com/kusumasaitummuri",
    demo: null,
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    institution: "Sasi Institute of Technology and Engineering",
    period: "2020 — 2024",
    description:
      "Completed a four-year engineering program with a strong foundation in computer science fundamentals, programming, and modern web technologies.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Java Full Stack Development",
    issuer: "KodNest Technologies",
    period: "Jun 2024 — Dec 2024",
    type: "Internship Program",
  },
  {
    title: "Agile & Version Control Practices",
    issuer: "On-the-job — TaraFirst Fintech",
    period: "2025",
    type: "Professional Experience",
  },
];

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
