import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageTransition, pageTransitionTiming } from './motionConfig';
import Reveal from './Reveal';
import { CASE_STUDIES } from './caseStudiesData';
import imgGeminiAvatar from './assets/figma/gemini-avatar.png';
import imgEllipse33 from './assets/figma/ellipse-33.png';

const NAV_LINKS = ['About', 'Resume', 'LinkedIn', 'Dribble'];

export function Eyebrow({ children }) {
  return (
    <p className="text-xs font-light tracking-[2.4px] text-[#757575]">{children}</p>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-sans text-2xl leading-tight text-black sm:text-[30px]">
      {children}
    </h2>
  );
}

export function Divider() {
  return <hr className="w-full border-t border-[rgba(20,20,20,0.1)]" />;
}

export function Section({ id, eyebrow, heading, children }) {
  return (
    <Reveal as="section" id={id} className="flex scroll-mt-24 flex-col gap-6 sm:gap-[27px]">
      <div className="flex flex-col items-start gap-5 sm:gap-[25px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {children}
      </div>
    </Reveal>
  );
}

export function PromptCallout({ label, prompt }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] px-6 py-5">
      <p className="text-[15.3px] font-medium text-[#141414]">{label}</p>
      <p className="text-[13.2px] font-light italic text-[#6b6b6b]">{prompt}</p>
    </div>
  );
}

export default function CaseStudyShell({ caseStudyId, title, meta, sideNav, children }) {
  const moreCaseStudies = CASE_STUDIES.filter((s) => s.id !== caseStudyId).slice(0, 2);

  return (
    <motion.div
      className="relative bg-white text-[#141414]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransitionTiming}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 -top-52 size-[130px]">
          <img alt="" className="size-full" src={imgEllipse33} />
        </div>
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
                className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-300 ease-out hover:bg-[rgba(20,20,20,0.06)]"
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
              className="text-base text-[#858585] transition-colors duration-300 ease-out hover:text-[#141414]"
            >
              {'<- Back'}
            </Link>
            <nav className="flex flex-row flex-wrap gap-x-5 gap-y-3 text-base text-[#858585] lg:flex-col lg:gap-[14px]">
              {sideNav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-left transition-colors duration-300 ease-out hover:text-[#141414]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:min-w-0 lg:flex-1">
            {/* Title + meta */}
            <Reveal as="div" className="flex flex-col gap-10">
              <h1 className="max-w-3xl font-sans text-3xl leading-tight tracking-[-0.48px] text-[#141414] sm:text-[43px] sm:leading-[47px]">
                {title}
              </h1>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {meta.map((item) => (
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
            </Reveal>

            {children}

            {/* More case studies */}
            <Reveal as="div" className="flex flex-col gap-6">
              <Eyebrow>MORE CASE STUDIES</Eyebrow>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {moreCaseStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={study.to}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[556/347.5] w-full overflow-hidden bg-[#f0f0f0]">
                      <img
                        src={study.image}
                        alt={study.imageAlt}
                        className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Footer */}
            <footer className="flex flex-col items-center gap-3 border-t border-[rgba(20,20,20,0.1)] py-8 text-center text-[10.7px] font-light text-[#6b6b6b] sm:flex-row sm:justify-between sm:text-left">
              <span className="tracking-[-0.54px] text-[#696969]">
                Built with love and Claude Code · 2026
              </span>
              <Link to="/" className="transition-colors duration-300 ease-out hover:text-[#141414]">
                Back to deck →
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
