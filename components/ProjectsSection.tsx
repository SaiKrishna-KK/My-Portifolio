import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Database, Brain, Cloud, Zap, Code, Bot, Lock, Cpu } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Real-time Voice AI Pipeline",
      description: "Enterprise-grade distributed STT → LLM → TTS pipeline engineered for scale. Powers real-time voice features for thousands of users with 95% accuracy and 5-8s latency through adaptive scheduling algorithms.",
      image: "https://images.unsplash.com/photo-1678977252570-58db7acbbeea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdm9pY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTYxNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "AWS", "Kubernetes", "WebRTC", "STT/TTS", "LLM"],
      icon: <Zap className="w-6 h-6" />,
      category: "AI/ML Engineering",
      github: "https://github.com/SaiKrishna-KK/pillowtalk-mvp",
      demo: "#"
    },
    {
      title: "SAFE-MD Crime Analytics",
      description: "Production-ready crime prediction system for Baltimore PD. Integrates socio-economic datasets with advanced ML models for predictive policing and resource optimization.",
      image: "https://images.unsplash.com/photo-1636484227749-9bbeaf58be1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltZSUyMGRhdGElMjBhbmFseXRpY3MlMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc1OTYxNjMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "Machine Learning", "Jupyter", "Statistical Analysis"],
      icon: <Database className="w-6 h-6" />,
      category: "Data Engineering",
      github: "https://github.com/SaiKrishna-KK/SAFE-MD",
      demo: "#"
    },
    {
      title: "XR-DaaS Platform",
      description: "Next-generation Extended Reality Data-as-a-Service platform. Delivers immersive 3D data visualization and analytics for enterprise clients using cutting-edge WebGL and XR technologies.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlbmRlZCUyMHJlYWxpdHklMjBWUiUyMEFSJTIwc29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk2MTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["JavaScript", "XR", "Data Visualization", "WebGL"],
      icon: <Code className="w-6 h-6" />,
      category: "Software Engineering",
      github: "https://github.com/SaiKrishna-KK/xr-daas",
      demo: "#"
    },
    {
      title: "Quantum Financial Risk Engine",
      description: "Quantum-inspired optimization engine for financial risk modeling. Implements advanced quantum computing principles for portfolio optimization and algorithmic trading strategies.",
      image: "https://images.unsplash.com/photo-1695462131550-24be3156b25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwZmluYW5jaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk2MTYzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "Quantum Computing", "Financial Modeling"],
      icon: <Cpu className="w-6 h-6" />,
      category: "Quantum Computing",
      github: "https://github.com/SaiKrishna-KK/Quantum-Inspired-Optimization-for-Financial-Risk-Modeling",
      demo: "#"
    }
  ];

  const otherProjects = [
    {
      title: "AI-Powered Research Assistant",
      description: "GPT-4 powered research companion with retrieval, guardrails, and prompts for literature review support.",
      tech: ["GPT-4", "Python", "Research"],
      icon: <Brain className="w-5 h-5" />,
      github: "#"
    },
    {
      title: "Cloud-Native Microservices",
      description: "Scalable microservices architecture with Docker, Kubernetes, and CI/CD pipelines.",
      tech: ["Docker", "Kubernetes", "CI/CD"],
      icon: <Cloud className="w-5 h-5" />,
      github: "#"
    },
    {
      title: "Security Audit Tool",
      description: "Automated security vulnerability scanner with OWASP compliance reporting.",
      tech: ["Security", "OWASP", "Automation"],
      icon: <Lock className="w-5 h-5" />,
      github: "#"
    },
    {
      title: "Chatbot Framework",
      description: "Multi-platform chatbot framework with NLP and conversation management.",
      tech: ["NLP", "Chatbot", "Framework"],
      icon: <Bot className="w-5 h-5" />,
      github: "#"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 to-orange-400 dark:from-cyan-300 dark:to-teal-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML, data engineering, quantum computing, 
            and full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-slate-900/80 from-slate-800/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-white/20 dark:bg-white/20 bg-slate-200/80 backdrop-blur-sm rounded-lg text-slate-800 dark:text-white">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="border-white/30 dark:border-white/30 border-slate-300 text-slate-800 dark:text-white bg-white/20 dark:bg-white/20 bg-slate-200/80">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl text-slate-800 dark:text-white font-semibold mb-3 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 dark:text-gray-300 text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 text-cyan-300 dark:text-cyan-300 text-blue-700 border-cyan-500/30 dark:border-cyan-500/30 border-blue-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-600 dark:to-blue-600 from-blue-600 to-indigo-600 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white border-0 flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 text-blue-600 dark:text-cyan-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-blue-50 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl text-slate-800 dark:text-white mb-8">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="text-blue-600 dark:text-cyan-300 mb-3 flex justify-center">
                      {project.icon}
                    </div>
                    <h4 className="text-sm text-slate-800 dark:text-white font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-300 dark:text-gray-300 text-slate-600 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center mb-3">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 text-cyan-300 dark:text-cyan-300 text-blue-700 border-cyan-500/30 dark:border-cyan-500/30 border-blue-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-600 dark:text-cyan-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-blue-50 w-full"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}