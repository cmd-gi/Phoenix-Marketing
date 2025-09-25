"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-card transition-all duration-300 max-w-xs w-full group" key={i}>
                  <div className="text-foreground/90 leading-relaxed text-sm mb-5">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-foreground/20 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-foreground text-sm">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};