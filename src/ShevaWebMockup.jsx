import { useEffect, useRef, useState } from 'react';
import imgLogo from './assets/figma/sheva-web-logo.png';
import imgFooterLogo from './assets/figma/sheva-web-footer-logo.png';
import imgBanner from './assets/figma/sheva-web-banner.jpg';
import imgOfficeDay from './assets/figma/sheva-web-office-day.jpg';
import imgPilatesMood from './assets/figma/sheva-web-pilates-mood.jpg';
import imgForEveryDay from './assets/figma/sheva-web-for-every-day.jpg';
import imgLookMain from './assets/figma/sheva-web-look-main.jpg';
import imgLookProduct from './assets/figma/sheva-web-look-product.jpg';
import imgTopLiaNegro from './assets/figma/sheva-web-top-lia-negro.jpg';
import imgTopLiaCrema from './assets/figma/sheva-web-top-lia-crema.jpg';
import imgPantOliveNegro from './assets/figma/sheva-web-pant-olive-negro.jpg';
import imgPantOliveCrema from './assets/figma/sheva-web-pant-olive-crema.jpg';
import imgCloudJacketChocolate from './assets/figma/sheva-web-cloud-jacket-chocolate.jpg';
import imgCloudJacketArena from './assets/figma/sheva-web-cloud-jacket-arena.jpg';
import imgAmeliePantChocolate from './assets/figma/sheva-web-amelie-pant-chocolate.jpg';
import imgAmeliePantArena from './assets/figma/sheva-web-amelie-pant-arena.jpg';
import imgSetContrastMantequilla from './assets/figma/sheva-web-set-contrast-mantequilla.jpg';
import imgSetContrastNegro from './assets/figma/sheva-web-set-contrast-negro.jpg';
import imgSetContrastChocolate from './assets/figma/sheva-web-set-contrast-chocolate.jpg';
import imgSetBermaCafe from './assets/figma/sheva-web-set-berma-cafe.jpg';
import imgSetComfortNegro from './assets/figma/sheva-web-set-comfort-negro.jpg';
import imgSetBermaAzul from './assets/figma/sheva-web-set-berma-azul.jpg';
import imgIg1 from './assets/figma/sheva-web-ig-1.jpg';
import imgIg2 from './assets/figma/sheva-web-ig-2.jpg';
import imgIg3 from './assets/figma/sheva-web-ig-3.jpg';
import imgIg4 from './assets/figma/sheva-web-ig-4.jpg';
import imgIg5 from './assets/figma/sheva-web-ig-5.jpg';
import imgIg6 from './assets/figma/sheva-web-ig-6.jpg';
import imgIg7 from './assets/figma/sheva-web-ig-7.jpg';
import imgIg8 from './assets/figma/sheva-web-ig-8.jpg';
import iconChevronLeft from './assets/figma/sheva-web-chevron-left.svg';
import iconChevronRight from './assets/figma/sheva-web-chevron-right.svg';
import iconInstagramWhite from './assets/figma/sheva-web-icon-instagram-white.svg';
import iconVideo from './assets/figma/sheva-web-icon-video.png';
import iconSearch from './assets/figma/sheva-web-icon-search.svg';
import iconAccount from './assets/figma/sheva-web-icon-account.svg';
import iconCart from './assets/figma/sheva-web-icon-cart.svg';
import iconInstagram from './assets/figma/sheva-web-icon-instagram.svg';
import iconArrow from './assets/figma/sheva-web-icon-arrow.svg';
import iconChromeLeft from './assets/figma/sheva-web-icon-chrome-left.svg';

// The mockup is laid out on Figma's fixed 1024px browser canvas and scaled
// down to fit narrower containers, so it reads like a real desktop site.
const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 6938;

