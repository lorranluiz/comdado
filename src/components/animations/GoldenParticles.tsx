'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  opacityMin: number;
  opacityMax: number;
  hue: number;
}

export default function GoldenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      particles = [];
      for (let i = 0; i < count; i++) {
        const opacityMin = 0.05 + Math.random() * 0.1;
        const opacityMax = 0.2 + Math.random() * 0.35;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 0.5 + Math.random() * 1.8,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -0.05 - Math.random() * 0.2,
          opacity: opacityMin + Math.random() * (opacityMax - opacityMin),
          opacitySpeed: 0.002 + Math.random() * 0.008,
          opacityMin,
          opacityMax,
          hue: 35 + Math.random() * 15, // gold range 35-50
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Oscillate opacity
        p.opacity += p.opacitySpeed;
        if (p.opacity >= p.opacityMax || p.opacity <= p.opacityMin) {
          p.opacitySpeed = -p.opacitySpeed;
          p.opacity = Math.max(p.opacityMin, Math.min(p.opacityMax, p.opacity));
        }

        // Wrap around
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 85%, 65%, ${p.opacity})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 80%, 55%, ${p.opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${p.opacity * 1.2})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles();
    });
    resizeObserver.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
