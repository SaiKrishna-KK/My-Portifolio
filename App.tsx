import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { CosmicBackground } from "./components/CosmicBackground";
import { LightBackground } from "./components/LightBackground";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-white overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-all duration-500">
      {/* Background - switches based on theme */}
      {theme === 'dark' ? <CosmicBackground /> : <LightBackground />}
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="about">
            <HeroSection />
          </section>
          
          {/* Skills Section */}
          <section id="skills">
            <SkillsSection />
          </section>
          
          {/* Experience Section */}
          <section id="experience">
            <ExperienceSection />
          </section>
          
          {/* Education Section */}
          <section id="education">
            <EducationSection />
          </section>
          
          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
          </section>
          
          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}