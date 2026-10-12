import CaseStudyShell, { Meta } from './CaseStudyShell';
import Reveal from './Reveal';
import StackPanel from './StackPanel';
import ShevaWebMockup from './ShevaWebMockup';
import imgHero from './assets/figma/sheva-hero.jpg';
import imgLogo from './assets/figma/vd-sheva-logo.svg';
import imgLogoCard from './assets/figma/sheva-logo-card.svg';
import imgMonogram from './assets/figma/sheva-monogram.svg';
import imgPost1 from './assets/figma/sheva-post-1.png';
import imgPost2 from './assets/figma/sheva-post-2.png';
import imgPost3 from './assets/figma/sheva-post-3.png';
import iconLike from './assets/figma/sheva-icon-like.svg';
import iconComment from './assets/figma/sheva-icon-comment.svg';
import iconShare from './assets/figma/sheva-icon-share.svg';
import imgBillboard from './assets/figma/sheva-billboard.jpg';
import imgProducts from './assets/figma/sheva-products.jpg';
import imgTote from './assets/figma/sheva-tote.jpg';
import imgStationery from './assets/figma/sheva-stationery.jpg';
import imgSocialBg from './assets/figma/sheva-social-bg.jpg';
import imgSocialGrid from './assets/figma/sheva-social-grid.jpg';
import imgModel from './assets/figma/sheva-model.jpg';
import imgSignage from './assets/figma/sheva-signage.jpg';

const META = [
  { label: 'ROLE', value: 'Visual Designer' },
  { label: 'YEAR', value: '2026' },
  { label: 'SKILLS', value: ['Web Design', 'Social Media', 'Branding', 'Packaging'] },
];

const POSTS = [
  { img: imgPost1, alt: 'Sheva Essentials social media post' },
  { img: imgPost2, alt: 'Sheva Top Halter product post' },
  { img: imgPost3, alt: 'Sheva The Soft Edit social media post' },
];

const brandLabel = 'font-montserrat text-[clamp(8px,1.05vw,15px)] max-sm:text-[9px] font-medium tracking-[0.15em] text-white';

// Brand taglines that frame the beige logo tile, top and bottom.
function TaglineRow({ className }) {
  return (
    <div className={`absolute inset-x-0 flex justify-between whitespace-nowrap pl-[6.4%] pr-[7.5%] ${brandLabel} ${className}`}>
      <span>LUXURY CLOTHES</span>
      <span>FASHION BRAND</span>
      <span>LUXURY GIRLS</span>
    </div>
  );
}

