import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/barber-hero.jpg"
            alt="Barber providing a precision haircut at Black & Blade"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Left-to-right gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B89B5E]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
                Premium Grooming
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-['Bebas_Neue'] text-6xl leading-[0.9] tracking-wide text-[#F5F1E8] sm:text-7xl md:text-8xl lg:text-9xl">
              PRECISION
              <span className="block text-[#B89B5E]">CUTS.</span>
              <span className="block">MODERN STYLE.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Premium haircuts, fades and beard grooming for the modern man.
              Step into Black & Blade and experience grooming built around
              precision, confidence and style.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA */}
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-3 bg-[#B89B5E] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#0B0B0B] transition-all duration-300 hover:bg-[#D4BC86]"
              >
                <FiCalendar size={18} />

                <span>Book An Appointment</span>

                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] transition-all duration-300 hover:border-[#B89B5E] hover:text-[#B89B5E]"
              >
                Explore Services
              </Link>
            </div>

            {/* Location */}
            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <FiMapPin size={18} className="text-[#B89B5E]" />

              <span>Bloemfontein, Free State</span>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-xs uppercase tracking-widest text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <span>Mon – Fri 09:00 – 18:00</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#B89B5E] sm:block" />

            <span>Saturday 08:00 – 16:00</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#B89B5E] sm:block" />

            <span>Appointments Available</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
