import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageTransition, pageTransitionTiming } from './motionConfig';
import Reveal from './Reveal';
import { CASE_STUDIES } from './caseStudiesData';
import imgVwoLogo from './assets/figma/vwo-logo-40.png';
import imgWebflow from './assets/figma/webflow.webp';
import imgFramer from './assets/figma/framer.png';
import imgFigmaIcon from './assets/figma/figma-icon.png';
import imgClientLogo from './assets/figma/unnamed1.jpg';
import imgClickUp from './assets/figma/clickup-emblem.png';
import imgLovable from './assets/figma/lovable-logo.png';
import imgGeminiAvatar from './assets/figma/gemini-avatar.png';
import imgEllipse33 from './assets/figma/ellipse-33.png';
import imgIconArrowRight from './assets/figma/icon-arrow-right.svg';
import imgIconMessage from './assets/figma/icon-message.svg';
import imgIconSend from './assets/figma/icon-send.svg';
import imgIconArrowUpRight from './assets/figma/icon-arrow-up-right.svg';
import imgLinkedinBriefcase from './assets/figma/vector-linkedin-1.svg';
import imgLinkedinBuilding from './assets/figma/vector-linkedin-2.svg';
import imgLinkedinDot from './assets/figma/vector-linkedin-3.svg';
import imgMailBubble from './assets/figma/vector-mail-1.svg';
import imgMailCheck from './assets/figma/vector-mail-2.svg';
import imgMailLine from './assets/figma/vector-mail-3.svg';

const NAV_LINKS = ['About', 'Resume', 'LinkedIn', 'Dribble'];

const LOGOS = [
  { src: imgWebflow, alt: 'Webflow' },
  { src: imgFramer, alt: 'Framer' },
  { src: imgFigmaIcon, alt: 'Figma' },
  { src: imgVwoLogo, alt: 'VWO' },
  { src: imgClickUp, alt: 'ClickUp' },
  { src: imgLovable, alt: 'Lovable' },
  { src: imgClientLogo, alt: 'Client logo' },
];

