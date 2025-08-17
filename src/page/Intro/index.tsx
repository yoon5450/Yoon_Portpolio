import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";

import LinkButton from "@/component/LinkButton";

function Intro() {
  return (
    <div className="relative bg-orange-400 h-[60vh] w-full flex flex-col justify-between pl-[8%] pr-[8%] text-gray-100">
      <div className="mt-[2%]">
        <div className="font-semibold font-mono text-7xl text-gray-800 w-fit">
          YOON'<span className="-m-3">s</span> PORTFOLIO
        </div>
        <div className="font-[pretendard] w-fit text-xl">
          구조화를 지향하는 프론트엔드 개발자 윤대웅입니다.
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end">
        <div className="font-[pretendard] text-xl md:text-2xl leading-relaxed max-w-[60ch] text-right">
          <p className="mb-4">
            {" "}
            안녕하세요. 프론트엔드 개발자 윤대웅입니다. <br />
            프로그램의 구조를 잘 이해하는 개발자를 지향하고 있습니다.
          </p>
          <p>
            {" "}
            레이아웃 구조와 생명주기에 관심을 가지면서 <br />
            프론트엔드 개발자에 흥미를 가지게 되었습니다.
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
export default Intro;
