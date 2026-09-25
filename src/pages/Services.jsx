import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiScissors,
} from "react-icons/fi";

import services from "../data/services.json";

const Services = () => {
  const categories = ["Hair", "Beard", "Package", "Kids"];

  const categoryDescriptions = {
    Hair: {
      number: "01",
      title: "Haircuts & Fades",
      description:
        "Precision cuts built around your hair, style and lifestyle. From timeless cuts to sharp modern fades.",
    },

    Beard: {
      number: "02",
      title: "Beard Grooming",
      description:
        "Clean lines, balanced shaping and detailed grooming designed to keep your beard looking intentional.",
    },

    Package: {
      number: "03",
      title: "Grooming Packages",
      description:
        "Complete grooming experiences combining our most popular services into one appointment.",
    },

    Kids: {
      number: "04",
      title: "Kids Cuts",
      description:
        "Patient, professional grooming for younger gentlemen in a comfortable barbershop environment.",
    },
  };

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0b0b0b]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/barber-hero.jpg"
            alt="Professional barber providing a haircut"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0b0b0b]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/85 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b89b5e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4bc86]">
                Our Services
              </span>
            </div>

            <h1 className="font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl lg:text-9xl">
              YOUR STYLE.
              <span className="block text-[#b89b5e]">OUR CRAFT.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#b8b8b8] md:text-lg md:leading-8">
              From precision cuts and clean fades to detailed beard grooming,
              every Black & Blade service is built around quality, detail and
              your individual style.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
              >
                <FiCalendar size={18} />
                Book Appointment
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 border border-[#f5f1e8]/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#d4bc86]"
              >
                Explore Services
                <FiArrowDown size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#f5f1e8]/10 bg-[#0b0b0b]/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#777777]">
              Precision Cuts · Professional Grooming
            </span>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#777777] sm:block">
              Bloemfontein · Free State
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES INTRO
      ====================================================== */}
      <section
        id="services"
        className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Heading */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Service Menu
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl md:text-7xl">
                GROOMING BUILT
                <span className="block text-[#b89b5e]">AROUND YOU.</span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:flex lg:items-end">
              <div>
                <p className="max-w-xl text-base leading-7 text-[#666666] md:text-lg md:leading-8">
                  Whether you're keeping your regular style sharp or looking for
                  something new, our barbers take the time to understand the
                  look you want before the first cut is made.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-[#b89b5e]" />
                    <span className="text-sm font-medium text-[#555555]">
                      Professional Barbers
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCheck className="text-[#b89b5e]" />
                    <span className="text-sm font-medium text-[#555555]">
                      Quality Grooming
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCheck className="text-[#b89b5e]" />
                    <span className="text-sm font-medium text-[#555555]">
                      Easy Booking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE CATEGORIES
      ====================================================== */}
      <section className="bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24">
            {categories.map((category) => {
              const categoryServices = services.filter(
                (service) => service.category === category,
              );

              const categoryInfo = categoryDescriptions[category];

              return (
                <div key={category}>
                  {/* Category Header */}
                  <div className="grid gap-8 border-b border-[#292929] pb-8 lg:grid-cols-12">
                    <div className="lg:col-span-2">
                      <span className="font-['Bebas_Neue'] text-5xl text-[#b89b5e]">
                        {categoryInfo.number}
                      </span>
                    </div>

                    <div className="lg:col-span-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#777777]">
                        {category}
                      </span>

                      <h2 className="mt-2 font-['Bebas_Neue'] text-4xl uppercase tracking-wide text-[#f5f1e8] sm:text-5xl">
                        {categoryInfo.title}
                      </h2>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="max-w-xl text-sm leading-7 text-[#777777] md:text-base">
                        {categoryInfo.description}
                      </p>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    {categoryServices.map((service) => (
                      <article
                        key={service.id}
                        className="group grid gap-7 border-b border-[#292929] py-9 transition-colors duration-300 hover:bg-[#141414] md:grid-cols-12 md:items-center md:px-6"
                      >
                        {/* Icon */}
                        <div className="md:col-span-1">
                          <div className="flex h-12 w-12 items-center justify-center border border-[#333333] text-[#b89b5e] transition-all duration-300 group-hover:border-[#b89b5e]">
                            <FiScissors size={20} />
                          </div>
                        </div>

                        {/* Service Info */}
                        <div className="md:col-span-5">
                          <h3 className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-[#f5f1e8]">
                            {service.name}
                          </h3>

                          <p className="mt-3 max-w-lg text-sm leading-6 text-[#777777]">
                            {service.description}
                          </p>
                        </div>

                        {/* Duration */}
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-2 text-[#777777]">
                            <FiClock size={17} />

                            <span className="text-sm">
                              {service.duration} min
                            </span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="md:col-span-2">
                          <span className="font-['Bebas_Neue'] text-3xl text-[#b89b5e]">
                            R{service.price}
                          </span>
                        </div>

                        {/* Book Button */}
                        <div className="md:col-span-2 md:text-right">
                          <Link
                            to={`/booking?service=${service.id}`}
                            className="group/button inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8] transition-colors duration-300 hover:text-[#b89b5e]"
                          >
                            Book This Service
                            <FiArrowRight
                              size={16}
                              className="transition-transform duration-300 group-hover/button:translate-x-1"
                            />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SIGNATURE EXPERIENCE
      ====================================================== */}
      <section className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden bg-[#141414] lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 sm:p-10 lg:p-14">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Signature Experience
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-6xl">
                THE
                <span className="block text-[#b89b5e]">BLACK & BLADE.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#888888]">
                The complete Black & Blade grooming experience. Designed for the
                client who wants the full treatment in one appointment.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <FiCheck className="text-[#b89b5e]" />
                  <span className="text-sm text-[#d0d0d0]">
                    Precision Haircut
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheck className="text-[#b89b5e]" />
                  <span className="text-sm text-[#d0d0d0]">
                    Professional Beard Trim
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheck className="text-[#b89b5e]" />
                  <span className="text-sm text-[#d0d0d0]">
                    Styling & Premium Finish
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheck className="text-[#b89b5e]" />
                  <span className="text-sm text-[#d0d0d0]">
                    Personal Style Consultation
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center border-t border-[#292929] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#777777]">
                Complete Grooming Package
              </span>

              <div className="mt-4 flex items-end gap-3">
                <span className="font-['Bebas_Neue'] text-7xl leading-none text-[#b89b5e]">
                  R350
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[#777777]">
                <FiClock size={18} />

                <span className="text-sm">Approximately 90 minutes</span>
              </div>

              <div className="my-8 h-px bg-[#292929]" />

              <Link
                to="/booking?service=6"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#b89b5e] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
              >
                <FiCalendar size={18} />
                Book The Black & Blade
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-[#141414] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
              Simple Booking
            </span>

            <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-6xl md:text-7xl">
              YOUR NEXT CUT
              <span className="block text-[#b89b5e]">IN FOUR STEPS.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#777777] md:text-lg">
              Booking your next Black & Blade appointment is quick and simple.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-14 grid border border-[#292929] sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="border-b border-[#292929] p-8 sm:border-r lg:border-b-0">
              <span className="font-['Bebas_Neue'] text-5xl text-[#b89b5e]">
                01
              </span>

              <h3 className="mt-8 font-['Bebas_Neue'] text-3xl uppercase text-[#f5f1e8]">
                Choose Service
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Select the haircut, beard service or grooming package that works
                for you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-b border-[#292929] p-8 lg:border-b-0 lg:border-r">
              <span className="font-['Bebas_Neue'] text-5xl text-[#b89b5e]">
                02
              </span>

              <h3 className="mt-8 font-['Bebas_Neue'] text-3xl uppercase text-[#f5f1e8]">
                Choose Barber
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Book with your preferred barber or choose the next available
                professional.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-b border-[#292929] p-8 sm:border-r sm:border-b-0">
              <span className="font-['Bebas_Neue'] text-5xl text-[#b89b5e]">
                03
              </span>

              <h3 className="mt-8 font-['Bebas_Neue'] text-3xl uppercase text-[#f5f1e8]">
                Pick Your Time
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Choose an available date and appointment time that fits your
                schedule.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8">
              <span className="font-['Bebas_Neue'] text-5xl text-[#b89b5e]">
                04
              </span>

              <h3 className="mt-8 font-['Bebas_Neue'] text-3xl uppercase text-[#f5f1e8]">
                Confirm
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Enter your details, confirm the appointment and you're ready for
                your next cut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        {/* Decoration */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b89b5e]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
            Reserve Your Chair
          </span>

          <h2 className="mt-5 font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl">
            LOOK SHARP.
            <span className="block text-[#b89b5e]">FEEL CONFIDENT.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#777777] md:text-lg md:leading-8">
            Choose your service, select your barber and reserve a time that
            works for you. Your next Black & Blade experience is only a few
            clicks away.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
            >
              <FiCalendar size={18} />
              Book Your Appointment
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.15em] text-[#777777]">
            <span>Bloemfontein</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#b89b5e] sm:block" />

            <span>Mon – Sat</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#b89b5e] sm:block" />

            <span>Appointments Available</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
