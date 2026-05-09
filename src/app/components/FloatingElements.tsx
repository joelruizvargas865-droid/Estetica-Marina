import { motion } from "motion/react";

export function FloatingElements() {
  const circles = [
    { size: 60, delay: 0, x: "10%", y: "20%", color: "from-pink-300/30 to-rose-300/30" },
    { size: 80, delay: 1, x: "80%", y: "60%", color: "from-purple-300/30 to-pink-300/30" },
    { size: 40, delay: 2, x: "70%", y: "10%", color: "from-amber-300/30 to-yellow-300/30" },
    { size: 100, delay: 1.5, x: "15%", y: "70%", color: "from-rose-300/30 to-orange-300/30" },
    { size: 50, delay: 0.5, x: "90%", y: "30%", color: "from-fuchsia-300/30 to-pink-300/30" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${circle.color} blur-2xl`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            delay: circle.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}
