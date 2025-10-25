import { reviews } from "../constants";
import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function TextRoll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [distance, setDistance] = useState(0); // px to translate for one full loop
  const [playing, setPlaying] = useState(true);
  const [startFrom, setStartFrom] = useState<number | null>(null);

  const items = [...reviews, ...reviews];

  const SPEED = 50;

  useEffect(() => {
    if (!listRef.current || !containerRef.current) return;
    // because we duplicated the items, original content height is half of scrollHeight
    const full = listRef.current.scrollHeight;
    const h = full * 0.45;
    setDistance(h);

    // 클린업
    return () => {
      if (delayRef.current) {
        clearTimeout(delayRef.current);
        delayRef.current = null;
      }
    };
  }, []);

  const getCurrentY = (el?: HTMLElement | null) => {
    if (!el) return 0;
    const style = window.getComputedStyle(el);
    const transform = style.transform || style.webkitTransform;
    if (transform && transform !== "none") {
      const m = transform.match(/matrix\(([^)]+)\)/);
      if (m) {
        const parts = m[1].split(",");
        const ty = parseFloat(parts[5]);
        return isNaN(ty) ? 0 : ty;
      }
    }
    return 0;
  };

  const animateProp: Record<string, unknown> = {};
  const transitionProp: Record<string, unknown> = {};
  if (distance > 0 && playing) {
    const from = startFrom ?? 0;
    const remaining = Math.abs(distance + from);
    const duration = Math.max(1, remaining / SPEED);
    animateProp.y = [from, -distance];
    transitionProp.duration = duration;
    transitionProp.easing = "linear";
    transitionProp.repeat = 0;
  } else {
    const cur = getCurrentY(listRef.current);
    animateProp.y = cur;
    transitionProp.duration = 0;
  }

  return (
    <div className="relative h-60 overflow-hidden flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-full overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
      >
        <motion.div
          ref={listRef}
          className="flex flex-col cursor-grab"
          drag="y"
          dragElastic={0.4}
          dragConstraints={{ top: -distance, bottom: 0 }}
          onDragStart={() => {
            if (delayRef.current) {
              clearTimeout(delayRef.current);
              delayRef.current = null;
            }
            setPlaying(false);
            setStartFrom(null);
          }}
          onDragEnd={() => {
            const curDelay = delayRef.current;
            if (curDelay) {
              clearTimeout(curDelay);
            }

            delayRef.current = setTimeout(() => {
              setPlaying(true);
              delayRef.current = null;
              const cur = getCurrentY(listRef.current);
              setStartFrom(cur);
            }, 1000);
          }}
          onHoverStart={() => {
            const curDelay = delayRef.current;
            if (curDelay) {
              clearTimeout(curDelay);
              delayRef.current = null;
            }
            setPlaying(false);
          }}
          onHoverEnd={() => {
            const curDelay = delayRef.current;
            if (curDelay) {
              clearTimeout(curDelay);
            }
            delayRef.current = setTimeout(() => {
              setPlaying(true);
              delayRef.current = null;
              const cur = getCurrentY(listRef.current);
              setStartFrom(cur);
            }, 300);
          }}
          onAnimationComplete={() => {
            if (playing) setStartFrom(0);
          }}
          whileTap={{ cursor: "grabbing" }}
          animate={animateProp as TargetAndTransition}
          transition={transitionProp as Transition}
        >
          {items.map((review, index) => (
            <div
              key={`r-${index}`}
              className="text-3xl text-white text-center py-6"
            >
              {review}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TextRoll;
