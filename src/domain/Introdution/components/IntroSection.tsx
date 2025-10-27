import avatar from "@/assets/yoon.jpg";
import { useState } from "react";
import IntroductionSummary from "./IntroductionSummary";
import { motion } from "motion/react";

const Introdution = [
  {
    title: "문제를 정의하는 개발자입니다.",
    desc: "기술 선택 전 문제를 명확히 정의하고, 팀원들과 함께 최적의 해결책을 찾습니다. Next .js 기반 인증 시스템, 동시성 제어, 긴급 배포 이슈 대응 등 다양한 문제를 해결해왔습니다.",
  },
  {
    title: "문화를 주도할 수 있는 개발자입니다.",
    desc: "4개 프로젝트에서 팀장을 맡아 코드 리뷰, 살아있는 문서, 빠른 소통을 주도했고, 모든 프로젝트에서 순위권의 성적을 거두었습니다.",
  },
  {
    title: "실행과 성찰을 병행하는 개발자입니다.",
    desc: "지속 가능한 구조를 지향합니다. 필요할 때는 속도를 높여 빠르게 해결하되, 시행착오를 분석하고 개선하는 습관을 가지고 있습니다.",
  },
];

function IntroSection() {
  const [selectedSummary, setSelectedSummary] = useState<number | null>(null);

  return (
    <div className="relative py-20 bg-primary-background w-full flex flex-col px-[8%] md:px-10">
      {/* 제목 영역 */}
      <h1 className="font-family-perm text-3xl text-white font-normal">
        About Me
      </h1>

      {/* 컨텐츠 영역 */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-12 py-20 px-10 items-center">
        <div className="w-50">
          <img src={avatar} alt="프로필" className="rounded-md object-cover" />
        </div>

        {/* 2층 아이템 (이름)*/}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="font-semibold font-family-pret text-2xl text-white w-fit border-b p-2">
              윤대웅
            </div>
            <div className="font-family-pret w-fit text-l text-gray-100">
              “왜”를 먼저 생각하고 “어떻게”를 구현하는 프론트엔드 개발자
              윤대웅입니다.
            </div>
          </div>

          {/* 1층 아이템 */}
          <div className="flex gap-12 flex-wrap">
            <div className="flex flex-col gap-3 items-center">
              <div className="font-semibold font-family-pret text-2xl text-white w-fit border-b p-2">
                생년월일
              </div>
              <div className="font-family-pret w-fit text-l text-gray-100">
                1998. 05. 14
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="font-semibold font-family-pret text-2xl text-white w-full border-b py-2">
                최종학력
              </div>
              <div className="font-family-pret w-fit text-l text-gray-100">
                공주대학교 컴퓨터공학과
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="font-semibold font-family-pret text-2xl text-white w-full border-b py-2">
                이메일
              </div>
              <div className="font-family-pret w-fit text-l text-gray-100">
                dbseodnd356@gmail.com
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="font-semibold font-family-pret text-2xl text-white w-full border-b py-2">
                연락처
              </div>
              <div className="font-family-pret w-fit text-l text-gray-100">
                010-5743-5450
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.ul className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-20 font-[pretendard] text-xl md:text-2xl leading-relaxed flex-1 flex-wrap">
        {Introdution.map(({ title, desc }, index) => (
          <IntroductionSummary
            title={title}
            desc={desc}
            delay={index * 0.25}
            onClick={() =>
              selectedSummary === index
                ? setSelectedSummary(null)
                : setSelectedSummary(index)
            }
          />
        ))}
      </motion.ul>
    </div>
  );
}
export default IntroSection;
