function Footer() {
  return (
    <footer className="flex items-center justify-between h-20 bg-gray-950 text-gray-200 font-[pretendard] px-20">
      <div className="flex flex-col gap-1.5">
        <p className="text-sm">
          <span className="text-orange-400">EMAIL</span> dbseodnd356@gmail.com
        </p>
        <p className="text-sm">
          <span className="text-orange-400">GITHUB</span>{" "}
          <a href="https://github.com/yoon5450">https://github.com/yoon5450</a>
        </p>
      </div>
      <div className="text-sm">© 2025. Yoon Dae Woong. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
