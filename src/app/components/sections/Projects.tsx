'use client';

import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className="border-t border-outline-variant relative z-10" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase flex items-center gap-3">
            <span className="text-primary-fixed-dim animate-pulse">_</span>
            PROJECTS
          </h2>
        </motion.div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          
          {/* Project Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-outline-variant rounded-lg p-stack-lg transition-all duration-300 flex flex-col justify-between bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                Lockerroom
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">Architected a robust backend data layer and scalable frontend interface for premium e-commerce.</p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
              {['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle'].map((tech) => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-outline-variant rounded-lg p-stack-lg transition-all duration-300 flex flex-col justify-between bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                Zen Social
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">Full-stack social platform emphasizing rapid content delivery and minimalist UI logic.</p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
              {['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind v4'].map((tech) => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-outline-variant rounded-lg p-stack-lg transition-all duration-300 flex flex-col justify-between bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                Veritas Bank
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">Enterprise-grade financial system with complex PL/SQL logic and highly secure transactions.</p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
              {['Next.js', 'Python', 'Oracle DB', 'PL/SQL'].map((tech) => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }}
            className="border border-outline-variant rounded-lg p-stack-lg transition-all duration-300 flex flex-col justify-between bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                Predictive ML
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">Machine learning pipeline utilizing Random Forest for analytics with LIME & SHAP.</p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
              {['Python', 'Random Forest', 'LIME', 'SHAP'].map((tech) => (
                <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
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