const P = {
  topLiaNegro: { name: ['TOP LÍA NEGRO'], price: '$150,000', img: imgTopLiaNegro, badge: 'new' },
  topLiaCrema: { name: ['TOP LÍA CREMA'], price: '$150,000', img: imgTopLiaCrema, badge: 'new' },
  pantOliveNegro: { name: ['PANT OLIVE NEGRO'], price: '$225,000', img: imgPantOliveNegro, badge: 'new' },
  pantOliveCrema: { name: ['PANT OLIVE CREMA'], price: '$225,000', img: imgPantOliveCrema, badge: 'new' },
  cloudJacketChocolate: { name: ['CLOUD JACKET', 'CHOCOLATE'], price: '$220,000', img: imgCloudJacketChocolate, badge: 'new' },
  cloudJacketArena: { name: ['CLOUD JACKET ARENA'], price: '$220,000', img: imgCloudJacketArena, badge: 'new' },
  ameliePantChocolate: { name: ['AMELIE PANT', 'CHOCOLATE'], price: '$240,000', img: imgAmeliePantChocolate, badge: 'new' },
  ameliePantArena: { name: ['AMELIE PANT ARENA'], price: '$240,000', img: imgAmeliePantArena, badge: 'new' },
  setContrastMantequilla: { name: ['SET CONTRAST', 'MANTEQUILLA'], price: '$275,000', img: imgSetContrastMantequilla, badge: 'preorder' },
  setContrastNegro: { name: ['SET CONTRAST NEGRO'], price: '$275,000', img: imgSetContrastNegro, badge: 'preorder' },
  setContrastChocolate: { name: ['SET CONTRAST', 'CHOCOLATE'], price: '$275,000', img: imgSetContrastChocolate, badge: 'preorder' },
  setBermaCafe: { name: ['SET BERMA CAFÉ'], price: '$160,000', img: imgSetBermaCafe },
  setComfortNegro: { name: ['SET COMFORT NEGRO'], price: '$340,000', img: imgSetComfortNegro },
  setBermaAzul: { name: ['SET BERMA AZUL'], price: '$160,000', img: imgSetBermaAzul },
};

const NEW_ARRIVALS = [
  P.topLiaNegro, P.topLiaCrema, P.pantOliveNegro, P.pantOliveCrema, P.cloudJacketChocolate,
  P.cloudJacketArena, P.ameliePantChocolate, P.ameliePantArena, P.setContrastMantequilla,
  P.setContrastNegro, P.setContrastChocolate,
];
const MOOD_ATHLEISURE = [P.setContrastNegro, P.setContrastMantequilla, P.setContrastChocolate, P.topLiaNegro];
const EVERYDAY_FEELS = [P.setBermaCafe, P.setComfortNegro, P.setBermaAzul];
const FAVORITES = [
  P.setContrastNegro, P.setContrastMantequilla, P.setContrastChocolate, P.topLiaNegro,
  P.topLiaCrema, P.pantOliveNegro, P.pantOliveCrema, P.cloudJacketChocolate,
];

const NAV_ITEMS = [
  ['Bodys', -97.3], ['Sets', 1.73], ['Athleisure', 87.61], ['Pants', 215.77], ['Basics', 312],
  ['Three Pack', 412.57], ['Tops', 546.77], ['Jackets', 635.25], ['Complements', 743.82], ['Ver todo', 899.52],
];

const INSTAGRAM_POSTS = [
  { img: imgIg1, alt: 'Más SHEVA, menos excusas' },
  { img: imgIg2, alt: 'Everyday Essentials by Sheva' },
  { img: imgIg3, alt: 'Hay encuentros que simplemente tienen sentido' },
  { img: imgIg4, alt: 'One top. Three moods.' },
  { img: imgIg5, alt: 'The kind of set you’ll wear on repeat', video: true },
  { img: imgIg6, alt: 'Ese short que se vuelve parte de tu everyday uniform' },
  { img: imgIg7, alt: 'Comfy, pero nunca básico' },
  { img: imgIg8, alt: 'The photo vs. the shooting' },
];

function Badge({ type }) {
  if (type === 'new') {
    return (
      <span className="absolute left-2.5 top-2.5 flex h-[25px] w-[60px] items-center justify-center rounded-[30px] bg-[#060606] text-[14px] tracking-[0.6px] text-white">
        New
      </span>
    );
  }
  if (type === 'preorder') {
    return (
      <span className="absolute right-2.5 top-2.5 flex h-[37.19px] w-[101.36px] items-center justify-center rounded-[40px] bg-black text-[14px] leading-[25.2px] tracking-[0.6px] text-white">
        Pre-Order
      </span>
    );
  }
  return null;
}

