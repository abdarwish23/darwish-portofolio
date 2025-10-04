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
        <div className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
          <p className="text-sm text-slate-300 leading-relaxed">
            Excellence has been a defining thread throughout my journey in life, beginning in elementary school where I consistently
            ranked among the top 5 students, earning numerous Academic Excellence Certificates and Good Conduct and Behavior Certificates—a pattern that continued through intermediate and secondary education, and throughout my college years, culminating in my graduation with a degree in Electrical and Computer Engineering from Egypt. This
            collection of achievements—carefully preserved in a folder I carry with me wherever I go—represents more than
            accolades; it embodies a lifelong commitment to continuous learning and excellence. Throughout my professional
            career, I have earned recognition from leading organizations including STC, and completed prestigious certifications
            such as IBM&apos;s Data Science Professional Certificate, PMP, Leadership Development programs, and NEBOSH Health &
            Safety credentials, among many others. Each certificate and award reflects not just achievement, but a dedication
            to mastery and professional growth that continues to drive my work in AI innovation today.
          </p>
        </div>
      </div>
    </section>
  );
}
