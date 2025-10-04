import { motion } from 'framer-motion';

interface AnimatedHeroTextProps {
  children: string;
  className?: string;
  gradient?: boolean;
}

export const AnimatedHeroText = ({ 
  children, 
  className = '',
  gradient = true 
}: AnimatedHeroTextProps) => {
  const words = children.split(' ');

  return (
    <h1 className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block mr-3 md:mr-4 last:mr-0"
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: 'spring',
                stiffness: 150,
                damping: 25,
              }}
              className={
                gradient
                  ? 'inline-block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/80'
                  : 'inline-block'
              }
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};
