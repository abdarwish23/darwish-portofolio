import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div>
          <span className="badge">Available for consulting, freelance, and leadership roles</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted max-w-prose">{profile.title}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 max-w-prose">{profile.summary}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-black font-medium shadow-soft">View Projects</a>
            <a href="#experience" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-white font-medium hover:bg-white/10">Experience</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="card p-6">
            <ul className="space-y-3 text-sm">
              <li><strong>Email:</strong> {profile.email}</li>
              <li><strong>Phone:</strong> {profile.phone}</li>
              <li><strong>Location:</strong> {profile.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
