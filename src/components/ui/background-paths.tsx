"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-foreground/30 dark:text-foreground/40"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.02}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 15 + path.id * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: path.id * 0.1,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "About Phoenix Crest",
    subtitle,
    showButton = true,
    buttonText = "Our Journey",
    onButtonClick,
}: {
    title?: string;
    subtitle?: string;
    showButton?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Animated Background Paths */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Gradient Overlay for depth - reduced opacity to show paths better */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/50" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    {/* Animated Title */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-3 md:mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-foreground via-foreground to-foreground/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* CTA Button */}
                    {showButton && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="pt-4"
                        >
                            <div
                                className="inline-block group relative bg-gradient-to-b from-border/50 to-border/20 
                                p-[1px] rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl 
                                transition-all duration-300"
                            >
                                <Button
                                    variant="ghost"
                                    onClick={onButtonClick}
                                    className="rounded-[1.15rem] px-6 py-5 md:px-8 md:py-6 text-base md:text-lg 
                                    font-semibold backdrop-blur-md bg-background/95 hover:bg-background/100 
                                    text-foreground transition-all duration-300 group-hover:-translate-y-0.5 
                                    border border-border/50 hover:shadow-md"
                                >
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {buttonText}
                                    </span>
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                        transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
}