import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";

import LinkButton from "@/component/LinkButton";

function IntroSection() {
  return (
    <div className="relative pt-20 bg-primary-background h-[100vh] w-full flex flex-col px-[8%]">
      <div className="mt-[2%]">
        <div className="font-semibold font-family-pret text-5xl text-white w-fit">
          윤대웅
        </div>
        <div className="font-family-pret w-fit text-xl text-subtext">
          “왜”를 먼저 생각하고 “어떻게”를 구현하는 개발자 윤대웅입니다.
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="font-[pretendard] text-xl md:text-2xl leading-relaxed max-w-[60ch]">
          <h3 className="text-white">문제를 정의할 수 있는 사람입니다.</h3>
          <p className="mb-4 text-subtext">
            기술 선택 전에 문제를 명확히 정의하고, 팀원들과 함께 최적의 해결책을
            찾는 사람입니다. Next .js 기반 인증 시스템 설계, 동시성 제어, 긴급
            배포 이슈 대응 등 다양한 문제를 해결해왔습니다.
          </p>
          <h3 className="text-white">문화를 주도할 수 있는 사람입니다.</h3>
          <p className="text-subtext">
            부트캠프 4개 프로젝트에서 팀장으로 코드 리뷰 문화, 살아있는 문서,
            빠른 소통을 원칙으로 삼았으며 모든 프로젝트에서 순위권의 성적을
            거두었습니다.
          </p>
          <button className="text-xl cursor-pointer text-gray-600">
            + 더 알아보기
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-[4%] ">
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
          className="py-2 bg-white hover:bg-gray-100 text-gray-800 border-gray-200 "
          onClick={() =>
            window.open("https://yun-engene.tistory.com/", "newWindow")
          }
        >
          <img className="h-5 mr-2" src={tistoryIcon} alt="티스토리" />
          Tistory
        </LinkButton>
      </div>
    </div>
  );
}
export default IntroSection;
