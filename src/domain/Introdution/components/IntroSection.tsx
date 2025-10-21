import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";
import avatar from "@/assets/yoon.jpg";
import { useState } from "react";
import IntroductionSummary from "./IntroductionSummary";
import LinkButton from "@/share/components/LinkButton";

const Introdution = [
  {
    title: "문제 정의부터 시작하는 개발자입니다.",
    desc: "기술 선택 전에 문제를 명확히 정의하고, 팀원들과 함께 최적의 해결책을 찾는 사람입니다. Next .js 기반 인증 시스템 설계, 동시성 제어, 긴급 배포 이슈 대응 등 다양한 문제를 해결해왔습니다.",
  },
  {
    title: "문화를 주도할 수 있는 개발자입니다.",
    desc: "부트캠프 4개 프로젝트에서 팀장으로 코드 리뷰 문화, 살아있는 문서, 빠른 소통을 원칙으로 삼았으며 모든 프로젝트에서 순위권의 성적을 거두었습니다.",
  },
  {
    title: "실행과 성찰을 병행하는 개발자입니다.",
    desc: "저는 실행 속도도 중요하지만, 명확한 기준과 지속 가능한 구조를더 중요하게 생각합니다. 필요할 때는 속도를 높여 빠르게 해결하되, 시행착오를 분석하고 개선하는 습관이 있는 사람입니다. “왜 이렇게 동작하는가”, “이 기술의 철학과 등장 배경은무엇인지” 고민하고 끝까지 탐구하는 태도로 성장하고 있습니다.",
  },
];

function IntroSection() {
  const [selectedSummary, setSelectedSummary] = useState<number | null>(null);

  return (
    <div className="relative pt-20 bg-primary-background h-[100vh] w-full flex flex-col px-[8%] ">
      <div className="flex flex-col md:flex-row gap-0 md:gap-4">
        <div className="w-1/8">
          <img src={avatar} alt="프로필" className="rounded-md object-cover" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-semibold font-family-pret text-4xl text-white w-fit border-b p-2">
            윤대웅
          </div>
          <div className="font-family-pret w-fit text-xl text-subtext">
            “왜”를 먼저 생각하고 “어떻게”를 구현하는 프론트엔드 개발자
            윤대웅입니다.
          </div>
          <div className="flex gap-2 flex-1 items-end">
            <LinkButton
              intent="primary"
              size="lg"
              className="py-2"
              onClick={() =>
                window.open("https://github.com/yoon5450", "newWindow")
              }
            >
              <img className="h-5 mr-2" src={githubIcon} alt="깃허브" />
              Github
            </LinkButton>
            <LinkButton
              intent="primary"
              size="lg"
              className="py-2 bg-white hover:bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-800"
              onClick={() =>
                window.open("https://yun-engene.tistory.com/", "newWindow")
              }
            >
              <img className="h-5 mr-2" src={tistoryIcon} alt="티스토리" />
              Tistory
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 font-[pretendard] text-xl md:text-2xl leading-relaxed flex-1">
        {Introdution.map(({ title, desc }, index) => (
          <IntroductionSummary
            title={title}
            desc={desc}
            onClick={() =>
              selectedSummary === index
                ? setSelectedSummary(null)
                : setSelectedSummary(index)
            }
            isOpen={selectedSummary === index}
          />
        ))}
      </div>
    </div>
  );
}
export default IntroSection;
