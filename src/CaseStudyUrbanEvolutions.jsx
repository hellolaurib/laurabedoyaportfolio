import CaseStudyShell, { Eyebrow, SectionHeading, Section, Divider } from './CaseStudyShell';
import imgProcess1 from './assets/figma/urban-mockup-process-1.png';
import imgProcess2 from './assets/figma/urban-mockup-process-2.png';
import imgProcess3 from './assets/figma/urban-mockup-process-3.jpg';
import imgProcess4 from './assets/figma/urban-mockup-process-4.jpg';
import imgContactForm from './assets/figma/urban-mockup-contact-form.jpg';
import imgMobile from './assets/figma/urban-mockup-mobile.jpg';
import imgPainPointsPhoto from './assets/figma/urban-pain-points-photo.png';

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
  { label: 'TIMELINE', value: '3 months' },
  { label: 'TEAM', value: 'Product Manager' },
  {
    label: 'CONTRIBUTIONS',
    value: ['UX Design', 'UX Research', 'Visual Direction', 'Illustration Direction'],
  },
];

const IMPACT_STATS = [
  { value: '+60', label: 'Products and 15 structured pages' },
  { value: '100', label: 'SEO best practices' },
  { value: '35%', label: 'Increase in average session duration' },
];

const PAIN_POINTS = [
  {
    problem: '👎 Visually underwhelming for a brand of their caliber.',
    solution:
      "→ Solution: Editorial layout, curated imagery, and refined micro-interactions — elevated to match the industry's best.",
  },
  {
    problem: '👎 Sustainability lost in the noise.',
    solution:
      '→ Solution: A dedicated sustainability hub gave their core differentiator its own space and narrative.',
  },
  {
    problem: '👎 Poor navigation driving high abandonment.',
    solution:
      '→ Solution: Information architecture rebuilt from the ground up — materials as the primary entry point, clear paths from discovery to product.',
  },
];

const PERSONAS = [
  {
    emoji: '👩‍🎨',
    title: 'The Design Professional',
    body: 'Architects and interior designers seeking premium, sustainable materials for high-end commercial or residential projects. They need to quickly access technical specifications, samples, and reference projects to make informed material decisions.',
  },
  {
    emoji: '👨‍💼',
    title: 'The Builder / Project Manager',
    body: 'Construction leads and project managers who need to evaluate suppliers based on certifications, material performance, and reliability to include them in client proposals.',
  },
];

const ARCHITECTURE_POINTS = [
  {
    lead: 'Materials first.',
    rest: "Leading with material type connected users to the brand's story before reaching a specific product.",
  },
  {
    lead: 'Collaborative migration.',
    rest: 'Working closely with a developer, 500+ pages were standardized without losing information or visual coherence.',
  },
  {
    lead: 'Density meets aesthetics.',
    rest: 'Every layout decision had to serve both clarity and beauty simultaneously.',
  },
];

const DESIGN_DETAILS = [
  {
    title: 'Micro-interactions',
    body: 'Subtle animations were used across key elements to keep users engaged and guide their attention through a content-heavy experience without competing with the material photography that is the true hero of the site.',
    image: null,
  },
  {
    title: 'Contact form',
    body: 'A contact form was placed at the bottom of every page — keeping a conversion opportunity present throughout the entire site, no matter where the user landed.',
    image: imgContactForm,
  },
  {
    title: 'Mobile first',
    body: 'Every layout, hierarchy, and interaction starts from the smallest screen. Scaling up to desktop comes after the core experience is already solid — ensuring nothing feels like an afterthought at any breakpoint.',
    image: imgMobile,
  },
];

