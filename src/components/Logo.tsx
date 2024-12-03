import React, { useEffect, useRef } from 'react';

export function Logo() {
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  
  useEffect(() => {
    const colors = [
      { start: '#4ECDC4', end: '#A8E6CF' },
      { start: '#A8E6CF', end: '#FFD93D' },
      { start: '#FFD93D', end: '#FF6B6B' },
      { start: '#FF6B6B', end: '#6C5CE7' },
      { start: '#6C5CE7', end: '#4ECDC4' }
    ];
    let currentIndex = 0;

    const updateGradient = () => {
      if (gradientRef.current) {
        const currentColor = colors[currentIndex];
        const nextColor = colors[(currentIndex + 1) % colors.length];
        
        const stops = gradientRef.current.children;
        (stops[0] as SVGStopElement).style.transition = 'stop-color 2s ease';
        (stops[1] as SVGStopElement).style.transition = 'stop-color 2s ease';
        
        (stops[0] as SVGStopElement).setAttribute('stop-color', currentColor.start);
        (stops[1] as SVGStopElement).setAttribute('stop-color', currentColor.end);
        
        currentIndex = (currentIndex + 1) % colors.length;
      }
    };

    updateGradient();
    const interval = setInterval(updateGradient, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg className="h-10" viewBox="0 0 120 40">
      <defs>
        <linearGradient id="gradient" ref={gradientRef} gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#A8E6CF" />
        </linearGradient>
      </defs>
      <text x="5" y="30" className="text-2xl font-bold" fill="#DAD7CF">HUB</text>
      <text x="65" y="30" className="text-2xl font-bold" fill="url(#gradient)">42</text>
    </svg>
  );
}