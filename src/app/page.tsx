import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import SummarySection from "@/components/organisms/SummarySection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import CertificationsSection from "@/components/organisms/CertificationsSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
