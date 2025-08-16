import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";

import LinkButton from "@/component/LinkButton";

function Intro() {
  return (
    <div className="relative bg-bg_primary h-[60vh] w-full">
      <div className="absolute top-1/12 left-1/12 h-screen p-0 bg-bg_primary w-fit">
        <div className="font-semibold font-mono text-7xl text-gray-800 w-fit">
          PORTPOLIO
        </div>
        <div className="font-[pretendard] w-fit text-xl">
          구조화를 지향하는 프론트엔드 개발자 윤대웅입니다.
        </div>
      </div>
      <div className="flex absolute bottom-1/12 left-1/12 gap-2 ">
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
          className="py-2 bg-orange-400 hover:bg-orange-500"
          onClick={() =>
            window.open("https://yun-engene.tistory.com/", "newWindow")
          }
        >
          <img className="h-5 mr-2" src={tistoryIcon} alt="티스토리" />
          Tistory
        </LinkButton>
      </div>
      <p className="w-fit  font-[pretendard] text-2xl">
        안녕하세요. 프론트엔드 개발자 윤대웅입니다. <br /> 프로그램의 구조를 잘
        이해하는 개발자를 지향하고 있습니다. <br /> 레이아웃 구조와 생명주기에
        관심을 가지면서 <br /> 프론트엔드 개발자에 흥미를 가지게
        되었습니다.{" "}
      </p>
    </div>
  );
}
export default Intro;
