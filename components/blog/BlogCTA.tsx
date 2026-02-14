import Link from "next/link";

export function BlogCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-slate-600">
          有技术或业务问题？欢迎
          <Link href="/contact" className="mx-1 text-cyan-600 font-semibold hover:text-cyan-700">
            联系我们
          </Link>
          交流
        </p>
      </div>
    </section>
  );
}
