"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Minus,
  ChevronDown,
  ChevronRight,
  Bot,
  Boxes,
  Cpu,
  Database,
  Wand2,
  Workflow,
  Rocket,
  Layers,
  Code2,
  Play,
  Save,
  Share2,
  Sparkles,
  CornerDownLeft,
  Zap,
  Eye,
  GitBranch,
  Settings,
  History,
  CircleDot,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const projects = [
  { name: "support-agent", active: true, type: "Agent" },
  { name: "lead-qualifier", type: "Agent" },
  { name: "doc-summarizer", type: "Agent" },
  { name: "stripe-tool", type: "Tool" },
  { name: "zendesk-tool", type: "Tool" },
  { name: "customer-memory", type: "Memory" },
];

const files = [
  { n: "agent.ts", active: true },
  { n: "tools/refund.ts" },
  { n: "tools/lookup.ts" },
  { n: "memory/profile.ts" },
  { n: "evals/golden.yaml" },
  { n: "deploy.config.json" },
];

const runHistory = [
  { id: "r_82a4", in: "Refund my last order", ms: 248, status: "ok" },
  { id: "r_82a3", in: "What's my plan?", ms: 192, status: "ok" },
  { id: "r_82a2", in: "Cancel subscription", ms: 314, status: "ok" },
  { id: "r_82a1", in: "Reschedule shipment", ms: 408, status: "warn" },
];

