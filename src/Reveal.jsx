import { motion } from 'motion/react';
import { revealInitial, revealAnimate, revealViewport, revealTiming } from './motionConfig';

export default function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={revealInitial}
      whileInView={revealAnimate}
      viewport={revealViewport}
      transition={{ ...revealTiming, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
