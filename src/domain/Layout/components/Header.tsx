import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tw from "@/utils/tw";

interface HeaderProps {
  variant?: "default" | "transparent" | "light" | "primary";
}

/* 해결 방법 고민
1. 헤더를 client component로 만들고, 페이지 별로 헤더의 색상을 변경해 줄 수 있도록 함.
2. 전역 provider를 만들어서 라우팅 주소별로 헤더의 색상을 변경해 줄 수 있도록 함.
3. Zustand를 사용해 페이지별로 스타일을 변경할 수 있도록 함.
4. 하위 레이아웃에서 root css 변수를 설정하도록 함
5. Shell을 이용해 헤더 설정 + 헤더가 존재하지 않아야 하는 페이지 (설문 히어로) 등 설정
*/

function Header({ variant = "transparent" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const params = useParams();

  // 스크롤 이벤트 처리
  useEffect(() => {
    // transparent 모드일 때만 스크롤 이벤트 추가
    if (variant !== "transparent") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [variant]);

  // 메뉴가 열렸을 때 body 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // variant에 따른 스타일 결정
  const getHeaderStyles = () => {
    // transparent 모드이고 스크롤된 경우
    if (variant === "transparent" && isScrolled) {
      return {
        background: "bg-black",
        text: "text-white",
        logoFilter: "brightness(0) invert(1)",
        underlineColor: "after:bg-white",
      };
    }

    switch (variant) {
      case "transparent":
        return {
          background: "bg-transparent",
          text: "text-white",
          logoFilter: "brightness(0) invert(1)",
          underlineColor: "after:bg-white",
        };
      case "light":
        return {
          background: "bg-white",
          text: "text-black",
          logoFilter: "brightness(0)",
          underlineColor: "after:bg-black",
        };
      case "primary":
        return {
          background: "bg-deep-navy",
          text: "text-white",
          logoFilter: "brightness(0) invert(1)",
          underlineColor: "after:bg-white",
        };
      default:
        return {
          background: "bg-black",
          text: "text-white",
          logoFilter: "brightness(0) invert(1)",
          underlineColor: "after:bg-white",
        };
    }
  };

  const styles = getHeaderStyles();

  const hamburgerColor = variant === "light" ? "bg-black" : "bg-white";

  return (
    <>
      <header
        className={`w-full h-15 ${styles.background} transition-colors duration-300 fixed top-0 left-0 right-0 z-50`}
      >
        <div className="px-[8%] mx-auto max-[1440px]:px-4 h-15 flex-shrink-0 items-center justify-between flex">
          <Link to="/" className="flex items-center gap-2">
            <h1 className={`text-xl font-bold font-family-logo ${styles.text}`}>
              YOON's PORTFOLIO
            </h1>
          </Link>
          {variant !== "default" && (
            <div
              className={`hidden md:flex items-center gap-12 ${styles.text}`}
            >
              <Link
                to="/about"
                className={`text-md group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${styles.underlineColor} after:transition-all after:duration-300 hover:after:w-full`}
              >
                자기소개
              </Link>
              <Link
                to="/skills"
                className={`text-md group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${styles.underlineColor} after:transition-all after:duration-300 hover:after:w-full`}
              >
                기술 스택
              </Link>
              <Link
                to="/projects"
                className={`text-md group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${styles.underlineColor} after:transition-all after:duration-300 hover:after:w-full`}
              >
                프로젝트
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* 모바일 햄버거 버튼 */}
      <button
        className="md:hidden fixed top-3 right-6 z-[100] w-10 h-10 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="메뉴"
      >
        <div className="relative w-6 h-5">
          <span
            className={tw(
              "absolute left-0 top-0 w-full h-0.5 rounded-full transition-all duration-300 ease-in-out",
              isMenuOpen ? "bg-white rotate-45 top-2" : hamburgerColor
            )}
          />
          <span
            className={tw(
              "absolute left-0 top-2 w-full h-0.5 rounded-full transition-all duration-300 ease-in-out",
              isMenuOpen ? "opacity-0" : hamburgerColor
            )}
          />
          <span
            className={tw(
              "absolute left-0 top-4 w-full h-0.5 rounded-full transition-all duration-300 ease-in-out",
              isMenuOpen ? "bg-white -rotate-45 top-2" : hamburgerColor
            )}
          />
        </div>
      </button>

      {/* 모바일 전체 화면 메뉴 */}
      <div
        className={tw(
          "md:hidden fixed inset-0 bg-deep-navy transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto z-50"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          clipPath: isMenuOpen
            ? "circle(150% at 100% 0)"
            : "circle(0% at 100% 0)",
        }}
      >
        <nav
          className={tw(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 w-full",
            isMenuOpen ? "opacity-100 delay-300" : "opacity-0"
          )}
        >
          <ul className="flex flex-col items-center space-y-10">
            <li>
              <Link
                to="/onboarding/profile-settings"
                className="!text-2xl text-white font-medium group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                to="/scenario-list"
                className="!text-2xl text-white font-medium group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                자기소개
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="!text-2xl text-white font-medium group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                기술 스택
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="!text-2xl text-white font-medium group relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                프로젝트
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
