// app/admin/leaves/page.tsx
import LeavesView from "@/components/admin/leaves";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Leaves | SmartHR",
  description: "Track and manage employee leaves with status overview, filtering options, and approval workflows.",
  keywords: [
    "leave management",
    "employee leaves",
    "leave tracker",
    "HR system",
    "leave approval"
  ]
});

export default function LeavesPage() {
  return (
    <MainLayout>
      <LeavesView />
    </MainLayout>
  );
}