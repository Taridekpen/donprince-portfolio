import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile } from "../data/profile";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.1,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ProofStrip() {
  return (
    <section aria-label="Selected figures" className="border-y border-line">
      <dl className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
        {profile.proof.map((item) => (
          <div key={item.label} className="bg-ink px-6 py-8">
            <dt className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
              {item.label}
            </dt>
            <dd className="mt-3 font-mono text-4xl text-gold">
              {item.prefix}
              <CountUp value={item.value} />
              {item.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
