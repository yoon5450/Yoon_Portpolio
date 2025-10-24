import tw from "@/utils/tw";
import gmailIcon from "@/assets/gmail_icon.svg";
import tistoryIcon from "@/assets/tistory.svg";

export const skillIcons: Record<
  string,
  (className?: string) => React.ReactNode
> = {
  github: (className?: string) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      className={tw("w-4 h-4", className)}
      alt="JavaScipt"
    />
  ),
  gmail: (className?: string) => (
    <img src={gmailIcon} className={tw("w-4 h-4", className)} alt="Gmail" />
  ),
  tistory: (className?: string) => (
    <img src={tistoryIcon} className={tw("w-4 h-4", className)} alt="Gmail" />
  ),
};

export const skillStyles: Record<string, string> = {
  javascript: "bg-[#F7DF1E] text-black",
  typescript: "bg-[#3178C6] text-white",
  python: "bg-[#3776AB] text-white",
  java: "bg-[#007396] text-white",

  html: "bg-[#E34F26] text-white",
  css: "bg-[#1572B6] text-white",
  scss: "bg-[#CC6699] text-white",
  react: "bg-[#61DAFB] text-white",
  "react router": "bg-[#CA4245] text-white",
  "next.js": "bg-black text-white",
  "react-hook-form": "bg-[#EC5990] text-white",
  tailwindcss: "bg-[#06B6D4] text-white",
  figma: "bg-[#F24E1E] text-white",
  vite: "bg-[#646CFF] text-white",

  supabase: "bg-[#3ECF8E] text-white",
  postgresql: "bg-[#336791] text-white",
  flask: "bg-black text-white",
  mongodb: "bg-[#47A248] text-white",
  axios: "bg-[#5A29E4] text-white",
  zod: "bg-[#3E63DD] text-white",

  vercel: "bg-black text-white",
  "git/github": "bg-[#24292F] text-white",
  "github actions": "bg-[#2088FF] text-white",
  "aws(ec2)": "bg-[#FF9900] text-white",
};
