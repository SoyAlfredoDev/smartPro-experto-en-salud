"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold text-sm transition-colors duration-300";

  const variants = {
    primary: "bg-primary text-foreground-on-primary hover:bg-secondary",
    secondary: "bg-secondary text-foreground-on-primary hover:bg-primary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-foreground-on-primary",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
