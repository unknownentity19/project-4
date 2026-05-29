"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wand2,
  Workflow,
  Cpu,
  LineChart,
  Rocket,
  Database,
  ShieldCheck,
  Eye,
  GitBranch,
  Webhook,
  Lock,
  Activity,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.1 } });

const groups = [
  {
    eyebrow: "Build",
    title: "Go from prompt to product",
    desc: "Synthora generates the agent graph, the UI, and the API in one pass. Iterate visually or in code — they stay in sync.",
    items: [
      { icon: Wand2, title: "Prompt-to-app", desc: "Describe an outcome in English, get a runnable scaffold." },
      { icon: Workflow, title: "Visual canvas", desc: "Drag agents, tools, and memory nodes into a graph." },
      { icon: Cpu, title: "Model-agnostic runtime", desc: "Swap GPT-4o, Claude, or Llama with one line." },
    ],
  },
  {
    eyebrow: "Evaluate",
    title: "Confidence before deploy",
    desc: "Synthora ships with a complete eval and observability stack so you can answer 'is this version actually better?'",
    items: [
      { icon: LineChart, title: "Regression suites", desc: "Score every commit against a fixed dataset." },
      { icon: Eye, title: "Trace every run", desc: "Inspect tool calls, latencies, and token usage." },
      { icon: Activity, title: "Drift alerts", desc: "Get notified when prompt or model behavior shifts." },
    ],
  },
  {
    eyebrow: "Ship",
    title: "Deploy without DevOps",
    desc: "One click puts your agent on a globally distributed edge runtime with autoscaling, rollbacks, and zero config.",
    items: [
      { icon: Rocket, title: "Edge deploys", desc: "Sub-100ms cold starts in 25+ regions." },
      { icon: GitBranch, title: "Git-native versioning", desc: "Every deploy is a commit. Revert in one click." },
      { icon: Webhook, title: "API + Webhooks", desc: "Versioned, type-safe HTTP endpoints out of the box." },
    ],
  },
  {
    eyebrow: "Scale",
    title: "Production from day one",
    desc: "Memory, retrieval, security, and compliance built in. So when you grow from 10 to 10M runs, nothing changes.",
    items: [
      { icon: Database, title: "Managed memory + RAG", desc: "Per-user memory, hybrid retrieval, citations." },
      { icon: ShieldCheck, title: "SOC 2 + HIPAA-ready", desc: "Compliance is a checkbox, not a roadmap item." },
      { icon: Lock, title: "Bring your own keys", desc: "Model spend stays at cost, on your provider account." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Features
            </div>
          </motion.div>
          <motion.h1
            {...stagger(1)}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Everything to build, evaluate, and ship AI
          </motion.h1>
          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
          >
            Synthora is the opinionated platform for AI products. One workspace,
            one runtime, one mental model — from sketch to scale.
          </motion.p>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.title} className="pb-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...fadeUp} className="max-w-2xl mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                {g.eyebrow}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                {g.title}
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                {g.desc}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
              {g.items.map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={it.title}
                    {...stagger(i)}
                    className="bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
                  >
                    <Icon className="h-5 w-5 text-purple-400" />
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                      {it.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            {...fadeUp}
            className="border border-white/[0.06] bg-white/[0.02] p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              See it in your stack
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-zinc-400 leading-relaxed">
              Spin up a workspace and import an existing project, or start from
              one of forty free templates.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
              >
                Start free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
              >
                Compare plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
