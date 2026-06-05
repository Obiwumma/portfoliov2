import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-stack-md px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-4">
        
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          © {new Date().getFullYear()} PASCAL OBIWUMMA // SYSTEMS ARCHITECT
        </div>
        
        <nav className="flex gap-stack-lg">
          <Link 
            href="#top" 
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 flex items-center gap-2 group"
          >
            BACK TO TOP
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-y-1 transition-transform duration-200">
              straight
            </span>
          </Link>
        </nav>

      </div>
    </footer>
  );
};