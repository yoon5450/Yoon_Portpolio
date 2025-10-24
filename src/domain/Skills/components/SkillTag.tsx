import { skillStyles } from "../constants";

function SkillTag({ name }: { name: string }) {
  const key = name.toLowerCase();

  const color = skillStyles[key] ?? "bg-gray-100 text-gray-800";
  return (
    <span
      className={`px-2 py-1 rounded-md text-sm font-medium ring-1 ring-inset ring-black/10 dark:ring-white/15 text-nowrap ${color}`}
    >
      {name}
    </span>
  );
}

export default SkillTag;