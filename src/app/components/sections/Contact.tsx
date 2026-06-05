'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="border-t border-outline-variant relative z-10" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }}
          className="mb-stack-lg"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
            <span className="text-primary-fixed-dim material-symbols-outlined text-[20px]">mail</span>
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Left Column: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 flex flex-col gap-stack-md"
          >
            <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Let's build something scalable.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-md">
              I am currently available for freelance contracts, full-time roles, and complex architectural builds. Drop me a line and let's discuss your system requirements.
            </p>
            
            <div className="mt-stack-md flex flex-col gap-3">
              <a href="mailto:pobiwumma@gmail.com" className="font-code-sm text-code-sm text-on-surface hover:text-primary-fixed-dim transition-colors flex items-center gap-2 w-fit">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">alternate_email</span>
                pobiwumma@gmail.com
              </a>
              <div className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                Kubwa, Abuja, Nigeria
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-stack-md pt-stack-md border-t border-outline-variant/50">
              <Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors flex items-center gap-1">
                [ GITHUB ]
              </Link>
              <Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors flex items-center gap-1">
                [ LINKEDIN ]
              </Link>
              <Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors flex items-center gap-1">
                [ TWITTER/X ]
              </Link>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 mt-stack-lg md:mt-0"
          >
            {/* Replace the action URL with your Web3Forms or Formspree endpoint */}
            <form action="https://api.web3forms.com/submit" method="POST" className="bg-surface border border-outline-variant rounded-xl p-stack-md md:p-stack-lg flex flex-col gap-5 shadow-2xl shadow-black/50">
              
              {/* Add your Web3Forms Access Key here when you generate one */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Contact from Portfolio!" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label-caps text-label-caps text-on-surface-variant">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label-caps text-label-caps text-on-surface-variant">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@company.com"
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-caps text-label-caps text-on-surface-variant">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  placeholder="Tell me about your project or system requirements..."
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-4 py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all duration-300 resize-y"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full md:w-auto self-start font-label-caps text-label-caps border border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim px-8 py-3 rounded-md hover:bg-primary-fixed-dim hover:text-on-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                SEND MESSAGE
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};