import { HERO_CONTENT } from "../assets/constants";
import AdityaImg from "./Aditya.jpg"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {motion} from "framer-motion"

const containerVariants = {
  hidden: { opacity :0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}

const childVariants = {
  hidden:{opacity:0,x:-100},
  visible: {opacity:1,x:0,transition:{duration:0.5}}
}


export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h2 variants={childVariants} className="text-5xl lg:text-8xl font-bold tracking-tighter mb-4">
              Aditya Kumar
            </motion.h2>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl lg:text-4xl font-medium text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p variants={childVariants} className="my-6 max-w-lg text-lg text-stone-400 leading-relaxed mx-auto lg:mx-0">
              {HERO_CONTENT}
            </motion.p>
            <motion.a 
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-stone-200 transition"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={AdityaImg} 
                alt="Aditya Kumar" 
                className="relative border border-stone-800 rounded-3xl w-64 h-64 lg:w-[450px] lg:h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
       <div className="fixed right-6 top-[400px] transform -translate-y-1/2 flex flex-col space-y-8 text-[#d72828] text-xl">
       <a href="https://www.instagram.com/adityaaa._.007" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="hover:text-[#ff4848] transition-colors duration-300" />
       </a>
       <a href="https://www.linkedin.com/in/work-adityakr" target="_blank" rel="noopener noreferrer">
         <FaLinkedinIn className="hover:text-[#ff4848] transition-colors duration-300" />
       </a>
     </div>
      </div>
    </section>
  );
}
