import React, { useState } from 'react';
import './App.css';
import TerminalHeader from './components/TerminalHeader';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const asciiSymbols = ['*', '#', '@', '%', '&', '+', '='];

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
        <TerminalHeader />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {effects.map(({ id, x, y, symbol }) => (
        <span key={id} className="click-effect" style={{ left: x, top: y }}>
          {symbol}
        </span>
      ))}
    </div>
  );
}

export default App;
