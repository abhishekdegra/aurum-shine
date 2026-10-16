import React, { useEffect, useRef } from "react";

export default function HeroWaterCanvas({ isFoamMode = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // 1. Mist spray particles (streaming from right side pressure lance)
    const mistCount = isFoamMode ? 55 : 25;
    const mistParticles = Array.from({ length: mistCount }, () => ({
      x: width * (0.6 + Math.random() * 0.4),
      y: height * (0.15 + Math.random() * 0.35),
      vx: -(2.5 + Math.random() * 4.5),
      vy: (Math.random() - 0.2) * 2.5,
      radius: 1.5 + Math.random() * 4.5,
      alpha: 0.15 + Math.random() * 0.45,
      maxAlpha: 0.2 + Math.random() * 0.5,
      life: Math.random(),
    }));

    // 2. Soap foam bubbles floating and sliding down
    const bubbleCount = isFoamMode ? 30 : 12;
    const bubbles = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: 0.6 + Math.random() * 1.8,
      wobbleSpeed: 0.02 + Math.random() * 0.04,
      wobbleAmp: 10 + Math.random() * 20,
      wobbleOffset: Math.random() * Math.PI * 2,
      radius: 2.5 + Math.random() * 6.5,
      alpha: 0.25 + Math.random() * 0.45,
    }));

    // 3. Water dripping streams (rain / ceramic hydrophobic beading trails)
    const streakCount = isFoamMode ? 16 : 8;
    const streaks = Array.from({ length: streakCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * -height,
      speed: 6 + Math.random() * 9,
      length: 18 + Math.random() * 32,
      width: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.4,
    }));

    // 4. Studio laser inspection scan line
    let scanY = -100;
    let scanActive = true;
    let scanTimer = 0;

    // 5. Interactive touch / pointer ripples
    let touchPoints = [];
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const px = (e.clientX || (e.touches && e.touches[0]?.clientX)) - rect.left;
      const py = (e.clientY || (e.touches && e.touches[0]?.clientY)) - rect.top;

      if (px !== undefined && py !== undefined) {
        for (let i = 0; i < 4; i++) {
          touchPoints.push({
            x: px + (Math.random() - 0.5) * 20,
            y: py + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            radius: 2 + Math.random() * 4,
            alpha: 0.7,
            life: 1,
          });
        }
        if (touchPoints.length > 50) touchPoints = touchPoints.slice(-50);
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    let lastTime = performance.now();

    const render = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Render Mist Spray Particles
      mistParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt * 0.6;

        // Reset particle
        if (p.x < -20 || p.y > height + 20 || p.life <= 0) {
          p.x = width * (0.65 + Math.random() * 0.35);
          p.y = height * (0.15 + Math.random() * 0.35);
          p.vx = -(2.5 + Math.random() * 5.0);
          p.vy = (Math.random() - 0.2) * 2.8;
          p.life = 0.8 + Math.random() * 0.4;
          p.radius = 1.5 + Math.random() * 4.5;
        }

        const currentAlpha = p.life * p.maxAlpha;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        grad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
        grad.addColorStop(0.5, `rgba(220, 240, 255, ${currentAlpha * 0.6})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Soap Foam Bubbles
      bubbles.forEach((b) => {
        b.y += b.vy;
        b.wobbleOffset += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobbleOffset) * b.wobbleAmp;

        if (b.y > height + 20) {
          b.y = -20;
          b.x = Math.random() * width;
        }

        // Realistic Soap Bubble with Glassy Rim and Specular Highlight
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 248, 255, ${b.alpha * 0.15})`;
        ctx.fill();

        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.65})`;
        ctx.stroke();

        // Bubble Reflection Glint
        ctx.beginPath();
        ctx.arc(currentX - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.9})`;
        ctx.fill();
        ctx.restore();
      });

      // Render Water Droplet Streaks (Sheeting Effect)
      streaks.forEach((s) => {
        s.y += s.speed;
        if (s.y > height + 50) {
          s.y = -Math.random() * 200;
          s.x = Math.random() * width;
        }

        const streakGrad = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length);
        streakGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        streakGrad.addColorStop(0.7, `rgba(200, 230, 255, ${s.alpha * 0.4})`);
        streakGrad.addColorStop(1, `rgba(255, 255, 255, ${s.alpha * 0.85})`);

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.length);
        ctx.stroke();
      });

      // Render Studio Crimson Laser Scan Line (Sweeps across car every 7s)
      scanTimer += dt;
      if (scanTimer > 6) {
        scanActive = true;
        scanY += dt * 320;
        if (scanY > height + 80) {
          scanY = -50;
          scanTimer = 0;
          scanActive = false;
        }
      }

      if (scanActive && scanY > -50 && scanY < height + 80) {
        ctx.save();
        // Laser glow bar
        const laserGrad = ctx.createLinearGradient(0, scanY - 8, 0, scanY + 8);
        laserGrad.addColorStop(0, "rgba(255, 26, 43, 0)");
        laserGrad.addColorStop(0.5, "rgba(255, 26, 43, 0.45)");
        laserGrad.addColorStop(1, "rgba(255, 26, 43, 0)");

        ctx.fillStyle = laserGrad;
        ctx.fillRect(0, scanY - 8, width, 16);

        // Core bright laser beam
        ctx.strokeStyle = "rgba(255, 220, 220, 0.75)";
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#ff1a2b";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
        ctx.restore();
      }

      // Render Touch Burst Particles
      touchPoints.forEach((tp, idx) => {
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.life -= dt * 1.5;

        if (tp.life <= 0) {
          touchPoints.splice(idx, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.radius * tp.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${tp.alpha * tp.life})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, [isFoamMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
