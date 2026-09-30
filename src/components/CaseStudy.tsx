import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import type { Project } from "../data/projects";

type CaseStudyProps = {
  project: Project | null;
  onClose: () => void;
};

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-line bg-panel shadow-2xl sm:rounded-sm"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-panel/95 px-6 py-4 backdrop-blur-sm">
              <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                {project.eyebrow}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="font-mono text-xs tracking-widest text-muted uppercase hover:text-paper"
              >
                Close
              </button>
            </div>
            <div className="space-y-8 px-6 py-8">
              <div>
                <h3 id={titleId} className="text-3xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 font-mono text-sm text-gold">{project.metric}</p>
              </div>
              {project.images.map((image) => (
                <figure key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-sm border border-line"
                  />
                  <figcaption className="mt-2 font-mono text-xs text-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
              <dl className="space-y-6">
                <div>
                  <dt className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                    Question
                  </dt>
                  <dd className="mt-2 leading-relaxed text-paper">
                    {project.question}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                    What was built
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    {project.built}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                    Finding
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    {project.finding}
                  </dd>
                </div>
              </dl>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
