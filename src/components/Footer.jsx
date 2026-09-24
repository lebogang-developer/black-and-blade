import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B] text-[#F5F1E8]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/images/logo/black-and-blade-logo.png"
                alt="Black & Blade"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#777777]">
              Precision grooming for the modern man. Quality cuts, exceptional
              service and an experience worth returning to.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[#F5F1E8] transition-colors duration-300 hover:border-[#B89B5E] hover:text-[#B89B5E]"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[#F5F1E8] transition-colors duration-300 hover:border-[#B89B5E] hover:text-[#B89B5E]"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[#F5F1E8] transition-colors duration-300 hover:border-[#B89B5E] hover:text-[#B89B5E]"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#B89B5E]">
              EXPLORE
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 text-sm text-[#B89B5E] transition-colors duration-300 hover:text-[#D4BC86]"
                >
                  Book Appointment
                  <FiArrowUpRight size={15} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#B89B5E]">
              CONTACT
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[#B89B5E]" size={17} />

                <span className="text-sm leading-6 text-[#777777]">
                  123 Nelson Mandela Drive
                  <br />
                  Bloemfontein, Free State
                  <br />
                  South Africa
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-[#B89B5E]" size={17} />

                <a
                  href="tel:+27511234567"
                  className="text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  051 123 4567
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-[#B89B5E]" size={17} />

                <a
                  href="mailto:hello@blackandblade.co.za"
                  className="break-all text-sm text-[#777777] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  hello@blackandblade.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#B89B5E]">
              OPENING HOURS
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <FiClock className="mt-1 shrink-0 text-[#B89B5E]" size={17} />

                <div className="text-sm leading-6">
                  <p className="text-[#F5F1E8]">Monday – Friday</p>

                  <p className="text-[#777777]">09:00 – 18:00</p>
                </div>
              </div>

              <div className="ml-7 text-sm leading-6">
                <p className="text-[#F5F1E8]">Saturday</p>

                <p className="text-[#777777]">08:00 – 16:00</p>
              </div>

              <div className="ml-7 text-sm leading-6">
                <p className="text-[#F5F1E8]">Sunday</p>

                <p className="text-[#777777]">Closed</p>
              </div>
            </div>

            {/* Booking CTA */}
            <Link
              to="/booking"
              className="mt-7 inline-flex items-center gap-2 border border-[#B89B5E] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] transition-all duration-300 hover:bg-[#B89B5E] hover:text-[#0B0B0B]"
            >
              Book Now
              <FiArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-[#777777] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {currentYear} Black & Blade. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              to="/terms"
              className="transition-colors duration-300 hover:text-[#F5F1E8]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className="transition-colors duration-300 hover:text-[#F5F1E8]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
