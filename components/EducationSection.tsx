import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Maryland, Baltimore County",
      period: "Expected June 2025",
      location: "Baltimore, MD",
      gpa: "3.8/4.0",
      coursework: [
        "Distributed Systems",
        "Analysis of Algorithms", 
        "Operating Systems",
        "Advanced Data Structures"
      ],
      type: "Masters",
      color: "from-cyan-500 to-blue-500"
    },
    {
      degree: "BTech. in Computer Science and Engineering",
      specialization: "Specialization in Machine Learning | Minor in English Literature",
      institution: "SRM University",
      period: "Graduated June 2023",
      location: "Chennai, India",
      gpa: "8.5/10.0",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing"
      ],
      type: "Bachelors",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      icon: <Award className="w-5 h-5" />,
      color: "text-orange-400 dark:text-orange-400 text-orange-600"
    },
    {
      title: "TensorFlow Developer Certificate",
      organization: "Google",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-400 dark:text-blue-400 text-blue-600"
    },
    {
      title: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      icon: <Award className="w-5 h-5" />,
      color: "text-cyan-400 dark:text-cyan-400 text-cyan-600"
    },
    {
      title: "3 IEEE Publications",
      organization: "IEEE",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-purple-400 dark:text-purple-400 text-purple-600"
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
            Education & Certifications
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in computer science, 
            machine learning, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 h-full">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl text-slate-800 dark:text-white font-semibold">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-300 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 text-blue-600 dark:text-cyan-300">
                      {edu.type}
                    </Badge>
                  </div>

                  {/* Specialization */}
                  {edu.specialization && (
                    <p className="text-gray-300 dark:text-gray-300 text-slate-600 text-sm italic">
                      {edu.specialization}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-slate-500">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 dark:text-gray-400 text-slate-500 text-sm">GPA:</span>
                    <span className="text-blue-600 dark:text-cyan-300 font-semibold">
                      {edu.gpa}
                    </span>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-400 text-slate-500 mb-2">
                      Key Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.div
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + courseIndex * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 text-cyan-300 dark:text-cyan-300 text-blue-700 border-cyan-500/30 dark:border-cyan-500/30 border-blue-200 text-xs"
                          >
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl text-slate-800 dark:text-white mb-8">
            Professional Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 text-center">
                  <div className={`${achievement.color} mb-2 flex justify-center`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-sm text-slate-800 dark:text-white font-semibold mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-400 text-slate-500">
                    {achievement.organization}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}