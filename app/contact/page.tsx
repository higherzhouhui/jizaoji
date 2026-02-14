import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "极造极 — 免费咨询、获取方案。地址：重庆市江北区观音桥红鼎国际3001，电话、邮箱、微信与在线表单。",
};

type Props = { searchParams: Promise<{ position?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { position } = await searchParams;
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-slate-900">在线咨询</h2>
                <p className="mt-2 text-slate-600">填写表单，我们会尽快与您联系</p>
                <div className="mt-8">
                  <ContactForm initialPosition={position ? decodeURIComponent(position) : undefined} />
                </div>
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
