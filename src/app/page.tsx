"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Play,
  Wand2,
  Workflow,
  Cpu,
  LineChart,
  Rocket,
  Database,
  Check,
  Star,
  Github,
  Search,
  ChevronDown,
  Plus,
  Minus,
  CornerDownLeft,
  Layers,
  Bot,
  Boxes,
  Code2,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.5, delay: i * 0.1 },
});

/* ----------------------------- Section blocks ---------------------------- */

function Hero() {
  return (
    <section className="relative pt-6 md:pt-10 pb-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
            <Sparkles className="h-3.5 w-3.5" />
            Now in public beta
          </span>
        </motion.div>

        <motion.h1
          {...stagger(1)}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
        >
          Build production{" "}
          <span className="text-purple-400">AI apps</span>
          <br className="hidden md:block" /> in hours, not months
        </motion.h1>

        <motion.p
          {...stagger(2)}
          className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
        >
          Synthora turns plain-English prompts into deployable agents, polished
          interfaces, and reliable evaluations. Stop wiring SDKs together — ship
          what your users actually wanted.
        </motion.p>

        <motion.div
          {...stagger(3)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
          >
            Start building free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
          >
            <Play className="h-4 w-4" />
            Watch the demo
          </Link>
        </motion.div>

        <motion.div
          {...stagger(4)}
          className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-500"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          SOC 2 Type II • No credit card required • Self-host ready
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- Hero mockup ----------------------------- */

function HeroMockup() {
  return (
    <section className="relative -mt-16 pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="border border-white/[0.08] bg-[#0a0a0a] shadow-2xl shadow-purple-500/5"
        >
          {/* macOS chrome */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="ml-4 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
              <span>synthora.app/studio/</span>
              <span className="text-purple-400">support-agent</span>
            </div>
          </div>

          {/* App shell */}
          <div className="grid grid-cols-12 min-h-[480px]">
            {/* Left sidebar */}
            <div className="hidden lg:flex col-span-3 flex-col border-r border-white/[0.06] bg-black/40 p-4 gap-4">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="" width={100} height={26} />
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Connected
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { i: Layers, l: "Apps" },
                  { i: Bot, l: "Agents" },
                  { i: Cpu, l: "Models" },
                  { i: Rocket, l: "Deploys" },
                ].map(({ i: Icon, l }) => (
                  <button
                    key={l}
                    className="flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-zinc-400 hover:bg-white/[0.04]"
                  >
                    <Icon className="h-3 w-3 text-purple-400" />
                    {l}
                  </button>
                ))}
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2">
                  Project
                </div>
                <ul className="space-y-1 text-xs">
                  {[
                    { n: "support-agent.ts", a: true },
                    { n: "tools/zendesk.ts" },
                    { n: "tools/stripe.ts" },
                    { n: "memory/customer.ts" },
                    { n: "evals/rubric.yaml" },
                  ].map((f) => (
                    <li
                      key={f.n}
                      className={
                        f.a
                          ? "flex items-center gap-2 bg-purple-500/10 border-l-2 border-purple-500 px-2 py-1.5 font-mono text-purple-300"
                          : "flex items-center gap-2 px-2 py-1.5 font-mono text-zinc-500 hover:text-zinc-300"
                      }
                    >
                      <Code2 className="h-3 w-3" />
                      {f.n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Canvas */}
            <div
              className="col-span-12 lg:col-span-6 relative min-h-[420px] overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(168,85,247,0.12) 0%, transparent 60%), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 24px 24px",
              }}
            >
              {/* dashed connectors */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 22% 28% C 38% 28%, 38% 50%, 50% 50%"
                  stroke="rgba(168,85,247,0.25)"
                  strokeDasharray="6 4"
                  strokeWidth="1.4"
                  fill="none"
                />
                <path
                  d="M 50% 50% C 62% 50%, 62% 76%, 78% 76%"
                  stroke="rgba(168,85,247,0.25)"
                  strokeDasharray="6 4"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>

              {/* floating card 1 */}
              <div className="absolute top-[16%] left-[6%] w-[180px] border border-white/[0.08] bg-[#0a0a0a] p-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-purple-400">
                  <Sparkles className="h-3 w-3" />
                  Trigger
                </div>
                <div className="mt-1.5 text-xs text-white">User message</div>
                <div className="mt-1 font-mono text-[10px] text-zinc-500">
                  inbound.text
                </div>
              </div>

              {/* floating card 2 */}
              <div className="absolute top-[42%] left-[36%] w-[200px] border border-purple-500/30 bg-purple-500/5 p-3 shadow-lg shadow-purple-500/10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-purple-400">
                  <Bot className="h-3 w-3" />
                  Agent
                </div>
                <div className="mt-1.5 text-xs text-white">Planner · Claude</div>
                <div className="mt-1 font-mono text-[10px] text-zinc-500">
                  plan → tools → reply
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Running
                </div>
              </div>

              {/* floating card 3 */}
              <div className="absolute top-[68%] left-[64%] w-[180px] border border-white/[0.08] bg-[#0a0a0a] p-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-purple-400">
                  <Boxes className="h-3 w-3" />
                  Tool
                </div>
                <div className="mt-1.5 text-xs text-white">stripe.refund</div>
                <div className="mt-1 font-mono text-[10px] text-zinc-500">
                  amount, reason
                </div>
              </div>

              {/* zoom controls */}
              <div className="absolute bottom-3 right-3 flex flex-col border border-white/[0.08] bg-[#0a0a0a]">
                <button className="p-1.5 text-zinc-400 hover:text-white border-b border-white/[0.06]">
                  <Plus className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 text-zinc-400 hover:text-white">
                  <Minus className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* kbd hints */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[10px] text-zinc-500">
                <span className="inline-flex items-center gap-1">
                  <kbd className="font-mono border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5">
                    ⌘
                  </kbd>
                  <kbd className="font-mono border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5">
                    K
                  </kbd>
                  <span className="ml-1">Search</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="font-mono border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5">
                    ⌘
                  </kbd>
                  <kbd className="font-mono border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5">
                    <CornerDownLeft className="h-2.5 w-2.5" />
                  </kbd>
                  <span className="ml-1">Run</span>
                </span>
              </div>
            </div>

            {/* Right properties */}
            <div className="hidden lg:flex col-span-3 flex-col border-l border-white/[0.06] bg-black/40 p-4 gap-3">
              <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                Properties
              </div>
              <div>
                <div className="text-[11px] text-zinc-500">Model</div>
                <div className="mt-1 flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-zinc-200">
                  <span className="font-mono">claude-sonnet-4</span>
                  <ChevronDown className="h-3 w-3 text-zinc-500" />
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500">Temperature</div>
                <div className="mt-1 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs font-mono text-zinc-200">
                  0.2
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500">Max tokens</div>
                <div className="mt-1 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs font-mono text-zinc-200">
                  4096
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500">System</div>
                <div className="mt-1 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-zinc-400 leading-relaxed">
                  You are a friendly support agent. Resolve refunds, escalate
                  edge cases, never guess.
                </div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-[10px] text-zinc-600">
                <Zap className="h-3 w-3" />
                Last run · 248ms
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- Features ------------------------------ */

const features = [
  {
    icon: Wand2,
    title: "Prompt-to-app",
    desc: "Describe what you want in English. Synthora generates the agent graph, UI, and deployment scaffolding instantly.",
  },
  {
    icon: Workflow,
    title: "Visual agent canvas",
    desc: "Compose agents, tools, and memory by dragging nodes. Toggle between graph view and code view in one click.",
  },
  {
    icon: Cpu,
    title: "Model-agnostic runtime",
    desc: "Swap GPT-4o for Claude or Llama with a single line. Synthora normalizes streaming, tool-calls, and JSON outputs.",
  },
  {
    icon: LineChart,
    title: "Built-in evaluations",
    desc: "Run regression suites against every commit. Catch hallucinations, latency spikes, and prompt drift before users do.",
  },
  {
    icon: Rocket,
    title: "One-click deploy",
    desc: "Ship to globally distributed edge runtimes with zero config. Built-in autoscaling, observability, and rollbacks.",
  },
  {
    icon: Database,
    title: "Memory & RAG",
    desc: "Connect any vector store. Synthora handles chunking, retrieval, reranking, and citations out of the box.",
  },
];

function Features() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Everything an AI product needs, before you write a line of code
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Synthora is the missing layer between your idea and a working
            product. Generate, evaluate, and deploy from one workspace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                {...stagger(i)}
                className="group relative bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative">
                  <Icon className="h-5 w-5 text-purple-400" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Split / Code Tabs -------------------------- */

const codeSamples: Record<string, React.ReactNode> = {
  TypeScript: (
    <pre className="font-mono text-[12.5px] leading-relaxed">
      <span className="text-zinc-500">{`// Call your deployed Synthora agent`}</span>
      {"\n"}
      <span className="text-purple-400">import</span>{" "}
      <span className="text-zinc-300">{`{ Synthora }`}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-emerald-400">"synthora"</span>;{"\n\n"}
      <span className="text-purple-400">const</span>{" "}
      <span className="text-sky-300">client</span> ={" "}
      <span className="text-purple-400">new</span>{" "}
      <span className="text-yellow-300">Synthora</span>(
      <span className="text-zinc-300">{"{"}</span>
      {"\n  apiKey: "}
      <span className="text-emerald-400">"sk_live_…"</span>
      {",\n"}
      <span className="text-zinc-300">{"})"}</span>;{"\n\n"}
      <span className="text-purple-400">const</span>{" "}
      <span className="text-sky-300">reply</span> ={" "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-sky-300">client</span>.
      <span className="text-yellow-300">run</span>(
      <span className="text-emerald-400">"support-agent"</span>,{" "}
      <span className="text-zinc-300">{"{"}</span>
      {"\n  input: "}
      <span className="text-emerald-400">"Refund my last order"</span>
      {",\n  user:  "}
      <span className="text-emerald-400">"u_1924"</span>
      {",\n"}
      <span className="text-zinc-300">{"})"}</span>;{"\n\n"}
      <span className="text-sky-300">console</span>.
      <span className="text-yellow-300">log</span>(
      <span className="text-sky-300">reply</span>.
      <span className="text-zinc-300">text</span>);
    </pre>
  ),
  Python: (
    <pre className="font-mono text-[12.5px] leading-relaxed">
      <span className="text-zinc-500">{`# Call your deployed Synthora agent`}</span>
      {"\n"}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-sky-300">synthora</span>{" "}
      <span className="text-purple-400">import</span>{" "}
      <span className="text-sky-300">Synthora</span>
      {"\n\n"}
      <span className="text-sky-300">client</span> ={" "}
      <span className="text-yellow-300">Synthora</span>(api_key=
      <span className="text-emerald-400">"sk_live_…"</span>){"\n\n"}
      <span className="text-sky-300">reply</span> ={" "}
      <span className="text-sky-300">client</span>.
      <span className="text-yellow-300">run</span>({"\n  "}
      <span className="text-emerald-400">"support-agent"</span>,{"\n  "}
      input=<span className="text-emerald-400">"Refund my last order"</span>,
      {"\n  "}
      user=<span className="text-emerald-400">"u_1924"</span>,{"\n)"}
      {"\n\n"}
      <span className="text-yellow-300">print</span>(
      <span className="text-sky-300">reply</span>.text)
    </pre>
  ),
  cURL: (
    <pre className="font-mono text-[12.5px] leading-relaxed">
      <span className="text-zinc-500">{`# Call your deployed Synthora agent`}</span>
      {"\n"}
      <span className="text-yellow-300">curl</span>{" "}
      <span className="text-emerald-400">https://api.synthora.app/v1/run</span>{" "}
      \{"\n  "}
      <span className="text-orange-300">-H</span>{" "}
      <span className="text-emerald-400">{`"Authorization: Bearer sk_live_…"`}</span>{" "}
      \{"\n  "}
      <span className="text-orange-300">-H</span>{" "}
      <span className="text-emerald-400">{`"Content-Type: application/json"`}</span>{" "}
      \{"\n  "}
      <span className="text-orange-300">-d</span>{" "}
      <span className="text-emerald-400">{`'{`}</span>
      {"\n    "}
      <span className="text-emerald-400">{`"agent": "support-agent",`}</span>
      {"\n    "}
      <span className="text-emerald-400">{`"input": "Refund my last order",`}</span>
      {"\n    "}
      <span className="text-emerald-400">{`"user":  "u_1924"`}</span>
      {"\n  "}
      <span className="text-emerald-400">{`}'`}</span>
    </pre>
  ),
};

function SplitSection() {
  const tabs = ["TypeScript", "Python", "cURL"];
  return <SplitClient tabs={tabs} />;
}

function SplitClient({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(tabs[0]);
  const checks = [
    "Run any agent with a single request",
    "Streaming, tool-calls, and citations all standardized",
    "Per-user memory and rate-limits managed for you",
    "Observability, tracing, and replay built in",
  ];
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div {...fadeUp}>
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Developer experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Call your agent from anywhere with three lines
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Once you click deploy, every agent is a versioned, type-safe HTTP
            endpoint. Use our SDKs, or just hit the JSON API.
          </p>
          <ul className="mt-8 space-y-3">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-300">{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp} className="border border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center border-b border-white/[0.06]">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={
                  active === t
                    ? "px-5 py-3 text-xs font-mono text-white border-b-2 border-purple-500"
                    : "px-5 py-3 text-xs font-mono text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent"
                }
              >
                {t}
              </button>
            ))}
          </div>
          <div className="p-6 overflow-x-auto">
            {codeSamples[active]}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ---------------------------- */

const testimonials = [
  {
    quote:
      "We replaced an entire prompt-engineering team's worth of glue code with one Synthora project. Our refund agent shipped in three days.",
    name: "Maya Chen",
    title: "CTO, Northwind Logistics",
    initial: "M",
  },
  {
    quote:
      "The eval suite is what sold us. We can finally answer 'is this prompt change actually better?' with a number, not a vibe.",
    name: "Devon Park",
    title: "Lead AI Engineer, Aurelia",
    initial: "D",
  },
  {
    quote:
      "Synthora is the first AI tool that respects how I already build software. Git, types, CI — it just slots in.",
    name: "Priya Rao",
    title: "Founder, Helix Health",
    initial: "P",
  },
];

function Testimonials() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Loved by builders
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Teams shipping AI in production trust Synthora
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            From scrappy startups to platform teams at scale-ups, builders pick
            Synthora when reliability and speed both matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...stagger(i)}
              className="border border-white/[0.06] bg-white/[0.02] p-8 hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-5 text-sm text-zinc-300 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-semibold">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Logo Grid #1 (4-col) -------------------------- */

const models = [
  {
    src: "/logos/openai.svg",
    name: "GPT-4o",
    provider: "OpenAI",
    desc: "Frontier reasoning + multimodal",
  },
  {
    src: "/logos/anthropic.svg",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    desc: "Long context, careful tool use",
  },
  {
    src: "/logos/google.svg",
    name: "Gemini 2.5",
    provider: "Google",
    desc: "Million-token windows",
  },
  {
    src: "/logos/mistral.svg",
    name: "Mistral Large",
    provider: "Mistral",
    desc: "Fast, open weights friendly",
  },
];

function ModelGrid() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Any model, any time
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Plug in the best model for the job
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Synthora speaks every major LLM. Mix providers per node, route by
            cost or latency, fall back automatically.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              {...stagger(i)}
              className="bg-[#000000] p-8 text-center hover:bg-white/[0.02] transition-colors"
            >
              <div className="h-8 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={m.name} className="h-7 opacity-90" />
              </div>
              <div className="mt-5 text-base font-semibold text-white">
                {m.name}
              </div>
              <div className="mt-1 text-xs text-purple-400">{m.provider}</div>
              <div className="mt-3 text-xs text-zinc-500 leading-relaxed">
                {m.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Logo Grid #2 (3-col) -------------------------- */

const integrations = [
  {
    src: "/logos/vercel.svg",
    name: "Vercel",
    desc: "Deploy your generated UI to the edge in one click.",
  },
  {
    src: "/logos/supabase.svg",
    name: "Supabase",
    desc: "Sync agent memory and user data with Postgres + auth.",
  },
  {
    src: "/logos/pinecone.svg",
    name: "Pinecone",
    desc: "Plug a managed vector index into any RAG node.",
  },
];

function Integrations() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Stack-friendly
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Works with the rest of your platform
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            One-click integrations for the tools you already run in production.
            No new vendor to onboard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((it, i) => (
            <motion.div
              key={it.name}
              {...stagger(i)}
              className="flex items-center gap-5 border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.1] transition-colors"
            >
              <div className="h-10 w-10 flex items-center justify-center border border-white/[0.06] bg-black shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.name} className="h-5 opacity-90" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {it.name}
                </div>
                <div className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  {it.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Open Source CTA ------------------------------ */

function OpenSource() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="border border-white/[0.06] bg-white/[0.02] p-10 md:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Github className="h-5 w-5 text-purple-400" />
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Apache 2.0 · 8.4k stars
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                The Synthora SDK is open source
              </h2>
              <p className="mt-4 max-w-2xl text-base text-zinc-400 leading-relaxed">
                Run agents on your own infra, audit every line of the runtime,
                and contribute new tool adapters. The cloud is optional.
              </p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors self-start lg:self-auto"
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */

const faqs = [
  {
    q: "How is Synthora different from a framework like LangChain?",
    a: "Frameworks give you primitives. Synthora gives you a complete product surface: the canvas, the SDKs, the eval suite, deploys, and observability. You can still drop down to code at any point.",
  },
  {
    q: "Which models can I use?",
    a: "Any major hosted LLM (OpenAI, Anthropic, Google, Mistral, Cohere) plus open-weights models via your own inference endpoint. You can mix providers per node and configure automatic fallbacks.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. The Synthora runtime is Apache 2.0 and ships as a single Docker image. The cloud workspace is optional — many teams run the runtime in their own VPC and use the cloud only for the editor.",
  },
  {
    q: "How does pricing work?",
    a: "There is a free tier with up to 10k agent runs per month. Paid plans scale by run volume and seats. You bring your own model API keys, so model spend is always at cost.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. We don't train on customer data, period. All requests to providers are routed with their no-training flags enabled by default.",
  },
  {
    q: "Do you offer SOC 2 or HIPAA?",
    a: "Synthora is SOC 2 Type II certified. HIPAA-compatible BAAs are available on enterprise plans, including dedicated single-tenant deployments.",
  },
];

function Faq() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Questions, answered
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Everything else you need to know before pressing deploy.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.06]"
        >
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-sm md:text-base text-white pr-6">
                  {f.q}
                </span>
                <ChevronDown className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */

function FinalCta() {
  return (
    <section className="pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="border border-white/[0.06] bg-white/[0.02] p-12 md:p-20 text-center"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Get started
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ship your first AI app today
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-zinc-400 leading-relaxed">
            Go from prompt to a deployed, evaluated AI app before your coffee
            gets cold. The free tier never expires.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
            >
              Start building free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
            >
              <Search className="h-4 w-4" />
              Read the docs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- Page -------------------------------- */

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroMockup />
      <Features />
      <SplitSection />
      <Testimonials />
      <ModelGrid />
      <Integrations />
      <OpenSource />
      <Faq />
      <FinalCta />
    </>
  );
}
