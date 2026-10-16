import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "说说你的事",
  description:
    "把现在的情况和想要的结果留下。极造极会回复能不能做、建议怎么做。WhatsApp/微信联系，吉隆坡。",
  path: "/contact",
});

type Props = { searchParams: Promise<{ position?: string; from?: string; mode?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { position, from, mode } = await searchParams;
  return (
    <>
      <Header />
      <main>
        <ContactIntro />
        <section className="pb-16">
          <div className="mx-auto grid max-w-page gap-10 px-5 sm:px-6 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm
                initialPosition={position ? decodeURIComponent(position) : undefined}
                fromCase={from}
                mode={mode}
              />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
