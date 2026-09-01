import { PROJECTS } from "../assets/constants";
import { motion } from "framer-motion";
import { Link } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto pb-4">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="my-12 sm:my-16 lg:my-20 text-center font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          Projects
        </motion.h2>
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-8 items-start">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group overflow-hidden rounded-xl"
                >
                  <img 
                    src={project.image}
                    width={250}
                    height={250}
                    alt={project.title}
                    className="w-full max-w-[280px] sm:max-w-[240px] object-cover rounded-xl border border-stone-800 shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xl lg:w-3/4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-xl sm:text-2xl text-white">{project.title}</h3>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={project.link} 
                    className="text-stone-400 hover:text-red-500 transition-colors p-1"
                    aria-label={`Visit ${project.title}`}
                  >
                    <Link className="w-5 h-5" />
                  </a>
                </div>
                <p className="mb-4 text-sm sm:text-base text-stone-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      className="rounded-lg bg-stone-900/90 border border-stone-800 px-2.5 py-1 text-xs sm:text-sm font-medium text-stone-300" 
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

