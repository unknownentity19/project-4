import Link from "next/link";
import { Github } from "lucide-react";

type FooterLink = { label: string; href?: string };

const productLinks: FooterLink[] = [
  { label: "Studio", href: "/studio" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "Roadmap" },
];

const resourceLinks: FooterLink[] = [
  { label: "Documentation", href: "/docs" },
  { label: "Templates", href: "/docs" },
  { label: "Examples", href: "/docs" },
  { label: "Community" },
  { label: "Support" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy" },
  { label: "Terms" },
  { label: "Security" },
  { label: "DPA" },
  { label: "Cookies" },
];

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.href ? (
              <Link
                href={l.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <span className="text-sm text-zinc-600">{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#000000] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Synthora" width={120} height={32} />
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              The fastest way to build, evaluate, and ship production AI apps.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.15] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <Column title="Product" links={productLinks} />
          <Column title="Resources" links={resourceLinks} />
          <Column title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-600">
          <div>© {new Date().getFullYear()} Synthora Labs, Inc.</div>
          <div>Build AI apps in hours, not months.</div>
        </div>
      </div>
    </footer>
  );
}
