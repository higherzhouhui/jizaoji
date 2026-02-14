import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FoodHero } from "@/components/solutions/food/FoodHero";
import { FoodArch } from "@/components/solutions/food/FoodArch";
import { FoodModules, FoodScenarios, FoodCaseStudy, FoodCTA } from "@/components/solutions/food/FoodModules";
import { FoodProductSync } from "@/components/solutions/food/FoodProductSync";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "餐饮/生活服务解决方案",
  description:
    "餐饮与生活服务数字化：小程序点餐、外卖对接、排队取号、会员营销、多门店管理，从到店到到家一站式提升坪效与复购。",
  path: "/solutions/food",
});

export default function FoodSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <FoodHero />
        <FoodArch />
        <FoodModules />
        <FoodScenarios />
        <FoodCaseStudy />
        <FoodProductSync />
        <FoodCTA />
      </main>
      <Footer />
    </>
  );
}
