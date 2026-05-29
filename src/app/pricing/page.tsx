"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.1 } });

const plans = [
  {
    name: "Hobby",
    price: "$0",
    cadence: "forever",
    desc: "For tinkering, prototypes, and side projects.",
    cta: "Start free",
    highlight: false,
    features: [
      "10,000 agent runs / month",
      "1 workspace, 3 agents",
      "Community support",
      "Bring your own model keys",
      "Public deploys",
    ],
  },
  {
    name: "Team",
    price: "$49",
    cadence: "/ user / month",
    desc: "For teams shipping AI to real users.",
    cta: "Start 14-day trial",
    highlight: true,
    features: [
      "1,000,000 runs / month",
      "Unlimited workspaces & agents",
      "Eval suites + drift alerts",
      "SSO + role-based access",
      "Custom domains, private deploys",
      "Email + Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    desc: "For organizations with scale and compliance needs.",
    cta: "Talk to sales",
    highlight: false,
    features: [
      "Unlimited runs",
      "Single-tenant deployment",
      "HIPAA BAA + custom DPA",
      "Dedicated success engineer",
      "99.99% uptime SLA",
      "Audit logs + SCIM",
    ],
  },
];

const faqs = [
  { q: "Can I change plans later?", a: "Yes. Upgrade, downgrade, or cancel any time. Pro-rated automatically." },
  { q: "Do I need a credit card to start?", a: "No. The Hobby plan is free forever and never asks for a card." },
  { q: "Are model API costs included?", a: "No — you bring your own provider keys, so model spend is always at cost." },
  { q: "Is there a non-profit or student discount?", a: "Yes. Verified students and registered non-profits get 50% off Team." },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Pricing
            </div>
          </motion.div>
          <motion.h1
            {...stagger(1)}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Simple pricing that grows with you
          </motion.h1>
          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed"
          >
            Free to get started. Pay only when your AI app goes to real users.
            Bring your own model keys — we never mark up inference.
          </motion.p>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                {...stagger(i)}
                className={
                  p.highlight
                    ? "relative border border-purple-500/40 bg-gradient-to-b from-purple-500/10 to-transparent p-8"
                    : "border border-white/[0.06] bg-white/[0.02] p-8 hover:border-white/[0.1] transition-colors"
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-[#000000] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                )}
                <div className="text-sm text-zinc-400">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-white">{p.price}</div>
                  <div className="text-xs text-zinc-500">{p.cadence}</div>
                </div>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  {p.desc}
                </p>
                <Link
                  href="/sign-up"
                  className={
                    p.highlight
                      ? "mt-6 w-full inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                      : "mt-6 w-full inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
                  }
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-zinc-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-36">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Pricing questions
            </h2>
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
    </>
  );
}
