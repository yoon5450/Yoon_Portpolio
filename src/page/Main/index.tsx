// import AboutSection from "@/domain/About/components/AboutSection";
import ContactSection from "@/domain/Contact/components/ContactSection";
import HeroSection from "@/domain/Hero/components/HeroSection";
import IntroSection from "@/domain/Introdution/components/IntroSection";
import PeerReviewSection from "@/domain/PeerReview/components/PeerReviewSection";
import ProjectSection from "@/domain/Projects/components/ProjectSection";
import SkillsSection from "@/domain/Skills/components/SkillsSection";
import { headerControllStore } from "@/domain/Layout/stores/headerControllStore";
import { useEffect } from "react";

function Main() {
  const setFocusedItem = headerControllStore((state) => state.setFocusedItem);
  const isScrolling = headerControllStore((state) => state.isScrolled);

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["about", "peerReview", "skills", "projects", "contact"];
      const headerHeight = 60;
      const scrollPosition = window.scrollY + headerHeight + 100; // 여유 공간 추가

      let currentSection = null;
      let minDistance = Infinity;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const distance = Math.abs(scrollPosition - elementTop);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      if (currentSection) {
        setFocusedItem(
          currentSection as
            | "about"
            | "peerReview"
            | "skills"
            | "projects"
            | "contact"
        );
      }
    };

    // 스크롤 이벤트에 throttle 적용
    const throttledHandleScroll = () => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        handleScroll();
        throttleTimer = null;
      }, 16); // 약 60fps (1000ms / 60 ≈ 16ms)
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // 초기 실행
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [setFocusedItem, isScrolling]);

  return (
    <div className="relative w-full">
      <HeroSection />
      <IntroSection />
      <PeerReviewSection />
      <SkillsSection />
      <hr className="text-gray-200 px-[8%]" />
      <ProjectSection />
      <hr className="text-gray-200 px-[8%]" />
      <ContactSection />
    </div>
  );
}
export default Main;
