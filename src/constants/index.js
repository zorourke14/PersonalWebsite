import {
    ai,
    mobile,
    backend,
    creator,
    headshot,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    pseg,
    tiffany,
    tcnj,
    goat,
    personalweb,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Student",
      icon: web,
    },
    {
      title: "Entrepreneur",
      icon: mobile,
    },
    {
      title: "Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud & Platform Engineer Intern",
      company_name: "Tiffany & Co.",
      icon: tiffany,
      iconBg: "#97cacc",
      date: "June 2025 - August 2025",
      points: [
        "To be completed",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "PSEG",
      icon: pseg,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed and implemented a Python script using Selenium and PyQt5 to scrape the OMS Configuration settings automating the search for specific configurations and comparisons between environments.",
        "Collaborated with other interns to create a comprehensive full-stack Intern Knowledge Base for future interns, utilizing HTML, CSS, React.js, and Git.",
        "Conducted data resets in testing environments using PuTTY and WinSCP.",
        "Troubleshoot incidents across multiple interfaces including SAP, Mulesoft, Kubra, EITK scripts.",
        "Implemented changes using ServiceNow in a production environment.",
        "Exposed to data from PowerBI and SCADA for OMS."
      ],
    },
    {
      title: "Computer Science Tutor",
      company_name: "TCNJ",
      icon: tcnj,
      iconBg: "#E6DEDD",
      date: "August 2023 - June 2024",
      points: [
        "Facilitated the progress of 30 students during laboratory sessions, applying critical problem-solving skills during labs and projects.",
        "Taught students object-oriented programming skills and held private office hours outside of lab hours",
      ],
    },
    {
      title: "CryptoCurrency Mentored Research",
      company_name: "TCNJ",
      icon: tcnj,
      iconBg: "#E6DEDD",
      date: "August 2023 - June 2024",
      points: [
        "Researched crypto slashing for publication under Dr. Jikai Li’s guidance.",
        "Implemented smart contracts with Solidity and extracting data from light nodes.",
        "Analyzed blockchain data to enhance understanding of decentralized finance mechanisms.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Full Stack Goat Visualizer",
      description:
        "Developed and implemented a full-stack database management system for a stakeholder in Oregon, supporting their goat ranch operations. Designed the database schema, imported data from CSV files, and developed a REST API for dynamic querying of the database.",
      tags: [
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
        {
          name: "chart.js",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "orange-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: goat,
      source_code_link: "https://github.com/zorourke14/FullStackGoatDB",
    },
    {
      name: "Personal Website",
      description:
        "Developed personal website to practice DevOps skills and put AWS Cloud Practitioner Certificate to use by implementing cloud-native architecture with containerized deployment, CI/CD automation, and IaC using Docker, GitHub Actions, and Oracle Cloud Infrastructure.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "terraform",
          color: "green-text-gradient",
        },
        {
          name: "oci",
          color: "orange-text-gradient",
        },
        {
          name: "github actions",
          color: "green-text-gradient",
        },
      ],
      image: personalweb,
      source_code_link: "https://github.com/zorourke14/PersonalWebsite",
    },
    {
      name: "LeetCode AI Assistant",
      description:
        "Developed a LeetCode AI Assistant using OpenAI's GPT-4o fine tuned model to assist users in solving coding problems. The assistant provides hints, explanations, and code suggestions based on user queries.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/zorourke14/AI-Project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, headshot };
