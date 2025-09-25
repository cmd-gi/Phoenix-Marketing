"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function PhoenixAuroraDemo() {
  return (
    <AuroraBackground className="bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-6 text-center max-w-6xl mx-auto"
      >
        {/* Modern Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeOut",
          }}
          className="mb-6"
        >
          <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
            <Star className="w-6 h-6 text-background" fill="currentColor" />
          </div>
        </motion.div>

        {/* Main Heading - Modern Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-5xl md:text-8xl font-bold text-foreground leading-tight tracking-tight"
        >
          Elevate Your Brand to
          <span className="block text-muted-foreground font-light">
            Legendary Status
          </span>
        </motion.h1>

        {/* Subtitle - Clean and minimal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-normal"
        >
          Phoenix Marketing Services brings market intelligence and brand understanding 
          together for effective communication that impacts perception and adds value.
        </motion.p>

        {/* Modern Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 text-base font-medium transition-all duration-200"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border border-border text-foreground hover:bg-accent px-8 py-4 text-base font-medium transition-all duration-200"
          >
            Explore Our Work
          </Button>
        </motion.div>

        {/* Minimal feature indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeOut",
          }}
          className="flex items-center gap-12 mt-16 text-sm text-muted-foreground"
        >
          <span className="font-mono text-xs tracking-wider">BRANDING</span>
          <span className="font-mono text-xs tracking-wider">STRATEGY</span>
          <span className="font-mono text-xs tracking-wider">RESULTS</span>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}