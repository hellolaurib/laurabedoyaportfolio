import CaseStudyShell, { Eyebrow, SectionHeading, Section, Divider, PromptCallout } from './CaseStudyShell';
import imgMockupSolution from './assets/figma/imehxs-mockup-solution.png';
import imgPainPointsBanner from './assets/figma/imehxs-pain-points-banner.png';
import imgMockupArchitecture1 from './assets/figma/imehxs-mockup-architecture-1.jpg';
import imgMockupArchitecture2 from './assets/figma/imehxs-mockup-architecture-2.jpg';
import imgMockupWireframe from './assets/figma/imehxs-mockup-wireframe.png';
import imgMockupProcess1 from './assets/figma/imehxs-mockup-process-1.png';
import imgMockupProcess2 from './assets/figma/imehxs-mockup-process-2.png';
import imgMockupProcess3 from './assets/figma/imehxs-mockup-process-3.png';

const SIDE_NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'pain-points', label: 'Pain Points' },
  { id: 'user-research', label: 'User research' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'results', label: 'Results' },
];

const META = [
  { label: 'ROLE', value: 'UI/UX Designer' },
  { label: 'TIMELINE', value: '2 weeks' },
  { label: 'TEAM', value: 'Product Manager' },
  {
    label: 'CONTRIBUTIONS',
    value: ['UX Design', 'UX Research', 'Visual Direction', 'Illustration Direction'],
  },
];

const IMPACT_STATS = [
  { value: '20%', label: 'reduction in customer service requests' },
  { value: '15', label: 'days from concept to production by using AI for prototyping' },
  { value: '10/10', label: 'client satisfaction' },
];

const PAIN_POINTS = [
  "→ Users struggled to determine whether IMEHXS's services were suitable for their company's size and operational needs.",
  '→ The website did not clearly communicate which solutions were relevant to different business profiles.',
  "→ Users experienced uncertainty when evaluating if the service could support their organization's capacity and requirements.",
];

const ARCHITECTURE_APPROACHES = [
  {
    image: imgMockupArchitecture1,
    title: 'Size and Features',
    body: 'Navigation organized by company size and product features — letting users self-select based on scale, then browse capabilities. Straightforward, but it asked users to already understand their own needs in product terms before finding relevant content.',
  },
  {
    image: imgMockupArchitecture2,
    title: 'Role, Size, and Business Needs',
    body: "Navigation structured around who the user is, how big their company is, and what they're actually trying to solve. User testing confirmed this approach was more intuitive — it met users where they were, rather than asking them to translate their problem into the platform's language. This became the foundation for the user-centered mega menu.",
  },
];

