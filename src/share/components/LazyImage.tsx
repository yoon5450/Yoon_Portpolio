import { useState } from "react";
import { motion, AnimatePresence, type HTMLMotionProps } from "motion/react";

interface Props extends HTMLMotionProps<"img"> {
  src: string;
  alt: string;
  height?: number;
}

// TODO : absolute 때문에 구조가 좀 이상한 것 같은데 수정 요망
export default function LazyImage({ src, alt, height, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-md"
      style={{ position: "relative", width: "100%", height: "auto" }}
    >
      {/* 스켈레톤 */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: "#e0e0e0",
              width: "100%",
              height: height || 400,
              borderRadius: "12px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
      </AnimatePresence>

      {/* 실제 이미지 */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
        {...props}
      />
    </div>
  );
}
