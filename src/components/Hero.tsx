import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(61,220,151,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(61,220,151,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24 lg:pb-28">
        <div>
          <motion.p
            className="font-mono text-xs tracking-[0.22em] text-signal uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.title}
          </motion.p>
          <motion.h1
            className="mt-4 max-w-xl text-5xl leading-[1.05] font-medium tracking-tight text-paper sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="mt-5 font-mono text-sm text-gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {profile.disciplines.join(" · ")}
          </motion.p>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {profile.summary}
          </motion.p>
          <motion.p
            className="mt-4 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {profile.location}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <a
              href="#work"
              className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink"
            >
              View the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-paper transition-colors hover:border-signal"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        <motion.figure
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute -inset-3 rounded-sm border border-line" />
          <img
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            className="relative aspect-[3/4] w-full rounded-sm object-cover object-top"
          />
          <figcaption className="absolute bottom-4 left-4 bg-ink/80 px-3 py-1.5 font-mono text-[11px] tracking-widest text-signal uppercase backdrop-blur-sm">
            {profile.location.split(",")[0]}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
