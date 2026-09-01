import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Basic field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please fill in all fields before submitting.");
      return;
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    // 3. API Key validation (Fails fast before making network requests)
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setFeedbackMessage("Please configure your Web3Forms Access Key to receive emails.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      // Single, clean fetch request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `New Portfolio Message from ${formData.name.trim()}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedbackMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage(result.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please check your internet connection or try again later.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6" id="Contact">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl text-white scroll-mt-24"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Contact Me
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-md mx-auto">
            Have a project in mind, a question, or just want to connect? Send me a message below!
          </p>
        </div>

        {/* Status notification */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-emerald-950/70 border border-emerald-500/50 rounded-xl flex items-center gap-3 text-emerald-200 text-sm sm:text-base"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
            <span>{feedbackMessage}</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-950/70 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-200 text-sm sm:text-base"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
            <span>{feedbackMessage}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 bg-stone-900/40 p-6 sm:p-8 rounded-2xl border border-stone-800/80 backdrop-blur-sm shadow-2xl">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Your Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-5 h-5 text-stone-500 pointer-events-none" />
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Aditya Kumar"
                required
                className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-stone-700/80 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Your Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-5 h-5 text-stone-500 pointer-events-none" />
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="aditya@example.com"
                required
                className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-stone-700/80 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Your Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-500 pointer-events-none" />
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Aditya, I'd like to discuss a project..."
                required
                className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-stone-700/80 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none text-sm sm:text-base"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#d72828] hover:bg-[#ff4848] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3.5 text-white font-semibold rounded-xl transition shadow-lg shadow-red-900/30 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}