function ProductCard({ product, width, imageHeight }) {
  return (
    <div className="shrink-0 bg-white" style={{ width }}>
      <div className="relative overflow-hidden" style={{ height: imageHeight }}>
        <img src={product.img} alt={product.name.join(' ')} className="size-full object-cover" />
        <Badge type={product.badge} />
      </div>
      <div className="px-5 pt-[27px]">
        <p className="text-[13px] font-semibold leading-[16.9px] tracking-[0.6px] text-[#121212]">
          {product.name.map((line) => <span key={line} className="block">{line}</span>)}
        </p>
        <p className="mt-[7px] text-[16px] leading-[24px] tracking-[1px] text-[#121212]">{product.price}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="absolute left-[50px] top-9 text-[40px] font-semibold leading-[52px] tracking-[0.6px] text-[#121212]">
      {children}
    </h3>
  );
}

// Horizontal product slider with the store's prev / next arrows and "n/total" counter.
function ProductCarousel({ products }) {
  const STEP = 227.5;
  const visible = 4;
  const pages = products.length - visible + 1;
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    if (track) setPage(Math.min(pages - 1, Math.round(track.scrollLeft / STEP)));
  };
  const go = (dir) => trackRef.current?.scrollBy({ left: dir * STEP, behavior: 'smooth' });

  return (
    <div className="absolute inset-x-0 top-[113px]">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex h-[457.95px] snap-x snap-mandatory gap-2 overflow-x-auto px-[50px] py-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product, i) => (
          <div key={i} className="snap-start scroll-ml-[50px]">
            <ProductCard product={product} width={219.5} imageHeight={328.97} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-[479.96px] flex items-center justify-center gap-[25px] text-[12px] leading-[20.4px] tracking-[0.7px] text-[rgba(18,18,18,0.75)]">
        <button type="button" onClick={() => go(-1)} disabled={page === 0} aria-label="Previous" className="flex size-5 items-center justify-center">
          <img src={iconChevronLeft} alt="" className="h-[5px] w-[9px] rotate-90" />
        </button>
        <span>{page + 1}/{pages}</span>
        <button type="button" onClick={() => go(1)} disabled={page === pages - 1} aria-label="Next" className="flex size-5 items-center justify-center">
          <img src={iconChevronRight} alt="" className="h-[5px] w-[9px] -rotate-90" />
        </button>
      </div>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="absolute left-[50px] top-[118px] flex gap-2">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} width={225} imageHeight={337.2} />
      ))}
    </div>
  );
}

function Marquee({ text, itemWidth }) {
  const items = Array.from({ length: 12 });
  return (
    <div className="absolute inset-x-0 top-10 h-9 overflow-hidden bg-[#b8a88a] text-[10px] leading-[18px] tracking-[0.8px] text-white">
      <div className="flex h-full w-max animate-marquee items-center motion-reduce:animate-none">
        {items.map((_, i) => (
          <span key={i} className="shrink-0 pl-[25px]" style={{ width: itemWidth }}>{text}</span>
        ))}
      </div>
    </div>
  );
}

