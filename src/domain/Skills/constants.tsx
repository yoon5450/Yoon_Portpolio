import tw from "@/utils/tw";
import gmailIcon from "@/assets/gmail_icon.svg";
import tistoryIcon from "@/assets/tistory.svg";

export const skillIcons: Record<
  string,
  (className?: string) => React.ReactNode
> = {
  // Languages
  javascript: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      className={tw("w-4 h-4", className)}
      alt="JavaScript"
    />
  ),
  typescript: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      className={tw("w-4 h-4", className)}
      alt="TypeScript"
    />
  ),
  python: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Python"
    />
  ),
  java: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Java"
    />
  ),

  // Frontend - Markup & Styling
  html: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      className={tw("w-4 h-4", className)}
      alt="HTML5"
    />
  ),
  css: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      className={tw("w-4 h-4", className)}
      alt="CSS3"
    />
  ),
  scss: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
      className={tw("w-4 h-4", className)}
      alt="SCSS"
    />
  ),
  tailwindcss: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      className={tw("w-4 h-4", className)}
      alt="TailwindCSS"
    />
  ),

  // Frontend - Libraries & Frameworks
  react: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      className={tw("w-4 h-4", className)}
      alt="React"
    />
  ),
  "next.js": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Next.js"
    />
  ),
  "react router": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
      className={tw("w-4 h-4", className)}
      alt="React Router"
    />
  ),
  vite: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Vite"
    />
  ),
  gsap: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/greensock.svg"
      className={tw("w-4 h-4", className)}
      alt="GSAP"
    />
  ),
  "framer motion": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg"
      className={tw("w-4 h-4", className)}
      alt="Framer Motion"
    />
  ),

  // Form & Validation
  "react-hook-form": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reacthookform.svg"
      className={tw("w-4 h-4", className)}
      alt="React Hook Form"
    />
  ),
  zod: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zod.svg"
      className={tw("w-4 h-4", className)}
      alt="Zod"
    />
  ),
  axios: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/axios.svg"
      className={tw("w-4 h-4", className)}
      alt="Axios"
    />
  ),
  "tanstack query": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactquery.svg"
      className={tw("w-4 h-4", className)}
      alt="Tanstack Query"
    />
  ),

  // Backend & Database
  flask: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Flask"
    />
  ),
  supabase: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg"
      className={tw("w-4 h-4", className)}
      alt="Supabase"
    />
  ),
  postgresql: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      className={tw("w-4 h-4", className)}
      alt="PostgreSQL"
    />
  ),
  mongodb: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
      className={tw("w-4 h-4", className)}
      alt="MongoDB"
    />
  ),

  // Design & Tools
  figma: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Figma"
    />
  ),

  // DevOps & Deployment
  vercel: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg"
      className={tw("w-4 h-4", className)}
      alt="Vercel"
    />
  ),
  "aws(ec2)": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      className={tw("w-4 h-4", className)}
      alt="AWS EC2"
    />
  ),
  github: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      className={tw("w-4 h-4", className)}
      alt="GitHub"
    />
  ),
  "git/github": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      className={tw("w-4 h-4", className)}
      alt="Git/GitHub"
    />
  ),
  "github actions": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg"
      className={tw("w-4 h-4", className)}
      alt="GitHub Actions"
    />
  ),

  // Additional Technologies
  "mediarecorder api": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg"
      className={tw("w-4 h-4", className)}
      alt="MediaRecorder API"
    />
  ),
  "supabase realtime": (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg"
      className={tw("w-4 h-4", className)}
      alt="Supabase Realtime"
    />
  ),

  // Others
  gmail: (className?: string) => (
    <img src={gmailIcon} className={tw("w-4 h-4", className)} alt="Gmail" />
  ),
  tistory: (className?: string) => (
    <img src={tistoryIcon} className={tw("w-4 h-4", className)} alt="Tistory" />
  ),
};

export const skillStyles: Record<string, string> = {
  // Languages
  javascript: "bg-[#F7DF1E] text-black",
  typescript: "bg-[#3178C6] text-white",
  python: "bg-[#3776AB] text-white",
  java: "bg-[#007396] text-white",

  // Frontend - Markup & Styling
  html: "bg-[#E34F26] text-white",
  css: "bg-[#1572B6] text-white",
  scss: "bg-[#CC6699] text-white",
  tailwindcss: "bg-[#06B6D4] text-white",

  // Frontend - Libraries & Frameworks
  react: "bg-[#61DAFB] text-white",
  "next.js": "bg-black text-white",
  "react router": "bg-[#CA4245] text-white",
  vite: "bg-[#646CFF] text-white",
  gsap: "bg-[#88CE02] text-white",
  "framer motion": "bg-[#0055FF] text-white",

  // Form & Validation
  "react-hook-form": "bg-[#EC5990] text-white",
  zod: "bg-[#3E63DD] text-white",
  axios: "bg-[#5A29E4] text-white",
  "tanstack query": "bg-[#FF4154] text-white",

  // Backend & Database
  flask: "bg-black text-white",
  supabase: "bg-[#3ECF8E] text-white",
  postgresql: "bg-[#336791] text-white",
  mongodb: "bg-[#47A248] text-white",

  // Design & Tools
  figma: "bg-[#F24E1E] text-white",

  // DevOps & Deployment
  vercel: "bg-black text-white",
  "aws(ec2)": "bg-[#FF9900] text-white",
  "git/github": "bg-[#24292F] text-white",
  "github actions": "bg-[#2088FF] text-white",

  // Additional Technologies
  "mediarecorder api": "bg-[#E34F26] text-white",
  "supabase realtime": "bg-[#3ECF8E] text-white",
};
