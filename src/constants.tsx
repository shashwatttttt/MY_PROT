
import { WorkExperience, Education, BlogPost } from './types';

export const INTRO = {
  name: "Shashwat Tiwari",
  role: "Software Engineer & Security Researcher",
  bio: "tl;dr: Learned by exploring, breaking, and rebuilding things online.\n\nI’m fascinated by technology, security, and how complex systems really work. I build software, experiment with side projects, and focus on learning through hands-on work rather than theory alone.\n\nI’m driven by curiosity and long-term impact, not quick wins.",
  avatar: "/public/logo.png",
  birthDate: "2002-02-06T00:00:00" 
};

export const PROJECTS = [
  {
    title: "Hackersvilla Cybersecurity Platform",
    description: "A Ed-Tech startup for cybersecurity enthusiasts.",
    link: "https://hackersvilla.xyz",
    tags: ["Next.js", "React", "Bootstrap", "Node.js"]
  },
  {
    title: "Red-Team Toolkit",
    description: "A modern guide to red teaming for cybersecurity professionals.",
    link: "https://github.com/shashwatttttt/red-team-toolkit",
    tags: ["Reference", "Tools", "Markdown"]
  },
  {
    title: "Fuzzing Framework GUI version",
    description: "A Gui version of the Fuzzing Framework.",
    link: "https://github.com/shashwatttttt/fuff-gui",
    tags: ["Python", "Wasm", "WebGL"]
  },
  {
    title: "Zentry - New Gaming Era",
    description: "Zentry is a responsive web interface inspired by Game’s product pages, built to showcase UI/UX design skill and frontend engineering..",
    link: "https://zentry-mocha-psi.vercel.app/",
    tags: ["GSAP", "React", "Vite"]
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  
  {
    company: "HackersVilla CyberSecurity Pvt Ltd",
    role: "Application Security Engineer / Security Analyst",
    period: "April 2020 – January 2026",
    description: "Led cross-functional teams and delivered 50+ secure enterprise applications.",
    details: [
      "Led cross-functional teams of 5+ engineers to architect and deliver 50+ secure, scalable web applications for enterprise clients, achieving 100% client satisfaction",
      "Developed 15+ production-grade automation tools using Python, React.js, Vue.js, and Node.js, improving team productivity by 60% and reducing manual workflows",
      "Built full-stack applications with modern frameworks serving 10,000+ users with 99.9% uptime through AWS cloud infrastructure",
      "Designed and implemented automated CI/CD security pipelines using Python, Bash, Selenium, and Pytest, integrated with Jenkins for continuous deployment",
      "Conducted comprehensive penetration testing on web, API, network, and mobile applications, identifying critical vulnerabilities and delivering actionable remediation strategies",
      "Mentored 500+ students in VAPT and secure coding practices, contributing to a cybersecurity community of 5,000+ members"
    ]
  },
  {
    company: "upGrad",
    role: "Subject Matter Expert – Software Development & Cybersecurity",
    period: "January 2022 – January 2023",
    description: "Delivered technical training and designed industry-standard course materials.",
    details: [
      "Delivered technical training to 500+ students in full-stack development, modern JavaScript frameworks, Python programming, and secure software engineering",
      "Designed comprehensive course materials and hands-on projects aligned with industry standards, achieving 85% placement success rate"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Cluster Innovation Centre (CIC), University of Delhi",
    degree: "B.Tech in Information Technology & Mathematical Innovation [Dropped Out]",
    period: "Aug 2019 – 2023",
    details: [
      "Deeply explored the convergence of Information Technology and Advanced Mathematical Modeling to architect novel solutions for complex engineering bottlenecks.",
      "Specialized in Mathematical Innovation, focusing on algorithmic efficiency, probability theory, and discrete mathematics as the backbone of secure software systems.",
      "Focused on Information Technology infrastructure, exploring large-scale system architecture and decentralized networks.",
      "Self-directed mastery in Machine Learning (ML) and Artificial Intelligence (AI), applying neural networks to cybersecurity heuristics and predictive modeling.",
      "Chose to drop out to pursue high-impact industry engineering and real-world security research over traditional academic constraints."
    ]
  }
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Python", "Rust", "VAPT", "Cloud Security", "AWS", "CI/CD", "Machine Learning", "Artificial Intelligence", "Mathematical Modeling"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "waf-cyber-bodyguard",
    title: "Web Application Firewall (WAF): Your Website’s Bodyguard",
    date: "Aug 24, 2023",
    excerpt: "An in-depth look at how WAFs filter and monitor HTTP traffic to protect web applications from SQL injection, cross-site scripting, and other cyber-attacks.",
    content: "https://medium.com/@tshashwat568/%EF%B8%8Fweb-application-firewall-waf-your-websites-bodyguard-against-cyber-bullies-5a474fab186a"
  },
  {
    id: "modern-cpp-security",
    title: "Modern C++ for Secure Application Development",
    date: "Sep 5, 2023",
    excerpt: "Exploring the evolution of C++ and how modern standards help mitigate common memory vulnerabilities and buffer overflows in performance-critical software.",
    content: "https://medium.com/@tshashwat568/modern-c-for-secure-application-development-4a9052facdd6"
  },
  {
    id: "json-deep-dive",
    title: "Deep Dive into JSON: The What & The Why",
    date: "Aug 15, 2023",
    excerpt: "Demystifying the most popular data interchange format. Why JSON conquered the web and how to structure it efficiently for modern APIs.",
    content: "https://medium.com/@tshashwat568/deep-dive-into-json-what-why-ecb36a99623f"
  },
  {
    id: "cti-platforms-guide",
    title: "Cyber Security Threat Intelligence Platforms (CTI) Guide",
    date: "Oct 12, 2023",
    excerpt: "A comprehensive guide on CTI platforms, how they aggregate threat data, and their role in proactive defense and incident response.",
    content: "https://medium.com/@tshashwat568/cyber-security-threat-intelligence-platforms-cti-guide-f8a1c9514231"
  }
];

export const SOCIALS = [
 { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/shashwatttttt/", 
    color: "#0077B5",
    iconPath:
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
  },
  { 
    name: "GitHub", 
    url: "https://github.com/shashwatttttt", 
    color: "#FFFFFF",
    iconPath:
      "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  },
  { 
    name: "Twitter", 
    url: "https://x.com/_Shashwattttttt", 
    color: "#1DA1F2",
    iconPath:
      "M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M12.456 11.544l6.768 -6.768"
  },
  { 
    name: "Mail", 
    url: "mailto:tshashwat568@gmail.com", 
    color: "#EA4335",
    iconPath:
      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
  }
];