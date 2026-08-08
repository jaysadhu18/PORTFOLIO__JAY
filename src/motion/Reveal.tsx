import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewport } from "./variants";

type Tag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "span"
  | "ol"
  | "ul"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "header"
  | "footer"
  | "nav";

type Rest<T extends Tag> = Omit<
  HTMLMotionProps<T>,
  "children" | "className" | "variants" | "initial" | "animate" | "whileInView" | "viewport"
>;

/** Motion-only prop names that must never reach a plain DOM element. */
const MOTION_ONLY_PROPS = new Set([
  "variants",
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
  "viewport",
  "transition",
  "layout",
  "layoutId",
  "layoutDependency",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "dragTransition",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDrag",
  "onDragStart",
  "onDragEnd",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onViewportEnter",
  "onViewportLeave",
]);

/** Drops framer-motion-only props so the reduced-motion plain-tag fallback never gets them. */
function stripMotionProps(rest: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key in rest) {
    if (!MOTION_ONLY_PROPS.has(key)) out[key] = rest[key];
  }
  return out;
}

type RevealProps<T extends Tag> = {
  children: ReactNode;
  as?: T;
  variants?: Variants;
  className?: string;
  once?: boolean;
} & Rest<T>;

/** Fades/slides an element in the first time it scrolls into view. */
export function Reveal<T extends Tag = "div">({
  children,
  as,
  variants = fadeUp,
  className,
  once = true,
  ...rest
}: RevealProps<T>) {
  const tag = (as ?? "div") as Tag;
  const reduce = useReducedMotion();
  const MotionTag = motion[tag];

  if (reduce) {
    const Plain = tag;
    return (
      <Plain className={className} {...stripMotionProps(rest as Record<string, unknown>)}>
        {children}
      </Plain>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: viewport.margin }}
      variants={variants}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps<T extends Tag> = {
  children: ReactNode;
  as?: T;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
} & Rest<T>;

/** Orchestrates staggered entrance of RevealItem children on scroll into view. */
export function RevealGroup<T extends Tag = "div">({
  children,
  as,
  className,
  stagger = 0.12,
  delay = 0,
  once = true,
  ...rest
}: RevealGroupProps<T>) {
  const tag = (as ?? "div") as Tag;
  const reduce = useReducedMotion();
  const MotionTag = motion[tag];

  if (reduce) {
    const Plain = tag;
    return (
      <Plain className={className} {...stripMotionProps(rest as Record<string, unknown>)}>
        {children}
      </Plain>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: viewport.margin }}
      variants={staggerContainer(stagger, delay)}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps<T extends Tag> = {
  children: ReactNode;
  as?: T;
  variants?: Variants;
  className?: string;
} & Rest<T>;

/** A staggered child of RevealGroup — inherits animation state from its parent. */
export function RevealItem<T extends Tag = "div">({
  children,
  as,
  variants = fadeUp,
  className,
  ...rest
}: RevealItemProps<T>) {
  const tag = (as ?? "div") as Tag;
  const reduce = useReducedMotion();
  const MotionTag = motion[tag];

  if (reduce) {
    const Plain = tag;
    return (
      <Plain className={className} {...stripMotionProps(rest as Record<string, unknown>)}>
        {children}
      </Plain>
    );
  }

  return (
    <MotionTag className={className} variants={variants} {...(rest as Record<string, unknown>)}>
      {children}
    </MotionTag>
  );
}
