function Footer() {
  return (
    <footer className="flex md:items-center md:justify-between min-h-20 w-full bg-gray-950 text-gray-200 font-[pretendard] px-10 md:px-20 py-4 flex-col gap-4 md:flex-row md:gap-0">
      <div className="flex flex-col gap-1.5 ">
        <p className="text-sm flex flex-col">
          <span className="text-orange-400">EMAIL</span>
          <span>dbseodnd356@gmail.com</span>
        </p>
        <p className="text-sm flex flex-col">
          <span className="text-orange-400">GITHUB</span>{" "}
          <a href="https://github.com/yoon5450">https://github.com/yoon5450</a>
        </p>
      </div>
      <div className="text-sm">
        © 2025. Yoon Dae Woong. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
