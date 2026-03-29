import { motion } from "framer-motion";
import { RiReactjsLine, RiJavascriptLine } from 'react-icons/ri';
import { SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiMysql, SiRedux } from 'react-icons/si';
import { FaJava, FaHtml5, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';
import { Cloud, Globe } from 'lucide-react';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const TechIcon = ({ icon: Icon, color, name, duration }) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={iconVariants(duration)}
    className="group relative flex flex-col items-center justify-center"
  >
    {/* Icon Tile */}
    <div className={`p-6 bg-stone-900/50 border-2 border-stone-800 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-${color} group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
      <Icon className={`text-6xl ${color}`} />
    </div>

    {/* Tooltip Label */}
    <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-stone-400 whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

export default function Technologies() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">

      <div className='pb-24'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='my-20 text-center font-bold text-4xl lg:text-5xl'>Technologies
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='flex flex-wrap items-center justify-center gap-8 mx-auto w-7/12'
        >
          {/* Programming Languages */}
          <TechIcon icon={FaJava} color="text-red-500" name="Java" duration={2.5} />
          <TechIcon icon={RiJavascriptLine} color="text-yellow-400" name="JavaScript" duration={3} />
          <TechIcon icon={SiTypescript} color="text-blue-500" name="TypeScript" duration={2} />

          {/* Frontend */}
          <TechIcon icon={FaHtml5} color="text-orange-500" name="HTML5" duration={3.5} />
          <TechIcon icon={SiTailwindcss} color="text-cyan-400" name="Tailwind CSS" duration={4} />
          <TechIcon icon={RiReactjsLine} color="text-cyan-400" name="React.js" duration={2.5} />
          <TechIcon icon={SiRedux} color="text-purple-500" name="Redux" duration={3} />

          {/* Backend */}
          <TechIcon icon={FaNodeJs} color="text-green-500" name="Node.js" duration={5} />
          <TechIcon icon={SiExpress} color="text-stone-300" name="Express.js" duration={2.5} />
          <TechIcon icon={Globe} color="text-blue-300" name="REST APIs" duration={4.5} />

          {/* Databases */}
          <TechIcon icon={SiMongodb} color="text-green-500" name="MongoDB" duration={3} />
          <TechIcon icon={SiMysql} color="text-blue-400" name="MySQL" duration={4} />
          <TechIcon icon={BiLogoPostgresql} color="text-sky-700" name="PostgreSQL" duration={2} />

          {/* Cloud */}
          <TechIcon icon={Cloud} color="text-sky-400" name="Cloudinary" duration={3.5} />
        </motion.div>
      </div>
    </section >
  );
}
