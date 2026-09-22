import { useCallback, useEffect, useRef, useState } from "react";

// Shows a tall full-page screenshot inside a fixed frame.
// Desktop: hovering the frame scrolls the screenshot to the bottom.
// Touch devices: it scrolls down and back up by itself while the frame is on screen.
const SPEED = 300; // px per second

export default function ScrollPreview({ src, alt, href, className = "" }) {
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const [shift, setShift] = useState(0);
  const [playing, setPlaying] = useState(false);

  const measure = useCallback(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img || !img.complete) return;
    setShift(Math.max(0, img.offsetHeight - frame.clientHeight));
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (frameRef.current) ro.observe(frameRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Auto-play on touch screens when the preview is mostly visible
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !window.matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => setPlaying(entry.intersectionRatio >= 0.6),
      { threshold: [0, 0.6, 1] }
    );
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  const canScroll = shift > 24;
  const duration = Math.max(1.5, shift / SPEED);

  return (
    <a
      ref={frameRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`preview ${canScroll ? "can-scroll" : ""} ${playing && canScroll ? "is-playing" : ""} ${className}`}
      style={{ "--shift": `-${shift}px`, "--dur": `${duration}s` }}
      aria-label={alt}
    >
      <img ref={imgRef} src={src} alt={alt} loading="lazy" onLoad={measure} />
      {canScroll && (
        <span className="preview__hint" aria-hidden="true">
          <i className="fa-solid fa-arrows-up-down" />
        </span>
      )}
    </a>
  );
}
