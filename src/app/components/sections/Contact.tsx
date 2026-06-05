'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    //Web3Forms Access Key
    formData.append("access_key", "a5836a49-b547-49d1-9244-900f21e85036");
    formData.append("subject", "New Contact from Systems Architect Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let&apos;s build something scalable.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-md">
              I am currently available for freelance contracts, full-time roles, and complex architectural builds. Drop me a line and let's discuss your system requirements.
            </p>
            
            <div className="mt-stack-md flex flex-col gap-3">
              {/* <a href="mailto:pobiwumma@gmail.com" className="font-code-sm text-code-sm text-on-surface hover:text-primary-fixed-dim transition-colors flex items-center gap-2 w-fit">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">alternate_email</span>
                pobiwumma@gmail.com
              </a>
              <div className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                Kubwa, Abuja, Nigeria
              </div> */}
            </div>

            {/* Social Links with Native SVGs */}
            <div className="flex gap-6 mt-stack-md pt-stack-md border-t border-outline-variant/50">
              {/* GitHub Icon */}
              <Link href="" target="_blank" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors group">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="group-hover:scale-110 transition-transform duration-200">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              
              {/* LinkedIn Icon */}
              <Link href="#" target="_blank" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors group">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="group-hover:scale-110 transition-transform duration-200">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>

              {/* X (Twitter) Icon */}
              <Link href="#" target="_blank" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors group">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="group-hover:scale-110 transition-transform duration-200">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Async Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 mt-stack-lg md:mt-0"
          >
            {isSuccess ? (
              // Success State UI
              <div className="bg-surface border border-primary-fixed-dim/30 rounded-xl p-stack-lg flex flex-col items-center justify-center text-center gap-4 shadow-2xl shadow-primary-fixed-dim/5 h-full min-h-[300px]">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[48px] animate-bounce">check_circle</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Transmission Sent</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Thank you for reaching out. I&apos;ll review your system requirements and get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 font-label-caps text-label-caps text-primary-fixed-dim hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              // Active Form UI
              <form onSubmit={handleSubmit} className="bg-surface border border-outline-variant rounded-xl p-stack-md md:p-stack-lg flex flex-col gap-5 shadow-2xl shadow-black/50">
                
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded font-body-md text-sm">
                    {errorMessage}
                  </div>
                )}

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
                  disabled={isSubmitting}
                  className="mt-2 w-full md:w-auto self-start font-label-caps text-label-caps border border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim px-8 py-3 rounded-md hover:bg-primary-fixed-dim hover:text-on-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <span className="material-symbols-outlined text-[16px]">send</span>}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};