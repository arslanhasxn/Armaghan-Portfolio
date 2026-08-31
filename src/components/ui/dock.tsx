import React, { createContext, useContext, useRef, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionProps,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps
  extends VariantProps<typeof dockVariants>,
    Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  disableMagnification?: boolean;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl p-2",
);

interface DockContextValue {
  mouseX: MotionValue<number>;
  size: number;
  magnification: number;
  disableMagnification: boolean;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      disableMagnification = false,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      onMouseLeave,
      onMouseMove,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    return (
      <DockContext.Provider
        value={{
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          disableMagnification,
          distance: iconDistance,
        }}
      >
        <motion.div
          ref={ref}
          onMouseMove={(e) => {
            mouseX.set(e.pageX);
            onMouseMove?.(e);
          }}
          onMouseLeave={(e) => {
            mouseX.set(Infinity);
            onMouseLeave?.(e);
          }}
          {...props}
          className={cn(dockVariants({ className }), {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
          })}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  className?: string;
  children?: ReactNode;
}

const DockIcon = ({ className, children, ...props }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, size, magnification, disableMagnification, distance } =
    context;
  const padding = Math.max(6, size * 0.2);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const targetSize = disableMagnification ? size : magnification;

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, targetSize, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
        className,
      )}
      {...props}
    >
      <div className="flex size-full items-center justify-center">{children}</div>
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
