import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiScissors,
  FiAward,
  FiUserCheck,
  FiCheck,
  FiClock,
  FiStar,
  FiHeart,
} from "react-icons/fi";

import services from "../data/services.json";
import barbers from "../data/barbers.json";

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

      {/* Introduction / About Section */}
      <section className="bg-[#F5F1E8] py-20 text-[#0B0B0B] sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            {/* Small Label */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B89B5E]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
                  The Black & Blade Experience
                </span>
              </div>

              <h2 className="max-w-2xl font-['Bebas_Neue'] text-5xl leading-none tracking-wide sm:text-6xl lg:text-7xl">
                MORE THAN
                <span className="block text-[#B89B5E]">A HAIRCUT.</span>
              </h2>
            </div>

            {/* Intro Text */}
            <div className="max-w-xl lg:ml-auto">
              <p className="text-base leading-8 text-black/65 sm:text-lg">
                Black & Blade is a modern barbershop built around precision,
                craftsmanship and confidence. We believe a great haircut is more
                than a service — it is part of how you present yourself to the
                world.
              </p>

              <p className="mt-5 text-base leading-8 text-black/65">
                From sharp fades and classic cuts to carefully crafted beard
                styles, every appointment is approached with attention to detail
                and a commitment to quality.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-black/10 sm:my-20" />

          {/* Values */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* Value 1 */}
            <div className="group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#B89B5E] text-[#B89B5E] transition-all duration-300 group-hover:bg-[#B89B5E] group-hover:text-[#0B0B0B]">
                <FiScissors size={21} />
              </div>

              <span className="text-xs font-semibold tracking-[0.2em] text-black/40">
                01
              </span>

              <h3 className="mt-2 font-['Bebas_Neue'] text-2xl tracking-wide">
                PRECISION
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black/60">
                Every cut is carefully considered, from the first line to the
                final finish.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#B89B5E] text-[#B89B5E] transition-all duration-300 group-hover:bg-[#B89B5E] group-hover:text-[#0B0B0B]">
                <FiAward size={21} />
              </div>

              <span className="text-xs font-semibold tracking-[0.2em] text-black/40">
                02
              </span>

              <h3 className="mt-2 font-['Bebas_Neue'] text-2xl tracking-wide">
                CRAFT
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black/60">
                Our barbers combine experience, technique and attention to
                detail to create a finish you can be confident in.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#B89B5E] text-[#B89B5E] transition-all duration-300 group-hover:bg-[#B89B5E] group-hover:text-[#0B0B0B]">
                <FiUserCheck size={21} />
              </div>

              <span className="text-xs font-semibold tracking-[0.2em] text-black/40">
                03
              </span>

              <h3 className="mt-2 font-['Bebas_Neue'] text-2xl tracking-wide">
                EXPERIENCE
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black/60">
                A relaxed, professional environment where your time, style and
                experience matter.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 sm:mt-16">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#0B0B0B]"
            >
              <span className="border-b border-[#B89B5E] pb-1">
                Discover Our Story
              </span>

              <FiArrowRight
                size={18}
                className="text-[#B89B5E] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#0B0B0B] py-20 text-[#F5F1E8] sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B89B5E]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
                  Our Services
                </span>
              </div>

              <h2 className="max-w-2xl font-['Bebas_Neue'] text-5xl leading-none tracking-wide sm:text-6xl lg:text-7xl">
                BUILT AROUND
                <span className="block text-[#B89B5E]">YOUR STYLE.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">
              From precision cuts to complete grooming experiences, every
              service is designed to leave you looking sharp and feeling
              confident.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-[#111111] p-7 transition-all duration-300 hover:bg-[#171717] sm:p-8 ${
                  index === 5 ? "lg:bg-[#171717]" : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#B89B5E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiScissors
                    size={20}
                    className="text-white/20 transition-colors duration-300 group-hover:text-[#B89B5E]"
                  />
                </div>

                {/* Service Name */}
                <h3 className="mt-12 font-['Bebas_Neue'] text-3xl tracking-wide text-[#F5F1E8]">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                {/* Price + Duration */}
                <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/30">
                      From
                    </span>

                    <p className="mt-1 text-xl font-semibold text-[#B89B5E]">
                      R{service.price}
                    </p>
                  </div>

                  <span className="text-xs text-white/40">
                    {service.duration} min
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-sm text-white/40">
              Prices include professional finishing and grooming products.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 border-b border-[#B89B5E] pb-1 text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] transition-colors duration-300 hover:text-[#B89B5E]"
            >
              View All Services
              <FiArrowRight
                size={18}
                className="text-[#B89B5E] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="bg-[#141414] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
              Why Black & Blade
            </span>

            <h2 className="mt-4 font-['Bebas_Neue'] text-4xl uppercase leading-tight tracking-wide text-[#f5f1e8] sm:text-5xl md:text-6xl">
              WHERE CRAFT MEETS
              <span className="block text-[#b89b5e]">CONFIDENCE.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#777777] md:text-lg">
              We believe a great haircut is more than just a service. It is
              about precision, confidence and an experience worth coming back
              for.
            </p>
          </div>

          {/* Why Us Cards */}
          <div className="mt-14 grid gap-px overflow-hidden border border-[#2a2a2a] bg-[#2a2a2a] sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group bg-[#141414] p-8 transition-colors duration-300 hover:bg-[#1b1b1b] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center border border-[#b89b5e]/40 text-[#b89b5e] transition-all duration-300 group-hover:border-[#b89b5e] group-hover:bg-[#b89b5e] group-hover:text-[#0b0b0b]">
                <FiScissors size={24} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl tracking-wide text-[#f5f1e8]">
                PRECISION CRAFT
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#777777]">
                Every cut is carefully executed with attention to detail, clean
                finishes and sharp, consistent results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#141414] p-8 transition-colors duration-300 hover:bg-[#1b1b1b] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center border border-[#b89b5e]/40 text-[#b89b5e] transition-all duration-300 group-hover:border-[#b89b5e] group-hover:bg-[#b89b5e] group-hover:text-[#0b0b0b]">
                <FiAward size={24} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl tracking-wide text-[#f5f1e8]">
                EXPERIENCED BARBERS
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#777777]">
                Our barbers combine technical skill with modern styling
                knowledge to create looks that suit you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#141414] p-8 transition-colors duration-300 hover:bg-[#1b1b1b] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center border border-[#b89b5e]/40 text-[#b89b5e] transition-all duration-300 group-hover:border-[#b89b5e] group-hover:bg-[#b89b5e] group-hover:text-[#0b0b0b]">
                <FiStar size={24} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl tracking-wide text-[#f5f1e8]">
                PREMIUM EXPERIENCE
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#777777]">
                From the moment you walk in, expect a clean, comfortable and
                professional grooming experience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#141414] p-8 transition-colors duration-300 hover:bg-[#1b1b1b] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center border border-[#b89b5e]/40 text-[#b89b5e] transition-all duration-300 group-hover:border-[#b89b5e] group-hover:bg-[#b89b5e] group-hover:text-[#0b0b0b]">
                <FiHeart size={24} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl tracking-wide text-[#f5f1e8]">
                YOUR STYLE, OUR EXPERTISE
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#777777]">
                Whether you know exactly what you want or need some direction,
                we work with you to achieve the right look.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#2a2a2a] pt-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <FiCheck className="text-[#b89b5e]" size={20} />

              <span className="text-sm text-[#f5f1e8]">
                Professional grooming. Personal attention. Every visit.
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#777777]">
              <FiClock className="text-[#b89b5e]" size={18} />
              <span>Appointments available throughout the week</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MEET THE TEAM ==================== */}
      <section className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Meet The Team
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-4xl uppercase leading-tight tracking-wide text-[#0b0b0b] sm:text-5xl md:text-6xl">
                THE PEOPLE BEHIND
                <span className="block text-[#b89b5e]">THE BLADE.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#777777] md:text-lg">
                Skilled hands. Sharp eyes. A passion for the craft. Meet the
                barbers who bring the Black & Blade experience to life.
              </p>
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#0b0b0b] pb-2 text-sm font-semibold uppercase tracking-wider text-[#0b0b0b] transition-colors duration-300 hover:border-[#b89b5e] hover:text-[#b89b5e]"
            >
              Meet The Full Team
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Barber Cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {barbers.map((barber) => (
              <div key={barber.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
                  <img
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/90 via-transparent to-transparent opacity-80" />

                  {/* Experience Badge */}
                  <div className="absolute left-5 top-5 bg-[#b89b5e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b0b0b]">
                    {barber.experience}
                  </div>

                  {/* Specialty */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4bc86]">
                      {barber.specialty}
                    </span>
                  </div>
                </div>

                {/* Barber Information */}
                <div className="border-b border-[#d6d0c3] pb-6 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#0b0b0b]">
                        {barber.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#b89b5e]">
                        {barber.role}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d6d0c3] text-[#0b0b0b] transition-all duration-300 group-hover:border-[#b89b5e] group-hover:bg-[#b89b5e]">
                      <FiScissors size={17} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#d6d0c3] pt-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-['Bebas_Neue'] text-2xl tracking-wide text-[#0b0b0b]">
                READY FOR YOUR NEXT CUT?
              </p>

              <p className="mt-1 text-sm text-[#777777]">
                Choose your barber and book your appointment.
              </p>
            </div>

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-[#0b0b0b] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:bg-[#b89b5e] hover:text-[#0b0b0b]"
            >
              <FiCalendar size={18} />
              Book An Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
