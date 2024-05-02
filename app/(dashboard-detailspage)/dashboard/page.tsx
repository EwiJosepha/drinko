import DbLayout from '@/components/db-header'
import React from 'react'

const Dashboard: React.FC = () => {
  return (

    <>

      <DbLayout header="Dashboard" only_header>
        <div>
          <h1 className='text-white'>Hello there Hello there Hello thereHello there</h1>
        </div>
      </DbLayout>

    </>

  )
}

export default Dashboard
