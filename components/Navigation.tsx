import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/80 dark:bg-slate-900/80 bg-white/90 shadow-lg backdrop-blur-md border-b border-cyan-500/20 dark:border-cyan-500/20 border-blue-300 border-2" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
          >
            Krishna.
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 dark:text-gray-300 hover:text-purple-300 dark:hover:text-purple-300 hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-400 dark:to-blue-400 from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-slate-700 dark:text-gray-300 hover:text-purple-300 dark:hover:text-purple-300 hover:text-blue-600 hover:bg-purple-500/10 dark:hover:bg-purple-500/10 hover:bg-blue-50 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Resume Button */}
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-600 dark:to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-lg shadow-blue-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-slate-700 dark:text-gray-300 hover:text-purple-300 dark:hover:text-purple-300 hover:text-blue-600"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-slate-900/95 dark:bg-slate-900/95 bg-white/95 shadow-lg backdrop-blur-md border-t border-blue-300 dark:border-purple-500/20 border-2"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-slate-700 dark:text-gray-300 hover:text-purple-300 dark:hover:text-purple-300 hover:text-blue-600 hover:bg-purple-500/10 dark:hover:bg-purple-500/10 hover:bg-blue-50 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-600 dark:to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-lg shadow-blue-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}