// app/admin/holidays/add/page.tsx
import AddHoliday from "@/components/admin/holidays/add";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Add Holiday | SmartHR",
  description: "Create and configure company holidays with title, date, description and status management for workforce planning.",
  keywords: [
    "add holiday",
    "holiday setup",
    "company calendar",
    "paid time off",
    "work schedule"
  ]
});

export default function AddHolidayPage() {
  return (
    <MainLayout>
      <AddHoliday />
    </MainLayout>
  );
}