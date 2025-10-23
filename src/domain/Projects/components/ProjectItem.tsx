import { AiFillYoutube, AiOutlineLink } from "react-icons/ai";
import { useState } from "react";
import { motion } from "motion/react";
import type { ProjectType } from "../types";
import SkillTag from "@/domain/Skills/components/SkillTag";
import tw from "@/utils/tw";

function ProjectItem({
  thumbnail,
  title,
  desc,
  period,
  teammate,
  background,
  skills,
  charged,
  deployStatus,
  deployUrl,
  youtubeUrl,
}: ProjectType) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      className="relative flex flex-col p-2 gap-1 border border-gray-200 rounded-md bg-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: hovered ? 10 : 1 }}
      animate={{ scale: hovered ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className="flex gap-2 w-full h-full">
        <motion.div
          className="w-full h-full p-4 flex flex-col justify-between"
          animate={{
            opacity: hovered ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={thumbnail}
            alt="프로젝트 이미지"
            className="rounded-md object-cover mb-2"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span>{desc}</span>
          <span>{period}</span>
          <span>{teammate}</span>
        </motion.div>

        {/* 상세 정보 */}
        <motion.div
          className="absolute top-0 right-0 h-full flex flex-col p-4 bg-gray-100/80 border-gray-200 overflow-scroll inset-0 backdrop-blur-md"
          initial={{ opacity: 0, x: 50, width: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 50,
            width: hovered ? "100%" : 0,
          }}
          transition={{ duration: 0.35 }}
        >
          {hovered && (
            <a href={`./project/${title}`} className="h-full">
              <motion.div
                className="pb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-700 pb-2">
                    {title}
                  </h3>
                  <div className="flex gap-2 items-center animate-pulse duration-50">
                    <span
                      className={tw(
                        "text-sm text-amber-600",
                        deployStatus === "배포 중" && "text-green-500"
                      )}
                    >
                      {deployStatus}
                    </span>
                    <div
                      className={tw(
                        "h-3 w-3 rounded-full bg-amber-600",
                        deployStatus === "배포 중" && "bg-green-500"
                      )}
                    />
                  </div>
                </div>
                <hr className="text-gray-500 pb-2" />
                <article className="flex flex-col gap-4 pb-4">
                  <div>
                    <p className="font-semibold">프로젝트 개요</p>
                    <p className="text-sm leading-5">{background}</p>
                  </div>
                  <div>
                    <p className="font-semibold">기술 스택</p>
                    <div className="flex gap-2 p-1 flex-wrap">
                      {skills?.map((s) => (
                        <SkillTag key={`project-${s}`} name={s} />
                      ))}
                    </div>
                  </div>
                  {charged && (
                    <div>
                      <p className="font-semibold">핵심 구현 내용</p>
                      <ul className="flex flex-col gap-2">
                        {charged.map(({ title, desc }) => (
                          <li key={`charged-${title}`}>
                            <p className="text-sm text-smleading-5">{title}</p>
                            <p className="text-sm text-gray-500 pl-1">{desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </motion.div>
            </a>
          )}
        </motion.div>
      </div>

      {/* 링크 버튼 */}
      <motion.div
        className="absolute flex gap-4 right-4 bottom-4 items-center"
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        {deployUrl && (
          <button
            type="button"
            className="cursor-pointer flex gap-2 hover:text-gray-400 duration-100"
            onClick={(e) => {
              e.preventDefault();
              window.open(deployUrl, "newWindow");
            }}
            name="배포 링크로 이동"
          >
            <AiOutlineLink size={24} />
          </button>
        )}
        {youtubeUrl && (
          <button
            type="button"
            className="cursor-pointer text-[#FE3C3C] hover:text-[#FE6E6E]"
            onClick={(e) => {
              e.preventDefault();
              window.open(youtubeUrl, "newWindow");
            }}
            name="영상 링크로 이동"
          >
            <AiFillYoutube size={28} />
          </button>
        )}
      </motion.div>
    </motion.li>
  );
}
export default ProjectItem;
