import Link from "next/link";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 rounded-md focus-visible:outline-offset-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink text-canvas">
        <span className="font-display text-[13px] font-semibold leading-none">极</span>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.18em] text-ink sm:tracking-[0.22em]">极造极</span>
        {!compact && (
          <span className="mt-1 hidden font-display text-[9px] font-medium uppercase tracking-[0.28em] text-mute sm:block">
            Jizaoji
          </span>
        )}
      </span>
    </Link>
  );
}
