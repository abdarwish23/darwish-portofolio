import Image from "next/image";
import { profile } from "@/data/profile";

export default function Awards() {
  return (
    <section id="awards" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Awards & Recognition</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {profile.awards.map((a) => (
            <article key={a.title} className="card overflow-hidden">
              {a.image ? (
                <div className="relative h-64 w-full">
                  <Image src={a.image} alt={a.title} fill className="object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <h3 className="text-lg font-medium">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{a.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-accent text-sm hover:underline">View</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
