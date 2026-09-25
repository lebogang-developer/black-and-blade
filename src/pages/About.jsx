import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiCalendar,
  FiScissors,
  FiUserCheck,
  FiHeart,
} from "react-icons/fi";
import barbers from "../data/barbers.json";

const About = () => {
  return (
    <main>
      {/* ==================== ABOUT HERO ==================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0b0b0b]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/barber-hero.jpg"
            alt="Black & Blade barber shop"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0b0b0b]/75" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b89b5e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4bc86]">
                About Black & Blade
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl lg:text-9xl">
              THE
              <span className="block text-[#b89b5e]">BLACK & BLADE</span>
              <span className="block">STORY.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#b8b8b8] md:text-lg md:leading-8">
              Black & Blade was built around a simple idea: exceptional grooming
              should combine precision, personal style and an experience worth
              remembering.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
              >
                <FiCalendar size={18} />
                Book An Appointment
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-3 border border-[#f5f1e8]/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#d4bc86]"
              >
                Discover Our Story
                <FiArrowDown size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Location */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#f5f1e8]/10 bg-[#0b0b0b]/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#777777]">
              Bloemfontein · Free State
            </span>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#777777] sm:block">
              Precision Cuts. Modern Style.
            </span>
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section
        id="our-story"
        className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#b89b5e]/40" />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
                <img
                  src="/images/about/barbershop.jpg"
                  alt="Black & Blade barber shop interior"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/40 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-3 flex h-28 w-28 flex-col items-center justify-center bg-[#b89b5e] text-center sm:-right-6">
                <span className="font-['Bebas_Neue'] text-4xl leading-none text-[#0b0b0b]">
                  01
                </span>

                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0b0b0b]/70">
                  Our Story
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-4">
              {/* Label */}
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Our Story
              </span>

              {/* Heading */}
              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl md:text-7xl">
                BUILT FOR THE
                <span className="block text-[#b89b5e]">MODERN MAN.</span>
              </h2>

              {/* Paragraphs */}
              <div className="mt-7 space-y-5 text-base leading-7 text-[#666666] md:text-lg md:leading-8">
                <p>
                  Black & Blade was created from a passion for barbering,
                  personal style and the belief that every client deserves more
                  than an ordinary haircut.
                </p>

                <p>
                  We combine traditional barbering techniques with modern styles
                  to create cuts that feel sharp, confident and individual.
                  Every appointment is an opportunity to understand your style
                  and deliver a finish you can be proud of.
                </p>

                <p>
                  From the first consultation to the final detail, our focus
                  remains the same: precision, quality and an experience that
                  keeps you coming back.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-[#d6d0c3]" />

              {/* Values */}
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <span className="font-['Bebas_Neue'] text-3xl text-[#0b0b0b]">
                    01
                  </span>

                  <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-[#0b0b0b]">
                    Precision
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    Details matter.
                  </p>
                </div>

                <div>
                  <span className="font-['Bebas_Neue'] text-3xl text-[#0b0b0b]">
                    02
                  </span>

                  <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-[#0b0b0b]">
                    Style
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    Your look, your way.
                  </p>
                </div>

                <div>
                  <span className="font-['Bebas_Neue'] text-3xl text-[#0b0b0b]">
                    03
                  </span>

                  <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-[#0b0b0b]">
                    Experience
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    More than a haircut.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  to="/booking"
                  className="group inline-flex items-center gap-3 bg-[#0b0b0b] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:bg-[#b89b5e] hover:text-[#0b0b0b]"
                >
                  <FiCalendar size={18} />
                  Book Your Experience
                  <FiArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR PHILOSOPHY ==================== */}
      <section className="bg-[#141414] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
              Our Philosophy
            </span>

            <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-6xl md:text-7xl">
              THE STANDARD IS
              <span className="block text-[#b89b5e]">ALWAYS HIGH.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#777777] md:text-lg md:leading-8">
              At Black & Blade, barbering is a craft. We focus on doing the
              fundamentals exceptionally well while creating an environment
              where every client feels confident in their own style.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="mt-14 grid border border-[#292929] md:grid-cols-3">
            {/* Craft */}
            <div className="group border-b border-[#292929] p-8 transition-colors duration-300 hover:bg-[#1a1a1a] md:border-b-0 md:border-r md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-['Bebas_Neue'] text-5xl leading-none text-[#b89b5e]">
                  01
                </span>

                <FiScissors
                  size={25}
                  className="text-[#777777] transition-colors duration-300 group-hover:text-[#b89b5e]"
                />
              </div>

              <h3 className="mt-12 font-['Bebas_Neue'] text-4xl tracking-wide text-[#f5f1e8]">
                CRAFT
              </h3>

              <div className="mt-4 h-px w-10 bg-[#b89b5e] transition-all duration-300 group-hover:w-20" />

              <p className="mt-6 text-sm leading-7 text-[#777777]">
                We respect the craft of barbering. From clean fades and classic
                cuts to precise beard work, every detail receives the attention
                it deserves.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Technique, consistency and continuous improvement are at the
                heart of everything we do.
              </p>
            </div>

            {/* Confidence */}
            <div className="group border-b border-[#292929] p-8 transition-colors duration-300 hover:bg-[#1a1a1a] md:border-b-0 md:border-r md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-['Bebas_Neue'] text-5xl leading-none text-[#b89b5e]">
                  02
                </span>

                <FiUserCheck
                  size={25}
                  className="text-[#777777] transition-colors duration-300 group-hover:text-[#b89b5e]"
                />
              </div>

              <h3 className="mt-12 font-['Bebas_Neue'] text-4xl tracking-wide text-[#f5f1e8]">
                CONFIDENCE
              </h3>

              <div className="mt-4 h-px w-10 bg-[#b89b5e] transition-all duration-300 group-hover:w-20" />

              <p className="mt-6 text-sm leading-7 text-[#777777]">
                The right cut can change how you carry yourself. We listen to
                what you want, offer professional guidance and create styles
                that make you feel confident.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                Our goal is simple: make sure you leave the chair feeling like
                the best version of yourself.
              </p>
            </div>

            {/* Community */}
            <div className="group p-8 transition-colors duration-300 hover:bg-[#1a1a1a] md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-['Bebas_Neue'] text-5xl leading-none text-[#b89b5e]">
                  03
                </span>

                <FiHeart
                  size={25}
                  className="text-[#777777] transition-colors duration-300 group-hover:text-[#b89b5e]"
                />
              </div>

              <h3 className="mt-12 font-['Bebas_Neue'] text-4xl tracking-wide text-[#f5f1e8]">
                COMMUNITY
              </h3>

              <div className="mt-4 h-px w-10 bg-[#b89b5e] transition-all duration-300 group-hover:w-20" />

              <p className="mt-6 text-sm leading-7 text-[#777777]">
                A barbershop should be more than four walls and a chair. It
                should be a place where people feel welcome, connected and
                comfortable being themselves.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                We are proud to be part of the Bloemfontein community and
                believe every client contributes to the culture of Black &
                Blade.
              </p>
            </div>
          </div>

          {/* Philosophy Statement */}
          <div className="mt-16 border-l-2 border-[#b89b5e] pl-6 md:pl-10">
            <p className="max-w-4xl font-['Bebas_Neue'] text-3xl uppercase leading-tight tracking-wide text-[#f5f1e8] sm:text-4xl md:text-5xl">
              "WE DON'T JUST CUT HAIR.
              <span className="text-[#b89b5e]">
                {" "}
                WE HELP DEFINE YOUR STYLE."
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MEET THE TEAM ==================== */}
      <section className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
              Meet The Team
            </span>

            <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl md:text-7xl">
              THE PEOPLE
              <span className="block text-[#b89b5e]">BEHIND THE BLADE.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#777777] md:text-lg md:leading-8">
              Our barbers bring different skills, styles and personalities to
              the chair, but share the same commitment to quality, precision and
              client experience.
            </p>
          </div>

          {/* Barber Profiles */}
          <div className="mt-16 space-y-16">
            {barbers.map((barber, index) => (
              <article
                key={barber.id}
                className="grid items-center gap-10 border-b border-[#d6d0c3] pb-16 last:border-b-0 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="group relative overflow-hidden">
                    <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#b89b5e]/40" />

                    <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
                      <img
                        src={barber.image}
                        alt={`${barber.name}, ${barber.role}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/50 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-[#b89b5e]">
                        <span className="font-['Bebas_Neue'] text-xl text-[#0b0b0b]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Role */}
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b89b5e]">
                    {barber.role}
                  </span>

                  {/* Name */}
                  <h3 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl">
                    {barber.name}
                  </h3>

                  {/* Specialty */}
                  <div className="mt-5 flex items-center gap-3">
                    <FiScissors size={18} className="text-[#b89b5e]" />

                    <span className="text-sm font-semibold uppercase tracking-wider text-[#555555]">
                      {barber.specialty}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px w-full bg-[#d6d0c3]" />

                  {/* Bio */}
                  <p className="max-w-2xl text-base leading-8 text-[#666666] md:text-lg">
                    {barber.bio}
                  </p>

                  {/* Experience */}
                  <div className="mt-8 flex flex-wrap gap-8">
                    <div>
                      <span className="block font-['Bebas_Neue'] text-3xl text-[#0b0b0b]">
                        {barber.experience.split(" ")[0]}
                      </span>

                      <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-[#777777]">
                        Experience
                      </span>
                    </div>

                    <div>
                      <span className="block font-['Bebas_Neue'] text-3xl text-[#0b0b0b]">
                        B&B
                      </span>

                      <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-[#777777]">
                        Black & Blade
                      </span>
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="mt-9">
                    <Link
                      to="/booking"
                      className="group inline-flex items-center gap-3 bg-[#0b0b0b] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:bg-[#b89b5e] hover:text-[#0b0b0b]"
                    >
                      <FiCalendar size={18} />
                      Book With {barber.name.split(" ")[0]}
                      <FiArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b89b5e]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#b89b5e]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b89b5e]" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                  Your Next Cut
                </span>
              </div>

              <h2 className="font-['Bebas_Neue'] text-5xl uppercase leading-[0.95] tracking-wide text-[#f5f1e8] sm:text-6xl md:text-7xl">
                READY TO FIND
                <span className="block text-[#b89b5e]">YOUR STYLE?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#777777] md:text-lg md:leading-8">
                Explore our range of professional grooming services or reserve
                your chair with one of the Black & Blade barbers. Your next look
                starts here.
              </p>

              {/* Buttons */}
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

                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 border border-[#f5f1e8]/25 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#d4bc86]"
                >
                  View Services
                  <FiArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full border border-[#292929] bg-[#141414] p-7 sm:p-9 lg:max-w-md">
                <span className="font-['Bebas_Neue'] text-6xl leading-none text-[#b89b5e]">
                  B&B
                </span>

                <h3 className="mt-5 font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-[#f5f1e8]">
                  Precision Cuts.
                  <span className="block text-[#b89b5e]">Modern Style.</span>
                </h3>

                <div className="my-6 h-px bg-[#292929]" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-sm text-[#777777]">Location</span>

                    <span className="text-right text-sm font-medium text-[#f5f1e8]">
                      Bloemfontein, Free State
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-5">
                    <span className="text-sm text-[#777777]">Mon – Fri</span>

                    <span className="text-sm font-medium text-[#f5f1e8]">
                      09:00 – 18:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-5">
                    <span className="text-sm text-[#777777]">Saturday</span>

                    <span className="text-sm font-medium text-[#f5f1e8]">
                      08:00 – 16:00
                    </span>
                  </div>
                </div>

                <div className="mt-7 border-l-2 border-[#b89b5e] pl-4">
                  <p className="text-sm leading-6 text-[#777777]">
                    Choose your service, select your barber and reserve a time
                    that works for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
