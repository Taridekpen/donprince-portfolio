import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name}
          <span className="text-signal">.</span> {profile.title}
        </p>
        <p className="font-mono text-xs">Port Harcourt</p>
      </div>
    </footer>
  );
}
