import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiCalendar } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Black & Blade Home"
        >
          <img
            src="/images/logo/black-blade-logo.png"
            alt="Black & Blade"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-[#B89B5E]"
                    : "text-[#F5F1E8] hover:text-[#B89B5E]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#B89B5E] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/booking"
            className="group flex items-center gap-2 border border-[#B89B5E] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] transition-all duration-300 hover:bg-[#B89B5E] hover:text-[#0B0B0B]"
          >
            <FiCalendar
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>Book Now</span>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center p-2 text-[#B89B5E] transition-colors duration-300 hover:text-[#D4BC86] lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0B0B0B] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "border-l-2 border-l-[#B89B5E] pl-4 text-[#B89B5E]"
                      : "text-[#F5F1E8] hover:text-[#B89B5E]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Book Now Button */}
          <Link
            to="/booking"
            onClick={closeMenu}
            className="mt-6 flex w-full items-center justify-center gap-2 bg-[#B89B5E] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#0B0B0B] transition-all duration-300 hover:bg-[#D4BC86]"
          >
            <FiCalendar size={18} />

            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
