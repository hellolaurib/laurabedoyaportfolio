import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageTransition, pageTransitionTiming } from './motionConfig';
import Reveal from './Reveal';
import { CASE_STUDIES } from './caseStudiesData';
import imgClaude from './assets/figma/vwo-logo-40.png';
import imgMiro from './assets/figma/webflow.webp';
import imgFramer from './assets/figma/framer.png';
import imgFigmaIcon from './assets/figma/figma-icon.png';
import imgGoogleAnalytics from './assets/figma/unnamed1.jpg';
import imgClickUp from './assets/figma/clickup-emblem.png';
import imgLovable from './assets/figma/lovable-logo.png';
import imgGeminiAvatar from './assets/figma/gemini-avatar.png';
import imgEllipse33 from './assets/figma/ellipse-33.png';
import imgIconArrowRight from './assets/figma/icon-arrow-right.svg';
import imgIconMessage from './assets/figma/icon-message.svg';
import imgIconSend from './assets/figma/icon-send.svg';
import imgIconArrowUpRight from './assets/figma/icon-arrow-up-right.svg';
import videoHome from './assets/figma/gif-home.mp4';

const NAV_LINKS = ['About', 'Resume', 'LinkedIn', 'Dribble'];
const RESUME_URL = '/Laura_Bedoya_CV.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/laurablondono/';

const LOGOS = [
  { src: imgMiro, alt: 'Miro' },
  { src: imgFramer, alt: 'Framer' },
  { src: imgFigmaIcon, alt: 'Figma' },
  { src: imgClaude, alt: 'Claude' },
  { src: imgClickUp, alt: 'ClickUp' },
  { src: imgLovable, alt: 'Lovable' },
  { src: imgGoogleAnalytics, alt: 'Google Analytics' },
];

