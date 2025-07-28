import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import TerminalHeader from './components/TerminalHeader';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const asciiSymbols = ['*', '#', '@', '%', '&', '+', '='];

const withFadeIn = (WrappedComponent) => {
  return function AnimatedComponent(props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%' }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

const AnimatedTerminalHeader = withFadeIn(TerminalHeader);
const AnimatedAbout = withFadeIn(About);
const AnimatedExperience = withFadeIn(Experience);
const AnimatedProjects = withFadeIn(Projects);
const AnimatedContact = withFadeIn(Contact);

function App() {
  const [effects, setEffects] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const baseX = e.clientX - rect.left;
    const baseY = e.clientY - rect.top;

    const clusterSize = 7;
    const radiusPx = 20;

    const newEffects = [];

    for (let i = 0; i < clusterSize; i++) {
      const angle = (i / clusterSize) * 2 * Math.PI;
      const r = radiusPx * (0.5 + Math.random() * 0.5);
      const x = baseX + r * Math.cos(angle);
      const y = baseY + r * Math.sin(angle);
      const symbol = asciiSymbols[Math.floor(Math.random() * asciiSymbols.length)];
      const id = Date.now() + i;

      newEffects.push({ id, x, y, symbol });
    }

    setEffects((prev) => [...prev, ...newEffects]);

    setTimeout(() => {
      setEffects((prev) => prev.filter(eff => !newEffects.find(ne => ne.id === eff.id)));
    }, 700);
  };

  return (
    <div className="fullscreen-wrapper" onClick={handleClick}>
      <div className="terminal">
        <AnimatedTerminalHeader />
        <AnimatedAbout />
        <AnimatedExperience />
        <AnimatedProjects />
        <AnimatedContact />
      </div>

      {effects.map(({ id, x, y, symbol }) => (
        <span
          key={id}
          className="click-effect"
          style={{
            position: 'absolute',
            left: x,
            top: y,
            pointerEvents: 'none',
            userSelect: 'none',
            fontFamily: 'monospace',
            color: '#0f0',
            fontWeight: 'bold',
            fontSize: '20px',
            animation: 'floatUp 0.7s ease-out forwards',
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}

export default App;
