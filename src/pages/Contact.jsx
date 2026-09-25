import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import services from "../data/services.json";

const Contact = () => {
  const initialFormData = {
    name: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the error as the user corrects the field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    // Name
    if (!trimmedName) {
      newErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 3) {
      newErrors.name = "Your name must contain at least 3 characters.";
    } else if (!/^[A-Za-zÀ-ÿ' -]+$/.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    }

    // Phone / WhatsApp
    const cleanedPhone = trimmedPhone.replace(/[\s()-]/g, "");

    const phoneRegex = /^(?:\+27|0)[6-8][0-9]{8}$/;

    if (!trimmedPhone) {
      newErrors.phone = "Please enter your cell or WhatsApp number.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Please enter a valid South African cell number.";
    }

    // Service
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    // Message
    if (!trimmedMessage) {
      newErrors.message = "Please tell us how we can help.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Your message must contain at least 10 characters.";
    } else if (trimmedMessage.length > 500) {
      newErrors.message = "Your message cannot be longer than 500 characters.";
    }

    return newErrors;
  };

  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    // Later we can send this data to an API,
    // EmailJS, Formspree or our own backend.
    console.log("Contact form submitted:", formData);

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0b0b0b]">
        <div className="absolute inset-0">
          <img
            src="/images/hero/barber-hero.jpg"
            alt="Black & Blade barbershop"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0b0b0b]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/85 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b89b5e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4bc86]">
                Contact Black & Blade
              </span>
            </div>

            <h1 className="font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl lg:text-9xl">
              LET'S TALK
              <span className="block text-[#b89b5e]">ABOUT YOUR STYLE.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#b8b8b8] md:text-lg md:leading-8">
              Have a question about our services, your next cut or an upcoming
              appointment? Get in touch with the Black & Blade team and we'll be
              happy to help.
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
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-[#f5f1e8]/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#d4bc86]"
              >
                Contact Us
                <FiArrowDown size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#f5f1e8]/10 bg-[#0b0b0b]/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#777777]">
              Bloemfontein · Free State
            </span>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#777777] sm:block">
              We're Here To Help
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section
        id="contact"
        className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Get In Touch
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl md:text-7xl">
                WE'RE EASY
                <span className="block text-[#b89b5e]">TO REACH.</span>
              </h2>
            </div>

            <div className="lg:flex lg:items-end">
              <p className="max-w-xl text-base leading-7 text-[#666666] md:text-lg md:leading-8">
                Whether you're planning your next appointment, need help
                choosing a service or simply have a question, reach out using
                any of the options below.
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="mt-14 grid gap-px overflow-hidden border border-[#d6d0c3] bg-[#d6d0c3] sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="group bg-[#f5f1e8] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-[#0b0b0b] text-[#b89b5e]">
                <FiMapPin size={21} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-[#0b0b0b]">
                Visit Us
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#777777]">
                123 Nelson Mandela Drive
                <br />
                Bloemfontein
                <br />
                Free State, South Africa
              </p>
            </div>

            {/* Phone */}
            <div className="group bg-[#f5f1e8] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-[#0b0b0b] text-[#b89b5e]">
                <FiPhone size={21} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-[#0b0b0b]">
                Call Us
              </h3>

              <a
                href="tel:+27511234567"
                className="mt-3 block text-sm text-[#777777] transition-colors hover:text-[#b89b5e]"
              >
                051 123 4567
              </a>

              <p className="mt-2 text-xs leading-5 text-[#999999]">
                Available during business hours.
              </p>
            </div>

            {/* Email */}
            <div className="group bg-[#f5f1e8] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-[#0b0b0b] text-[#b89b5e]">
                <FiMail size={21} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-[#0b0b0b]">
                Email Us
              </h3>

              <a
                href="mailto:hello@blackandblade.co.za"
                className="mt-3 block break-all text-sm text-[#777777] transition-colors hover:text-[#b89b5e]"
              >
                hello@blackandblade.co.za
              </a>

              <p className="mt-2 text-xs leading-5 text-[#999999]">
                Send us your questions anytime.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="group bg-[#f5f1e8] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-[#0b0b0b] text-[#b89b5e]">
                <FiMessageCircle size={21} />
              </div>

              <h3 className="mt-7 font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-[#0b0b0b]">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/27511234567"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm text-[#777777] transition-colors hover:text-[#b89b5e]"
              >
                051 123 4567
              </a>

              <p className="mt-2 text-xs leading-5 text-[#999999]">
                Quick questions and enquiries.
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-[#d6d0c3] pt-8 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#777777]">
                Follow Black & Blade
              </span>

              <p className="mt-2 text-sm text-[#777777]">
                Cuts, styles and the latest from the shop.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Black & Blade Instagram"
                className="flex h-11 w-11 items-center justify-center border border-[#c8c1b4] text-[#0b0b0b] transition-all duration-300 hover:border-[#b89b5e] hover:bg-[#b89b5e]"
              >
                <FiInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="Black & Blade Facebook"
                className="flex h-11 w-11 items-center justify-center border border-[#c8c1b4] text-[#0b0b0b] transition-all duration-300 hover:border-[#b89b5e] hover:bg-[#b89b5e]"
              >
                <FiFacebook size={19} />
              </a>

              <a
                href="https://wa.me/27511234567"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Black & Blade on WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-[#c8c1b4] text-[#0b0b0b] transition-all duration-300 hover:border-[#b89b5e] hover:bg-[#b89b5e]"
              >
                <FiMessageCircle size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section className="bg-[#141414] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Send A Message
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-6xl md:text-7xl">
                HAVE A<span className="block text-[#b89b5e]">QUESTION?</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#777777] md:text-lg md:leading-8">
                Complete the form and let us know what you need. We'll get back
                to you as soon as possible during business hours.
              </p>

              <div className="mt-10 border-l-2 border-[#b89b5e] pl-5">
                <p className="text-sm leading-7 text-[#888888]">
                  Looking to reserve a specific date and time? Use our booking
                  system instead for immediate appointment selection.
                </p>

                <Link
                  to="/booking"
                  className="group mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#b89b5e]"
                >
                  Book Appointment
                  <FiArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-[#292929] bg-[#0b0b0b] p-6 sm:p-8 lg:p-10"
              >
                {/* Success Message */}
                {isSubmitted && (
                  <div
                    role="status"
                    className="mb-8 flex items-start gap-4 border border-[#b89b5e]/40 bg-[#b89b5e]/10 p-5"
                  >
                    <FiCheckCircle
                      size={22}
                      className="mt-0.5 shrink-0 text-[#b89b5e]"
                    />

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#f5f1e8]">
                        Message Sent
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#999999]">
                        Thanks for contacting Black & Blade. We'll get back to
                        you as soon as possible.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
                    >
                      Full Name
                      <span className="ml-1 text-[#b89b5e]">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kabelo Mokoena"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full border bg-[#141414] px-4 py-4 text-sm text-[#f5f1e8] outline-none transition-colors placeholder:text-[#555555] ${
                        errors.name
                          ? "border-red-500"
                          : "border-[#333333] focus:border-[#b89b5e]"
                      }`}
                    />

                    {errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
                    >
                      Cell / WhatsApp
                      <span className="ml-1 text-[#b89b5e]">*</span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 082 123 4567"
                      autoComplete="tel"
                      inputMode="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      className={`w-full border bg-[#141414] px-4 py-4 text-sm text-[#f5f1e8] outline-none transition-colors placeholder:text-[#555555] ${
                        errors.phone
                          ? "border-red-500"
                          : "border-[#333333] focus:border-[#b89b5e]"
                      }`}
                    />

                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
                  >
                    Service Type
                    <span className="ml-1 text-[#b89b5e]">*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? "service-error" : undefined
                    }
                    className={`w-full border bg-[#141414] px-4 py-4 text-sm outline-none transition-colors ${
                      formData.service ? "text-[#f5f1e8]" : "text-[#777777]"
                    } ${
                      errors.service
                        ? "border-red-500"
                        : "border-[#333333] focus:border-[#b89b5e]"
                    }`}
                  >
                    <option value="">
                      Select the service you're interested in
                    </option>

                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} — R{service.price}
                      </option>
                    ))}

                    <option value="General Enquiry">General Enquiry</option>
                  </select>

                  {errors.service && (
                    <p id="service-error" className="mt-2 text-xs text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
                    >
                      Message
                      <span className="ml-1 text-[#b89b5e]">*</span>
                    </label>

                    <span
                      className={`text-xs ${
                        formData.message.length > 500
                          ? "text-red-400"
                          : "text-[#555555]"
                      }`}
                    >
                      {formData.message.length}/500
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    maxLength="501"
                    placeholder="Tell us how we can help. For example: I'd like to know more about your haircut and beard package..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full resize-none border bg-[#141414] px-4 py-4 text-sm leading-6 text-[#f5f1e8] outline-none transition-colors placeholder:text-[#555555] ${
                      errors.message
                        ? "border-red-500"
                        : "border-[#333333] focus:border-[#b89b5e]"
                    }`}
                  />

                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#b89b5e] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
                >
                  <FiSend size={18} />
                  Send Message
                  <FiArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#555555]">
                  By submitting this form, you agree that Black & Blade may
                  contact you regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT & OPENING HOURS
      ====================================================== */}
      <section className="bg-[#f5f1e8] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Visit */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Visit The Shop
              </span>

              <h2 className="mt-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide text-[#0b0b0b] sm:text-6xl">
                FIND
                <span className="block text-[#b89b5e]">BLACK & BLADE.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#666666]">
                Visit us in Bloemfontein for professional grooming, precision
                cuts and the complete Black & Blade experience.
              </p>

              <div className="mt-8 flex items-start gap-4 border-t border-[#d6d0c3] pt-7">
                <FiMapPin size={21} className="mt-1 shrink-0 text-[#b89b5e]" />

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b0b0b]">
                    Address
                  </span>

                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    123 Nelson Mandela Drive
                    <br />
                    Bloemfontein, Free State
                    <br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="border border-[#d6d0c3] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <FiClock size={20} className="text-[#b89b5e]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b0b0b]">
                  Opening Hours
                </span>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-5 border-b border-[#e4dfd5] py-4">
                  <span className="text-sm text-[#777777]">
                    Monday – Friday
                  </span>

                  <span className="text-sm font-semibold text-[#0b0b0b]">
                    09:00 – 18:00
                  </span>
                </div>

                <div className="flex items-center justify-between gap-5 border-b border-[#e4dfd5] py-4">
                  <span className="text-sm text-[#777777]">Saturday</span>

                  <span className="text-sm font-semibold text-[#0b0b0b]">
                    08:00 – 16:00
                  </span>
                </div>

                <div className="flex items-center justify-between gap-5 py-4">
                  <span className="text-sm text-[#777777]">Sunday</span>

                  <span className="text-sm font-semibold text-[#b89b5e]">
                    Closed
                  </span>
                </div>
              </div>

              <Link
                to="/booking"
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#0b0b0b] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:bg-[#b89b5e] hover:text-[#0b0b0b]"
              >
                <FiCalendar size={18} />
                View Available Times
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
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b89b5e]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
            Skip The Queue
          </span>

          <h2 className="mt-5 font-['Bebas_Neue'] text-6xl uppercase leading-[0.9] tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl">
            READY FOR YOUR
            <span className="block text-[#b89b5e]">NEXT CUT?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#777777] md:text-lg md:leading-8">
            Don't wait for a response to secure your chair. Choose your service,
            barber, date and time through our online booking system.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4bc86]"
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
              className="group inline-flex items-center justify-center gap-3 border border-[#f5f1e8]/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b5e] hover:text-[#b89b5e]"
            >
              View Services
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
