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
    period: "2025-09-15 ~ 2025-10-16 (4주)",
    teammate: "프론트엔드팀 3명-백엔드팀 5명 (팀장)",
    background:
      '인생의 중요한 선택에서 "만약 그때 다른 선택을 했다면?" 이라는 궁금증에서 출발한 프로젝트입니다. 사용자의 성향과 그 시점의 선택에 따라 평행우주 인생 시나리오를 시뮬레이션하는 서비스입니다.',
    architecture: relifeArchitecture,
    teamFlag: [
      "백엔드팀과 원팀으로 협업해 서로 윈윈하기",
      "결정은 단순히 이야기로 끝나지 않고, 문서를 남겨 명확히 정의하기",
      "예의는 지키되, 의견 제시를 망설이지 않기",
    ],
    skills: [
      "Typescript",
      "React",
      "Next.js",
      "TailwindCSS",
      "GSAP",
      "react-hook-form",
      "zod",
      "axios",
      "Tanstack Query",
    ],
    skillReason: [
      {
        skill: "Typescript",
        reason:
          "코드 작성 단계에서 타입을 걸러줘 안정적인 코드 작성이 가능한 장점이 있고, 사용하는 라이브러리들도 모두 Type에 강점이 있는 라이브러리였기 때문에 연계성이 좋다고 판단했다.",
      },
      {
        skill: "React",
        reason:
          "팀원 모두 팀 활동을 거치면서 컴포넌트 기반의 작업의 재사용성과 작업 분리에 대해서 잘 이해하고 있었기 때문에 좋은 선택지라고 생각했다.",
      },
      {
        skill: "Next.js",
        reason:
          "백엔드에서 많은 데이터를 받아오고 많은 페이지를 상정했기 때문에 서버 컴포넌트, 최적화 기능, 라우팅 구조, SEO에서 큰 장점이 있다고 생각했다. 때문에 Next를 사용하기로 결정하게 되었다.",
      },
      {
        skill: "TailwindCSS",
        reason:
          "CSS 프레임워크로 빠른 스타일링과 일관된 디자인 시스템 구축을 위해 선택했다.",
      },
      {
        skill: "GSAP",
        reason:
          "팀원들이 익숙한 라이브러리라 온보딩이 쉽다고 판단했고, 라이브러리의 다양한 기능이 무료로 풀렸기 때문에 강력한 기능들을 사용해보고 싶은 욕심이 있었다. 스크롤 제어에서의 정밀함이 장점이라고 생각해 선택했다.",
      },
      {
        skill: "react-hook-form",
        reason:
          "유저 입력이 많은 서비스였기 때문에 유효성 검증에 react-hook-form을 이용하면 유저 입력 검증을 쉽게 구현할 수 있다고 생각해 선택했다.",
      },
      {
        skill: "Zod",
        reason:
          "백엔드 협업에서 데이터 구조는 빈번하게 있을 수 있다고 판단해 런타임 타입 검증이 필요하다고 생각해 Zod를 이용하려고 했다.",
      },
      {
        skill: "axios",
        reason:
          "간단하게 사용할 수 있는 fetch, 공용 인스턴스 구현 기능이 백엔드 협업에서 헤더 설정과 인터셉터를 이용한 전처리에 큰 장점이 있다고 느껴 선택했다.",
      },
      {
        skill: "Tanstack Query",
        reason:
          "클라이언트에서의 캐시 관리에 큰 장점이 있는 데 더해 RSC에서도 dehydrate 패턴으로 데이터를 받아오는 데 큰 장점이 있다고 느껴 선택했다.",
      },
    ],
    charged: [
      {
        title: "프론트엔드 아키텍처 설계 및 팀 리드",
        desc: "Feature-based 디렉터리 구조로 코드 응집도 향상, 팀원 온보딩을 위한 기술 문서 작성으로 코드 작성 일관성 개선",
      },
      {
        title: "Next.js App Router + Server Action 기반 인증 시스템 구현",
        desc: "로그인 / 회원가입 로직을 숨기기 위해 Server Action으로 처리, Next.js Middleware를 이용한 로그인 상태별 라우팅 그룹 접근 제어",
      },
      {
        title: "CSRF 처리를 위한 서버, 클라이언트 공용 fetcher 구현",
        desc: "헤더 설정과 CSRF 인증 실패 재인증 로직을 거치는 공용 fetcher 구현으로 팀 로직 일관 처리",
      },
      {
        title: "Zod + React-Hook-Form 타입 안전 폼 시스템",
        desc: "스키마 기반 런타임 유효성 검증 + ts 타입 추론, setValue / control를 이용한 중첩 폼 상태 관리",
      },
      {
        title: "SSR + Tanstack Query 캐시",
        desc: "dehydrate 패턴으로 서버/클라이언트 캐시 일관성 유지",
      },
      {
        title: "커뮤니티 페이지 구현",
        desc: "게시글 CRUD, 좋아요 구현, 댓글 CRUD, 좋아요 구현, 디테일 페이지 동적 메타데이터 SEO 설정, SSR-CSR 구분 처리",
      },
    ],
    achievements: [
      "DDD 개념에서 파생된 Feature-based 디렉터리 구조로 코드 탐색 시간 20% 단축",
      "팀원 온보딩 지원으로 프로젝트의 모든 클라이언트 요청을 Tanstack Query로 일관성있게 처리",
      "헤더 설정과 CSRF 인증 실패 재인증 로직을 거치는 공용 fetcher 구현으로 팀 코드 구현 복잡도 감소",
      "커뮤니티 페이지 메타데이터 설정으로 SEO 평가 점수 60점에서 100점으로 상승",
      "커뮤니티 페이지 캐싱 적용으로 요청수 40%이상 감소",
    ],
    deployStatus: "백엔드 배포 중단",
    deployUrl: "https://relife.kr",
    youtubeUrl: "https://youtu.be/9T7L8-4rH9M",
    tistoryUrl: "https://yun-engene.tistory.com/106",
  },
  {
    thumbnail: pickItBookThumb,
    title: "PickItBook",
    desc: "미션 기반 독서 커뮤니티",
    period: "2025-08-22 ~ 2025-09-08 (2.5주)",
    background:
      "저조한 한국 연간 독서량 통계를 아이디어로 시작한 프로젝트입니다. 책을 선택하기 어려운 사람들에게 랜덤 룰렛으로 책을 쉽게 선택하도록 제시하고, 독서 챌린지로 독서 흥미를 높일 수 있도록 하는 서비스입니다.",
    architecture: pickItBookArchitecture,
    teamFlag: [
      "적용할 기술을 선정할 때는 비교군 분석 후 어떤 기술을 사용할지 결정하기.",
      "새로운 기술을 적극적으로 적용하되, 설명할 수 있는 필요한 이유로 결정하기",
      "컴포넌트를 설계할 때 확장성을 고려하고 중복으로 사용될 자리에는 커뮤니케이션을 통해 컴포넌트 구현을 조율하기",
    ],
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
    skillReason: [
      {
        skill: "React",
        reason:
          "팀원 모두 팀 활동을 거치면서 컴포넌트 기반의 작업의 재사용성과 작업 분리에 대해서 잘 이해하고 있었기 때문에 좋은 선택지라고 생각했다.",
      },
      {
        skill: "React Router",
        reason:
          "SPA 라우팅 구조 설계가 필요했고, React 생태계에서 가장 안정적인 라이브러리라고 판단했다.",
      },
      {
        skill: "TailwindCSS",
        reason:
          "CSS 프레임워크로 빠른 스타일링과 일관된 디자인 시스템 구축을 위해 선택했다.",
      },
      {
        skill: "GSAP",
        reason:
          "기존에 동일하게 학습했던 라이브러리였고, 도움 받기도 용이한 라이브러리라고 판단해 선택했다.",
      },
      {
        skill: "Supabase",
        reason:
          "대시보드를 이용해 상대적으로 쉽게 사용할 수 있고, 실시간 기능과 RPC를 통한 복잡한 미션 트리거 로직 구현이 필요해 백엔드 서비스로 선택했다.",
      },
      {
        skill: "postgreSQL",
        reason:
          "Supabase에서 RPC, VIEW, RLS를 생성하는 데 사용해야 하는 데이터베이스이고, 함수 구현을 위해 사용했다.",
      },
      {
        skill: "Vite",
        reason: "빠른 개발 환경과 HMR을 통한 개발 생산성 향상을 위해 선택했다.",
      },
      {
        skill: "Vercel",
        reason:
          "간편한 배포와 자동 CI/CD, 프리뷰 기능을 통한 팀 협업 효율성을 위해 선택했다.",
      },
      {
        skill: "AWS(EC2)",
        reason:
          "기존에 가지고 있었던 AWS계정이 아직 토큰이 있었고, 외부 API WhiteList 이슈 해결을 위한 고정 IP 프록시 서버 구축이 필요해 프로젝트 마감 날에 급하게 추가했다.",
      },
    ],
    charged: [
      {
        title: "프론트엔드 아키텍처 설계 및 팀 리드",
        desc: "React-Router를 이용한 라우팅 구조 설계, 기술 선정 회의 주도 및 기술 선정 문서 작성",
      },
      {
        title: "미션 달성 트리거 로직 구현",
        desc: "해시값을 이용한 확정적 미션 수령으로 일관성 있는 미션 수령, Supabase RPC를 이용한 이벤트 로그 관리 및 WebSocket 기반 미션 달성 실시간 피드백 구현",
      },
      {
        title: "긴급 이슈 대응 | 외부 API WhiteList 이슈",
        desc: "배포 당일 외부 API WhiteList 이슈 진단, 고정 IP인 EC2 프록시 서버를 Nginx + Express로 구현해 문제 해결",
      },
      {
        title: "검색 기능 및 목록 페이지 구현",
        desc: "도서관 정보나루 API를 이용한 검색 및 목록 구현, Grid-Line 모드 변경 구현, 페이지네이션 구현",
      },
      {
        title: "책 정보 페이지 구현",
        desc: "보유 미션 기반 개인화된 상태 관리 구현, 캐시 관리를 통한 즉시성, 조회 효율성 관리, 낙관적 업데이트 적용",
      },
    ],
    achievements: [
      "미션 달성 트리거의 기존 구현 계획이었던 클라이언트 기반 처리 로직의 메모리 문제와 로직 처리 관리 문제 진단, 서버에 트리거 매니저를 구현하는 방법을 선택해 미션 데이터 메모리 문제 및 로직 처리 문제 해결",
      "동적 IP 할당인 Vercel 배포 서버의 API WhiteList 이슈로 인한 데이터 조회 불가 문제 확인, 3시간 이내 처리로 EC2 서버 구현 후 정시 배포 성공",
      "WebSocket 기반 실시간 피드백과 보유 미션 기반 개인화된 페이지로 UX 개선",
      "디테일 페이지, 목록 페이지 캐시 관리로 요청량 20% 감소",
    ],
    teammate: "프론트팀 4명 (팀장)",
    deployStatus: "배포 중",
    deployUrl: "https://pick-it-book.vercel.app/",
    youtubeUrl: "https://youtu.be/DApI3ST66kQ",
    tistoryUrl: "https://yun-engene.tistory.com/103",
  },
  {
    thumbnail: musicMateThumb,
    title: "MusicMate",
    desc: "음악 공유 실시간 채팅 SNS",
    period: "2025-07-09 ~ 2025-08-06 (4주)",
    background:
      "음악 관련 커뮤니티는 장르별로 파편화되어 있어 접근하기 어렵고, 게시판 형태의 오래된 디자인인 경우가 많아 시작한 프로젝트입니다. 실시간성을 강조하고, 즉시 파일을 공유할 수 있는 음악 SNS 서비스입니다.",
    architecture: musicMateArchitecture,
    teamFlag: [
      "라이브러리 사용을 지양하고, 최대한 직접 구현하기",
      "상태 기반 프로그래밍을 이해하고, 선언적으로 코드 작성하기",
      "주기적으로 구현 내용을 공유하고, PR 리뷰를 통해 코드 리뷰하기",
    ],
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
        title: "프로젝트 아키텍처 및 팀 리드",
        desc: "Supabase 스키마 설계 및 유저 권한별 RLS 관리, 일정 지연 발생 시 핵심 기능(실시간 채팅, 음악 공유)에 집중하도록 MVP 조정 결정",
      },
      {
        title: "실시간 채팅 시스템 구현",
        desc: "Supabase Realtime 기반 실시간 메세지, 이미지, 음성 파일 전송, IntersectionObserver를 이용한 무한 스크롤 구현",
      },
      {
        title: "음성 녹음 및 재생 기능",
        desc: "MediaRecorder API를 이용한 음성 녹음, Blob 처리, 유저 음성 파일을 Supabase Storage로 업로드 처리",
      },
      {
        title: "이미지 최적화, 요청 최적화",
        desc: "이미지 src 작성 방법 개선으로 캐싱 개선 및 요청량 감소, 유저 인증 로직을 권한이 필요한 요청마다 요청하던 방식에서 개선",
      },
    ],
    achievements: [
      "MVP 조정으로 MVP 기능 90% 이상 완성 및 정시 배포 성공",
      "기존 모든 채팅 데이터를 불러오던 방식에서 무한 스크롤 구현으로 UX 개선 및 요청 데이터 양 40% 이상 감소",
      "스크롤 위치별 동작 최적화로 UX 개선",
      "프로필 이미지 URL 타임스탬프 삽입으로 인해 브라우저 캐싱 방지 및 요청 트래픽 문제 발견. 타임스탬프 제거 후 CDN 트래픽 80% 감소",
      "Supabase 대시보드 분석 후 인증 요청에 비정상적 트래픽 급증 발견. 유저 정보 스토어 로직 개선 및 프로필 URL 정적 생성 유틸 함수 구현으로 로직 개선 후 인증 요청 60% 감소",
    ],
    teammate: "프론트팀 4명 (팀장)",
    deployStatus: "배포 중",
    deployUrl: "https://music-mate-kappa.vercel.app/",
    youtubeUrl: "https://youtu.be/rBm-t0leH-o",
    tistoryUrl: "https://yun-engene.tistory.com/86",
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
    tistoryUrl: "",
  },
];
