type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-signal uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-medium tracking-tight text-paper sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
