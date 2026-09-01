import { EXPERIENCES } from '../assets/constants'
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen pt-28 sm:pt-36 lg:pt-48 pb-16 px-4 sm:px-6 scroll-mt-20">
            <div className='pb-4 max-w-6xl mx-auto'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
                >
                    Experience
                </motion.h2>
                <div className="space-y-10 sm:space-y-12">
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className='flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-8'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                                className='w-full lg:w-1/4 flex flex-col items-start'>
                                <p className='mb-2 text-sm font-semibold text-stone-400'>{experience.year}</p>
                                {experience.photo && (
                                    <img
                                        alt={experience.role}
                                        src={experience.photo}
                                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl border border-stone-800 shadow-md"
                                    />
                                )}
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                                className='w-full max-w-xl lg:w-3/4'>
                                <h3 className='mb-2 text-lg sm:text-xl font-semibold text-white'>
                                    {experience.role} -{" "}
                                    <span className='text-sm sm:text-base text-purple-400 font-medium'>{experience.company}</span>
                                </h3>
                                <p className='mb-4 text-sm sm:text-base text-stone-400 leading-relaxed'>{experience.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span className='rounded-lg bg-stone-900/90 border border-stone-800 px-2.5 py-1 text-xs sm:text-sm font-medium text-stone-300' key={techIndex}>
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
    )
}

export default Experience