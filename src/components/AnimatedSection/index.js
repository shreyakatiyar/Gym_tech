import React from 'react';
import { motion } from 'framer-motion';

const variantsFor = (direction) => ({
  hidden:
    direction === 'left'
      ? { opacity: 0, x: -500 }
      : direction === 'right'
      ? { opacity: 0, x: 500 }
      : { opacity: 0, y: 40 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

const AnimatedSection = ({ children, delay = 0, className, direction }) => {
  const { hidden, visible } = variantsFor(direction);
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden,
        visible: { ...visible, transition: { ...visible.transition, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
