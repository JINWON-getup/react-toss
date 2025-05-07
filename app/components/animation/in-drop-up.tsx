import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  y?: number;
  mb?: number;
}

export default function InDropUp({
  children,
  className,
  duration = 0.6,
  y = 100,
  mb = -100,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `0px 0px ${mb}px 0px` });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