const PANELS_BEFORE_WEB = [
  {
    key: 'hero',
    node: (
      <>
        <img src={imgHero} alt="Sheva campaign key visual" className="size-full object-cover" />
        <img src={imgLogo} alt="Sheva" className="absolute left-1/2 top-[58%] w-[25.6%] -translate-x-1/2 -translate-y-1/2" />
      </>
    ),
  },
  {
    key: 'posts',
    node: (
      <div className="flex size-full flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-[2.8vw]">
        {POSTS.map((post) => (
          <div key={post.alt} className="w-[24vh] max-w-[391px] sm:w-[27.15vw]">
            <img src={post.img} alt={post.alt} className="w-full" />
            <div className="mt-[6%] flex items-center gap-[11px] pl-[3.6%]">
              <img src={iconLike} alt="" className="h-[18.61px] w-[21.06px]" />
              <img src={iconComment} alt="" className="h-[18.62px] w-[18.63px]" />
              <img src={iconShare} alt="" className="h-[18.62px] w-[17.73px]" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  { key: 'billboard', node: <img src={imgBillboard} alt="Sheva billboard on the street" className="size-full object-cover" /> },
  {
    key: 'products',
    node: (
      <div className="flex size-full items-center justify-center">
        <img src={imgProducts} alt="Sheva product line-up" className="w-[82.6%] object-contain" />
      </div>
    ),
  },
  {
    key: 'tote',
    node: (
      <div className="grid size-full grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="relative bg-[#b7ab8d]">
          <TaglineRow className="top-[8.6%]" />
          <img src={imgLogo} alt="Sheva" className="absolute left-1/2 top-1/2 w-[51.2%] -translate-x-1/2 -translate-y-1/2" />
          <TaglineRow className="bottom-[4.2%]" />
        </div>
        <img src={imgTote} alt="Sheva branded tote bag" className="size-full object-cover" />
      </div>
    ),
  },
  { key: 'stationery', node: <img src={imgStationery} alt="Sheva brand stationery" className="size-full object-cover" /> },
  {
    key: 'social',
    node: (
      <>
        <img src={imgSocialBg} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={imgSocialGrid} alt="Sheva Instagram feed" className="h-[82.5%] max-w-[90%] object-contain" />
        </div>
        <p className={`absolute bottom-[4%] right-[20%] [writing-mode:vertical-rl] ${brandLabel}`}>/SOCIAL MEDIA DESIGN</p>
      </>
    ),
  },
];

const PANELS_AFTER_WEB = [
  {
    key: 'cards',
    node: (
      <div className="grid size-full grid-rows-[1fr_1.3fr] sm:grid-cols-[703fr_738fr] sm:grid-rows-1">
        <img src={imgModel} alt="Sheva campaign portrait" className="size-full object-cover" />
        <div className="flex flex-col items-center justify-center gap-[3.7vh] bg-[#f5f5f0]">
          <div className="relative aspect-[518/271] w-[70%] rounded-[27px] bg-[#b7ab8d] shadow-[0px_4px_10.3px_0px_rgba(0,0,0,0.25)]">
            <img src={imgLogoCard} alt="Sheva" className="absolute left-[16%] top-[36.9%] w-[68%]" />
            <span className={`absolute left-[35.9%] top-[64%] whitespace-nowrap ${brandLabel}`}>FASHION BRAND</span>
          </div>
          <div className="flex aspect-[518/271] w-[70%] items-center justify-center rounded-[27px] bg-white shadow-[0px_4px_10.3px_0px_rgba(0,0,0,0.25)]">
            <img src={imgMonogram} alt="Sheva monogram" className="w-[36.7%]" />
          </div>
        </div>
      </div>
    ),
  },
  { key: 'signage', node: <img src={imgSignage} alt="Sheva storefront signage" className="size-full object-cover" /> },
];

function PanelStack({ panels }) {
  return (
    <div className="relative">
      {panels.map((panel, i) => (
        <StackPanel key={panel.key} index={i} first={i === 0}>
          {panel.node}
        </StackPanel>
      ))}
    </div>
  );
}

export default function CaseStudySheva() {
  return (
    <CaseStudyShell caseStudyId="sheva" title="Sheva">
      {/* Overview — just the title (from the shell) + description + meta */}
      <Reveal as="div" className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <p className="text-base text-[#0a0a0a]">
            Sheva is a luxury fashion brand that brings together high-end
            sportswear and refined, dressier pieces. In 2026, I worked with
            the brand to develop its web and social media strategy,
            translating its identity into digital channels while staying true
            to its essence.
          </p>
          <p className="text-base text-[#0a0a0a]">
            I handled the process from strategy to execution: analyzing the
            brand&apos;s existing identity, defining the visual and content
            direction for each channel, shaping the website strategy and
            creating social media content that extended the brand&apos;s
            premium aesthetic into new formats. The goal was to keep Sheva
            consistent and recognizable across every touchpoint while giving
            its visual language room to grow online.
          </p>
        </div>
        <Meta meta={META} />
      </Reveal>

      {/* Gallery — each image pins full-screen, then the next one slides up over it */}
      <PanelStack panels={PANELS_BEFORE_WEB} />

      {/* Website — the Shopify storefront inside a browser window */}
      <Reveal as="section" className="relative left-1/2 w-screen -translate-x-1/2 bg-white px-4 py-16 sm:px-10 sm:py-24">
        <ShevaWebMockup />
      </Reveal>

      <PanelStack panels={PANELS_AFTER_WEB} />
    </CaseStudyShell>
  );
}
