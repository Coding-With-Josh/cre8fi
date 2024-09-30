import { DashboardMenu } from "@/components/gen/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardMenu>{children}</DashboardMenu>;
};

export default DashboardLayout;
