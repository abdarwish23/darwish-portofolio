import Image from "next/image";
import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Highlighted Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {profile.projects.map((p) => (
            <article key={p.title} className="card overflow-hidden">
              {p.image ? (
                <div className="relative h-64 w-full">
                  {/* Place images into public/images/ to make these work */}
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
          <p className="text-sm text-slate-300 leading-relaxed">
            The projects showcased above represent some of my recent work over the past 4 years in AI and telecommunications.
            I have designed, developed, and deployed many additional projects spanning automation, data analytics, computer vision,
            and network optimization—many of which are proprietary to the companies I've worked with and cannot be publicly shared.
            These highlighted projects demonstrate my approach to solving complex challenges through cutting-edge technology, though
            they represent only a portion of the work I've accomplished throughout my career.
          </p>
        </div>
      </div>
    </section>
  );
}
