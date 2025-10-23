import tw from "@/utils/tw";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router";

interface Props {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, className, isOpen, onClose }: Props) {
  const location = useLocation();

  // ESC로 모달 닫기
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // 주소가 바뀌었을 때 모달 닫기
  useEffect(() => {
    onClose();
  }, [location.pathname, location.search, location.hash]);

  // 배경 스크롤 잠금/해제
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;

      // body 스타일 수정으로 스크롤 잠금
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // 스크롤 잠금 해제
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // 원래 스크롤 위치로 복원
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // 포탈 루트 보장
  useEffect(() => {
    if (!document.getElementById("portal-root")) {
      const el = document.createElement("div");
      el.id = "portal-root";
      document.body.appendChild(el);
    }
  }, []);

  const portal = document.getElementById("portal-root");

  if (!isOpen) return null;
  if (!portal) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[1000] bg-black/40 flex items-center justify-center">
        <div
          className={tw(
            "fixed inset-0 z-[1010] flex items-center justify-center",
            className
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {children}
        </div>
      </div>
    </>,
    portal
  );
}
export default Modal;
