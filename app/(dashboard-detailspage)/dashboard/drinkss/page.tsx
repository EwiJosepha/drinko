'use client'

import DbLayout from "@/components/db-header"
import DrinkCard from "@/components/organisms/drinks"
import GlassCard from "@/components/organisms/glass"


const Drinksss: React.FC = () => {
  return (
    <>
      <DbLayout header="Creat A Drink">
        <DrinkCard />
      </DbLayout>
    </>
  )

}

export default Drinksss