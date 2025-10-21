import LinkButton from "@/share/components/LinkButton";
import tistoryIcon from "@/assets/tistory.svg";
import githubIcon from "@/assets/github-mark-white.svg";

function HeroSection() {
  return (
    <div className="bg-primary-background w-full h-[100vh] relative">
      <div
        className="w-full h-full flex items-center justify-center flex-col gap-2"
        style={{
          background:
            "linear-gradient(246deg, rgba(217, 217, 217, 0.00) 41.66%, rgba(130, 79, 147, 0.15) 98.25%)",
        }}
      >
        <span className="text-7xl text-white font-semibold px-8 py-4 border-b border-white mb-4">
          Yoon Portpolio
        </span>
        <p className="text-xl text-white">안녕하세요</p>
        <p className="text-subtext">
          "왜"를 먼저 생각하고 "어떻게"를 구현하는 프론트엔드 개발자
          윤대웅입니다.
        </p>
      </div>
      <div className="flex gap-2 flex-1 items-end absolute right-10 bottom-10">
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
  );
}
export default HeroSection;
