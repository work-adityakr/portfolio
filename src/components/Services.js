import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { servicesData } from "../assets/constants";

export default function Services() {

  return (
    <section id="services" className="py-24 px-6 flex flex-col items-center text-white scroll-mt-10">
      {/* Title with improved Framer Motion */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tighter"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {servicesData.map((service, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10, borderColor: "rgba(168, 85, 247, 0.4)" }} // Purple border on hover
            className="group flex flex-col items-center p-8 bg-stone-900/30 border border-stone-800 rounded-3xl backdrop-blur-md shadow-2xl transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-center text-stone-400 leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={600}
              offset={-50}
              className="relative overflow-hidden bg-orange-700 hover:bg-orange-600 px-8 py-3 rounded-xl text-white font-bold cursor-pointer transition-all active:scale-95 shadow-lg shadow-orange-900/20"
            >
              Know More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}