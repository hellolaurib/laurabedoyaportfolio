import imgMacbookMockup1 from './assets/figma/macbook-mockup-1.png';
import imgMacbookMockup2 from './assets/figma/macbook-mockup-2.png';
import imgMacbookMockup3 from './assets/figma/macbook-mockup-3.png';
import imgMacbookMockup4 from './assets/figma/macbook-mockup-4.png';

export const CASE_STUDIES = [
  {
    id: 'koronet',
    heading: (
      <>
        From complexity <em>to conversion:</em> Redesigning koronet&apos;s
        website
      </>
    ),
    description:
      'Website redesign for Koronet, a B2B ecosystem for the floral industry. Over 4 months, I led the strategy and design to improve the user experience and brand positioning.',
    image: imgMacbookMockup1,
    imageAlt: 'Koronet website shown on a MacBook',
    to: '/case-studies/koronet',
  },
  {
    id: 'imehxs-mega-menu',
    heading: (
      <>
        A mega menu: <em>built fast, built right.</em>
      </>
    ),
    description:
      "A two-week redesign of IMEHXS's navigation architecture, using AI to accelerate research and prototyping. The result: a user-centered mega menu organized by role, company size, and business need.",
    image: imgMacbookMockup4,
    imageAlt: 'IMEHXS mega menu shown on a MacBook',
    to: '/case-studies/imehxs-mega-menu',
  },
  {
    id: 'muuktest',
    heading: (
      <>
        Redesigning <em>for credibility:</em> When a great product deserves a
        better site
      </>
    ),
    description:
      'Redesign of the MuukTest website an AI-powered QA automation platform. The goal: a visually competitive presence in the tech sector, clearer navigation, and a more structured experience built to drive leads.',
    image: imgMacbookMockup2,
    imageAlt: 'MuukTest website shown on a MacBook',
    to: '/case-studies/muuktest',
  },
  {
    id: 'reclaimed-wood',
    heading: (
      <>
        Structure sets the stage. Design <em>steals the show.</em>
      </>
    ),
    description:
      '28 years of expertise in reclaimed wood and sustainable materials. Clear navigation, stronger visual storytelling, and an experience built to match the weight of their reputation.',
    image: imgMacbookMockup3,
    imageAlt: 'Reclaimed wood company website shown on a MacBook',
    to: '/case-studies/reclaimed-wood',
  },
];
