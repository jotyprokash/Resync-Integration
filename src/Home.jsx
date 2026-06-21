import { useEffect, useRef, useState } from 'react';
import zeroosLogo from './asstes/zeroos_logo.png';
import zeroosCover from './asstes/zeroos_transparent.png';
import tshirt1 from './asstes/zeroos_tshirt_1.png';
import tshirt2 from './asstes/zeroos_tshirt_2.png';
import tshirt3 from './asstes/zeroos_tshirt_3.png';
import tshirt4 from './asstes/zeroos_tshirt_4.png';
import tshirt5 from './asstes/zeroos_tshirt_5.png';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */
const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const TikTok = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.5 3c.4 2 1.7 3.5 3.7 3.8v2.7c-1.4 0-2.7-.4-3.8-1.1v6.4c0 3.2-2.6 5.7-5.8 5.5-2.8-.2-5-2.6-4.9-5.4.1-2.9 2.6-5.1 5.5-4.9v2.8c-1.4-.3-2.7.8-2.7 2.2 0 1.2 1 2.2 2.2 2.2 1.3 0 2.3-1 2.3-2.3V3h3.5z" />
  </svg>
);
const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6c-2.7 0-3.8 1.4-3.8 3.7v1.8H8.5V12H10.6v9h3.4v-9h2.4l.3-3.5H14z" />
  </svg>
);
const Mail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const Flame = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2c1 3-1 4-1 6 0 1 1 2 2 2 1.5 0 2-1.2 2-2.5 2 1.8 3 4 3 6.5a6 6 0 11-12 0c0-3 2-5 3-7 .8 1 .5 2.5 1.5 2.5 1.2 0 1-2.5-1.5-7.5z" />
  </svg>
);
const Check = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);
const Rocket = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M5 15c-2 1-3 5-3 5s4-1 5-3M9 11l4 4M14.5 4.5C18 4 20 6 19.5 9.5c-.4 2.8-3 6-6.5 7.5l-3-3C11.5 10.5 14.7 8 17 7.5" />
    <circle cx="14.5" cy="9.5" r="1.4" />
  </svg>
);
const Tee = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M8 3l4 2 4-2 5 4-3 3-1-1v11H7V9L6 10 3 7z" />
  </svg>
);
const Globe = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);
const Shield = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </svg>
);
const ShieldStar = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M12 8.5l1.1 2.3 2.4.2-1.8 1.6.6 2.4L12 13.7l-2.3 1.3.6-2.4-1.8-1.6 2.4-.2z" />
  </svg>
);
const Infinity = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M7.5 9a3 3 0 100 6c1.5 0 2.5-1.2 4.5-3s3-3 4.5-3a3 3 0 110 6c-1.5 0-2.5-1.2-4.5-3S9 9 7.5 9z" />
  </svg>
);
const UKFlag = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="#1f2a55" />
    <path d="M3 5l18 14M21 5L3 19" stroke="#e6e6ea" strokeWidth="1.4" />
    <path d="M12 5v14M3 12h18" stroke="#c0392b" strokeWidth="2" />
  </svg>
);
const ChevronLeft = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);
const ChevronRight = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
function Header() {
  return (
    <header className="flex items-center justify-between py-[22px] sm:py-[30px]">
      <div className="flex items-center gap-[10px]">
        <img src={zeroosLogo} alt="ZEROOS" className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] object-cover rounded-[6px]" />
        <span className="font-cond font-bold text-[20px] sm:text-[25px] tracking-[3px] text-[#f4f2ef]">ZEROOS</span>
      </div>
      <div className="flex items-center gap-[12px] sm:gap-[18px]">
        <span className="hidden sm:inline font-cond font-semibold text-xs tracking-[2px] text-[#b7b4af]">FOLLOW US</span>
        <a href="https://www.instagram.com/zeroos.co?igsh=NXlrdG96ZGs2eXJr" target='_blank' aria-label="Instagram" className="text-[#e8e6e3] hover:text-gold transition-colors">
          <Instagram width="18" height="18" />
        </a>
        <a href="#" aria-label="TikTok" className="text-[#e8e6e3] hover:text-gold transition-colors">
          <TikTok width="18" height="18" />
        </a>
        <a href="https://www.facebook.com/zeroos0" target='_blank' aria-label="Facebook" className="text-[#e8e6e3] hover:text-gold transition-colors">
          <Facebook width="18" height="18" />
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero (with early-access form)                                       */
/* ------------------------------------------------------------------ */
function Hero() {
//   const [email, setEmail] = useState('');
//   const [joined, setJoined] = useState(false);

//   const join = () => {
//     if (email.trim().length > 2) setJoined(true);
//   };


  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | invalid
//   const siteName = import.meta.env.VITE_PUBLIC_SITE_NAME || "Something new";
//   const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || "our website";

  async function handleSubscribe() {
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValid) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubscribe();
  }

  function handleChange(e) {
    setEmail(e.target.value);
    if (status === "invalid" || status === "error") setStatus("idle");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch py-6 pb-[20px]">
      <div className="flex flex-col justify-center py-2 lg:py-4">
        <span className="font-cond font-semibold text-[13px] tracking-[3.5px] text-gold mb-[18px]">COMING SOON</span>
        <h1 className="font-display text-[42px] sm:text-[64px] lg:text-[90px] leading-[0.92] tracking-[1px] m-0 text-[#f3f1ee] uppercase">
          Zeroos
          <br />
          First Drop
          <br />
          Is Coming.
        </h1>
        <p className="text-[17px] leading-[1.55] text-soft mt-[26px] mb-[30px] max-w-[380px]">
          Premium oversized graphic tees built around meaning, comfort and identity.
        </p>

        {/* Email form */}
        <div className="flex w-full max-w-[470px] h-[50px] sm:h-[56px] border border-[#34342f] rounded-[5px] overflow-hidden bg-[#0e0e10]">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-[#e8e6e3] text-[15px] px-5 outline-none"
            disabled={status === "loading"}
            autoComplete="email"
          />
          <button
            onClick={handleSubscribe}
            disabled={status === "loading"}

            className="bg-gold hover:bg-gold-hover text-[#1a1408] font-cond font-semibold text-[11px] sm:text-[13px] tracking-[1.5px] px-3 sm:px-6 whitespace-nowrap transition-colors"
          >
            NOTIFY ME
          </button>
        </div>

        {status !== 'success' ? (
          <div className="flex gap-[34px] mt-5 flex-wrap">
            <span className="flex items-center gap-[9px] text-[13.5px] text-soft">
              <Mail width="15" height="15" />
              Join early access and get 15% off.
            </span>
            <span className="flex items-center gap-[9px] text-[13.5px] text-gold">
              <Flame width="15" height="15" />
              First 30 orders get 20% off.
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-[9px] mt-5 text-sm text-gold font-medium">
            <Check width="16" height="16" />
            You're on the list — your early-access code is on its way.
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <img
          src={zeroosCover}
          alt="ZEROOS back-print tee"
          className="w-full max-h-[480px] sm:max-h-[560px] lg:max-h-[680px] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Motto section                                                       */
/* ------------------------------------------------------------------ */
// function MottoSection() {
//   return (
//     <section className="bg-ink py-16 sm:py-24 px-4 text-center">
//       <div className="max-w-[860px] mx-auto">
//         <div className="w-[40px] h-px bg-gold mx-auto mb-8 opacity-60" />
//         <p className="font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-[#f3f1ee] tracking-[2px] uppercase">
//           Build the look,
//         </p>
//         <p className="font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-gold tracking-[2px] uppercase mt-1">
//           Own the moment.
//         </p>
//         <div className="w-[40px] h-px bg-gold mx-auto mt-8 opacity-60" />
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Feature bar                                                         */
/* ------------------------------------------------------------------ */
function Feature({ icon, title, children, border }) {
  return (
    <div className={`flex items-start gap-[14px] py-3 md:py-1.5 ${border ? 'md:border-l md:border-[#232327] md:px-7 pr-4' : 'pr-4 md:pr-7'}`}>
      <span className="text-gold shrink-0 mt-px">{icon}</span>
      <div>
        <div className="font-cond font-semibold text-sm tracking-[0.8px] text-[#eceae6]">{title}</div>
        <div className="text-[12.5px] text-muted mt-[3px]">{children}</div>
      </div>
    </div>
  );
}

function FeatureBar() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-[24px] md:py-[30px] grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0">
        <Feature icon={<Rocket width="26" height="26" />} title="FIRST 30 ORDERS">GET 20% OFF.</Feature>
        <Feature icon={<Tee width="26" height="26" />} title="PREMIUM QUALITY" border>230 GSM HEAVYWEIGHT COTTON</Feature>
        <Feature icon={<Globe width="26" height="26" />} title="LIMITED FIRST DROP" border>UK LAUNCH</Feature>
        <Feature icon={<Shield width="26" height="26" />} title="TRUSTED QUALITY" border>
          BUILT FOR COMFORT, DURABILITY
          <br />
          AND EVERYDAY WEAR.
        </Feature>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Image lightbox modal                                                */
/* ------------------------------------------------------------------ */
function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-[8px] shadow-2xl"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-[14px] -right-[14px] w-[34px] h-[34px] rounded-full bg-[#1a1a1e] border border-[#45453e] text-[#eceae6] hover:border-gold hover:text-gold flex items-center justify-center text-lg leading-none transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Designs slider                                                      */
/* ------------------------------------------------------------------ */
const DESIGNS = [
  { src: tshirt1, alt: 'Design 1' },
  { src: tshirt2, alt: 'Design 2' },
  { src: tshirt3, alt: 'Design 3' },
  { src: tshirt4, alt: 'Design 4' },
  { src: tshirt5, alt: 'Design 5' },
];
const PER_VIEW = 3;
const GAP = 18;

function DesignSlider() {
  const [slide, setSlide] = useState(0);
  const [step, setStep] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const viewportRef = useRef(null);
  const maxSlide = Math.max(0, DESIGNS.length - PER_VIEW);

  useEffect(() => {
    const measure = () => {
      const vp = viewportRef.current;
      if (!vp) return;
      const item = vp.querySelector('[data-slide-item]');
      if (item) {
        const w = item.getBoundingClientRect().width;
        if (w) setStep(w + GAP);
      }
    };
    measure();
    const t = setTimeout(measure, 250);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t);
    };
  }, []);

  const clamped = Math.min(slide, maxSlide);
  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(maxSlide, s + 1));

  return (
    <>
      <div className="relative mx-6 sm:mx-1.5">
        <div ref={viewportRef} className="overflow-hidden py-1">
          <div
            className="flex gap-[18px] transition-transform duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)] will-change-transform"
            style={{ transform: `translateX(-${clamped * step}px)` }}
          >
            {DESIGNS.map((d) => (
              <img
                key={d.src}
                data-slide-item="true"
                src={d.src}
                alt={d.alt}
                onClick={() => setLightbox(d)}
                className="flex-[0_0_200px] h-[300px] object-cover rounded-[6px] cursor-pointer hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
        <button
          onClick={prev}
          aria-label="Previous design"
          className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full border border-[#45453e] bg-[rgba(10,10,12,0.88)] text-[#eceae6] hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
        >
          <ChevronLeft width="18" height="18" />
        </button>
        <button
          onClick={next}
          aria-label="Next design"
          className="absolute -right-[18px] top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full border border-[#45453e] bg-[rgba(10,10,12,0.88)] text-[#eceae6] hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
        >
          <ChevronRight width="18" height="18" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-[9px] mt-[26px]">
        {Array.from({ length: maxSlide + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[9px] rounded-full transition-all duration-[250ms] ${
              i === clamped ? 'w-[26px] bg-gold' : 'w-[9px] bg-[#3a3a3e]'
            }`}
          />
        ))}
      </div>

      {lightbox && (
        <ImageModal src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Designs section                                                     */
/* ------------------------------------------------------------------ */
function Designs() {
  return (
    <section className="bg-ink pt-10 sm:pt-16 pb-10 sm:pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="font-cond font-bold text-[38px] tracking-[1px] text-center m-0 text-[#f3f1ee]">5 DESIGNS. 1 DROP.</h2>
        <p className="text-center text-muted text-base mt-3 mb-11">Here's a sneak peek.</p>

        <DesignSlider />

        <div className="flex justify-center mt-12 mb-2">
          <a
            href="#"
            className="font-cond font-semibold text-sm tracking-[2px] text-[#eceae6] no-underline border border-[#45453e] rounded-[6px] px-[34px] py-[15px] hover:border-gold hover:text-gold transition-colors"
          >
            FOLLOW US FOR UPDATES
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-[30px] gap-3 sm:gap-0">
          {[
            { icon: <Instagram width="18" height="18" />, label: 'Instagram', link: 'https://www.instagram.com/zeroos.co?igsh=NXlrdG96ZGs2eXJr' },
            { icon: <TikTok width="18" height="18" />, label: 'TikTok' },
            { icon: <Facebook width="18" height="18" />, label: 'Facebook', link: 'https://www.facebook.com/zeroos0' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && <span className="hidden sm:block w-px h-[18px] bg-[#2a2a2e]" />}
              <a href={s.link} target='_blank' className="flex items-center gap-[10px] text-[#cfccc6] no-underline text-[14.5px] px-5 sm:px-8 hover:text-gold transition-colors">
                {s.icon}
                {s.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bottom features                                                     */
/* ------------------------------------------------------------------ */
function BottomFeatures() {
  return (
    <section className="border-t border-line bg-panel">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-[28px] md:py-[34px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <div className="flex items-start gap-[14px]">
          <span className="text-gold shrink-0"><ShieldStar width="26" height="26" /></span>
          <div>
            <div className="font-cond font-semibold text-sm tracking-[0.6px] text-[#eceae6]">230 GSM HEAVYWEIGHT COTTON</div>
            <div className="text-[13px] text-muted mt-1">Built for comfort, durability and everyday wear.</div>
          </div>
        </div>
        <div className="flex items-start gap-[14px]">
          <span className="shrink-0"><UKFlag width="26" height="26" /></span>
          <div>
            <div className="font-cond font-semibold text-sm tracking-[0.6px] text-[#eceae6]">LIMITED FIRST DROP</div>
            <div className="text-[13px] text-muted mt-1">Exclusively launching in the UK.</div>
          </div>
        </div>
        <div className="flex items-start gap-[14px]">
          <span className="text-gold shrink-0"><Infinity width="26" height="26" /></span>
          <div>
            <div className="font-cond font-semibold text-sm tracking-[0.6px] text-[#eceae6]">BUILT ON MEANING</div>
            <div className="text-[13px] text-muted mt-1">Every design has a story.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="bg-ink min-h-screen font-sans text-[#e8e6e3] overflow-x-hidden">
      <section className="border-b border-line bg-[radial-gradient(120%_120%_at_70%_30%,#16161a_0%,#0c0c0e_55%,#08080a_100%)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <Header />
          <Hero />
        </div>
      </section>
      <FeatureBar />
      <Designs />
      {/* <MottoSection /> */}
      <BottomFeatures />
      <footer className="bg-ink py-[26px] flex flex-col items-center gap-[10px]">
        <img src={zeroosLogo} alt="ZEROOS" className="h-[40px] w-[40px] object-cover rounded-[5px] opacity-70" />
        <span className="text-[13px] text-[#6f6c67]">© 2026 ZEROOS. All rights reserved.</span>
      </footer>
    </div>
  );
}
