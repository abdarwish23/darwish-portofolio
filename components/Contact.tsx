import Link from "next/link";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Let’s build your next breakthrough</h2>
          <p className="mt-2 text-slate-300">
            I’m open to high-impact roles, consulting engagements, and freelance projects.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-black font-medium shadow-soft">Email Me</a>
            <Link href={profile.links.find(l=>l.label==="LinkedIn")?.href || "#"} target="_blank" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-white font-medium hover:bg-white/10">LinkedIn</Link>
            <Link href={profile.links.find(l=>l.label==="GitHub")?.href || "#"} target="_blank" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-white font-medium hover:bg-white/10">GitHub</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
