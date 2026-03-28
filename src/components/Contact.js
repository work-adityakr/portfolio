import {motion} from "framer-motion"

export default function Contact() {
    return (
      <section className="min-h-screen flex items-center justify-center my-10" id="Contact">
      <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
      className="text-white py-20 scroll-mt-24 mb-16 mt-24 rounded-2xl pt-80">
      <h2 className="text-center text-7xl font-bold mb-10">Contact Me</h2>
      <form className="max-w-2xl mx-auto px-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 bg-[#1a1a1a] border border-[#333] text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 bg-[#1a1a1a] border border-[#333] text-white rounded"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full mb-4 p-3 bg-[#1a1a1a] border border-[#333] text-white rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-[#d72828] hover:bg-[#ff4848] px-6 py-3 text-black font-semibold rounded transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
      </section>
    );
  }
  