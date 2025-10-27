## 프로젝트 개요

이 리포지토리는 윤대웅님의 **개인 포트폴리오 웹사이트**입니다.
- **스택**: Vite + React 19 + TypeScript + TailwindCSS 4 + Framer Motion
- **목적**: 프로젝트 소개, 기술 스택, 이력, 피어리뷰를 보여주는 포트폴리오 사이트
- **배포**: Vercel (SPA 라우팅 지원)

## 빠른 시작 명령어

```bash
npm run dev      # 개발 서버 시작 (localhost:3000)
npm run build    # 프로덕션 빌드 (타입 체크 + 빌드)
npm run preview  # 빌드된 결과물 미리보기
npm run lint     # ESLint 실행
npm run prepare  # Husky 설치
```

## 아키텍처 패턴

### 1. 도메인 주도 디렉터리 구조 (DDD Style)
```
src/
├── domain/              # 비즈니스 도메인별 분리
│   ├── Hero/           # 히어로 섹션
│   ├── Introdution/    # 자기소개
│   ├── Skills/         # 기술 스택 표시
│   ├── Projects/       # 프로젝트 목록 & 상세 (핵심)
│   ├── PeerReview/     # 동료 평가 모달
│   ├── Contact/        # 연락처
│   └── Layout/         # Header, Footer
├── page/               # 라우팅 레이어
│   ├── Root/           # 루트 레이아웃 (Header/Footer 포함)
│   ├── Main/           # 메인 페이지 (모든 섹션 조합)
│   └── ProjectDetail/  # 프로젝트 상세 페이지
├── Router/             # React Router 설정
└── share/              # 공통 컴포넌트 (Modal, LazyImage 등)
```

### 2. 각 도메인의 내부 구조
```typescript
src/domain/Projects/
├── components/         # UI 컴포넌트
│   ├── ProjectSection.tsx   # 프로젝트 목록 랜더링
│   └── ProjectItem.tsx      # 개별 프로젝트 카드
├── stores/             # Zustand 상태 관리 (필요시)
├── constants.ts        # 프로젝트 데이터 (ProjectDetail[])
└── types.ts            # TypeScript 타입 정의
```

## 핵심 데이터 구조

### 프로젝트 타입 정의
```typescript
// src/domain/Projects/types.ts
interface ProjectDetail {
  thumbnail: string;           // 썸네일 이미지 경로
  title: string;              // 프로젝트명
  desc: string;               // 간단 설명
  period: string;             // 진행 기간
  architecture?: string;      // 아키텍처 이미지
  teammate: string;           // 팀 구성
  background?: string;        // 프로젝트 배경 설명
  skills?: string[];         // 사용 기술 스택
  charged?: Array<{          // 담당 업무 목록
    title: string;
    desc: string;
  }>;
  deployStatus?: string;      // 배포 상태
  deployUrl?: string;         // 배포 URL
  youtubeUrl?: string;        // YouTube 시연 영상
  tistoryUrl?: string;        // 블로그 URL
}
```

### 프로젝트 데이터 위치
- **상수 데이터**: `src/domain/Projects/constants.ts`의 `PROJECTS` 배열
- **이미지 경로**: `src/assets/` (빌드 시 `dist/assets/`로 복사)
- **경로 별칭**: `@/assets/` → `src/assets/`

## 라우팅 구조

```typescript
// src/Router/router.ts
Root (/)
  ├── Main (index)                     # 메인 페이지
  └── ProjectDetail (project/:projectName)  # 프로젝트 상세
```

### 라우팅 특징
- **SPA 라우팅**: Vercel의 rewrites로 모든 경로를 `/`로 리라이트
- **동적 라우트**: `:projectName` 파라미터로 프로젝트 식별
- **Header Variant**: Root 레벨에서 `location.pathname` 감지해 variant 변경

## 상태 관리

### Zustand 사용
```typescript
// 사용 예시: src/domain/Layout/stores/headerControllStore.ts
// 전역 헤더 스타일 상태 관리
```

**사용 지점**: 
- Header 컴포넌트에서 variant 관리 (현재는 사용하지 않음, Root에서 직접 prop 전달)

## 스타일링 시스템

### 1. TailwindCSS 4
- **설정**: `vite.config.ts`의 `@tailwindcss/vite` 플러그인
- **전역 스타일**: `src/style/main.css`
- **특수 파일들**:
  - `src/style/_base.css` - 기본 스타일
  - `src/style/_theme.css` - 테마 설정
  - `src/style/_scroll.css` - 스크롤 관련

### 2. 유틸리티 함수
```typescript
// src/utils/tw.ts - tailwind-merge + clsx 래퍼
// tailwind-merge의 className 병합 기능 사용
```

### 3. 컴포넌트 스타일링 패턴
```typescript
// Tailwind utility-first 접근
className="flex gap-4 px-[8%]"
```

## 주요 라이브러리 & 사용 목적

