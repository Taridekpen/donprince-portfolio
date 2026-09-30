import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { projects, type Project } from "../data/projects";
import { CaseStudy } from "./CaseStudy";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="work" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Studies with a number attached."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <motion.button
                type="button"
                onClick={() => setActive(project)}
                className="group flex h-full w-full flex-col overflow-hidden border border-line bg-ink text-left"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={project.images[0].src}
                  alt=""
                  className="aspect-[16/10] w-full object-cover object-left-top"
                />
                <span className="flex flex-1 flex-col px-5 py-5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-signal uppercase">
                    {project.eyebrow}
                  </span>
                  <span className="mt-3 text-xl font-medium tracking-tight text-paper">
                    {project.title}
                  </span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </span>
                  <span className="mt-5 flex items-center justify-between font-mono text-xs text-gold">
                    {project.metric}
                    <span className="text-muted transition-colors group-hover:text-signal">
                      Open study
                    </span>
                  </span>
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
      <CaseStudy project={active} onClose={close} />
    </section>
  );
}
