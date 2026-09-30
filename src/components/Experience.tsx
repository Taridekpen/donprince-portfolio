import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const role = profile.experience;

  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where the analysis was used." />
        </Reveal>
        <Reveal delay={0.06}>
          <article className="border border-line bg-panel/40 p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-2xl font-medium tracking-tight">{role.role}</h3>
              <p className="font-mono text-sm text-gold">{role.dates}</p>
            </div>
            <p className="mt-2 text-muted">
              {role.org}, {role.place}
            </p>
            <ul className="mt-6 space-y-3">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-paper">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
