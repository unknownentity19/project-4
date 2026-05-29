"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const perks = [
  "10,000 free agent runs every month",
  "Bring your own model keys",
  "Deploy to the edge in one click",
];

export default function SignUpPage() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 py-16">
      <motion.div
        {...fadeUp}
        className="w-full max-w-md border border-white/[0.06] bg-white/[0.02] p-10"
      >
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Get started
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create your Synthora account
          </h1>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
            Free forever for hobby projects. No credit card needed.
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-2 text-xs text-zinc-400">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <button className="w-full inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors">
            <Github className="h-4 w-4" />
            Sign up with GitHub
          </button>
          <button className="w-full inline-flex items-center justify-center gap-2 border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors">
            <Mail className="h-4 w-4" />
            Sign up with Google
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-wider text-zinc-600">
          <div className="h-px flex-1 bg-white/[0.06]" />
          or with email
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ada Lovelace"
              className="w-full border border-white/[0.08] bg-black px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="email">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full border border-white/[0.08] bg-black px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 12 characters"
              className="w-full border border-white/[0.08] bg-black px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
          >
            Create account
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </p>
        <p className="mt-3 text-center text-[11px] text-zinc-600 leading-relaxed">
          By creating an account, you agree to our Terms and Privacy Policy.
        </p>
      </motion.div>
    </section>
  );
}
