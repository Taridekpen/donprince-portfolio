import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="The toolkit behind the dashboards." />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.skills.map((skill, index) => (
          <Reveal key={skill.group} delay={index * 0.05}>
            <article className="h-full border border-line bg-panel/50 p-6">
              <h3 className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                {skill.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-3 py-1 text-sm text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
