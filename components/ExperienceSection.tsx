import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Intellectsoft",
      period: "Jun 2025 - Present",
      location: "United States · Remote",
      type: "Freelance",
      highlights: [
        "Designed, developed, and deployed enterprise applications with embedded AI/ML models using Python, Flask, TensorFlow, and PyTorch, integrating fraud and anomaly detection systems that improved accuracy by 22% and reduced false positives in financial operations",
        "Built and maintained Apache Spark, Airflow, and Kafka pipelines processing 15TB+ of structured and streaming data daily, improving latency by 30% across analytical workflows",
        "Created RESTful APIs and FastAPI microservices to serve predictive ML models in production, reducing transaction-risk scoring response times by 20% while ensuring scalability and uptime",
        "Integrated BERT and Hugging Face Transformers into NLP platforms and customer support chatbots, increasing query resolution accuracy to 85% and cutting handling time by 40%",
        "Designed optimized Snowflake and Redshift data warehouses, using advanced SQL and materialized views to boost reporting performance by 28%",
        "Containerized ML workflows with Docker and Kubernetes, orchestrated through AWS SageMaker and Azure ML, reducing deployment timelines from 3 weeks to 5 days",
        "Delivered MLOps pipelines with MLflow and Jenkins, increasing release frequency by 40% and enabling faster iteration",
        "Built real-time dashboards in Power BI and Tableau, visualizing AI KPIs, fraud metrics, and system health for faster executive decision-making",
        "Ensured data security and compliance (HIPAA, GDPR, SOX) through OWASP standards, encryption, and role-based access control"
      ],
      skills: ["Python", "Java", "C++", "SQL", "Flask", "FastAPI", "Django", "RESTful APIs", "Microservices", "WebRTC", "gRPC", "Systems Design", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Apache Kafka", "PySpark", "Apache Airflow", "ETL", "Data Engineering"]
    },
    {
      title: "Machine Learning, Backend & iOS Engineer",
      company: "Pillowtalks",
      period: "Jun 2025 - Oct 2025",
      location: "Remote",
      type: "Contract",
      highlights: [
        "Reduced LLM pipeline latency from 10-15s to 5-8s using Pipecat with adaptive scheduling and parallel execution",
        "Increased pipeline accuracy to 95% by refining STT/TTS alignment, tuning inference, and adding fallback providers",
        "Designed and deployed distributed STT → LLM → TTS pipelines powering real-time voice features for thousands of users",
        "Engineered full-stack features including iOS WebRTC clients and backend APIs, ensuring seamless end-to-end integration",
        "Built and maintained AWS microservices with Kubernetes auto-scaling, ensuring scalable, fault-tolerant distributed systems"
      ],
      skills: ["Python", "AWS", "Kubernetes", "ML Pipelines", "iOS", "WebRTC", "STT/TTS"]
    },
    {
      title: "Data Analyst",
      company: "DoSA, University of Maryland, Baltimore County",
      period: "Jun 2024 - Jun 2025",
      location: "Baltimore, MD",
      type: "Part-time",
      highlights: [
        "Built predictive models with Scikit-learn and Statsmodels to forecast student engagement, applying statistical validation to optimize university resource allocation",
        "Designed Tableau dashboards with automated validation pipelines using Python, enhancing data workflows and boosting data integrity by 20%",
        "Developed SQL-based ETL workflows for large-scale financial data processing, reducing reporting delays and improving query performance by 30%",
        "Built AI-powered analytics dashboards combining Python, Tableau, and predictive modeling, providing leadership with actionable insights into engagement trends",
        "Collaborated with stakeholders, administrators, and developers to align analytics workflows with evolving requirements"
      ],
      skills: ["Python", "SQL", "Tableau", "Scikit-learn", "ETL", "Statistical Analysis"]
    },
    {
      title: "Software Engineer",
      company: "TCS (Tata Consultancy Services)",
      period: "Sep 2021 - July 2023",
      location: "India",
      type: "Full-time",
      highlights: [
        "Modernized full-stack enterprise apps (Python/Django/Flask, React.js, Java), migrating monoliths to microservices for retail and banking clients, boosting scalability and maintainability",
        "Built ETL pipelines (PySpark, Hive, Talend, SQL) integrating ERP/CRM/transaction data into Snowflake, cutting reporting timelines by 40% and improving accuracy",
        "Automated ML pipelines (TensorFlow, Scikit-learn) for sales forecasting, improving accuracy 15% and optimizing demand planning",
        "Designed real-time ingestion with Kafka for IoT and financial logs, scaling to 50K+ events/sec with minimal latency, enabling fraud/anomaly detection",
        "Optimized SQL/PLSQL queries in Oracle/PostgreSQL, reducing runtime 25% and improving reporting efficiency. Built test automation frameworks (Selenium, JUnit, PyTest), raising coverage 85% and shortening QA cycles",
        "Delivered Tableau/Power BI dashboards for KPIs and ML performance, accelerating business decisions by 20%",
        "Deployed ML-enabled apps to Azure/GCP (Synapse, Vertex AI), reducing infra costs 18%. Collaborated in Agile teams (PMs, BAs, QA), achieving 95% sprint completion",
        "Authored SOPs, playbooks, and ML guidelines, standardizing adoption and reducing onboarding time 30%"
      ],
      skills: ["Python", "Java", "Django", "Flask", "React.js", "PySpark", "Snowflake", "TensorFlow", "Kafka", "Azure", "GCP"]
    },
    {
      title: "AI/ML Research Intern",
      company: "Dr. Sobin CC, SRM University",
      period: "Aug 2022 - Jun 2023",
      location: "Chennai, India",
      type: "Internship",
      highlights: [
        "Authored 3 IEEE publications on emotion recognition, classroom engagement, and AI-assisted research",
        "Developed real-time diagnostic pipeline (TensorFlow + live videoAcquisition), boosting diagnostic accuracy",
        "Designed GPT-4 research companion with retrieval, guardrails, and prompts for literature review support"
      ],
      skills: ["TensorFlow", "Research", "Computer Vision", "GPT-4", "IEEE Publications"]
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
            Professional Journey
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and driving innovation across machine learning, 
            data engineering, and full-stack development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600 dark:from-cyan-500 dark:to-teal-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-500 dark:to-teal-500 from-blue-500 to-indigo-500 rounded-full transform -translate-x-1/2 z-10 border-4 border-slate-900 dark:border-slate-900 border-white"
                />

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="p-6 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-xl text-slate-800 dark:text-white group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-600 transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-300 mt-1">
                            <span>{experience.company}</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                        <Badge variant="outline" className="border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 text-blue-600 dark:text-cyan-300 w-fit">
                          {experience.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 dark:text-gray-400 text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + highlightIndex * 0.1 }}
                            className="flex items-start gap-2 text-gray-300 dark:text-gray-300 text-slate-600 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-400 bg-blue-500 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + skillIndex * 0.05 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 text-cyan-300 dark:text-cyan-300 text-blue-700 border-cyan-500/30 dark:border-cyan-500/30 border-blue-200 text-xs"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}