import SkillTag from "@/component/SkillTag";
import { Code2, MonitorSmartphone, Server, Cloud } from "lucide-react";

function Skills() {
  return (
    <div className="flex flex-col px-[8vw] py-10 w-auto bg-gray-50 gap-5">
      <div className="text-4xl font-mono font-extrabold">SKILLS</div>

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
            "React Router",
            "TailwindCSS",
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

      <hr className="text-gray-200" />

      <div>hover 예시</div>
      <div className="group relative rounded-xl overflow-hidden hover:scale-105 translate-0.5">
        <img src="/thumb.jpg" className="w-full h-64 object-cover" />
        <div
          className="pointer-events-none absolute inset-0 
                  bg-black/0 group-hover:bg-black/40 transition"
        />
        <div
          className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100 
                  transition"
        >
          <div className="rounded-lg bg-white/90 p-3">
            <p className="font-semibold">프로젝트 타이틀</p>
            <p className="text-sm text-gray-600">요약 설명...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
