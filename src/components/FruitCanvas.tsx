'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './FruitCanvas.module.css';

interface Fruit {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    mass: number;
    emoji: string;
    rotation: number;
    rotationSpeed: number;
    wobblePhase: number;
    wobbleSpeed: number;
}

export default function FruitCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fruitsRef = useRef<Fruit[]>([]);
    const mouseRef = useRef({ x: -999, y: -999, active: false });
    const scrollRef = useRef(0);
    const animFrameRef = useRef<number>(0);
    const timeRef = useRef(0);

    const EMOJIS = ['🍓', '🍊', '🍌', '🍎', '🥑', '🍋', '🍇', '🥕', '🍑', '🫐', '🥝', '🍍', '🍐', '🥭', '🍒'];

    const initFruits = useCallback((width: number, pageHeight: number) => {
        const count = Math.max(22, Math.floor((width * pageHeight) / 40000));
        const fruits: Fruit[] = [];

        for (let i = 0; i < count; i++) {
            const r = 14 + Math.random() * 22;
            const mass = r / 20; // Bigger fruits are heavier
            fruits.push({
                x: Math.random() * width,
                y: Math.random() * pageHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r,
                mass,
                emoji: EMOJIS[i % EMOJIS.length],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.005,
                wobblePhase: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.003 + Math.random() * 0.004, // Each fruit has its own rhythm
            });
        }
        fruitsRef.current = fruits;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let pageHeight = document.documentElement.scrollHeight;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const W = window.innerWidth;
            const H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            pageHeight = document.documentElement.scrollHeight;

            if (fruitsRef.current.length === 0) {
                initFruits(W, pageHeight);
            }
        };

        resize();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                pageHeight = document.documentElement.scrollHeight;
                resize();
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY + window.scrollY,
                active: true,
            };
        };

        const handleTouch = (e: TouchEvent) => {
            const t = e.touches[0];
            if (t) {
                mouseRef.current = {
                    x: t.clientX,
                    y: t.clientY + window.scrollY,
                    active: true,
                };
            }
        };

        const handleMouseLeave = () => {
            mouseRef.current = { ...mouseRef.current, active: false };
        };

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        window.addEventListener('mousemove', handleMouse);
        window.addEventListener('touchmove', handleTouch, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll, { passive: true });
        scrollRef.current = window.scrollY;

        const animate = () => {
            const W = window.innerWidth;
            const H = window.innerHeight;
            const scrollY = scrollRef.current;
            timeRef.current += 0.016;

            ctx.clearRect(0, 0, W, H);

            const mouse = mouseRef.current;
            const mouseRadius = 120;

            const viewTop = scrollY - 150;
            const viewBottom = scrollY + H + 150;

            for (const fruit of fruitsRef.current) {
                // --- NATURAL FLOATING ---
                // Organic sine-wave drift (each fruit has unique rhythm)
                fruit.wobblePhase += fruit.wobbleSpeed;
                const floatX = Math.sin(fruit.wobblePhase) * 0.008 / fruit.mass;
                const floatY = Math.cos(fruit.wobblePhase * 0.6 + fruit.r) * 0.012 / fruit.mass;
                fruit.vx += floatX;
                fruit.vy += floatY;

                // Very slight upward buoyancy (like they're lighter than air)
                fruit.vy -= 0.003 / fruit.mass;

                // --- MOUSE INTERACTION ---
                if (mouse.active) {
                    const dx = fruit.x - mouse.x;
                    const dy = fruit.y - mouse.y;
                    const distSq = dx * dx + dy * dy;
                    const dist = Math.sqrt(distSq);

                    if (dist < mouseRadius && dist > 0) {
                        // Softer, more natural repulsion — inversely proportional to mass
                        const strength = ((mouseRadius - dist) / mouseRadius);
                        const force = strength * strength * 6; // Quadratic falloff feels more natural
                        fruit.vx += (dx / dist) * force * (0.04 / fruit.mass);
                        fruit.vy += (dy / dist) * force * (0.04 / fruit.mass);
                        // Gentle spin
                        fruit.rotationSpeed += strength * 0.003 * (dx > 0 ? 1 : -1);
                    }
                }

                // --- DAMPING (heavier = slower to stop) ---
                const dampFactor = 0.985 + (fruit.mass * 0.003);
                fruit.vx *= Math.min(dampFactor, 0.995);
                fruit.vy *= Math.min(dampFactor, 0.995);

                // Speed limit (lighter fruits can go faster)
                const maxSpeed = 2.5 / fruit.mass;
                const speed = Math.sqrt(fruit.vx ** 2 + fruit.vy ** 2);
                if (speed > maxSpeed) {
                    fruit.vx = (fruit.vx / speed) * maxSpeed;
                    fruit.vy = (fruit.vy / speed) * maxSpeed;
                }

                // --- UPDATE POSITION ---
                fruit.x += fruit.vx;
                fruit.y += fruit.vy;

                // Slow natural rotation
                fruit.rotation += fruit.rotationSpeed;
                fruit.rotationSpeed *= 0.992;

                // --- SOFT WALL BOUNCE ---
                const wallDamp = 0.4;
                if (fruit.x < fruit.r) { fruit.x = fruit.r; fruit.vx = Math.abs(fruit.vx) * wallDamp; }
                if (fruit.x > W - fruit.r) { fruit.x = W - fruit.r; fruit.vx = -Math.abs(fruit.vx) * wallDamp; }
                if (fruit.y < fruit.r) { fruit.y = fruit.r; fruit.vy = Math.abs(fruit.vy) * wallDamp; }
                if (fruit.y > pageHeight - fruit.r) { fruit.y = pageHeight - fruit.r; fruit.vy = -Math.abs(fruit.vy) * wallDamp; }

                // Skip draw if off-screen
                if (fruit.y < viewTop || fruit.y > viewBottom) continue;

                // --- COLLISION (only nearby) ---
                for (const other of fruitsRef.current) {
                    if (other === fruit) continue;
                    if (Math.abs(fruit.x - other.x) > 50 || Math.abs(fruit.y - other.y) > 50) continue;

                    const ddx = fruit.x - other.x;
                    const ddy = fruit.y - other.y;
                    const dd = Math.sqrt(ddx * ddx + ddy * ddy);
                    const minDist = fruit.r + other.r;

                    if (dd < minDist && dd > 0) {
                        const overlap = (minDist - dd) / 2;
                        const nx = ddx / dd;
                        const ny = ddy / dd;

                        // Push apart proportional to mass
                        const totalMass = fruit.mass + other.mass;
                        fruit.x += nx * overlap * (other.mass / totalMass);
                        fruit.y += ny * overlap * (other.mass / totalMass);
                        other.x -= nx * overlap * (fruit.mass / totalMass);
                        other.y -= ny * overlap * (fruit.mass / totalMass);

                        // Elastic collision with mass-based energy transfer
                        const dvx = fruit.vx - other.vx;
                        const dvy = fruit.vy - other.vy;
                        const dot = dvx * nx + dvy * ny;

                        if (dot > 0) {
                            const impulse = dot / totalMass;
                            fruit.vx -= impulse * other.mass * nx * 0.6;
                            fruit.vy -= impulse * other.mass * ny * 0.6;
                            other.vx += impulse * fruit.mass * nx * 0.6;
                            other.vy += impulse * fruit.mass * ny * 0.6;
                        }
                    }
                }

                // --- DRAW ---
                const screenY = fruit.y - scrollY;

                ctx.save();
                ctx.translate(fruit.x, screenY);
                ctx.rotate(fruit.rotation);
                ctx.font = `${fruit.r * 1.5}px serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.globalAlpha = 0.3;

                ctx.fillText(fruit.emoji, 0, 0);
                ctx.restore();
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouse);
            window.removeEventListener('touchmove', handleTouch);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initFruits]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
