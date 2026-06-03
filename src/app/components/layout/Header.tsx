'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant flat no-shadows"
    >
      <div className="flex justify-between items-center w-full h-16 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight flex items-center gap-1">
          <span className="text-primary-fixed-dim">PASCAL</span>
          OBIWUMMA
        </div>

        <nav className="hidden md:flex gap-stack-lg">
          {["project", "tech stack", "experience", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="font-nav-link text-nav-link text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-stack-md">
          {/* Removed Terminal Icon. Upgraded Resume button interactions */}
          <a href="/fullstack-cv.pdf" download="PascalObiwumma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block font-label-caps text-label-caps border border-outline-variant px-5 py-2.5 rounded hover:border-primary-fixed-dim hover:text-primary-fixed-dim hover:shadow-[0_0_15px_rgba(102,252,241,0.2)] transition-all duration-300 text-on-surface bg-background">
            RESUME
          </a>
        </div>
      </div>
    </motion.header>
  );
};