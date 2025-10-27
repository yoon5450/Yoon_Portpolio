import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  type Placement,
} from "@floating-ui/react";

export function Tooltip({
  children, // 트리거 요소
  contents, // 툴팁 안에 표시할 내용
  className,
  placement = "top",
}: {
  children: React.ReactNode;
  contents: React.ReactNode;
  className?: string;
  placement?: Placement;
}) {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(20), flip(), shift()],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      {/* 트리거 요소 */}
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        className="cursor-pointer flex items-center justify-center"
      >
        {children}
      </span>

      {/* 툴팁 본문 */}
      <FloatingPortal>
        {open && (
          <div
            className={`tooltip ${className}`}
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            {contents}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
