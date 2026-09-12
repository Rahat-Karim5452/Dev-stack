import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <img src={Logo} alt="Logo" className="h-8 w-auto" />

        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-500">
          <li className="cursor-pointer hover:text-gray-900">Home</li>
          <li className="cursor-pointer hover:text-gray-900">Technologies</li>
          <li className="cursor-pointer hover:text-gray-900">Projects</li>
          <li className="cursor-pointer hover:text-gray-900">About</li>
          <li className="cursor-pointer hover:text-gray-900">Contact</li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="font-semibold cursor-pointer text-gray-700 border border-gray-300 rounded-3xl px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base">
            Sign In
          </button>
          <button className="bg-[#D91B7E] text-white cursor-pointer font-semibold rounded-3xl px-3 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 font-semibold text-gray-500">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
