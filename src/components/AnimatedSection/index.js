import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedSection = ({ children, delay = 0, className }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={{
      hidden: fadeUp.hidden,
      visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } },
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
