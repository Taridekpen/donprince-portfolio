import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Language", value: profile.language },
  { label: "Available", value: profile.availability },
  { label: "Focus", value: profile.disciplines.join(", ") },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Accounting trained, analysis practiced."
          id="about-heading"
        />
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={0.05}>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {profile.summary} The work below turns those skills into dashboards
            a decision-maker can read: volume, mix, and the number that should
            change the next conversation.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[7rem_1fr] gap-4 py-4"
              >
                <dt className="font-mono text-xs tracking-widest text-signal uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
