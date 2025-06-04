// app/admin/shift-management/assign-shifts/page.tsx
import AssignShifts from '@/components/admin/shift-management/assign-shifts'
import MainLayout from '@/components/layouts/MainLayout'

export const generateMetadata = () => ({
  title: "Assign Shifts | SmartHR",
  description: "Manage and assign employee shifts by department with flexible scheduling options and shift configurations.",
  keywords: [
    "shift assignment",
    "employee scheduling",
    "workforce management",
    "shift planning",
    "staff rotation"
  ]
})

export default function AssignShiftsPage() {
  return (
    <MainLayout>
      <AssignShifts />
    </MainLayout>
  )
}