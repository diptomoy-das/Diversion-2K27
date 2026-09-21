import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

export default function ViceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      color: 'rgba(255, 0, 127, 0.4)',
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1
    }));

    let gridOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Solid Minimal Dark Base
      ctx.fillStyle = '#0B0A0F';
      ctx.fillRect(0, 0, width, height);

      // Subtle Perspective Grid
      gridOffset = (gridOffset + 0.2) % 40;
      const horizonY = height * 0.75;

      ctx.save();
      ctx.lineWidth = 1;

      for (let y = horizonY; y < height; y += 40) {
        const lineY = y + gridOffset;
        if (lineY > height) continue;
        const alpha = (lineY - horizonY) / (height - horizonY);
        ctx.strokeStyle = `rgba(255, 0, 127, ${alpha * 0.12})`;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }

      const perspectiveCenterX = width * 0.5;
      const numLines = 20;
      for (let i = -numLines; i <= numLines; i++) {
        const targetX = perspectiveCenterX + i * (width / numLines) * 1.5;
        ctx.strokeStyle = 'rgba(255, 0, 127, 0.04)';
        ctx.beginPath();
        ctx.moveTo(perspectiveCenterX, horizonY - 100);
        ctx.lineTo(targetX, height);
        ctx.stroke();
      }
      ctx.restore();

      // Render Floating Micro-Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
}
