import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-surface border-t border-outline-variant flat no-shadows full-width bottom-0 mt-auto" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full py-stack-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-stack-md">
        <div className="flex flex-col gap-stack-sm">
          <div className="font-label-caps text-label-caps font-bold text-on-surface dark:text-on-surface">
            © {new Date().getFullYear()} PASCAL OBIWUMMA // SYSTEMS ARCHITECT
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant">
            pobiwumma@gmail.com | Kubwa, Abuja <br />
            <span className="text-primary-fixed-dim">Available for freelance contracts and complex builds.</span>
          </div>
        </div>
        <nav className="flex gap-stack-lg mt-stack-md md:mt-0">
          <Link 
            href="#" 
            className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 opacity-80 hover:opacity-100 "
          >
            SOURCE
          </Link>
          <Link 
            href="#" 
            className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 opacity-80 hover:opacity-100 "
          >
            DOCS
          </Link>
          <Link 
            href="#" 
            className="font-label-caps text-label-caps text-primary-fixed-dim dark:text-primary-fixed-dim underline hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 opacity-80 hover:opacity-100 "
          >
            CONNECT
          </Link>
        </nav>
      </div>
    </footer>
  );
};