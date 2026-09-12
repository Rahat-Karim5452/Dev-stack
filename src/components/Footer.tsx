import FooterLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <img
                src={FooterLogo}
                alt="DevStack Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="mx-auto max-w-sm text-sm leading-6 text-slate-500 lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex justify-center gap-6 lg:justify-start">
              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-5 text-sm font-semibold uppercase text-slate-800">
              Product
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-5 text-sm font-semibold uppercase text-slate-800">
              Company
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-5 text-sm font-semibold uppercase text-slate-800">
              Legal
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-800"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 sm:mt-12 sm:pt-7">
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p className="text-sm text-slate-400">
              © 2026 DevStack. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-slate-700"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-slate-700"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
