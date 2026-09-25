import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMail,
  FiScissors,
} from "react-icons/fi";

const Terms = () => {
  const sections = [
    {
      id: "appointments",
      number: "01",
      title: "Appointments & Bookings",
    },
    {
      id: "cancellations",
      number: "02",
      title: "Cancellations & Rescheduling",
    },
    {
      id: "late-arrivals",
      number: "03",
      title: "Late Arrivals",
    },
    {
      id: "services",
      number: "04",
      title: "Services & Pricing",
    },
    {
      id: "conduct",
      number: "05",
      title: "Client Conduct",
    },
    {
      id: "children",
      number: "06",
      title: "Children's Appointments",
    },
    {
      id: "personal-items",
      number: "07",
      title: "Personal Belongings",
    },
    {
      id: "website",
      number: "08",
      title: "Website & Booking System",
    },
    {
      id: "changes",
      number: "09",
      title: "Changes To These Terms",
    },
    {
      id: "contact",
      number: "10",
      title: "Contact",
    },
  ];

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#b89b5e]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#b89b5e]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
              Legal
            </span>
          </div>

          <h1 className="mt-6 font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl lg:text-9xl">
            TERMS &<span className="block text-[#b89b5e]">CONDITIONS.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#888888] md:text-lg md:leading-8">
            These terms explain the conditions that apply when using the Black &
            Blade website, booking an appointment, or receiving our grooming
            services.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.15em] text-[#777777]">
            <span>Black & Blade</span>
            <span>•</span>
            <span>Last Updated: September 2026</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
      ====================================================== */}
      <section className="bg-[#f5f1e8] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="top-28 lg:sticky">
              <div className="border border-[#d6d0c3] bg-white p-6">
                <div className="flex items-center gap-3">
                  <FiFileText className="text-[#b89b5e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b0b0b]">
                    On This Page
                  </span>
                </div>

                <nav className="mt-6 space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 border-b border-[#eee9df] py-3 text-sm text-[#777777] transition-colors hover:text-[#b89b5e]"
                    >
                      <span className="font-['Bebas_Neue'] text-lg text-[#b89b5e]">
                        {section.number}
                      </span>

                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-5 bg-[#141414] p-6">
                <FiMail size={20} className="text-[#b89b5e]" />

                <h3 className="mt-4 font-['Bebas_Neue'] text-2xl uppercase text-[#f5f1e8]">
                  Questions?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  Contact us if you have questions about these terms or your
                  appointment.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b89b5e]"
                >
                  Contact Us
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8">
            {/* Introduction */}
            <div className="border-b border-[#d6d0c3] pb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b89b5e]">
                Introduction
              </span>

              <h2 className="mt-3 font-['Bebas_Neue'] text-4xl uppercase text-[#0b0b0b] sm:text-5xl">
                PLEASE READ THESE TERMS CAREFULLY.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#666666]">
                By accessing the Black & Blade website, using our online booking
                system, or booking and receiving a service from us, you agree to
                these Terms & Conditions.
              </p>

              <p className="mt-4 text-base leading-8 text-[#666666]">
                These terms are intended to help ensure a clear, professional
                and respectful experience for both our clients and our barbers.
              </p>
            </div>

            {/* 01 */}
            <LegalSection
              id="appointments"
              number="01"
              title="Appointments & Bookings"
            >
              <p>
                Appointments may be booked through the Black & Blade online
                booking system or through other contact methods made available
                by the barbershop.
              </p>

              <p>
                When booking online, clients are responsible for providing
                accurate contact information and selecting the correct service,
                barber, date and time.
              </p>

              <p>
                Appointment availability is subject to barber availability and
                our normal operating hours.
              </p>
            </LegalSection>

            {/* 02 */}
            <LegalSection
              id="cancellations"
              number="02"
              title="Cancellations & Rescheduling"
            >
              <p>
                We understand that plans can change. Clients who are unable to
                attend an appointment should contact Black & Blade as early as
                reasonably possible.
              </p>

              <p>
                Where possible, we will assist with rescheduling the appointment
                to another available date or time.
              </p>

              <div className="mt-6 border-l-2 border-[#b89b5e] bg-white p-5">
                <p className="text-sm font-medium text-[#555555]">
                  Giving reasonable notice helps us make the appointment
                  available to another client and keeps our schedule running
                  efficiently.
                </p>
              </div>
            </LegalSection>

            {/* 03 */}
            <LegalSection id="late-arrivals" number="03" title="Late Arrivals">
              <p>
                Clients are encouraged to arrive on time for their scheduled
                appointment.
              </p>

              <p>
                Late arrival may reduce the time available for the booked
                service. If a client arrives significantly late, the appointment
                may need to be rescheduled if completing the service would
                interfere with another client's appointment.
              </p>
            </LegalSection>

            {/* 04 */}
            <LegalSection id="services" number="04" title="Services & Pricing">
              <p>
                Service descriptions, estimated durations and prices are
                displayed on our Services and Booking pages.
              </p>

              <p>
                Service duration is an estimate and may vary depending on the
                requested style, hair type, consultation and other reasonable
                service requirements.
              </p>

              <p>
                Black & Blade may update its services and pricing from time to
                time. The applicable price will be the price communicated for
                the service at the time of booking, subject to any agreed
                changes to the requested service.
              </p>
            </LegalSection>

            {/* 05 */}
            <LegalSection id="conduct" number="05" title="Client Conduct">
              <p>
                Black & Blade is committed to providing a welcoming and
                respectful environment for clients, barbers and visitors.
              </p>

              <p>
                Abusive, threatening, discriminatory or seriously disruptive
                behaviour may result in a service being refused or an
                appointment being ended.
              </p>
            </LegalSection>

            {/* 06 */}
            <LegalSection
              id="children"
              number="06"
              title="Children's Appointments"
            >
              <p>
                Black & Blade offers Kids Cuts for children under 12. A parent,
                guardian or responsible adult should remain available where
                appropriate during a child's appointment.
              </p>

              <p>
                If a child becomes uncomfortable or it is not reasonably
                possible to perform the service safely, the barber may pause or
                discontinue the service.
              </p>
            </LegalSection>

            {/* 07 */}
            <LegalSection
              id="personal-items"
              number="07"
              title="Personal Belongings"
            >
              <p>
                Clients are responsible for keeping their personal belongings
                secure while visiting Black & Blade.
              </p>

              <p>
                We encourage clients to check that they have collected their
                phones, wallets, keys and other belongings before leaving the
                premises.
              </p>
            </LegalSection>

            {/* 08 */}
            <LegalSection
              id="website"
              number="08"
              title="Website & Booking System"
            >
              <p>
                We aim to keep information on the Black & Blade website accurate
                and the booking experience available and functional.
              </p>

              <p>
                However, website access may occasionally be interrupted by
                maintenance, technical problems, connectivity issues or
                circumstances outside our reasonable control.
              </p>

              <p>
                Users must not attempt to misuse, interfere with, damage or gain
                unauthorised access to the website or its functionality.
              </p>
            </LegalSection>

            {/* 09 */}
            <LegalSection
              id="changes"
              number="09"
              title="Changes To These Terms"
            >
              <p>
                Black & Blade may update these Terms & Conditions when necessary
                to reflect changes to our services, booking processes or
                website.
              </p>

              <p>
                When changes are made, the updated version may be published on
                this page together with a revised "Last Updated" date.
              </p>
            </LegalSection>

            {/* 10 */}
            <LegalSection id="contact" number="10" title="Contact">
              <p>
                If you have questions regarding these Terms & Conditions,
                contact Black & Blade using the details below.
              </p>

              <div className="mt-6 border border-[#d6d0c3] bg-white p-6">
                <p className="font-semibold text-[#0b0b0b]">Black & Blade</p>

                <p className="mt-3 text-sm leading-7 text-[#777777]">
                  123 Nelson Mandela Drive
                  <br />
                  Bloemfontein, Free State
                  <br />
                  South Africa
                </p>

                <p className="mt-4 text-sm text-[#777777]">
                  Email: hello@blackandblade.co.za
                </p>

                <p className="mt-1 text-sm text-[#777777]">
                  Phone: 051 123 4567
                </p>
              </div>
            </LegalSection>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <FiScissors size={28} className="mx-auto text-[#b89b5e]" />

          <h2 className="mt-6 font-['Bebas_Neue'] text-5xl uppercase leading-none text-[#f5f1e8] sm:text-6xl md:text-7xl">
            READY FOR YOUR
            <span className="block text-[#b89b5e]">NEXT CUT?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777777] md:text-base">
            Choose your service, barber and preferred appointment time through
            our online booking system.
          </p>

          <Link
            to="/booking"
            className="group mt-8 inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-colors hover:bg-[#d4bc86]"
          >
            <FiCalendar />
            Book Appointment
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

// =====================================================
// REUSABLE LEGAL SECTION
// =====================================================

const LegalSection = ({ id, number, title, children }) => {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#d6d0c3] py-10 first:pt-0"
    >
      <div className="flex gap-5">
        <span className="shrink-0 font-['Bebas_Neue'] text-3xl text-[#b89b5e]">
          {number}
        </span>

        <div className="min-w-0">
          <h2 className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-[#0b0b0b] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-[#666666] sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