function PillButton({ children, icon, href = '#' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-[rgba(20,20,20,0.2)] bg-white px-5 py-2.5 text-xs font-light text-[#141414] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors duration-300 ease-out hover:bg-[#141414] hover:text-white sm:text-sm"
    >
      {children}
      {icon && <img src={icon} alt="" className="size-3.5" />}
    </a>
  );
}

function CaseStudy({ heading, description, image, imageAlt, reverse, to = '#', delay = 0 }) {
  return (
    <Reveal
      as="section"
      delay={delay}
      className={`group flex flex-col items-center gap-8 rounded-[33px] border border-[rgba(20,20,20,0.14)] p-6 sm:p-10 md:gap-12 lg:flex-row lg:p-14 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="flex w-full flex-col items-start gap-5 lg:w-2/5">
        <h3 className="font-sans text-2xl leading-tight tracking-[-0.48px] text-[#141414] sm:text-[29.6px] [&_em]:font-serif [&_em]:font-light [&_em]:not-italic [&_em]:italic">
          {heading}
        </h3>
        <p className="text-sm leading-relaxed font-light text-[#6b6b6b] sm:text-base">
          {description}
        </p>
        <Link
          to={to}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#141414] to-[rgba(20,20,20,0.9)] py-2.5 pl-5 pr-2.5 text-[11px] font-light text-[#fafafa] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          Open case study
          <span className="flex size-5 items-center justify-center rounded-full bg-[rgba(250,250,250,0.15)]">
            <img src={imgIconArrowUpRight} alt="" className="size-3" />
          </span>
        </Link>
      </div>
      <div className="w-full overflow-hidden rounded-[16px] lg:w-3/5">
        <img
          src={image}
          alt={imageAlt}
          className="w-full scale-100 rounded-[16px] object-cover shadow-[0px_20px_40px_-20px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <motion.div
      className="relative overflow-hidden bg-white text-[#141414]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransitionTiming}
    >
      {/* decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[600px] w-[900px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/4 top-[3900px] h-[500px] w-[900px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -left-24 -top-52 size-[130px]">
        <img alt="" className="size-full" src={imgEllipse33} />
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-24 px-6 py-8 sm:px-10 sm:py-12 md:gap-32 lg:px-16">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={imgGeminiAvatar}
              alt="Laura Bedoya"
              className="size-9 rounded-full object-cover"
            />
            <span className="text-base font-light tracking-[-0.51px] text-[#141414]">
              Laura Bedoya
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-1 rounded-full border border-[rgba(224,224,224,0.6)] bg-[rgba(255,255,255,0.85)] px-2 py-2 text-sm font-light text-[rgba(20,20,20,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-300 ease-out hover:bg-[rgba(20,20,20,0.06)]"
              >
                {link}
              </a>
            ))}
          </nav>
        </header>

        {/* Hero */}
        <Reveal as="section" className="flex flex-col gap-8">
          <p className="text-sm font-light tracking-[5px] text-[#6b6b6b]">
            HELLO, I&apos;M LAURA
          </p>
          <h1 className="max-w-3xl font-sans text-4xl leading-tight tracking-[-2.2px] text-black sm:text-5xl lg:text-[56px] [&_em]:font-serif [&_em]:font-light [&_em]:not-italic [&_em]:italic">
            I design products that <em>feel</em> simple, even when
            they&apos;re not.
          </h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-black sm:text-xl">
            UI/UX Designer with 4+ years of experience leading end-to-end
            design across different industries. I combine research, strategy,
            and AI to transform complexity into intuitive, user-centered
            experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <PillButton icon={imgIconArrowRight}>see my work</PillButton>
            <PillButton>Graphic Design?</PillButton>
            <PillButton icon={imgIconMessage}>wanna chat?</PillButton>
            <PillButton icon={imgIconMessage}>resume</PillButton>
            <PillButton icon={imgIconMessage}>linkedin</PillButton>
          </div>

          <form className="flex w-full max-w-xl items-center gap-3 rounded-full border border-[#e0e0e0] bg-[rgba(255,255,255,0.85)] py-3 pl-5 pr-3 shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_-8px_rgba(0,0,0,0.08)] backdrop-blur-[6px]">
            <span className="text-lg font-light text-[#6b6b6b]">›_</span>
            <input
              type="text"
              placeholder="Have questions? Ask Laura..."
              className="flex-1 border-none bg-transparent text-sm font-light text-[#6b6b6b] outline-none placeholder:text-[rgba(107,107,107,0.6)]"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e38484]"
            >
              <img
                src={imgIconSend}
                alt=""
                className="size-4 -rotate-90"
              />
            </button>
          </form>

          {/* floating contact badges */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="w-full max-w-[260px] rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(10,102,194,0.85)] p-4 text-white shadow-lg backdrop-blur-[6px]">
              <p className="text-[9px] font-light uppercase tracking-[1px] text-[rgba(255,255,255,0.6)]">
                find me online
              </p>
              <div className="mt-2 flex items-center gap-2">
                <img src={imgLinkedinBriefcase} alt="" className="size-4" />
                <img src={imgLinkedinBuilding} alt="" className="size-4" />
                <img src={imgLinkedinDot} alt="" className="size-4" />
                <span className="text-sm font-light">LinkedIn</span>
              </div>
              <p className="mt-1 text-[10.6px] font-light text-[rgba(255,255,255,0.7)]">
                /in/laurablondono
              </p>
            </div>

            <div className="w-full max-w-[260px] rounded-xl border border-[rgba(255,255,255,0.15)] bg-[rgba(148,18,140,0.85)] p-4 text-white shadow-lg backdrop-blur-[6px]">
              <p className="text-[9.4px] font-light uppercase tracking-[1px] text-[rgba(250,250,250,0.5)]">
                open to work
              </p>
              <div className="mt-2 flex items-center gap-2">
                <img src={imgMailBubble} alt="" className="size-4" />
                <img src={imgMailBubble} alt="" className="size-4" />
                <img src={imgMailCheck} alt="" className="size-4" />
                <img src={imgMailLine} alt="" className="size-4" />
                <span className="text-sm font-light">Mail me</span>
              </div>
              <p className="mt-1 text-[10.3px] font-light text-[rgba(250,250,250,0.6)]">
                laura.bedoya@gmail.com
              </p>
            </div>
          </div>
        </Reveal>

        {/* Logo marquee */}
        <Reveal as="section" className="flex flex-col gap-6">
          <p className="font-caveat text-lg text-[#141414]">My stack</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Case studies */}
        <section className="flex flex-col gap-10">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudy key={study.id} {...study} reverse={i % 2 === 1} delay={i * 0.05} />
          ))}
        </section>

        {/* Select interfaces */}
        <Reveal as="section" className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl italic tracking-[-2.2px] text-black sm:text-[44px]">
            Select interfaces
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[287/309] rounded-[24px] border border-[#141414] transition-colors duration-300 ease-out hover:border-[rgba(20,20,20,0.4)]"
              />
            ))}
          </div>
        </Reveal>

        {/* Contact */}
        <Reveal as="section" className="flex flex-col items-center gap-8 py-12 text-center">
          <p className="flex flex-wrap items-end justify-center gap-3 font-serif text-2xl italic tracking-[-2.2px] text-[#6e6e6e] sm:text-3xl">
            <span className="text-4xl not-italic sm:text-[44px]">💌</span>
            <span>
              Let&apos;s connect.{' '}
              <span className="font-sans not-italic">
                I&apos;m always down for a chat.
              </span>
            </span>
          </p>
        </Reveal>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-3 border-t border-[rgba(20,20,20,0.1)] py-8 text-center text-[10.7px] font-light text-[#6b6b6b] sm:flex-row sm:justify-between sm:text-left">
          <span className="tracking-[-0.54px] text-[#696969]">
            ©2026 Laura Bedoya
          </span>
          <span>Built with love and Claude Code · 2026</span>
        </footer>
      </div>
    </motion.div>
  );
}
