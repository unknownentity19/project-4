"use client";

import { motion } from "framer-motion";
import { GitBranch, Sparkles, Bug, Zap, ShieldCheck, Cpu } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.1 } });

const entries = [
  {
    version: "0.18.0",
    date: "May 28, 2026",
    label: "Major",
    icon: Sparkles,
    title: "Visual canvas v2 + branching agents",
    notes: [
      "Brand new graph editor with infinite zoom, mini-map, and group selection",
      "Agents can now branch on tool-call results and rejoin downstream",
      "Inline diffing between two agent versions, side-by-side",
    ],
  },
  {
    version: "0.17.4",
    date: "May 21, 2026",
    label: "Performance",
    icon: Zap,
    title: "30% faster cold starts",
    notes: [
      "Switched the runtime to a streaming JIT, p50 cold start is now 84ms",
      "Reduced memory footprint of long-running agents by ~22%",
    ],
  },
  {
    version: "0.17.0",
    date: "May 12, 2026",
    label: "New model",
    icon: Cpu,
    title: "Claude Sonnet 4 + Llama 4 405B available",
    notes: [
      "Both models added to the provider matrix with full streaming + tool-call support",
      "New per-node fallback policy: route by latency, cost, or quality",
    ],
  },
  {
    version: "0.16.2",
    date: "May 4, 2026",
    label: "Compliance",
    icon: ShieldCheck,
    title: "SOC 2 Type II audit complete",
    notes: [
      "Report available to Team and Enterprise customers",
      "New per-workspace audit log export to S3 or GCS",
    ],
  },
  {
    version: "0.16.0",
    date: "April 22, 2026",
    label: "New",
    icon: Sparkles,
    title: "Built-in evaluation suites",
    notes: [
      "Score every commit against a reference dataset, no extra tooling",
      "Catch regressions in latency, cost, hallucination rate, and tool errors",
      "Plug-in custom rubrics with a TS or Python function",
    ],
  },
  {
    version: "0.15.6",
    date: "April 14, 2026",
    label: "Fix",
    icon: Bug,
    title: "Streaming tool-call ordering",
    notes: [
      "Fixed a race where tool-call deltas could arrive before the parent assistant message",
      "Improved error surfacing for 4xx responses from upstream providers",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Changelog
            </div>
          </motion.div>
          <motion.h1
            {...stagger(1)}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            What's new in Synthora
          </motion.h1>
          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
          >
            We ship every week. Subscribe via RSS or watch the GitHub repo.
          </motion.p>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {entries.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.article
                  key={e.version}
                  {...stagger(i)}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 border-t border-white/[0.06] pt-10 first:border-t-0 first:pt-0"
                >
                  <div>
                    <div className="font-mono text-xs text-zinc-500">
                      {e.date}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-300 font-mono">
                      <GitBranch className="h-3 w-3 text-zinc-500" />v{e.version}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium text-purple-400">
                      <Icon className="h-3 w-3" />
                      {e.label}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                      {e.title}
                    </h2>
                    <ul className="mt-4 space-y-2">
                      {e.notes.map((n) => (
                        <li
                          key={n}
                          className="text-sm text-zinc-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:bg-purple-500"
                        >
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
