import React, { useEffect, useState } from 'react';

export default function Typewriter({ text = '', speed = 30, startDelay = 300, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (index > text.length) return;
    const id = setTimeout(() => {
      setDisplayed(text.slice(0, index));
      setIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(id);
  }, [index, text, speed, started]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayed}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[1px] bg-cyan-400 animate-pulse" aria-hidden />
    </span>
  );
}
