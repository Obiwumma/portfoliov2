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
          © {new Date().getFullYear()} PASCAL OBIWUMMA // SYSTEMS ARCHITECT
        </div>
        
        <nav className="flex gap-stack-lg">
          <button 
            onClick={scrollToTop}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
          >
            BACK TO TOP
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 transition-transform duration-200">
              arrow_upward
            </span>
          </button>
        </nav>

      </div>
    </footer>
  );
};