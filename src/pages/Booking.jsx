import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiMail,
  FiMapPin,
  FiScissors,
  FiUser,
} from "react-icons/fi";

import services from "../data/services.json";
import barbers from "../data/barbers.json";

const Booking = () => {
  const [searchParams] = useSearchParams();

  const serviceFromUrl = searchParams.get("service");

  const initialService = services.find(
    (service) => service.id === Number(serviceFromUrl),
  );

  const [currentStep, setCurrentStep] = useState(initialService ? 2 : 1);

  const [selectedService, setSelectedService] = useState(
    initialService || null,
  );

  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // =====================================================
  // BOOKING STEPS
  // =====================================================

  const steps = [
    {
      number: 1,
      label: "Service",
    },
    {
      number: 2,
      label: "Barber",
    },
    {
      number: 3,
      label: "Date & Time",
    },
    {
      number: 4,
      label: "Details",
    },
    {
      number: 5,
      label: "Review",
    },
  ];

  // =====================================================
  // AVAILABLE DATES
  // Generate the next 14 days and exclude Sundays
  // =====================================================

  const availableDates = useMemo(() => {
    const dates = [];

    const today = new Date();

    let daysToCheck = 0;

    while (dates.length < 14) {
      const date = new Date();

      date.setDate(today.getDate() + daysToCheck);

      // Sunday = 0
      if (date.getDay() !== 0) {
        dates.push(date);
      }

      daysToCheck++;
    }

    return dates;
  }, []);

  // =====================================================
  // AVAILABLE TIMES
  // Saturday has shorter hours
  // =====================================================

  const availableTimes = useMemo(() => {
    if (!selectedDate) {
      return [];
    }

    const date = new Date(`${selectedDate}T12:00:00`);

    const isSaturday = date.getDay() === 6;

    if (isSaturday) {
      return [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
      ];
    }

    return [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ];
  }, [selectedDate]);

  // =====================================================
  // RESET TIME IF DATE CHANGES
  // =====================================================

  useEffect(() => {
    setSelectedTime("");
  }, [selectedDate]);

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(`${dateString}T12:00:00`);

    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // =====================================================
  // CUSTOMER DETAILS
  // =====================================================

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // =====================================================
  // VALIDATE CUSTOMER DETAILS
  // =====================================================

  const validateDetails = () => {
    const newErrors = {};

    const name = customerDetails.name.trim();
    const phone = customerDetails.phone.trim();
    const email = customerDetails.email.trim();

    if (!name) {
      newErrors.name = "Please enter your full name.";
    } else if (name.length < 3) {
      newErrors.name = "Your name must contain at least 3 characters.";
    }

    const cleanedPhone = phone.replace(/[\s()-]/g, "");

    const phoneRegex = /^(?:\+27|0)[6-8][0-9]{8}$/;

    if (!phone) {
      newErrors.phone = "Please enter your cell or WhatsApp number.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Please enter a valid South African cell number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (customerDetails.notes.length > 300) {
      newErrors.notes = "Appointment notes cannot exceed 300 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================================
  // NAVIGATION
  // =====================================================

  const nextStep = () => {
    if (currentStep === 1 && !selectedService) return;

    if (currentStep === 2 && !selectedBarber) return;

    if (currentStep === 3 && (!selectedDate || !selectedTime)) {
      return;
    }

    if (currentStep === 4) {
      const valid = validateDetails();

      if (!valid) return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 5));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // CONFIRM BOOKING
  // =====================================================

  const confirmBooking = () => {
    if (!selectedService || !selectedBarber || !selectedDate || !selectedTime) {
      return;
    }

    const booking = {
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime,
      customer: customerDetails,
    };

    console.log("Booking confirmed:", booking);

    setBookingConfirmed(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // CALENDAR DATE HELPERS
  // =====================================================

  const getAppointmentDates = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      return null;
    }

    const [year, month, day] = selectedDate.split("-").map(Number);

    const [hours, minutes] = selectedTime.split(":").map(Number);

    const start = new Date(year, month - 1, day, hours, minutes);

    const end = new Date(
      start.getTime() + selectedService.duration * 60 * 1000,
    );

    return {
      start,
      end,
    };
  };

  const formatGoogleDate = (date) => {
    return date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  };

  // =====================================================
  // GOOGLE CALENDAR
  // =====================================================

  const getGoogleCalendarUrl = () => {
    const dates = getAppointmentDates();

    if (!dates) return "#";

    const title = encodeURIComponent(`${selectedService.name} - Black & Blade`);

    const details = encodeURIComponent(
      `Black & Blade appointment\n\nService: ${selectedService.name}\nBarber: ${selectedBarber.name}\nDuration: ${selectedService.duration} minutes\nPrice: R${selectedService.price}`,
    );

    const location = encodeURIComponent(
      "123 Nelson Mandela Drive, Bloemfontein, Free State, South Africa",
    );

    const start = formatGoogleDate(dates.start);
    const end = formatGoogleDate(dates.end);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  // =====================================================
  // APPLE / ICS CALENDAR
  // =====================================================

  const downloadCalendarFile = () => {
    const dates = getAppointmentDates();

    if (!dates) return;

    const start = formatGoogleDate(dates.start);
    const end = formatGoogleDate(dates.end);

    const calendarContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Black & Blade//Booking//EN",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${selectedService.name} - Black & Blade`,
      `DESCRIPTION:Service: ${selectedService.name}\\nBarber: ${selectedBarber.name}\\nPrice: R${selectedService.price}`,
      "LOCATION:123 Nelson Mandela Drive, Bloemfontein, Free State, South Africa",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([calendarContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "black-and-blade-appointment.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // =====================================================
  // CONFIRMATION SCREEN
  // =====================================================

  if (bookingConfirmed) {
    return (
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-4xl">
            {/* Confirmation Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center bg-[#b89b5e] text-[#0b0b0b]">
              <FiCheckCircle size={38} />
            </div>

            {/* Heading */}
            <div className="mt-8 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                Booking Confirmed
              </span>

              <h1 className="mt-4 font-['Bebas_Neue'] text-6xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-7xl">
                YOU'RE
                <span className="text-[#b89b5e]"> BOOKED.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#777777]">
                Your Black & Blade appointment has been confirmed. Save the
                details below and add the appointment to your calendar.
              </p>
            </div>

            {/* Appointment Card */}
            <div className="mt-12 border border-[#292929] bg-[#141414]">
              <div className="border-b border-[#292929] p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#777777]">
                  Appointment Summary
                </span>
              </div>

              <div className="grid gap-px bg-[#292929] sm:grid-cols-2">
                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Service
                  </span>

                  <p className="mt-2 font-['Bebas_Neue'] text-2xl text-[#f5f1e8]">
                    {selectedService.name}
                  </p>
                </div>

                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Barber
                  </span>

                  <p className="mt-2 font-['Bebas_Neue'] text-2xl text-[#f5f1e8]">
                    {selectedBarber.name}
                  </p>
                </div>

                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Date
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#f5f1e8]">
                    {formatDate(selectedDate)}
                  </p>
                </div>

                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Time
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#f5f1e8]">
                    {selectedTime}
                  </p>
                </div>

                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Duration
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#f5f1e8]">
                    {selectedService.duration} minutes
                  </p>
                </div>

                <div className="bg-[#141414] p-6">
                  <span className="text-xs uppercase tracking-wider text-[#777777]">
                    Price
                  </span>

                  <p className="mt-2 font-['Bebas_Neue'] text-2xl text-[#b89b5e]">
                    R{selectedService.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="mt-8">
              <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#777777]">
                Add To Your Calendar
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-[#b89b5e] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-colors hover:bg-[#d4bc86]"
                >
                  <FiCalendar size={18} />
                  Google Calendar
                  <FiArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <button
                  type="button"
                  onClick={downloadCalendarFile}
                  className="inline-flex items-center justify-center gap-3 border border-[#444444] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#f5f1e8] transition-colors hover:border-[#b89b5e] hover:text-[#b89b5e]"
                >
                  <FiDownload size={18} />
                  Apple Calendar
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="mt-10 flex items-start gap-4 border-t border-[#292929] pt-8">
              <FiMapPin size={20} className="mt-1 shrink-0 text-[#b89b5e]" />

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5f1e8]">
                  Black & Blade
                </span>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  123 Nelson Mandela Drive
                  <br />
                  Bloemfontein, Free State
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b89b5e]"
              >
                <FiArrowLeft />
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#f5f1e8]">
      {/* =====================================================
          BOOKING HEADER
      ====================================================== */}
      <section className="bg-[#0b0b0b] px-6 pb-12 pt-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#b89b5e]" />

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b89b5e]">
                  Online Booking
                </span>
              </div>

              <h1 className="mt-5 font-['Bebas_Neue'] text-6xl uppercase leading-none tracking-wide text-[#f5f1e8] sm:text-7xl md:text-8xl">
                RESERVE
                <span className="text-[#b89b5e]"> YOUR CHAIR.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#777777] md:text-base">
                Choose your service, barber and preferred appointment time.
                We'll take care of the rest.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#777777] transition-colors hover:text-[#b89b5e]"
            >
              <FiArrowLeft />
              Back To Services
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRESS
      ====================================================== */}
      <section className="border-b border-[#d6d0c3] bg-white px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-x-auto">
            <div className="flex min-w-[650px]">
              {steps.map((step) => {
                const completed = currentStep > step.number;

                const active = currentStep === step.number;

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-1 items-center gap-3 py-6"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center text-sm font-bold transition-colors ${
                        completed
                          ? "bg-[#b89b5e] text-[#0b0b0b]"
                          : active
                            ? "bg-[#0b0b0b] text-[#f5f1e8]"
                            : "bg-[#e4dfd5] text-[#999999]"
                      }`}
                    >
                      {completed ? <FiCheck /> : step.number}
                    </div>

                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        active || completed
                          ? "text-[#0b0b0b]"
                          : "text-[#999999]"
                      }`}
                    >
                      {step.label}
                    </span>

                    {step.number !== 5 && (
                      <div className="mx-5 h-px flex-1 bg-[#d6d0c3]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING BODY
      ====================================================== */}
      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8">
            {/* =================================================
                STEP 1 — SERVICE
            ================================================== */}

            {currentStep === 1 && (
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b89b5e]">
                  Step 01
                </span>

                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase text-[#0b0b0b] sm:text-6xl">
                  CHOOSE YOUR SERVICE.
                </h2>

                <p className="mt-4 text-base text-[#777777]">
                  Select the grooming service you'd like to book.
                </p>

                <div className="mt-10 space-y-4">
                  {services.map((service) => {
                    const active = selectedService?.id === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`group w-full border p-6 text-left transition-all sm:p-7 ${
                          active
                            ? "border-[#b89b5e] bg-white"
                            : "border-[#d6d0c3] bg-[#f5f1e8] hover:border-[#b89b5e]"
                        }`}
                      >
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                          <div className="flex gap-4">
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center ${
                                active
                                  ? "bg-[#b89b5e] text-[#0b0b0b]"
                                  : "bg-[#0b0b0b] text-[#b89b5e]"
                              }`}
                            >
                              {active ? (
                                <FiCheck size={18} />
                              ) : (
                                <FiScissors size={18} />
                              )}
                            </div>

                            <div>
                              <h3 className="font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-[#0b0b0b]">
                                {service.name}
                              </h3>

                              <p className="mt-2 max-w-lg text-sm leading-6 text-[#777777]">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-6 sm:text-right">
                            <div>
                              <div className="flex items-center gap-1 text-xs text-[#777777]">
                                <FiClock />
                                {service.duration} min
                              </div>

                              <span className="mt-1 block font-['Bebas_Neue'] text-3xl text-[#b89b5e]">
                                R{service.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* =================================================
                STEP 2 — BARBER
            ================================================== */}

            {currentStep === 2 && (
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b89b5e]">
                  Step 02
                </span>

                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase text-[#0b0b0b] sm:text-6xl">
                  CHOOSE YOUR BARBER.
                </h2>

                <p className="mt-4 text-base text-[#777777]">
                  Select the barber you'd like for your appointment.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {barbers.map((barber) => {
                    const active = selectedBarber?.id === barber.id;

                    return (
                      <button
                        key={barber.id}
                        type="button"
                        onClick={() => setSelectedBarber(barber)}
                        className={`group overflow-hidden border text-left transition-all ${
                          active
                            ? "border-[#b89b5e] bg-white"
                            : "border-[#d6d0c3] hover:border-[#b89b5e]"
                        }`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                          <img
                            src={barber.image}
                            alt={barber.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {active && (
                            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-[#b89b5e] text-[#0b0b0b]">
                              <FiCheck />
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b89b5e]">
                            {barber.role}
                          </span>

                          <h3 className="mt-2 font-['Bebas_Neue'] text-2xl uppercase text-[#0b0b0b]">
                            {barber.name}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-[#777777]">
                            {barber.specialty}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* =================================================
                STEP 3 — DATE & TIME
            ================================================== */}

            {currentStep === 3 && (
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b89b5e]">
                  Step 03
                </span>

                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase text-[#0b0b0b] sm:text-6xl">
                  PICK A DATE & TIME.
                </h2>

                <p className="mt-4 text-base text-[#777777]">
                  Choose one of the available appointment dates and times below.
                </p>

                {/* Dates */}
                <div className="mt-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b0b0b]">
                    Select Date
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {availableDates.map((date) => {
                      const value =
                        `${date.getFullYear()}-` +
                        `${String(date.getMonth() + 1).padStart(2, "0")}-` +
                        `${String(date.getDate()).padStart(2, "0")}`;

                      const active = selectedDate === value;

                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setSelectedDate(value)}
                          className={`border px-4 py-5 text-center transition-colors ${
                            active
                              ? "border-[#b89b5e] bg-[#0b0b0b] text-[#f5f1e8]"
                              : "border-[#d6d0c3] bg-white text-[#0b0b0b] hover:border-[#b89b5e]"
                          }`}
                        >
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#b89b5e]">
                            {date.toLocaleDateString("en-ZA", {
                              weekday: "short",
                            })}
                          </span>

                          <span className="mt-2 block font-['Bebas_Neue'] text-3xl">
                            {date.getDate()}
                          </span>

                          <span className="block text-xs">
                            {date.toLocaleDateString("en-ZA", {
                              month: "short",
                            })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Times */}
                {selectedDate && (
                  <div className="mt-12">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b0b0b]">
                      Available Times
                    </h3>

                    <p className="mt-2 text-sm text-[#777777]">
                      {formatDate(selectedDate)}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {availableTimes.map((time) => {
                        const active = selectedTime === time;

                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`flex items-center justify-center gap-2 border px-4 py-4 text-sm font-semibold transition-colors ${
                              active
                                ? "border-[#b89b5e] bg-[#b89b5e] text-[#0b0b0b]"
                                : "border-[#d6d0c3] bg-white text-[#555555] hover:border-[#b89b5e]"
                            }`}
                          >
                            <FiClock />

                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* =================================================
                STEP 4 — CUSTOMER DETAILS
            ================================================== */}

            {currentStep === 4 && (
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b89b5e]">
                  Step 04
                </span>

                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase text-[#0b0b0b] sm:text-6xl">
                  YOUR DETAILS.
                </h2>

                <p className="mt-4 text-base text-[#777777]">
                  Tell us who we're expecting at the shop.
                </p>

                <div className="mt-10 border border-[#d6d0c3] bg-white p-6 sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b0b0b]"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={customerDetails.name}
                        onChange={handleDetailsChange}
                        placeholder="e.g. Kabelo Mokoena"
                        autoComplete="name"
                        className={`w-full border px-4 py-4 text-sm outline-none transition-colors ${
                          errors.name
                            ? "border-red-500"
                            : "border-[#d6d0c3] focus:border-[#b89b5e]"
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b0b0b]"
                      >
                        Cell / WhatsApp *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={customerDetails.phone}
                        onChange={handleDetailsChange}
                        placeholder="e.g. 082 123 4567"
                        autoComplete="tel"
                        className={`w-full border px-4 py-4 text-sm outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500"
                            : "border-[#d6d0c3] focus:border-[#b89b5e]"
                        }`}
                      />

                      {errors.phone && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b0b0b]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={handleDetailsChange}
                      placeholder="e.g. kabelo@example.com"
                      autoComplete="email"
                      className={`w-full border px-4 py-4 text-sm outline-none transition-colors ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#d6d0c3] focus:border-[#b89b5e]"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Notes */}
                  <div className="mt-6">
                    <div className="mb-2 flex justify-between">
                      <label
                        htmlFor="notes"
                        className="text-sm font-bold uppercase tracking-wider text-[#0b0b0b]"
                      >
                        Appointment Notes
                      </label>

                      <span className="text-xs text-[#999999]">
                        {customerDetails.notes.length}/300
                      </span>
                    </div>

                    <textarea
                      id="notes"
                      name="notes"
                      value={customerDetails.notes}
                      onChange={handleDetailsChange}
                      maxLength="301"
                      rows="5"
                      placeholder="Optional: Tell your barber about the style you're looking for, special requests or anything we should know."
                      className={`w-full resize-none border px-4 py-4 text-sm leading-6 outline-none transition-colors ${
                        errors.notes
                          ? "border-red-500"
                          : "border-[#d6d0c3] focus:border-[#b89b5e]"
                      }`}
                    />

                    {errors.notes && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.notes}
                      </p>
                    )}
                  </div>

                  <p className="mt-6 text-xs leading-5 text-[#777777]">
                    By continuing, you acknowledge our{" "}
                    <Link
                      to="/terms"
                      target="_blank"
                      className="font-semibold text-[#b89b5e] hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      target="_blank"
                      className="font-semibold text-[#b89b5e] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* =================================================
                STEP 5 — REVIEW
            ================================================== */}

            {currentStep === 5 && (
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b89b5e]">
                  Step 05
                </span>

                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl uppercase text-[#0b0b0b] sm:text-6xl">
                  REVIEW YOUR BOOKING.
                </h2>

                <p className="mt-4 text-base text-[#777777]">
                  Check your appointment details before confirming.
                </p>

                <div className="mt-10 border border-[#d6d0c3] bg-white">
                  {/* Service */}
                  <div className="flex items-start justify-between gap-6 border-b border-[#e4dfd5] p-6">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#999999]">
                        Service
                      </span>

                      <h3 className="mt-2 font-['Bebas_Neue'] text-2xl text-[#0b0b0b]">
                        {selectedService?.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#777777]">
                        {selectedService?.duration} minutes
                      </p>
                    </div>

                    <span className="font-['Bebas_Neue'] text-3xl text-[#b89b5e]">
                      R{selectedService?.price}
                    </span>
                  </div>

                  {/* Barber */}
                  <div className="flex items-center gap-4 border-b border-[#e4dfd5] p-6">
                    <img
                      src={selectedBarber?.image}
                      alt={selectedBarber?.name}
                      className="h-14 w-14 object-cover"
                    />

                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#999999]">
                        Barber
                      </span>

                      <p className="mt-1 font-semibold text-[#0b0b0b]">
                        {selectedBarber?.name}
                      </p>
                    </div>
                  </div>

                  {/* Date / Time */}
                  <div className="grid sm:grid-cols-2">
                    <div className="border-b border-[#e4dfd5] p-6 sm:border-b-0 sm:border-r">
                      <span className="text-xs uppercase tracking-wider text-[#999999]">
                        Date
                      </span>

                      <p className="mt-2 text-sm font-semibold text-[#0b0b0b]">
                        {formatDate(selectedDate)}
                      </p>
                    </div>

                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-[#999999]">
                        Time
                      </span>

                      <p className="mt-2 text-sm font-semibold text-[#0b0b0b]">
                        {selectedTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer */}
                <div className="mt-6 border border-[#d6d0c3] bg-white p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#999999]">
                    Customer
                  </span>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <FiUser className="mt-1 text-[#b89b5e]" />

                      <div>
                        <span className="block text-xs text-[#999999]">
                          Name
                        </span>

                        <span className="mt-1 block text-sm font-semibold text-[#0b0b0b]">
                          {customerDetails.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FiMail className="mt-1 text-[#b89b5e]" />

                      <div>
                        <span className="block text-xs text-[#999999]">
                          Email
                        </span>

                        <span className="mt-1 block break-all text-sm font-semibold text-[#0b0b0b]">
                          {customerDetails.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {customerDetails.notes && (
                    <div className="mt-6 border-t border-[#e4dfd5] pt-5">
                      <span className="text-xs text-[#999999]">
                        Appointment Notes
                      </span>

                      <p className="mt-2 text-sm leading-6 text-[#555555]">
                        {customerDetails.notes}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={confirmBooking}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#b89b5e] px-7 py-5 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-colors hover:bg-[#d4bc86]"
                >
                  <FiCheckCircle size={19} />
                  Confirm Appointment
                  <FiArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}

            {/* =================================================
                NAVIGATION BUTTONS
            ================================================== */}

            {currentStep < 5 && (
              <div className="mt-12 flex items-center justify-between border-t border-[#d6d0c3] pt-7">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#777777] transition-colors hover:text-[#0b0b0b]"
                  >
                    <FiArrowLeft />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !selectedService) ||
                    (currentStep === 2 && !selectedBarber) ||
                    (currentStep === 3 && (!selectedDate || !selectedTime))
                  }
                  className="group inline-flex items-center gap-3 bg-[#0b0b0b] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f1e8] transition-all hover:bg-[#b89b5e] hover:text-[#0b0b0b] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

            {currentStep === 5 && (
              <button
                type="button"
                onClick={previousStep}
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#777777] hover:text-[#0b0b0b]"
              >
                <FiArrowLeft />
                Edit Details
              </button>
            )}
          </div>

          {/* =====================================================
              BOOKING SUMMARY SIDEBAR
          ====================================================== */}

          <aside className="lg:col-span-4">
            <div className="top-28 border border-[#d6d0c3] bg-white lg:sticky">
              <div className="border-b border-[#e4dfd5] p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#999999]">
                  Your Appointment
                </span>

                <h3 className="mt-2 font-['Bebas_Neue'] text-3xl uppercase text-[#0b0b0b]">
                  Booking Summary
                </h3>
              </div>

              <div className="p-6">
                {/* Service */}
                <div className="border-b border-[#e4dfd5] pb-5">
                  <span className="text-xs text-[#999999]">Service</span>

                  {selectedService ? (
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-[#0b0b0b]">
                          {selectedService.name}
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-[#777777]">
                          <FiClock />
                          {selectedService.duration} min
                        </div>
                      </div>

                      <span className="font-['Bebas_Neue'] text-2xl text-[#b89b5e]">
                        R{selectedService.price}
                      </span>
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-[#999999]">Not selected</p>
                  )}
                </div>

                {/* Barber */}
                <div className="border-b border-[#e4dfd5] py-5">
                  <span className="text-xs text-[#999999]">Barber</span>

                  <p className="mt-2 text-sm font-semibold text-[#0b0b0b]">
                    {selectedBarber ? selectedBarber.name : "Not selected"}
                  </p>
                </div>

                {/* Date */}
                <div className="border-b border-[#e4dfd5] py-5">
                  <span className="text-xs text-[#999999]">Date</span>

                  <p className="mt-2 text-sm font-semibold text-[#0b0b0b]">
                    {selectedDate ? formatDate(selectedDate) : "Not selected"}
                  </p>
                </div>

                {/* Time */}
                <div className="py-5">
                  <span className="text-xs text-[#999999]">Time</span>

                  <p className="mt-2 text-sm font-semibold text-[#0b0b0b]">
                    {selectedTime || "Not selected"}
                  </p>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between border-t border-[#0b0b0b] pt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b0b0b]">
                    Total
                  </span>

                  <span className="font-['Bebas_Neue'] text-3xl text-[#b89b5e]">
                    R{selectedService?.price || 0}
                  </span>
                </div>
              </div>

              <div className="bg-[#141414] p-5">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-[#b89b5e]" />

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f5f1e8]">
                      Black & Blade
                    </span>

                    <p className="mt-1 text-xs leading-5 text-[#777777]">
                      123 Nelson Mandela Drive
                      <br />
                      Bloemfontein, Free State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Booking;
