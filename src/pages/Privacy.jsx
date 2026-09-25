import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiFileText,
  FiLock,
  FiMail,
  FiShield,
} from "react-icons/fi";

const Privacy = () => {
  const sections = [
    {
      id: "information",
      number: "01",
      title: "Information We Collect",
    },
    {
      id: "use",
      number: "02",
      title: "How We Use Information",
    },
    {
      id: "booking",
      number: "03",
      title: "Booking Information",
    },
    {
      id: "contact-form",
      number: "04",
      title: "Contact Form Information",
    },
    {
      id: "sharing",
      number: "05",
      title: "Sharing Of Information",
    },
    {
      id: "security",
      number: "06",
      title: "Information Security",
    },
    {
      id: "retention",
      number: "07",
      title: "Information Retention",
    },
    {
      id: "rights",
      number: "08",
      title: "Your Information",
    },
    {
      id: "external",
      number: "09",
      title: "External Services",
    },
    {
      id: "updates",
      number: "10",
      title: "Policy Updates",
    },
    {
      id: "contact",
      number: "11",
      title: "Contact Us",
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
              Privacy
            </span>
          </div>

          <h1 className="mt-6 font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl lg:text-9xl">
            PRIVACY
            <span className="block text-[#b89b5e]">POLICY.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#888888] md:text-lg md:leading-8">
            This Privacy Policy explains the types of personal information Black
            & Blade may collect through our website, contact form and booking
            process, and how that information may be used.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.15em] text-[#777777]">
            <span>Black & Blade</span>
            <span>•</span>
            <span>Last Updated: September 2026</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVACY CONTENT
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

              {/* Privacy Card */}
              <div className="mt-5 bg-[#141414] p-6">
                <FiShield size={21} className="text-[#b89b5e]" />

                <h3 className="mt-4 font-['Bebas_Neue'] text-2xl uppercase text-[#f5f1e8]">
                  Your Privacy Matters
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  We aim to handle information provided through our website
                  responsibly and only for relevant business purposes.
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8">
            {/* Intro */}
            <div className="border-b border-[#d6d0c3] pb-10">
              <div className="flex h-12 w-12 items-center justify-center bg-[#0b0b0b] text-[#b89b5e]">
                <FiLock size={20} />
              </div>

              <h2 className="mt-6 font-['Bebas_Neue'] text-4xl uppercase text-[#0b0b0b] sm:text-5xl">
                HOW WE HANDLE YOUR INFORMATION.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#666666]">
                When you contact Black & Blade or use our booking functionality,
                you may provide personal information that is necessary for us to
                respond to your enquiry or manage an appointment.
              </p>

              <p className="mt-4 text-base leading-8 text-[#666666]">
                This policy explains what that information may include, why it
                is collected and how it should be handled.
              </p>
            </div>

            {/* 01 */}
            <PrivacySection
              id="information"
              number="01"
              title="Information We Collect"
            >
              <p>
                Depending on how you interact with the website, the information
                you provide may include:
              </p>

              <ul className="space-y-3">
                <ListItem>Full name</ListItem>
                <ListItem>Cellphone or WhatsApp number</ListItem>
                <ListItem>Email address</ListItem>
                <ListItem>Selected grooming service</ListItem>
                <ListItem>Selected barber</ListItem>
                <ListItem>Appointment date and time</ListItem>
                <ListItem>
                  Messages, appointment notes or enquiries you choose to provide
                </ListItem>
              </ul>
            </PrivacySection>

            {/* 02 */}
            <PrivacySection id="use" number="02" title="How We Use Information">
              <p>
                Personal information submitted through Black & Blade may be used
                to provide and manage requested services.
              </p>

              <p>Relevant purposes may include:</p>

              <ul className="space-y-3">
                <ListItem>
                  Processing and managing appointment requests
                </ListItem>

                <ListItem>
                  Communicating about appointments or enquiries
                </ListItem>

                <ListItem>
                  Responding to messages submitted through the contact form
                </ListItem>

                <ListItem>
                  Providing information relating to requested services
                </ListItem>

                <ListItem>
                  Supporting the operation and improvement of the website and
                  customer experience
                </ListItem>
              </ul>
            </PrivacySection>

            {/* 03 */}
            <PrivacySection
              id="booking"
              number="03"
              title="Booking Information"
            >
              <p>
                Our booking process asks clients to provide information required
                to create and identify an appointment, including contact
                information, the selected service, barber, date and time.
              </p>

              <p>
                Appointment information may also be included in a calendar event
                when a client chooses to add their appointment to a compatible
                calendar application.
              </p>
            </PrivacySection>

            {/* 04 */}
            <PrivacySection
              id="contact-form"
              number="04"
              title="Contact Form Information"
            >
              <p>
                When using our contact form, you may provide your name,
                cellphone or WhatsApp number, the service you are interested in
                and a written message.
              </p>

              <p>
                This information is intended to be used to understand and
                respond to the enquiry submitted by the user.
              </p>
            </PrivacySection>

            {/* 05 */}
            <PrivacySection
              id="sharing"
              number="05"
              title="Sharing Of Information"
            >
              <p>
                Personal information should not be sold or disclosed to
                unrelated third parties for their own marketing purposes.
              </p>

              <p>
                Information may need to be processed by service providers where
                necessary to operate website, communication, booking or calendar
                functionality. Such processing should be limited to what is
                reasonably necessary for the relevant service.
              </p>
            </PrivacySection>

            {/* 06 */}
            <PrivacySection
              id="security"
              number="06"
              title="Information Security"
            >
              <p>
                Reasonable technical and organisational measures should be used
                to protect personal information against unauthorised access,
                loss, misuse or disclosure.
              </p>

              <div className="mt-6 border-l-2 border-[#b89b5e] bg-white p-5">
                <p className="text-sm font-medium text-[#555555]">
                  No website or electronic transmission method can guarantee
                  absolute security, but appropriate care should be taken when
                  handling personal information.
                </p>
              </div>
            </PrivacySection>

            {/* 07 */}
            <PrivacySection
              id="retention"
              number="07"
              title="Information Retention"
            >
              <p>
                Personal information should only be retained for as long as
                reasonably necessary for the purpose for which it was collected,
                or where retention is otherwise required or permitted.
              </p>

              <p>
                Information that is no longer reasonably required should be
                securely deleted, destroyed or de-identified where appropriate.
              </p>
            </PrivacySection>

            {/* 08 */}
            <PrivacySection id="rights" number="08" title="Your Information">
              <p>
                Users may contact Black & Blade if they have questions about
                personal information they have provided through the website.
              </p>

              <p>
                Where applicable, a user may request access to or correction of
                personal information associated with them, subject to
                appropriate identity verification and applicable requirements.
              </p>
            </PrivacySection>

            {/* 09 */}
            <PrivacySection id="external" number="09" title="External Services">
              <p>
                The website may provide links or functionality involving
                external services, including calendar, social media or
                communication platforms.
              </p>

              <p>
                When a user chooses to interact with an external service, that
                provider may process information under its own privacy practices
                and terms.
              </p>
            </PrivacySection>

            {/* 10 */}
            <PrivacySection id="updates" number="10" title="Policy Updates">
              <p>
                This Privacy Policy may be updated when necessary to reflect
                changes to the website, booking functionality or
                information-handling practices.
              </p>

              <p>
                The latest version should be published on this page with the
                relevant "Last Updated" date.
              </p>
            </PrivacySection>

            {/* 11 */}
            <PrivacySection id="contact" number="11" title="Contact Us">
              <p>
                Questions about this Privacy Policy or information provided
                through the Black & Blade website can be directed to:
              </p>

              <div className="mt-6 border border-[#d6d0c3] bg-white p-6">
                <div className="flex items-center gap-3">
                  <FiMail className="text-[#b89b5e]" />

                  <p className="font-semibold text-[#0b0b0b]">Black & Blade</p>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#777777]">
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
            </PrivacySection>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
            Black & Blade
          </span>

          <h2 className="mt-5 font-['Bebas_Neue'] text-5xl uppercase leading-none text-[#f5f1e8] sm:text-6xl md:text-7xl">
            YOUR NEXT LOOK
            <span className="block text-[#b89b5e]">STARTS HERE.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777777] md:text-base">
            Explore our grooming services or reserve your chair online with one
            of the Black & Blade barbers.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-colors hover:bg-[#d4bc86]"
            >
              <FiCalendar />
              Book Appointment
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 border border-[#333333] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#f5f1e8] transition-colors hover:border-[#b89b5e] hover:text-[#b89b5e]"
            >
              Contact Us
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// =====================================================
// REUSABLE PRIVACY SECTION
// =====================================================

const PrivacySection = ({ id, number, title, children }) => {
  return (
    <section id={id} className="scroll-mt-28 border-b border-[#d6d0c3] py-10">
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

// =====================================================
// LIST ITEM
// =====================================================

const ListItem = ({ children }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#b89b5e]" />

      <span>{children}</span>
    </li>
  );
};

export default Privacy;
