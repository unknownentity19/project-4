"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, HeartHandshake, Sprout, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.1 } });

const values = [
  {
    icon: Compass,
    title: "Builders first",
    desc: "Every decision starts with: would a developer enjoy using this on a Tuesday afternoon?",
  },
  {
    icon: Sprout,
    title: "Default to open",
    desc: "Our runtime is open source. Our docs are public. Our roadmap is on GitHub.",
  },
  {
    icon: HeartHandshake,
    title: "Earn the trust",
    desc: "AI products serve real people. We ship reliability and observability before features.",
  },
  {
    icon: Rocket,
    title: "Ship weekly",
    desc: "Small, frequent releases. We'd rather correct course in seven days than ten months.",
  },
];

const team = [
  { initial: "L", name: "Léa Moreau", title: "Co-founder, CEO" },
  { initial: "K", name: "Kenji Tanaka", title: "Co-founder, CTO" },
  { initial: "S", name: "Sarah Okonkwo", title: "Head of Design" },
  { initial: "R", name: "Rajiv Menon", title: "Eng Lead, Runtime" },
  { initial: "A", name: "Amelia Vance", title: "Eng Lead, Studio" },
  { initial: "B", name: "Bruno Costa", title: "Developer Relations" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              About Synthora
            </div>
          </motion.div>
          <motion.h1
            {...stagger(1)}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            We want AI apps to feel as easy as websites
          </motion.h1>
          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
          >
            In 2014, anyone could put a website on the internet in an afternoon.
            That has never been true of AI apps. We're building the platform
            that finally changes it.
          </motion.p>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              How we work
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  {...stagger(i)}
                  className="bg-[#000000] p-10 hover:bg-white/[0.02] transition-colors"
                >
                  <Icon className="h-5 w-5 text-purple-400" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-base text-zinc-500 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              The humans behind Synthora
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              A small, distributed team that's previously shipped developer
              tools at Vercel, Hugging Face, Stripe, and Linear.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                {...stagger(i)}
                className="border border-white/[0.06] bg-white/[0.02] p-6 flex items-center gap-4 hover:border-white/[0.1] transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-semibold">
                  {m.initial}
                </div>
                <div>
                  <div className="text-sm text-white">{m.name}</div>
                  <div className="text-xs text-zinc-500">{m.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            {...fadeUp}
            className="border border-white/[0.06] bg-white/[0.02] p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Want to build with us?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-zinc-400 leading-relaxed">
              We're hiring across engineering, design, and developer relations.
              All roles remote-friendly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
              >
                See open roles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@synthora.app"
                className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
              >
                hello@synthora.app
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
