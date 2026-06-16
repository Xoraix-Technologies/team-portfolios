export type SkillToolItem = {
  label: string;

  // Choose ONE approach:
  // 1) iconKey: use your internal icon mapping component
  iconKey?:
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "tailwind"
    | "shadcn"
    | "mui"
    | "framer"
    | "react"
    | "redux"
    | "next"
    | "node"
    | "express"
    | "mongodb"
    | "supabase"
    | "docker"
    | "vercel"
    | "git"
    | "github"
    | "postman"
    | "npm"
    | "python"
    | "debian"
    | "centos";

  // 2) iconSrc: if you prefer to load SVGs from /public/icons
  iconSrc?: string; // "/icons/html.svg"
};

export type SkillsToolsSection = {
  title: string; // "Skills & Tools"
  tagline: string; // "Learned by coding all night..."
  description: string;
  items: SkillToolItem[];
};


export type Skill = {
  name: string;
  percent: number;
  iconKey:
    | "react"
    | "code"
    | "github"
    | "palette"
    | "db"
    | "brackets"
    | "python"
    | "debian"
    | "centos"
    | "docker";
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export type Tech = {
  title: string;
  description: string;
  iconKey: "layers" | "code" | "server" | "db" | "palette" | "github";
};

export type Project = {
  id: string;
  category: "Web app" | "Ecommerce" | "Mobile app" | "Library";
  title: string;
  description: string;
  projectDesc?: string;
  projectTitle?: string;
  projectChallenges?: string[];
  projectSolutions?: string[];
  projectSkills?: string[];
  tags: string[];
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
};

export type UserData = {
  slug: string;
  username?: string; // Optional, can be derived from slug if needed

  hero: {
    pill: string;
    name: string;
    mainTitle: string;
    subtitle: string;
    shortIntro: string;
    techPills: string[];
    ctaText: string;
    cvText: string;
    resumeUrl?: string;
    resumeFileName?: string;
  };

  about: {
    name: string;
    roleTitle: string;
    imageSrc: string;
    about1: string;
    about2: string;
    skillsLeft: Skill[];
    skillsRight: Skill[];
    experience: Experience[];
  };

  tech: {
    heading: string;
    description: string;
    techs: Tech[];
  };

  projects: {
    heading: string;
    description: string;
    items: Project[];
  };

  contact: {
    email: string;
    linkedin: string;
    github?: string;
    tagline?: string;
    avatar?: string;
  };
  skillsTools: SkillsToolsSection;
};

/* -------------------- helpers -------------------- */

/* -------------------- USERS DATA -------------------- */

export const USERS: UserData[] = [
  {
    slug: "abu-bakar-saddique",

    hero: {
      pill: "Frontend Engineer (React, Next.js)",
      name: "Abu Bakar Saddique",
      mainTitle: "Frontend Engineer",
      subtitle: "React, Next.js & TypeScript (with Full-Stack Experience)",
      shortIntro:
        "Crafting innovative, high-performance web applications with React, Next.js, and Node.js—turning ideas into reality through modern technologies and clean code.",
      techPills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MUI"],
      ctaText: "View My Work",
      cvText: "CV Not Available",
      resumeUrl: "/resumes/abu-bakar-saddique.pdf",
      resumeFileName: "abu-bakar-saddique.pdf",
    },

    about: {
      name: "Abu Bakar Saddique",
      roleTitle: "Front-End / Full-Stack Web Developer",
      imageSrc: "/images/about1.jpg",
      about1:
        "I am a dedicated Front-End / Full-Stack Web Developer specializing in building dynamic, responsive, and user-friendly web applications. With hands-on experience in modern React ecosystems, I deliver polished UI, clean architecture, and scalable features using technologies like React, Next.js, TypeScript, and Node.js.",
      about2:
        "My passion lies in developing efficient, high-performance, and visually compelling experiences that enhance user value. I believe in clean code, smart design, and collaborative development practices. I focus on performance, accessibility, and maintainability so products stay fast and easy to evolve.",
      skillsLeft: [
        { name: "React", percent: 95, iconKey: "react" },
        { name: "Node", percent: 80, iconKey: "code" },
        { name: "GitHub", percent: 90, iconKey: "github" },
        { name: "Tailwind", percent: 80, iconKey: "palette" },
      ],
      skillsRight: [
        { name: "Next", percent: 80, iconKey: "db" },
        { name: "MongoDB", percent: 85, iconKey: "db" },
        { name: "MUI", percent: 80, iconKey: "brackets" },
        { name: "Redux", percent: 70, iconKey: "db" },
      ],
      experience: [
        {
          title: "Frontend Engineer (React, Next.js)",
          company: "STech Experts",
          date: "Mar 2025",
          bullets: [
            "Build and ship modern web apps using Next.js, React, and TypeScript with reusable UI components.",
            "Improve performance, accessibility, and SEO through clean architecture, best practices, and code reviews.",
          ],
        },
      ],
    },

    tech: {
      heading: "Technologies I Work With",
      description:
        "I'm proficient in a variety of modern technologies to build robust and scalable applications.",
      techs: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces.",
          iconKey: "layers",
        },
        {
          title: "Next.js",
          description: "The React framework for production.",
          iconKey: "layers",
        },
        {
          title: "TypeScript",
          description:
            "Strongly typed programming language that builds on JavaScript.",
          iconKey: "code",
        },
        {
          title: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 engine.",
          iconKey: "server",
        },
        {
          title: "MongoDB",
          description: "A powerful, open source database system.",
          iconKey: "db",
        },
        {
          title: "Tailwind CSS",
          description:
            "A utility-first CSS framework for rapid UI development.",
          iconKey: "palette",
        },
        {
          title: "Git & GitHub",
          description: "Version control system and hosting for development.",
          iconKey: "github",
        },
        {
          title: "Figma",
          description: "A collaborative interface design tool.",
          iconKey: "palette",
        },
      ],
    },

    projects: {
      heading: "My Projects",
      description:
        "Here are some of the projects I've worked on, showcasing my skills in various technologies.",
      items: [
        {
          id: "pos",
          category: "Web app",
          title: "POS",
          projectTitle: "POS - Point of Sale System",
          projectChallenges: [
            "Complex Data Management: Implementing a system capable of handling complex data interactions and real-time inventory management.",
            "User Experience Design: Developing an intuitive and responsive user interface that could accommodate the extensive features of the POS system without overwhelming users.",
            "Security and Scalability: Ensuring the security of transactions and data while also providing a system that could scale with Banyo Limited’s growth.",
            "Integration and Deployment Complexity: Integrating the application with various payment methods and deploying the system on AWS servers for high availability and reliability.",
          ],
          projectSolutions: [
            "To address the complex data management and real-time inventory requirements, I designed a robust backend using Django that efficiently handled data interactions and ensured seamless synchronization across the system. For the user experience, I developed a clean and intuitive interface using React and Next.js, organizing features into a user-friendly dashboard that simplified navigation. To ensure security and scalability, I implemented best practices for data protection and optimized the application architecture to support growth. Finally, I integrated various payment gateways and deployed the application on AWS for reliable performance and high availability.",
          ],
          description:
            "A point-of-sale and storefront interface to manage products and sales with reusable components and fast workflows.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
          image: "/images/abu-bakar-projects-images/POS.jpg",
          sourceUrl: "#",
        },

        {
          id: "aimyable-dashboard",
          category: "Web app",
          title: "Aimyable Dashboard",
          projectTitle: "Aimyable Dashboard - Product Analytics Platform",
          projectChallenges: [
            "Performance Optimization: Building a dashboard that can efficiently handle and visualize large datasets in real-time without compromising user experience.",
          ],
          description:
            "A product analytics dashboard designed to monitor key metrics and performance in one place with role-based access.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
          image: "/images/abu-bakar-projects-images/Aimyable.png",
          sourceUrl: "#",
        },
        {
          id: "ticksy",
          category: "Web app",
          title: "Ticksy",
          projectTitle: "Ticksy - Customer Support Ticketing System",
          projectChallenges: [
            "Complex User Management: Implementing a system that could handle multiple user roles and permissions effectively.",
            "Scalable Ticketing System: Designing a ticketing system that could scale with increasing support requests and users.",
            "Real-time Communication: Ensuring real-time updates and notifications for support agents and customers.",
            "Responsive UI/UX Design: Creating an intuitive interface that was responsive across all devices and screen sizes.",
          ],
          description:
            "Ticksy is a ticketing system for customer support and after-sales service for company products like website projects and ready-made themes.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
          image: "/images/abu-bakar-projects-images/Ticksy.png",
          demoUrl: "https://support.ticksy.com/",
          sourceUrl: "#",
        },
      ],
    },

    contact: {
      email: "abubakar041295@gmail.com",
      linkedin: "https://linkedin.com/in/abubakar-saddique-034231167",
      github: "https://github.com/Abu-Bakar-Dev",
    },
    skillsTools: {
      title: "Skills & Tools",
      tagline: "Learned by coding all night and debugging all day!",
      description:
        "As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, and Tailwind CSS. I'm also expanding my expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.",
      items: [
        { label: "HTML", iconKey: "html" },
        { label: "CSS", iconKey: "css" },
        { label: "JavaScript", iconKey: "javascript" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "Tailwind CSS", iconKey: "tailwind" },
        { label: "shadcn/ui", iconKey: "shadcn" },
        { label: "Material UI", iconKey: "mui" },
        { label: "Framer Motion", iconKey: "framer" },
        { label: "ReactJS", iconKey: "react" },
        { label: "Redux", iconKey: "redux" },
        { label: "NextJS", iconKey: "next" },
        { label: "NodeJS", iconKey: "node" },
        { label: "ExpressJS", iconKey: "express" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Supabase", iconKey: "supabase" },
        { label: "Docker", iconKey: "docker" },
        { label: "Vercel", iconKey: "vercel" },
        { label: "Git", iconKey: "git" },
        { label: "GitHub", iconKey: "github" },
        { label: "Postman", iconKey: "postman" },
        { label: "npm", iconKey: "npm" },
      ],
    },
  },

  {
    slug: "saddam-hussain",

    hero: {
      pill: "Full-Stack Engineer (React, Next.js)",
      name: "Saddam Hussain",
      mainTitle: "Full-Stack Engineer",
      subtitle: "React, Next.js & TypeScript (with Full-Stack Experience)",
      shortIntro:
        "Building clean, responsive, and user-focused web applications with React, Next.js, and modern UI tooling—shipping fast, maintainable interfaces that feel great to use.",
      techPills: [
        "Python",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "GitHub",
      ],
      ctaText: "View My Work",
      cvText: "CV Not Available",
      resumeUrl: "/resumes/saddam-hussain.pdf",
      resumeFileName: "saddam-hussain.pdf",
    },

    about: {
      name: "Saddam Hussain",
      roleTitle: "Front-End / Full-Stack Web Developer",
      imageSrc: "/images/laptop-bg.jpg",
      about1:
        "I build responsive, modern web interfaces with a focus on clean UI, smooth UX, and practical component architecture. I work confidently across React ecosystems to deliver scalable features and polished experiences.",
      about2:
        "I care about maintainable code and real-world delivery. I focus on performance, accessibility, and consistency so products stay fast, reliable, and easy to evolve with a growing team.",
      skillsLeft: [
        { name: "Python", percent: 95, iconKey: "palette" },
        { name: "Next", percent: 95, iconKey: "db" },
        { name: "Node", percent: 80, iconKey: "code" },
        { name: "GitHub", percent: 85, iconKey: "github" },
      ],
      skillsRight: [
        { name: "React", percent: 90, iconKey: "react" },
        { name: "TypeScript", percent: 88, iconKey: "brackets" },
        { name: "MongoDB", percent: 80, iconKey: "db" },
        { name: "Tailwind", percent: 82, iconKey: "palette" },
      ],
      experience: [
        {
          title: "Full-Stack Developer",
          company: "Your Company",
          date: "2024 - Present",
          bullets: [
            "Develop UI screens using React/Next.js and Tailwind with a component-driven approach.",
            "Collaborate with design and backend teams to ship reliable features with clean, maintainable code.",
          ],
        },
      ],
    },

    tech: {
      heading: "Technologies I Work With",
      description:
        "I'm proficient in modern technologies to build fast, reliable, and scalable web applications.",
      techs: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces.",
          iconKey: "layers",
        },
        {
          title: "Next.js",
          description: "The React framework for production.",
          iconKey: "layers",
        },
        {
          title: "TypeScript",
          description:
            "Strongly typed programming language that builds on JavaScript.",
          iconKey: "code",
        },
        {
          title: "Node.js",
          description:
            "JavaScript runtime for building backend services and APIs.",
          iconKey: "server",
        },
        {
          title: "MongoDB",
          description: "A flexible NoSQL database for modern applications.",
          iconKey: "db",
        },
        {
          title: "Tailwind CSS",
          description:
            "A utility-first CSS framework for rapid UI development.",
          iconKey: "palette",
        },
        {
          title: "Git & GitHub",
          description: "Version control and collaboration for teams.",
          iconKey: "github",
        },
        {
          title: "Figma",
          description: "Design collaboration and UI handoff workflows.",
          iconKey: "palette",
        },
      ],
    },

    projects: {
      heading: "My Projects",
      description:
        "Here are some of the projects I've worked on, showcasing my skills in various technologies.",
      items: [
        {
          id: "sweet-celebrationz",
          category: "Ecommerce",
          title: "Sweet Celebrationz",
          projectTitle: "Sweet Celebrationz - Ecommerce Bakery Website",
          projectChallenges: [
            "Performance requirements...",
            "Scalability...",
            "Database interaction...",
            "Third-party integration...",
          ],
          description:
            "An ecommerce bakery website featuring a modern storefront, product browsing, category-based listings, promotions, and a responsive design optimized for mobile shopping.",
          tags: ["React", "Next.js", "TypeScript"],
          image: "/images/saddam-projects-images/Sweet-Calbration.png",
          sourceUrl: "#",
        },
        {
          id: "halo-system",
          category: "Web app",
          title: "HALO System",
          projectTitle: "HALO System - Event Operations Platform",
          projectChallenges: [
            "Real-Time Data Processing: Implementing a system capable of handling real-time updates across various modules, including crowd monitoring and incident management.",
            "Scalability and Reliability.",
            "Geolocation Accuracy.",
            "Multi-Agency Integration: Creating a platform that allows seamless collaboration and data sharing between different stakeholders.",
            "User Interface and Experience: Designing an intuitive user interface that simplifies complex operations management for users with varying technical skills.",
          ],
          description:
            "An event operations platform built for managing incidents and daily operations. Includes an incident dashboard, activity logs, task tracking, map view, and live monitoring panels for real-time coordination.",
          tags: ["Django", "React", "Node.js", "Redux"],
          image: "/images/saddam-projects-images/Halo.jpg",
          sourceUrl: "#",
        },
        {
          id: "traxidy",
          category: "Web app",
          title: "Traxidy",
          projectTitle: "Traxidy - Project Management System",
          description:
            "A project management system for tracking issues and actions with structured workflows. Includes RAID logs, progress tracking, notifications, and reporting dashboards.",
          projectChallenges: [
            "User Experience Design: Crafting a user-friendly interface that simplifies complex project management tasks without compromising on functionality.",
            "Real-time Data Management: Ensuring that project updates, notifications, and reports are processed in real-time to facilitate immediate action and decision-making.",
            "Integration Flexibility: Making the application compatible with various project methodologies and existing planning tools.",
            "Scalability and Performance: Developing a responsive application that performs reliably under the load of managing multiple, large-scale projects simultaneously.",
          ],
          projectSolutions: [
            " Intuitive User Interface Design: Leveraging Vue.js and Vuetify, I developed a clean, material design interface that organizes project management tasks into an easily navigable format. This approach simplified complex processes, making project management more accessible and less time-consuming.",
            "Real-time Data Processing: Utilizing Nuxt.js for its server-side rendering and JavaScript for front-end dynamics, I ensured that all project data, including notifications and updates, are reflected in real time across the user’s dashboard, enhancing the decision-making process.",
            "Optimized Performance and Scalability: By employing efficient coding practices and leveraging the scalability of Nuxt.js, I ensured that Traxidy delivers fast loading times and smooth performance, even when handling extensive data and multiple projects simultaneously.I spearheaded the development of Traxidy, a cutting-edge project management and tracking web application designed to streamline the workflow of project managers and their teams. Traxidy was conceived to consolidate various project management functions into a single, intuitive interface, eliminating the need for multiple tools and spreadsheets. 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲𝘀: 𝟏. User Experience Design: Crafting a user-friendly interface that simplifies complex project management tasks without compromising on functionality. 𝟐. Real-time Data Management: Ensuring that project updates, notifications, and reports are processed in real-time to facilitate immediate action and decision-making. 𝟑. Integration Flexibility: Making the application compatible with various project methodologies and existing planning tools. Scalability and Performance: Developing a responsive application that performs reliably under the load of managing multiple, large-scale projects simultaneously. Solutions 𝟏. Intuitive User Interface Design: Leveraging Vue.js and Vuetify, I developed a clean, material design interface that organizes project management tasks into an easily navigable format. This approach simplified complex processes, making project management more accessible and less time-consuming. 𝟐. Real-time Data Processing: Utilizing Nuxt.js for its server-side rendering and JavaScript for front-end dynamics, I ensured that all project data, including notifications and updates, are reflected in real time across the user’s dashboard, enhancing the decision-making process. 𝟑. Optimized Performance and Scalability: By employing efficient coding practices and leveraging the scalability of Nuxt.js, I ensured that Traxidy delivers fast loading times and smooth performance, even when handling extensive data and multiple projects simultaneously.",
          ],
          tags: ["React", "Next.js", "TypeScript"],
          image: "/images/saddam-projects-images/Tarxidy.jpeg",
          sourceUrl: "#",
        },
        {
          id: "ready-hire",
          category: "Web app",
          title: "Ready Hire",
          projectTitle: "Ready Hire - Candidate Screening Platform",
          description:
            "A hiring platform to screen, evaluate, and certify candidates before hiring. Built around job tryouts, candidate profiles, structured evaluation, and recruiter-friendly dashboards.",
          projectChallenges: [
            "Performance Requirements: For efficient real-time HR services like job applications processing, Readyhire.io needed high-performance capabilities to ensure smooth user interactions on their web application.",
            "Scalability: Anticipating user growth and expanded services, Readyhire.io required a scalable design to handle increased traffic and data without performance loss.",
            "Database Interaction: The site needed a robust database system for securely managing large volumes of sensitive HR data and facilitating quick access.",
            "Integration with Other Services: Readyhire.io faced the challenge of integrating seamlessly with various third-party services and APIs for a comprehensive HR solution.",
            " Developer Proficiency: With a team having varied skills in server-side languages, selecting a technology stack that aligned with their proficiency was crucial for Readyhire.io",
          ],
          tags: ["React", "Next.js", "TypeScript"],
          image: "/images/saddam-projects-images/Ready-Hire.jpg",
          sourceUrl: "#",
        },
        {
          id: "banyo-pos",
          category: "Web app",
          title: "Banyo POS",
          projectTitle: "Banyo POS - Point of Sale System",
          projectChallenges: [
            "Complex Data Management: Implementing a system capable of handling complex data interactions and real-time inventory management.",
            "User Experience Design: Developing an intuitive and responsive user interface that could accommodate the extensive features of the POS system without overwhelming users.",
            "Security and Scalability: Ensuring the security of transactions and data while also providing a system that could scale with Banyo Limited’s growth.",
            "Integration and Deployment Complexity: Integrating the application with various payment methods and deploying the system on AWS servers for high availability and reliability.",
          ],
          projectSolutions: [],
          description:
            "A multi-purpose POS suite for managing products, invoices, customer records, and sales workflows with a clean dashboard and fast day-to-day operations.",
          tags: ["Django", "React", "Next.js", "Postgres"],
          image: "/images/saddam-projects-images/POS.jpg",
          sourceUrl: "#",
        },
      ],
    },

    contact: {
      email: "saddam@gmail.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com/saddam-hussain",
    },

    skillsTools: {
      title: "Skills & Tools",
      tagline: "Learned by coding all night and debugging all day!",
      description:
        "I build scalable, high-performance applications with modern frontend and backend technologies while maintaining strong practices in infrastructure, version control, and deployment.",

      items: [
        // ⭐ Core Stack (MOST IMPORTANT — recruiters scan this first)
        { label: "Python", iconKey: "python" },
        { label: "ReactJS", iconKey: "react" },
        { label: "NextJS", iconKey: "next" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "NodeJS", iconKey: "node" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Tailwind CSS", iconKey: "tailwind" },

        // 🎨 UI / Frontend Tools
        { label: "Material UI", iconKey: "mui" },
        { label: "Framer Motion", iconKey: "framer" },
        { label: "shadcn/ui", iconKey: "shadcn" },

        // ⚙️ Backend
        { label: "ExpressJS", iconKey: "express" },

        // 🚀 Infrastructure / DevOps  ✅ (NEW)
        { label: "Docker", iconKey: "docker" },
        { label: "Debian", iconKey: "debian" },
        { label: "CentOS", iconKey: "centos" },
        { label: "Vercel", iconKey: "vercel" },

        // 🧰 Tools
        { label: "Git", iconKey: "git" },
        { label: "GitHub", iconKey: "github" },
        { label: "Postman", iconKey: "postman" },
        { label: "npm", iconKey: "npm" },
      ],
    },
  },

  {
    slug: "arslan-syed",

    hero: {
      pill: "Full-Stack Web Developer",
      name: "Arslan Syed",
      mainTitle: "Full-Stack Developer",
      subtitle: "React, Next.js, Node.js & Modern Web Apps",
      shortIntro:
        "Building reliable, scalable, and user-focused web applications using modern JavaScript frameworks and clean engineering practices.",
      techPills: [
        "Python",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Docker",
      ],
      ctaText: "View My Work",
      cvText: "CV Available on Request",
      // resumeUrl intentionally left empty
      // resumeFileName intentionally left empty
    },

    about: {
      name: "Arslan Syed",
      roleTitle: "Full-Stack Web Developer",
      imageSrc: "/images/arslan-projects-images/about.jpg",
      about1:
        "I am a full-stack web developer with experience building modern web applications from frontend to backend. I focus on writing clean, maintainable code and delivering practical solutions that solve real business problems.",
      about2:
        "I enjoy working across the stack, collaborating with teams, and continuously improving performance, UX, and code quality. My goal is to build products that are scalable, secure, and easy to maintain.",
      skillsLeft: [
        { name: "React", percent: 90, iconKey: "react" },
        { name: "TypeScript", percent: 80, iconKey: "brackets" },
        { name: "Node.js", percent: 80, iconKey: "code" },
        { name: "GitHub", percent: 85, iconKey: "github" },
      ],
      skillsRight: [
        { name: "Next.js", percent: 85, iconKey: "db" },
        { name: "Docker", percent: 70, iconKey: "docker" },
        { name: "Python", percent: 75, iconKey: "python" },
        { name: "Tailwind", percent: 80, iconKey: "palette" },
      ],
      experience: [
        {
          title: "Full-Stack Developer",
          company: "Demo Tech Solutions",
          date: "2024 – Present",
          bullets: [
            "Develop full-stack web applications using React, Next.js, and Node.js.",
            "Collaborate with designers and backend teams to ship stable and scalable features.",
            "Improve application performance, UX, and code quality through best practices.",
          ],
        },
      ],
    },

    tech: {
      heading: "Technologies I Work With",
      description:
        "A modern stack I use to build scalable and maintainable web applications.",
      techs: [
        {
          title: "React",
          description: "Component-based UI development.",
          iconKey: "layers",
        },
        {
          title: "Next.js",
          description: "Production-ready React framework.",
          iconKey: "layers",
        },
        {
          title: "TypeScript",
          description: "Type-safe JavaScript for large applications.",
          iconKey: "code",
        },
        {
          title: "Node.js",
          description: "Backend runtime for scalable APIs.",
          iconKey: "server",
        },
        {
          title: "MongoDB",
          description: "NoSQL database for modern apps.",
          iconKey: "db",
        },
        {
          title: "Tailwind CSS",
          description: "Utility-first styling framework.",
          iconKey: "palette",
        },
      ],
    },

    projects: {
      heading: "My Projects",
      description:
        "Here are some of the projects I've worked on, showcasing my skills in various technologies.",
      items: [
        {
          id: "banyo-pos",
          category: "Web app",
          title: "Banyo POS",
          projectTitle: "Banyo POS - Point of Sale System",
          projectChallenges: [
            "Complex Data Management: Implementing a system capable of handling complex data interactions and real-time inventory management.",
            "User Experience Design: Developing an intuitive and responsive user interface that could accommodate the extensive features of the POS system without overwhelming users.",
            "Security and Scalability: Ensuring the security of transactions and data while also providing a system that could scale with Banyo Limited’s growth.",
            "Integration and Deployment Complexity: Integrating the application with various payment methods and deploying the system on AWS servers for high availability and reliability.",
          ],
          projectSolutions: [],
          description:
            "A multi-purpose POS suite for managing products, invoices, customer records, and sales workflows with a clean dashboard and fast day-to-day operations.",
          tags: ["Django", "React", "Next.js", "Postgres"],
          image: "/images/arslan-projects-images/POS.jpg",
          sourceUrl: "#",
        },
        {
          id: "aimyable-dashboard",
          category: "Web app",
          title: "Aimyable Dashboard",
          projectTitle: "Aimyable Dashboard - Product Analytics Platform",
          projectChallenges: [
            "Data Visualization: Creating intuitive and responsive dashboards that display complex product analytics effectively.",
            "User Access Control: Implementing role-based access control to ensure data security and appropriate permissions.",
            "Performance Optimization: Optimizing dashboard performance for large datasets and high concurrent users.",
          ],
          projectSolutions: [
            "Implemented a responsive dashboard using React and Next.js with Tailwind CSS for styling.",
            "Developed a robust authentication system with role-based access control using JWT tokens.",
            "Optimized data fetching and rendering to handle large datasets efficiently.",
          ],
          description:
            "A product analytics dashboard designed to monitor key metrics and performance in one place with role-based access.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
          image: "/images/arslan-projects-images/Aimyable.png",
          sourceUrl: "#",
        },
      ],
    },

    contact: {
      email: "arslan.syed@gmail.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com/arslan-syed",
    },

    skillsTools: {
      title: "Skills & Tools",
      tagline: "Learned by coding all night and debugging all day!",
      description:
        "I build scalable, high-performance applications with modern frontend and backend technologies while maintaining strong practices in infrastructure, version control, and deployment.",

      items: [
        // ⭐ Core Stack (MOST IMPORTANT — recruiters scan this first)
        { label: "Python", iconKey: "python" },
        { label: "ReactJS", iconKey: "react" },
        { label: "NextJS", iconKey: "next" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "NodeJS", iconKey: "node" },

        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Tailwind CSS", iconKey: "tailwind" },

        // 🎨 UI / Frontend Tools
        { label: "Material UI", iconKey: "mui" },
        { label: "Framer Motion", iconKey: "framer" },
        { label: "shadcn/ui", iconKey: "shadcn" },

        // ⚙️ Backend
        { label: "ExpressJS", iconKey: "express" },

        // 🚀 Infrastructure / DevOps  ✅ (NEW)
        { label: "Docker", iconKey: "docker" },
        { label: "Debian", iconKey: "debian" },
        { label: "CentOS", iconKey: "centos" },
        { label: "Vercel", iconKey: "vercel" },

        // 🧰 Tools
        { label: "Git", iconKey: "git" },
        { label: "GitHub", iconKey: "github" },
        { label: "Postman", iconKey: "postman" },
        { label: "npm", iconKey: "npm" },
      ],
    },
  },
];

/* -------------------- getters -------------------- */

export function getAllUsers() {
  return USERS;
}

export function getUserByParam(username: string) {
  const slug = decodeURIComponent(username).toLowerCase();
  return USERS.find((u) => u.slug.toLowerCase() === slug) ?? null;
}
