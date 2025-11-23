import { Code, Layout, Server, Smartphone, Globe, Database } from 'lucide-react';
import { Project, Skill, ExperienceItem, EducationItem, Service, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    image: "https://picsum.photos/seed/proj1/600/400",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "SaaS platform leveraging Gemini API to help marketers generate blog posts and social media captions instantly.",
    tags: ["Next.js", "Gemini API", "Stripe", "Node.js"],
    image: "https://picsum.photos/seed/proj2/600/400",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Health & Wellness App",
    description: "Mobile-first web application for tracking fitness goals, diet, and meditation streaks with social features.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://picsum.photos/seed/proj3/600/400",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "GraphQL", level: 80 },
  { name: "AWS", level: 75 },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the legacy monolithic application into a modern micro-frontend architecture using React and module federation."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client websites and web applications. Implemented CI/CD pipelines and improved site performance by 40%."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Collaborated with designers to implement responsive UI components. Assisted in backend API development using Express.js."
  }
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2016 - 2018"
  },
  {
    id: 2,
    degree: "Bachelor of Science in IT",
    school: "State College",
    year: "2012 - 2016"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces using modern React ecosystems.",
    icon: Layout
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Designing robust APIs and database architectures that scale with your business needs.",
    icon: Server
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile experiences that feel native using React Native.",
    icon: Smartphone
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "InnovateLabs",
    content: "John is an exceptional developer who brings not just coding skills but also creative problem-solving abilities to the table.",
    avatar: "https://picsum.photos/seed/avatar1/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "FutureScale",
    content: "Working with John was a pleasure. He delivered the project ahead of schedule and the code quality was top-notch.",
    avatar: "https://picsum.photos/seed/avatar2/100/100"
  }
];