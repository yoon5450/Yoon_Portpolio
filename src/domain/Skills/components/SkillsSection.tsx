import { Code2, MonitorSmartphone, Server, Cloud } from "lucide-react";
import SkillTag from "./SkillTag";

function SkillsSection() {
  return (
    <div className="flex flex-col px-[8vw] py-10 w-auto bg-gray-50 gap-5">
      <h1 className="font-family-perm text-3xl font-normal">Skills</h1>

      <div className="flex flex-col gap-5 p-10">
        <div className="flex grid-cols-1 md:grid-cols-2 w-fit">
          <div className="flex gap-1 items-center w-40">
            {" "}
            <Code2 size={18} /> 언어
          </div>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "Java"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="flex grid-cols-1 md:grid-cols-2 w-fit">
          <div className="flex gap-1 items-center w-40">
            <MonitorSmartphone size={18} /> 프론트엔드
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "SCSS",
              "React",
              "Next.js",
              "react-hook-form",
              "React Router",
              "TailwindCSS",
              "Zod",
              "Axios",
              "Figma",
              "Vite",
            ].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="flex grid-cols-1 md:grid-cols-2 w-fit">
          <div className="flex gap-1 items-center w-40">
            <Server size={18} /> 백엔드
          </div>
          <div className="flex flex-wrap gap-2">
            {["Supabase", "PostgreSQL", "Flask", "MongoDB"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="flex grid-cols-1 md:grid-cols-2 w-fit">
          <div className="flex gap-1 items-center w-40 ">
            <Cloud size={18} /> 환경
          </div>
          <div className="flex flex-wrap gap-2">
            {["Vercel", "Git/GitHub", "Github Actions", "AWS(EC2)"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillsSection;
