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
    | "centos"
    | "layers"
    | "code"
    | "server"
    | "db"
    | "palette"
    | "brackets";

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
  iconKey:
    | "layers"
    | "code"
    | "server"
    | "db"
    | "palette"
    | "github"
    | "docker";
};

export type Project = {
  id: string;
  category:
    | "Web app"
    | "Ecommerce"
    | "Mobile app"
    | "Library"
    | "AI SaaS"
    | "Social Platform";
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
    slug: "saddam-hussain",

    hero: {
      pill: "Senior Full Stack Engineer",
      name: "Saddam Hussain",
      mainTitle: "Senior Full Stack Engineer",
      subtitle: "Python | JavaScript | Agentic AI",
      shortIntro:
        "Senior full-stack engineer with 8+ years building and shipping production web applications across Python, Django, FastAPI, TypeScript, React, Next.js, and Node.js, with hands-on experience delivering AI-powered SaaS and multi-agent automation.",
      techPills: [
        "Python",
        "Django",
        "FastAPI",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Agentic AI",
      ],
      ctaText: "View My Work",
      cvText: "Download CV",
      resumeUrl: "/resumes/saddam-hussain.pdf",
      resumeFileName: "saddam-hussain.pdf",
    },

    about: {
      name: "Saddam Hussain",
      roleTitle: "Senior Full Stack Engineer",
      imageSrc: "/images/laptop-bg.jpg",
      about1:
        "I am a senior full-stack engineer with 8+ years of experience building production web applications across Python, Django, FastAPI, TypeScript, React, Next.js, and Node.js. I work across backend services, data modeling, APIs, and polished frontend workflows.",
      about2:
        "My recent work includes AI-powered SaaS, document processing, multi-agent automation, WebSocket-based RPA orchestration, authentication and RBAC, PostgreSQL and MongoDB, Docker, CI/CD, and AWS. I also use AI coding agents such as Claude Code and Codex for development while reviewing changes with type checks and tests.",
      skillsLeft: [
        { name: "Python", percent: 95, iconKey: "palette" },
        { name: "Next.js", percent: 95, iconKey: "db" },
        { name: "Node.js", percent: 80, iconKey: "code" },
        { name: "GitHub", percent: 85, iconKey: "github" },
      ],
      skillsRight: [
        { name: "React", percent: 90, iconKey: "react" },
        { name: "TypeScript", percent: 88, iconKey: "brackets" },
        { name: "MongoDB", percent: 80, iconKey: "db" },
        { name: "Tailwind CSS", percent: 82, iconKey: "palette" },
      ],
      experience: [
        {
          title: "Senior Full Stack Engineer",
          company: "Stech Experts LTD | Remote",
          date: "Apr 2025 - Present",
          bullets: [
            "Core full-stack engineer on Aimyable, an AI-powered accounts payable automation SaaS built with Django DRF, Next.js, TypeScript, PostgreSQL, Docker, and AWS.",
            "Built a multi-agent workflow engine with orchestration, database, and RPA agents for multi-step invoice automation.",
            "Worked on invoice ingestion and structured data extraction using Google Cloud Vision API, plus WebSocket-based orchestration with a Windows RPA client.",
            "Built authentication, invitation flows, RBAC, tenant provisioning, onboarding, REST APIs, and PostgreSQL data models.",
          ],
        },
        {
          title: "Senior Full Stack Engineer / Team Lead",
          company: "Inner Machinations (Silicon Valley) | Remote",
          date: "Mar 2024 - Apr 2025",
          bullets: [
            "Led development of Udu.com and a team of five senior developers in an Agile process.",
            "Built and optimized the TypeScript/React/Next.js frontend, reducing page load times by around 25% through component and API improvements.",
            "Developed Node.js APIs, moved critical operations to Next.js Server Actions, and customized Clerk authentication for users and organizations.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Banyo Ltd | Lahore",
          date: "Apr 2023 - Mar 2024",
          bullets: [
            "Built a POS and inventory web application with a Django backend and Next.js frontend.",
            "Implemented real-time inventory management with Django REST Framework and MongoDB and built a responsive server-rendered POS UI.",
            "Set up AWS EC2 infrastructure and GitHub Actions CI/CD to support deployment and growth.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "One Clout | Lahore",
          date: "Jul 2022 - Aug 2023",
          bullets: [
            "Built TypeScript backend services in Node.js and worked across full-stack projects using GraphQL and REST APIs.",
            "Integrated MapBox and satellite mapping features and built React applications using Redux-Saga.",
            "Set up PostgreSQL deployment and GitHub-based CI/CD workflows.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Smart Venture Technologies | Lahore",
          date: "Jul 2020 - Aug 2022",
          bullets: [
            "Delivered full-stack development across web applications using modern frameworks, APIs, SQL, PostgreSQL, Docker, and GitHub CI/CD.",
            "Worked with Ant Design and Material UI to improve application functionality, delivery efficiency, and user experience.",
          ],
        },
        {
          title: "Web Developer",
          company: "Linked Matrix | Lahore",
          date: "Dec 2018 - Aug 2020",
          bullets: [
            "Developed a PostgreSQL database for high-volume HR data with secure transactions and fast retrieval.",
            "Built responsive frontend interfaces using React.",
          ],
        },
      ],
    },

    tech: {
      heading: "Technologies I Work With",
      description:
        "I work across modern frontend, backend, database, cloud, DevOps, and AI technologies to build production-ready applications and automation systems.",
      techs: [
        {
          title: "Python",
          description:
            "Backend development, automation, data processing, and AI integrations.",
          iconKey: "code",
        },
        {
          title: "Django / DRF",
          description:
            "Production APIs, authentication, RBAC, onboarding, and service-layer backend development.",
          iconKey: "server",
        },
        {
          title: "FastAPI",
          description:
            "Python API development for fast, typed backend services.",
          iconKey: "server",
        },
        {
          title: "React / Next.js",
          description:
            "Responsive frontend applications, SSR, Server Actions, and production UI workflows.",
          iconKey: "layers",
        },
        {
          title: "TypeScript / Node.js",
          description:
            "Typed frontend and backend development, APIs, integrations, and application services.",
          iconKey: "code",
        },
        {
          title: "PostgreSQL / MongoDB",
          description:
            "Relational and NoSQL data modeling for scalable production applications.",
          iconKey: "db",
        },
        {
          title: "Docker / CI/CD / AWS",
          description:
            "Containerization, GitHub Actions pipelines, cloud deployment, and production infrastructure.",
          iconKey: "github",
        },
        {
          title: "Agentic AI",
          description:
            "LLM-powered SaaS, multi-agent workflows, OpenAI integrations, document processing, and AI-assisted development.",
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
            "An ecommerce bakery storefront focused on responsive, user-friendly shopping experiences, with product browsing, category-based listings, promotions, and reusable frontend components. The project reflects my production experience with React, Next.js, TypeScript, and responsive web interfaces.",
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
            "An event operations platform for incident management and real-time coordination, with dashboards, activity tracking, task workflows, live monitoring, and map-based views. The project reflects my full-stack experience with React, API-driven applications, data-intensive workflows, and mapping integrations.",
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
            "A project management and tracking platform designed around structured issue and action workflows, RAID logs, progress tracking, notifications, and reporting dashboards. It reflects my experience building scalable React applications, backend APIs, real-time data flows, PostgreSQL-backed systems, and production CI/CD workflows.",
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
            "A candidate screening and evaluation platform with job tryouts, candidate profiles, structured assessments, recruiter dashboards, and secure handling of HR data. It aligns with my experience building responsive React interfaces and PostgreSQL-backed systems for large volumes of sensitive HR information.",
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
            "A production POS and inventory web application built with a Django backend and Next.js frontend. I implemented REST APIs, real-time inventory management with Django REST Framework and MongoDB, a responsive server-rendered POS UI, AWS EC2 infrastructure, and GitHub Actions CI/CD.",
          tags: ["Django", "React", "Next.js", "Postgres"],
          image: "/images/saddam-projects-images/POS.jpg",
          sourceUrl: "#",
        },
      ],
    },

    contact: {
      email: "saddamhussainuos04@gmail.com",
      linkedin: "http://www.linkedin.com/in/senior-full-stack-developer",
      github: "https://github.com/saddam-hussain",
    },

    skillsTools: {
      title: "Skills & Tools",
      tagline: "Full-stack engineering, AI automation, and production delivery",
      description:
        "I build and ship scalable applications across Python, JavaScript/TypeScript, React/Next.js, Node.js, databases, AI integrations, and cloud infrastructure.",

      items: [
        // Core stack
        { label: "Python", iconKey: "python" },
        { label: "ReactJS", iconKey: "react" },
        { label: "NextJS", iconKey: "next" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "NodeJS", iconKey: "node" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Tailwind CSS", iconKey: "tailwind" },

        // Frontend
        { label: "Material UI", iconKey: "mui" },

        // Backend
        { label: "ExpressJS", iconKey: "express" },

        // Infrastructure / DevOps
        { label: "Docker", iconKey: "docker" },

        // Version control
        { label: "Git", iconKey: "git" },
        { label: "GitHub", iconKey: "github" },
      ],
    },
  },
  {
    slug: "arslan-syed",

    hero: {
      pill: "Senior Full-Stack Engineer (Python, Django, React & AI)",
      name: "Arslan Syed",
      mainTitle: "Senior Full Stack Engineer",
      subtitle: "Python, Django, React, Next.js & AI",
      shortIntro:
        "Full-stack engineer with 8+ years building and shipping production web applications and SaaS platforms across Python, Django, FastAPI, TypeScript, React, Next.js, Node.js, databases, cloud infrastructure, and production AI workflows.",
      techPills: [
        "Python",
        "Django",
        "React",
        "Next.js",
        "TypeScript",
        "Agentic AI",
      ],
      ctaText: "View My Work",
      cvText: "CV Available on Request",
      // resumeUrl intentionally left empty
      // resumeFileName intentionally left empty
    },

    about: {
      name: "Arslan Syed",
      roleTitle: "Senior Full Stack Engineer",
      imageSrc: "/images/arslan-projects-images/about.jpg",
      about1:
        "I am a senior full-stack engineer with 8+ years of experience building production web applications and SaaS platforms. I work across Python, Django, FastAPI, Node.js, TypeScript, React, and Next.js, with strong experience designing APIs, data models, authentication flows, and scalable frontend workflows.",
      about2:
        "My recent work includes AI-powered accounts-payable automation, multi-agent systems, document processing with Google Cloud Vision, RPA orchestration, and production deployments using PostgreSQL, MongoDB, Docker, AWS, Azure, GCP, and CI/CD pipelines. I use AI coding agents such as Claude Code and Codex while reviewing changes with type checks and tests.",
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
          title: "Senior Full Stack Engineer",
          company: "Aimyable, Inc.",
          date: "Apr 2025 – Present",
          bullets: [
            "Core full-stack engineer on an AI-powered accounts-payable automation SaaS built with Django DRF, Next.js, TypeScript, PostgreSQL, Docker, and AWS.",
            "Built multi-agent invoice automation workflows, including orchestration across database operations, specialized AI agents, and RPA-driven UI actions over WebSockets.",
            "Worked on invoice ingestion and document data extraction using Google Cloud Vision OCR, and built authentication, RBAC, onboarding, provisioning, REST APIs, and normalized PostgreSQL schemas.",
          ],
        },
        {
          title: "Senior Full Stack Engineer / Team Lead",
          company: "Inner Machinations (Silicon Valley)",
          date: "Mar 2024 – Apr 2025",
          bullets: [
            "Led development of Udu.com, a topic-based communication platform, managing a team of five senior developers in an Agile process.",
            "Built and optimized the TypeScript and React/Next.js frontend, reducing page load times by around 25% through component and API improvements.",
            "Developed Node.js APIs, moved critical operations to Next.js Server Actions, customized Clerk authentication, and built posting, commenting, media, and search features.",
          ],
        },
        {
          title: "Senior Full Stack Developer",
          company: "Meshlogix Solutions",
          date: "Nov 2023 – Nov 2024",
          bullets: [
            "Integrated the Bland AI voice agent into backend workflows to automate review collection.",
            "Worked across a hybrid Node.js and Python/Django backend covering integrations, data processing, and core application services.",
            "Implemented server-side authentication with NextAuth.js and improved reliability through caching, load balancing, and Docker containerization.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Banyo Ltd",
          date: "Apr 2023 – Mar 2024",
          bullets: [
            "Built a POS and inventory web application with a Django backend and Next.js frontend, including REST APIs across core product modules.",
            "Implemented real-time inventory management with Django REST Framework and MongoDB, improving stock and sales synchronization.",
            "Built a responsive Next.js POS interface, deployed infrastructure on AWS EC2, and automated deployments with GitHub Actions CI/CD.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Bright Byte Solutions",
          date: "Jan 2018 – Apr 2023",
          bullets: [
            "Built TypeScript backend services in Node.js and worked across full-stack projects using GraphQL and REST APIs.",
            "Developed React applications with Redux-Saga and integrated MapBox and satellite mapping features.",
            "Set up PostgreSQL deployments and GitHub-based CI/CD to improve the release process.",
          ],
        },
      ],
    },

    tech: {
      heading: "Technologies I Work With",
      description:
        "A production-focused full-stack toolkit spanning frontend, backend, databases, AI, cloud infrastructure, testing, and delivery.",
      techs: [
        {
          title: "Python & Django",
          description:
            "Backend development with Python, Django, Django REST Framework, and production REST APIs.",
          iconKey: "code",
        },
        {
          title: "FastAPI",
          description:
            "Python API development for modern, high-performance backend services.",
          iconKey: "server",
        },
        {
          title: "React & Next.js",
          description:
            "Production web applications, server-side rendering, Server Actions, and modern React workflows.",
          iconKey: "layers",
        },
        {
          title: "TypeScript & Node.js",
          description:
            "Type-safe frontend and backend development with Node.js, Express, REST, and GraphQL APIs.",
          iconKey: "code",
        },
        {
          title: "PostgreSQL & MongoDB",
          description:
            "Relational and NoSQL data modeling with PostgreSQL, MongoDB, MySQL, SQLite, Redis, and Supabase.",
          iconKey: "db",
        },
        {
          title: "AI & Multi-Agent Systems",
          description:
            "LLM and multi-agent workflows, OpenAI API integrations, document processing, and AI-assisted development.",
          iconKey: "server",
        },
        {
          title: "Docker & CI/CD",
          description:
            "Containerized applications and automated delivery workflows using Docker and GitHub Actions.",
          iconKey: "docker",
        },
        {
          title: "AWS, Azure & GCP",
          description:
            "Cloud deployment and infrastructure experience across AWS, Azure, and Google Cloud.",
          iconKey: "server",
        },
      ],
    },

    projects: {
      heading: "My Projects",
      description:
        "Selected production systems covering AI-powered automation, SaaS workflows, POS operations, inventory management, APIs, and cloud deployment.",
      items: [
        {
          id: "banyo-pos",
          category: "Web app",
          title: "Banyo POS",
          projectTitle: "Banyo POS - Point of Sale & Inventory System",
          projectChallenges: [
            "Building a broad POS and inventory platform with reliable data flows across products, stock, sales, and operational modules.",
            "Keeping inventory and sales data synchronized in real time while supporting responsive day-to-day POS workflows.",
            "Designing a frontend that remained responsive and practical for daily point-of-sale operations.",
            "Deploying and maintaining the application on cloud infrastructure with repeatable automated releases.",
          ],
          projectSolutions: [
            "Built the backend with Django and Django REST Framework, exposing REST APIs across the product's core modules.",
            "Implemented real-time inventory management with MongoDB to improve stock and sales synchronization latency and accuracy.",
            "Built the responsive POS interface in Next.js using server-side rendering.",
            "Set up AWS EC2 infrastructure and a GitHub Actions CI/CD pipeline to remove manual deployment steps.",
          ],
          description:
            "A production POS and inventory web application built with a Django backend and Next.js frontend. The system covers REST APIs across core modules, real-time inventory management with Django REST Framework and MongoDB, a responsive server-rendered POS interface, AWS EC2 deployment, and automated CI/CD with GitHub Actions.",
          tags: [
            "Django",
            "DRF",
            "Next.js",
            "MongoDB",
            "AWS",
            "GitHub Actions",
          ],
          image: "/images/arslan-projects-images/POS.jpg",
          sourceUrl: "#",
        },
        {
          id: "aimyable-dashboard",
          category: "AI SaaS",
          title: "Aimyable",
          projectTitle:
            "Aimyable - AI-Powered Accounts Payable Automation SaaS",
          projectChallenges: [
            "Coordinating multi-step invoice automation across specialized AI agents, database operations, and RPA-driven UI actions.",
            "Extracting structured invoice data from documents so information could flow into the system without manual entry.",
            "Supporting secure multi-tenant onboarding, provisioning, role-based access, invitations, and machine-to-machine authentication.",
            "Keeping backend services, data models, frontend workflows, and Windows RPA execution synchronized in a production SaaS environment.",
          ],
          projectSolutions: [
            "Built a multi-agent workflow engine with specialized Step, DB, and RPA agents for multi-step invoice automation.",
            "Worked on invoice ingestion and data extraction using the Google Cloud Vision Python SDK to OCR invoice documents and parse structured fields.",
            "Built an orchestration layer connecting database operations with RPA-driven UI actions over WebSockets for real-time task dispatch and status updates.",
            "Implemented invitation-based registration, token validation, RBAC, user-tenant linkage, onboarding, password gating, session refresh, machine-to-machine authentication, normalized PostgreSQL schemas, and core REST APIs.",
            "Contributed to the Next.js onboarding and admin experience using Material UI and React Hook Form, with the platform containerized in Docker and deployed on AWS.",
          ],
          description:
            "An AI-powered accounts-payable automation SaaS built with Django DRF, Next.js, TypeScript, PostgreSQL, Docker, and AWS. The platform combines multi-agent orchestration, invoice OCR and document processing, database automation, RPA-driven UI actions over WebSockets, multi-tenant authentication and RBAC, and self-service onboarding workflows to automate accounts-payable tasks end to end.",
          tags: [
            "Django DRF",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "AWS",
            "Agentic AI",
            "Google Cloud Vision",
            "WebSockets",
          ],
          image: "/images/arslan-projects-images/aimyable.png",
          sourceUrl: "#",
        },
        {
          id: "udu-platform",
          category: "Social Platform",
          title: "UDU",
          projectTitle:
            "UDU - Community Platform for Creating, Connecting & Contributing",

          projectChallenges: [
            "Designing a platform where users can easily create UDUs around topics and interests that matter to them.",
            "Building a seamless social experience that allows users to discover UDUs, connect with others, and build meaningful communities.",
            "Creating contribution workflows that help users share content with relevant audiences while keeping interactions simple and intuitive.",
            "Implementing secure and flexible authentication with multiple sign-in options while maintaining a smooth onboarding experience.",
          ],

          projectSolutions: [
            "Built a centralized platform that allows users to create and manage UDUs around their interests, topics, and communities.",
            "Implemented user connection and community features that enable users to discover UDUs, connect with people, and expand their network.",
            "Developed contribution workflows that allow users to publish and share content with audiences interested in specific UDUs.",
            "Implemented secure authentication with username/email and password login, password recovery, email-code authentication, Google sign-in, and account registration.",
            "Created a responsive and user-friendly interface focused on the platform's three core experiences: Create, Connect, and Contribute.",
          ],

          description:
            "UDU is a community-driven social platform designed around three core experiences: Create, Connect, and Contribute. Users can create UDUs based on topics that matter to them, connect their UDUs with others to build communities and relationships, and contribute content to reach relevant audiences. The platform includes secure account authentication, social login, user onboarding, community discovery, and content contribution workflows within a modern and responsive web experience.",

          tags: [
            "Web Application",
            "Social Platform",
            "Community Platform",
            "Authentication",
            "Google OAuth",
            "User Onboarding",
            "Content Sharing",
            "Responsive UI",
          ],

          image: "/images/arslan-projects-images/udu.png",
          sourceUrl: "#",
        },
      ],
    },

    contact: {
      email: "arslan2591@gmail.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com/arslan-syed",
    },

    skillsTools: {
      title: "Skills & Tools",
      tagline: "Building production software across web, cloud, and AI.",
      description:
        "I build and ship production full-stack applications across Python and JavaScript ecosystems, with experience in APIs, databases, authentication, AI automation, cloud infrastructure, containers, testing, and CI/CD.",

      items: [
        // Core languages & application stack
        { label: "Python", iconKey: "python" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "JavaScript", iconKey: "code" },
        { label: "ReactJS", iconKey: "react" },
        { label: "NextJS", iconKey: "next" },
        { label: "Django / DRF", iconKey: "python" },
        { label: "FastAPI", iconKey: "express" },
        { label: "NodeJS", iconKey: "node" },
        { label: "ExpressJS", iconKey: "express" },

        // Databases & APIs
        { label: "PostgreSQL", iconKey: "db" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Redis", iconKey: "db" },
        { label: "Supabase", iconKey: "db" },
        { label: "REST APIs", iconKey: "code" },
        { label: "GraphQL APIs", iconKey: "code" },

        // Frontend
        { label: "Redux", iconKey: "react" },
        { label: "Material UI", iconKey: "mui" },
        { label: "Tailwind CSS", iconKey: "tailwind" },

        // AI
        { label: "Agentic AI", iconKey: "code" },
        { label: "Generative AI", iconKey: "code" },
        { label: "OpenAI API", iconKey: "code" },
        { label: "Claude Code", iconKey: "code" },
        { label: "Codex", iconKey: "code" },
        { label: "Google Cloud Vision", iconKey: "code" },

        // Cloud & DevOps
        { label: "Docker", iconKey: "docker" },
        { label: "AWS", iconKey: "server" },
        { label: "Azure", iconKey: "server" },
        { label: "GCP", iconKey: "server" },
        { label: "GitHub Actions", iconKey: "github" },

        // Tools
        { label: "Git", iconKey: "git" },
        { label: "GitHub", iconKey: "github" },
        { label: "Postman", iconKey: "postman" },
        { label: "npm", iconKey: "npm" },
      ],
    },
  },
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
          image: "/images/abu-bakar-projects-images/aimyable.png",
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
    slug: "Taha-bin-imran",

    hero: {
      pill: "Full-Stack Engineer (React, Next.js)",
      name: "Taha Bin Imran",
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
      resumeUrl: "/resumes/taha-bin-imran.pdf",
      resumeFileName: "taha-bin-imran.pdf",
    },

    about: {
      name: "Taha Bin Imran",
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
      email: "taha@gmail.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com/taha-bin-imran",
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
    slug: "syed-farhan-saeed",

    hero: {
      pill: "Frontend Engineer (React, Next.js)",
      name: "Syed Farhan Saeed",
      mainTitle: "Frontend Engineer",
      subtitle: "React, Next.js & TypeScript (with Full-Stack Experience)",
      shortIntro:
        "Crafting innovative, high-performance web applications with React, Next.js, and Node.js—turning ideas into reality through modern technologies and clean code.",
      techPills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MUI"],
      ctaText: "View My Work",
      cvText: "CV Not Available",
      resumeUrl: "/resumes/syed-farhan-saeed.pdf",
      resumeFileName: "syed-farhan-saeed.pdf",
    },

    about: {
      name: "Syed Farhan Saeed",
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
      email: "farhan@gmail.com",
      linkedin: "https://linkedin.com/in/syed-farhan-saeed-034231167",
      github: "https://github.com/Syed-Farhan-Saeed",
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
];

/* -------------------- getters -------------------- */

export function getAllUsers() {
  return USERS;
}

export function getUserByParam(username: string) {
  const slug = decodeURIComponent(username).toLowerCase();
  return USERS.find((u) => u.slug.toLowerCase() === slug) ?? null;
}
