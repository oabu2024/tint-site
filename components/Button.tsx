"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 rounded-none relative overflow-hidden group cursor-pointer";

  const styles =
    variant === "primary"
      ? "bg-[#C0392B] text-white hover:bg-[#a93226]"
      : "border-2 border-white text-white hover:bg-white hover:text-[#3E2723]";

  const content = (
    <motion.span
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-[#3E2723] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
      )}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
