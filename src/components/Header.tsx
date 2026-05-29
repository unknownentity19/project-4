"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Wand2,
  Workflow,
  Cpu,
  Rocket,
  BookOpen,
  GitBranch,
  LayoutTemplate,
  Code2,
  Building2,
  CreditCard,
  Mail,
  Briefcase,
} from "lucide-react";

type DropItem = {
  label: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const product: DropItem[] = [
  { label: "Studio", href: "/studio", desc: "Visual agent canvas", icon: Wand2 },
  { label: "Agents", href: "/features", desc: "Reasoning + tool use", icon: Workflow },
  { label: "Models", href: "/features", desc: "Plug any LLM provider", icon: Cpu },
  { label: "Deploy", href: "/features", desc: "One-click to production", icon: Rocket },
];

const resources: DropItem[] = [
  { label: "Documentation", href: "/docs", desc: "Guides + API reference", icon: BookOpen },
  { label: "Changelog", href: "/changelog", desc: "What shipped this week", icon: GitBranch },
  { label: "Templates", href: "/docs", desc: "Starter agent recipes", icon: LayoutTemplate },
  { label: "Examples", href: "/docs", desc: "Open-source apps", icon: Code2 },
];

const company: DropItem[] = [
  { label: "About", href: "/about", desc: "Our mission and team", icon: Building2 },
  { label: "Pricing", href: "/pricing", desc: "Plans for every stage", icon: CreditCard },
  { label: "Contact", href: "/about", desc: "Talk to the team", icon: Mail },
  { label: "Careers", href: "/about", desc: "Open roles", icon: Briefcase },
];

function Dropdown({
  label,
  items,
  open,
  onEnter,
  onLeave,
}: {
  label: string;
  items: DropItem[];
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors h-14 px-3">
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full -translate-x-1/2 z-50 w-72 rounded-xl border border-white/[0.08] bg-[#0a0a0a]/98 backdrop-blur-xl p-2 shadow-2xl"
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.04] transition-colors"
                >
                  <Icon className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-white">{item.label}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-white/[0.08] bg-[#000000]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex h-full items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Synthora" width={120} height={32} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors h-14 inline-flex items-center px-3"
          >
            Home
          </Link>
          <Dropdown
            label="Product"
            items={product}
            open={openMenu === "product"}
            onEnter={() => setOpenMenu("product")}
            onLeave={() => setOpenMenu(null)}
          />
          <Dropdown
            label="Resources"
            items={resources}
            open={openMenu === "resources"}
            onEnter={() => setOpenMenu("resources")}
            onLeave={() => setOpenMenu(null)}
          />
          <Dropdown
            label="Company"
            items={company}
            open={openMenu === "company"}
            onEnter={() => setOpenMenu("company")}
            onLeave={() => setOpenMenu(null)}
          />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="border border-white/[0.1] px-4 py-1.5 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors"
          >
            Sign up
          </Link>
        </div>

        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {openMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-14 bg-[#000000] z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  Product
                </div>
                <div className="flex flex-col">
                  {product.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpenMobile(false)}
                      className="py-3 text-zinc-300 hover:text-white border-b border-white/[0.06]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  Resources
                </div>
                <div className="flex flex-col">
                  {resources.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpenMobile(false)}
                      className="py-3 text-zinc-300 hover:text-white border-b border-white/[0.06]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  Company
                </div>
                <div className="flex flex-col">
                  {company.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpenMobile(false)}
                      className="py-3 text-zinc-300 hover:text-white border-b border-white/[0.06]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/sign-in"
                  onClick={() => setOpenMobile(false)}
                  className="border border-white/[0.1] px-6 py-3 text-sm text-zinc-200 hover:bg-white/[0.04] transition-colors text-center"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setOpenMobile(false)}
                  className="bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors text-center"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
