'use client';

import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const Stack = () => {
  return (
    <section className="border-t border-outline-variant relative z-10" id="stack">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUpVariant}
          className="md:col-span-4"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
            <span className="text-primary-fixed-dim animate-pulse">_</span> STACK
          </h2>
        </motion.div>
        
        <div className="md:col-span-8 flex flex-col gap-stack-lg">
          
          {/* Frontend */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h3 className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm border-b border-outline-variant pb-2">Frontend</h3>
            <div className="flex flex-wrap gap-stack-sm mt-stack-md">
              {['TypeScript', 'React', 'Next.js (App Router)', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Framer Motion'].map(tech => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-3 py-1.5 text-on-surface hover:text-primary-fixed-dim hover:border-primary-fixed-dim hover:shadow-[0_0_10px_rgba(102,252,241,0.2)] transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend & Databases */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h3 className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm border-b border-outline-variant pb-2">Backend & Databases</h3>
            <div className="flex flex-wrap gap-stack-sm mt-stack-md">
              {['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Oracle DB', 'Redis', 'Supabase', 'Drizzle ORM', 'WebSockets'].map(tech => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-3 py-1.5 text-on-surface hover:text-primary-fixed-dim hover:border-primary-fixed-dim hover:shadow-[0_0_10px_rgba(102,252,241,0.2)] transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI & Automation */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h3 className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm border-b border-outline-variant pb-2">AI & Automation</h3>
            <div className="flex flex-wrap gap-stack-sm mt-stack-md">
              {['OpenAI API', 'pgvector', 'DialoGPT', 'Custom NLP Pipelines', 'Make.com', 'n8n', 'Pabbly Connect'].map(tech => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-3 py-1.5 text-on-surface hover:text-primary-fixed-dim hover:border-primary-fixed-dim hover:shadow-[0_0_10px_rgba(102,252,241,0.2)] transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Architecture & DevOps */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h3 className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm border-b border-outline-variant pb-2">Architecture & DevOps</h3>
            <div className="flex flex-wrap gap-stack-sm mt-stack-md">
              {['Docker', 'AWS', 'Cloudflare', 'GitHub Actions / CI-CD', "USSD (Africa's Talking)", 'Custom JWT Auth', 'Vercel', 'Git'].map(tech => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-3 py-1.5 text-on-surface hover:text-primary-fixed-dim hover:border-primary-fixed-dim hover:shadow-[0_0_10px_rgba(102,252,241,0.2)] transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};