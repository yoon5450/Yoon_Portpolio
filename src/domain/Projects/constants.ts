import relifeThumb from "@/assets/relifethumb.png";
import pickItBookThumb from "@/assets/pickitbookthumb.png";
import musicMateThumb from "@/assets/musicmatethumb.png";
import portpolioThumb from "@/assets/portpoliothumb.png";
import musicMateArchitecture from "@/assets/musicMateArchitecture.png";
import pickItBookArchitecture from "@/assets/pickItBookArchitecture.png";
import relifeArchitecture from "@/assets/relifeArchitecture.png";
import relifeTrouble1 from "@/assets/relifeTrouble1.png";
import relifeTrouble2 from "@/assets/relifeTrouble2.png";
import pickItBookTrouble1 from "@/assets/pickitbookTrouble1.png";
import pickItBookTrouble2 from "@/assets/pickitbookTrouble2.png";
import musicMateTrouble1 from "@/assets/musicmateTrouble1.png";
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
    troubleShootings: [
      {
        title: "SSR + CSR 캐싱 문제",
        background:
          "서버에서는 Next의 fetch, 클라이언트에서는 Axios + Tanstack Query를 사용했다. 때문에 상황에 따른 쿼리키 무효화 방식이 다를 수밖에 없었다. 이로 인해 캐시 관리의 복잡도가 증가하고 의도치 않은 path의 캐시 무효화가 발생했다.",
        solution:
          "조회 Query를 사용하는 모든 컴포넌트를 CSR 방식을 이용하는 것은 Next를 사용하는 장점을 죽인다고 생각해 서버 컴포넌트에 dehydrate 패턴을 사용해 QueryClient에 데이터를 전달하는 구조로 의존적으로 동작하도록 변경해 캐시를 관리했다.",
        result:
          "커뮤니티 페이지에 캐싱을 성공적으로 적용해 요청수를 40% 감소시켰다. 구현 패턴 개선을 통해 의도치 않은 path 초기화 제거, 일관성 있는 키 관리, Provider로 제공된 단일 QueryClient에 의존적인 구조로 변경해 쿼리 키 관리 로직 개선 효과를 얻을 수 있었다. 또한 SSR 방식을 유지하기로 결정함으로써 SEO를 개선할 수 있었다.",
        thumnail: relifeTrouble1,
      },
      {
        title: "CSRF 토큰 관리",
        background:
          "CSRF 공격을 방어하기 위해 POST/DELETE/UPDATE 요청에 대해 CSRF 토큰을 헤더에 싣어 보내줘야 했다. 백엔드 구현 중 이슈로 인해 로그인 구현이 매우 지연된 상태였고, 최대한 빠르게 구현하면서 다른 프론트엔드 팀원은 로직을 자세히 모르더라도 요청을 쉽게 하도록 구현하려고 했다.",
        solution:
          "서버에서의 토큰 관리와 클라이언트의 토큰 관리 방법은 서로 다르다. 그래서 양쪽에서 사용할 수 있는 인스턴스를 구성하면서 403 오류 발생 시 재요청하도록 로직을 구현했다. 모든 요청에 대해 해당 인스턴스들을 거치도록 팀에 공유하고 팀의 모든 요청은 fetcher 유틸 함수와 axios instance를 거치도록 변경했다.",
        result:
          "프로젝트 전체의 요청을 SSR에서 관리하는 nextFetcher, CSR에서 관리하는 instance api를 통과하도록 설계해 문제 발생 시 일관성 있게 대응 할 수 있게 되었고, 다른 팀원들은 자세한 로직을 모르더라도 쉽게 적용할 수 있도록 만들어졌다.",
        thumnail: relifeTrouble2,
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
    troubleShootings: [
      {
        title: "미션 트리거 로직 문제 개선",
        background:
          "초기 기획 단계에서는 미션 트리거 관리 로직을 Zustand Store를 이용해 클라이언트단에서 제어하기로 계획했었다. 그러나 실제 구현 단계에서 실행을 점검하던 중 다음의 세 가지 문제가 있었다. 유저가 대량의 미션을 가지고 있다면 모든 미션에 대한 정보를 클라이언트에서 가져야 한다, 팬인/팬아웃 제어 복잡도 예측, 미션 조건 분석으로 인한 클라이언트 연산 부하",
        solution:
          "구상한 해결 방안은 세 가지로, 이벤트 종류 줄이기(팬인 복잡도 줄이기), 유저 직접 클릭해서 완료 처리하기(실시간 기능 제거), 서버에서 구현하기(클라이언트 복잡도 제거) 기능 복잡도를 줄이는 방법은 서비스의 메인 기능이라고 할 수 있는 미션 기능 UX가 떨어질 것으로 예측해 서버로 책임을 이전하기로 제안했다.",
        result:
          "Supabase RPC를 이용해 클라이언트에서 이벤트가 발생할 경우 이벤트 로그를 서버로 보내고, 그 로그를 통해 서버 DB의 유저가 수령한 미션의 완료여부를 판별하고 유저 완료 미션 테이블에 컬럼을 추가하도록 구현했다. 그 결과로 문제 배경에서 제시된 클라이언트 메모리 문제, 팬인/팬아웃 복잡도, 연산 부하를 제거하고 서버에 종속되도록 구현할 수 있었다.",
        thumnail: pickItBookTrouble2,
      },
      {
        title: "배포 직전 WhiteList 이슈 해결",
        background:
          "개발 환경에서는 localhost ip 주소를 도서관 API WhiteList에 등록해 사용하고 있었다. 그런데 배포 당일에 배포 환경인 Vercel에서 마무리 테스트 중 도서관 API 요청량 제한 500건을 초과하게 되어 조회가 불가능한 상황이 발생했다. Vercel 배포는 Enterprise 요금제를 제외하고 모두 동적 IP 할당이라는 것을 깨달았고, WhiteList 등록이 불가능하다는 사실을 알았다.",
        solution:
          "가장 빠르게 대처할 수 있는 해결책은 클라이언트 요청키를 변경해 요청수를 초기화하는 방법이었고, 근본적인 원인 해결은 IP를 고정시킬 수 있는 Proxy 서버를 구현하는 것이었다. 빠른 시간 내 처리가 필요했지만 다시 오류가 발생할 확률이 높은 방법보다 근본적인 해결법이 필요하다고 생각해 프록시 서버를 구현해 사용하는 방법을 선택했다.",
        result:
          "최대한 빠르게 해결해 3시간 이내로 처리할 수 있었다. 서버는 Nginx + Express를 이용해 구현했다. 또한 Vercel Proxy 설정을 변경하고 요청URL을 공통 함수로 불러오도록 처리해 기존 구현 내용을 대부분 그대로 사용할 수 있도록 했다. 시간이 부족했고, 단순 조회 처리만 이용하면 됐기 때문에 certbot은 붙이지 않았다. Nginx는 단순 라우팅만 동작하도록 구현해 키값을 서버에서 가지도록 한 뒤 고정 IP로 요청할 수 있는 구조를 만들어 오류를 해결했다.",
        thumnail: pickItBookTrouble1,
      },
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
    skillReason: [
      {
        skill: "React",
        reason:
          "상태 기반 관리인 React가 팀 프로젝트에서 강력하다고 생각했기 때문에 선택했다.",
      },
      {
        skill: "Vite",
        reason: "빠른 개발 환경과 HMR을 통한 개발 생산성 향상을 위해 선택했다.",
      },
      {
        skill: "CSS",
        reason: "Vite와 이어진 모듈 CSS 사용을 이용해 스타일링하기로 선택했다.",
      },
      {
        skill: "MediaRecorder API",
        reason: "음성 녹음 기능을 구현하기 위해 선택했다.",
      },
      {
        skill: "Supabase",
        reason:
          "대시보드를 이용해 상대적으로 쉽게 사용할 수 있고, 실시간 기능과 RPC를 통한 복잡한 미션 트리거 로직 구현이 필요해 백엔드 서버로 선택했다.",
      },
      {
        skill: "Supabase Realtime",
        reason:
          "Stomp.js를 이용해 직접 백엔드 코드와 함께 구현하기보다 Supabase에서 제공하는 기능을 통해 쉽게 실시간 채팅 기능을 구현하기 위해 선택했다.",
      },
      {
        skill: "Vercel",
        reason: "간편한 배포를 위해 선택했다.",
      },
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
    troubleShootings: [
      {
        title: "로그인 요청 수, CDN 요청량 폭발 문제 해결",
        background:
          "제약된 용량을 사용하는 supabase 무료 플랜에서 요청량을 잘 관리해야 했는데, 대시보드를 통해 확인한 결과 로그인 요청 수와 CDN 요청량이 폭발적으로 증가하는 문제를 파악했다. 팀의 구현 코드를 살펴보니, 로그인 중복 요청과 모든 프로필 사진에 독립된 타임스탬프를 삽입하는 문제가 있었다.",
        solution:
          "로그인 요청 수를 줄이기 위해 유저 정보 스토어 로직을 개선해 요청수를 줄이고, mutate query에 로그인을 중복요청 하지 않도록 개선했다. 또한 프로필 URL 정적 생성 유틸 함수를 구현하고 타임스탬프를 삽입하지 않도록 개선해 CDN 요청과 로그인 요청량을 줄였다.",
        result:
          "로그인 요청 수와 CDN 요청량을 줄이고 요청량을 제한된 용량을 사용하는 supabase 무료 플랜에서 안정적으로 관리할 수 있었다.",
        thumnail: musicMateTrouble1,
      },
      {
        title: "MVP 달성 실패 예측",
        background:
          "팀원들 모두 익숙하지 않은 라이브러리와 기술을 사용하고 있었고, 나 포함 팀원들의 경험이 부족해 모든 기능을 구현하기에는 시간이 부족했다.",
        solution:
          "회의를 통한 MVP 조정을 통해 기능 구현 시간을 줄여 일정에 최대한 맞출 수 있도록 하고, 중요한 기능(실시간 채팅, 음악 공유)에 집중하도록 결정했다.",
        result:
          "프로젝트 마감 시간에 맞춰 성공적으로 조정된 MVP 기능을 구현할 수 있었다.",
      },
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
    period: "2025-10-20 ~ 2025-10-30",
    background: "윤대웅의 개인 포트폴리오 웹사이트입니다.",
    skills: ["React", "Vite", "TailwindCSS", "Framer Motion", "Vercel"],
    skillReason: [
      {
        skill: "React",
        reason:
          "도메인 기반 구조에 익숙해졌고, 초기 기획부터 constants를 이용한 정적인 구조로 만드려고 계획했기 때문에 React를 선택했다.",
      },
      {
        skill: "Vite",
        reason: "빠른 개발 환경과 HMR을 통한 개발 생산성 향상을 위해 선택했다.",
      },
      {
        skill: "TailwindCSS",
        reason:
          "CSS 프레임워크로 빠른 스타일링과 일관된 디자인 시스템 구축을 위해 선택했다.",
      },
      {
        skill: "Framer Motion",
        reason:
          "이전까지는 GSAP을 사용해왔었는데, 상태 기반으로 관리하는 애니메이션 효과가 더 쉽고 일관성 있다고 판단해 선택했다.",
      },
      {
        skill: "Vercel",
        reason: "간편한 배포를 위해 선택했다.",
      },
    ],
    charged: [
      {
        title: "프로젝트 디자인",
        desc: "Figma를 이용한 프로젝트 디자인 작업",
      },
      {
        title: "TextRoll 구현",
        desc: "TextRoll 애니메이션과 인터렉션 구현",
      },
      {
        title: "프로젝트 배포, 도메인 연결",
        desc: "Vercel을 이용한 프로젝트 배포, 도메인 연결",
      },
      {
        title: "백그라운드 영상 재생을 위한 편집 및 최적화",
        desc: "백그라운드 영상 재생을 위한 편집 및 최적화",
      },
    ],
    teammate: "개인 프로젝트",
    deployStatus: "배포 중",
    deployUrl: "https://www.yoondaewoong.shop/",
    tistoryUrl: "https://yun-engene.tistory.com/107",
  },
];
