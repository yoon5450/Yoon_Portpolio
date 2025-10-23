import relifeThumb from "@/assets/relifethumb.png";
import pickItBookThumb from "@/assets/pickitbookthumb.png";
import musicMateThumb from "@/assets/musicmatethumb.png";
import portpolioThumb from "@/assets/portpoliothumb.png";
import musicMateArchitecture from "@/assets/musicMateArchitecture.png";
import pickItBookArchitecture from "@/assets/pickItBookArchitecture.png";
import relifeArchitecture from "@/assets/relifeArchitecture.png";
import type { ProjectDetail } from "./types";

export const PROJECTS: ProjectDetail[] = [
  {
    thumbnail: relifeThumb,
    title: "Re:Life",
    desc: "AI 평행우주 시나리오 조회 플랫폼",
    period: "2025-09-15 ~ 2025-10-16 (4주) 진행",
    teammate: "프론트엔드팀 3명-백엔드팀 5명(프론트팀 팀장)",
    background:
      '인생의 중요한 선택에서 "만약 그때 다른 선택을 했다면?" 이라는 궁금증에서 출발한 프로젝트입니다. 사용자의 성향과 그 시점의 선택에 따라 평행우주 인생 시나리오를 시뮬레이션하는 서비스입니다.',
    architecture: relifeArchitecture,
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "GSAP",
      "react-hook-form",
      "zod",
      "axios",
      "Tanstack Query",
    ],
    charged: [
      {
        title: "프론트엔드 아키텍처 설계",
        desc: "접근 권한 기반 라우팅 구조 정의, Feature-based 디렉터리 구조로 코드 응집도 향상",
      },
      {
        title: "Server Action 기반 인증 시스템 구현",
        desc: "민감 정보(로그인 / 회원가입) Server Action으로 처리, CookieStore 및 Axios InterCeptor로 CSRF 토큰 자동 주입-CSRF 공격 방어",
      },
      {
        title: "Next.js App Router + Server Action 기반 인증 시스템 구현",
        desc: "민감 정보( 로그인 / 회원가입 )은 Server Action으로 처리, Axios Interceptor로 CSRF 토큰 자동 주입, CSRF 공격 방어, Next.js Middleware를 이용한 인증 상태별 라우팅 제어 (public/protected)",
      },
      {
        title: "Zod + React-Hook-Form 타입 안전 폼 시스템",
        desc: "스키마 기반 런타임 유효성 검증 + TS 타입 추론으로 안정성 확보, setValue / control를 이용한 중첩 폼 상태 관리",
      },
      {
        title: "SSR + Tanstack Query 캐시 전략",
        desc: "dehydrate 패턴으로 서버/클라이언트 캐시 일관성 유지, 팀원 온보딩을 위해 가이드 문서 작성",
      },
    ],
    deployStatus: "백엔드 배포 중단",
    deployUrl: "https://relife.kr",
    youtubeUrl: "",
  },
  {
    thumbnail: pickItBookThumb,
    title: "PickItBook",
    desc: "미션 기반 독서 커뮤니티",
    period: "2025-08-22 ~ 2025-09-08 (2.5주) 진행",
    background:
      "저조한 한국 연간 독서량 통계를 아이디어로 시작한 프로젝트입니다. 책을 선택하기 어려운 사람들에게 랜덤 룰렛으로 책을 쉽게 선택하도록 제시하고, 독서 챌린지로 독서 흥미를 높일 수 있도록 하는 서비스입니다.",
    architecture: pickItBookArchitecture,
    skills: [
      "React",
      "React Router",
      "TailwindCSS",
      "GSAP",
      "Supabase",
      "postgreSQL",
      "Vite",
      "Vercel",
      "AWS(EC2)",
    ],
    charged: [
      {
        title: "긴급 이슈 대응 | 외부 API WhiteList 이슈",
        desc: "배포 당일 외부 API WhiteList 이슈 진단, 동적 IP 요청인 Vercel요청에서 고정 IP인 EC2 프록시 서버를 Nginx + Express로 구현해 정시 배포 성공.",
      },
      {
        title: "미션 달성 트리거 로직 구현",
        desc: "Zustand 클라이언트 기반 관리의 로직 분산과 클라이언트 대량 미션 데이터의 클라이언트 메모리 문제 진단 Supabase RPC를 이용한 이벤트 관리 및 해시값을 이용한 확정적 미션 수령, WebSocket 기반 실시간 피드백 구현",
      },
      {
        title: "검색 기능 및 목록 페이지 구현",
        desc: "도서관 정보나루 API를 이용한 검색 및 목록 구현, Grid-Line 모드 변경 구현, 페이지네이션 구현",
      },
      {
        title: "책 정보 페이지 구현",
        desc: "보유 미션 기반 개인화된 상태 관리 구현과 캐시 관리를 통한 즉시성, 조회 효율성 관리, 낙관적 업데이트 적용",
      },
    ],
    teammate: "프론트팀 4명(팀장)",
    deployStatus: "배포 중",
    deployUrl: "https://pick-it-book.vercel.app/",
  },
  {
    thumbnail: musicMateThumb,
    title: "MusicMate",
    desc: "음악 공유 실시간 채팅 SNS",
    period: "2025-07-22 ~ 2025-08-06 (2주) 진행",
    background:
      "음악 관련 커뮤니티는 장르별로 파편화되어 있어 접근하기 어렵고, 게시판 형태의 오래된 디자인인 경우가 많아 시작한 프로젝트입니다. 실시간성을 강조하고, 즉시 파일을 공유할 수 있는 음악 SNS 서비스입니다.",
    architecture: musicMateArchitecture,
    skills: [
      "React",
      "Vite",
      "CSS",
      "MediaRecorder API",
      "Supabase",
      "Supabase Realtime",
      "Vercel",
    ],
    charged: [
      {
        title: "프로젝트 아키텍처 및 초기 구조 설계",
        desc: "SPA 라우팅 구조 설계 및 빠른 구현으로 팀원 온보딩 지원, Supabase 스키마 설계 및 RLS 설정, 일정 지연이 발생했을 때 핵심 기능(실시간 채팅, 음악 공유)에 집중하도록 MVP 조정 결정",
      },
      {
        title: "실시간 채팅 시스템 구현",
        desc: "Supabase Realtime 기반 메세지, 이미지, 음성 파일 전송, 스크롤 위치별 동작 최적화 (탐색 중 고정 / 최하단 자동 스크롤), IntersectionObserver 무한 스크롤",
      },
      {
        title: "음성 녹음 및 재생 기능",
        desc: "MediaRecorder API로 음성 녹음, Blob 처리, 커스텀 오디오 플레이어 (재생/일시정지, 진행바), Supabase Storage 업로드",
      },
    ],
    teammate: "프론트팀 4명(팀장)",
    deployStatus: "배포 중",
    deployUrl: "https://music-mate-kappa.vercel.app/",
  },
  {
    thumbnail: portpolioThumb,
    title: "Portpolio",
    desc: "포트폴리오 사이트",
    period: "2025-10-20 ~ 진행중",
    background: "개인 포트폴리오 웹페이지를 만들고 싶어 제작하게 되었습니다.",
    skills: ["React", "Vite", "TailwindCSS", "Framer Motion", "Vercel"],
    teammate: "개인 프로젝트",
    deployStatus: "배포 중",
    deployUrl: "https://www.yoondaewoong.shop/",
  },
];
