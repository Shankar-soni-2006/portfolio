import { motion } from 'framer-motion';
import './FloatingElements.css';

const FLOATING_ELEMENTS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: Math.random() * 100 + 50,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10
}));

const FloatingElements = () => {
  return (
    <div className="floating-container">
      {FLOATING_ELEMENTS.map(({ id, size, x, y, duration }) => (
        <motion.div
          key={id}
          className="floating-element"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;