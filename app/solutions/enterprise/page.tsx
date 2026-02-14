import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnterpriseHero } from "@/components/solutions/enterprise/EnterpriseHero";
import { EnterpriseArch } from "@/components/solutions/enterprise/EnterpriseArch";
import {
  EnterpriseModules,
  EnterpriseScenarios,
  EnterpriseCaseStudy,
  EnterpriseCTA,
} from "@/components/solutions/enterprise/EnterpriseModules";
import { EnterpriseProductSync } from "@/components/solutions/enterprise/EnterpriseProductSync";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业/办公解决方案",
  description:
    "企业协同与数字化办公：IM、文档、会议、审批、考勤、CRM 与安全集成，从协作到管控一体化提升组织效率与合规。",
};

export default function EnterpriseSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <EnterpriseHero />
        <EnterpriseArch />
        <EnterpriseModules />
        <EnterpriseScenarios />
        <EnterpriseCaseStudy />
        <EnterpriseProductSync />
        <EnterpriseCTA />
      </main>
      <Footer />
    </>
  );
}
