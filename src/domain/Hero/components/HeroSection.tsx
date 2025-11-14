import { useState, useRef, useEffect } from "react";
import LinkButton from "@/share/components/LinkButton";
import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";

import demo1 from "@/assets/demo1.mp4";
import demo2 from "@/assets/demo2.mp4";
import demo3 from "@/assets/demo3.mp4";
import demo4 from "@/assets/demo4.mp4";

type VideoState = "black" | "css-anim" | "video";

interface VideoData {
  src: string;
  duration: number; // 영상 길이 (초)
  title: string;
}

const VIDEOS: VideoData[] = [
  { src: demo1, duration: 6, title: "MusicMate" },
  { src: demo2, duration: 14, title: "PickItBook" },
  { src: demo3, duration: 9, title: "Relife - 게시판" },
  { src: demo4, duration: 5, title: "Relife - 설문" },
];

function HeroSection() {
  const [videoState, setVideoState] = useState<VideoState>("black");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 33-42번 줄 교체
  useEffect(() => {
    if (videoState === "css-anim") {
      const nextIndex = (currentVideoIndex + 1) % VIDEOS.length;

      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "video";
      link.href = VIDEOS[nextIndex].src;
      document.head.appendChild(link);

      return () => {
        if (link.parentNode) {
          document.head.removeChild(link);
        }
      };
    }
  }, [videoState, currentVideoIndex]);

  // 영상이 끝나면 다음 영상으로 자동 전환
  const handleVideoEnded = () => {
    setIsPaused(true);

    // CSS 애니메이션 → 검은 배경
    setTimeout(() => {
      setVideoState("css-anim");
    }, 100);

    setTimeout(() => {
      setVideoState("black");
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 600);

    // 검은 배경에서 대기 후 다음 영상 시작
    setTimeout(() => {
      setIsPaused(false);
      setVideoState("css-anim");
    }, 2600);
  };

  // CSS 애니메이션 완료 후 영상 재생 시작
  useEffect(() => {
    if (videoState === "css-anim" && !isPaused && videoRef.current) {
      const timer = setTimeout(() => {
        setVideoState("video");
        videoRef.current?.play();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [videoState, isPaused]);

  // 초기 시작 (2초 후 첫 영상 재생)
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setVideoState("css-anim");
    }, 2000);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <div className="bg-primary-background w-full h-[100vh] relative overflow-hidden">
      {/* 비디오 레이어 */}
      {(videoState === "video" || videoState === "css-anim") && (
        <video
          ref={videoRef}
          src={VIDEOS[currentVideoIndex].src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoState === "video" ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          loop={false}
          onEnded={handleVideoEnded}
          preload="auto"
        />
      )}

      {/* 어두운 Overlay 레이어 (영상 재생 중에도 표시) */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          videoState === "video" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* CSS 애니메이션 레이어 (gradient sweep) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          videoState === "css-anim" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, rgba(130, 79, 147, 0.5) 0%, rgba(217, 217, 217, 0.2) 50%, rgba(130, 79, 147, 0.5) 100%)",
          backgroundSize: "200% 100%",
          animation:
            videoState === "css-anim"
              ? "gradientSweep 0.5s ease-in-out"
              : "none",
        }}
      />

      {/* 검은 배경 & 콘텐츠 */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          videoState === "black" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(246deg, rgba(217, 217, 217, 0.00) 41.66%, rgba(130, 79, 147, 0.15) 98.25%)",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center flex-col gap-2 p-10 md:p-0">
        <span className="text-7xl text-white font-semibold px-8 py-4 border-b border-white mb-4">
          Yoon Portpolio
        </span>
        <p className="text-xl text-white">안녕하세요</p>
        <p className="text-subtext">
          "왜"를 먼저 생각하고 "어떻게"를 구현하는 프론트엔드 개발자
          윤대웅입니다.
        </p>
      </div>

      {/* 버튼들 */}
      <div className="flex gap-2 flex-1 items-end absolute right-10 bottom-10 z-10">
        <LinkButton
          intent="primary"
          size="lg"
          className="py-2"
          onClick={() =>
            window.open("https://github.com/yoon5450", "newWindow")
          }
        >
          <img className="h-5 mr-2" src={githubIcon} alt="깃허브" />
          Github
        </LinkButton>
        <LinkButton
          intent="primary"
          size="lg"
          className="py-2 bg-white hover:bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-800"
          onClick={() =>
            window.open("https://yun-engene.tistory.com/", "newWindow")
          }
        >
          <img className="h-5 mr-2" src={tistoryIcon} alt="티스토리" />
          Tistory
        </LinkButton>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes gradientSweep {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;
