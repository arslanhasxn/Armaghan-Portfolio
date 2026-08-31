import { motion, useReducedMotion } from "framer-motion";
import {
  lineContainer,
  lineItem,
  wordContainer,
  wordItem,
  VIEWPORT,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  className?: string;
  mode?: "words" | "lines";
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function RevealText({
  text,
  className,
  mode = "words",
  as: Tag = "span",
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[Tag];

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  if (mode === "lines") {
    const lines = text.split(/\n+/).filter(Boolean);

    return (
      <MotionTag
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={lineContainer}
      >
        {lines.map((line) => (
          <span key={line} className="block overflow-hidden">
            <motion.span className="block" variants={lineItem}>
              {line}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    );
  }

  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={wordContainer}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span className="inline-block" variants={wordItem}>
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
