import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function CosmicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Transform scroll into background movements
  const galaxyY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const nebula1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const nebula2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const neuralNetworkY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate static stars with different sizes
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    twinkle: Math.random() > 0.7,
  }));

  // Neural network connection points
  const neuralNodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    connections: Math.floor(Math.random() * 3) + 1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-black" />
      
      {/* Scrolling galaxy backdrop */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y: galaxyY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 30% 20%, hsla(240, 100%, 30%, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 100% 60% at 70% 60%, hsla(280, 100%, 25%, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 80% 40% at 20% 80%, hsla(200, 100%, 40%, 0.25) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      {/* Moving nebula layers */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-30 opacity-15"
        style={{ y: nebula1Y }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 150% 100% at 10% 50%, hsla(220, 80%, 50%, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 100% 80% at 90% 30%, hsla(260, 70%, 40%, 0.1) 0%, transparent 60%)
            `
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-20 opacity-10"
        style={{ y: nebula2Y }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 60% 70%, hsla(180, 60%, 50%, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 120% 40% at 40% 20%, hsla(300, 50%, 30%, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      {/* Scrolling stars */}
      <motion.div style={{ y: starsY }}>
        {stars.map((star) => (
          star.twinkle ? (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white dark:bg-white bg-slate-300"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ) : (
            <div
              key={star.id}
              className="absolute rounded-full bg-white dark:bg-white bg-slate-300"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
              }}
            />
          )
        ))}
      </motion.div>

      {/* Neural Network Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-20 opacity-10"
        style={{ y: neuralNetworkY }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Neural connections */}
          {neuralNodes.map((node, i) => 
            neuralNodes.slice(i + 1, i + node.connections + 1).map((targetNode, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={targetNode.x}
                y2={targetNode.y}
                stroke="rgba(100, 200, 255, 0.3)"
                strokeWidth="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  pathLength: { duration: 2, delay: i * 0.1 },
                  opacity: { 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }
                }}
              />
            ))
          )}
          
          {/* Neural nodes */}
          {neuralNodes.map((node, i) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="0.3"
              fill="rgba(100, 200, 255, 0.6)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{
                scale: { 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                },
                opacity: { 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Interactive mouse glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 dark:opacity-10 opacity-5"
        style={{
          background: `radial-gradient(circle, hsla(${180 + mousePosition.x * 0.3}, 80%, 60%, 0.4) 0%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated cosmic dust */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-10 opacity-5"
        animate={{
          background: [
            "radial-gradient(ellipse 200% 100% at 0% 50%, hsla(220, 100%, 50%, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse 200% 100% at 100% 50%, hsla(240, 100%, 50%, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse 200% 100% at 50% 0%, hsla(200, 100%, 50%, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle grid that moves with scroll */}
      <motion.div 
        className="absolute inset-0 opacity-5 dark:opacity-5 opacity-2"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 200, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 200, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} 
        />
      </motion.div>

      {/* Top and bottom gradients for depth */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/80 dark:from-slate-950/80 from-slate-50/80 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 dark:from-slate-950/80 from-slate-50/80 to-transparent z-10" />
    </div>
  );
}