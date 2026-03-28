import project1 from "../../projects/project-1.webp";
import project2 from "../../projects/project-2.webp";
import project3 from "../../projects/project-3.webp"

export const HERO_CONTENT = `Full Stack Developer with strong front-end and back-end skills including JavaScript,
React, Node.js, and databases. Skilled in building scalable applications and user-friendly interfaces.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Full Stack Web Developer",
    company: "Natarix Business Solutions",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","postgreSQL","Typescript"],
    photo:project3
  },
];

export const servicesData = [
  {
    title:"Frontend Development",
    description:"I craft responsive, accessible, and interactive UI/UX using React.js, Tailwind CSS, and modern JavaScript. My focus is on performance, cross-browser compatibility, and seamless user experiences across all devices."
  },
  {
    title:"Backend Development",
    description:"I specialize in creating robust, scalable server-side logic with Node.js and Express.js, implementing REST APIs, database design with MongoDB, and integrating third-party services with a strong focus on security and performance."
  },
  {
    title:"Full Stack Development",
    description:"I build end-to-end web applications using the MERN stack — from creating dynamic user interfaces in React to developing secure APIs and managing databases with Node.js and MongoDB. Ideal for startups and SaaS platforms."
  }
]

export const PROJECTS = [
  {
    title: "StudyNotion",
    image: project1,
    link:"https://studynotion-ad.vercel.app/",
    description:
      "Ed-Tech platform built using the MERN stack. This application empowers instructors to create and sell course while providing students with a seamless platform to purchase and consume educational content. It features a secure, role-based architecture with JWT authentication, and integrated Cloudinary for optimizedmedia management and Razorpay for secure payment gateways, ensuring 99.9% transaction reliability.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary", "Razorpay", "REST APIs"],
  },
  {
    title: "Care Connect",
    image: project2,
    link:"https://doctor-appointment-tau-eight.vercel.app/",
    description:
      "Built with the MERN (MongoDB, Express.js, React, Node.js) stack. The platform features a secure, role-basedsystem for Patients, Doctors, and Administrators, managed with JWT authentication.Key functionalities include user registration, doctor discovery, appointment scheduling, and dedicateddashboards for each user role.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Razorpay", "REST APIs", "Express.js", "Cloudinary"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
