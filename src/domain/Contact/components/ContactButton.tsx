import { skillIcons } from "@/domain/Skills/constants";
import { useState } from "react";
import { motion } from "motion/react";
import tw from "@/utils/tw";

interface Props {
  iconName: string;
  text: string;
  hiddenText?: string;
  href?: string;
  className?: string;
}

function ContactButton({ iconName, text, hiddenText, href, className }: Props) {
  const [hovered, setHovered] = useState(false);
  const lowerIconName = iconName.toLowerCase();

  return (
    <motion.a
      className={tw(
        "relative flex items-center bg-primary-background text-white rounded-md border-2 border-primary-background h-16 overflow-hidden",
        className
      )}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ background: hovered ? "#FFCA28" : "#0A0A0A" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* 텍스트 영역 */}
      <div className="flex items-center h-full gap-[-40px]">
        <motion.span
          className="flex items-center justify-center text-primary-background h-full w-28"
          animate={{ opacity: hovered ? 1 : 0 }}
        >
          {hiddenText}
        </motion.span>
        <motion.span
          className="flex items-center justify-center h-full w-28 -ml-12"
          animate={{ opacity: hovered ? 0 : 1 }}
        >
          {text}
        </motion.span>
      </div>

      <motion.div
        className="absolute flex items-center justify-center bg-white h-full px-4 rounded-md -ml-2"
        animate={{
          x: hovered ? 120 : 8,
          backgroundColor: hovered ? "#F9FAFB" : "#fdfdfd",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {skillIcons[lowerIconName]("w-8 h-8")}
      </motion.div>
    </motion.a>
  );
}
export default ContactButton;
