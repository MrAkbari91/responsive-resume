export interface TechTag {
  name: string;
  iconClass: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string;
  tech: TechTag[];
  iconClass: string;
  accentClass: string; // 'indigo', 'sky', 'rose', 'amber', 'emerald'
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  tags: string[];
}

export interface Language {
  name: string;
  level: "Professional" | "Native";
}

export interface SkillItem {
  name: string;
  iconClass: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  verifyUrl: string;
  iframeUrl: string;
}

export interface Partnership {
  name: string;
  url: string;
  iconClass: string;
  hoverBg: string;
  hoverTextClass: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
    linkedinUsername: string;
    github: string;
    githubUsername: string;
    portfolio: string;
    portfolioUrl: string;
    codepen: string;
    codepenUsername: string;
    address: string;
    summary: string;
    stats: { value: string; label: string }[];
  };
  experiences: Experience[];
  skills: SkillGroup[];
  education: Education[];
  languages: Language[];
  certifications: Certification[];
  partnerships: Partnership[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Dhruv Akbari",
    title: "Senior Full Stack Developer & eCommerce Architect",
    email: "dhruvakbari303@gmail.com",
    phone: "+91 84606 21361",
    whatsapp: "+91 84606 21361",
    linkedin: "https://linkedin.com/in/dhruvakbari",
    linkedinUsername: "dhruvakbari",
    github: "https://github.com/MrAkbari91",
    githubUsername: "MrAkbari91",
    portfolio: "dhruv-akbari-resume.netlify.app",
    portfolioUrl: "https://dhruv-akbari-resume.netlify.app",
    codepen: "dhruvakbari",
    codepenUsername: "dhruvakbari",
    address: "Surat, Gujarat, India",
    summary: "Results-driven Senior Full Stack Developer with 5+ years of experience architecting scalable web applications and enterprise eCommerce solutions. Proven expertise in Shopify, WordPress, React.js, and Next.js ecosystems. Led cross-functional teams delivering 70+ production solutions for international clients. Specialized in CRO, headless CMS architecture, REST/GraphQL API integration, and AI-assisted development workflows that improved team productivity by 30%+.",
    stats: [
      { value: "5+ Years", label: "Development Exp" },
      { value: "70+", label: "Projects Live" },
      { value: "30%+", label: "Team Productivity" }
    ]
  },
  experiences: [
    {
      company: "Global Surat · Surat, Gujarat",
      position: "Team Leader — Shopify",
      duration: "Apr 2026 — Present",
      location: "Surat, Gujarat",
      iconClass: "fas fa-crown",
      accentClass: "indigo",
      responsibilities: [
        "Lead the end-to-end delivery of <strong>Shopify Plus solutions</strong> for enterprise and high-growth eCommerce brands, overseeing architecture, development, performance optimization, and deployment.",
        "Drive <strong>Conversion Rate Optimization (CRO)</strong> initiatives through data-driven experimentation, resulting in measurable improvements in conversion rates, average order value, and online revenue.",
        "Architect scalable Shopify ecosystems, including <strong>custom themes, private applications, automation workflows</strong>, and third-party integrations aligned with business objectives.",
        "Own technical decision-making across projects, establishing <strong>development standards, code review processes</strong>, and performance benchmarks.",
        "Implement advanced integrations using <strong>Shopify Admin APIs, GraphQL, webhooks</strong>, and checkout extensibility solutions, enabling seamless operational workflows.",
        "Lead <strong>GoKwik checkout implementations</strong> and payment integrations to optimize customer acquisition and checkout completion rates.",
        "Mentor and manage developers, improving engineering efficiency, code quality, and project delivery timelines.",
        "Collaborate directly with stakeholders and leadership teams to translate business goals into commerce solutions."
      ],
      achievements: "Increased team productivity by <strong class=\"text-indigo-950 dark:text-indigo-200 font-bold\">30%+</strong> through AI-assisted development practices, workflow automation, and process improvements.",
      tech: [
        { name: "Shopify Plus", iconClass: "fab fa-shopify text-[#96bf48]" },
        { name: "Liquid", iconClass: "fas fa-droplet text-[#5c6ac4]" },
        { name: "JavaScript", iconClass: "fab fa-js text-[#f7df1e]" },
        { name: "GraphQL", iconClass: "fas fa-circle-nodes text-[#e10098]" },
        { name: "REST APIs", iconClass: "fas fa-cloud text-[#0ea5e9]" },
        { name: "Checkout Extensibility", iconClass: "fas fa-shopping-cart text-[#10b981]" },
        { name: "AI-Assisted Dev", iconClass: "fas fa-brain text-[#a855f7]" }
      ]
    },
    {
      company: "Sassy Infotech Pvt. Ltd. · Surat, Gujarat",
      position: "Shopify & WordPress Developer",
      duration: "Dec 2023 — Apr 2026",
      location: "Surat, Gujarat",
      iconClass: "fas fa-laptop-code",
      accentClass: "sky",
      responsibilities: [
        "Delivered <strong>custom Shopify and WordPress solutions</strong> for international enterprise clients, managing projects from discovery through deployment.",
        "Developed <strong>conversion-focused Shopify storefronts</strong>, reusable theme architectures, custom apps, and advanced eCommerce functionality.",
        "Built <strong>headless commerce solutions</strong> using Next.js, React, TypeScript, and Shopify, improving performance, scalability, and SEO.",
        "Integrated <strong>payment gateways, ERP systems, CRMs</strong>, and third-party platforms through REST and GraphQL APIs.",
        "Optimized storefront performance, <strong>Core Web Vitals</strong>, and technical SEO, contributing to increased organic visibility and customer engagement.",
        "Worked closely with clients to <strong>identify business requirements</strong> and implement scalable technical solutions supporting long-term growth."
      ],
      achievements: "Architected high-speed <strong class=\"text-sky-950 dark:text-sky-200 font-bold\">headless storefront architectures</strong> utilizing React, TypeScript, and Shopify Storefront APIs to boost UX and conversion performance.",
      tech: [
        { name: "Shopify", iconClass: "fab fa-shopify text-[#96bf48]" },
        { name: "WordPress", iconClass: "fab fa-wordpress text-[#21759b]" },
        { name: "Next.js", iconClass: "fas fa-bolt text-slate-800 dark:text-white" },
        { name: "React", iconClass: "fab fa-react text-[#61dafb]" },
        { name: "TypeScript", iconClass: "fas fa-code text-[#3178c6]" },
        { name: "GraphQL", iconClass: "fas fa-circle-nodes text-[#e10098]" },
        { name: "Stripe / Razorpay", iconClass: "fas fa-credit-card text-[#f43f5e]" }
      ]
    },
    {
      company: "Upmetrics · Surat, Gujarat",
      position: "Web Developer",
      duration: "Sept 2022 — March 2024",
      location: "Surat, Gujarat",
      iconClass: "fas fa-code",
      accentClass: "rose",
      responsibilities: [
        "Led <strong>performance optimization initiatives</strong> for a SaaS platform, increasing PageSpeed scores from 30 to 95+ and significantly improving Core Web Vitals.",
        "Developed <strong>AI-powered features and business intelligence dashboards</strong> that enhanced user engagement and product value.",
        "Implemented <strong>technical SEO strategies, structured data</strong>, and frontend optimizations that improved search visibility and customer acquisition.",
        "Collaborated with <strong>product, marketing, and engineering teams</strong> to deliver scalable user experiences for a global customer base.",
        "Contributed to <strong>application architecture, performance monitoring</strong>, and continuous product improvements."
      ],
      achievements: "Spearheaded the refactoring of Core Web Vitals to elevate Google PageSpeed index ratings from <strong class=\"text-rose-950 dark:text-rose-200 font-bold\">30 to 95+</strong>, greatly enhancing organic search traffic.",
      tech: [
        { name: "Node.js", iconClass: "fab fa-node-js text-[#339933]" },
        { name: "MongoDB", iconClass: "fas fa-database text-[#47a248]" },
        { name: "AngularJS", iconClass: "fab fa-angular text-[#dd0031]" },
        { name: "AI Integrations", iconClass: "fas fa-robot text-[#a855f7]" },
        { name: "SEO", iconClass: "fas fa-search text-[#10b981]" },
        { name: "PageSpeed Optimization", iconClass: "fas fa-gauge-high text-[#f59e0b]" }
      ]
    },
    {
      company: "Jiya Websolutions · Surat, Gujarat",
      position: "Web Developer",
      duration: "Aug 2022 — Sept 2022",
      location: "Surat, Gujarat",
      iconClass: "fas fa-cubes",
      accentClass: "amber",
      responsibilities: [
        "Developed custom eCommerce solutions for WooCommerce stores, including secure payment gateway integrations and business-specific functionality.",
        "Built and customized <strong>WordPress websites</strong> using ACF Pro, Elementor, and bespoke plugins.",
        "Implemented <strong>Firebase-based authentication, notification systems</strong>, and real-time application features.",
        "Delivered tailored solutions that improved <strong>operational efficiency and customer experience</strong>."
      ],
      achievements: "Configured custom checkout extensions, secure payment gateways, and ACF Pro hooks to deliver personalized storefront features for clients.",
      tech: [
        { name: "WooCommerce", iconClass: "fab fa-wordpress text-[#7f54b3]" },
        { name: "WordPress", iconClass: "fab fa-wordpress text-[#21759b]" },
        { name: "ACF Pro", iconClass: "fas fa-cubes text-[#00a0d2]" },
        { name: "Elementor", iconClass: "fas fa-cube text-[#d30c5c]" },
        { name: "Firebase", iconClass: "fas fa-fire text-[#ffca28]" }
      ]
    },
    {
      company: "Scion Infotech · Surat, Gujarat",
      position: "Web Developer",
      duration: "July 2021 — August 2022",
      location: "Surat, Gujarat",
      iconClass: "fas fa-terminal",
      accentClass: "emerald",
      responsibilities: [
        "Developed custom WordPress, Django, and eCommerce applications for enterprise and SMB clients.",
        "Built HRMS platforms, database-driven business applications, and workflow automation systems.",
        "Created Chrome extensions and internal tools that streamlined eCommerce operations and reduced manual effort.",
        "Improved website performance, SEO, and maintainability through modern development practices."
      ],
      achievements: "Programmed relational database applications and internal workflow scripts to automate key operations.",
      tech: [
        { name: "WordPress", iconClass: "fab fa-wordpress text-[#21759b]" },
        { name: "Django", iconClass: "fab fa-python text-[#092e20]" },
        { name: "Python", iconClass: "fab fa-python text-[#3776ab]" },
        { name: "HRMS Platforms", iconClass: "fas fa-users-cog text-[#4f46e5]" },
        { name: "Chrome Extensions", iconClass: "fab fa-chrome text-[#4285f4]" }
      ]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", iconClass: "fab fa-react text-[#61dafb]" },
        { name: "Next.js", iconClass: "fas fa-bolt text-slate-800 dark:text-white" },
        { name: "TypeScript", iconClass: "fas fa-code text-[#3178c6]" },
        { name: "Tailwind CSS", iconClass: "fa-solid fa-wind text-[#38bdf8]" },
        { name: "Liquid", iconClass: "fas fa-droplet text-[#5c6ac4]" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", iconClass: "fab fa-node-js text-[#339933]" },
        { name: "PHP", iconClass: "fab fa-php text-[#777bb4]" },
        { name: "Python", iconClass: "fab fa-python text-[#3776ab]" },
        { name: "REST API", iconClass: "fas fa-cloud text-[#0ea5e9]" },
        { name: "GraphQL", iconClass: "fas fa-circle-nodes text-[#e10098]" }
      ]
    },
    {
      category: "Commerce & CMS",
      skills: [
        { name: "Shopify Plus", iconClass: "fab fa-shopify text-[#96bf48]" },
        { name: "WordPress", iconClass: "fab fa-wordpress text-[#21759b]" },
        { name: "WooCommerce", iconClass: "fab fa-wordpress text-[#7f54b3]" },
        { name: "Headless CMS", iconClass: "fas fa-server text-slate-500" }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", iconClass: "fas fa-database text-[#47a248]" },
        { name: "MySQL", iconClass: "fas fa-database text-[#00758f]" },
        { name: "Git", iconClass: "fab fa-git-alt text-[#f05032]" },
        { name: "Vercel", iconClass: "fas fa-play fa-rotate-270 text-black dark:text-white" },
        { name: "Netlify", iconClass: "fas fa-cloud-sun text-[#00c7b7]" }
      ]
    },
    {
      category: "Design & Strategy",
      skills: [
        { name: "Figma", iconClass: "fab fa-figma text-[#f24e1e]" },
        { name: "UI/UX Design", iconClass: "fas fa-wand-magic-sparkles text-[#a855f7]" },
        { name: "CRO", iconClass: "fas fa-chart-line text-[#10b981]" },
        { name: "Technical SEO", iconClass: "fas fa-magnifying-glass text-[#0ea5e9]" },
        { name: "Design Systems", iconClass: "fas fa-compass-drafting text-[#f59e0b]" }
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Jain University · Bangalore",
      duration: "2022 — 2024",
      tags: ["Advanced Software Eng", "Cloud Architecture", "Full-Stack Web"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Sutex Bank College · Surat",
      duration: "2019 — 2022",
      tags: ["OOP Analysis", "Database Management", "Client-Side Eng"]
    }
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Gujarati", level: "Native" }
  ],
  certifications: [
    {
      id: "js",
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      description: "Covers Design Patterns, Memory management, concurrency model, and event loops, among others.",
      verifyUrl: "https://www.hackerrank.com/certificates/8d3c5a1e057d",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/8d3c5a1e057d"
    },
    {
      id: "sql",
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      description: "Includes complex joins, unions, and sub-queries, testing advanced database skills.",
      verifyUrl: "https://www.hackerrank.com/certificates/9ccd8ad6e376",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/9ccd8ad6e376"
    }
  ],
  partnerships: [
    {
      name: "Shopify Plus Partner",
      url: "https://partners.shopify.com",
      iconClass: "fab fa-shopify text-[#96bf48]",
      hoverBg: "hover:bg-[#96bf48]",
      hoverTextClass: "group-hover:text-white"
    },
    {
      name: "GoKwik Partner",
      url: "https://gokwik.co",
      iconClass: "fas fa-handshake text-[#10b981]",
      hoverBg: "hover:bg-[#10b981]",
      hoverTextClass: "group-hover:text-white"
    },
    {
      name: "Razorpay Partner",
      url: "https://razorpay.com",
      iconClass: "fas fa-credit-card text-[#0c80e8]",
      hoverBg: "hover:bg-[#0c80e8]",
      hoverTextClass: "group-hover:text-white"
    },
    {
      name: "Vercel Partner",
      url: "https://vercel.com",
      iconClass: "fas fa-play fa-rotate-270 text-black dark:text-white",
      hoverBg: "hover:bg-black dark:hover:bg-white dark:hover:text-black",
      hoverTextClass: "group-hover:text-white dark:group-hover:text-black"
    },
    {
      name: "Netlify Partner",
      url: "https://netlify.com",
      iconClass: "fas fa-cloud-sun text-[#00c7b7]",
      hoverBg: "hover:bg-[#00c7b7]",
      hoverTextClass: "group-hover:text-white"
    },
    {
      name: "Tailwind CSS Partner",
      url: "https://tailwindcss.com",
      iconClass: "fa-solid fa-wind text-[#38bdf8]",
      hoverBg: "hover:bg-[#38bdf8]",
      hoverTextClass: "group-hover:text-white"
    },
    {
      name: "GitHub Partner",
      url: "https://github.com",
      iconClass: "fab fa-github text-black dark:text-white",
      hoverBg: "hover:bg-black dark:hover:bg-white dark:hover:text-black",
      hoverTextClass: "group-hover:text-white dark:group-hover:text-black"
    },
    {
      name: "Judge.me Partner",
      url: "https://judge.me",
      iconClass: "fas fa-star text-[#10b981]",
      hoverBg: "hover:bg-[#10b981]",
      hoverTextClass: "group-hover:text-white"
    }
  ]
};
