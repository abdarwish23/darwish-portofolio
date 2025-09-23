import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-6">
          {profile.experiences.map((e) => (
            <div key={e.role + e.company} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">{e.role}</h3>
                <div className="text-sm text-muted">{e.start} — {e.end}</div>
              </div>
              <div className="text-sm text-slate-300">{e.company}{e.location ? ` • ${e.location}` : ""}</div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
                {e.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
