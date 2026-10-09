import Header from "@/components/header";
import HeroSection from "@/components/home/hero-section";
import WorkSection from "@/components/home/work-section";
import AboutSection from "@/components/home/about-section";
import SkillsSection from "@/components/home/skills-section";
import ExperienceSection from "@/components/home/experience-section";
import WorkbenchSection from "@/components/home/workbench-section";
import ContactSection from "@/components/home/contact-section";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkbenchSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