function ChromeIcon({ d }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="#4c4c4c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

function BrowserChrome() {
  return (
    <div className="relative h-[89px] font-[system-ui,-apple-system,sans-serif]">
      <div className="absolute left-[37px] top-[39px] flex gap-[9px]">
        <span className="size-3.5 rounded-full border-[0.5px] border-[rgba(0,0,0,0.1)] bg-[#ff736a]" />
        <span className="size-3.5 rounded-full border-[0.5px] border-[rgba(0,0,0,0.1)] bg-[#febc2e]" />
        <span className="size-3.5 rounded-full border-[0.5px] border-[rgba(0,0,0,0.1)] bg-[#19c332]" />
      </div>
      <div className="absolute left-[186px] top-[26px] flex h-9 w-[605px] items-center gap-1.5 rounded-full bg-[#f7f7f7] px-2.5">
        <span className="relative size-4 shrink-0">
          <img src={iconChromeLeft} alt="" className="absolute left-[1.84px] top-[2.57px] h-[11.667px] w-[12.308px]" />
        </span>
        <p className="flex-1 truncate text-center text-[13px] font-medium leading-4 text-[#4c4c4c]">www.shevabrand.com</p>
        <svg viewBox="0 0 16 16" className="size-4 shrink-0" fill="none" stroke="#808080" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
          <path d="M13 8a5 5 0 1 1-1.6-3.7M13 2.5v2.8h-2.8" />
        </svg>
      </div>
      <div className="absolute left-[842px] top-[26px] flex h-9 w-[139px] items-center gap-1 rounded-full bg-[#f7f7f7] p-1">
        {[
          'M8 4.5v6M5.5 8.2 8 10.7l2.5-2.5M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z',
          'M8 1.5v8.5M5.3 4.2 8 1.5l2.7 2.7M5 7H3.5v7.5h9V7H11',
          'M8 3v10M3 8h10',
          'M5.5 5.5v-3h8v8h-3M2.5 5.5h8v8h-8z',
        ].map((d) => (
          <span key={d} className="flex h-7 min-w-7 flex-1 items-center justify-center rounded-full">
            <ChromeIcon d={d} />
          </span>
        ))}
      </div>
    </div>
  );
}

function StoreHeader() {
  return (
    <>
      <img src={imgLogo} alt="Sheva" className="absolute left-[428px] top-[43.85px] h-[39px] w-[71px] object-contain" />
      <img src={iconSearch} alt="" className="absolute left-[897px] top-[66.85px] h-[15px] w-4" />
      <img src={iconAccount} alt="" className="absolute left-[931px] top-[66.85px] h-[15px] w-4" />
      <img src={iconCart} alt="" className="absolute left-[957px] top-[54.85px] h-11 w-[34px]" />
      <nav className="absolute left-0 right-0 top-[107.85px] h-[52px]">
        <div className="absolute left-7 top-0 h-full w-[861px] border-t border-[rgba(0,0,0,0.1)]" />
        {NAV_ITEMS.map(([label, left]) => (
          <span key={label} className="absolute top-[22px] whitespace-nowrap text-[13px] leading-[16.9px] tracking-[0.6px] text-white" style={{ left: left + 28 }}>
            {label}
          </span>
        ))}
      </nav>
    </>
  );
}

function OutlineButton({ children, className = '' }) {
  return (
    <span className={`flex items-center justify-center border border-white text-white ${className}`}>
      {children}
    </span>
  );
}

function SplitBanner({ img, alt, title, subtitle }) {
  return (
    <div className="relative h-full overflow-hidden">
      <img src={img} alt={alt} className="size-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex h-[193.23px] flex-col items-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-white">
        <p className="mt-[46.5px] text-[32px] font-bold uppercase leading-[41.6px] tracking-[3.2px]">{title}</p>
        <p className="mt-[3px] text-[16px] leading-[28.8px] tracking-[0.6px]">{subtitle}</p>
        <OutlineButton className="mt-[-2px] h-[27.3px] w-[84.75px] text-[8.5px] leading-[15.3px] tracking-[0.85px]">VER TODO</OutlineButton>
      </div>
    </div>
  );
}

function Hotspot({ left, top, size, halo }) {
  const pad = (halo - size) / 2;
  return (
    <span
      className="absolute rounded-full bg-[#b7ab8d]"
      style={{ left, top, width: size, height: size }}
    >
      <span
        className="absolute rounded-full bg-[radial-gradient(circle,rgba(183,171,141,0)_0%,rgba(183,171,141,0.4)_100%)]"
        style={{ left: -pad, top: -pad, width: halo, height: halo }}
      />
    </span>
  );
}

function ShopTheLook() {
  return (
    <div className="h-[910.48px] bg-[#f5f5f0]">
      <h3 className="absolute inset-x-0 top-[59.3px] text-center text-[32px] font-bold uppercase leading-[38.4px] tracking-[2.56px] text-[#1a1a1a]">
        Compra el look
      </h3>
      <img src={imgLookMain} alt="Amelie Pant Chocolate look" className="absolute left-[45px] top-[146.39px] h-[699.91px] w-[467px] object-cover" />
      <Hotspot left={319.36} top={607.55} size={13} halo={62.4} />
      <Hotspot left={255.47} top={418.94} size={10} halo={48} />
      <div className="absolute left-[605.4px] top-[146.39px] h-[510.38px] w-[280.2px] bg-white">
        <img src={imgLookProduct} alt="Amelie Pant Chocolate" className="h-[424.19px] w-full object-cover" />
        <p className="mt-[20px] px-5 text-[14px] font-medium uppercase leading-[21px] tracking-[0.56px] text-[#1a1a1a]">Amelie pant chocolate</p>
        <p className="mt-[5px] px-5 text-[16px] leading-[19.2px] tracking-[0.6px] text-[#666]">$240,000</p>
      </div>
      {[{ left: 689.5, rotate: '-rotate-135' }, { left: 753.5, rotate: 'rotate-45' }].map(({ left, rotate }) => (
        <span key={left} className="absolute top-[802.49px] flex size-12 items-center justify-center rounded-full shadow-[0px_0px_0px_1px_#b7ab8d]" style={{ left }}>
          <span className={`size-2 border-r-2 border-t-2 border-[#b7ab8d] ${rotate}`} />
        </span>
      ))}
    </div>
  );
}

function InstagramGrid() {
  return (
    <div className="grid w-[924px] grid-cols-4 gap-[2.29px]">
      {INSTAGRAM_POSTS.map((post) => (
        <div key={post.alt} className="group/post relative h-[305.69px] overflow-hidden">
          <img src={post.img} alt={post.alt} className="size-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-200 group-hover/post:opacity-100">
            <img src={post.video ? iconVideo : iconInstagramWhite} alt="" className="size-5" />
          </div>
        </div>
      ))}
    </div>
  );
}

function StoreFooter() {
  const linkClass = 'text-[14px] leading-[25.2px] tracking-[0.6px] text-[rgba(255,255,255,0.75)]';
  const headingClass = 'text-[10px] font-semibold leading-[13px] tracking-[0.6px] text-white';
  return (
    <footer className="relative ml-[46px] h-[475px] w-[928px] bg-[#b7ab8d]">
      <img src={imgFooterLogo} alt="Sheva" className="absolute left-[60px] top-9 w-[100px]" />
      <p className="absolute left-[60px] top-[91.72px] w-[130px] text-[16px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,255,255,0.75)]">
        Minimalismo con carácter. Feminidad con fuerza. Comodidad sin sacrificar estética
      </p>
      <img src={iconInstagram} alt="Instagram" className="absolute left-[73px] top-[302.3px] h-4 w-4" />

      <p className={`absolute left-[231px] top-9 ${headingClass}`}>NECESITAS AYUDA?</p>
      <ul className="absolute left-[231px] top-[69px] flex flex-col gap-[10px]">
        {['Sobre Nosotros', 'FAQS', 'Guia de tallas', 'Contácto'].map((l) => <li key={l} className={linkClass}>{l}</li>)}
      </ul>
      <p className={`absolute left-[231px] top-[223px] ${headingClass}`}>TIENDA</p>
      <p className={`absolute left-[231px] top-[259px] w-[120px] ${linkClass}`}>Conoce nuestra tienda</p>

      <p className={`absolute left-[402px] top-9 w-[90px] ${headingClass}`}>TERMINOS Y CONDICIONES</p>
      <ul className="absolute left-[402px] top-[82px] flex w-[100px] flex-col gap-[10px]">
        {['Cambios y devoluciones', 'Politicas de privacidad', 'Politica de envios', 'Terminos y condiciones'].map((l) => (
          <li key={l} className={linkClass}>{l}</li>
        ))}
      </ul>

      <p className={`absolute left-[559px] top-[66px] ${headingClass}`}>SUSCRIBETE</p>
      <div className="absolute left-[559px] top-[99px] flex h-[47px] w-[168px] items-center justify-between pl-[21px] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.55)]">
        <span className="text-[16px] leading-6 tracking-[1px] text-[rgba(255,255,255,0.75)]">Email</span>
        <span className="flex w-11 items-center justify-center">
          <img src={iconArrow} alt="" className="h-[25px] w-[15px]" />
        </span>
      </div>
      <img src={iconInstagram} alt="Instagram" className="absolute left-[750px] top-[117px] h-4 w-4" />

      <div className="absolute left-0 right-[-96px] top-[356px] h-[81.39px] border-t border-[rgba(255,255,255,0.08)]" />
      <p className="absolute left-[60px] top-[419px] flex gap-2 whitespace-nowrap text-[11px] leading-[18.7px] tracking-[0.7px] text-[rgba(255,255,255,0.75)]">
        <span>© 2026, Shevabrand</span>
        <span>Tecnología de Shopify</span>
        <span>·</span><span>Política de privacidad</span>
        <span>·</span><span>Términos del servicio</span>
        <span>·</span><span>Política de envío</span>
      </p>
    </footer>
  );
}

function StorePage() {
  return (
    <div className="relative h-[6334.5px] overflow-hidden font-montserrat">
      {/* Hero banner with the header floating over it */}
      <section className="absolute inset-x-0 top-0 h-[640px]">
        <img src={imgBanner} alt="The Soft Edit campaign" className="size-full object-cover" />
        <OutlineButton className="absolute left-[433.08px] top-[503px] h-[47px] w-[157.84px] text-[15px] leading-[18px] tracking-[1px]">SHOP NOW</OutlineButton>
        <StoreHeader />
      </section>

      <section className="absolute inset-x-0 top-[679.07px] h-[660.95px] bg-white">
        <SectionTitle>New arrivals</SectionTitle>
        <ProductCarousel products={NEW_ARRIVALS} />
      </section>

      <section className="absolute inset-x-0 top-[1247.07px] h-32">
        <Marquee text="Luxury clothes for luxury girls." itemWidth={223.67} />
      </section>

      <section className="absolute inset-x-0 top-[1359.32px] h-[630.2px] bg-white">
        <SectionTitle>Mood athleisure</SectionTitle>
        <ProductGrid products={MOOD_ATHLEISURE} />
      </section>

      <section className="absolute inset-x-0 top-[1989.52px] h-[640px]">
        <img src={imgOfficeDay} alt="Office Day collection" className="size-full object-cover" />
        <div className="absolute inset-x-0 top-[241.09px] flex flex-col items-center text-center">
          <p className="text-[40px] font-semibold leading-[52px] tracking-[0.6px] text-white">Oficce Day</p>
          <p className="mt-[10px] text-[16px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,255,255,0.75)]">Para todos los dias</p>
          <span className="mt-[20px] flex h-[47px] w-[131.44px] items-center justify-center bg-white text-[15px] leading-[18px] tracking-[1px] text-black">Ver todo</span>
        </div>
      </section>

      <section className="absolute inset-x-0 top-[2629.52px] h-[613.09px] bg-white">
        <SectionTitle>Everyday Feels</SectionTitle>
        <ProductGrid products={EVERYDAY_FEELS} />
      </section>

      <section className="absolute inset-x-0 top-[3242.61px] grid h-[750px] grid-cols-2">
        <SplitBanner img={imgPilatesMood} alt="Pilates Mood collection" title="PILATES MOOD" subtitle="Para las amantes del pilates" />
        <SplitBanner img={imgForEveryDay} alt="For Every Day collection" title="FOR EVERY DAY" subtitle="Classy. Versátil. Cómoda" />
      </section>

      <section className="absolute inset-x-0 top-[3992.61px]">
        <ShopTheLook />
      </section>

      <section className="absolute inset-x-0 top-[4903.1px] h-[689.75px] bg-white">
        <SectionTitle>Nuestros favoritos</SectionTitle>
        <ProductCarousel products={FAVORITES} />
        <p className="absolute inset-x-0 top-[626.4px] text-center text-[14px] leading-[25.2px] tracking-[0.6px] text-[rgba(18,18,18,0.85)] underline">Ver todo</p>
      </section>

      <section className="absolute inset-x-0 top-[5592.85px] h-32">
        <Marquee text="Síguenos en nuestras redes @sheva_____brand" itemWidth={318.36} />
      </section>

      <section className="absolute left-[50px] top-[5720.85px]">
        <InstagramGrid />
      </section>
    </div>
  );
}

// Sheva's Shopify storefront, shown inside a desktop browser window.
export default function ShevaWebMockup() {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / CANVAS_WIDTH));
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="mx-auto w-full max-w-[1024px]" style={{ height: CANVAS_HEIGHT * scale }}>
      <div
        className="origin-top-left overflow-hidden rounded-[13px] bg-white shadow-[0px_4px_41.4px_0px_rgba(0,0,0,0.12)]"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, transform: `scale(${scale})` }}
      >
        <BrowserChrome />
        <div className="flex h-[39px] items-center justify-center border-b border-[rgba(255,255,255,0.08)] bg-[#b7ab8d] font-montserrat text-[13px] font-semibold leading-[16.9px] tracking-[1px] text-white">
          Envio Gratis a partir de $500.000
        </div>
        <StorePage />
        <div className="font-montserrat">
          <StoreFooter />
        </div>
      </div>
    </div>
  );
}
