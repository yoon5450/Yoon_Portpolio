import ContactButton from "./ContactButton";

function ContactSection() {
  return (
    <div className="p-10 md:p-20" id="contact">
      <h1 className="font-family-perm text-3xl font-normal">Contact Me</h1>

      <div className="flex gap-8 p-10 items-center flex-wrap">
        <div className="flex items-center justify-center text-2xl font-bold flex-1 text-center px-4 flex-wrap h-fit gap-y-4">
          <div>
            <span>"</span>
            <span className="text-amber-500 text-nowrap">개발</span>에
            대한&nbsp;
            <span className="text-amber-500 text-nowrap">피드백</span>이나&nbsp;
            <span className="text-amber-500 text-nowrap">제안</span>이
            있으시다면 &nbsp;
          </div>
          <div className="text-nowrap">언제든지 편하게 연락주세요!"</div>
        </div>
        <div className="w-0.5 bg-gray-200 my-2" />
        <div className="flex flex-col gap-4 ">
          <ContactButton
            iconName="github"
            text="GITHUB"
            hiddenText="GitHub 프로필"
            href="https://github.com/yoon5450"
          />
          <ContactButton
            iconName="gmail"
            text="GMAIL"
            hiddenText="이메일 보내기"
            href="mailto:dbseodnd356@gmail.com"
          />
          <ContactButton
            iconName="tistory"
            text="TISTORY"
            hiddenText="블로그 보기"
            href="https://yun-engene.tistory.com/"
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-center text-black text-l">
        <span className="text-amber-500">GitHub</span>: @yoon5450 |&nbsp;
        <span className="text-amber-500">EMAIL</span>: dbseodnd356@gmil.com
        |&nbsp;
        <span className="text-amber-500">tistory</span>:
        https://yun-engene.tistory.com/
      </div> */}
    </div>
  );
}

export default ContactSection;
