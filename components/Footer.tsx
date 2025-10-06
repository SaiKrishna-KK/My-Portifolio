import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SaiKrishna-KK", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sai-krishna-vishnumolakala", label: "LinkedIn" },
    { icon: Mail, href: "mailto:krish.ms2023@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400 from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Sai Krishna Vishnumolakala
            </div>
            <p className="text-slate-600 dark:text-gray-400">Building the future with code, one project at a time</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 dark:bg-white/5 bg-slate-100 border border-purple-500/20 dark:border-purple-500/20 border-blue-200 text-blue-600 dark:text-purple-300 hover:bg-purple-500/10 dark:hover:bg-purple-500/10 hover:bg-blue-50 hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:border-blue-300 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 dark:via-purple-500/30 via-blue-500/30 to-transparent"
          />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-2"
          >
            <p className="text-slate-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Sai Krishna Vishnumolakala. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-slate-500 text-xs flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-current" /> using React, Motion, and Tailwind CSS
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-purple-300 hover:text-purple-200 dark:hover:text-purple-200 hover:text-blue-700 transition-colors duration-200 text-sm"
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}