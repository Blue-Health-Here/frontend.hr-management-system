import AssignShifts from '@/components/admin/shift-management/assign-shifts'
import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

const page = () => {
  return (
    <AdminLayout>
      <AssignShifts />
    </AdminLayout>
  )
}

export default page