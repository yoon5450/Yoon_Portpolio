// import AboutSection from "@/domain/About/components/AboutSection";
import HeroSection from "@/domain/Hero/components/HeroSection";
import IntroSection from "@/domain/Introdution/components/IntroSection";
import PeerReviewSection from "@/domain/PeerReview/components/PeerReviewSection";
import ProjectSection from "@/domain/Projects/components/ProjectSection";
import SkillsSection from "@/domain/Skills/components/SkillsSection";

function Main() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PeerReviewSection />
      <SkillsSection />
      <hr className="text-gray-200 px-[8%]" />

      <ProjectSection />
    </>
  );
}
export default Main;
