import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Available for analyst work."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-xl text-muted">
            {profile.availability}. {profile.language}. Based in {profile.location}.
          </p>
        </Reveal>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                className="group grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:items-baseline"
                {...(channel.label === "LinkedIn"
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
                  {channel.label}
                </span>
                <span className="text-lg text-paper transition-colors group-hover:text-signal">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
