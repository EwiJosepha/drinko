'use client'

import DbLayout from "@/components/db-header"
import CategoryCard from "@/components/organisms/category-card"

const Category: React.FC = () => {
  return (
    <>
    <DbLayout header="Creat Category">

      <CategoryCard />
    </DbLayout>
    </>
  )

}

export default Category