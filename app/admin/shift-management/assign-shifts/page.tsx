import AssignShifts from '@/components/admin/shift-management/assign-shifts'
import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
      <AssignShifts />
    </MainLayout>
  )
}

export default page