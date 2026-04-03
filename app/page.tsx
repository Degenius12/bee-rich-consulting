import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-32 sm:h-52">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-optimized.png"
            alt="Bee-Rich Consulting"
            width={3000}
            height={2000}
            className="h-28 sm:h-44 w-auto"
            priority
          />
          <div className="hidden sm:block border-l-2 border-gold/30 pl-5">
            <p className="text-navy font-semibold text-base lg:text-lg tracking-wide leading-snug">
              Bee-Rich in Knowledge, Health,
              <br />
              Freedom &amp; Fortune
            </p>
          </div>
        </div>
        <a
          href="#book"
          className="bg-gold hover:bg-gold-light text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 sm:pt-60 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-gold/20 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/15">
          <span className="text-gold-light text-sm">&#9733;</span>
          <span className="text-white/80 text-sm tracking-wide">
            Bee-Rich in Knowledge, Health, Freedom &amp; Fortune
          </span>
          <span className="text-gold-light text-sm">&#9733;</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Transform Your Life Into One
          <span className="text-gold-light"> Worth Living</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          We partner with driven individuals and businesses to unlock their full
          potential — building strategies for lasting wealth, wellness, and
          freedom.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Free Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all"
          >
            Explore Our Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 text-white/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold-light">
              100+
            </div>
            <div className="text-xs sm:text-sm mt-1">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold-light">
              10+
            </div>
            <div className="text-xs sm:text-sm mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold-light">
              95%
            </div>
            <div className="text-xs sm:text-sm mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Feeling stuck in your career or business with no clear path forward",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Struggling to build real wealth and financial independence",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: "Sacrificing your health and relationships for work that doesn\u2019t fulfill you",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: "Wanting more freedom but unsure how to break free from the daily grind",
  },
];

function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Does This Sound Like You?
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            You know you&apos;re capable of more, but something is holding you
            back.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-surface hover:border-gold/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                {point.icon}
              </div>
              <p className="text-navy/80 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-medium text-navy">
          You don&apos;t have to figure it out alone.{" "}
          <span className="text-gold">We&apos;re here to help.</span>
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Knowledge",
    description:
      "Gain the insights, strategies, and expertise to make informed decisions that move the needle in your life and business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Health",
    description:
      "Build sustainable wellness practices that fuel your energy, focus, and long-term performance — because success means nothing without health.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Freedom",
    description:
      "Design a life on your terms — with the systems, boundaries, and strategies to own your time and choices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fortune",
    description:
      "Develop clear financial roadmaps, revenue strategies, and wealth-building habits that create lasting prosperity.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Pillars
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
            Four Pillars to a Richer Life
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            True richness isn&apos;t just financial. We help you build abundance
            across every dimension that matters.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-surface hover:border-gold/30 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold flex items-center justify-center group-hover:from-gold group-hover:to-gold-light group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-navy/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free, no-pressure conversation to understand your goals, challenges, and what success looks like for you.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "We craft a personalized roadmap tailored to your unique situation — with clear milestones and actionable steps.",
  },
  {
    number: "03",
    title: "Execute & Grow",
    description:
      "With ongoing guidance and accountability, we walk with you through every step of your transformation.",
  },
];

