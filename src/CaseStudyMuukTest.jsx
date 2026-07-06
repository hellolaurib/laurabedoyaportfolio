import CaseStudyShell, { Eyebrow, SectionHeading, Section, Divider } from './CaseStudyShell';
import imgMockupSolution from './assets/figma/muuktest-mockup-solution.jpg';
import imgIpadScreenshot from './assets/figma/muuktest-ipad-screenshot.png';
import imgMockupArchitecture from './assets/figma/muuktest-mockup-architecture.jpg';
import imgMockupProcess1 from './assets/figma/muuktest-mockup-process-1.jpg';
import imgMockupProcess2 from './assets/figma/muuktest-mockup-process-2.png';
import imgMockupProcess3 from './assets/figma/muuktest-mockup-process-3.png';
import imgMockupProcess4 from './assets/figma/muuktest-mockup-process-4.jpg';
import imgMockupProcess5 from './assets/figma/muuktest-mockup-process-5.png';
import imgMockupMobile from './assets/figma/muuktest-mockup-mobile.png';

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
  { value: '35%', label: 'Increased demo booking' },
  { value: '1m 10s', label: 'Average session duration' },
  { value: '10/10', label: 'Client satisfaction' },
];

const PAIN_POINTS = [
  {
    problem: "👎 Impossible to navigate. Users couldn't find what they needed — and left.",
    solution: '→ Solution: Navigation redesigned from the ground up. Every visitor, a clear path.',
  },
  {
    problem: "👎 Services lost in translation. The platform's value wasn't coming through.",
    solution:
      '→ Solution: Value proposition restructured with direct messaging — what it does, why it matters, immediately clear.',
  },
  {
    problem: '👎 Low lead generation. Poor navigation and unclear messaging were killing conversions.',
    solution:
      '→ Solution: User journey optimized to guide visitors toward conversion from the first interaction.',
  },
];

const PERSONAS = [
  {
    emoji: '⚙️',
    title: 'The CTO or Engineering Lead',
    body: 'Needs software quality without building an internal QA team. Prioritizes fast implementation and seamless integration with their existing stack.',
  },
  {
    emoji: '👨‍💻',
    title: 'The Product Manager or Founder',
    body: 'Needs software quality without building an internal QA team. Prioritizes fast implementation and seamless integration with their existing stack.',
  },
];

const ARCHITECTURE_POINTS = [
  {
    lead: 'Two paths by growth stage.',
    rest: 'Startups and scaleups enter through the lens most relevant to their reality.',
  },
  {
    lead: 'Progressive consumption.',
    rest: 'Complex services broken into digestible steps — value extracted without overwhelm.',
  },
  {
    lead: 'Conversion at every stage.',
    rest: 'Every section offered a natural next step, keeping lead generation present throughout the journey.',
  },
];

const VISUAL_DIRECTION_POINTS = [
  {
    lead: 'Dark aesthetic as a strategic choice.',
    rest: 'Limited brand assets pushed us toward a dark palette with glowing accents — communicating sophistication where the brandbook couldn’t.',
  },
  {
    lead: 'Animations as the creative lever.',
    rest: 'Interactions became the differentiator — functional, intentional, and the clearest signal of technological credibility.',
  },
  {
    lead: 'Collaboration from day one.',
    rest: 'Designed in close coordination with the developer to eliminate rework and ensure every animation worked flawlessly after launch.',
  },
];

const DESIGN_DETAILS = [
  {
    title: 'Demo form strategy',
    body: 'Through competitor analysis, we discovered that every major player in the space led with a demo request form as the primary entry point. This insight drove a key strategic decision: we made the demo form the central conversion element of the site, placing it prominently and reducing friction in the sign-up flow. The result was a direct increase in scheduled demos from launch.',
    image: imgMockupProcess5,
  },
  {
    title: 'Micro-interactions',
    body: "During the competitive benchmarking phase, we analyzed how leading players in the space were using motion and micro-interactions and found that thoughtful animations weren't just decorative — they were actively guiding user attention and reinforcing the platform's credibility. This became a key design insight that shaped our entire interaction approach: every animation had to serve a purpose, not just look good.",
    image: null,
  },
  {
    title: 'Mobile first',
    body: 'Every project I work on is designed mobile-first. I always start with the smallest screen before scaling up to desktop, which forces clearer decisions around hierarchy, content prioritization, and usability. If it works on mobile, it works everywhere.',
    image: imgMockupMobile,
  },
];

