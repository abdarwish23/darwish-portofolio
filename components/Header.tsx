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
          <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/patents" className="hover:text-white transition-colors">Patents</Link>
          {profile.links.map((l) => (
            <Link key={l.href} href={l.href} target="_blank" className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/docs/CV_AHMED_DARWISH_21092025.pdf" target="_blank" className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10">
            Download CV
          </Link>
          <Link href="#contact" className="ml-2 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-black hover:opacity-90">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
