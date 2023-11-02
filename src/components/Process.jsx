import React from 'react'
import video1 from '../components/image/video1.mp4'
const Process = () => {
  return (
    <div>
        <video muted src={video1} className='w-full justify-center' autoplay="true" />
   
    </div>
  )
}

export default Process