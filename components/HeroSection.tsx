import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download, Zap, Code, Brain } from "lucide-react";
import { useState, useEffect } from "react";
// Image will be served from public folder

// Animated text component with typewriter effect for focused combinations
function AnimatedText() {
  const combinations = [
    // AI/ML focused
    "AI/ML systems, machine learning, and deep learning",
    "neural networks, computer vision, and natural language processing",
    "artificial intelligence, data science, and predictive analytics",
    
    // Cloud focused  
    "cloud architecture, microservices, and serverless computing",
    "distributed systems, containerization, and DevOps",
    "AWS, Azure, and Google Cloud platforms",
    
    // Quantum focused
    "quantum computing, quantum algorithms, and quantum machine learning",
    "quantum optimization, quantum cryptography, and quantum simulation",
    "quantum hardware, quantum software, and quantum applications"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = combinations[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next combination
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % combinations.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, combinations]);

  // Color the text based on the current combination type
  const getTextColor = (text: string) => {
    if (text.includes("AI") || text.includes("machine") || text.includes("neural") || text.includes("artificial") || text.includes("data")) {
      return "text-teal-300 dark:text-teal-300 text-emerald-600";
    } else if (text.includes("cloud") || text.includes("microservices") || text.includes("distributed") || text.includes("AWS") || text.includes("Azure")) {
      return "text-blue-300 dark:text-blue-300 text-sky-600";
    } else if (text.includes("quantum")) {
      return "text-purple-300 dark:text-purple-300 text-violet-600";
    }
    return "text-cyan-300 dark:text-cyan-300 text-cyan-600";
  };
  
  // Safety check to prevent undefined access
  if (!combinations || combinations.length === 0) {
    return <span className="text-cyan-300 dark:text-cyan-300 text-cyan-600 font-medium">AI/ML systems, cloud architecture, and quantum computing</span>;
  }
  
  const currentText = combinations[currentIndex] || combinations[0];
  
  return (
    <span className={`${getTextColor(currentText)} font-medium`}>
      {displayText}
      <span className="animate-pulse text-gray-300 dark:text-gray-300 text-slate-500">|</span>
    </span>
  );
}

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SaiKrishna-KK", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sai-krishna-vishnumolakala", label: "LinkedIn" },
    { icon: Mail, href: "mailto:krish.ms2023@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <Badge variant="outline" className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 text-blue-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-500/10 bg-blue-50">
                <Zap className="w-3 h-3 mr-1" />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 dark:from-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                Sai Krishna
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-white dark:to-white bg-clip-text text-transparent">
                Vishnumolakala
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-700 dark:text-gray-300 max-w-lg leading-relaxed mb-8"
            >
              <span className="text-blue-600 dark:text-cyan-300 font-medium">Software Engineer & AI/ML Specialist</span> specializing in{" "}
              <AnimatedText />.
              Building scalable, intelligent solutions that drive innovation across industries. Available for remote work opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-600 dark:to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-lg shadow-blue-200"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-400 border-2 text-blue-600 dark:text-cyan-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-blue-50 shadow-md"
              >
                <Code className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 dark:bg-white/5 bg-white shadow-md border border-cyan-500/20 dark:border-cyan-500/20 border-blue-300 border-2 text-blue-600 dark:text-cyan-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-blue-50 hover:shadow-lg transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 dark:opacity-20 opacity-40 scale-110" />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 border-2 shadow-2xl shadow-blue-200">
                <img
                  src="/DP.jpg"
                  alt="Sai Krishna Vishnumolakala"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-500 dark:to-pink-500 from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-200"
              >
                <Brain className="w-8 h-8" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-500 dark:to-blue-500 from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-blue-200"
              >
                <Code className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}