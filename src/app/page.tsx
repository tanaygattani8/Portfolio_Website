import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import SummarySection from "@/components/organisms/SummarySection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import RecommendationsSection from "@/components/organisms/RecommendationsSection";
import CertificationsSection from "@/components/organisms/CertificationsSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjects />
      <RecommendationsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
