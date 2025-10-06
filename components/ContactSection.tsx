import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "krish.ms2023@gmail.com",
      href: "mailto:krish.ms2023@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "SaiKrishna-KK",
      href: "https://github.com/SaiKrishna-KK"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "sai-krishna-vishnumolakala",
      href: "https://linkedin.com/in/sai-krishna-vishnumolakala"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Schedule",
      value: "Book a Meeting",
      href: "#"
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
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-2xl text-slate-800 dark:text-white font-semibold mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 dark:text-gray-300 text-slate-600 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-white/10 dark:bg-white/10 bg-white border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 placeholder-slate-500 focus:border-cyan-500 dark:focus:border-cyan-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 dark:text-gray-300 text-slate-600 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-white/10 dark:bg-white/10 bg-white border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 placeholder-slate-500 focus:border-cyan-500 dark:focus:border-cyan-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 dark:text-gray-300 text-slate-600 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 dark:bg-white/10 bg-white border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 placeholder-slate-500 focus:border-cyan-500 dark:focus:border-cyan-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 dark:text-gray-300 text-slate-600 mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion"
                    className="bg-white/10 dark:bg-white/10 bg-white border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 placeholder-slate-500 focus:border-cyan-500 dark:focus:border-cyan-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 dark:text-gray-300 text-slate-600 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/10 dark:bg-white/10 bg-white border-cyan-500/30 dark:border-cyan-500/30 border-blue-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 placeholder-slate-500 focus:border-cyan-500 dark:focus:border-cyan-500 focus:border-blue-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-600 dark:to-blue-600 from-blue-600 to-indigo-600 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl text-slate-800 dark:text-white font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 dark:text-gray-300 text-slate-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you have a specific project in mind 
                or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block"
                >
                  <Card className="p-4 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-100 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 rounded-lg text-blue-600 dark:text-cyan-300 group-hover:bg-cyan-500/30 dark:group-hover:bg-cyan-500/30 group-hover:bg-blue-200 transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="text-slate-800 dark:text-white font-medium group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-600 transition-colors">
                          {contact.label}
                        </h4>
                        <p className="text-gray-400 dark:text-gray-400 text-slate-500 text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="p-4 bg-white/5 dark:bg-white/5 bg-slate-50 border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 dark:bg-cyan-500/20 bg-blue-100 rounded-lg text-blue-600 dark:text-cyan-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 dark:text-white font-medium">
                      Location
                    </h4>
                    <p className="text-gray-400 dark:text-gray-400 text-slate-500 text-sm">
                      Baltimore, MD • Open to Remote Work
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}