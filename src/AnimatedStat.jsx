import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

const zeroOut = (value) => value.replace(/\d+/g, (digits) => '0'.repeat(digits.length));

export default function AnimatedStat({ value, duration = 1.2, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(() => zeroOut(value));

  useEffect(() => {
    if (!isInView) return;
    const targets = [...value.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
    if (targets.length === 0) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, 1, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (progress) => {
        let i = 0;
        setDisplay(value.replace(/\d+/g, () => String(Math.round(targets[i++] * progress))));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
