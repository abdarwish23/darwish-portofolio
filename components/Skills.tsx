import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Core Competencies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {profile.skills.map((s) => (
            <div key={s.category} className="card p-6">
              <h3 className="font-medium text-white/90">{s.category}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