export default function StudioPage() {
  const [tab, setTab] = useState<"canvas" | "code" | "evals">("canvas");

  return (
    <section className="px-4 md:px-6 py-6">
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-[1400px] border border-white/[0.08] bg-[#0a0a0a]"
      >
        {/* Top toolbar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="ml-3 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span>synthora.app/studio/</span>
              <span className="text-purple-400">support-agent</span>
              <span className="text-zinc-700">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <CircleDot className="h-3 w-3" />
                draft
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {(
              [
                { k: "canvas", l: "Canvas", i: Workflow },
                { k: "code", l: "Code", i: Code2 },
                { k: "evals", l: "Evals", i: Eye },
              ] as const
            ).map((t) => {
              const Icon = t.i;
              const active = tab === t.k;
              return (
                <button
                  key={t.k}
                  onClick={() => setTab(t.k)}
                  className={
                    active
                      ? "inline-flex items-center gap-1.5 border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300"
                      : "inline-flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400 hover:bg-white/[0.04]"
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t.l}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.04]">
              <Save className="h-3.5 w-3.5" />
              Save
            </button>
            <button className="hidden md:inline-flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.04]">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
            <button className="inline-flex items-center gap-1.5 bg-purple-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-purple-700">
              <Rocket className="h-3.5 w-3.5" />
              Deploy
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 min-h-[760px]">
          {/* Left sidebar */}
          <aside className="hidden lg:flex col-span-3 flex-col border-r border-white/[0.06] bg-black/40">
            <div className="p-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5">
                <Search className="h-3.5 w-3.5 text-zinc-500" />
                <input
                  placeholder="Search projects"
                  className="bg-transparent border-0 text-xs text-zinc-300 placeholder:text-zinc-600 focus:outline-none flex-1"
                />
                <kbd className="font-mono text-[10px] border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 text-zinc-500">
                  ⌘K
                </kbd>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-3 border-b border-white/[0.06]">
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

            <div className="p-3 border-b border-white/[0.06]">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                  Workspace
                </div>
                <button className="text-zinc-500 hover:text-white">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <ul className="space-y-0.5">
                {projects.map((p) => (
                  <li
                    key={p.name}
                    className={
                      p.active
                        ? "flex items-center justify-between bg-purple-500/10 border-l-2 border-purple-500 px-2 py-1.5 font-mono text-[11px] text-purple-300"
                        : "flex items-center justify-between px-2 py-1.5 font-mono text-[11px] text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                    }
                  >
                    <span className="truncate">{p.name}</span>
                    <span className="text-[10px] text-zinc-600">{p.type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-600 mb-2">
                <ChevronDown className="h-3 w-3" />
                Files
              </div>
              <ul className="space-y-0.5">
                {files.map((f) => (
                  <li
                    key={f.n}
                    className={
                      f.active
                        ? "flex items-center gap-2 bg-white/[0.04] px-2 py-1.5 font-mono text-[11px] text-white"
                        : "flex items-center gap-2 px-2 py-1.5 font-mono text-[11px] text-zinc-500 hover:text-zinc-300"
                    }
                  >
                    <Code2 className="h-3 w-3" />
                    {f.n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto p-3 flex items-center justify-between text-[10px] text-zinc-600">
              <span className="inline-flex items-center gap-1">
                <GitBranch className="h-3 w-3" />
                main
              </span>
              <span className="inline-flex items-center gap-1">
                <Settings className="h-3 w-3" />
                synced 2m ago
              </span>
            </div>
          </aside>

          {/* Canvas */}
          <div className="col-span-12 lg:col-span-6 relative min-h-[640px] overflow-hidden">
            {tab === "canvas" && <CanvasView />}
            {tab === "code" && <CodeView />}
            {tab === "evals" && <EvalsView />}
          </div>

          {/* Right inspector */}
          <aside className="hidden lg:flex col-span-3 flex-col border-l border-white/[0.06] bg-black/40">
            <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                Inspector
              </div>
              <span className="font-mono text-[10px] text-purple-400">
                planner-agent
              </span>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto">
              <div>
                <div className="text-[11px] text-zinc-500 mb-1">Model</div>
                <div className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-zinc-200">
                  <span className="font-mono">claude-sonnet-4</span>
                  <ChevronDown className="h-3 w-3 text-zinc-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[11px] text-zinc-500 mb-1">Temp</div>
                  <div className="border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs font-mono text-zinc-200">
                    0.2
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 mb-1">Max</div>
                  <div className="border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs font-mono text-zinc-200">
                    4096
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 mb-1">System prompt</div>
                <div className="border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11px] text-zinc-400 leading-relaxed font-mono">
                  You are a friendly support agent. Resolve refunds, escalate
                  edge cases, never guess.
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 mb-2">Connected tools</div>
                <ul className="space-y-1.5">
                  {[
                    { n: "stripe.refund", c: Boxes },
                    { n: "stripe.lookup", c: Boxes },
                    { n: "zendesk.note", c: Boxes },
                    { n: "memory.fetch", c: Database },
                  ].map(({ n, c: Icon }) => (
                    <li
                      key={n}
                      className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px] text-zinc-300"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="h-3 w-3 text-purple-400" />
                        {n}
                      </span>
                      <ChevronRight className="h-3 w-3 text-zinc-600" />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[11px] text-zinc-500 mb-2">Recent runs</div>
                <ul className="space-y-1.5">
                  {runHistory.map((r) => (
                    <li
                      key={r.id}
                      className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[11px]"
                    >
                      <span className="font-mono text-zinc-400 truncate max-w-[140px]">
                        {r.in}
                      </span>
                      <span
                        className={
                          r.status === "ok"
                            ? "font-mono text-emerald-400 text-[10px]"
                            : "font-mono text-yellow-400 text-[10px]"
                        }
                      >
                        {r.ms}ms
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto p-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-600">
              <span className="inline-flex items-center gap-1">
                <Zap className="h-3 w-3" />
                last run · 248ms
              </span>
              <span>p50 · 220ms</span>
            </div>
          </aside>
        </div>

        {/* Bottom prompt bar */}
        <div className="border-t border-white/[0.06] p-3">
          <div className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.02] px-3 py-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <input
              placeholder="Describe a change in plain English… e.g. 'add a refund tool with a $50 cap'"
              className="bg-transparent border-0 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none flex-1"
            />
            <kbd className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-zinc-500">
              <CornerDownLeft className="h-3 w-3" />
              run
            </kbd>
          </div>
        </div>
      </motion.div>

      {/* Below the studio: feature reminder strip */}
      <div className="mx-auto max-w-[1400px] mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
        {[
          {
            i: Wand2,
            t: "Edit by prompt",
            d: "Type a change. The graph and code update together.",
          },
          {
            i: History,
            t: "Time-travel debugging",
            d: "Replay any past run, step by step, with full traces.",
          },
          {
            i: Rocket,
            t: "One-click deploy",
            d: "Ship a versioned HTTP endpoint to 25+ regions.",
          },
        ].map(({ i: Icon, t, d }) => (
          <div
            key={t}
            className="bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
          >
            <Icon className="h-5 w-5 text-purple-400" />
            <h3 className="mt-4 text-base font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] mt-10 mb-12 text-center">
        <a
          href="/sign-up"
          className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
        >
          Open this in your workspace
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------------- Canvas / Code / Evals views ---------------------- */

function CanvasView() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 60% 40%, rgba(168,85,247,0.10) 0%, transparent 60%), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 22px 22px",
      }}
    >
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path
          d="M 18% 22% C 30% 22%, 30% 44%, 44% 44%"
          stroke="rgba(168,85,247,0.25)"
          strokeDasharray="6 4"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 56% 44% C 68% 44%, 68% 22%, 80% 22%"
          stroke="rgba(168,85,247,0.25)"
          strokeDasharray="6 4"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 56% 44% C 68% 44%, 68% 70%, 82% 70%"
          stroke="rgba(168,85,247,0.25)"
          strokeDasharray="6 4"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 50% 56% C 50% 72%, 38% 72%, 28% 82%"
          stroke="rgba(168,85,247,0.25)"
          strokeDasharray="6 4"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>

      {/* trigger */}
      <FloatingCard
        x="6%"
        y="14%"
        kind="Trigger"
        title="User message"
        sub="inbound.text"
        Icon={Sparkles}
      />

      {/* planner */}
      <FloatingCard
        x="38%"
        y="36%"
        kind="Agent"
        title="Planner · Claude"
        sub="plan → tools → reply"
        Icon={Bot}
        running
        emphasized
      />

      {/* tool 1 */}
      <FloatingCard
        x="74%"
        y="14%"
        kind="Tool"
        title="stripe.refund"
        sub="amount, reason"
        Icon={Boxes}
      />

      {/* tool 2 */}
      <FloatingCard
        x="76%"
        y="62%"
        kind="Tool"
        title="zendesk.note"
        sub="ticket, message"
        Icon={Boxes}
      />

      {/* memory */}
      <FloatingCard
        x="20%"
        y="74%"
        kind="Memory"
        title="customer.profile"
        sub="last 30 days"
        Icon={Database}
      />

      {/* zoom */}
      <div className="absolute bottom-4 right-4 flex flex-col border border-white/[0.08] bg-[#0a0a0a]">
        <button className="p-1.5 text-zinc-400 hover:text-white border-b border-white/[0.06]">
          <Plus className="h-3.5 w-3.5" />
        </button>
        <button className="p-1.5 text-zinc-400 hover:text-white">
          <Minus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[10px] text-zinc-500">
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
            Space
          </kbd>
          <span className="ml-1">Pan</span>
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
  );
}

function FloatingCard({
  x,
  y,
  kind,
  title,
  sub,
  Icon,
  running,
  emphasized,
}: {
  x: string;
  y: string;
  kind: string;
  title: string;
  sub: string;
  Icon: React.ComponentType<{ className?: string }>;
  running?: boolean;
  emphasized?: boolean;
}) {
  return (
    <div
      style={{ left: x, top: y }}
      className={
        emphasized
          ? "absolute w-[210px] border border-purple-500/30 bg-purple-500/5 p-3 shadow-lg shadow-purple-500/10"
          : "absolute w-[190px] border border-white/[0.08] bg-[#0a0a0a] p-3"
      }
    >
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-purple-400">
        <Icon className="h-3 w-3" />
        {kind}
      </div>
      <div className="mt-1.5 text-xs text-white">{title}</div>
      <div className="mt-1 font-mono text-[10px] text-zinc-500">{sub}</div>
      {running && (
        <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Running
        </div>
      )}
    </div>
  );
}

function CodeView() {
  return (
    <div className="absolute inset-0 overflow-auto p-6 bg-[#000000]">
      <pre className="font-mono text-[12.5px] leading-relaxed">
        <span className="text-zinc-500">{`// agent.ts — generated by Synthora`}</span>
        {"\n"}
        <span className="text-purple-400">import</span>{" "}
        <span className="text-zinc-300">{`{ defineAgent, tool }`}</span>{" "}
        <span className="text-purple-400">from</span>{" "}
        <span className="text-emerald-400">"synthora"</span>;{"\n"}
        <span className="text-purple-400">import</span>{" "}
        <span className="text-zinc-300">{`{ stripe }`}</span>{" "}
        <span className="text-purple-400">from</span>{" "}
        <span className="text-emerald-400">"./tools/refund"</span>;{"\n\n"}
        <span className="text-purple-400">export</span>{" "}
        <span className="text-purple-400">default</span>{" "}
        <span className="text-yellow-300">defineAgent</span>(
        <span className="text-zinc-300">{"{"}</span>
        {"\n  name: "}
        <span className="text-emerald-400">"support-agent"</span>
        {",\n  model: "}
        <span className="text-emerald-400">"claude-sonnet-4"</span>
        {",\n  temperature: "}
        <span className="text-orange-300">0.2</span>
        {",\n  system: "}
        <span className="text-emerald-400">{`\``}</span>
        {"\n    "}
        <span className="text-emerald-400">
          You are a friendly support agent.
        </span>
        {"\n    "}
        <span className="text-emerald-400">
          Resolve refunds, escalate edge cases, never guess.
        </span>
        {"\n  "}
        <span className="text-emerald-400">{`\``}</span>
        {",\n  tools: ["}
        <span className="text-sky-300">stripe</span>
        {".refund, "}
        <span className="text-sky-300">stripe</span>
        {".lookup],\n  memory: { kind: "}
        <span className="text-emerald-400">"per-user"</span>
        {", ttl: "}
        <span className="text-emerald-400">"30d"</span>
        {" },\n"}
        <span className="text-zinc-300">{"});"}</span>
      </pre>
    </div>
  );
}

function EvalsView() {
  const rows = [
    { name: "refund_happy_path", score: 0.98, latency: 212, status: "pass" },
    { name: "refund_no_order", score: 0.95, latency: 198, status: "pass" },
    { name: "refund_over_limit", score: 0.91, latency: 244, status: "pass" },
    { name: "lookup_unknown", score: 0.74, latency: 188, status: "warn" },
    { name: "escalate_edge_case", score: 0.96, latency: 322, status: "pass" },
    { name: "hallucination_check", score: 0.99, latency: 152, status: "pass" },
  ];
  return (
    <div className="absolute inset-0 overflow-auto p-6 bg-[#000000]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            Eval suite
          </div>
          <h3 className="mt-1 text-xl font-bold text-white">
            golden.yaml · 6 cases
          </h3>
        </div>
        <button className="inline-flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.04]">
          <Play className="h-3.5 w-3.5 text-purple-400" />
          Run all
        </button>
      </div>

      <div className="border border-white/[0.06]">
        <div className="grid grid-cols-12 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-600 border-b border-white/[0.06] font-mono">
          <div className="col-span-6">Case</div>
          <div className="col-span-2">Score</div>
          <div className="col-span-2">Latency</div>
          <div className="col-span-2">Status</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-12 px-4 py-3 text-xs border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02]"
          >
            <div className="col-span-6 font-mono text-zinc-300">{r.name}</div>
            <div className="col-span-2 font-mono text-white">{r.score.toFixed(2)}</div>
            <div className="col-span-2 font-mono text-zinc-400">{r.latency}ms</div>
            <div className="col-span-2">
              <span
                className={
                  r.status === "pass"
                    ? "inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400"
                    : "inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-[10px] text-yellow-400"
                }
              >
                <span
                  className={
                    r.status === "pass"
                      ? "h-1.5 w-1.5 rounded-full bg-emerald-400"
                      : "h-1.5 w-1.5 rounded-full bg-yellow-400"
                  }
                />
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
