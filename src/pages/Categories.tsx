import React from 'react'
import CategoriesHeader from '../components/CategoriesHeader'
import { Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-[19px] py-5 flex w-full">
        <CategoriesHeader />
        <Outlet />
    </div>
  )
}

export default Categories