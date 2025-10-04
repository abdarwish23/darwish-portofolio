import { patents } from "@/data/patents";
import Link from "next/link";

export const metadata = {
  title: "Granted Patents — Ahmed B. Darwish",
  description: "Granted patents and applications by Ahmed Bahaaeldin Darwish."
};

export default function PatentsPage() {
  return (
    <main className="section">
      <div className="container">
        <Link href="/" className="inline-flex items-center text-sm text-muted hover:text-white mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Granted Patents</h1>
        <p className="mt-2 text-muted max-w-prose">Granted patents and application records related to AI, blockchain, and telecommunications.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {patents.map((p) => (
            <article key={(p.number || p.title)} className="card p-6">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              {p.number ? <div className="mt-1 text-sm text-slate-300">{p.number}</div> : null}
              {p.patentTitle ? <p className="mt-2 text-sm font-medium text-slate-200">{p.patentTitle}</p> : null}
              {p.summary ? <p className="mt-2 text-sm text-slate-300">{p.summary}</p> : null}
              <div className="mt-4 flex gap-3">
                {p.pdf ? (
                  <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10">View PDF</a>
                ) : null}
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-black hover:opacity-90">USPTO Link</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
