## 작업 요약

이 리포지토리는 Vite + React(Typescript) 기반의 개인 포트폴리오입니다. 아래 지침은 AI 코드 에이전트가 이 코드베이스에서 빠르게 생산적으로 작업할 수 있도록 실제 구조, 빌드/개발 명령, 관례, 그리고 예시를 담고 있습니다.

## 빠른 시작(핵심 명령)
- 개발 서버: `npm run dev` → Vite (포트 3000이 기본)
- 빌드: `npm run build` → `tsc -b && vite build` (타입 체크를 포함한 빌드)
- 미리보기: `npm run preview`
- 린트: `npm run lint` (ESLint)
- 훅 준비: `npm run prepare` (husky 설치)

주요 파일: `package.json` (스크립트), `vite.config.ts` (alias/@, 플러그인), `vercel.json`(배포 라우트), `tsconfig*.json`.

## 아키텍처와 코드 배치(핵심 패턴)
- `src/`는 도메인별로 나뉩니다. 예: `src/domain/Projects`, `src/domain/Layout`, `src/domain/Introdution` 등.
  - 각 도메인 폴더는 `components/`(UI 컴포넌트), `stores/`(zustand 등 상태), `types.ts`, `constants.ts` 같은 파일을 가질 수 있습니다.
  - 페이지 레이어는 `src/page/*`에 있으며 각각 `index.tsx`로 진입합니다.
- 라우터는 `src/Router/router.ts`에 위치 — 페이지를 연결할 때 이 파일을 참고하세요.
- 전역 스타일은 `src/style/main.css` 및 Tailwind 관련 파일이 있고, Tailwind는 `@tailwindcss/vite` 플러그인을 사용합니다.

## 개발/코드 작성 관례(구체적 규칙)
- 파일/컴포넌트
  - 컴포넌트는 PascalCase `.tsx` 사용. 예: `ProjectItem.tsx`, `HeroSection.tsx`.
  - 도메인 내부 `components/`에 기능 관련 컴포넌트를 둡니다.
- 임포트
  - 프로젝트 루트 `src`로의 경로 별칭: `@`. 예: `import App from '@/App'` (설정: `vite.config.ts` -> alias `@`)
- 상태 관리
  - 간단한 로컬 전역 상태에 `zustand` 사용 예: `src/domain/Layout/stores/headerControllStore.ts`.
- 스타일
  - Tailwind CSS와 `src/style/*` 파일 조합. 전역 CSS는 `src/style/main.css`에서 가져옵니다.

## 통합/외부 의존성
- Supabase (`@supabase/supabase-js`)가 dependencies에 있지만, 사용 위치를 확인할 때는 `grep`으로 사용 지점을 찾으세요.
- Vercel 배포: `vercel.json`에 모든 경로가 루트로 리라이트되어 SPA 라우팅을 보장합니다.

## 변경/확장 시 참고 예시
- 새 UI 컴포넌트 추가: `src/domain/<Feature>/components/NewThing.tsx` → 해당 도메인 페이지 또는 `src/page/*`에서 import.
- 새 페이지 추가: `src/page/<Name>/index.tsx`를 만들고 `src/Router/router.ts`에 라우트 추가.

## 린트/커밋 훅
- Husky+lint-staged 설정 존재: 커밋 전 JS/TS(X)파일에 ESLint 자동수정 실행됩니다. (`package.json`의 `lint-staged` 항목`)

## 확인 불가/추가 질문 항목
- 테스트 프레임워크(예: jest, vitest) 설정은 없음 — 테스트 관련 지침이 필요하면 알려주세요.
- Supabase의 사용 목적(데이터/인증 등)의 구체적 위치를 알려주시면 통합 가이드를 추가합니다.

## 한 줄 요약(에이전트용)
루트의 `package.json` 스크립트를 사용해 dev/build/preview/lin트; 코드 변경 시 `src/domain/*` 구조를 따르고 `@` 별칭을 사용하세요. 라우트는 `src/Router/router.ts`에서 관리하며, 배포는 Vercel용 SPA 리라이트가 적용됩니다.

---
필요한 세부사항(예: API 키 위치, Supabase 사용 예시, 또는 추가 코드 스타일 규칙)이 있으면 알려주세요 — 문서를 즉시 보강하겠습니다.
