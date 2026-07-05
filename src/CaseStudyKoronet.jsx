import { Link } from 'react-router-dom';
import imgGeminiAvatar from './assets/figma/gemini-avatar.png';
import imgEllipse33 from './assets/figma/ellipse-33.png';
import imgMockupUserResearch from './assets/figma/koronet-mockup-user-research.png';
import imgMockupArchitecture from './assets/figma/koronet-mockup-architecture.png';
import imgMockupProcess1 from './assets/figma/koronet-mockup-process-1.png';
import imgMockupProcess2 from './assets/figma/koronet-mockup-process-2.png';
import imgMockupProcess3 from './assets/figma/koronet-mockup-process-3.jpg';
import imgMockupProcess4 from './assets/figma/koronet-mockup-process-4.jpg';
import imgMockupResponsive from './assets/figma/koronet-mockup-responsive.png';
import imgIllustration1 from './assets/figma/koronet-illustration-1.png';
import imgIllustration2 from './assets/figma/koronet-illustration-2.png';
import imgIllustration3 from './assets/figma/koronet-illustration-3.png';
import imgIllustration4 from './assets/figma/koronet-illustration-4.png';
import imgPainPointsPhoto from './assets/figma/koronet-pain-points-photo.png';
import imgPainPointsIphone from './assets/figma/koronet-pain-points-iphone.png';
import imgCardMuuktest from './assets/figma/koronet-card-muuktest.jpg';
import imgCardMegamenu from './assets/figma/koronet-card-megamenu.png';

const NAV_LINKS = ['About', 'Resume', 'LinkedIn', 'Dribble'];

const SIDE_NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'pain-points', label: 'Pain Points' },
  { id: 'user-research', label: 'User research' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'results', label: 'Results' },
  { id: 'next-steps', label: 'Next steps' },
];

const META = [
  { label: 'ROLE', value: 'UI/UX Designer' },
  { label: 'TIMELINE', value: '4 months' },
  { label: 'TEAM', value: 'Product Manager' },
  {
    label: 'CONTRIBUTIONS',
    value: ['UX Design', 'UX Research', 'Visual Direction', 'Illustration Direction'],
  },
];

const IMPACT_STATS = [
  { value: '20%', label: 'Increased website traffic' },
  { value: '12%', label: 'Reduced bounce rate' },
  { value: '5', label: 'Qualified demos through th website' },
];

const PAIN_POINTS = [
  {
    problem: '👎 Invisible value. The platform could do a lot. The website said almost nothing.',
    solution:
      '→ Solution: Use cases organized around the four core process stages: buying, selling, payments, and inventory.',
  },
  {
    problem:
      "👎 Everything looks the same. Solutions and products lived in the same place. Users couldn't tell them apart.",
    solution:
      '→ Solution: Separated into two distinct categories, each with its own logic and entry point.',
  },
  {
    problem:
      '👎 No one knew who was visiting. Without defined user profiles, the experience was built for no one.',
    solution:
      '→ Solution: Three profiles identified: Growers, Importers, and Wholesalers — each with their own path.',
  },
];

const USER_QUOTES = [
  { emoji: '🌸', quote: 'I need to reach more buyers without adding complexity to my operation.' },
  { emoji: '🌍', quote: 'I need full visibility over my inventory before I commit to a shipment.' },
  { emoji: '📦', quote: 'I need to close transactions fast and keep my cash flow moving.' },
];

const ARCHITECTURE_POINTS = [
  {
    lead: 'Dual navigation by user type and use case.',
    rest: 'Who you are and what you need — two entry points, one flexible structure that reflected how the platform was actually built.',
  },
  {
    lead: 'Solutions and products as separate categories.',
    rest: 'Solutions organized by user and use case. Products organized by process stage. Faster routes for users who already knew what they wanted.',
  },
  {
    lead: 'Translating complexity into clarity.',
    rest: 'Every section had to balance depth with digestibility — technical enough for experts, accessible enough to convert.',
  },
];

const DESIGN_DETAILS = [
  {
    title: 'Micro-interactions',
    body: "Were used across key elements to guide the user's attention and reinforce the platform's value at every scroll — a design language deeply embedded in the tech industry that communicates innovation and credibility.",
    image: imgMockupProcess4,
  },
  {
    title: 'Responsive',
    body: 'In this case, desktop was prioritized first given that most users accessed the platform from web, but a fully responsive mobile version was designed alongside it, as every project always includes both breakpoints.',
    image: imgMockupResponsive,
  },
  {
    title: 'Illustrations',
    body: 'The illustration process involved extensive exploration — testing different directions until we landed on a visual language that felt coherent with the overall design and could communicate the complexity of the platform in a clear, intuitive way.',
    image: null,
  },
];