function AvatarWithStatus({ size = 'size-9', className = '' }) {
  return (
    <span className={`relative inline-flex shrink-0 ${size} ${className}`}>
      <img
        src={imgGeminiAvatar}
        alt="Laura Bedoya"
        className="size-full rounded-full object-cover"
      />
      <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-white bg-[#4ade80]" />
    </span>
  );
}

function PillButton({ children, icon, href = '#', target, rel, onClick }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-[rgba(20,20,20,0.2)] bg-white px-5 py-2.5 text-xs font-light text-[#141414] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors duration-300 ease-out hover:bg-[#141414] hover:text-white sm:text-sm"
    >
      {children}
      {icon && <img src={icon} alt="" className="size-3.5" />}
    </a>
  );
}

function CaseStudy({ heading, description, image, imageAlt, tags, to = '#', delay = 0 }) {
  return (
    <Reveal
      as="section"
      delay={delay}
      className="group flex flex-col items-center gap-8 rounded-[33px] border border-[rgba(20,20,20,0.14)] bg-white p-6 shadow-[0px_10px_30px_-20px_rgba(0,0,0,0.15)] sm:p-10 md:gap-12 lg:flex-row lg:p-14"
    >
      <div className="flex w-full flex-col items-start gap-5 lg:w-2/5">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(20,20,20,0.14)] px-3 py-1 text-[11px] font-light tracking-[0.02em] text-[#6b6b6b]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-sans text-2xl leading-tight tracking-[-0.48px] text-[#141414] sm:text-[29.6px] [&_em]:font-serif [&_em]:font-light [&_em]:italic">
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
          className="w-full scale-100 rounded-[16px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </Reveal>
  );
}

export default function Home() {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState({ status: 'idle', question: '', reply: '', error: '' });
  const [typedReply, setTypedReply] = useState('');

  useEffect(() => {
    if (chat.status !== 'done' || !chat.reply) {
      setTypedReply('');
      return;
    }

    setTypedReply('');
    let i = 0;
    const chunk = 2;
    const id = setInterval(() => {
      i += chunk;
      setTypedReply(chat.reply.slice(0, i));
      if (i >= chat.reply.length) clearInterval(id);
    }, 20);

    return () => clearInterval(id);
  }, [chat.status, chat.reply]);

  async function askLaura(text) {
    const trimmed = text.trim();
    if (!trimmed || chat.status === 'loading') return;

    setChat({ status: 'loading', question: trimmed, reply: '', error: '' });
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data) {
        throw new Error(data?.error || "Couldn't reach the assistant. Please try again.");
      }
      setChat({ status: 'done', question: trimmed, reply: data.reply, error: '' });
    } catch (err) {
      setChat({ status: 'error', question: trimmed, reply: '', error: err.message || 'Something went wrong.' });
    }
  }

  function handleAskSubmit(e) {
    e.preventDefault();
    askLaura(question);
    setQuestion('');
  }

  function handleExperienceClick(e) {
    e.preventDefault();
    setQuestion('');
    askLaura(
      "Give me a summary of your professional experience: roles, companies, years, and industries.",
    );
  }

  return (
    <motion.div
      className="relative bg-white text-[#141414]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransitionTiming}
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-24 top-0 h-[600px] w-[900px] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/4 top-[3900px] h-[500px] w-[900px] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(229,85,116,0.35), rgba(180,67,173,0.18) 40%, transparent 70%)",
          }}
        />
        <div className="absolute -left-24 -top-52 size-[130px]">
          <img alt="" className="size-full" src={imgEllipse33} />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-24 px-6 py-8 sm:px-10 sm:py-12 md:gap-32 lg:px-16">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <AvatarWithStatus />
            <span className="text-base font-light tracking-[-0.51px] text-[#141414]">
              Laura Bedoya
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-1 rounded-full border border-[rgba(224,224,224,0.6)] bg-[rgba(255,255,255,0.85)] px-2 py-2 text-sm font-light text-[rgba(20,20,20,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
            {NAV_LINKS.map((link) => {
              const isResume = link === 'Resume';
              const isLinkedIn = link === 'LinkedIn';
              const href = isResume ? RESUME_URL : isLinkedIn ? LINKEDIN_URL : '#';
              const external = isResume || isLinkedIn;
              return (
                <a
                  key={link}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-300 ease-out hover:bg-[rgba(20,20,20,0.06)]"
                >
                  {link}
                </a>
              );
            })}
          </nav>
        </header>

        {/* Hero */}
        <Reveal as="section" className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <p className="text-sm font-light tracking-[5px] text-[#6b6b6b]">
            HELLO, I&apos;M LAURA
          </p>
          <h1 className="max-w-3xl font-sans text-4xl leading-tight tracking-[-2.2px] text-black sm:text-5xl lg:text-[56px] [&_em]:font-serif [&_em]:font-light [&_em]:italic">
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
            <PillButton icon={imgIconArrowRight} href="#work">see my work</PillButton>
            <PillButton icon={imgIconMessage} onClick={handleExperienceClick}>
              experience
            </PillButton>
            <PillButton icon={imgIconMessage}>graphic design</PillButton>
            <PillButton icon={imgIconMessage} href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              resume
            </PillButton>
          </div>

          <form
            onSubmit={handleAskSubmit}
            className="flex w-full max-w-xl items-center gap-3 rounded-full border border-[#e0e0e0] bg-[rgba(255,255,255,0.85)] py-3 pl-5 pr-3 shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_-8px_rgba(0,0,0,0.08)] backdrop-blur-[6px]"
          >
            <span className="text-lg font-light text-[#6b6b6b]">›_</span>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Have questions? Ask Laura..."
              className="flex-1 border-none bg-transparent text-sm font-light text-[#6b6b6b] outline-none placeholder:text-[rgba(107,107,107,0.6)]"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={chat.status === 'loading'}
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e38484] transition-opacity duration-300 ease-out disabled:opacity-50"
            >
              <img
                src={imgIconSend}
                alt=""
                className={`size-4 -rotate-90 ${chat.status === 'loading' ? 'animate-pulse' : ''}`}
              />
            </button>
          </form>

          {chat.status !== 'idle' && (
            <div className="flex w-full max-w-xl flex-col gap-3">
              {chat.question && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <p className="max-w-[80%] rounded-2xl rounded-br-md bg-[#141414] px-4 py-2.5 text-sm font-light text-white">
                    {chat.question}
                  </p>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <AvatarWithStatus size="size-8" />
                <div className="max-w-[80%] rounded-2xl rounded-tl-md border border-[#e0e0e0] bg-[rgba(255,255,255,0.85)] px-4 py-3 text-sm font-light text-[#141414] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[6px]">
                  {chat.status === 'loading' && (
                    <div className="flex items-center gap-1.5 py-0.5">
                      <span className="size-1.5 rounded-full bg-[#6b6b6b] animate-typing-dot [animation-delay:0s]" />
                      <span className="size-1.5 rounded-full bg-[#6b6b6b] animate-typing-dot [animation-delay:0.15s]" />
                      <span className="size-1.5 rounded-full bg-[#6b6b6b] animate-typing-dot [animation-delay:0.3s]" />
                    </div>
                  )}
                  {chat.status === 'error' && (
                    <p className="text-[#e38484]">{chat.error}</p>
                  )}
                  {chat.status === 'done' && <p>{typedReply}</p>}
                </div>
              </motion.div>
            </div>
          )}
        </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full overflow-hidden rounded-[24px] lg:w-2/5"
          >
            <video
              src={videoHome}
              autoPlay
              loop
              muted
              playsInline
              className="block w-full"
            />
          </a>
        </Reveal>

        {/* Logo marquee */}
        <Reveal as="section" className="-mt-12 flex flex-col gap-6 md:-mt-20">
          <p className="font-caveat text-lg text-[#141414]">My stack</p>
          <div className="relative overflow-hidden pb-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={`${logo.alt}-${i}`} className="group/logo relative mr-16 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 ease-out group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                  />
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#141414] px-2 py-1 text-[11px] font-light text-white opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100">
                    {logo.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Case studies */}
        <section id="work" className="relative flex flex-col gap-10 pb-10">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.id}
              className="sticky"
              style={{ top: `${96 + i * 24}px`, zIndex: i + 1 }}
            >
              <CaseStudy {...study} delay={i * 0.05} />
            </div>
          ))}
        </section>

        {/* Select interfaces */}
        <Reveal as="section" className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl font-light italic tracking-[-2.2px] text-black sm:text-[44px]">
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
          <p className="flex flex-wrap items-end justify-center gap-3 font-serif text-2xl font-light italic tracking-[-2.2px] text-[#6e6e6e] sm:text-3xl">
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