| 라이브러리 | 목적 |
|-----------|------|
| `react 19` | 핵심 프레임워크 |
| `react-router-dom 7.9.4` | SPA 라우팅 |
| `tailwindcss 4` | 유틸리티 CSS |
| `motion 12.23.24` | 애니메이션 (Framer Motion) |
| `zustand 5.0.8` | 전역 상태 관리 |
| `react-icons 5.5.0` | 아이콘 |
| `clsx` + `tailwind-merge` | className 병합 |
| `class-variance-authority` | 컴포넌트 variant 관리 |
| `lucide-react` | 아이콘 (추정) |

**참고**: `@supabase/supabase-js`는 dependencies에 있으나 **현재 미사용** (PickItBook 프로젝트 내용에서 언급만 됨)

## 코드 작성 관례

### 1. 파일 명명
- 컴포넌트: **PascalCase** + `.tsx` (예: `ProjectItem.tsx`)
- 유틸리티: **camelCase** + `.ts` (예: `tw.ts`)
- 상수 파일: **camelCase** + `.ts` 또는 `.tsx` (예: `constants.ts`)

### 2. Import 경로
```typescript
// ✅ 권장: @ 별칭 사용
import ProjectSection from "@/domain/Projects/components/ProjectSection";

// ❌ 비권장: 상대 경로
import ProjectSection from "../../domain/Projects/components/ProjectSection";
```

### 3. 컴포넌트 구조
```typescript
// 기본 구조
import { ... } from "react";

function ComponentName() {
  return (
    <div className="tailwind-classes">
      {/* 내용 */}
    </div>
  );
}

export default ComponentName;
```

### 4. Props & State
- Props 타이핑은 인터페이스 정의
- 로컬 state는 `useState` 사용
- 전역 상태는 Zustand (필요시)

## 페이지 구조 상세

### Main 페이지 구조
```
HeroSection → 소개 영역
  ↓
IntroSection → 자소서 스타일 설명
  ↓
PeerReviewSection → 동료 평가 모달
  ↓
SkillsSection → 기술 스택 시각화
  ↓
--- 구분선 ---
  ↓
ProjectSection → 프로젝트 카드 리스트
  ↓
--- 구분선 ---
  ↓
ContactSection → 연락처 버튼
```

### ProjectDetail 페이지
- URL: `/project/:projectName`
- Header가 `"default"` variant로 변경됨
- 프로젝트 상세 정보 표시 (아키텍처, 담당 업무, 배포 상태 등)

## 확장 가이드

### 새 프로젝트 추가하기
1. 이미지 추가: `src/assets/`에 이미지 파일 저장
2. 데이터 추가: `src/domain/Projects/constants.ts`의 `PROJECTS` 배열에 객체 추가
3. 빌드: `npm run build` (이미지가 `dist/assets/`에 복사됨)

### 새 섹션 추가하기
1. 새 도메인 폴더 생성: `src/domain/YourDomain/`
2. 컴포넌트 작성: `src/domain/YourDomain/components/YourComponent.tsx`
3. Main 페이지에 추가: `src/page/Main/index.tsx`에서 import & 렌더링

### 새 페이지 추가하기
1. 페이지 컴포넌트 작성: `src/page/YourPage/index.tsx`
2. 라우트 추가: `src/Router/router.ts`에 라우트 정의
3. (선택) 헤더 variant 로직 추가: `src/page/Root/index.tsx`의 `getHeaderVariant` 함수

## 빌드 & 배포

### 빌드 프로세스
1. TypeScript 타입 체크: `tsc -b`
2. Vite 빌드: `vite build`
3. 출력: `dist/` 폴더

### Vercel 배포 설정
- **설정 파일**: `vercel.json`
- **리라이트 규칙**: 모든 경로를 `/`로 리라이트 (SPA 라우팅)
- **자동 배포**: Git push 시 자동 빌드 & 배포

## 자동화 & 품질 관리

### Husky + lint-staged
```json
// package.json
"lint-staged": {
  "**/*.{js, ts, jsx, tsx}": "eslint --fix"
}
```
- 커밋 전 JS/TS/JSX/TSX 파일 자동 lint & 수정

### ESLint 설정
- `eslint.config.js`에 설정
- TypeScript + React 플러그인 사용

## 디버깅 팁

### 이미지가 안 보이는 경우
- Vite는 빌드 시 `src/assets/`의 이미지를 `dist/assets/`로 복사
- import path 확인: `import img from "@/assets/filename.png"`
- 빌드 후에도 `dist/` 폴더에 이미지가 있는지 확인

### 라우팅 문제
- Vercel 설정에서 rewrites 확인
- 브라우저 개발자 도구에서 네트워크 요청 확인

### TailwindCSS가 적용 안 되는 경우
- `src/style/main.css`에서 Tailwind import 확인
- `tailwind.config.js` 존재 여부 확인 (현재 미설정, 자동 감지 사용 중)

## 한 줄 요약

**Vite+React+TS 포트폴리오 사이트. 도메인 주도 구조, TailwindCSS 4 + Framer Motion, Vercel SPA 배포. 핵심 데이터는 `PROJECTS` 배열. 라우팅은 React Router 7.**