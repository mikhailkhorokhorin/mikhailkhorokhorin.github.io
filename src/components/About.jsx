import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>{'> about_me'}</h2>
      <p>
        I’m Mikhail Khorokhorin — a developer passionate about building clean, efficient software.
      </p>
    </motion.section>
  );
}
