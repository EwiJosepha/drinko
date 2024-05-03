'use client'

import DbLayout from "@/components/db-header"
import GlassCard from "@/components/organisms/glass"
import Glass from "@/components/organisms/glass"

const Glasss: React.FC = () => {
  return (
    <>
    <DbLayout header="Creat A Glass">

      <GlassCard />
    </DbLayout>
    </>
  )

}

export default Glasss