export default function CaseStudyMegaMenu() {
  return (
    <CaseStudyShell
      caseStudyId="imehxs-mega-menu"
      title="A mega menu: built fast, built right."
      meta={META}
      sideNav={SIDE_NAV}
    >
      {/* Overview / The challenge */}
      <Section id="overview" eyebrow="THE CHALLENGE" heading="Built for one user. Used by many.">
        <p className="text-base text-[#0a0a0a]">
          The navigation no longer matched who was actually visiting. New user
          segments and buyer personas had emerged, but the existing architecture
          still reflected an outdated picture of the audience — creating friction
          for the very users the platform needed to convert. The pressure: solve
          it in two weeks, leaving no room for a traditional research-heavy
          process.
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
      <Section id="solution" eyebrow="SOLUTION" heading="When the timeline is two weeks, AI becomes the strategy.">
        <p className="text-base text-[#0a0a0a]">
          A mega menu was designed around the newly identified user segments —
          creating distinct paths based on research findings, so each type of
          visitor could immediately recognize that the platform was built for
          their specific need. To meet the two-week timeline, AI became our ally
          — accelerating research synthesis and design iteration without cutting
          corners on quality.
        </p>
        <img
          src={imgMockupSolution}
          alt="IMEHXS solutions page shown on a MacBook"
          className="w-full rounded-[16px]"
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
        heading="Users couldn't tell if this was built for them."
      >
        <div className="flex flex-col gap-1">
          {PAIN_POINTS.map((point) => (
            <p key={point} className="text-base text-[#0a0a0a]">
              {point}
            </p>
          ))}
        </div>
        <img
          src={imgPainPointsBanner}
          alt="IMEHXS navigation mega menu showing product categories"
          className="w-full rounded-[20px] object-cover"
        />
      </Section>

      <Divider />

      {/* User research */}
      <Section
        id="user-research"
        eyebrow="USER RESEARCH"
        heading="Understanding the users"
      >
        <p className="text-base text-[#0a0a0a]">
          Using the Jobs-to-Be-Done methodology, we collaborated closely with
          stakeholders to identify and segment four key buyer personas. Due to
          confidentiality agreements, I am unable to disclose details about these
          specific audience segments.
        </p>
        <PromptCallout
          label="Prompt for Claude:"
          prompt="Analyze the following research notes and extract the key recurring keywords and phrases used to describe needs and context. Then group these keywords by user type, identifying patterns and similarities in language and priorities across each identified user segment."
        />
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
          <div className="aspect-[437/311] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
        </div>
        <p className="text-base text-[#0a0a0a]">
          From there, workflow mapping helped us understand how each persona
          moved through the buying decision — and where the experience needed to
          meet them.
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
        heading="Creating clearer paths to solutions"
      >
        <p className="text-base text-[#0a0a0a]">
          We explored two navigation approaches: one organized by company size
          and product features, and another structured around users&apos; roles,
          company size, and business needs. Through user testing, the second
          approach proved to be more intuitive and effective, leading us to
          implement a user-centered mega menu that helps users quickly find
          solutions tailored to their context.
        </p>
        <div className="flex flex-col gap-8">
          {ARCHITECTURE_APPROACHES.map((approach) => (
            <div key={approach.title} className="flex flex-col items-center gap-6 sm:flex-row">
              <img
                src={approach.image}
                alt={approach.title}
                className="w-full shrink-0 rounded-[15px] object-cover sm:w-[403px]"
              />
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold text-[#0a0a0a]">{approach.title}</p>
                <p className="text-base text-[#0a0a0a]">{approach.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-base font-light italic text-[#8c8c8c]">
          *&ldquo;Some sections have been removed due to project confidentiality.&rdquo;
        </p>
      </Section>

      <Divider />

      {/* Design process */}
      <Section
        id="design-process"
        eyebrow="DESIGN PROCESS"
        heading="From concept to layout"
      >
        <p className="text-base text-[#0a0a0a]">
          Using Figma Make, we rapidly explored and prototyped the mega menu
          along with the destination pages linked from each navigation path. The
          wireframing process focused on creating a highly scannable experience,
          helping users quickly identify relevant information and navigate
          efficiently through the platform.
        </p>
        <PromptCallout
          label="Prompt for Figma Make:"
          prompt="Generate two low-fidelity wireframe options for a mega menu navigation based on this structure. Focus on layout and hierarchy only — no visual styling, no brand colors. Show three to four primary user paths organized by role, company size, and business need. Include placeholder labels for each category and indicate where icons or supporting visuals would go. Keep both grayscale and structural, prioritizing clarity of information architecture over aesthetics."
        />
        <img
          src={imgMockupWireframe}
          alt="IMEHXS mega menu wireframe exploration"
          className="w-full rounded-[15px] border border-[rgba(0,0,0,0.11)]"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img src={imgMockupProcess1} alt="Design process exploration" className="w-full rounded-[15px]" />
          <img src={imgMockupProcess2} alt="Design process exploration" className="w-full rounded-[15px]" />
        </div>
        <p className="text-xs font-light italic text-[rgba(107,107,107,0.53)]">
          *Rapid prototypes were created exploring different visual experiences,
          then iterated based on how users navigated most intuitively.
        </p>

        <SectionHeading>Bringing the experience to life.</SectionHeading>
        <p className="text-base text-[#0a0a0a]">
          Following the brand guidelines, AI helped generate an initial visual
          foundation — imagery directions and content structure — which we then
          refined and organized ourselves, applying visual hierarchy and
          strategic keywords to enhance scannability. With the help of Cowork and
          Claude, we were able to translate that direction directly into working
          HTML, accelerating the path from concept to implementation.
        </p>
        <PromptCallout
          label="Prompt for Figma Make:"
          prompt="Using this existing wireframe, generate the visual design for a mega menu for IMEHXS, a medical software platform. Apply the brand guidelines. Organize the visual hierarchy around the three user paths already defined — role, company size, and business need. Prioritize scannability: clear sectioning, relevant icons per category, and concise labeling so users can quickly identify which path applies to them."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img src={imgMockupProcess3} alt="Design system exploration" className="w-full rounded-[15px]" />
          <img src={imgMockupProcess1} alt="Design process exploration" className="w-full rounded-[15px]" />
        </div>
      </Section>

      <Divider />

      {/* Results */}
      <Section id="results" eyebrow="RESULTS" heading="Fast, but not careless.">
        <p className="text-base text-[#0a0a0a]">
          The mega menu gave every user segment a clear, immediate answer to
          &ldquo;is this for me?&rdquo; — solving the core confusion that was
          costing the platform conversions. By combining AI-accelerated research
          and prototyping with hands-on design refinement, the two-week timeline
          was met without compromising the quality of the final experience.
        </p>
        <div className="flex gap-6 border-l border-[rgba(20,20,20,0.15)] pl-6">
          <p className="font-serif text-lg italic text-[#0a0a0a]">
            💖 <span className="font-medium">What i learn?</span>
            <br />
            <br />
            <span className="font-sans not-italic text-base">
              AI is reshaping how fast projects can move — not by replacing the
              work, but by becoming a starting point. Using it as a foundation
              for research synthesis and initial concepts freed up time for what
              actually needs human judgment: refining, validating, and making the
              final call.
            </span>
          </p>
        </div>
      </Section>
    </CaseStudyShell>
  );
}
