// import AboutSection from "@/domain/About/components/AboutSection";
import HeroSection from "@/domain/Hero/components/HeroSection";
import IntroSection from "@/domain/Introdution/components/IntroSection";
import PeerReviewSection from "@/domain/PeerReview/components/PeerReviewSection";
import SkillsSection from "@/domain/Skills/components/SkillsSection";

function Main() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PeerReviewSection />
      {/* <AboutSection /> */}
      <SkillsSection />
    </>
  );
}
export default Main;
