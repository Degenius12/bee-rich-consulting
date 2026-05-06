import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 lg:h-24">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/images/logo-mark.png"
            alt="Bee-Rich Consulting"
            width={1200}
            height={489}
            className="h-12 sm:h-14 lg:h-16 w-auto"
            priority
          />
          <span className="hidden sm:block text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-navy/70 leading-tight">
            Bee-Rich in Knowledge,
            <br />
            Health, Freedom &amp; Fortune
          </span>
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
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-gold/20 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-gold/30">
          <span className="text-gold-light text-base">&#9733;</span>
          <span className="text-white text-sm sm:text-base font-semibold tracking-wide">
            Bee-Rich in Knowledge, Health, Freedom &amp; Fortune
          </span>
          <span className="text-gold-light text-base">&#9733;</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Build the Early-Education Business
          <span className="text-gold-light"> You&apos;ve Always Wanted</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Specialized consulting for childcare founders and early-education
          entrepreneurs. Proven frameworks for licensing, enrollment, and
          sustainable growth — adaptable for other ambitious businesses too.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            See Packages &amp; Book
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
    text: "Stuck on childcare licensing, compliance, or DCF requirements with no clear path",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Struggling to keep enrollment full while running operations alone",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: "Sacrificing health and family time chasing the dream of ownership",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: "Ready to scale beyond one location, but unsure where to start",
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
      "We start with a focused strategy session to understand your goals, challenges, and what success looks like for you.",
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

const pricingTiers = [
  {
    name: "Business Strategy Session",
    price: "$385",
    cadence: "one-time",
    tagline:
      "Get unstuck on a specific decision — licensing, pricing, hiring, or a hard conversation.",
    bestFor: "Founders facing a single, defined decision",
    features: [
      "60-minute focused 1:1 call",
      "Pre-call questionnaire so we hit the ground running",
      "Written follow-up with concrete action items",
      "One follow-up Q&A email within 30 days",
    ],
    cta: "Book Strategy Session",
    href: "https://calendly.com/bee-richconsulting-info/tier-business-strategy-session",
    featured: false,
  },
  {
    name: "Launch Roadmap",
    price: "$1,740",
    cadence: "4-week engagement",
    tagline:
      "Custom plan to open or relaunch your early-education business — operations, finance, and licensing handled.",
    bestFor: "Pre-launch or relaunching founders",
    features: [
      "4 sessions over 4 weeks",
      "Custom operational and financial roadmap",
      "Early-education licensing & compliance checklist",
      "Email support throughout the engagement",
      "Recorded sessions for replay",
    ],
    cta: "Book Launch Roadmap",
    href: "https://calendly.com/bee-richconsulting-info/tier-launch-roadmap",
    featured: true,
  },
  {
    name: "Growth Partnership",
    price: "$4,997",
    cadence: "10-week engagement",
    tagline:
      "Strategic partner for scaling beyond one location — operations, hiring, finance, expansion.",
    bestFor: "Established owners ready to expand",
    features: [
      "8 sessions over 10 weeks",
      "Full strategic engagement: ops, hiring, finance, expansion",
      "Monthly review + plan adjustment",
      "Direct email access throughout the engagement",
      "Two quarterly check-ins after engagement ends",
    ],
    cta: "Book Growth Partnership",
    href: "https://calendly.com/bee-richconsulting-info/tier-growth-partnership",
    featured: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">
            Pick the Engagement That Fits Where You Are
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Every package is paid up front and includes a clear scope. Book the
            one that fits — no sales call required.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border transition-all flex flex-col ${
                tier.featured
                  ? "bg-navy border-gold shadow-2xl lg:scale-105"
                  : "bg-white border-surface hover:border-gold/30 shadow-sm hover:shadow-lg"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-xl font-bold ${
                  tier.featured ? "text-white" : "text-navy"
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-bold ${
                    tier.featured ? "text-gold-light" : "text-navy"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.featured ? "text-white/60" : "text-navy/50"
                  }`}
                >
                  {tier.cadence}
                </span>
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.featured ? "text-white/80" : "text-navy/70"
                }`}
              >
                {tier.tagline}
              </p>
              <p
                className={`mt-2 text-xs italic ${
                  tier.featured ? "text-gold-light" : "text-gold"
                }`}
              >
                Best for: {tier.bestFor}
              </p>
              <ul
                className={`mt-6 space-y-3 ${
                  tier.featured ? "text-white/80" : "text-navy/70"
                }`}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.featured ? "text-gold-light" : "text-gold"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto pt-8 inline-flex items-center justify-center w-full font-semibold transition-all ${
                  tier.featured
                    ? "text-white"
                    : "text-white"
                }`}
              >
                <span
                  className={`w-full px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all ${
                    tier.featured
                      ? "bg-gold hover:bg-gold-light"
                      : "bg-navy hover:bg-navy-light"
                  }`}
                >
                  {tier.cta}
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-navy/60 max-w-2xl mx-auto leading-relaxed">
          Business plans, SOPs, and handbooks are available as add-ons to any
          tier — ask about pricing on your booked call.
        </p>
      </div>
    </section>
  );
}

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
              At Bee-Rich Consulting, true richness goes beyond your bank
              account. Built on over two decades of hands-on experience opening
              and scaling early-education businesses — through licensing
              hurdles, enrollment battles, and multi-site expansion — we provide
              consulting grounded in real-world operational expertise, not
              theory.
            </p>
            <p className="mt-4 text-navy/70 leading-relaxed">
              We don&apos;t believe in one-size-fits-all solutions. Every client
              gets a customized roadmap drawn from real lessons learned in the
              trenches of childcare ownership and business growth.
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
      "We specialize in working with childcare owners and early-education founders — at any stage, from pre-licensing to multi-site expansion. We also work with entrepreneurs in adjacent industries who value operational and growth strategy grounded in real ownership experience.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Strategy sessions are paid engagements. Pricing depends on the scope of work \u2014 after you book, we\u2019ll align on goals and confirm investment before any deeper work begins.",
  },
  {
    question: "What makes Bee-Rich different from other consultants?",
    answer:
      "We\u2019ve actually done the work. Our consulting comes from running and scaling early-education businesses \u2014 not from generalist business-school frameworks. The four-pillar approach (Knowledge, Health, Freedom, Fortune) covers every dimension that matters for sustainable success.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Every journey is different, but most clients start seeing meaningful shifts within the first 30 days. Our structured process ensures you\u2019re making progress from day one.",
  },
  {
    question: "Do you work with businesses or individuals?",
    answer:
      "Both — but our deepest expertise is in early-education. Whether you\u2019re opening your first center, scaling beyond one location, or building a related business that values our holistic approach, we tailor the engagement to you.",
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
          and fortune. A focused strategy session will get you a clear next
          move.
        </p>

        <div className="mt-10">
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
              Schedule a Strategy Session
            </h3>
            <p className="mt-2 text-white/50 text-sm">
              Focused, paid, actionable — book a time that works for you
            </p>
            <a
              href="https://calendly.com/bee-richconsulting-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
            >
              Book Now
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
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/logo-mark.png"
              alt="Bee-Rich Consulting"
              width={1200}
              height={489}
              className="h-16 w-auto brightness-200"
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              Bee-Rich in Knowledge, Health, Freedom &amp; Fortune
            </span>
          </div>

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
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
