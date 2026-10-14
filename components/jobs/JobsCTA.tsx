import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function JobsCTA() {
  return (
    <section className="py-20 sm:py-24 bg-raised">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          <Tx>期待与你一起打造数字产品</Tx>
        </h2>
        <p className="mt-4 text-mute">
          <Tx>投递简历或咨询职位，我们会尽快与你联系</Tx>
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-ink transition hover:opacity-90"
          >
            <Tx>投递简历 / 咨询职位</Tx>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-line px-8 py-4 text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-raised"
          >
            <Tx>了解我们</Tx>
          </Link>
        </div>
      </div>
    </section>
  );
}
