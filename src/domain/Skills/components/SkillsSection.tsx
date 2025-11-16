import { Code2, MonitorSmartphone, Server, Cloud } from "lucide-react";
import SkillTag from "./SkillTag";
import SkillDetail from "./SkillDetail";
import { useState } from "react";

function SkillsSection() {
  const [skillDetailVisible, setSkillDetailVisible] = useState(false);

  const handleSkillDetailVisible = () => {
    setSkillDetailVisible(!skillDetailVisible);
  };

  return (
    <div
      className="flex flex-col px-[8vw] py-10 w-auto bg-gray-50 gap-5 relative"
      id="skills"
    >
      <h1 className="font-family-perm text-3xl font-normal">Skills</h1>

      <div className="flex flex-col gap-5 p-2 md:p-10">
        <div className="flex flex-col md:flex-row w-fit gap-2">
          <div className="flex gap-1 items-center min-w-40">
            <Code2 size={18} /> 언어
          </div>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "Java"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="flex flex-col md:flex-row w-fit gap-2">
          <div className="flex gap-1 items-center min-w-40">
            <MonitorSmartphone size={18} />{" "}
            <span className="text-nowrap">프론트엔드 </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "SCSS",
              "React",
              "Next.js",
              "Tanstack Query",
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

        <div className="flex flex-col md:flex-row w-fit gap-2">
          <div className="flex gap-1 items-center min-w-40">
            <Server size={18} /> 백엔드
          </div>
          <div className="flex flex-wrap gap-2">
            {["Supabase", "PostgreSQL", "Flask", "MongoDB"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="flex flex-col md:flex-row w-fit gap-2">
          <div className="flex gap-1 items-center min-w-40 ">
            <Cloud size={18} /> 환경
          </div>
          <div className="flex flex-wrap gap-2">
            {["Vercel", "Git/GitHub", "AWS(EC2)"].map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>
      </div>
      {skillDetailVisible && (
        <SkillDetail
          visible={skillDetailVisible}
          setVisible={setSkillDetailVisible}
          className="w-full absolute top-0 left-0 h-full"
        />
      )}
      <div className="flex justify-end">
      <button
        type="button"
        onClick={handleSkillDetailVisible}
        className="w-fit text-primary-background bg-inherit py-2 px-4 cursor-pointer border border-primary-background rounded-md"
      >
          {skillDetailVisible ? "기술 세부 정보 닫기" : "기술 세부 정보 보기"}
        </button>
      </div>
    </div>
  );
}
export default SkillsSection;
