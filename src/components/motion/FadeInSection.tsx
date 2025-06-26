// FadeInSection.tsx
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  once?: boolean; // ✅ 추가
}

export function FadeInSection({
  children,
  delay = 0,
  once = true,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (once) {
      if (inView) controls.start('visible');
    } else {
      controls.start(inView ? 'visible' : 'hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut', delay },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
