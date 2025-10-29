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
      {
        title: "GSAP 애니메이션을 이용한 유저 온보딩 페이지 구현",
        desc: "GSAP을 이용해 인터렉티브한 슬라이드형 온보딩 페이지를 구현, render 패턴을 이용해 확장이 용이한 형태로 설계",
      },
      {
        title: "커뮤니티 페이지 구현",
        desc: "검색, 게시글 조회, 좋아요, 댓글, 투표, 시나리오 공유, 글 수정-삭제 구현, RSC-RCC 구분된 query로 구현",
      },
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
    period: "2025-08-22 ~ 2025-09-08 (2.5주) 진행",
    background:
      "저조한 한국 연간 독서량 통계를 아이디어로 시작한 프로젝트입니다. 책을 선택하기 어려운 사람들에게 랜덤 룰렛으로 책을 쉽게 선택하도록 제시하고, 독서 챌린지로 독서 흥미를 높일 수 있도록 하는 서비스입니다.",
    architecture: pickItBookArchitecture,
    teamFlag: [
      "적용할 기술을 선정할 때는 비교군 분석 후 어떤 기술을 사용할지 결정하기.(트레이드오프)",
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
        title: "미션 달성 트리거 로직 구현",
        desc: "Zustand 클라이언트 기반 관리의 로직 분산과 클라이언트 대량 미션 데이터의 클라이언트 메모리 문제 진단 Supabase RPC를 이용한 이벤트 관리 및 해시값을 이용한 확정적 미션 수령, WebSocket 기반 실시간 피드백 구현",
      },
      {
        title: "긴급 이슈 대응 | 외부 API WhiteList 이슈",
        desc: "배포 당일 외부 API WhiteList 이슈 진단, 동적 IP 요청인 Vercel요청에서 고정 IP인 EC2 프록시 서버를 Nginx + Express로 구현해 정시 배포 성공.",
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
    youtubeUrl: "https://youtu.be/DApI3ST66kQ",
    tistoryUrl: "https://yun-engene.tistory.com/103",
  },
  {
    thumbnail: musicMateThumb,
    title: "MusicMate",
    desc: "음악 공유 실시간 채팅 SNS",
    period: "2025-07-22 ~ 2025-08-06 (2주) 진행",
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
