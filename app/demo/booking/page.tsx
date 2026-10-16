import { BookingDemo } from "@/components/demo/BookingDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【演示】预约 H5 | Booking H5 Demo",
  description: "演示项目：移动优先的预约流程 | Demo: Mobile-first booking flow",
  robots: "noindex",
};

export default function BookingDemoPage() {
  return <BookingDemo />;
}
