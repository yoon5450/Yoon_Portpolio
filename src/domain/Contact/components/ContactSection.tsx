import ContactButton from "./ContactButton";

function ContactSection() {
  return (
    <div className="flex flex-col gap-8 px-[8vw] py-10 md:p-20 w-full items-center justify-btw" id="contact">
      <h1 className="font-family-perm text-3xl font-normal">Contact Me</h1>

      <div className="flex gap-8 py-4 md:p-10 items-center flex-wrap">
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
      </div>
      <div className="flex gap-4 items-center w-fit justify-center flex-wrap">
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
  );
}

export default ContactSection;
