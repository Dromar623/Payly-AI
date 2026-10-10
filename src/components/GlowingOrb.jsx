import React from 'react';

export default function GlowingOrb({
  className = '',
  color = 'from-violet-600/30 via-indigo-600/20 to-transparent',
  size = 'w-[500px] h-[500px]'
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[120px] bg-gradient-to-tr ${color} ${size} ${className}`}
    />
  );
}
