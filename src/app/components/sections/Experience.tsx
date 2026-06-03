'use client';

import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="border-t border-outline-variant relative z-10" id="experience">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
            <span className="text-primary-fixed-dim animate-pulse"></span> EXPERIENCE
          </h2>
        </motion.div>

        <div className="md:col-span-8 flex flex-col gap-stack-lg">
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-2 border-outline-variant pl-gutter hover:border-primary-fixed-dim transition-colors duration-300 group relative"
          >
            {/* Glowing dot indicator */}
            <div className="absolute -left-1.75 top-2 w-3 h-3 bg-surface border-2 border-outline-variant rounded-full group-hover:border-primary-fixed-dim group-hover:bg-primary-fixed-dim group-hover:shadow-[0_0_10px_rgba(102,252,241,0.8)] transition-all duration-300"></div>
            
            <h3 className="font-body-lg text-body-lg text-on-surface font-semibold group-hover:text-primary-fixed-dim transition-colors">Freelance Web Developer @ onSpace</h3>
            <p className="font-code-sm text-code-sm text-on-surface-variant mb-stack-sm mt-1">2025</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm">
              Engineered MVP features, secure client-side auth, and complex dashboards via React/Tailwind. Focused on scalable component architecture and high-performance rendering.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-2 border-outline-variant pl-gutter hover:border-primary-fixed-dim transition-colors duration-300 group relative"
          >
            <div className="absolute -left-1.75 top-2 w-3 h-3 bg-surface border-2 border-outline-variant rounded-full group-hover:border-primary-fixed-dim group-hover:bg-primary-fixed-dim group-hover:shadow-[0_0_10px_rgba(102,252,241,0.8)] transition-all duration-300"></div>

            <h3 className="font-body-lg text-body-lg text-on-surface font-semibold group-hover:text-primary-fixed-dim transition-colors">Web Developer @ Early Code Institute</h3>
            <p className="font-code-sm text-code-sm text-on-surface-variant mb-stack-sm mt-1">2025 (3 Mos Contract)</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm">
              Architected and deployed responsive, high-conversion landing pages. Conducted extensive technical research and competitive UX analysis to inform design decisions, executing critical sprint deliverables alongside engineering leads.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-2 border-outline-variant pl-gutter hover:border-primary-fixed-dim transition-colors duration-300 group relative"
          >
            <div className="absolute -left-1.75 top-2 w-3 h-3 bg-surface border-2 border-outline-variant rounded-full group-hover:border-primary-fixed-dim group-hover:bg-primary-fixed-dim group-hover:shadow-[0_0_10px_rgba(102,252,241,0.8)] transition-all duration-300"></div>

            <h3 className="font-body-lg text-body-lg text-on-surface font-semibold group-hover:text-primary-fixed-dim transition-colors">Software Developer @ HNG Internship 12</h3>
            <p className="font-code-sm text-code-sm text-on-surface-variant mb-stack-sm mt-1">2024</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm">
              Shipped data-driven full-stack features and enforced rigorous architectural standards within a fast-paced, collaborative engineering environment.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};