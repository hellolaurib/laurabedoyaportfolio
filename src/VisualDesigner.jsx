import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageTransition, pageTransitionTiming } from './motionConfig';
import Reveal from './Reveal';
import imgGeminiAvatar from './assets/figma/gemini-avatar.png';
import imgEllipse33 from './assets/figma/ellipse-33.png';
import videoConnect from './assets/figma/video-connect.mp4';
import imgBarrioBg from './assets/figma/vd-barrio-bg.jpg';
import imgBarrioLogo from './assets/figma/barrio-signage-mockup.png';
import imgShevaBg from './assets/figma/vd-sheva-bg.jpg';
import imgShevaLogo from './assets/figma/vd-sheva-logo.svg';
import imgConstrusolBg from './assets/figma/vd-construsol-bg.jpg';
import imgConstrusolLogo from './assets/figma/vd-construsol-logo.svg';
import imgClaudiaBg from './assets/figma/vd-claudia-bg.jpg';
import imgClaudiaMonogram from './assets/figma/vd-claudia-monogram.svg';
import imgClaudiaWordLeft from './assets/figma/vd-claudia-word-left.svg';
import imgClaudiaWordRight from './assets/figma/vd-claudia-word-right.svg';

const NAV_LINKS = ['About', 'Visual Designer', 'Resume', 'LinkedIn'];
const RESUME_URL = '/Laura_Bedoya_CV.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/laurablondono/';
const CONTACT_EMAIL = 'laura.bedoyalon@gmail.com';

const SKILLS = ['Mail Designer', 'Branding', 'Social media', 'Packaging', 'Web design', 'Paid Media', 'Animation'];

// Claudia Gaviria's logo is three separate vectors in Figma (monogram + two
// halves of the wordmark), placed with the same percentage insets here.
function ClaudiaLogo() {
  return (
    <div className="relative aspect-[632.69/367.37] w-full">
      <div className="absolute inset-[15.26%_34.6%_46.6%_34.41%]"><img src={imgClaudiaMonogram} alt="" className="block size-full" /></div>
      <div className="absolute inset-[66.68%_50.85%_24.16%_14.77%]"><img src={imgClaudiaWordLeft} alt="" className="block size-full" /></div>
      <div className="absolute inset-[66.68%_14.96%_24.16%_53.37%]"><img src={imgClaudiaWordRight} alt="" className="block size-full" /></div>
    </div>
  );
}

// Each brand is a full-bleed photo with its logo centered on top. Crops
// (imgClassName) mirror the Figma image fills.
const BRANDS = [
  {
    name: 'Barrio Burger',
    to: '/visual-design/barrio',
    bg: imgBarrioBg,
    imgClassName: 'h-[164.93%] w-[122.64%] left-[-11.32%] top-[-64.93%]',
    overlay: true,
    logo: <img src={imgBarrioLogo} alt="Barrio Burger" className="w-full" />,
    logoWidth: 'w-[48%]',
  },
  {
    name: 'Sheva',
    bg: imgShevaBg,
    imgClassName: 'h-[306.08%] w-full left-0 top-[-68.65%]',
    logo: <img src={imgShevaLogo} alt="Sheva" className="w-full" />,
    logoWidth: 'w-[24.6%]',
  },
  {
    name: 'Construsol',
    bg: imgConstrusolBg,
    imgClassName: 'h-[192.64%] w-[168.43%] left-[-8.33%] top-[-27.79%]',
    logo: <img src={imgConstrusolLogo} alt="Construsol" className="w-full" />,
    logoWidth: 'w-[44.8%]',
  },
  {
    name: 'Claudia Gaviria',
    bg: imgClaudiaBg,
    imgClassName: 'h-[235.46%] w-[172.23%] left-[-10.43%] top-[-59.95%]',
    logo: <ClaudiaLogo />,
    logoWidth: 'w-[42.2%]',
  },
];

