"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 py-16">
      <motion.div
        {...fadeUp}
        className="w-full max-w-md border border-white/[0.06] bg-white/[0.02] p-10"
      >
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            Reset password
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Forgot your password?
          </h1>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
            Enter the email tied to your account. We'll send you a secure link
            to set a new password.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full border border-white/[0.08] bg-black px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
          >
            Send reset link
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <Link
          href="/sign-in"
          className="mt-6 inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to sign in
        </Link>
      </motion.div>
    </section>
  );
}
