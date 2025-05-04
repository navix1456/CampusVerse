import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetResources: () => void;
}

const Hero = ({ onGetResources }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    const colors = ['rgba(105, 65, 198, 0.8)', 'rgba(0, 240, 255, 0.8)', 'rgba(255, 45, 120, 0.8)'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 3 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      // Draw connections
      particles.forEach((a) => {
        particles.forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance * 0.001})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGetResources = () => {
    navigate('/subjects');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
            CampusVerse
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-3">
            Your all-in-one SRM student toolkit.
          </p>
          <p className="text-md md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Access semester-wise PYQs, notes, and more – crafted by SRM Student, for SRM students.
          </p>
          
          <button
            onClick={onGetResources}
            className="button-glow group"
          >
            <span className="relative z-10 flex items-center">
              🎯 Get SRM Resources
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
