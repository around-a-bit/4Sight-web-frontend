import React, { useEffect, useRef } from 'react';

export const DynamicGeometricBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width, height;
        let particles = [];
        const brandColors = ['#0859b8', '#00adc4', '#54d7ef'];
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;
        let pulseTime = 0;
        let animationFrameId;

        class HexParticle {
            constructor(layer = 0) {
                this.layer = layer; // 0: background, 1: middle, 2: foreground
                this.init();
            }

            init() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                
                if (this.layer === 0) {
                    this.size = Math.random() * 300 + 200;
                    this.speedFactor = 0.12;
                    this.opacityBase = Math.random() * 0.03 + 0.015;
                    this.lineWidth = 0.8;
                } else if (this.layer === 1) {
                    this.size = Math.random() * 80 + 40;
                    this.speedFactor = 0.35;
                    this.opacityBase = Math.random() * 0.12 + 0.06;
                    this.lineWidth = 1.5;
                } else {
                    this.size = Math.random() * 30 + 15;
                    this.speedFactor = 0.7;
                    this.opacityBase = Math.random() * 0.25 + 0.1;
                    this.lineWidth = 2;
                }

                // More fluid drift via sine-based variations in speed
                this.angle = Math.random() * Math.PI * 2;
                this.velocity = this.speedFactor;
                this.speedX = Math.cos(this.angle) * this.velocity;
                this.speedY = Math.sin(this.angle) * this.velocity;
                
                this.rotation = Math.random() * Math.PI * 2;
                this.rotateSpeed = (Math.random() - 0.5) * 0.008;
                this.color = brandColors[Math.floor(Math.random() * brandColors.length)];
                this.pulse = Math.random() * Math.PI;
                
                this.offsetX = 0;
                this.offsetY = 0;
            }

            update() {
                // Fluid drift update
                this.angle += (Math.random() - 0.5) * 0.02;
                this.x += Math.cos(this.angle) * this.velocity;
                this.y += Math.sin(this.angle) * this.velocity;
                
                this.rotation += this.rotateSpeed;
                this.pulse += 0.025;

                const buffer = 400;
                if (this.x < -buffer) this.x = width + buffer;
                if (this.x > width + buffer) this.x = -buffer;
                if (this.y < -buffer) this.y = height + buffer;
                if (this.y > height + buffer) this.y = -buffer;

                // Interactive organic reaction
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const radius = 500; // Increased interaction radius
                
                if (dist < radius) {
                    const force = (radius - dist) / radius;
                    // Stronger, more immediate organic push
                    this.offsetX += (dx / dist) * force * 6;
                    this.offsetY += (dy / dist) * force * 6;
                }

                // Faster decay for more "snappy" but fluid response
                this.offsetX *= 0.92;
                this.offsetY *= 0.92;
            }

            draw() {
                const currentOpacity = this.opacityBase + Math.sin(this.pulse) * 0.015;
                const finalX = this.x + this.offsetX;
                const finalY = this.y + this.offsetY;

                ctx.save();
                ctx.translate(finalX, finalY);
                ctx.rotate(this.rotation);
                
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI) / 3;
                    ctx.lineTo(this.size * Math.cos(angle), this.size * Math.sin(angle));
                }
                ctx.closePath();

                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.lineWidth;
                ctx.globalAlpha = currentOpacity;
                
                if (this.layer > 0) {
                    ctx.lineWidth = this.lineWidth + 6;
                    ctx.globalAlpha = currentOpacity * 0.3;
                    ctx.stroke();
                    
                    ctx.lineWidth = this.lineWidth;
                    ctx.globalAlpha = currentOpacity;
                }
                
                ctx.stroke();
                ctx.restore();
            }
        }

        function resize() {
            // Using window.innerWidth/innerHeight or parent container size
            const parent = canvas.parentElement;
            width = canvas.width = parent ? parent.offsetWidth : window.innerWidth;
            height = canvas.height = parent ? parent.offsetHeight : window.innerHeight;
            particles = [];
            
            // Increased density
            for (let i = 0; i < 10; i++) particles.push(new HexParticle(0));
            for (let i = 0; i < 24; i++) particles.push(new HexParticle(1));
            for (let i = 0; i < 17; i++) particles.push(new HexParticle(2));
        }

        function drawNeuralConnections() {
            pulseTime += 0.025;
            ctx.beginPath();
            
            for (let i = 0; i < particles.length; i++) {
                if (particles[i].layer === 0) continue; 
                
                for (let j = i + 1; j < particles.length; j++) {
                    if (particles[j].layer === 0) continue;
                    
                    const p1x = particles[i].x + particles[i].offsetX;
                    const p1y = particles[i].y + particles[i].offsetY;
                    const p2x = particles[j].x + particles[j].offsetX;
                    const p2y = particles[j].y + particles[j].offsetY;

                    const dx = p1x - p2x;
                    const dy = p1y - p2y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    const connectionRadius = 240;
                    if (dist < connectionRadius) {
                        ctx.moveTo(p1x, p1y);
                        ctx.lineTo(p2x, p2y);
                        
                        // Controlled visibility - subtle but clear
                        const baseOpacity = 0.12;
                        const opacity = baseOpacity * (1 - dist/connectionRadius);
                        const pulseIntensity = Math.sin(pulseTime + (i * 0.4)) > 0.85 ? 0.4 : 0;
                        
                        ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 173, 196, ${opacity + pulseIntensity})` : `rgba(8, 89, 184, ${opacity + pulseIntensity})`;
                        ctx.lineWidth = 0.8 + pulseIntensity;
                    }
                }
            }
            ctx.stroke();
        }

        let isIntersecting = false;
        
        function animate() {
            if (!isIntersecting) return;
            
            ctx.clearRect(0, 0, width, height);
            
            // Smooth mouse tracking interpolation
            mouseX += (targetMouseX - mouseX) * 0.15;
            mouseY += (targetMouseY - mouseY) * 0.15;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawNeuralConnections();
            animationFrameId = requestAnimationFrame(animate);
        }

        const handleMouseMove = (e) => {
            if (!isIntersecting) return;
            const rect = canvas.getBoundingClientRect();
            targetMouseX = e.clientX - rect.left;
            targetMouseY = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    cancelAnimationFrame(animationFrameId);
                    animate();
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0 });

        observer.observe(canvas);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{
            background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%),
                         radial-gradient(circle at 80% 20%, rgba(172, 199, 255, 0.2) 0%, transparent 60%),
                         radial-gradient(circle at 20% 80%, rgba(84, 215, 239, 0.15) 0%, transparent 50%)`
        }}>
            <canvas 
                ref={canvasRef} 
                className="w-full h-full pointer-events-none" 
            />
        </div>
    );
};

