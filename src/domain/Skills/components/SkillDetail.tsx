import { motion } from "framer-motion";
import { mainSkillDetails, subSkillDetails } from "../constants";
import tw from "@/utils/tw";
import { X } from "lucide-react";

function SkillDetail({
  visible,
  className,
  setVisible,
}: {
  visible: boolean;
  className?: string;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <div className={tw("flex h-full overflow-y-auto", className)}>
      <motion.div
        className="w-1/2 p-5 md:p-8 bg-white flex flex-col gap-2"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -500 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className="text-2xl font-semibold">메인 기술 스택</p>
        {Object.entries(mainSkillDetails).map(([skill, detail]) => (
          <div key={skill} className="flex flex-col">
            <p className="text-lg font-medium">{skill}</p>
            <p className="text-sm text-gray-500">{detail}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="w-1/2 bg-primary-background p-5 md:p-8 text-white flex flex-col gap-2"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 500 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className="text-2xl font-semibold">서브 기술 스택</p>
        {Object.entries(subSkillDetails).map(([skill, detail]) => (
          <div key={skill} className="flex flex-col">
            <p className="text-lg font-medium">{skill}</p>
            <p className="text-sm text-gray-500">{detail}</p>
          </div>
        ))}
      </motion.div>
      <button
        className="w-14 h-14 absolute top-4 right-4 text-gray-200 hover:text-white cursor-pointer duration-100"
        onClick={() => setVisible(!visible)}
      >
        <X size={20} />
      </button>
    </div>
  );
}
export default SkillDetail;
