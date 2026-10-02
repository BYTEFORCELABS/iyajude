"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import AwardsStrip from "@/components/AwardsStrip";
import { Award } from "lucide-react";

const MINISTRY_PILLARS = [
  "Daily Prayer",
  "Devotionals",
  "Praise & Worship",
  "Word of God",
  "Intercession",
  "Gospel Ministry",
  "Spirit-Filled Living",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink">

      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,var(--color-zinc-900)_0%,var(--color-black)_60%)] pointer-events-none" />
      <div className="animate-breathe absolute -top-24 left-1/4 w-[460px] h-[460px] rounded-full bg-[#F88E14]/[0.07] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">

        {/* ============================================================ */}
        {/* HEADING                                                      */}
        {/* ============================================================ */}
        <div className="space-y-4 max-w-3xl">
          <Reveal as="h2" variant="wipe" className="font-fjalla text-5xl sm:text-7xl lg:text-8xl text-gold font-bold uppercase tracking-tight leading-[0.95]">
            I Am Iya Jude
          </Reveal>

          <Reveal as="p" variant="up" delay={140} className="text-zinc-400 text-base sm:text-lg font-medium">
            Gospel minister, prayer warrior and inspirational voice reaching over 62,000 souls.
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* ROW 1: PORTRAIT + BIOGRAPHY                                  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          {/* Portrait */}
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Offset gold frame */}
              <div className="absolute -inset-x-4 -inset-y-4 border border-[#F88E14]/30 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-700 ease-out pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950 shadow-2xl">
                <Image
                  src="/images/live_worship_portrait.jpg"
                  alt="Iya Jude (Angela Osamor) ministering"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-[52%_22%] group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-zinc-950 border border-[#F88E14]/40 px-5 py-4 shadow-2xl max-w-[230px] animate-float">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <p className="font-fjalla text-sm font-bold text-ink uppercase tracking-wide">
                      62K+ Followers
                    </p>
                    <p className="text-[11px] text-gold font-semibold uppercase tracking-wider">
                      Instagram &middot; @iya_jude
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Biography */}
          <div className="lg:col-span-7 space-y-8">

            <div className="space-y-5 text-zinc-300 text-[15px] sm:text-[17px] leading-[1.75] font-normal">
              <Reveal as="p" variant="up">
                <strong className="text-ink font-semibold">Angela Osamor</strong>, widely known
                and loved as <strong className="text-ink font-semibold">Iya Jude</strong>, is a
                Nigerian gospel minister, prayer warrior, and inspirational content creator whose
                Spirit-filled voice has touched over 62,000 souls on Instagram alone.
              </Reveal>

              <Reveal as="p" variant="up" delay={100}>
                Her ministry is built on the power of prayer, the Word of God, and unashamed
                praise. Through daily devotionals, monthly prayers, and live ministrations, she
                creates a space where believers come to encounter the presence of God and leave
                strengthened in faith.
              </Reveal>

              <Reveal as="p" variant="up" delay={200}>
                A passionate intercessor and Spirit-filled preacher, Iya Jude carries a burden
                for the body of Christ — consistently showing up to pray, encourage, and{""}{
                } minister life into every heart she reaches across Nigeria and beyond.
              </Reveal>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* KNOWN FOR: scrolling song marquee                            */}
        {/* ============================================================ */}
        <Reveal variant="up">
          <div className="marquee-host relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="marquee-track gap-5" style={{ "--marquee-duration": "34s" }}>
              {[...MINISTRY_PILLARS, ...MINISTRY_PILLARS].map((pillar, idx) => (
                <span
                  key={`${pillar}-${idx}`}
                  className="flex-shrink-0 flex items-center gap-4 font-fjalla text-2xl sm:text-4xl uppercase font-bold tracking-tight text-zinc-600 hover:text-gold transition-colors duration-300"
                >
                  {pillar}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F88E14]/50" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* ROW 2: QUEEN OF PRAISE                                       */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <Reveal as="h3" variant="wipe" className="font-fjalla text-4xl sm:text-6xl text-gold font-bold tracking-tight uppercase leading-[0.95]">
              Voice of Prayer
            </Reveal>

            <div className="space-y-5 text-zinc-300 text-[15px] sm:text-[17px] leading-[1.75]">
              <Reveal as="p" variant="up" delay={140}>
                From living rooms across Nigeria to screens around the world, Iya Jude has built
                her ministry on one foundation: fervent, consistent, faith-filled prayer. Her
                monthly prayer sessions, daily devotionals and live ministrations draw thousands
                who come hungry and leave full.
              </Reveal>

              <Reveal as="p" variant="up" delay={300}>
                With a warm, authoritative voice and a heart surrendered to God, she ministers
                to the broken, the hopeful, and the seeking — interceding for lives, families,
                and nations with boldness and love.
              </Reveal>
            </div>

            <Reveal variant="up" delay={400} className="flex flex-wrap gap-2.5 pt-2">
              {["Prayer Warrior", "Gospel Minister", "Intercessor", "Inspirational Voice"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 border border-[#F88E14]/25 text-[11px] uppercase tracking-wider font-semibold text-zinc-300 hover:border-[#F88E14] hover:text-gold hover:-translate-y-0.5 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal variant="right" className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group max-w-lg mx-auto lg:ml-auto">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-zinc-950 shadow-2xl">
                <Image
                  src="/images/reverb_ministering.jpg"
                  alt="Iya Jude ministering live at The Reverb"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-[58%_28%] group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-x-4 -inset-y-4 border border-[#F88E14]/25 -translate-x-3 translate-y-3 group-hover:-translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-700 ease-out pointer-events-none" />
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* AWARDS STRIP                                                 */}
        {/* ============================================================ */}
        <AwardsStrip />

      </div>
    </section>
  );
}
