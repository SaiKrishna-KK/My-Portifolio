import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { useState } from "react";

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "Java", "C++", "SQL", "Bash", "C#"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Engineering",
      icon: "🔄",
      skills: ["Spark", "PySpark", "Airflow", "Kafka", "DBT", "ETL Pipelines"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake", "Redshift", "Hive"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      skills: ["AWS", "ECS", "EC2", "S3", "SageMaker", "Lambda", "GCP", "Azure"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps/MLOps",
      icon: "🚀",
      skills: ["Docker", "Kubernetes", "Terraform", "MLflow", "GitHub Actions", "CI/CD"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "ML & AI",
      icon: "🧠",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "BERT", "GPT", "RAG", "YOLOv8"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Security & Compliance",
      icon: "🔒",
      skills: ["OAuth 2.0", "JWT", "RBAC", "HIPAA", "GDPR"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI"],
      color: "from-cyan-500 to-blue-500"
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
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning machine learning, data engineering, 
            cloud architecture, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group"
            >
              <Card className="p-6 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 h-full">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: hoveredCategory === category.title ? 1.2 : 1,
                      rotate: hoveredCategory === category.title ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl mb-4"
                  >
                    {category.icon}
                  </motion.div>
                  
                  <h3 className="text-xl text-slate-800 dark:text-white group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-600 transition-colors mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.3
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`bg-gradient-to-r ${category.color} text-white text-xs px-2 py-1`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-slate-800 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "System Design", "Microservices", "RESTful APIs", "GraphQL", 
              "WebRTC", "Real-time Processing", "Data Visualization", 
              "Statistical Analysis", "A/B Testing", "Performance Optimization"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 text-blue-600 dark:text-cyan-300 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-blue-50 transition-all duration-200"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}