export default function CaseStudyUrbanEvolutions() {
  return (
    <CaseStudyShell
      caseStudyId="reclaimed-wood"
      title="Structure sets the stage. Design steals the show."
      meta={META}
      sideNav={SIDE_NAV}
    >
      {/* Overview */}
      <Section id="overview" eyebrow="OVERVIEW" heading="When the catalog is the product.">
        <div className="aspect-[889/457] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
        <p className="text-base text-[#0a0a0a]">
          Redesign of the Urban Evolutions website, focused on improving the user
          experience for a company with over 28 years of expertise in reclaimed
          wood and sustainable materials.
        </p>
        <p className="text-base text-[#0a0a0a]">
          The project centered on building a clear navigation structure,
          showcasing their materials, products, landmark projects, and
          sustainability values — all while meeting the high aesthetic bar their
          industry reputation demands.
        </p>
        <a
          href="https://urbanevolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
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
      <Section id="solution" eyebrow="SOLUTION" heading="Built for the user. Designed for the brand.">
        <p className="text-base text-[#0a0a0a]">
          The solution was built around how users actually explore materials, not
          how the catalog was organized internally. Materials became the primary
          entry point, connecting users to the brand&apos;s story before reaching a
          specific product. Every section was designed to reduce cognitive load
          while maintaining the premium feel the brand demands. Structure and
          aesthetics working together, not against each other.
        </p>
        <div className="aspect-[889/434] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
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
        heading="Strong portfolio. Weak first impression."
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <img
            src={imgPainPointsPhoto}
            alt="Urban Evolutions homepage shown on a phone"
            className="aspect-[198/425] w-full max-w-[160px] shrink-0 rounded-[15px] object-cover object-top"
          />
          <div className="flex flex-col gap-4">
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
        heading="Knowing the user before touching the design."
      >
        <p className="text-base text-[#0a0a0a]">
          A benchmark analysis of 4 competitor websites was conducted to identify
          best practices and incorporate them into the new design. Two key user
          profiles were defined to guide the experience:
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
      <Section eyebrow="ARCHITECTURE INFORMATION" heading="The architecture behind it.">
        <p className="text-base text-[#0a0a0a]">
          The information architecture was rebuilt from the ground up — materials
          by type as the primary entry point, followed by products, a
          sustainability hub, technical specs, and a project portfolio. Every page
          designed for clarity without sacrificing the premium feel the brand
          demands.
        </p>
        <ul className="flex flex-col gap-3">
          {ARCHITECTURE_POINTS.map((point) => (
            <li key={point.lead} className="text-base text-[#0a0a0a]">
              → <span className="font-semibold">{point.lead}</span> {point.rest}
            </li>
          ))}
        </ul>
        <div className="aspect-[891/329] w-full rounded-[15px] border border-[rgba(20,20,20,0.14)]" />
      </Section>

      <Divider />

      {/* Design process */}
      <Section id="design-process" eyebrow="DESIGN PROCESS" heading="Clarity starts here.">
        <p className="text-base text-[#0a0a0a]">
          Wireframes were built to validate the information architecture before
          any visual decisions were made — testing navigation logic, content
          hierarchy, and user paths across.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img
            src={imgProcess1}
            alt="Urban Evolutions wireframe"
            className="aspect-[437/311] w-full rounded-[10px] object-cover object-top"
          />
          <img
            src={imgProcess2}
            alt="Urban Evolutions wireframe"
            className="aspect-[437/311] w-full rounded-[10px] object-cover object-top"
          />
        </div>

        <SectionHeading>Creating a more modern visual.</SectionHeading>
        <p className="text-base text-[#0a0a0a]">
          The visual direction preserved the brand&apos;s existing identity while
          elevating it significantly. Colors followed the brand guidelines, and
          refined micro-interactions were introduced to match the premium
          aesthetic the client envisioned. The goal was to feel like browsing a
          high-end architecture magazine — where every image, layout, and detail
          communicates craftsmanship and decades of experience.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="aspect-[436/269] w-full rounded-[10px] border border-[rgba(20,20,20,0.14)]" />
          <div className="aspect-[434/268] w-full rounded-[10px] border border-[rgba(20,20,20,0.14)]" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img
            src={imgProcess3}
            alt="Urban Evolutions homepage design"
            className="aspect-[434/268] w-full rounded-[10px] object-cover"
          />
          <img
            src={imgProcess4}
            alt="Urban Evolutions product pages shown on iPhones"
            className="aspect-[436/269] w-full rounded-[10px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          {DESIGN_DETAILS.map((detail) => (
            <div key={detail.title} className="flex flex-col items-center gap-8 sm:flex-row">
              <div className="aspect-[436/269] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#272929] sm:w-[436px]">
                {detail.image && (
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="size-full object-cover object-top"
                  />
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
      <Section id="results" eyebrow="RESULTS" heading="Results that matched the ambition.">
        <p className="text-base text-[#0a0a0a]">
          Significantly improved navigation and a clear value proposition. The
          result: a visually elevated site, fully competitive within the
          industry, that authentically communicates Urban Evolutions&apos;
          expertise and sustainability commitment. The redesign&apos;s success
          opened the door to expand it further — new pages designed to grow the
          digital ecosystem and give more of Urban Evolutions&apos; work the
          visibility it deserves.
        </p>
        <div className="flex gap-6 border-l border-[rgba(20,20,20,0.15)] pl-6">
          <p className="font-serif text-lg font-light italic text-[#0a0a0a]">
            💖 <span className="font-medium">What i learn?</span>
            <br />
            <br />
            <span className="font-sans not-italic text-base">
              Urban Evolutions confirmed something I had always believed but never
              had the chance to prove at this scale: great aesthetics and great
              user experience are not in conflict — they amplify each other. When
              design decisions are made with both beauty and function in mind, the
              result feels effortless to the user and true to the brand.
            </span>
          </p>
        </div>
      </Section>

      <Divider />

      {/* Next steps */}
      <Section
        id="next-steps"
        eyebrow="NEXT STEPS"
        heading="Designed for now. Built for what's coming."
      >
        <p className="text-base text-[#0a0a0a]">
          The next phase focuses on expanding the platform&apos;s organic reach by
          doubling down on Answer Engine Optimization — ensuring the brand stays
          visible and relevant as AI-powered search continues to reshape how
          users discover solutions.
        </p>
      </Section>
    </CaseStudyShell>
  );
}
