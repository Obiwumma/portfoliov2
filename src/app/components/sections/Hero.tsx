'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap flex flex-col justify-center min-h-153.5 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="font-code-sm text-primary-fixed-dim mb-4 tracking-widest uppercase">
          Fullstack Web Developer
        </div>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-stack-md max-w-4xl">
          Building scalable web applications and high-performance interfaces.
        </h1>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-stack-lg"
      >
        I specialize in Next.js, TypeScript, and modern backend architecture. From designing robust databases to crafting seamless user experiences, I build digital products that are fast, secure, and maintainable.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap gap-stack-md"
      >
        <Link
          href="#work"
          className="font-label-caps text-label-caps border border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim px-6 py-3 rounded hover:bg-primary-fixed-dim hover:text-on-primary hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all duration-300"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="font-label-caps text-label-caps border border-outline-variant text-on-surface px-6 py-3 rounded hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};