/**
 * Merged Home Route — integrates both Codebase A "The Trail" experience and
 * Codebase B sections (Introduction, ExpertiseGrid, WorkHistory, GtmShowcase,
 * JourneySection, ProductShowcase, MuseumWall, TestimonialNudge) into one unified page.
 *
 * Architecture:
 *  - Codebase A provides: opening animation, navigation chrome, JourneyProvider, Sky
 *    background transitions, Passport/Stamps gamification, ChalkDoodles ambient layer,
 *    VoicePrompt, Gate / Village / NightCamp / Postcards / Hooman / BaseCampEnd stops.
 *  - Codebase B sections are inserted between the TrailTopBar and the A-specific stops
 *    so they share the same page scroll and receive the LanguageProvider context from
 *    __root.tsx.  The SiteNav from B is rendered INSTEAD of A's TopBar when the B-sections
 *    viewport is active, but both navbars co-exist in the DOM hierarchy.
 *
 * Navigation:
 *   A's TopBar handles: Home, Community, Resources, Products, Testimonials, CV, Menu.
 *   SiteNav (B) handles: Expertise, Work, GTM Map, Journey, About, Say Hello, Language.
 *   Combined, all 11 destinations + CV + contact are reachable.
 */

import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

// --- Codebase A: Trail infrastructure & sections ---
import { JourneyProvider } from "@/components/trail/journey";
import { MenuOverlay, OpeningBeat, Sky, TopBar } from "@/components/trail/chrome";
import { Gate } from "@/components/trail/stops-a";
import { Village } from "@/components/trail/stops-c";
import { NightCamp } from "@/components/trail/stops-d";
import { BaseCampEnd, Postcards } from "@/components/trail/stops-e";
import { ChalkDoodles } from "@/components/trail/ChalkDoodles";
import { HoomanSection } from "@/components/trail/HoomanSection";
import { HoomanBoard } from "@/components/trail/HoomanBoard";
import { VoicePrompt } from "@/components/trail/VoicePrompt";
import { stops } from "@/data/trail";

// --- Codebase B: Feature sections ---
import { Introduction } from "@/components/introduction";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { WorkHistory } from "@/components/work-history";
import { GtmShowcase } from "@/components/gtm-showcase";
import { JourneySection } from "@/components/journey-section";
import { ProductShowcase } from "@/components/product-showcase";
import { MuseumWall } from "@/components/museum-wall";
import { TestimonialNudge } from "@/components/testimonial-nudge";
import { SiteNav } from "@/components/site-nav";

const title = "Shivam Garg — Portfolio: Communities, Products & The Trail";
const description =
  "Walk the trail of Shivam Garg — community builder, DevRel, and ecosystem lead — through expertise, global GTM work, products, communities and a timeline of belief.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shivam Garg",
          jobTitle: "Community builder, DevRel and ecosystem lead",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
          sameAs: ["https://www.linkedin.com/in/meshivamgarg", "https://x.com/Shivams_twt"],
        }),
      },
    ],
  }),
  component: () => (
    <JourneyProvider>
      <MergedTrail />
    </JourneyProvider>
  ),
});

function MergedTrail() {
  const [menu, setMenu] = useState(false);
  const [opening, setOpening] = useState(true);
  const finishOpening = useCallback(() => setOpening(false), []);

  return (
    <>
      {/* Codebase A: physics-based opening animation (AvocadoLoader) */}
      <OpeningBeat onComplete={finishOpening} />

      <div inert={opening} aria-hidden={opening ? true : undefined}>
        {/* Skip navigation link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-16 focus:z-[100] focus:bg-paper focus:p-3"
        >
          Skip to content
        </a>

        {/* Codebase A: animated sky background colour transitions */}
        <Sky />

        {/* Codebase A: floating pill nav (Home, Community, Resources, Products, Testimonials, CV, Let's connect) */}
        <TopBar onMenu={() => setMenu(true)} />

        {/* Codebase A: full-screen mobile menu overlay */}
        <MenuOverlay open={menu} onClose={() => setMenu(false)} />

        {/* Screen-reader stop index */}
        <nav className="sr-only" aria-label="All stops">
          {stops.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.name}
            </a>
          ))}
        </nav>

        {/* ============================================================
            CODEBASE B — SECTIONS
            Rendered above the Trail stops so they appear first on the
            homepage. These sections have their own section IDs and CSS
            class selectors used by SiteNav B for active-state tracking.
            ============================================================ */}
        <section id="b-sections" aria-label="Portfolio sections">
          {/* Codebase B: SiteNav — Expertise, Work, GTM, Journey, About, Say Hello, Language */}
          <SiteNav page="home" />

          {/* Codebase B: animated hero with identity, metrics, and statistics strip */}
          <Introduction />

          {/* Codebase B: 2×2 interactive expertise grid (Community, Product, Engineering, GTM) */}
          <ExpertiseGrid />

          {/* Codebase B: career timeline with company galleries and metrics */}
          <WorkHistory />

          {/* Codebase B: D3-driven global GTM map with zoom, search, and regional cards */}
          <GtmShowcase />

          {/* Codebase B: community/ecosystem directory with category filters */}
          <JourneySection />

          {/* Codebase B: product case studies with interactive phone/browser simulators */}
          <ProductShowcase />

          {/* Codebase B: horizontal-scrolling museum wall (6 years, 12 portraits) */}
          <MuseumWall />

          {/* Codebase B: dwell-triggered floating testimonial nudge */}
          <TestimonialNudge />
        </section>

        {/* ============================================================
            CODEBASE A — TRAIL STOPS
            The Trail experience: Gate → Village → NightCamp → Postcards
            → Hooman → Board → BaseCamp.  Also includes ambient layers
            (ChalkDoodles, VoicePrompt, Passport/Stamps via chrome.tsx).
            ============================================================ */}
        <main id="main" className="trail-stage relative">
          {/* Codebase A: ambient hand-drawn SVG sketches along page margins */}
          <ChalkDoodles />

          {/* Stop 0: Hero / Departure Gate */}
          <Gate />

          {/* Stop 1: Community / Communities Shelf */}
          <Village />

          {/* Stop 2: Night Camp (Resource Library + Products Gallery) */}
          <NightCamp />

          {/* Stop 3: Postcards / Testimonials */}
          <Postcards />

          {/* Stop 4a: Hooman scroll collage */}
          <HoomanSection />

          {/* Stop 4b: Aspirations Board & Photo Collections */}
          <HoomanBoard />

          {/* Stop 5 / Base Camp: Reference Footer */}
          <BaseCampEnd />
        </main>

        {/* Codebase A: section-dwell VoicePrompt popup */}
        <VoicePrompt enabled={!opening && !menu} />
      </div>
    </>
  );
}
