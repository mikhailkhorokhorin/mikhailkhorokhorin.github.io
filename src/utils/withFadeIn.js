import React from 'react';
import { motion } from 'framer-motion';

const withFadeIn = (WrappedComponent) => {
  return function AnimatedComponent(props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withFadeIn;
