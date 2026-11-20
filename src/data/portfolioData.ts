import { 
  Phone, 
  MapPin, 
  Mail, 
  Globe, 
  MessageCircle, 
  Instagram,
  Linkedin
} from 'lucide-react';

export const aboutData = {
  myimg: "/src/assets/image-removebg-preview.png",
  name: "Vikas Tomar",
  role: "Software Engineer & Full Stack Web Developer",
  aboutme: "Software Engineer & Full Stack Web Developer passionate about creating responsive, high-performance web applications and exceptional user experiences.",
  dateOfBirth: "October 02, 2000",
  address: "Gogwan Jalalpur, ThanaBhawan, Shamli (251305), India",
  zipcode: "251305",
  Email: "ervikastomar0@gmail.com",
  Phone: "+91-9759585552",
};

export const socialLinks = {
  email: "mailto:ervikastomar0@gmail.com",
  phone: "tel:+919759585552",
  whatsapp: "https://wa.me/919759585552",
  linkedin: "https://www.linkedin.com/in/vikas-tomar-807649242",
  instagram: "https://www.instagram.com/vikastomar000/",
  googleMaps: "https://maps.google.com/?q=Uttar+Pradesh+India"
};

export const certificates = [
  {
    year: "2021-2022",
    organization: "Zenus Infotech India Private Limited",
    title: "C Language, Python",
    description: ""
  },
  {
    year: "2020-2023",
    organization: "Excellence Technology",
    title: "Full Stack Development Software",
    description: "Javascript, React Js, Node.Js, Express Js, Mongo Db"
  }
];

export const educationData = [
  {
    year: "2022-2026",
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    status: "Pursuing",
    details: "Currently studying Computer Science Engineering at B.E. level.",
  },
  {
    year: "2019-2021",
    degree: "Engineering Diploma in Computer Science",
    institution: "Bishambar Sahai Diploma Engineering College, Saliyar Roorkee (BSI)",
    details: "3 Year Diploma in Computer Science Engineering with 67.22% from Uttarakhand Board.",
  },
  {
    year: "2019",
    degree: "10th Standard",
    institution: "CBSE Board",
    details: "Completed 10th grade with 58% marks.",
  },
];

export const experiencesData = [
  {
    duration: "Aug 2023 - Present",
    company: "Sunfocus Solutions Pvt Ltd",
    role: "Frontend Developer",
    description: "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript, with a focus on React.js and Next.js frameworks."
  },
  {
    company: "CRM Project",
    role: "React Developer",
    description: "Built a comprehensive CRM system for managing customer relationships, including lead tracking, sales analytics, and reporting dashboards."
  },
  {
    company: "E-commerce Platform",
    role: "Full Stack Developer",
    description: "Developed an e-commerce web application with features like product catalog, shopping cart, payment integration, and user authentication."
  }
];

export const listskill = [
  {
    name: "React.js",
    icon: "⚛️",
    intro: "A JavaScript library for building user interfaces",
  },
  {
    name: "Next.js",
    icon: "▲",
    intro: "React framework for server-side rendering & static sites",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    intro: "Dynamic programming language for web development",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    intro: "Typed superset of JavaScript for scalable apps",
  },
  {
    name: "CSS",
    icon: "🎨",
    intro: "Stylesheet language for designing webpages",
  },
  {
    name: "HTML",
    icon: "📄",
    intro: "Standard markup language for web pages",
  },
  {
    name: "Redux",
    icon: "🔄",
    intro: "State management library for JavaScript apps",
  },
  {
    name: "Firebase",
    icon: "🔥",
    intro: "Backend platform for building web & mobile apps",
  },
  {
    name: "Git",
    icon: "📝",
    intro: "Version control system for source code",
  },
  {
    name: "Bitbucket",
    icon: "🪣",
    intro: "Git repository management and collaboration tool",
  },
  {
    name: "Node.js",
    icon: "🟢",
    intro: "JavaScript runtime built on Chrome's V8 engine",
  },

  {
    name: "Supabase",
    icon: "🎨",
    intro: "Backend platform for building web & mobile apps",
  },
  
];

export interface ContactDetailItem {
  label: string;
  text: string;
  icon: any;
  link: string;
  actionText?: string;
}

export const contactDetails: ContactDetailItem[] = [
  {
    label: "Phone",
    text: "+91-9759585552",
    icon: Phone,
    link: "tel:+919759585552",
    actionText: "Call Now"
  },
  {
    label: "Email Address",
    text: "ervikastomar0@gmail.com",
    icon: Mail,
    link: "mailto:ervikastomar0@gmail.com",
    actionText: "Send Email"
  },
  {
    label: "WhatsApp Direct",
    text: "+91-9759585552",
    icon: MessageCircle,
    link: "https://wa.me/919759585552",
    actionText: "Message on WhatsApp"
  },
  {
    label: "Instagram",
    text: "@vikastomar000",
    icon: Instagram,
    link: "https://www.instagram.com/vikastomar000/",
    actionText: "Visit Instagram Profile"
  },
  {
    label: "LinkedIn",
    text: "vikas-tomar-807649242",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/vikas-tomar-807649242",
    actionText: "Connect on LinkedIn"
  },
];

export interface ProjectItem {
  title: string;
  link: string;
  tech: string[];
  description: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Task Management App",
    link: "https://taskreact-398cb.web.app/",
    tech: ["React.js", "Firebase", "State Management"],
    description: "A productivity-focused task management tool built with React and Firebase. Allows users to create, update, and track daily tasks efficiently with real-time state management and a clean UI."
  },
  {
    title: "Weather Tracking App",
    link: "https://weatherapp-7ff6a.web.app/",
    tech: ["React.js", "OpenWeather API", "Async/Await"],
    description: "A sleek weather tracking application that allows users to check real-time weather conditions globally using OpenWeather API integration and asynchronous data fetching."
  },
  {
    title: "Owner Dashboard Panel",
    link: "https://mywebloyovse.web.app/Layout/Owner",
    tech: ["React.js", "Admin Dashboard", "Styled-Components"],
    description: "An administrative layout panel designed for business owners to manage system layouts, users, and data dashboards using modular React components and Styled-Components."
  },
  {
    title: "Spotify Music Streamer (Momato)",
    link: "https://momato-a5e0a.web.app/",
    tech: ["React.js", "Web Audio API", "UI/UX"],
    description: "A Spotify-inspired music streaming application where users can browse tracks, play songs with Web Audio API controls, and experience a modern aesthetic UI/UX."
  },
  {
    title: "Student Analytics & Visualization",
    link: "https://web-messenger-65f7e.web.app/",
    tech: ["React.js", "Firebase", "Chart Visualization"],
    description: "A React and Firebase web application displaying student analytics. Visualizes key performance indicators, attendance, and academic progress through interactive chart visualization."
  },
  {
    title: "CRM (Customer Relationship Management)",
    link: "https://billeverything.com",
    tech: ["React.js", "Supabase"],
    description: "A React and Firebase web application displaying student analytics. Visualizes key performance indicators, attendance, and academic progress through interactive chart visualization."
  }
];