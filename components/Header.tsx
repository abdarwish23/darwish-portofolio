import Link from "next/link";
import { profile } from "@/data/profile";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Ahmed B. Darwish
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted">
          {profile.links.map((l) => (
            <Link key={l.href} href={l.href} target="_blank" className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="#contact" className="ml-2 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-black hover:opacity-90">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
