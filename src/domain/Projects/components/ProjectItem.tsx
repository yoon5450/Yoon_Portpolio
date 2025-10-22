import { AiFillYoutube, AiOutlineLink } from "react-icons/ai";
import { useState } from "react";
import { motion } from "motion/react";

interface Props {
  thumbnail: string;
  title: string;
  desc: string;
  period?: string;
  teammate?: string;
  deployUrl?: string;
  youtubeUrl?: string;
  index?: number;
}

function ProjectItem({
  thumbnail,
  title,
  desc,
  period,
  teammate,
  deployUrl,
  youtubeUrl,
  index,
}: Props) {
  const [hovered, setHovered] = useState(false);

  const originX = (index || 0) % 2 ? 1 : 0;

  return (
    <motion.li
      className="relative w-120 h-95 flex flex-col p-4 pb-6 gap-1 border border-gray-200 rounded-md bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: hovered ? 10 : 1, originX }}
      animate={{ width: hovered ? "150%" : "100%" }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {/* 내부 내용은 absolute로 두지 말고 flex 안에서 움직이게 */}
      <div className="flex gap-2 w-full h-full">
        {/* 왼쪽 */}
        <motion.div
          className="w-full h-full p-4 flex flex-col justify-between"
          animate={{
            x: hovered ? (originX === 0 ? 20 : -20) : 0,
            opacity: hovered ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={thumbnail}
            alt="프로젝트 이미지"
            className="rounded-md object-cover mb-2"
          />
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span>{desc}</span>
          <span>{period}</span>
          <span>{teammate}</span>
        </motion.div>

        {/* 오른쪽 */}
        <motion.div
          className="w-1/2 h-full p-4 bg-white/90 border-l border-gray-200"
          initial={{ opacity: 0, x: originX === 0 ? 50 : -50 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : originX === 0 ? 50 : -50,
          }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-sm text-gray-700">우후</p>
        </motion.div>
      </div>

      {/* 링크 버튼 */}
      <div className="absolute flex gap-6 right-4 bottom-4">
        {deployUrl && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => window.open(deployUrl, "newWindow")}
          >
            <AiOutlineLink size={24} />
          </button>
        )}
        {youtubeUrl && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => window.open(youtubeUrl, "newWindow")}
          >
            <AiFillYoutube size={24} color="#FE3C3C" />
          </button>
        )}
      </div>
    </motion.li>
  );
}
export default ProjectItem;