export default function CaseStudyMuukTest() {
  return (
    <CaseStudyShell
      caseStudyId="muuktest"
      title="Redesigning for credibility: when a great product deserves a better site"
      meta={META}
      sideNav={SIDE_NAV}
    >
      {/* Overview */}
      <Section id="overview" eyebrow="OVERVIEW" heading="Great product. Wrong first impression.">
        <div className="aspect-[889/457] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
        <p className="text-base text-[#0a0a0a]">
          Strong product, weak first impression. In a competitive tech space, visual
          credibility matters as much as the service itself. The challenge: build an
          experience that competes visually at an industry level while making
          technical information easy to act on.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#141414] to-[rgba(20,20,20,0.9)] py-2.5 pl-5 pr-2.5 text-[11px] font-light text-[#fafafa] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          View on live
          <span className="flex size-5 items-center justify-center rounded-full bg-[rgba(250,250,250,0.15)]">
            →
          </span>
        </a>
      </Section>

      <Divider />

      {/* Solution */}
      <Section id="solution" eyebrow="SOLUTION" heading="Visual credibility as a conversion tool.">
        <p className="text-base text-[#0a0a0a]">
          The challenge wasn&apos;t just looking good — it was looking good while
          staying clear. A modular layout system turned a technically dense product
          into a step-by-step experience, guiding users through complexity without
          losing them along the way.
        </p>
        <img
          src={imgMockupSolution}
          alt="MuukTest website shown on a MacBook and iPhone"
          className="w-full rounded-[15px]"
        />
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
        heading="The site was losing clients before they even arrived."
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <img
            src={imgIpadScreenshot}
            alt="MuukTest homepage shown on an iPad"
            className="aspect-[372/467] w-full shrink-0 rounded-[15px] object-cover object-top sm:w-[280px]"
          />
          <div className="flex flex-col gap-4">
            <p className="text-base text-[#0a0a0a]">
              After mapping the user experience, three critical gaps emerged
            </p>
            {PAIN_POINTS.map((point) => (
              <div key={point.problem} className="flex flex-col gap-1">
                <p className="text-base text-[#0a0a0a]">{point.problem}</p>
                <p className="text-base font-semibold text-[#0a0a0a]">{point.solution}</p>
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
        heading="Who's actually choosing a QA platform?"
      >
        <p className="text-base text-[#0a0a0a]">
          A benchmark analysis of 4 competitor websites revealed a clear gap —
          visually and strategically, competitors were ahead. That gap became the
          opportunity. Jobs to Be Done sessions defined what each user truly
          needed, feeding directly into two buyer personas that guided every
          design decision.
        </p>
        <div className="flex flex-col gap-4">
          {PERSONAS.map((persona) => (
            <div key={persona.title} className="flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[rgba(38,99,242,0.4)] bg-[rgba(38,99,242,0.2)] text-sm">
                {persona.emoji}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-[#0a0a0a]">{persona.title}</p>
                <p className="text-base text-[#0a0a0a]">{persona.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
        </div>
        <p className="text-base text-[#0a0a0a]">
          From there, workflow mapping helped us understand how each persona moved
          through the buying decision — and where the experience needed to meet
          them.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
        </div>
      </Section>

      <Divider />

      {/* Architecture information */}
      <Section
        eyebrow="ARCHITECTURE INFORMATION"
        heading="Technical product. Human experience."
      >
        <p className="text-base text-[#0a0a0a]">
          Growth stage as the organizing principle — startups and scaleups face
          different problems, so they needed different paths. Services were
          structured progressively, reducing cognitive load for a technical but
          time-pressed audience. A modular layout made dense content scannable.
          Conversion opportunities were embedded throughout — not just at the end.
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
          alt="MuukTest information architecture diagram"
          className="w-full rounded-[15px] border border-[rgba(107,107,107,0.31)]"
        />
      </Section>

      <Divider />

      {/* Design process */}
      <Section
        id="design-process"
        eyebrow="DESIGN PROCESS"
        heading="Before the aesthetic, the structure."
      >
        <p className="text-base text-[#0a0a0a]">
          Wireframes were built to validate the architecture before any visual
          decisions were made — ensuring the user paths, content hierarchy, and
          conversion logic were solid before a single color or component was
          applied.
        </p>
        <img
          src={imgMockupProcess1}
          alt="MuukTest homepage wireframe"
          className="aspect-[889/457] w-full rounded-[15px] object-cover object-top"
        />

        <SectionHeading>From brandbook to bold direction.</SectionHeading>
        <p className="text-base text-[#0a0a0a]">
          The real challenge started with the brandbook — minimal, and far from
          tech. The visual direction had to be built almost from scratch,
          transforming limited brand assets into a modern, competitive aesthetic
          that could stand alongside the industry&apos;s best.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img src={imgMockupProcess2} alt="MuukTest design system: colors, typography, buttons" className="aspect-[437/311] w-full rounded-[15px] object-cover object-top" />
          <img src={imgMockupProcess3} alt="MuukTest regression testing landing page" className="aspect-[437/311] w-full rounded-[15px] object-cover object-top" />
        </div>
        <ul className="flex flex-col gap-3">
          {VISUAL_DIRECTION_POINTS.map((point) => (
            <li key={point.lead} className="text-base text-[#0a0a0a]">
              → <span className="font-semibold">{point.lead}</span> {point.rest}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img src={imgMockupProcess4} alt="MuukTest startup landing page" className="aspect-[437/311] w-full rounded-[15px] object-cover" />
          <img src={imgMockupProcess5} alt="MuukTest pricing page" className="aspect-[437/311] w-full rounded-[15px] object-cover object-top" />
        </div>
        <div className="flex flex-col gap-8">
          {DESIGN_DETAILS.map((detail) => (
            <div key={detail.title} className="flex flex-col items-center gap-8 sm:flex-row">
              <div className="aspect-[436/269] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#272929] sm:w-[436px]">
                {detail.image && (
                  <img src={detail.image} alt={detail.title} className="size-full object-cover" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold text-[#0a0a0a]">{detail.title}</p>
                <p className="text-base text-[#0a0a0a]">{detail.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Results */}
      <Section id="results" eyebrow="RESULTS" heading="The numbers confirmed what the design intended">
        <p className="text-base text-[#0a0a0a]">
          Every decision made throughout this project was built with outcomes in
          mind. From launch, the results were immediate — and the foundation laid
          for sustained growth well beyond the launch window.
        </p>
        <div className="flex gap-6 border-l border-[rgba(20,20,20,0.15)] pl-6">
          <p className="font-serif text-lg font-light italic text-[#0a0a0a]">
            💖 <span className="font-medium">What i learn?</span>
            <br />
            <br />
            <span className="font-sans not-italic text-base">
              In the tech space, visual credibility is not optional — it is part of
              the product. Working within tight brand constraints pushed every
              decision to be more intentional, proving that limitations can be a
              catalyst for stronger, more focused work.
            </span>
          </p>
        </div>
      </Section>

      <Divider />

      {/* Next steps */}
      <Section id="next-steps" eyebrow="NEXT STEPS" heading="The work didn't stop at launch.">
        <p className="text-base text-[#0a0a0a]">
          The client&apos;s satisfaction drove the project beyond its original
          scope. New pages were designed to support an AEO strategy — positioning
          MuukTest&apos;s content to be discovered and referenced by AI-powered
          search tools. Heatmap analysis was introduced to identify friction
          points and continuously optimize key sections, turning the website into
          a living product rather than a one-time delivery.
        </p>
      </Section>
    </CaseStudyShell>
  );
}
