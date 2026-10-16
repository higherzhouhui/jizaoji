import { RestaurantDemo } from "@/components/demo/RestaurantDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【演示】餐厅落地页 | Restaurant Landing Page Demo",
  description: "演示项目：吉隆坡餐厅双语落地页 | Demo: Bilingual restaurant landing page for KL",
  robots: "noindex",
};

export default function RestaurantDemoPage() {
  return <RestaurantDemo />;
}
