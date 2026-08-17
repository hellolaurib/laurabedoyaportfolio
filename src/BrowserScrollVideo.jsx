import { useEffect, useRef, useState } from 'react';

const SCRUB_SECONDS_PER_DELTA = 0.004;

export default function BrowserScrollVideo({ src, url, className = '' }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Chrome leaves the <video> blank until it plays or is seeked once —
    // nudge it forward a hair so the first frame actually paints.
    const paintFirstFrame = () => {
      if (video.currentTime === 0) video.currentTime = 0.01;
    };
    video.addEventListener('loadeddata', paintFirstFrame);
    return () => video.removeEventListener('loadeddata', paintFirstFrame);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

    const handleWheel = (e) => {
      if (!video.duration) return;
      e.preventDefault();
      const next = clamp(
        video.currentTime + e.deltaY * SCRUB_SECONDS_PER_DELTA,
        0,
        video.duration
      );
      video.currentTime = next;
      setProgress(next / video.duration);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isTouch]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={`w-full overflow-hidden rounded-[16px] border border-[rgba(20,20,20,0.14)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-[rgba(20,20,20,0.1)] bg-[#f5f5f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#e0e0e0]" />
          <span className="size-2.5 rounded-full bg-[#e0e0e0]" />
          <span className="size-2.5 rounded-full bg-[#e0e0e0]" />
        </div>
        <div className="flex-1 rounded-full bg-white px-3 py-1 text-center text-xs font-light text-[#757575]">
          {url}
        </div>
      </div>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative aspect-[1440/662] w-full overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          autoPlay={isTouch}
          loop={isTouch}
          className="absolute inset-0 size-full object-cover"
        />
        {!isTouch && hovering && progress < 0.02 && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[150%]"
            style={{ left: cursor.x, top: cursor.y }}
          >
            <span className="whitespace-nowrap rounded-full bg-[#e38484] px-4 py-1.5 text-[11px] font-light text-white">
              Scroll to explore ↓
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
