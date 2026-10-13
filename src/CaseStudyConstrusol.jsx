import CaseStudyShell, { Meta } from './CaseStudyShell';
import Reveal from './Reveal';
import StackPanel from './StackPanel';
import imgHero from './assets/figma/vd-construsol-bg.jpg';
import imgLogo from './assets/figma/vd-construsol-logo.svg';
import imgLogoSmall from './assets/figma/construsol-logo-small.svg';
import imgBags from './assets/figma/construsol-bags.jpg';
import imgTshirtCap from './assets/figma/construsol-tshirt-cap.jpg';
import imgLanyards from './assets/figma/construsol-lanyards.jpg';
import imgSite from './assets/figma/construsol-site.jpg';
import imgBox from './assets/figma/construsol-box.jpg';
import imgTote from './assets/figma/construsol-tote.jpg';
import imgTablet from './assets/figma/construsol-tablet.jpg';
import imgVest from './assets/figma/construsol-vest.jpg';
import imgBrochure from './assets/figma/construsol-brochure.jpg';

const META = [
  { label: 'ROLE', value: 'Visual Designer' },
  { label: 'SKILLS', value: ['Branding', 'Social Media', 'Packaging', 'Merchandising'] },
];

// The hero photo is a zoomed crop in Figma (same as the Visual Designer
// banner). This box keeps the 1499:734 frame covering the whole viewport so
// the crop percentages still line up.
const HERO_RATIO = 1499 / 734;

const PANELS = [
  {
    key: 'hero',
    node: (
      <>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{ width: `max(100vw, ${HERO_RATIO * 100}vh)`, height: `max(100vh, ${100 / HERO_RATIO}vw)` }}
        >
          <img
            src={imgHero}
            alt="Construction worker laying brick at sunset"
            className="absolute left-[-8.33%] top-[-27.79%] h-[192.64%] w-[168.43%] max-w-none"
          />
        </div>
        <img src={imgLogo} alt="Construsol" className="absolute left-1/2 top-[53%] w-[44.8%] -translate-x-1/2 -translate-y-1/2 max-sm:w-[80%]" />
      </>
    ),
  },
  {
    key: 'bags',
    node: (
      <div className="flex size-full items-center justify-center bg-[#b55600]">
        <img src={imgBags} alt="Construsol branded shopping bags" className="max-h-[80%] max-w-[82%] object-contain" />
      </div>
    ),
  },
  {
    key: 'tshirt-cap',
    node: <img src={imgTshirtCap} alt="Construsol t-shirt and cap" className="size-full object-contain" />,
  },
  { key: 'lanyards', node: <img src={imgLanyards} alt="Construsol employee ID cards and lanyards" className="size-full object-cover" /> },
  {
    key: 'site-box',
    node: (
      <div className="grid size-full grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="relative overflow-hidden">
          <img src={imgSite} alt="Construsol construction site at sunset" className="size-full object-cover object-[61%_51%]" />
          <img src={imgLogoSmall} alt="Construsol" className="absolute left-[2.2%] top-[4.9%] w-[29%] max-sm:w-[40%]" />
        </div>
        <img src={imgBox} alt="Construsol branded shipping box" className="size-full object-cover" />
      </div>
    ),
  },
  { key: 'tote', node: <img src={imgTote} alt="Construsol tote bag" className="size-full object-cover" /> },
  { key: 'tablet', node: <img src={imgTablet} alt="Construsol digital piece shown on a tablet" className="size-full object-cover max-sm:object-[85%_50%]" /> },
  {
    key: 'vest',
    node: (
      <div className="grid size-full sm:grid-cols-[787fr_653fr]">
        <img src={imgVest} alt="Construsol branded safety vest and hard hat" className="size-full object-cover" />
      </div>
    ),
  },
  { key: 'brochure', node: <img src={imgBrochure} alt="Construsol corporate brochure" className="size-full object-cover" /> },
];

export default function CaseStudyConstrusol() {
  return (
    <CaseStudyShell caseStudyId="construsol" title="Construsol">
      {/* Overview — just the title (from the shell) + description + meta */}
      <Reveal as="div" className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <p className="text-base text-[#0a0a0a]">
            Construsol is a leading construction company in Medellín. I
            supported the brand by developing its full brand extension based
            on the existing branding guidelines, ensuring its identity
            translated consistently across new applications.
          </p>
          <p className="text-base text-[#0a0a0a]">
            My work included designing corporate materials and creating a
            selection of pieces for digital channels, adapting the
            brand&apos;s visual language to each format while keeping it
            cohesive and recognizable at every touchpoint.
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
