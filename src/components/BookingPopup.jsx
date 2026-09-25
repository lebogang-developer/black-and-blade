import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiScissors,
  FiX,
} from "react-icons/fi";

const BookingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeButtonRef = useRef(null);

  const location = useLocation();

  // =====================================================
  // OPEN POPUP ONCE PER BROWSER SESSION
  // =====================================================

  useEffect(() => {
    const popupShown = sessionStorage.getItem("blackBladeBookingPopupShown");

    // Don't show the popup on the booking page itself
    if (location.pathname === "/booking") {
      return;
    }

    // Don't show again during the same browser session
    if (popupShown) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);

      sessionStorage.setItem("blackBladeBookingPopupShown", "true");
    }, 6000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // =====================================================
  // ESCAPE KEY + BODY SCROLL
  // =====================================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent page scrolling behind the modal
    document.body.style.overflow = "hidden";

    // Move keyboard focus to close button
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =====================================================
  // CLOSE POPUP
  // =====================================================

  const closePopup = () => {
    setIsOpen(false);
  };

  // =====================================================
  // CLOSE WHEN BACKDROP IS CLICKED
  // =====================================================

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0b0b]/80 px-4 py-6 backdrop-blur-sm sm:px-6"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      {/* =================================================
          MODAL
      ================================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-popup-title"
        aria-describedby="booking-popup-description"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[#333333] bg-[#141414] shadow-2xl"
      >
        {/* Gold Top Line */}
        <div className="h-1 w-full bg-[#b89b5e]" />

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close booking popup"
          className="absolute right-4 top-5 z-20 flex h-10 w-10 items-center justify-center border border-[#3a3a3a] bg-[#0b0b0b] text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#b89b5e] focus:outline-none focus:ring-2 focus:ring-[#b89b5e] sm:right-6 sm:top-7"
        >
          <FiX size={20} />
        </button>

        <div className="grid lg:grid-cols-5">
          {/* =============================================
              LEFT SIDE
          ============================================== */}

          <div className="relative overflow-hidden bg-[#0b0b0b] p-7 sm:p-10 lg:col-span-3 lg:p-12">
            {/* Decorative Element */}
            <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#b89b5e]/5 blur-3xl" />

            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#b89b5e]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                  Black & Blade
                </span>
              </div>

              {/* Heading */}
              <h2
                id="booking-popup-title"
                className="mt-6 max-w-lg font-['Bebas_Neue'] text-5xl uppercase leading-[0.95] tracking-wide text-[#f5f1e8] sm:text-6xl"
              >
                READY FOR A
                <span className="block text-[#b89b5e]">FRESH CUT?</span>
              </h2>

              {/* Description */}
              <p
                id="booking-popup-description"
                className="mt-6 max-w-lg text-sm leading-7 text-[#888888] sm:text-base"
              >
                Your next Black & Blade experience is only a few clicks away.
                Choose your service, barber and preferred appointment time
                online.
              </p>

              {/* Features */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <FiCheck size={15} className="text-[#b89b5e]" />

                  <span className="text-xs text-[#999999]">
                    Choose Your Barber
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheck size={15} className="text-[#b89b5e]" />

                  <span className="text-xs text-[#999999]">
                    Select Your Time
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheck size={15} className="text-[#b89b5e]" />

                  <span className="text-xs text-[#999999]">
                    Quick Confirmation
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/booking"
                  onClick={closePopup}
                  className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#0b0b0b] transition-colors duration-300 hover:bg-[#d4bc86]"
                >
                  <FiCalendar size={17} />
                  Book Appointment
                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/services"
                  onClick={closePopup}
                  className="group inline-flex items-center justify-center gap-3 border border-[#3a3a3a] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#b89b5e]"
                >
                  View Services
                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* =============================================
              RIGHT SIDE
          ============================================== */}

          <div className="border-t border-[#292929] bg-[#141414] p-7 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex h-full flex-col justify-center">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center border border-[#b89b5e]/40 text-[#b89b5e]">
                <FiScissors size={20} />
              </div>

              <span className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#777777]">
                Booking Made Simple
              </span>

              <h3 className="mt-3 font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-[#f5f1e8]">
                YOUR CHAIR.
                <span className="block text-[#b89b5e]">YOUR TIME.</span>
              </h3>

              {/* Booking Steps */}
              <div className="mt-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0b0b0b] text-[10px] font-bold text-[#b89b5e]">
                    01
                  </span>

                  <span className="text-xs text-[#999999]">
                    Select your service
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0b0b0b] text-[10px] font-bold text-[#b89b5e]">
                    02
                  </span>

                  <span className="text-xs text-[#999999]">
                    Choose your barber
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0b0b0b] text-[10px] font-bold text-[#b89b5e]">
                    03
                  </span>

                  <span className="text-xs text-[#999999]">
                    Pick a date & time
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-[#292929]" />

              {/* Hours */}
              <div className="flex items-start gap-3">
                <FiClock size={17} className="mt-0.5 shrink-0 text-[#b89b5e]" />

                <div>
                  <span className="block text-xs font-semibold text-[#f5f1e8]">
                    Open Monday – Saturday
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-[#777777]">
                    Find a time that works for you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="flex items-center justify-between border-t border-[#292929] bg-[#0b0b0b] px-7 py-4 sm:px-10">
          <span className="font-['Bebas_Neue'] text-lg tracking-wider text-[#b89b5e]">
            B&B
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#555555]">
            Precision Cuts. Modern Style.
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
