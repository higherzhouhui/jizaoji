export function SectionIntro({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-xs font-semibold tracking-[0.28em] text-brass">{index}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">{lede}</p>
    </div>
  );
}
