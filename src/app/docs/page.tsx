"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  Code2,
  Wand2,
  Database,
  ShieldCheck,
  ArrowRight,
  Search,
  Terminal,
  Boxes,
  GitBranch,
  Cpu,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.1 } });

const sections = [
  { icon: Rocket, title: "Quickstart", desc: "Build and deploy your first agent in 90 seconds." },
  { icon: Wand2, title: "Prompt-to-app", desc: "How natural-language scaffolding works under the hood." },
  { icon: Boxes, title: "Agents & tools", desc: "Composing reasoning loops, tool-use, and handoffs." },
  { icon: Cpu, title: "Models", desc: "Provider matrix, routing rules, and fallback patterns." },
  { icon: Database, title: "Memory & RAG", desc: "Vector stores, hybrid search, citations, and TTLs." },
  { icon: Code2, title: "SDKs", desc: "TypeScript, Python, Go, and a typed REST API." },
  { icon: GitBranch, title: "Versioning", desc: "Git-backed deploys, rollbacks, and PR previews." },
  { icon: Terminal, title: "CLI reference", desc: "Every flag for `synthora` and `synthora deploy`." },
  { icon: ShieldCheck, title: "Security", desc: "Encryption, key rotation, SOC 2, and HIPAA." },
];

const guides = [
  {
    title: "Build a customer support agent",
    desc: "From inbox to refunds — wiring tools, memory, and evals.",
    time: "12 min read",
  },
  {
    title: "Add RAG to any agent",
    desc: "Plug Pinecone, Supabase, or your own vector store.",
    time: "8 min read",
  },
  {
    title: "Production-grade evals",
    desc: "Score quality, hallucination rate, and latency on every commit.",
    time: "15 min read",
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Documentation
            </div>
          </motion.div>
          <motion.h1
            {...stagger(1)}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Build with Synthora
          </motion.h1>
          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
          >
            Guides, references, and recipes for shipping production AI apps.
          </motion.p>
          <motion.div {...stagger(3)} className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.02] px-4 py-3">
              <Search className="h-4 w-4 text-zinc-500" />
              <span className="text-sm text-zinc-500">
                Search the docs (e.g. "deploy", "RAG", "tool calls")
              </span>
              <kbd className="ml-auto font-mono text-[10px] border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-zinc-500">
                ⌘ K
              </kbd>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Reference
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Browse by topic
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.title}
                  href="#"
                  {...stagger(i)}
                  className="group relative bg-[#000000] p-8 hover:bg-white/[0.02] transition-colors"
                >
                  <Icon className="h-5 w-5 text-purple-400" />
                  <div className="mt-5 flex items-center gap-1 text-lg font-semibold text-white">
                    {s.title}
                    <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Recipes
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Hands-on guides
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              End-to-end walkthroughs for the patterns we see most often in
              production.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <motion.a
                key={g.title}
                href="#"
                {...stagger(i)}
                className="border border-white/[0.06] bg-white/[0.02] p-8 hover:border-white/[0.1] transition-colors"
              >
                <BookOpen className="h-5 w-5 text-purple-400" />
                <h3 className="mt-5 text-base font-semibold text-white">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {g.desc}
                </p>
                <div className="mt-6 text-xs font-mono text-zinc-600">
                  {g.time}
                </div>
              </motion.a>
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
              Need a hand?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-zinc-400 leading-relaxed">
              Join 8,000+ AI builders in our community Discord, or open an
              issue on GitHub.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
              >
                Start a workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors"
              >
                Open an issue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
