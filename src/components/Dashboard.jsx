import React from 'react'
//import DashboardStartsGrid from './DashboardStartsGrid'
//import OverviewChart from './OverviewChart'
import PotholeShow from './PotholeShow'
import potholimg from './image/pothol.jpg'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 ' >
     {/* <DashboardStartsGrid /> */}
      <div className="flex flex-row gap-4 flex-wrap">
        <PotholeShow src={potholimg}/>
        <PotholeShow />
        <PotholeShow />
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        <PotholeShow src={potholimg}/>
        <PotholeShow />
        <PotholeShow />
      </div>
    </div>
  )
}

export default Dashboard