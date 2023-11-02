import React from 'react'
//import DashboardStartsGrid from './DashboardStartsGrid'
//import OverviewChart from './OverviewChart'
import PotholeShow from './PotholeShow'
import img1 from './image/img1.jpg'
import img2 from './image/img2.jpg'
import img3 from './image/img3.jpg'
import img4 from './image/img4.jpg'
import img5 from './image/img5.jpg'
import img6 from './image/img6.jpg'

import pothole1 from './image/pothole1.jpg';
import pothole2 from './image/pothole2.jpg';
import pothole3 from './image/pothole3.jpg';
import pothole4 from './image/pothole4.jpg';
import pothole5 from './image/pothole5.jpg';
import pothole6 from './image/pothole6.jpg';

const Dashboard = () => {
  return (
    
      <div className='flex flex-col gap-6 ' >
     {/* <DashboardStartsGrid /> */}
      <div className="flex flex-row gap-4 flex-wrap">
        <PotholeShow src1={img1} src2={pothole1}/>
        <PotholeShow src1={img2} src2={pothole2}/>
      
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
      <PotholeShow src1={img3} src2={pothole3}/>
        <PotholeShow src1={img4} src2={pothole4}/>
      
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
      <PotholeShow src1={img5} src2={pothole5}/>
        <PotholeShow src1={img6} src2={pothole6}/>
      
      </div>
      
      </div>
      
      
   
  )
}

export default Dashboard