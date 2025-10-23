import { motion } from "motion/react";
// import { MdArrowDropDown } from "react-icons/md";
import tw from "@/utils/tw";

interface Props {
  title: string;
  desc: string;
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

function IntroductionSummary({
  title,
  desc,
  className,
  isOpen = true,
  onClick,
  delay,
}: Props) {
  return (
    <motion.div
      className={tw("w-100 flex flex-col", className)}
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0, transition: { delay } }}
    >
      <button
        type="button"
        className="flex items-center justify-center border-b border-white"
        onClick={onClick}
      >
        <h3 className="text-white">{title}</h3>
        {/* <MdArrowDropDown size={24} color="white" /> */}
      </button>

      {isOpen && <p className="text-subtext mt-2 leading-8 text-sm">{desc}</p>}
    </motion.div>
  );
}
export default IntroductionSummary;
