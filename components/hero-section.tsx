"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const RATING_VALUE = 4.9;
const RATING_COUNT = 127;
const RESERVED_PERCENT = 65;

export function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Editorial copy */}
          <div className="lg:col-span-5 lg:pr-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-6"
            >
              Premium Residences · Pasay City
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]"
            >
              Pasay City will soon
              <br />
              be home to
              <br />
              <span className="font-normal italic text-muted-foreground">
                Aleevia Carter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md"
            >
              A new flagship residence where architectural restraint meets
              everyday ease — minutes from the bay, the business district, and
              the international gateway.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-8"
            >
              <a
                href="#contact"
                className="text-sm tracking-[0.05em] text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
              >
                Register now
              </a>
              <a
                href="#residences"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Explore residences
              </a>
            </motion.div>
          </div>

          {/* Right — Main image + floating cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-4/5 w-full bg-zinc-100">
              <Image
                src="/assets/hero-exterior.jpg"
                alt="Aleevia Carter Residences — featured interior"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card — Project status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden sm:block absolute -left-4 lg:-left-10 top-10 lg:top-16 w-56 lg:w-64 bg-white border border-zinc-200/80 shadow-xl shadow-zinc-300/30 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Project Status
                </p>
                <span className="flex items-center gap-1.5 text-[0.6rem] tracking-wider uppercase text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="font-heading text-2xl font-semibold text-foreground leading-tight">
                Phase II
              </p>
              <p className="text-xs text-muted-foreground mt-1 mb-4">
                Now selling · Limited inventory
              </p>
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.65rem] tracking-wider uppercase text-muted-foreground">
                    Reserved
                  </span>
                  <span className="text-xs font-semibold text-foreground tabular-nums">
                    {RESERVED_PERCENT}%
                  </span>
                </div>
                <div className="w-full h-1 bg-zinc-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${RESERVED_PERCENT}%` }}
                    transition={{ duration: 1.1, delay: 1, ease: "easeOut" }}
                    className="h-full bg-foreground"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating card — Resident reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="hidden sm:block absolute -right-4 lg:-right-8 bottom-10 lg:bottom-14 w-56 lg:w-60 bg-white border border-zinc-200/80 shadow-xl shadow-zinc-300/30 p-5"
            >
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">
                Resident Reviews
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading text-3xl font-semibold text-foreground tabular-nums">
                  {RATING_VALUE.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">/ 5.0</span>
              </div>
              <div className="flex items-center gap-0.5 mb-3" aria-label={`Rated ${RATING_VALUE} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-foreground text-foreground"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on {RATING_COUNT} verified resident surveys.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
