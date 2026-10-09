import CaseStudyShell, { Meta } from './CaseStudyShell';
import Reveal from './Reveal';
import imgHero from './assets/figma/barrio-hero.jpg';
import imgPhoneMockup from './assets/figma/barrio-phone-mockup.jpg';
import imgCampaign1 from './assets/figma/barrio-campaign-1.jpg';
import imgCampaign2 from './assets/figma/barrio-campaign-2.jpg';
import imgCampaign3 from './assets/figma/barrio-campaign-3.jpg';
import imgTeamPhoto from './assets/figma/barrio-team-photo.jpg';
import imgSocial1 from './assets/figma/barrio-social-1.jpg';
import imgSocial2 from './assets/figma/barrio-social-2.jpg';
import imgMerchTshirts from './assets/figma/barrio-merch-tshirts.jpg';
import imgEvent from './assets/figma/barrio-event.jpg';
import imgClosing from './assets/figma/barrio-closing.jpg';

const META = [
  { label: 'ROLE', value: 'Visual Designer' },
  { label: 'YEAR', value: '2024' },
  { label: 'TEAM', value: ['Community Manager', 'Videographer', 'Photographer'] },
  { label: 'SKILLS', value: ['Social Media', 'Packaging', 'Merchandising', 'Paid Media'] },
];

// One full-viewport panel that pins in place and gets covered by the next
// panel sliding up over it — a stacked-cards scroll effect. `first` skips
// the overlap pull so the stack starts flush after the page content above it.
function StackPanel({ children, index, first = false }) {
  return (
    <div
      className={`relative h-[200vh] ${first ? '' : '-mt-[100vh]'}`}
      style={{ zIndex: index }}
    >
      <div className="sticky top-0 h-screen">
        <div className="relative left-1/2 h-full w-screen -translate-x-1/2 overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

const PANELS = [
  { key: 'hero', node: <img src={imgHero} alt="Barrio Burger key visual" className="size-full object-cover" /> },
  { key: 'phone', node: <img src={imgPhoneMockup} alt="Barrio Burger social content shown on a phone" className="size-full object-cover" /> },
  { key: 'campaign-1', node: <img src={imgCampaign1} alt="Barrio Burger campaign visual" className="size-full object-cover" /> },
  { key: 'campaign-2', node: <img src={imgCampaign2} alt="Barrio Burger campaign visual" className="size-full object-cover" /> },
  {
    key: 'campaign-3',
    node: (
      <div className="flex size-full items-center justify-center bg-black">
        <img src={imgCampaign3} alt="Barrio Burger campaign visual" className="size-full object-contain" />
      </div>
    ),
  },
  { key: 'team', node: <img src={imgTeamPhoto} alt="Barrio Burger team at Burger Master" className="size-full object-cover object-top" /> },
  {
    key: 'social',
    node: (
      <div className="grid size-full grid-cols-2">
        <img src={imgSocial1} alt="Barrio Burger social media post" className="size-full object-cover object-top" />
        <img src={imgSocial2} alt="Barrio Burger social media post" className="size-full object-cover object-top" />
      </div>
    ),
  },
  {
    key: 'merch',
    node: (
      <div className="flex size-full items-center justify-center bg-black">
        <img src={imgMerchTshirts} alt="Barrio Burger branded merchandise" className="size-full object-contain" />
      </div>
    ),
  },
  { key: 'event', node: <img src={imgEvent} alt="Barrio Burger at Burger Master event" className="size-full object-cover" /> },
  { key: 'closing', node: <img src={imgClosing} alt="Barrio Burger brand materials" className="size-full object-cover" /> },
];

export default function CaseStudyBarrio() {
  return (
    <CaseStudyShell caseStudyId="barrio" title="Barrio Burger">
      {/* Overview — just the title (from the shell) + description + meta */}
      <Reveal as="div" className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <p className="text-base text-[#0a0a0a]">
            Barrio Burger is a Medellín burger joint founded in 2017. As one
            of its creative directors, I led the brand&apos;s visual
            communication across social media and its participation in
            Burger Master, the city&apos;s most important burger event.
          </p>
          <p className="text-base text-[#0a0a0a]">
            I handled the full creative process: defining the visual
            direction of each campaign, creating key visuals (KVs),
            adapting them into social media content and event materials,
            and art directing photo and video shoots to keep the brand
            consistent across every touchpoint.
          </p>
        </div>
        <Meta meta={META} />
      </Reveal>

      {/* Gallery — each image pins full-screen, then the next one slides up over it */}
      <div className="relative">
        {PANELS.map((panel, i) => (
          <StackPanel key={panel.key} index={i} first={i === 0}>
            {panel.node}
          </StackPanel>
        ))}
      </div>
    </CaseStudyShell>
  );
}