function SkillPills() {
  return (
    <div className="flex flex-wrap items-center gap-[13px]">
      {SKILLS.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-[rgba(20,20,20,0.2)] bg-white px-[15px] py-2.5 text-xs font-light text-[#141414] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function BrandBanner({ name, to, bg, imgClassName, overlay, logo, logoWidth }) {
  const content = (
    <>
      <img
        src={bg}
        alt=""
        className={`absolute max-w-none transition-transform duration-500 ease-out group-hover/brand:scale-[1.03] ${imgClassName}`}
      />
      {overlay && <div className="absolute inset-0 bg-[rgba(0,0,0,0.49)]" />}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={logoWidth}>{logo}</div>
      </div>
      {!to && (
        <span className="pointer-events-none absolute left-1/2 top-[85%] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e38484] px-4 py-1.5 text-[11px] font-light text-white opacity-0 transition-opacity duration-200 group-hover/brand:opacity-100">
          Coming soon ✦
        </span>
      )}
    </>
  );

  const className = 'group/brand relative block aspect-[1499/734] w-full overflow-hidden';
  return to ? (
    <Link to={to} className={className} aria-label={`${name} project`}>
      {content}
    </Link>
  ) : (
    <div className={`${className} cursor-default`} aria-label={name}>
      {content}
    </div>
  );
}

export default function VisualDesigner() {
  return (
    <motion.div
      className="relative overflow-x-clip bg-white text-[#141414]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransitionTiming}
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-64 top-40 h-[454px] w-[728px] opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[-200px] top-[300px] h-[454px] w-[728px] opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)',
          }}
        />
        <div className="absolute -left-24 -top-52 size-[130px]">
          <img alt="" className="size-full" src={imgEllipse33} />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-24 px-6 py-8 sm:px-10 sm:py-12 md:gap-32 lg:px-16">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={imgGeminiAvatar} alt="Laura Bedoya" className="size-9 rounded-full object-cover" />
            <span className="text-base font-light tracking-[-0.51px] text-[#141414]">Laura Bedoya</span>
          </Link>
          <nav className="flex flex-nowrap items-center gap-1 overflow-x-auto rounded-full border border-[rgba(224,224,224,0.6)] bg-[rgba(255,255,255,0.85)] px-2 py-2 text-sm font-light text-[rgba(20,20,20,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((link) => {
              const linkClass = `shrink-0 whitespace-nowrap rounded-full px-4 py-2 transition-colors duration-300 ease-out hover:bg-[rgba(20,20,20,0.06)] ${link === 'Visual Designer' ? 'bg-[rgba(20,20,20,0.06)] text-[#141414]' : ''}`;
              if (link === 'About') return <Link key={link} to="/" className={linkClass}>{link}</Link>;
              if (link === 'Visual Designer') return <Link key={link} to="/visual-design" className={linkClass} aria-current="page">{link}</Link>;
              const href = link === 'Resume' ? RESUME_URL : LINKEDIN_URL;
              return (
                <a key={link} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link}
                </a>
              );
            })}
          </nav>
        </header>

        {/* Intro */}
        <Reveal as="section" className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <p className="shrink-0 text-sm font-light tracking-[5px] text-[#6b6b6b] lg:w-[300px] lg:pt-3">
            HELLO, I&apos;M LAURA
          </p>
          <div className="flex flex-col gap-10">
            <h1 className="max-w-[895px] font-sans text-2xl leading-snug tracking-[-1.2px] text-black sm:text-3xl lg:text-[35px] lg:leading-[52.8px] lg:tracking-[-2.2px] [&_em]:font-serif [&_em]:font-light [&_em]:italic">
              I&apos;m a visual designer with 4+ years of experience in graphic
              and visual design. I&apos;ve led <em>creative direction</em> for
              brands across social media, email, and marketing, shaping their
              visual identity and content. I love turning ideas into cohesive
              visuals, and I love shaping ideas into cohesive, eye-catching
              visuals, and I&apos;m always exploring new tools, AI included, to
              keep growing as a designer.
            </h1>
            <SkillPills />
          </div>
        </Reveal>

        {/* Brands — full-bleed, stacked edge to edge */}
        <section className="relative left-1/2 flex w-screen -translate-x-1/2 flex-col">
          {BRANDS.map((brand) => (
            <BrandBanner key={brand.name} {...brand} />
          ))}
        </section>

        <Reveal as="div" className="flex justify-center">
          <SkillPills />
        </Reveal>

        {/* Contact */}
        <Reveal as="section" className="flex flex-col items-center gap-3 py-4 text-center">
          <a href={`mailto:${CONTACT_EMAIL}`} className="block w-full max-w-xs sm:max-w-sm">
            <video src={videoConnect} autoPlay loop muted playsInline className="-my-10 w-full rounded-[24px]" />
          </a>
          <p className="flex flex-wrap items-end justify-center gap-3 font-serif text-2xl font-light italic tracking-[-2.2px] text-[#6e6e6e] sm:text-3xl">
            <span className="text-4xl not-italic sm:text-[44px]">💌</span>
            <span>
              Let&apos;s connect.{' '}
              <span className="font-sans not-italic">I&apos;m always down for a chat.</span>
            </span>
          </p>
        </Reveal>

        {/* Footer */}
        <footer className="-mt-16 flex flex-col items-center gap-3 border-t border-[rgba(20,20,20,0.1)] py-8 text-center text-[10.7px] font-light text-[#6b6b6b] sm:flex-row sm:justify-between sm:text-left md:-mt-24">
          <span className="tracking-[-0.54px] text-[#696969]">©2026 Laura Bedoya</span>
          <span>Built with love and Claude Code · 2026</span>
        </footer>
      </div>
    </motion.div>
  );
}
