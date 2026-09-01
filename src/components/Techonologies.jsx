import { motion } from "framer-motion";
import { RiReactjsLine, RiJavascriptLine } from 'react-icons/ri';
import { SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiMysql, SiRedux } from 'react-icons/si';
import { FaJava, FaHtml5, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';
import { Cloud, Globe } from 'lucide-react';

const technologiesList = [
  { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", duration: 2.5 },
  { icon: RiJavascriptLine, name: "JavaScript", color: "text-yellow-400", duration: 3 },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500", duration: 2 },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 4 },
  { icon: SiExpress, name: "Express.js", color: "text-stone-300", duration: 2.5 },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500", duration: 3.5 },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-600", duration: 2 },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400", duration: 3 },
  { icon: SiRedux, name: "Redux", color: "text-purple-500", duration: 2.5 },
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3.5 },
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500", duration: 4 },
  { icon: SiMysql, name: "MySQL", color: "text-blue-400", duration: 3 },
  { icon: Globe, name: "REST APIs", color: "text-blue-300", duration: 2.5 },
  { icon: Cloud, name: "Cloudinary", color: "text-sky-400", duration: 3.5 },
];

const iconVariants = (duration) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 scroll-mt-10">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="my-10 sm:my-14 text-center font-bold text-3xl sm:text-4xl lg:text-5xl text-white"
        >
          Technologies
        </motion.h2>

        {/* Compact Responsive Grid: 3 cols on mobile, 4 on sm, 5 on md, 7 on lg */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-5"
        >
          {technologiesList.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={iconVariants(tech.duration)}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-stone-900/60 border border-stone-800/90 rounded-2xl hover:border-purple-500/60 hover:bg-stone-900/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center mb-1.5 sm:mb-2">
                  <Icon className={`text-3xl sm:text-4xl lg:text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-stone-300 text-center truncate max-w-full group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

