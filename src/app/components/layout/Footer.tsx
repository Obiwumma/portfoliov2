'use client';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-stack-md px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-4">
        
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          © {new Date().getFullYear()} PASCAL OBIWUMMA // WEB DEVELOPER
        </div>
        
        <nav className="flex gap-stack-lg">
          <button 
            onClick={scrollToTop}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
          >
            BACK TO TOP
            {/* Bulletproof inline SVG Arrow */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4.5 h-4.5 group-hover:-translate-y-1 transition-transform duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
        </nav>

      </div>
    </footer>
  );
};