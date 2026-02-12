"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-deep-black text-warm-white font-serif selection:bg-bronze/30 selection:text-warm-white overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-40 md:pt-48 md:pb-64">

        {/* Header Element: Single Bronze Line */}
        <ScrollReveal priority delay={0.2} className="mb-12 md:mb-16">
          <div className="h-[1px] w-[60px] bg-bronze opacity-80" />
        </ScrollReveal>

        {/* Opening Statement */}
        <ScrollReveal
          priority
          delay={0.4}
          className="mb-32 md:mb-48 max-w-[800px]"
        >
          <h1 className="text-[28px] md:text-[32px] leading-[1.4] font-light tracking-[0.01em] text-warm-white">
            Most websites are built to be noticed. Very few are built to work.
          </h1>
        </ScrollReveal>

        {/* Section 01: Our Perspective */}
        <section className="mb-32 md:mb-40 relative grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">
          
          {/* Left Zone: Number & Label */}
          <div className="md:col-span-4 lg:col-span-3 relative">
            <ScrollReveal delay={0.1}>
              <div className="flex items-baseline md:block">
                {/* <span className="font-mono text-[64px] md:text-[72px] leading-none font-light text-ghost-black absolute -top-4 md:-top-6 -left-1 md:-left-2 select-none -z-10">
                  01
                </span> */}
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-gray relative z-10 pl-1 md:pl-0 pt-2 md:pt-0">
                  Our Perspective
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Zone: Content */}
          <div className="md:col-span-8 lg:col-span-7 md:col-start-5 lg:col-start-5 space-y-8 md:space-y-10">
            <ScrollReveal delay={0.2}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                The majority of digital investments at the highest level fail.
                Not from lack of talent or budget, but from a misunderstanding
                of what a website is. It is treated as a design project. It is
                not. A website is a strategic instrument. It carries the full
                weight of how an organization is understood. When it is built
                without that understanding, the result is expensive decoration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.32}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                We see this repeatedly. Companies with extraordinary products
                and clear market positions arrive at their digital presence and
                lose precision. The thinking that built the business does not
                make it to the screen.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 02: Our Work Ethic */}
        <section className="mb-32 md:mb-40 relative grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">
          
          {/* Left Zone: Number & Label */}
          <div className="md:col-span-4 lg:col-span-3 relative">
            <ScrollReveal delay={0.1}>
              <div className="flex items-baseline md:block">
                {/* <span className="font-mono text-[64px] md:text-[72px] leading-none font-light text-ghost-black absolute -top-4 md:-top-6 -left-1 md:-left-2 select-none -z-10">
                  02
                </span> */}
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-gray relative z-10 pl-1 md:pl-0 pt-2 md:pt-0">
                  Our Work Ethic
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Zone: Content */}
          <div className="md:col-span-8 lg:col-span-7 md:col-start-5 lg:col-start-5 space-y-8 md:space-y-10">
            <ScrollReveal delay={0.2}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                We do not follow processes. We follow problems. Each engagement
                begins with the same question: what does this organization need
                its digital presence to actually do? The answer is never "look
                modern" or "feel premium." Those are symptoms of not having an
                answer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.32}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                Our work is slow. Deliberately so. We make fewer decisions, but
                each one is load-bearing. We do not iterate toward clarity — we
                begin with it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 03: Who This Is For */}
        <section className="mb-40 md:mb-56 relative grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">
          
          {/* Left Zone: Number & Label */}
          <div className="md:col-span-4 lg:col-span-3 relative">
            <ScrollReveal delay={0.1}>
              <div className="flex items-baseline md:block">
                {/* <span className="font-mono text-[64px] md:text-[72px] leading-none font-light text-ghost-black absolute -top-4 md:-top-6 -left-1 md:-left-2 select-none -z-10">
                  03
                </span> */}
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-gray relative z-10 pl-1 md:pl-0 pt-2 md:pt-0">
                  Who This Is For
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Zone: Content */}
          <div className="md:col-span-8 lg:col-span-7 md:col-start-5 lg:col-start-5 space-y-8 md:space-y-10">
            <ScrollReveal delay={0.2}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                This work is for founders and leaders who have already built
                something that matters and recognize their digital presence does
                not yet reflect that fact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.32}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/90">
                It is not for organizations seeking a vendor. It is not for
                teams that measure progress in deliverables. We decline more
                engagements than we accept. This is not exclusivity for its own
                sake. It is a recognition that the work requires a specific kind
                of commitment from both sides.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Closing Paragraph - No Label, No Number */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">
          <div className="md:col-span-8 lg:col-span-7 md:col-start-5 lg:col-start-5">
            <ScrollReveal delay={0.2}>
              <p className="text-[19px] md:text-[20px] leading-[1.8] font-normal text-warm-white/70 italic">
                If this describes your situation, a conversation is the
                appropriate next step. If it does not, we are not the right
                firm.
              </p>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </main>
  );
}