const MORE_CASE_STUDIES = [
  {
    image: imgCardMuuktest,
    heading: (
      <>
        Redesigning <em>for credibility:</em> When a great product deserves a better site
      </>
    ),
    description:
      'Redesign of the MuukTest website an AI-powered QA automation platform. The goal: a visually competitive presence in the tech sector, clearer navigation, and a more structured experience built to drive leads.',
  },
  {
    image: imgCardMegamenu,
    heading: (
      <>
        A mega menu: <em>built fast, built right.</em>
      </>
    ),
    description:
      "A two-week redesign of IMEHXS's navigation architecture, using AI to accelerate research and prototyping. The result: a user-centered mega menu organized by role, company size, and business need.",
  },
];

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-light tracking-[2.4px] text-[#757575]">{children}</p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="font-sans text-2xl leading-tight text-black sm:text-[30px]">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="w-full border-t border-[rgba(20,20,20,0.1)]" />;
}

function Section({ id, eyebrow, heading, children }) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-6 sm:gap-[27px]">
      <div className="flex flex-col items-start gap-5 sm:gap-[25px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyKoronet() {
  return (
    <div className="relative overflow-hidden bg-white text-[#141414]">
      <div
        className="pointer-events-none absolute -left-24 -top-52 size-[130px]"
        aria-hidden
      >
        <img alt="" className="size-full" src={imgEllipse33} />
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-16 px-6 py-8 sm:px-10 sm:py-12 lg:px-16">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={imgGeminiAvatar}
              alt="Laura Bedoya"
              className="size-9 rounded-full object-cover"
            />
            <span className="text-base font-light tracking-[-0.51px] text-[#141414]">
              Laura Bedoya
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 rounded-full border border-[rgba(224,224,224,0.6)] bg-[rgba(255,255,255,0.85)] px-2 py-2 text-sm font-light text-[rgba(20,20,20,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="cursor-pointer rounded-full px-4 py-2 transition-colors hover:bg-[rgba(20,20,20,0.06)]"
              >
                {link}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Side nav */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-12 lg:w-[124px] lg:shrink-0">
            <Link
              to="/"
              className="text-base text-[#858585] transition-colors hover:text-[#141414]"
            >
              {'<- Back'}
            </Link>
            <nav className="flex flex-row flex-wrap gap-x-5 gap-y-3 text-base text-[#858585] lg:flex-col lg:gap-[14px]">
              {SIDE_NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-left transition-colors hover:text-[#141414]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:min-w-0 lg:flex-1">
            {/* Title + meta */}
            <div className="flex flex-col gap-10">
              <h1 className="max-w-3xl font-sans text-3xl leading-tight tracking-[-0.48px] text-[#141414] sm:text-[43px] sm:leading-[47px]">
                From complexity to conversion: Redesigning koronet&apos;s website
              </h1>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {META.map((item) => (
                  <div key={item.label} className="flex flex-col gap-3">
                    <p className="text-xs font-light tracking-[2.4px] text-[#757575]">
                      {item.label}
                    </p>
                    {Array.isArray(item.value) ? (
                      <div className="flex flex-col text-base text-[#0a0a0a]">
                        {item.value.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base text-[#0a0a0a]">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <Section id="overview" eyebrow="OVERVIEW" heading="In the floral industry, complexity doesn't sell. Clarity does.">
              <div className="aspect-[889/457] w-full rounded-[16px] border border-[rgba(20,20,20,0.14)]" />
              <p className="text-base text-[#0a0a0a]">
                Koronet unifies three floral industry platforms under one brand but their
                website wasn&apos;t telling that story. I redesigned their primary
                conversion channel to communicate a complex, modular ecosystem to
                industry experts who have zero tolerance for confusion.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#141414] to-[rgba(20,20,20,0.9)] py-2.5 pl-5 pr-2.5 text-[11px] font-light text-[#fafafa] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
              >
                View on live
                <span className="flex size-5 items-center justify-center rounded-full bg-[rgba(250,250,250,0.15)]">
                  →
                </span>
              </a>
            </Section>

            <Divider />

            {/* Solution + Impact */}
            <Section id="solution" eyebrow="SOLUTION" heading="Designed around the user, not the platform.">
              <p className="text-base text-[#0a0a0a]">
                Three user types. Four process stages. Two navigational paths: one for
                who you are, one for what you need. The experience was built so every
                visitor could find the right solution without having to understand the
                full platform first.
              </p>
              <div className="aspect-[889/457] w-full rounded-[16px] border border-[rgba(20,20,20,0.14)]" />
            </Section>

            <div id="impact" className="scroll-mt-24">
              <Eyebrow>IMPACT</Eyebrow>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {IMPACT_STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <p className="text-3xl text-black">{stat.value}</p>
                    <p className="text-base text-[#858585]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* Pain points */}
            <Section
              id="pain-points"
              eyebrow="PAIN POINTS"
              heading="Diagnosing a platform no one could read."
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <div className="flex shrink-0 gap-4 sm:w-[280px]">
                  <img
                    src={imgPainPointsPhoto}
                    alt="Team reviewing the Koronet platform"
                    className="w-1/2 rounded-[16px] object-cover"
                  />
                  <img
                    src={imgPainPointsIphone}
                    alt="Koronet website shown on an iPhone"
                    className="w-1/2 rounded-[16px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {PAIN_POINTS.map((point) => (
                    <div key={point.problem} className="flex flex-col gap-1">
                      <p className="text-base text-[#0a0a0a]">{point.problem}</p>
                      <p className="text-base font-semibold text-[#0a0a0a]">
                        {point.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Divider />

            {/* User research */}
            <Section
              id="user-research"
              eyebrow="USER RESEARCH"
              heading="From client data to clear user profiles."
            >
              <p className="text-base text-[#0a0a0a] whitespace-pre-wrap">
                {`Working from existing client data provided by Koronet, we analyzed their full customer base to identify the profiles that represented the highest value and consumption patterns. From that analysis, three primary user types emerged:\n\n🌸 Growers: Produce and sell flowers. Need tools to manage orders and reach more buyers efficiently.\n🌍 Importers: Move flowers across borders. Prioritize speed, volume, and inventory visibility.\n📦 Wholesalers: Distribute to local markets. Handle high transaction volume and need flexible payment options.\n\nEach profile carried distinct needs, which allowed us to map the specific solutions relevant to each and build a more targeted, meaningful experience across the site.`}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <img
                  src={imgMockupUserResearch}
                  alt="Koronet solutions page shown on a MacBook"
                  className="w-full rounded-[16px]"
                />
                <img
                  src={imgMockupUserResearch}
                  alt="Koronet products page shown on a MacBook"
                  className="w-full rounded-[16px]"
                />
              </div>
              <p className="text-base text-[#0a0a0a]">
                Three user types emerged from Koronet&apos;s own client data — Growers,
                Importers, and Wholesalers. Jobs to Be Done sessions revealed what each
                user truly needed. Journey maps and user flows defined exactly how
                they&apos;d move through the site.
              </p>
              <div className="flex flex-col gap-4">
                {USER_QUOTES.map((item) => (
                  <div key={item.quote} className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[rgba(38,99,242,0.4)] bg-[rgba(38,99,242,0.2)] text-sm">
                      {item.emoji}
                    </span>
                    <div className="max-w-lg rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[4px] rounded-br-[16px] border border-[#e0e0e0] bg-[#f0f0f0] px-5 py-4">
                      <p className="font-serif text-sm italic text-[#141414]">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Divider />

            {/* Architecture information */}
            <Section
              eyebrow="ARCHITECTURE INFORMATION"
              heading="Complex platform. Simple entry point."
            >
              <p className="text-base text-[#0a0a0a]">
                Designing for Koronet meant making complexity feel simple for an
                audience that knows the industry deeply.
              </p>
              <ul className="flex flex-col gap-3">
                {ARCHITECTURE_POINTS.map((point) => (
                  <li key={point.lead} className="text-base text-[#0a0a0a]">
                    → <span className="font-semibold">{point.lead}</span> {point.rest}
                  </li>
                ))}
              </ul>
              <img
                src={imgMockupArchitecture}
                alt="Koronet site architecture shown on a MacBook"
                className="w-full rounded-[16px] border border-[rgba(107,107,107,0.12)]"
              />
            </Section>

            <Divider />

            {/* Design process */}
            <Section
              id="design-process"
              eyebrow="DESIGN PROCESS"
              heading="Designed to feel innovative, not foreign."
            >
              <p className="text-base text-[#0a0a0a]">
                We designed an initial version of the homepage, but it didn&apos;t feel
                technological enough — so we moved to a direction more aligned with the
                industry&apos;s visual standards.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <img
                    src={imgMockupProcess1}
                    alt="Initial high-fidelity homepage concept"
                    className="w-full rounded-[16px]"
                  />
                  <p className="text-xs font-light tracking-[2.4px] text-[#757575]">
                    Initial high-fidelity concept
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <img
                    src={imgMockupProcess1}
                    alt="Selected high-fidelity homepage direction"
                    className="w-full rounded-[16px]"
                  />
                  <p className="text-xs font-light tracking-[2.4px] text-[#757575]">
                    Selected high-fidelity direction
                  </p>
                </div>
              </div>
              <p className="text-base text-[#0a0a0a]">
                The visual direction had to feel innovative without losing credibility
                with an expert audience. Modern and technological but grounded.
                Illustrations were conceptualized to simplify complex ideas at a glance,
                coherent with the brand identity. A new typography was proposed to
                reinforce the overall tone of the experience.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <img src={imgMockupProcess2} alt="Design process exploration" className="w-full rounded-[10px]" />
                <img src={imgMockupProcess3} alt="Design process exploration" className="w-full rounded-[10px]" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <img src={imgMockupProcess4} alt="Design process exploration" className="w-full rounded-[10px]" />
                <img src={imgMockupResponsive} alt="Design process exploration" className="w-full rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-8">
                {DESIGN_DETAILS.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex flex-col items-center gap-8 sm:flex-row"
                  >
                    <div className="aspect-[436/269] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#272929] sm:w-[436px]">
                      {detail.image && (
                        <img
                          src={detail.image}
                          alt={detail.title}
                          className="size-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-semibold text-[#0a0a0a]">
                        {detail.title}
                      </p>
                      <p className="text-base text-[#0a0a0a]">{detail.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <img
                  src={imgIllustration1}
                  alt="Koronet illustration exploration"
                  className="h-[130px] w-[92px] rounded-lg object-cover"
                />
                <img
                  src={imgIllustration2}
                  alt="Koronet illustration exploration"
                  className="h-[130px] w-[150px] rounded-lg object-cover"
                />
                <img
                  src={imgIllustration3}
                  alt="Koronet illustration exploration"
                  className="h-[130px] w-[150px] rounded-lg object-cover"
                />
                <img
                  src={imgIllustration4}
                  alt="Koronet illustration exploration"
                  className="h-[130px] w-[150px] rounded-lg object-cover"
                />
              </div>
            </Section>

            <Divider />

            {/* Results */}
            <Section id="results" eyebrow="RESULTS" heading="Built to grow. Made to scale.">
              <p className="text-base text-[#0a0a0a]">
                The redesign simplified a complex user experience by balancing two
                things at once — what users needed to find, and what the business
                needed to communicate. The result was a website that finally made sense
                for both sides. And it didn&apos;t stop there — the project expanded
                beyond its original scope, with new pages and brands added to the
                ecosystem.
              </p>
              <div className="flex gap-6 border-l border-[rgba(20,20,20,0.15)] pl-6">
                <p className="font-serif text-lg italic text-[#0a0a0a]">
                  💖 <span className="font-medium">What i learn?</span>
                  <br />
                  <br />
                  <span className="font-sans not-italic text-base">
                    This project was a challenge for everyone involved. In less than a
                    month, the team and I had to deeply understand a highly complex
                    software ecosystem from scratch. That learning curve became part of
                    the design process itself. You can&apos;t simplify what you
                    don&apos;t understand.
                  </span>
                </p>
              </div>
            </Section>

            <Divider />

            {/* Next steps */}
            <Section
              id="next-steps"
              eyebrow="NEXT STEPS"
              heading="The launch was just the beginning."
            >
              <p className="text-base text-[#0a0a0a]">
                The team responded really well to the redesign, and the work
                doesn&apos;t stop here. Building on the foundation of the new site, the
                next phase involves creating individual landing pages for each of
                Koronet&apos;s three products (Axerrio, Komet, and Unosof) each with its
                own dedicated SEO strategy.
              </p>
            </Section>

            <Divider />

            {/* More case studies */}
            <div className="flex flex-col gap-6">
              <Eyebrow>MORE CASES STUDIES</Eyebrow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {MORE_CASE_STUDIES.map((study) => (
                  <a
                    key={study.description}
                    href="#"
                    className="flex flex-col overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white transition-shadow hover:shadow-lg"
                  >
                    <div className="aspect-[556/347.5] w-full overflow-hidden bg-[#f0f0f0]">
                      <img
                        src={study.image}
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                      <p className="font-sans text-lg tracking-[-0.48px] text-[#141414] [&_em]:font-serif [&_em]:font-light [&_em]:not-italic [&_em]:italic">
                        {study.heading}
                      </p>
                      <p className="text-xs font-light text-[#6b6b6b]">
                        {study.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="flex flex-col items-center gap-3 border-t border-[rgba(20,20,20,0.1)] py-8 text-center text-[10.7px] font-light text-[#6b6b6b] sm:flex-row sm:justify-between sm:text-left">
              <span className="tracking-[-0.54px] text-[#696969]">
                Built with love and Claude Code · 2026
              </span>
              <Link to="/" className="transition-colors hover:text-[#141414]">
                Back to deck →
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