function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            The Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Getting started is simple. Three steps to a richer life.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
              )}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-navy to-navy-light text-gold-light text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-navy/60 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Working with Bee-Rich Consulting completely shifted my perspective on what\u2019s possible. I went from feeling overwhelmed to having a clear path forward.",
    name: "Sarah M.",
    role: "Small Business Owner",
  },
  {
    quote:
      "The team didn\u2019t just give me advice \u2014 they gave me a framework for thinking about my life and business in a whole new way. Best investment I\u2019ve made.",
    name: "James R.",
    role: "Entrepreneur",
  },
  {
    quote:
      "I finally feel like I\u2019m building something meaningful. The holistic approach to wealth, health, and freedom is what sets Bee-Rich apart.",
    name: "Monica L.",
    role: "Executive Coach",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-navy/60 italic">
            Real stories from people who chose to become Bee-Rich.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-surface relative"
            >
              <div className="absolute -top-4 left-8 text-5xl text-gold/20 font-serif leading-none">
                &ldquo;
              </div>
              <p className="text-navy/70 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-light flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-navy/50 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy/40">
          * Placeholder testimonials — replace with real client feedback
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface to-surface overflow-hidden flex items-center justify-center border-2 border-dashed border-navy/10">
              <div className="text-center text-navy/30 p-8">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm font-medium">
                  Professional Photo
                  <br />
                  Placeholder
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold/10 -z-10" />
          </div>

          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
              Meet Bee-Rich Consulting
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              At Bee-Rich Consulting, we believe that true richness goes beyond
              your bank account. Founded on the principle that everyone deserves
              a life filled with knowledge, health, freedom, and fortune, we
              provide holistic consulting that addresses every facet of your
              success.
            </p>
            <p className="mt-4 text-navy/70 leading-relaxed">
              Our team brings decades of combined experience in business
              strategy, personal development, wellness coaching, and financial
              planning. We don&apos;t believe in one-size-fits-all solutions —
              every client gets a customized path forward.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                "Certified Consultants",
                "Holistic Approach",
                "Proven Results",
                "Personalized Service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm text-navy/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Who is Bee-Rich Consulting for?",
    answer:
      "We work with individuals and businesses who want more from life — whether that\u2019s growing a business, improving their health, building wealth, or gaining more personal freedom. If you\u2019re ready for change, we\u2019re ready to help.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Your initial discovery call is completely free, with no obligation. We\u2019ll discuss your goals and determine if we\u2019re a good fit before any commitment.",
  },
  {
    question: "What makes Bee-Rich different from other consultants?",
    answer:
      "Our holistic four-pillar approach (Knowledge, Health, Freedom, Fortune) means we don\u2019t just focus on one area of your life. We help you build success across all dimensions, because they\u2019re all connected.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Every journey is different, but most clients start seeing meaningful shifts within the first 30 days. Our structured process ensures you\u2019re making progress from day one.",
  },
  {
    question: "Do you work with businesses or individuals?",
    answer:
      "Both! Whether you\u2019re an entrepreneur looking to scale, a professional seeking career growth, or someone wanting to redesign your lifestyle — we tailor our approach to you.",
  },
];

function FAQSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
            Common Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-surface overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-navy font-semibold hover:text-gold transition-colors list-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gold transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-navy/60 leading-relaxed -mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="book" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue/5 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Ready to Become{" "}
          <span className="text-gold-light">Bee-Rich</span>?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
          Take the first step toward a life rich in knowledge, health, freedom,
          and fortune. Your free consultation is just a click away.
        </p>

        <div className="mt-10">
          {/* Calendly embed placeholder — replace href and optionally use inline widget */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-12 max-w-lg mx-auto">
            <div className="text-white/50 mb-6">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">
              Schedule Your Free Call
            </h3>
            <p className="mt-2 text-white/50 text-sm">
              30-minute strategy session — no obligation
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
            >
              Book Now — It&apos;s Free
            </a>
          </div>
        </div>

        <p className="mt-8 text-white/40 text-sm">
          Or email us directly at{" "}
          <a
            href="mailto:info@bee-richconsulting.com"
            className="text-gold-light hover:text-gold underline"
          >
            info@bee-richconsulting.com
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo-optimized.png"
            alt="Bee-Rich Consulting"
            width={3000}
            height={2000}
            className="h-16 w-auto brightness-200"
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white/50 text-sm">
            <a
              href="mailto:info@bee-richconsulting.com"
              className="hover:text-gold-light transition-colors"
            >
              info@bee-richconsulting.com
            </a>
            <a href="#book" className="hover:text-gold-light transition-colors">
              Book a Call
            </a>
          </div>

          <div className="flex items-center gap-4">
            {["facebook", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center text-white/50 hover:text-gold-light transition-all"
                aria-label={social}
              >
                <span className="text-xs font-bold uppercase">
                  {social[0]}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Bee-Rich Consulting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
