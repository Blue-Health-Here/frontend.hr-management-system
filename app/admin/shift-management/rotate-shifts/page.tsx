import React from 'react'
import RotateShifts from '@/components/admin/shift-management/rotate-shifts'
import AdminLayout from '@/components/layouts/AdminLayout'

const page = () => {
  return (
    <AdminLayout>
      <RotateShifts />
    </AdminLayout>
  )
}

export default page