export const GeometricCluster = () => {
    const brandColors = ['#0859b8', '#00adc4', '#54d7ef'];
    const clusterRef = useRef(null);

    useEffect(() => {
        let rafId;
        const handleMouseMove = (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const moveX = (e.clientX - width / 2) * 0.045;
            const moveY = (e.clientY - height / 2) * 0.045;
            
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                if (clusterRef.current) {
                    clusterRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY * 0.4}deg) rotateY(${-moveX * 0.4}deg)`;
                }
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            ref={clusterRef} 
            className="relative h-[500px] w-[500px] mx-auto" 
            style={{ 
                perspective: '1200px',
                transition: 'transform 0.2s cubic-bezier(0.1, 0.3, 0.3, 1)'
            }}
        >
            <style>
                {`
                @keyframes rotate3d {
                    0% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                    100% { transform: translate(-50%, -50%) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
                }
                `}
            </style>
            {[...Array(7)].map((_, i) => {
                const size = 160 + (i * 55);
                const color = brandColors[i % 3];
                return (
                    <div 
                        key={i} 
                        className="absolute top-1/2 left-1/2"
                        style={{ 
                            transformStyle: 'preserve-3d',
                            animation: `rotate3d ${20 + i * 3}s infinite linear`,
                            animationDelay: `-${i * 4.2}s`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            border: `2px solid ${color}`,
                            opacity: 0.22 - i * 0.02,
                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                            background: `radial-gradient(circle, ${color}12 0%, transparent 85%)`,
                            boxShadow: `0 0 30px ${color}25`
                        }} />
                    </div>
                );
            })}
        </div>
    );
};
