import { profile } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Achievements & Patents</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {profile.achievements.map((a) => (
            <div key={a.title} className="card p-6">
              <h3 className="text-lg font-medium">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{a.description}</p>
              {a.link ? (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-accent text-sm hover:underline">View</a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
