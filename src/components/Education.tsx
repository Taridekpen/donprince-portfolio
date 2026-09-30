import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Degree and the certificates that followed."
        />
      </Reveal>
      <ul className="divide-y divide-line border-y border-line">
        {profile.education.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <li className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
              <div>
                <p className="text-lg text-paper">{item.title}</p>
                {item.org ? (
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                ) : null}
              </div>
              {item.dates ? (
                <p className="font-mono text-sm text-gold">{item.dates}</p>
              ) : null}
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
