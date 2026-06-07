'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="border-t border-outline-variant relative z-10" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase flex items-center gap-3">
            <span className="text-primary-fixed-dim animate-pulse"></span>
            PROJECTS
          </h2>
        </motion.div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          
          {/* Project Card 1: FULLSTACK */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-outline-variant rounded-lg transition-all duration-300 flex flex-col bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="relative w-full h-48 border-b border-outline-variant overflow-hidden bg-surface-container-lowest">
              <Image 
                src="/lockerroom.png" 
                alt="Lockerroom Interface" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-primary-fixed-dim/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            
            <div className="p-stack-lg flex flex-col grow relative z-10">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                  <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                  Lockerroom
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Architected a robust backend data layer and scalable frontend interface for premium e-commerce.</p>
              </div>
              
              <div className="mt-auto flex flex-col gap-stack-md">
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle'].map((tech) => (
                    <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2 pt-4 border-t border-outline-variant/50">
                  <Link href="https://codealpha-tasks-e-commerce.vercel.app/login" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    [ LIVE DEMO ]
                  </Link>
                  <Link href="https://github.com/Obiwumma/codealpha_tasks_E-commerce" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    {/* <span className="material-symbols-outlined text-[16px]">code</span> */}
                    [ SOURCE CODE ]
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2: FRONTEND UI/UX (Spotify Clone) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-outline-variant rounded-lg transition-all duration-300 flex flex-col bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="relative w-full h-48 border-b border-outline-variant overflow-hidden bg-surface-container-lowest">
              <Image 
                src="/spotify-clone.png" 
                alt="Spotify Web Player Clone" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary-fixed-dim/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            
            <div className="p-stack-lg flex flex-col grow relative z-10">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                  <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                  Spotify Web Clone
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Pixel-perfect frontend architecture showcasing complex global state management, audio playback controls, and responsive CSS grids.</p>
              </div>
              
              <div className="mt-auto flex flex-col gap-stack-md">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Zustand', 'Tailwind CSS', 'Web Audio API'].map((tech) => (
                    <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2 pt-4 border-t border-outline-variant/50">
                  <Link href="https://github.com/Obiwumma/react-spotify" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    {/* <span className="material-symbols-outlined text-[16px]">open_in_new</span> */}
                    [ LIVE DEMO ]
                  </Link>
                  <Link href="https://github.com/Obiwumma/react-spotify" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    {/* <span className="material-symbols-outlined text-[16px]"></span> */}
                    [ SOURCE CODE]
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Card 3: BACKEND/DATA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-outline-variant rounded-lg transition-all duration-300 flex flex-col bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="relative w-full h-48 border-b border-outline-variant overflow-hidden bg-surface-container-lowest">
              <Image 
                src="/banking.png" 
                alt="Veritas Bank Interface" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary-fixed-dim/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            
            <div className="p-stack-lg flex flex-col grow relative z-10">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                  <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                  Veritas Bank
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Enterprise-grade financial system with complex PL/SQL logic and highly secure transactions.</p>
              </div>
              
              <div className="mt-auto flex flex-col gap-stack-md">
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Python', 'Oracle DB', 'PL/SQL'].map((tech) => (
                    <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2 pt-4 border-t border-outline-variant/50">
                  <Link href="https://veritas-frontend-snowy.vercel.app/" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    {/* <span className="material-symbols-outlined text-[16px]">open_in_new</span> */}
                    [ LIVE DEMO ]
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Card 4: AI/ML */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border border-outline-variant rounded-lg transition-all duration-300 flex flex-col bg-surface group hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(102,252,241,0.15)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="relative w-full h-48 border-b border-outline-variant overflow-hidden bg-surface-container-lowest">
              <Image 
                src="/ai-predicton.png" 
                alt="Predictive ML Interface" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary-fixed-dim/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            
            <div className="p-stack-lg flex flex-col grow relative z-10">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm flex items-center gap-2 group-hover:text-primary-fixed-dim transition-colors duration-300">
                  <span className="text-primary-fixed-dim opacity-50 text-sm font-normal">&gt;_</span>
                  Predictive ML
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Machine learning pipeline utilizing Random Forest for analytics with interpretability via LIME & SHAP.</p>
              </div>
              
              <div className="mt-auto flex flex-col gap-stack-md">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Random Forest', 'LIME', 'SHAP'].map((tech) => (
                    <span key={tech} className="font-code-sm text-code-sm border border-outline-variant rounded px-2 py-1 text-on-surface-variant bg-background transition-all duration-300 group-hover:border-primary-fixed-dim/30 group-hover:text-primary-fixed-dim">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2 pt-4 border-t border-outline-variant/50">
                  <Link href="https://github.com/Obiwumma/Admission-Prediction-System-XAI" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    <span className="material-symbols-outlined text-[16px]"></span>
                    [ SOURCE CODE ]
                  </Link>
                  {/* <Link href="#" target="_blank" className="font-label-caps text-label-caps flex items-center gap-1 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200">
                    <span className="material-symbols-outlined text-[16px]">description</span>
                    [ PAPER/DOCS ]
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};