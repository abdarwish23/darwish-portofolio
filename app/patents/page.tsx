import Link from "next/link";
import { patents } from "@/data/patents";

export const metadata = {
  title: "Patents — Ahmed B. Darwish",
  description: "Granted patents and applications by Ahmed Bahaaeldin Darwish."
};

export default function PatentsPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Patents</h1>
        <p className="mt-2 text-muted max-w-prose">Granted patents and application records related to AI, blockchain, and telecommunications.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {patents.map((p) => (
            <article key={(p.number || p.title)} className="card p-6">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              {p.number ? <div className="mt-1 text-sm text-slate-300">{p.number}</div> : null}
              {p.summary ? <p className="mt-2 text-sm text-slate-300">{p.summary}</p> : null}
              <div className="mt-4 flex gap-3">
                {p.pdf ? (
                  <Link href={p.pdf} target="_blank" className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10">View PDF</Link>
                ) : null}
                {p.link ? (
                  <Link href={p.link} target="_blank" className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-black hover:opacity-90">USPTO Link</Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
