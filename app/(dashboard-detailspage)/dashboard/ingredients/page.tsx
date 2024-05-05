'use client'

import DbLayout from "@/components/db-header"
import IngredientCard from "@/components/organisms/ingredients"


const Glasss: React.FC = () => {
  return (
    <>
    <DbLayout header="Creat An Ingredient">

      <IngredientCard  />
    </DbLayout>
    </>
  )

}

export default Glasss