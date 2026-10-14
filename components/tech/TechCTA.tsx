import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function TechCTA() {
  return (
    <section className="py-20 sm:py-24 bg-raised">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          <Tx>技术驱动交付，质量保障上线</Tx>
        </h2>
        <p className="mt-4 text-mute">
          <Tx>有技术栈或流程上的疑问？欢迎交流</Tx>
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-ink transition hover:opacity-90"
        >
          <Tx>免费咨询</Tx>
        </Link>
      </div>
    </section>
  );
}
