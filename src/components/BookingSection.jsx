import Reveal from "@/components/Reveal";
import { Mail, Globe } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

// Direct contact only — no form. An organiser taps once and is speaking to
// the management team, which is the booking route agreed in the proposal.
const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Iya Jude Management, I would like to enquire about booking Iya Jude (Angela Osamor) for an upcoming event."
);

const ROUTES = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    blurb: "Opens a chat with your enquiry already written, so you only add the details.",
    actions: [
      {
        label: "Start a WhatsApp chat",
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
        external: true,
      },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    blurb: "Send your event details and the team will come back to you on availability.",
    actions: [
      { label: "angela.osamor@gmail.com", href: "mailto:angela.osamor@gmail.com" },
    ],
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    blurb: "Reach Iya Jude directly on Instagram — her most active platform with 62K+ followers.",
    actions: [
      { label: "@iya_jude on Instagram", href: "https://www.instagram.com/iya_jude/", external: true },
    ],
  },
];

// Lifted from the organiser guidance in the proposal: it gets the useful
// detail into the first message rather than the fifth.
const FIRST_MESSAGE = [
  "Organisation or event name",
  "Type of event",
  "Proposed date",
  "Location",
  "Expected audience size",
  "Type of engagement",
];

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-black py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink"
    >
      {/* Ambient gold lighting */}
      <div className="animate-breathe absolute top-1/4 -right-20 w-[520px] h-[520px] bg-[#F88E14]/[0.10] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,var(--color-zinc-900)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <div className="max-w-3xl space-y-5">
          <Reveal as="p" variant="right" className="text-[11px] uppercase tracking-[0.35em] text-gold font-bold">
            Get in touch
          </Reveal>

          <Reveal as="h2" variant="up" delay={120} className="font-fjalla text-4xl sm:text-6xl lg:text-7xl uppercase text-ink font-bold tracking-tight leading-[0.96]">
            Let&rsquo;s bring the Spirit
            <span className="block text-gold-gradient">to your gathering.</span>
          </Reveal>

          <Reveal as="p" variant="up" delay={220} className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Reach Iya Jude&rsquo;s management directly via WhatsApp, email or Instagram.
            No forms to fill in and nothing to wait on &mdash; you go straight to a person.
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* CONTACT ROUTES                                               */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ROUTES.map((route, idx) => {
            const Icon = route.icon;
            return (
              <Reveal key={route.title} variant="up" delay={idx * 130} className="h-full">
                <div className="group relative h-full flex flex-col gap-6 p-7 sm:p-8 border border-zinc-800/70 bg-zinc-950/60 hover:border-[#F88E14]/50 transition-colors duration-500 overflow-hidden">

                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#F88E14]/0 group-hover:bg-[#F88E14]/[0.09] blur-3xl transition-colors duration-700" />

                  <div className="relative space-y-4 flex-grow">
                    <span className="flex w-14 h-14 rounded-full border border-[#F88E14]/45 items-center justify-center text-gold group-hover:scale-110 group-hover:border-[#F88E14] transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </span>

                    <h3 className="font-fjalla text-2xl sm:text-3xl uppercase font-bold tracking-tight text-ink">
                      {route.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {route.blurb}
                    </p>
                  </div>

                  <div className="relative flex flex-col gap-3">
                    {route.actions.map((action) => (
                      <a
                        key={action.href}
                        href={action.href}
                        {...(action.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="gold-button shimmer-sweep relative block overflow-hidden text-center px-5 py-3.5 text-sm tracking-wide"
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>

                  {/* Gold underline sweep, matching the awards cards */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#F9650B] via-[#F88E14] to-[#FABA1E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* FIRST MESSAGE GUIDANCE + BASE                                */}
        {/* ============================================================ */}
        <Reveal variant="up" delay={120}>
          <div className="glass-panel-gold p-7 sm:p-8 space-y-6 transition-all duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="font-fjalla text-xl sm:text-2xl uppercase font-bold tracking-tight text-ink">
                  Helpful in your first message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Include these and the team can confirm availability straight away.
                </p>
              </div>

              <div className="flex items-center gap-5 text-xs text-zinc-400 flex-shrink-0">
                {/* <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Port Harcourt, Nigeria
                </span> */}
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold" />
                  Available worldwide
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {FIRST_MESSAGE.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm text-zinc-300 border border-zinc-800 bg-black/40 px-3.5 py-2 hover:border-[#F88E14]/40 hover:text-ink transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
