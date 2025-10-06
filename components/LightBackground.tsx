import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function LightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll();

  // Create smooth spring values that lag behind mouse position
  const smoothX = useSpring(mousePosition.x, { 
    stiffness: 20,    // Very low - slow to respond
    damping: 50,      // High - smooth movement
    mass: 5           // Heavy - sluggish
  });
  
  const smoothY = useSpring(mousePosition.y, { 
    stiffness: 20,
    damping: 50,
    mass: 5
  });

  useEffect(() => {
    let rafId: number | null = null;
    let lastUpdateTime = 0;
    const updateInterval = 100; // Only update every 100ms

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Throttle updates to every 100ms
      if (currentTime - lastUpdateTime < updateInterval) {
        return;
      }

      const targetPosition = { 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      };

      // Only update if mouse moved significantly (more than 5% of screen)
      const distanceX = Math.abs(targetPosition.x - mousePosition.x);
      const distanceY = Math.abs(targetPosition.y - mousePosition.y);
      
      if (distanceX > 5 || distanceY > 5) {
        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            setMousePosition(targetPosition);
            lastUpdateTime = Date.now();
            rafId = null;
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [mousePosition]);

  // Network nodes - SMALLER DOTS: reduced from 5-8px to 2-4px
  const networkNodes = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 2, // REDUCED: 2-4px nodes (was 5-8px)
    duration: Math.random() * 15 + 25, // Natural slow pulsing 25-40s
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Network visualization */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw connections between nearby nodes */}
        {networkNodes.map((node, i) => 
          networkNodes.slice(i + 1).map((targetNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - targetNode.x, 2) + 
              Math.pow(node.y - targetNode.y, 2)
            );
            // Only draw lines between nodes that are close enough (within 20% of screen)
            if (distance < 20) {
              return (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="rgba(249, 115, 22, 0.3)"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: 12 + Math.random() * 8, // Slow: 12-20s per fade cycle
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 10,
                  }}
                />
              );
            }
            return null;
          })
        )}
        
        {/* Network nodes with glow effect - SMALLER */}
        {networkNodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Outer glow circle - adjusted multiplier for smaller nodes */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 2} // Reduced glow multiplier from 2.5 to 2
              fill="rgba(249, 115, 22, 0.15)"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
            {/* Core node - now smaller */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="rgb(249, 115, 22)"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Interactive glow following mouse */}
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-br from-orange-500 to-orange-400 blur-2xl opacity-30"
        style={{
          x: smoothX,
          y: smoothY,
          left: 0,
          top: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Subtle grid pattern - 4% opacity */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(249, 115, 22) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(249, 115, 22) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
