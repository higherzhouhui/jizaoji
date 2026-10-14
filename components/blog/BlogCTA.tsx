import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function BlogCTA() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-mute">
          <Tx>有技术或业务问题？欢迎</Tx>
          <Link href="/contact" className="mx-1 text-accent font-semibold hover:text-accent">
            <Tx>联系我们</Tx>
          </Link>
          <Tx>交流</Tx>
        </p>
      </div>
    </section>
  );
}
